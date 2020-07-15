import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import ExperimentForm from './ExperimentForm';

import Tag from '../../components/Tag';
import Error from '../../components/Error';

import { hashColor } from '../../utils/color';
import { Experiment, useExperimentsQuery } from '../../utils/generated';
import Table, { TableColumn } from '../../components/Table';

function renderTags(tags: string[]) {
  if (!tags) return null;
  return tags.map((tag) => (
    <Tag color={hashColor(tag)} key={tag}>
      {tag.toUpperCase()}
    </Tag>
  ));
}

function renderDate(initialDate: string) {
  const date = new Date(initialDate);
  return initialDate
    ? `${date.getDate()} / ${1 + date.getMonth()} / ${date.getFullYear()}`
    : '';
}

function stringSorter(key: 'codeId' | 'title') {
  return (a: Experiment, b: Experiment) => a[key].localeCompare(b[key]);
}

const columns: TableColumn<Experiment>[] = [
  {
    key: 'title',
    title: 'Title',
    sorter: stringSorter('title'),
  },
  {
    key: 'description',
    title: 'Description',
  },
  {
    key: 'owners',
    title: 'Owners',
    render: renderTags,
  },
  {
    key: 'tags',
    title: 'Tags',
    render: renderTags,
  },
  {
    key: 'creationDate',
    title: 'Creation date',
    render: renderDate,
  },
  {
    key: 'lastModificationDate',
    title: 'Last modification date',
    render: renderDate,
  },
  {
    key: 'status',
    title: 'Status',
    render: (value: Experiment['status']) => (value ? value[0].kind : null),
  },
];

const Experiments = (_: any) => {
  const { loading, error, data, refetch } = useExperimentsQuery({
    variables: { page: 0, filters: {} },
  });
  const [visible, setVisible] = useState(false);

  if (error) return <Error message={error.message} />;
  if (loading) return <span>Loading</span>;

  const closeModal = (reload: boolean) => {
    if (reload) refetch();
    setVisible(false);
  };

  return (
    <div className="experiments">
      <ExperimentForm visible={visible} closeModal={closeModal} />
      <div className="experiments__header">
        <h2>Experiments</h2>
        <Button onClick={() => setVisible(true)}>
          <PlusOutlined />
          Add new experiment
        </Button>
      </div>
      <Table<Experiment> columns={columns} data={data?.experiments || []} />
    </div>
  );
};
export default Experiments;
