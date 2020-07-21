import React from 'react';
import * as Yup from 'yup';

import { useCreateExperimentMutation } from '../../utils/generated';
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
  const [createExperiment] = useCreateExperimentMutation();

  const onSubmit = (data: ExperimentInput) => {
    const experiment = {
      ...data,
      owners: ['me'],
      status: { kind: data.status, date: new Date().toString() },
    };
    createExperiment({ variables: { experiment } });
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
