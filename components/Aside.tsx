import React from 'react';

import { Menu_izquierdo } from '@/components/Menu-izquierdo';
const Aside = () => {
  return (
    <div className='fixed top-0 left-0 h-full'>
      <Menu_izquierdo />
    </div>
  );
};
export { Aside };
