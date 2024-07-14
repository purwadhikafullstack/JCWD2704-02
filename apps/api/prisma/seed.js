const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'mysql://root:h4nnzr0@localhost:3306/grocery_web?schema=public',
    },
  },
});
const request = require('request');

const options = {
  method: 'GET',
  url: 'https://api.rajaongkir.com/starter/city',
  headers: { key: 'c309811b89789cf54663ce02c77d6843' }, // Ganti dengan API key Anda dari RajaOngkir
};

request(options, async function (error, response, body) {
  if (error) throw new Error(error);

  const cities = JSON.parse(body).rajaongkir.results;

  for (const city of cities) {
    try {
      const createdCity = await prisma.city.create({
        data: {
          //   id: city.city_id,
          type: city.type,
          cityName: city.city_name,
          postalCode: city.postal_code,
          province: city.province,
        },
      });
      console.log(`Created city with id ${createdCity.id}`);
    } catch (err) {
      console.error(err);
    }
  }

  prisma.$disconnect();
});
