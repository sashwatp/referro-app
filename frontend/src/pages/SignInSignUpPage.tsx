import React, { useState } from 'react';
import { Form, Input, Button, Typography, Card } from 'antd';

const { Title } = Typography;

const SignInSignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card style={{ maxWidth: '400px', margin: '0 auto' }}>
        <Title>{isSignUp ? 'Sign Up' : 'Sign In'}</Title>
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password />
          </Form.Item>
          {isSignUp && (
            <Form.Item label="Confirm Password">
              <Input.Password />
            </Form.Item>
          )}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              {isSignUp ? 'Sign Up' : 'Sign In'}
            </Button>
          </Form.Item>
        </Form>
        <Button type="link" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? 'Already have an account? Sign In' : 'Don’t have an account? Sign Up'}
        </Button>
      </Card>
    </div>
  );
};

export default SignInSignUpPage;
