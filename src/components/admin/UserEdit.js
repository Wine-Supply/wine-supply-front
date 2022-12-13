import React from 'react';
import {
  Edit,
  SimpleForm,
  TextInput,
  DateTimeInput,
  SelectInput,
} from 'react-admin';

const UserEdit = (props) => (
  <Edit {...props} title='User Edit'>
    <SimpleForm>
      <TextInput disabled source='id' />
      {/* <TextInput disabled source='_id' /> */}
      <TextInput disabled source='email' />
      {/* <TextInput disabled source='name' />
      <DateTimeInput disabled source='date_of_birth' /> */}
      <SelectInput
        source='isAdmin'
        choices={[
          { id: 'yes', name: 'yes' },
          { id: 'no', name: 'no' },
        ]}
      /> 
      <SelectInput
        source='isActive'
        choices={[
          { id: 'true', name: 'yes' },
          { id: 'false', name: 'no' },
        ]}
      /> 
    </SimpleForm>
  </Edit>
);

export default UserEdit;