// src/components/LoginAdmin.js
import React from 'react';
import Form from '../components/Form';

const LoginAdmin = () => {
  return (
    <Form
      title="Login Admin"
      url="http://localhost:8000/api/v1/admin/login"
      isRegister={false}
    />
  );
};

export default LoginAdmin;
