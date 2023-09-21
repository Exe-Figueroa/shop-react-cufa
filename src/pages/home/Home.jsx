import React, { useEffect, useState } from 'react';
import { Layout } from "../../components/layout/Layout.jsx";
import { Card } from '../../components/card/Card.jsx';
import { ProductDetail } from '../../components/ProductDetail/ProductDetail.jsx';

const api = 'https://api.escuelajs.co/api/v1/products';

export function Home(props) {
  const [products, setProducts] = useState(null);

  useEffect(()=>{
  fetch(api)
    .then(res=>res.json())
    .then(data=>{
      setProducts(data.slice(0, 40));
    });
  }, []);
  return (
    <Layout>
      <ProductDetail />
      
      <div className="grid grid-cols-4 gap-3 w-full max-w-screen-lg">
        {products?.map(product=>(
          <Card
          key={product.id}
          data={product}
          /> 
          ))
        }
      </div>
      
    </Layout>
  );
}

