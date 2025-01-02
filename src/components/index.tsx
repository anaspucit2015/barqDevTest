// @ts-nocheck

import React, { useMemo } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { Data } from '../constants';

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

const CustomTable = ({selectCompnay}: {selectCompnay: string}) => {
  const data = useMemo(() => {
    return Data[selectCompnay] || []
  }, [selectCompnay])
  // @ts-ignore
  return <div> <h1 className='text-5xl font-bold m-5'>Companies Order Table</h1>
  <Table columns={columns} dataSource={data} onChange={onChange} />
  </div>
}

export default CustomTable;