import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  NumberInput,
  ImageInput,
  ImageField,
  BooleanInput,
} from 'react-admin';

const WineEdit = (props) => (
  <Edit {...props} title='Wine Edit'>
    <SimpleForm>
      <TextInput disabled source='id' />
      <TextInput source='name' />
      <TextInput source='brand'/>
      <TextInput source='description'/>
      <TextInput source='type'/>
      <TextInput source='body'/>
      <TextInput source='origin'/>
      <TextInput source='zone'/>
      <TextInput source='strain' />
      <NumberInput source='cropYear' />
      <NumberInput source='volume' />
      <NumberInput source='alcoholVolume' />
      <NumberInput source='rating' />
      <NumberInput source='stock' />
      <NumberInput source='price' />
      <ImageInput source='images' label="Wine Image (preferably in png)">
        <ImageField source="src" title="title" />
      </ImageInput>
      <BooleanInput label="Active" source='isActive' />
    </SimpleForm>
  </Edit>
);

export default WineEdit;