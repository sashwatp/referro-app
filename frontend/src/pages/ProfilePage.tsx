import React from 'react';
import { Card, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const ProfilePage = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title>User Profile</Title>
        <Paragraph>Name: John Doe</Paragraph>
        <Paragraph>Email: johndoe@example.com</Paragraph>
        <Button type="primary">Edit Profile</Button>
      </Card>
    </div>
  );
};

export default ProfilePage;
