// src/components/RegisterUser.js
import React from 'react';
import Form from '../components/Form';

const RegisterUser = () => {
  return (
    <Form
      title="Register User"
      url="http://localhost:8000/api/v1/users/register"
      isRegister={true}
    />
  );
};

export default RegisterUser;
