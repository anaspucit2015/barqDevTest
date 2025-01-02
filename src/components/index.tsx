import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { DarazOrders } from '../constants';

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const columns: TableColumnsType<any> = [
  {
    title: 'Name',
    dataIndex: 'customer_name',
  },
  {
    title: 'Product Purchased',
    dataIndex: 'product',
    sorter: (a, b) => a.product.localeCompare(b.product),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    sorter: (a, b) => a.quantity - b.quantity,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    sorter: (a, b) => a.price - b.price,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const CustomTable = () => (
  // @ts-ignore
  <Table columns={columns} dataSource={DarazOrders} onChange={onChange} />
);

export default CustomTable;