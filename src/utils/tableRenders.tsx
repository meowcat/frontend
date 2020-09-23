import { Link } from '@reach/router';
import React from 'react';

import Tag from '../components/Tag';
import { Maybe, Status, User } from './generated';

export function renderTags(tags: string[]) {
  if (!tags) return null;
  return tags.map((tag) => <Tag key={tag}>{tag}</Tag>);
}

export function renderCreationDate(status: Maybe<Array<Status>>) {
  if (!status || status.length < 1) return 'None';
  const initialStatus = status.sort((a, b) => a.date.localeCompare(b.date))[0];
  const date = new Date(initialStatus.date);
  return `${date.getDate()} / ${1 + date.getMonth()} / ${date.getFullYear()}`;
}

export function renderLastDate(status: Maybe<Array<Status>>) {
  if (!status || status.length < 1) return 'None';
  const lastStatus = status.sort((a, b) => b.date.localeCompare(a.date))[0];
  const date = new Date(lastStatus.date);
  return `${date.getDate()} / ${1 + date.getMonth()} / ${date.getFullYear()}`;
}

export function renderLastStatus(status: Maybe<Array<Status>>) {
  if (!status || status.length < 1) return 'None';
  const { kind } = status.sort((a, b) => b.date.localeCompare(a.date))[0];
  return kind;
}

export function renderOwners(owners: Array<null | User>) {
  const reducer = (acc: React.ReactNode[], curr: null | User) =>
    curr ? [...acc, <Tag key={curr._id}>{curr.name}</Tag>] : acc;
  return owners.reduce(reducer, []);
}

export function renderView(id: string) {
  return (
    <Link to={`/notebook/${id}`} className="text-blue-600">
      View →
    </Link>
  );
}
