import { axiosInstance } from '@/lib/axios';
import { TProduct } from '@/models/product';
import React from 'react';

export async function fetchProduct(
  page: number,
  limit: number,
  name: string,
  setProduct: (value: React.SetStateAction<TProduct[]>) => void,
) {
  const axios = axiosInstance();
  const queryParams: Record<string, any> = {
    page,
    limit,
    name,
  };
  try {
    const response = await axios.get('/products', {
      params: { ...queryParams },
    });
    const productData = response.data;
    setProduct(productData.data.data);
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(
  id: string,
  page: number,
  limit: number,
  name: string,
  setProduct: (value: React.SetStateAction<TProduct[]>) => void,
) {
  const axios = axiosInstance();
  try {
    await axios.delete(`/products/${id}`);
    alert('Data berhasil dihapus');
    fetchProduct(page, limit, name, setProduct);
  } catch (error) {
    console.log(error);
  }
}
