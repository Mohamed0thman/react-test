import React from 'react';
import { Form, Input, Lable } from '../components/form';
import { useForm } from 'react-hook-form';
import { Flex } from '../components';

const SigininPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const profileSchema = {
    name: {
      id: 'name',
      type: 'text',
      label: 'Name',
      placeholder: 'Full Name',
      register: register('name', {
        required: 'Name is required',
        pattern: {
          value: /^[a-zA-Z ]+$/,
          message: 'Please enter a valid name',
        },
      }),

      error: errors.name,
    },
    phoneNumber: {
      id: 'phoneNumber',
      type: 'text',
      label: 'Phone Number',
      placeholder: 'Enter phone Number',
      register: register('phoneNumber', {
        required: 'Phone Number is required',
        minLength: {
          value: 8,
          message: 'Minimum character length is 8',
        },
      }),

      error: errors.phoneNumber,
    },
    email: {
      id: 'email',
      type: 'email',
      label: 'Email',
      placeholder: 'hi@example.com',
      register: register('email', {
        required: 'Email is required',
        pattern: {
          value: /^[a-zA-Z0-9_\-.]+@[a-zA-Z-.]+.[a-zA-Z-.]+$/,
          message: 'Please enter a valid email',
        },
      }),

      error: errors.email,
    },
    address: {
      id: 'address',
      type: 'text',
      label: 'Address',
      placeholder: '12 Nour Stt. Jeddah',
      register: register('address', {
        required: 'Address is required',
      }),

      error: errors.address,
    },
  };

  function handleOnSubmit(data: any) {
    console.log(data);
  }
  return (
    <Form handleOnSubmit={handleSubmit(handleOnSubmit)}>
      <Form.FormGroup {...profileSchema.name} />
      <Form.FormGroup {...profileSchema.phoneNumber} />
      <Form.FormGroup {...profileSchema.email} />
      <Form.FormGroup {...profileSchema.address} />

      <Lable htmlFor="phoneNumber" title="phoneNumber" />
      <Input
        type="text"
        register={register('phoneNumber', {
          required: 'Phone Number is required',
          minLength: {
            value: 8,
            message: 'Minimum character length is 8',
          },
        })}
        id=""
        placeholder="dasdsad"
      />
      <Flex>
        <Form.Button type="submit" variant="primary" className=" mr-3">
          apply
        </Form.Button>
        <Form.Button variant="primary_outline">cancle</Form.Button>
      </Flex>
    </Form>
  );
};

export default SigininPage;
