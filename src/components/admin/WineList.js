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
const CustomFilter = (props) => (
  <Filter {...props}>
    <SearchInput placeholder='Search by Name' source='name' resettable alwaysOn />
  </Filter>
);

const WineList = (props) => {
  return <List {...props} filters={<CustomFilter />} title='List of wines'>
    <MyDatagrid>
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
    </MyDatagrid>
  </List>
}
   
export default WineList