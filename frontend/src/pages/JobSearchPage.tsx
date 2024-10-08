import React, { useState } from 'react';
import { Form, Input, Button, Card, Typography } from 'antd';

const { Title } = Typography;

const JobSearchPage = () => {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Searching for jobs: ${query}`);
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <Card style={{ maxWidth: '600px', margin: '0 auto' }}>
        <Title>Job Search</Title>
        <Form layout="inline" onSubmitCapture={handleSearch}>
          <Form.Item>
            <Input
              type="text"
              placeholder="Search for jobs"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default JobSearchPage;

