import React from 'react';
import { Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title>Welcome to the Referro</Title>
        <Paragraph>Find the best job referrals and opportunities here!</Paragraph>
      </Card>
    </div>
  );
};

export default HomePage;
