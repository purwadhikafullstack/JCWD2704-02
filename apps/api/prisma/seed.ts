import { copyCities } from './data/cities';
import prisma from '@/prisma';

async function main() {
  await prisma.$transaction(async (prisma) => {
    try {
      const cities = await copyCities();
      await prisma.city.createMany({
        data: cities.map((city: any) => ({
          id: Number(city.city_id),
          province: city.province,
          type: city.type,
          cityName: city.city_name,
          postalCode: city.postal_code,
        })),
      });
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  });
}

main();
