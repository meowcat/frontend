import React from 'react';

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
        <td key={key as string}>{render ? render(value[key]) : value[key]}</td>
      ))}
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          {columns.map(({ title }) => (
            <th key={title}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
}
