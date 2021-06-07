/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import spinner from './loading.gif';

export default () => {
  return (
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  );
};
