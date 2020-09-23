import React from 'react';
import * as Yup from 'yup';

import {
  useCreateExperimentMutation,
  ExperimentsDocument,
  ExperimentPage,
  useProjectsByOwnerQuery,
} from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';
import ModalForm from '../../components/ModalForm';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormSelectQuery from '../../components/FormSelectQuery';

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
  // Gets user id from local storage
  const userId = localStorage.getItem('user_id');

  // Gets list of user projects
  const { loading, error, data } = useProjectsByOwnerQuery({
    variables: { ownerId: userId || '' },
  });
  const userProjects =
    data?.projectsByOwner?.map(({ title, _id }) => ({
      key: _id,
      value: title,
    })) || [];

  const [createExperiment] = useCreateExperimentMutation({
    // Update cache from response
    update(cache, { data }) {
      // Get usual response from cache
      const response: { experiments: ExperimentPage } | null = cache.readQuery({
        query: ExperimentsDocument,
        variables: { page: getNumberUrlParam('page'), filters: {} },
      });

      const newExperiment = data?.createExperiment;
      const experiments = response?.experiments?.result || [];

      // Adds new experiment at the beginnig
      cache.writeQuery({
        query: ExperimentsDocument,
        data: {
          experiments: {
            result: [newExperiment, ...experiments],
            totalCount: (response?.experiments?.totalCount || 0) + 1,
          },
        },
      });
    },
  });

  const onSubmit = (data: ExperimentInput) => {
    // Gets user id from local storage
    if (!userId) {
      console.error('User id not saved');
      return null;
    }

    // Completes mutation values
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
    projects: '',
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
      <FormSelectQuery
        label="Projects"
        name="projects"
        loading={loading}
        error={error?.message}
        items={userProjects}
      />
    </ModalForm>
  );
};

export default ExperimentForm;
