import React, { useEffect } from 'react';
import Layout from './containers/Layout/Layout';
import './App.scss';

const app = () => {
  useEffect(() => {
    document.title = 'Email Signature Generator';
  }, []);

  return (
    <div className="app">
      <Layout />
    </div>
  );
};

export default app;
