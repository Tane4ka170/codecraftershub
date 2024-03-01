import Header from '@/app/componets/header';
import React from 'react';

export interface PageProps {
  params: { id: string[] };
}

export default function Page({ params }: PageProps) {
  return (
    <>
      <Header>Company ({String(params.id)})</Header>
      <p>{new Date().toTimeString()}</p>
    </>
  );
}
