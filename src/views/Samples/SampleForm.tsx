import React from 'react';
import * as Yup from 'yup';

import {
  useCreateSampleMutation,
  SamplesDocument,
  SamplePage,
} from '../../utils/generated';
import { getNumberUrlParam } from '../../utils/filters';
import ModalForm from '../../components/ModalForm';
import FormInput from '../../components/FormInput';
import FormSelect from '../../components/FormSelect';

interface Props {
  closeModal: (reload: boolean) => void;
}

interface SampleInput {
  title: string;
  description?: string;
  tags: string[];
  status: string;
}

const SampleForm = ({ closeModal }: Props) => {
  const [createSample] = useCreateSampleMutation({
    update(cache, { data }) {
      const newSample = data?.createSample;
      const response: { samples: SamplePage } | null = cache.readQuery({
        query: SamplesDocument,
        variables: { page: getNumberUrlParam('page'), filters: {} },
      });
      const samples = response?.samples?.result || [];
      cache.writeQuery({
        query: SamplesDocument,
        data: {
          samples: {
            result: [...samples, newSample],
            totalCount: (response?.samples?.totalCount || 0) + 1,
          },
        },
      });
    },
  });

  const onSubmit = (data: SampleInput) => {
    const sample = {
      ...data,
      status: { kind: data.status, date: new Date().toString() },
    };
    createSample({
      variables: { sample },
      optimisticResponse: {
        __typename: 'Mutation',
        createSample: {
          __typename: 'Sample',
          _id: 'optimistic',
          codeId: 'optimistic',
          title: sample.title,
          description: sample.description,
          status: [sample.status],
        },
      },
    });
    closeModal(true);
  };

  return (
    <ModalForm
      initialValues={{ title: '', description: '', status: '' }}
      validationSchema={Yup.object({
        title: Yup.string().required('Required'),
        status: Yup.string().required('Required'),
      })}
      onSubmit={onSubmit}
      onCancel={() => closeModal(false)}
      title="Create sample"
    >
      <FormInput label="Title" name="title" />
      <FormInput label="Description" name="description" />
      <FormSelect label="Status" name="status" items={['active', 'inactive']} />
    </ModalForm>
  );
};

export default SampleForm;
