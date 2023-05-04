import React from 'react';
import { Button, Result } from 'antd';

const Error: React.FC = () => (
  <Result
    title="Please Enter the Valid City"
    extra={
      <Button type="primary" key="console" onClick={()=>window.location.reload()}>
        Fill Again
      </Button>
    }
  />
);

export default Error;