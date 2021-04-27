import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addProductToCart } from '../stores/modules/cart/actions';
import { IProduct } from '../stores/modules/cart/types';

interface ICatalogItemProps {
  product: IProduct
}

const CatalogItem: React.FC<ICatalogItemProps> = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddProductToCar = useCallback(() => {
    dispatch(addProductToCart(product))
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {' - '}
      <span>{product.price}</span> {'  '}
      <button
        type="button"
        onClick={handleAddProductToCar}
      >
        Comprar
          </button>
    </article>
  );
}

export default CatalogItem;