import React from 'react';
import * as Yup from 'yup';

import {
  useCreateExperimentMutation,
  ExperimentsDocument,
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
      const newExeperiment = data?.createExperiment;
      const response: { experiments: any[] } | null = cache.readQuery({
        query: ExperimentsDocument,
        variables: { page: getNumberUrlParam('page'), filters: {} },
      });
      const experiments = response?.experiments || [];
      cache.writeQuery({
        query: ExperimentsDocument,
        data: { experiments: [...experiments, newExeperiment] },
      });
    },
  });

  const onSubmit = (data: ExperimentInput) => {
    const experiment = {
      ...data,
      owners: ['me'],
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
          owners: experiment.owners,
          status: [experiment.status],
          creationDate: new Date().toString(),
        },
      },
    });
    closeModal(true);
  };

  return (
    <ModalForm
      initialValues={{ title: '', tags: [], status: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        status: Yup.string().required('Required'),
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
