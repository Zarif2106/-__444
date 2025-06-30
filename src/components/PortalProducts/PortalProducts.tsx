// src/components/PortalProducts/PortalProducts.tsx
import React from 'react';

interface PortalProductsProps {
  id: number;
  title: string;
  body: string;
}

const PortalProducts: React.FC<PortalProductsProps> = ({ id, title, body }) => {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '1rem', width: '200px' }}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default PortalProducts;