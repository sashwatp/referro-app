import React, { useState } from 'react';
import { Modal, Form, Input, Button, message, Divider } from 'antd';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase-config'; // Assuming you have the Firebase config in a separate file

const SignInSignUpModal: React.FC<{ open: boolean; onClose: () => void }> = ({ open, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: { email: string; password: string }) => {
    const { email, password } = values;

    setLoading(true);
    try {
      if (isSignUp) {
        // Firebase sign-up
        await createUserWithEmailAndPassword(auth, email, password);
        message.success('User signed up successfully');
      } else {
        // Firebase sign-in
        await signInWithEmailAndPassword(auth, email, password);
        message.success('User signed in successfully');
      }
      onClose();
    } catch (error: any) {
      handleAuthError(error);
    }
    setLoading(false);
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      message.success(`Welcome ${user.displayName}`);
      onClose();
    } catch (error: any) {
      handleAuthError(error);
    }
  };

  const handleAuthError = (error: any) => {
    let errorMessage = 'Authentication failed';

    if (error.code) {
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'Email does not exist. Please sign up first.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Incorrect password. Please try again.';
          break;
        case 'auth/email-already-in-use':
          errorMessage = 'Email is already in use. Please use a different email.';
          break;
        // Add more cases as needed
        default:
          errorMessage = error.message || 'An unexpected error occurred.';
      }
    }
    message.error(errorMessage);
  };

  return (
    <Modal
      open={open} 
      title={isSignUp ? 'Sign Up' : 'Sign In'}
      onCancel={onClose}
      footer={null}
    >
      <Button
        onClick={signInWithGoogle}
        block
        style={{
          marginTop: '10px',
          backgroundColor: '#4285F4',
          color: '#fff',
          border: 'none',
        }}
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google Logo"
          style={{ width: '18px', marginRight: '8px' }}
        />
        Sign In with Google
      </Button>

      <Divider>OR</Divider>

      <Form onFinish={onFinish}>
        <Form.Item
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" loading={loading} block>
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </Button>
      </Form>
      <Button
        type="link"
        onClick={() => setIsSignUp(!isSignUp)}
        style={{ marginTop: '10px' }}
      >
        {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
      </Button>
    </Modal>
  );
};

export default SignInSignUpModal;
