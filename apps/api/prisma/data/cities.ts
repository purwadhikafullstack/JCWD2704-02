import axios from 'axios';

export async function copyCities() {
  const res = await axios.get(`https://api.rajaongkir.com/starter/city`, {
    headers: {
      key: process.env.RAJAONGKIR_API_KEY,
    },
  });
  const dataCity = res.data.rajaongkir.results;
  return dataCity;
}
