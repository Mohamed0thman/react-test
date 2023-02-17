import React from 'react';
import { Button, Flex, Typography } from '../components';
import { Table } from '../components/table';
import { Form, Select } from '../components/form';

const headItems = ['Paid in', 'Purpose', 'Amount'];
const bodyItems = [
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
  { date: 'Dec 9, 11.00 AM', Purpose: 'Rent House', Amount: '$5,000/mo' },
];
const options = [
  { id: '1', option: 'paid' },
  { id: '2', option: 'unpaid' },
];

const TablePage = () => {
  return (
    <div>
      <Flex justify="justify-between">
        <Typography as="h3" variant="body-md">
          Transactions
        </Typography>

        <Flex>
          <Button variant="secondary">Terminate Contract</Button>

          <Select options={options} />
        </Flex>
      </Flex>
      <Table headItems={headItems} bodyItems={bodyItems} />
    </div>
  );
};

export default TablePage;
