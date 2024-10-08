import React, { useState } from 'react';
import { Menu, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import SignInSignUpModal from './SignInSignUpModal';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link to="/profile">Profile</Link>
        </Menu.Item>
        <Menu.Item key="jobsearch">
          <Link to="/jobsearch">Job Search</Link>
        </Menu.Item>
        <Menu.Item key="signin">
          <Button type="primary" onClick={showModal}>
            Sign In / Sign Up
          </Button>
        </Menu.Item>
      </Menu>
      {/* Modal for Sign In/Sign Up */}
      <Modal open={isModalOpen} onCancel={handleClose} footer={null} width={400}>
        <SignInSignUpModal open={isModalOpen} onClose={handleClose} />
      </Modal>
    </>
  );
};

export default Navbar;
