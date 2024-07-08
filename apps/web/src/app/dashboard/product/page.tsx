'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { RxAvatar } from 'react-icons/rx';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
import { fetchProduct } from '@/helpers/fetchProduct';
import { useDebounce } from 'use-debounce';
import { TProduct } from '@/models/product';
type Props = {};

const Store = (props: Props) => {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState<TProduct[]>([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [value] = useDebounce(search, 1000);

  useEffect(() => {
    async function getProduct() {
      try {
        const product = await fetchProduct(page, limit, value);
        setProducts(product.data);
      } catch (error) {
        console.log(error);
      }
    }
    getProduct();
  }, [page, limit, value]);

  return (
    <>
      <section className="bg-[#F4F7FE] flex w-full top-[49px] left-[290px]">
        <Sidebar />
        <div className="py-6 px-10 w-full">
          {/* header, nanti dipisah component lagi */}
          <div className="flex justify-between items-center">
            {/* ini dikiri */}
            <div>
              <div className="font-dm-sans text-base font-medium leading-6 text-left text-[#707EAE]">
                Dashboard/Products
              </div>
              <div className="font-dm-sans text-display-small font-bold text-left">
                Products
              </div>
            </div>
            {/* ini dikanan */}
            <div className="flex items-center gap-10 bg-white px-10 py-2 rounded-full">
              <div className="flex gap-5 py-1">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-[#F4F7FE] rounded-full pl-5 py-1 font-dm-sans text-14px"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-[#F4F7FE] px-3 text-[#2B3674] font-dm-sans text-14px font-bold rounded-full">
                  +Product
                </button>
              </div>
              <div>
                <RxAvatar className="h-7 w-7" />
              </div>
            </div>
          </div>
          {/* content-utama */}
          <div className="py-10 flex justify-between gap-5 w-full">
            <div className="w-full">
              <div>
                <img
                  src="/carousel.jpeg"
                  alt="carousel"
                  className="h-[400px] w-full rounded-xl"
                />
              </div>
              <div className="flex justify-between items-center py-8">
                <div className="font-dm-sans text-24px font-bold text-[#2B3674]">
                  All Products
                </div>
                <div className="flex gap-8 font-bold text-customBlue text-14px items-center">
                  <div className="bg-white px-5 py-1 rounded-full">Buah</div>
                  <div>Sayur</div>
                  <div>Daging Sapi</div>
                  <div>Daging Ayam</div>
                </div>
              </div>
              {/* card buat product */}
              <div className="flex flex-wrap gap-5">
                {/* ini cardnya */}
                {products.map((product) => {
                  return (
                    <div
                      key={product.id}
                      className="w-[280px] h-[370px] bg-white rounded-xl"
                    >
                      <div className="flex justify-center items-center py-5">
                        <img
                          src={`http://localhost:8000/products/images/${product.ProductImage[0].id}`}
                          alt="sample"
                          className="h-[180px] w-[250px] rounded-xl"
                        />
                      </div>
                      <div className="flex justify-between items-center gap-1 px-4 pb-8">
                        <div>
                          <div className="font-dm-sans font-bold text-18px text-[#1B2559] truncate w-[110px]">
                            {product.name}
                          </div>
                          <div className="font-dm-sans font-medium text-14px text-[#A3AED0] truncate w-[110px]">
                            Category
                          </div>
                        </div>
                        <div className="font-dm-sans font-bold text-18px text-[#1B2559]">
                          IDR {product.price}
                        </div>
                      </div>
                      <div className="flex justify-between items-center px-4">
                        <button className="text-14px text-customBlue font-bold">
                          Delete Product
                        </button>
                        <button className="bg-[#11047A] text-white px-5 py-1 rounded-full">
                          Edit
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center items-center gap-5 pt-5">
                <button
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                  className="flex items-center font-bold gap-1 bg-[#11047A] text-white px-5 py-1 rounded-full"
                >
                  <MdNavigateBefore /> Prev
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  disabled={products.length < limit}
                  className="flex items-center font-bold gap-1 bg-[#11047A] text-white px-5 py-1 rounded-full"
                >
                  Next <MdNavigateNext />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Store;
