// src/components/LoginUser.js
import React from 'react';
import Form from '../components/Form';

const LoginUser = () => {
  return (
    <Form
      title="Login User"
      url="http://localhost:8000/api/v1/users/login"
      isRegister={false}
    />
  );
};

export default LoginUser;
