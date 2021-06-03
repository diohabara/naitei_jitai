import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

export type Inputs = {
  userName: string;
  userUniversity: string;
  company: string;
  recruiterName: string;
};

type UserFormProps = {
  onSubmit: (e?: React.BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
  register: UseFormRegister<Inputs>
};

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  line-height: 2;
  text-align: left;
  display: block;
  margin-bottom: 13px;
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 200;
`;

const Text = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

const Submit = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid white;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
  background: #ec5990;
  color: white;
  text-transform: uppercase;
  border: none;
  margin-top: 40px;
  padding: 20px;
  font-size: 16px;
  font-weight: 100;
  letter-spacing: 10px;
  &:hover {
    background: #bf1650;
  }
`;

export const UserForm = (props: UserFormProps) => {

  return (
      <Form onSubmit={props.onSubmit}>
        <Label>名前</Label>
        <Text {...props.register("userName")} />

        <Label>大学名</Label>
        <Text {...props.register("userUniversity")} />

        <Label>会社名</Label>
        <Text {...props.register("company")} />

        <Label>採用担当者名</Label>
        <Text {...props.register("recruiterName")} />

        <Submit type="submit" />
      </Form>
  )
};
