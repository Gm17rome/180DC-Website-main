// src/components/RegisterAdmin.js
import React from 'react';
import Form from '../components/Form';

const RegisterAdmin = () => {
  return (
    <Form
      title="Register Admin"
      url="http://localhost:8000/api/v1/admin/register"
      isRegister={true}
    />
  );
};

export default RegisterAdmin;
