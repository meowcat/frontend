import React from "react";
import { Table, Tag } from "antd";
import { ColumnProps } from "antd/es/table";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { TableSearch, filterIcon, onFilter } from "../components/TableSearch";
import Error from "../components/Error";

export const EXPERIMENTS = gql`
  {
    experimentByOwner(owner: "me") {
      codeId
      owners
      tags
      title
      description
      creationDate
      lastModificationDate
      status {
        kind
      }
    }
  }
`;

interface Experiment {
  codeId: string;
  owners: string[];
  tags: string[];
  title: string;
  description?: string;
  creationDate: string;
  lastModificationDate?: string;
  status?: { kind: string };
}

interface ExperimentsData {
  experimentByOwner: Experiment[];
}

function renderTags(tags: string[]) {
  if (!tags) return null;
  return tags.map((tag) => (
    <Tag color="geekblue" key={tag}>
      {tag.toUpperCase()}
    </Tag>
  ));
}

function renderDate(initialDate: string) {
  const date = new Date(initialDate);
  return initialDate
    ? `${date.getDate()}/${1 + date.getMonth()}/${date.getFullYear()}`
    : "";
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
    render: (value) => (value ? value[0].kind : null),
  },
];

const Experiments = (props: any) => {
  const { loading, error, data } = useQuery<ExperimentsData>(EXPERIMENTS);

  if (error) return <Error message={error.message} />;
  const dataSource = data ? data.experimentByOwner : [];

  return (
    <Table<Experiment>
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      className="experiments"
    />
  );
};
export default Experiments;
