import React from 'react';
import { Layout, Typography, Row, Col } from 'antd';
import { FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Text, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff', padding: '20px 0' }}>
      <Row justify="center" gutter={[16, 16]}>
        <Col xs={24} sm={8} md={6}>
          <Text strong style={{ color: '#fff' }}>About Us</Text>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/" style={{ color: '#fff' }}>Our Story</Link></li>
            <li><Link href="/" style={{ color: '#fff' }}>Careers</Link></li>
            <li><Link href="/" style={{ color: '#fff' }}>Contact Us</Link></li>
          </ul>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Text strong style={{ color: '#fff' }}>Help</Text>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Link href="/" style={{ color: '#fff' }}>Support</Link></li>
            <li><Link href="/" style={{ color: '#fff' }}>FAQs</Link></li>
            <li><Link href="/" style={{ color: '#fff' }}>Privacy Policy</Link></li>
          </ul>
        </Col>
        <Col xs={24} sm={8} md={6}>
          <Text strong style={{ color: '#fff' }}>Follow Us</Text>
          <div>
            <Link href="https://facebook.com" target="_blank" style={{ color: '#fff', marginRight: '10px' }}>
              <FacebookOutlined />
            </Link>
            <Link href="https://twitter.com" target="_blank" style={{ color: '#fff', marginRight: '10px' }}>
              <TwitterOutlined />
            </Link>
            <Link href="https://linkedin.com" target="_blank" style={{ color: '#fff', marginRight: '10px' }}>
              <LinkedinOutlined />
            </Link>
          </div>
        </Col>
      </Row>
      <Text style={{ color: '#fff', marginTop: '20px', display: 'block' }}>
        © {new Date().getFullYear()} Job Referral. All Rights Reserved.
      </Text>
    </Footer>
  );
};

export default AppFooter;

