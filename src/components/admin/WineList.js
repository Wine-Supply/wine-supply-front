import React from "react";

import { List, 
  Datagrid, 
  TextField, 
  ImageField, 
  NumberField, 
  BooleanField,
  Filter,
  SearchInput,
} from 'react-admin'

import { MyDatagrid } from './CustomStyle'

const WineList = (props) => {
  return <List {...props} title='List of wines'>
    <Datagrid rowClick='edit'>
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
      <TextField source='id' />
    </Datagrid>
  </List>
}
   
export default WineList