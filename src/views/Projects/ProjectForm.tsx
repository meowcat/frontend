import React from 'react';
import * as Yup from 'yup';

import {
  useCreateProjectMutation,
  ProjectsDocument,
  ProjectPage,
} from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';
import ModalForm from '../../components/ModalForm';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';
import FormTags from '../../components/FormTags';

interface Props {
  closeModal: (reload: boolean) => void;
}

interface ProjectInput {
  title: string;
  description?: string;
  tags: string[];
  status: string;
}

const ProjectForm = ({ closeModal }: Props) => {
  const [createProject] = useCreateProjectMutation({
    update(cache, { data }) {
      const newProject = data?.createProject;
      const response: { projects: ProjectPage } | null = cache.readQuery({
        query: ProjectsDocument,
        variables: { page: getNumberUrlParam('page'), filters: {} },
      });
      const projects = response?.projects?.result || [];
      cache.writeQuery({
        query: ProjectsDocument,
        data: {
          projects: {
            result: [...projects, newProject],
            totalCount: (response?.projects?.totalCount || 0) + 1,
          },
        },
      });
    },
  });

  const onSubmit = (data: ProjectInput) => {
    const userId = localStorage.getItem('user_id');
    if (!userId) {
      console.error('User id not saved');
      return null;
    }
    const project = {
      ...data,
      owner: userId,
      status: { kind: data.status, date: new Date().toString(), user: userId },
    };
    const user = { _id: userId, name: 'user' };
    createProject({
      variables: { project },
      optimisticResponse: {
        __typename: 'Mutation',
        createProject: {
          __typename: 'Project',
          _id: 'optimistic',
          title: project.title,
          description: project.description,
          status: [{ ...project.status, user }],
        },
      },
    });
    closeModal(true);
  };

  const initialValues = {
    title: '',
    description: '',
    tags: [],
    status: '',
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
      title="Create project"
    >
      <FormInput label="Title" name="title" />
      <FormInput label="Description" name="description" />
      <FormTags label="Tags" name="tags" />
      <FormSelect label="Status" name="status" items={['active', 'inactive']} />
    </ModalForm>
  );
};

export default ProjectForm;
