import React from 'react';
import { useField } from 'formik';

interface InputProps {
  label: string;
  name: string;
  type?: string;
}

const FormInput = ({ label, name, type }: InputProps) => {
  const [field, { touched, error }] = useField(name);
  const hasError = touched && error;
  return (
    <div className="min-w-full pb-3">
      <label
        className="block text-sm font-medium leading-5 text-gray-700"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...field}
        className={`block w-full pr-12 form-input pl-7 sm:text-sm sm:leading-5 ${
          hasError ? 'border-red-600' : ''
        }`}
        name={name}
        aria-label={label}
        type={type || 'text'}
      />
      {hasError ? (
        <span className="block text-sm font-medium leading-5 text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormInput;
