import React from "react";
import { Table, Tag } from "antd";
import { ColumnProps } from "antd/es/table";

import { TableSearch, filterIcon, onFilter } from "../components/TableSearch";

interface Experiment {
  codeId: string;
  owners: string[];
  tags: string[];
  title: string;
  description?: string;
  creationDate: string;
  lastModificationDate?: string;
  status?: string;
}

function renderTags(tags: string[]) {
  return tags.map((tag) => (
    <Tag color="geekblue" key={tag}>
      {tag.toUpperCase()}
    </Tag>
  ));
}

function renderDate(initialDate: string) {
  const date = new Date(initialDate);
  return `${date.getDate()}/${1 + date.getMonth()}/${date.getFullYear()}`;
}

function stringSorter(key: "codeId" | "title") {
  return (a: Experiment, b: Experiment) => a[key].localeCompare(b[key]);
}

const columns: ColumnProps<Experiment>[] = [
  {
    key: "codeId",
    title: "Identifier",
    dataIndex: "codeId",
    sorter: stringSorter("codeId"),
    sortDirections: ["descend", "ascend"],
    filterDropdown: (props) => <TableSearch {...props} dataIndex="codeId" />,
    filterIcon,
    onFilter: (value, record) => onFilter<Experiment>(value, record, "codeId"),
  },
  {
    key: "owners",
    title: "Owners",
    dataIndex: "owners",
    render: renderTags,
  },
  {
    key: "tags",
    title: "Tags",
    dataIndex: "tags",
    render: renderTags,
  },
  {
    key: "title",
    title: "Title",
    dataIndex: "title",
    sorter: stringSorter("title"),
    sortDirections: ["descend", "ascend"],
    filterDropdown: (props) => <TableSearch {...props} dataIndex="title" />,
    filterIcon,
    onFilter: (value, record) => onFilter<Experiment>(value, record, "title"),
  },
  {
    key: "description",
    title: "Description",
    dataIndex: "description",
    filterDropdown: (props) => (
      <TableSearch {...props} dataIndex="description" />
    ),
    filterIcon,
    onFilter: (value, record) =>
      onFilter<Experiment>(value, record, "description"),
  },
  {
    key: "creationDate",
    title: "Creation date",
    dataIndex: "creationDate",
    render: renderDate,
  },
  {
    key: "lastModificationDate",
    title: "Last modification date",
    dataIndex: "lastModificationDate",
    render: renderDate,
  },
  {
    key: "status",
    title: "Status",
    dataIndex: "status",
  },
];

const data: Experiment[] = [
  {
    codeId: "A30",
    owners: ["me"],
    tags: ["hi"],
    title: "first test",
    creationDate: new Date(2019).toString(),
    lastModificationDate: new Date().toString(),
    status: "active",
  },
  {
    codeId: "A32",
    owners: ["me", "you"],
    tags: ["test", "testing"],
    title: "second test",
    description: "we are testing",
    creationDate: new Date(2019).toString(),
    lastModificationDate: new Date().toString(),
  },
];

const Experiments = (props: any) => (
  <div className="experiments">
    <Table<Experiment> columns={columns} dataSource={data} />
    <div className="detail"></div>
  </div>
);
export default Experiments;
