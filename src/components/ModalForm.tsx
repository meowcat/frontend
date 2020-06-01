import React from "react";
import { Modal, Form } from "antd";
import { Store } from "antd/lib/form/interface";

interface Props {
  visible: boolean;
  onCreate: (values: Store) => void;
  onCancel: () => void;
  name: string;
  loading: boolean;
  children: React.ReactNode;
}

const ModalForm = ({
  visible,
  onCreate,
  onCancel,
  name,
  loading,
  children,
}: Props) => {
  const [form] = Form.useForm();
  return (
    <Modal
      visible={visible}
      title={`Create a new ${name}`}
      okText="Create"
      cancelText="Cancel"
      onCancel={onCancel}
      okButtonProps={{ loading }}
      cancelButtonProps={{ disabled: loading }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        className="modal_form"
        initialValues={{ modifier: "public" }}
      >
        {children}
      </Form>
    </Modal>
  );
};

export default ModalForm;
