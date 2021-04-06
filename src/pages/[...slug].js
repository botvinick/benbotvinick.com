import React from 'react';

export default function NotFound() {
  return '';
}

export function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    }
  }
}
