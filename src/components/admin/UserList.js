import React from "react";

import { List, 
  Datagrid, 
  TextField, 
  ImageField, 
  NumberField, 
  BooleanField, 
  EmailField,
  DateField,
  DatagridConfigurable,
  ReferenceField,
  FunctionField,
  SearchInput,
  Filter

} from 'react-admin'

const CustomFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder='Search by Email' source='email' resettable alwaysOn />
  </Filter>
);

const UserList = (props) => {
  return <List {...props} filters={<CustomFilter />} title='List of users'>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='userName' />
      <TextField source='lastname' />
      <EmailField source='email' />
      <DateField source='date_of_birth' />
      <TextField source='phone' />
      <TextField source=' isAdmin' />
      <BooleanField source='isActive' />
      <DateField source='createdAt' />
      <TextField source='whishList' />
    </Datagrid>
  </List>
}

export default UserList