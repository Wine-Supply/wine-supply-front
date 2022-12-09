import React from "react";

import { List, Datagrid, TextField, ImageField, NumberField, BooleanField } from 'react-admin'

const UserList = ({props}: any ) => {
  return <List {...props}>
    <Datagrid>
      <TextField source='id' />
      <TextField source='name' />
      <TextField source='brand' />
      <TextField source='description' />
      <TextField source='type' />
      <TextField source='body' />
      <NumberField source='cropYear' />
      <TextField source='origin' />
      <TextField source='zone' />
      <NumberField source='volume' />
      <NumberField source='alcoholVolume' />
      <NumberField source='rating' />
      <ImageField source='images' />
      <TextField source='strain' />
      <NumberField source='stock' />
      <NumberField source='price' />
      <BooleanField source='isActive' />
    </Datagrid>
  </List>
}

// <ImageField source='images' /> || <UrlField> || <ArrayField> || <TextField>
//<TextField source='review_id' />   →  ver con david el tema del review_id
    
export default UserList