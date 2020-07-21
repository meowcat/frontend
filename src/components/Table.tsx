import React from 'react';
import Paginator from './Paginator';

export interface TableColumn<T> {
  key: keyof T;
  title: string;
  render?: (value: any) => React.ReactNode;
  sorter?: any;
}

export interface TableProps<T> {
  data: Partial<T>[];
  columns: TableColumn<T>[];
}

export default function Table<T>({ data, columns }: TableProps<T>) {
  const content = data.map((value, index) => (
    <tr key={`row_${index}`}>
      {columns.map(({ key, render }) => (
        <td
          key={key as string}
          className="px-6 py-4 whitespace-no-wrap border-b border-gray-200"
        >
          {render ? render(value[key]) : value[key]}
        </td>
      ))}
    </tr>
  ));
  return (
    <div className="flex flex-col">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                {columns.map(({ title }) => (
                  <th
                    className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-800 uppercase border-b border-gray-200 bg-gray-50"
                    key={title}
                  >
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">{content}</tbody>
          </table>
          {data.length > 0 ? (
            <Paginator page={0} step={10} total={20} />
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                <svg
                  className="w-6 h-6 text-red-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
              <span className="px-3 py-6 text-gray-600">Empty table</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
