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

interface Props {
  closeModal: (reload: boolean) => void;
}

interface ExperimentInput {
  codeId?: string;
  title: string;
  description?: string;
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
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.error('User id not saved');
      return null;
    }
    const experiment = {
      ...data,
      status: { kind: data.status, date: new Date().toString(), user: userId },
    };
    const user = { _id: userId, name: 'user' };
    createExperiment({
      variables: { experiment },
      optimisticResponse: {
        __typename: 'Mutation',
        createExperiment: {
          __typename: 'Experiment',
          _id: 'optimistic',
          codeId: experiment.codeId || 'None',
          title: experiment.title,
          description: experiment.description,
          status: [{ ...experiment.status, user }],
        },
      },
    });
    closeModal(true);
  };

  const initialValues = {
    codeId: '',
    title: '',
    description: '',
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
      <FormInput label="Code" name="codeId" />
      <FormInput label="Title" name="title" />
      <FormInput label="Description" name="description" />
      <FormSelect label="Status" name="status" items={['active', 'inactive']} />
    </ModalForm>
  );
};

export default ExperimentForm;
