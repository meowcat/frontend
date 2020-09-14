import React from 'react';

interface ErrorItemProps {
  name: string;
  msg: string;
}
const ErrorItem = ({ name, msg }: ErrorItemProps) => (
  <li>
    <span className="text-red-700">{name}: </span> {msg}
  </li>
);

export default ErrorItem;
