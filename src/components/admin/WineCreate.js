import React, { useState, useEffect } from 'react';
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  BooleanInput,
} from 'react-admin';

const validateWineCreation = async (values) => {
  const errors = {};
  const blanks = /^\s+$/;
  const validateLetters = /^[0-9a-zA-Z ]+$/;
  const noHtml = /<(“[^”]*”|'[^']*'|[^'”>])*>/;
  const specialCharacters = /^[-@./#&+,':;!"\w\s]*$/;

  //name
  if (!values.name || values.name?.length === 0) {
    errors.name = "Please enter the product's name";
  } else if (values.name?.length > 25) {
    errors.name = "The name cannot have more than 20 characters";
  } else if (values.name?.match(blanks)) {
    errors.name = "The name cannot contain only blank spaces";
  } else if (!values.name?.match(validateLetters)) {
    errors.name = "You can only use alphanumeric characters for the name field";

  //description
  } else if (
    !values.description ||
    values.description?.length < 20 ||
    values.description?.length > 500
  )  {
    errors.description ="The description must have between 20 and 150 characters";
  } else if (
    values.description?.match(blanks) ||
    values.description?.match(noHtml) ||
    !values.description?.match(specialCharacters)
  ) { 
    errors.description = "The text cannot contain only blank spaces o any of these characters <\"\"''>";

  //type
  } else if (values.type?.length === 0) {
    errors.type = "Please choose at least one type";

  //brand
  } else if (!values.brand || values.brand?.length === 0) {
    errors.brand = "Please enter the product's brand";
  } else if (
    !values.brand?.match(validateLetters) ||
    values.brand?.match(blanks)
  ) {
    errors.brand = "You can only use alphanumeric characters for the brand field";

  //origin
  } else if (!values.origin || values.origin?.length === 0) {
    errors.origin = "Please enter the product's origin";
  } else if (
    !values.origin?.match(validateLetters) ||
    values.origin?.match(blanks)
  ) {
    errors.origin = "You can only use alphanumeric characters for the origin field";
  
  //zone
  } else if (!values.zone || values.zone?.length === 0) {
    errors.zone = "Please enter the product's zone";
  } else if (
    !values.zone?.match(validateLetters) ||
    values.zone?.match(blanks)
  ) {
    errors.zone = "You can only use alphanumeric characters for the zone field";

  //body
  } else if (!values.body || values.body?.length === 0) {
    errors.body = "Please enter the product's body";
  } else if (
    !values.body?.match(validateLetters) ||
    values.body?.match(blanks)) {
    errors.body = "You can only use alphanumeric characters for the body field";
  } else if (
    !values.description ||
    values.description?.length < 20 ||
    values.description?.length > 300
  )  {
    errors.description ="The description must have between 20 and 150 characters";

  //strain
  } else if (!values.strain || values.strain?.length === 0) {
    errors.strain = "Please enter the product's grape variety";
  } else if (
    !values.strain?.match(validateLetters) ||
    values.strain?.match(blanks)
  ) {
    errors.strain = "You can only use alphanumeric characters for the grape variety";

  //cropYear
  } else if (!values.cropYear || values.cropYear?.length === 0) {
    errors.cropYear = "Please enter the product's year";

  //volume
  } else if (!values.volume || values.volume?.length === 0) {
    errors.volume = "Please enter the product's volume";

  //alcoholVolume
  } else if (!values.alcoholVolume || values.alcoholVolume?.length === 0) {
    errors.alcoholVolume = "Please enter the product's alcohol volume";

  //stock
  } else if (!values.stock || values.stock?.length === 0) {
    errors.stock = "Please enter the stock available";

  //price
  } else if (!values.price || values.price?.length === 0) {
    errors.price = "Please enter the product's price";

  //images
  } else if (!values.images1 || values.images1?.length === 0) {
    errors.images1 = "Please upload an image";
  }
  
  return errors
};

const WineCreate = () => {

  return (
    <Create>
      <SimpleForm validate={validateWineCreation}>
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
        <TextInput source='images1' />
        {/* <ImageInput source='images' label="Wine Image (preferably in png)">
          <ImageField source="src" title="title" />
        </ImageInput>  */}
        <BooleanInput label="Active" source='isActive' />
      </SimpleForm>
    </Create>
  );
};

export default WineCreate;