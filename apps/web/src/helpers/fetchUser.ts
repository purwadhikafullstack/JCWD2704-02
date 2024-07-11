import { axiosInstance } from '@/lib/axios';

export async function fetchUser(page: number, limit: number, name: string) {
  const axios = axiosInstance();
  const queryParams: Record<string, any> = {
    page,
    limit,
    name,
  };
  try {
    const response = await axios.get('/admins', {
      params: { ...queryParams },
    });
    const userData = response.data;
    return userData.data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteUser(id: string) {
  const axios = axiosInstance();
  try {
    await axios.delete(`/admins/${id}`);
    alert('data berhasil dihapus');
  } catch (error) {
    console.log(error);
  }
}
