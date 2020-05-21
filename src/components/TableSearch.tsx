import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FilterDropdownProps } from "antd/es/table/interface";

type SearchProps = FilterDropdownProps & { dataIndex: string };
export const TableSearch = ({
  setSelectedKeys,
  selectedKeys,
  confirm,
  clearFilters,
  dataIndex,
}: SearchProps) => {
  const [searchText, setSearchText] = useState("");
  const handleSearch = (selectedKeys: React.Key[], confirm: () => void) => {
    confirm();
    setSearchText(selectedKeys[0].toString());
  };

  const handleReset = (clearFilters: (() => void) | undefined) => {
    if (clearFilters) clearFilters();
    setSearchText("");
  };
  return (
    <div style={{ padding: 8 }}>
      <Input
        placeholder={`Search ${dataIndex}`}
        value={searchText}
        onChange={({ currentTarget }: { currentTarget: HTMLInputElement }) => {
          const { value } = currentTarget;
          setSelectedKeys(value ? [value] : []);
          setSearchText(value);
        }}
        onPressEnter={() => handleSearch(selectedKeys, confirm)}
        style={{ width: 188, marginBottom: 8, display: "block" }}
      />
      <Space>
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90 }}
        >
          Search
        </Button>
        <Button
          onClick={() => handleReset(clearFilters)}
          size="small"
          style={{ width: 90 }}
        >
          Reset
        </Button>
      </Space>
    </div>
  );
};

export const filterIcon = (filtered: boolean) => (
  <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
);

export function onFilter<T>(
  value: string | number | boolean | undefined,
  record: T,
  dataIndex: keyof T
) {
  const initial: any = record[dataIndex];
  if (!value || !initial) return false;
  return initial
    .toString()
    .toLowerCase()
    .includes(value.toString().toLowerCase());
}
