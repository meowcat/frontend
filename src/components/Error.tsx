import React from "react";
import { WarningOutlined } from "@ant-design/icons";

interface Props {
  message: string;
}

const Error = ({ message }: Props) => (
  <div className="error">
    <h3>
      <WarningOutlined />
      Error message
    </h3>
    <span className="error__message">{message}</span>
  </div>
);

export default Error;
