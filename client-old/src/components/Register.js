import React, { useState } from 'react';
import axios from 'axios';
import { Button, Input, Label, Text } from '@fluentui/react-components';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Register = ({ setIsAuthenticated }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('/api/auth/register', formData);
      localStorage.setItem('token', res.data.token);
      setIsAuthenticated(true);
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 4 }}>
      <Text variant="xLarge">Register</Text>
      <form onSubmit={onSubmit}>
        <div style={{ marginBottom: 16 }}>
          <Label>Name</Label>
          <Input name="name" value={formData.name} onChange={onChange} required />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Label>Email</Label>
          <Input name="email" value={formData.email} onChange={onChange} required />
        </div>
        <div style={{ marginBottom: 16 }}>
          <Label>Password</Label>
          <Input type="password" name="password" value={formData.password} onChange={onChange} required />
        </div>
        <Button appearance="primary" type="submit">Register</Button>
      </form>
    </Box>
  );
};

export default Register;
