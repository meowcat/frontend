import React, { useState } from 'react';
import { useField } from 'formik';

interface SelectProps {
  label: string;
  name: string;
  items: string[];
}

const CheckItem = () => (
  <span className="absolute inset-y-0 right-0 flex items-center pr-4">
    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  </span>
);

const FormSelect = ({ label, name, items }: SelectProps) => {
  const [{ value }, { touched, error }, { setValue, setTouched }] = useField(
    name,
  );
  const [visible, setVisible] = useState(false);
  const hasError = touched && error;
  return (
    <div className="min-w-full pb-3">
      <label
        id="listbox-label"
        className="block text-sm font-medium leading-5 text-gray-700"
      >
        {label}
      </label>
      <div className="relative">
        <span className="inline-block w-full rounded-md shadow-sm">
          <button
            type="button"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            className={`relative w-full py-2 pl-3 pr-10 text-left ${
              hasError ? 'border-red-600' : ''
            } transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5`}
            onClick={() => {
              setTouched(true);
              setVisible(!visible);
            }}
          >
            <div
              className={`flex items-center space-x-3 truncate ${
                value ? '' : 'text-gray-600'
              }`}
            >
              {value || 'Empty'}
            </div>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </span>

        {/* Select popover, show/hide based on select state. */}
        <div
          className={`${
            visible ? 'absolute' : 'hidden'
          } w-full mt-1 bg-white rounded-md shadow-lg`}
        >
          <ul
            tabIndex={-1}
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant={value}
            className="py-1 overflow-auto text-base leading-6 rounded-md shadow-xs max-h-56 focus:outline-none sm:text-sm sm:leading-5"
          >
            {items.map((name, index) => (
              <li
                key={name}
                id={name}
                tabIndex={index}
                role="option"
                className="relative py-2 pl-3 text-gray-900 cursor-default select-none pr-9 hover:bg-gray-200"
                aria-selected={value === name}
                onClick={() => {
                  setVisible(false);
                  setValue(name);
                }}
              >
                <div className="flex items-center space-x-3">
                  <span
                    className={`block ${
                      value === name ? 'font-semibold' : 'font-normal'
                    } truncate`}
                  >
                    {name}
                  </span>
                </div>
                {value === name ? <CheckItem /> : null}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {hasError ? (
        <span className="block text-sm font-medium leading-5 text-red-600">
          {error}
        </span>
      ) : null}
    </div>
  );
};

export default FormSelect;
