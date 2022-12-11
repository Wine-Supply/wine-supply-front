import React, { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ImageInput,
  ImageField,
  BooleanInput,
  useNotify,
  useRefresh,
  useCreateContext,
} from 'react-admin';

const WineCreate = ({id}) => {
  const notify = useNotify();
  const refresh = useRefresh();

  const { save } = useCreateContext();

  const onSuccess = () => {
    notify(`New Wine created `);
    refresh();
  };

  return (
    <Create resource="wines" id={id} title='Create new Wine' onSuccess={onSuccess}>
      <SimpleForm onSubmit={save}>
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
    </Create>
  );
};

export default WineCreate;