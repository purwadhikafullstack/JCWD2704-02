import { axiosInstance } from '@/lib/axios';

export async function fetchProduct(page: number, limit: number, name: string) {
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
    return productData.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduct(id: string) {
  const axios = axiosInstance();
  try {
    await axios.delete(`/products/${id}`);
  } catch (error) {
    console.log(error);
  }
}
