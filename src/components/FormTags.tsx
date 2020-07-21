import React, { useState } from 'react';
import { useField } from 'formik';

interface TagsProps {
  label: string;
  name: string;
}

const FormTags = ({ label, name }: TagsProps) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] = useField(
    name,
  );
  const [text, setText] = useState('');
  const list: string[] = value || [];
  const hasError = touched && error;

  const removeItem = (index: number) => {
    list.splice(index, 1);
    setValue(list);
    setTouched(true);
  };

  const inputChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const textValue = currentTarget?.value;
    if (textValue.indexOf(',') > -1) {
      setValue([...list, textValue.slice(0, -1)]);
      setText('');
    } else {
      setText(textValue);
    }
  };

  const handleKeyDown = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      setValue([...list, text]);
      setText('');
    }
  };
  return (
    <div className="min-w-full pb-3">
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div
        className={`flex w-full pr-12 form-input pl-7 ${
          hasError ? 'border-red-600' : ''
        } sm:text-sm sm:leading-5`}
      >
        {list.map((tag, index) => (
          <span
            key={tag}
            className="inline-flex px-2 text-base font-semibold leading-5 text-blue-800 whitespace-no-wrap bg-blue-100 rounded-full"
          >
            {tag}
            <button
              aria-label={`remove ${tag}`}
              className="text-gray-800 outline-none hover:text-gray-600"
              type="button"
              onClick={() => removeItem(index)}
            >
              <svg
                className="w-5 h-5 pl-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
        ))}
        <input
          className="w-full outline-none"
          value={text}
          onChange={inputChange}
          onKeyDown={handleKeyDown}
        />
      </div>
      {hasError ? (
        <span className="block text-sm font-medium leading-5 text-red-700">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormTags;
