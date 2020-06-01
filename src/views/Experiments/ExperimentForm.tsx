import React from "react";
import { useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import { Form, Input, Select } from "antd";
import { Store } from "antd/lib/form/interface";

import ModalForm from "../../components/ModalForm";

const { Item } = Form;
const { Option } = Select;

interface Props {
  visible: boolean;
  closeModal: (reload: boolean) => void;
}

interface ExperimentInput {
  owners: string[];
  tags: string[];
  title: string;
  description?: string;
  status: Array<{ kind: string; date: string }>;
}

const CREATE_EXPERIMENT = gql`
  mutation createExperiment($experiment: ExperimentInput!) {
    createExperiment(experiment: $experiment) {
      _id
      title
    }
  }
`;

const ExperimentForm = ({ visible, closeModal }: Props) => {
  const [createExperiment, { loading, error }] = useMutation<ExperimentInput>(
    CREATE_EXPERIMENT
  );

  const onCreate = (data: Store) => {
    const experiment = {
      ...data,
      owners: ["me"],
      status: [{ kind: data.status, date: new Date().toString() }],
    };
    createExperiment({ variables: { experiment } });
    closeModal(true);
  };

  const required = (title: string) => [
    { required: true, message: `Please input the ${title}` },
  ];

  return (
    <ModalForm
      name="experiment"
      visible={visible}
      onCreate={onCreate}
      onCancel={() => closeModal(false)}
      loading={loading}
    >
      <Item name="title" label="Title" rules={required("title")}>
        <Input />
      </Item>
      <Item name="description" label="Description">
        <Input type="textarea" />
      </Item>
      <Item name="tags" label="Tags">
        <Select placeholder="Add a tag" mode="tags" defaultValue={[]} />
      </Item>
      <Item name="status" label="Status" rules={required("status")}>
        <Select placeholder="Select a status" allowClear>
          <Option value="active">active</Option>
          <Option value="inactive">inactive</Option>
        </Select>
      </Item>
      {error && (
        <div style={{ color: "#c51244" }}>
          An error has ocurred, please try again
        </div>
      )}
    </ModalForm>
  );
};

export default ExperimentForm;
