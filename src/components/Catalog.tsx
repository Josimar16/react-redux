import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { api } from '../services/api';
import { addProductToCart } from '../stores/modules/cart/actions';
import { IProduct } from '../stores/modules/cart/types';

const Catalog: React.FC = () => {
  const dispatch = useDispatch();

  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get('products')
      .then(response => {
        setCatalog(response.data);
      });
  }, []);

  const handleAddProductToCar = useCallback((product: IProduct) => {
    dispatch(addProductToCart(product))
  }, [dispatch]);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map(product => (
        <article key={product.id}>
          <strong>{product.title}</strong> {' - '}
          <span>{product.price}</span> {'  '}
          <button
            type="button"
            onClick={() => handleAddProductToCar(product)}
          >
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
}

export { Catalog }