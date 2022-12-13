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


const UserList = (props) => {
  return <List {...props} title='List of users'>
    <Datagrid rowClick='edit'>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='userName' />
      <TextField source='lastName' />
      <EmailField source='email' />
      <DateField source='date_of_birth' />
      <TextField source='phone' />
      <TextField source='isAdmin' />
      <BooleanField source='isActive' />
      <DateField source='createdAt' />
      <TextField source='whishList' />
    </Datagrid>
  </List>
}

export default UserList