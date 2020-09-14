import React from 'react';
import * as Yup from 'yup';

import {
  useCreateExperimentMutation,
  ExperimentsDocument,
  ExperimentPage,
} from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';
import ModalForm from '../../components/ModalForm';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTags from '../../components/FormTags';

interface Props {
  closeModal: (reload: boolean) => void;
}

interface ExperimentInput {
  title: string;
  description?: string;
  tags: string[];
  status: string;
}

const ExperimentForm = ({ closeModal }: Props) => {
  const [createExperiment] = useCreateExperimentMutation({
    update(cache, { data }) {
      const newExperiment = data?.createExperiment;
      const response: { experiments: ExperimentPage } | null = cache.readQuery({
        query: ExperimentsDocument,
        variables: { page: getNumberUrlParam('page'), filters: {} },
      });
      const experiments = response?.experiments?.result || [];
      cache.writeQuery({
        query: ExperimentsDocument,
        data: {
          experiments: {
            result: [...experiments, newExperiment],
            totalCount: (response?.experiments?.totalCount || 0) + 1,
          },
        },
      });
    },
  });

  const onSubmit = (data: ExperimentInput) => {
    const userId = '123456789012';
    const experiment = {
      ...data,
      owners: [userId],
      status: { kind: data.status, date: new Date().toString() },
    };
    createExperiment({
      variables: { experiment },
      optimisticResponse: {
        __typename: 'Mutation',
        createExperiment: {
          __typename: 'Experiment',
          _id: 'optimistic',
          title: experiment.title,
          description: experiment.description,
          owners: experiment.owners.map((_id) => ({ _id, name: 'me' })),
          status: [experiment.status],
          creationDate: new Date().toString(),
        },
      },
    });
    closeModal(true);
  };

  const initialValues = {
    title: null,
    description: null,
    tags: [],
    status: null,
  };

  return (
    <ModalForm
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string().required('Required').nullable(),
        status: Yup.string().required('Required').nullable(),
      })}
      onSubmit={onSubmit}
      onCancel={() => closeModal(false)}
      title="Create experiment"
    >
      <FormInput label="Title" name="title" />
      <FormInput label="Description" name="description" />
      <FormTags label="Tags" name="tags" />
      <FormSelect label="Status" name="status" items={['active', 'inactive']} />
    </ModalForm>
  );
};

export default ExperimentForm;
