'use client';
import React, { useEffect, useState } from 'react';
import { LiaShippingFastSolid } from 'react-icons/lia';
import { FaChevronDown } from 'react-icons/fa';
import { formatPrice } from './format';
import { axiosInstance } from '@/lib/axios';
import CartTable from './cartItem';
import { IoCartOutline } from 'react-icons/io5';
import { BiSolidDiscount } from 'react-icons/bi';

interface CartItem {
  id: string;
  productId: string;
  quantity: number;
  product: {
    id: string;
    name: string;
    price: number;
  };
  stock: {
    quantity: number;
  };
}

interface Address {
  id: string;
  address: string;
  city: {
    province: string;
    cityName: string;
    postalCode: string;
  };
}

const Cart: React.FC = () => {
  const [cartData, setCartData] = useState<CartItem[]>([]);
  const [shippingAddress, setShippingAddress] = useState<Address | null>(null);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  const userId = 'clyk3kw1j0001x82k2rskxtfh';

  const fetchCart = async () => {
    try {
      const response = await axiosInstance().get(`/cart/${userId}`);
      const { data } = response.data;
      setCartData(data);
    } catch (error) {
      console.error('Error fetching cart data:', error);
    }
  };

  const fetchShippingAddress = async () => {
    try {
      const response = await axiosInstance().get(`/order/a/${userId}`);
      const { data } = response.data;
      setShippingAddress(data);
    } catch (error) {
      console.error('Error fetching shipping address:', error);
    }
  };

  useEffect(() => {
    fetchCart();
    fetchShippingAddress();
  }, []);

  const calculateTotalPrice = () => {
    let total = 0;
    cartData.forEach((item) => {
      if (item.quantity <= item.stock.quantity) {
        total += item.product.price * item.quantity;
      }
    });
    return total;
  };

  useEffect(() => {
    setTotalPrice(calculateTotalPrice());
    setTotalQuantity(cartData.reduce((acc, cart) => acc + cart.quantity, 0));
  }, [cartData]);

  const totalProduct = (quantity: number, price: number) => {
    return quantity * price;
  };

  const deleteCart = async (cartId: string) => {
    try {
      await axiosInstance().delete(`/cart/${cartId}`);
      fetchCart();
    } catch (error) {
      console.error('Error deleting cart:', error);
    }
  };

  const payGateway = async () => {
    try {
      const response = await axiosInstance().post(`/order/${userId}`, {
        addressId: shippingAddress?.id,
        paidType: 'gateway',
      });
      const { data } = response.data;
      window.snap.pay(data.token);
    } catch (error) {
      console.error('Error initiating Midtrans payment:', error);
    }
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.sandbox.midtrans.com/snap/snap.js';
    script.setAttribute(
      'data-client-key',
      process.env.NEXT_PUBLIC_CLIENT || '',
    );
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="p-5 md:p-10 flex flex-col md:flex-row md:justify-between gap-5 md:gap-10 bg-gray-100">
      <div className="rounded-xl bg-white w-full overflow-hidden shadow-md border border-gray-200">
        <div className="p-5 flex flex-col gap-3 ">
          <div className="text-2xl font-semibold flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <IoCartOutline /> Shopping Cart
            </div>
            <span className="font-semibold text-base">
              {totalQuantity} {totalQuantity > 1 ? 'items' : 'item'}
            </span>
          </div>
          <hr />
          <CartTable
            cartData={cartData}
            fetchCart={fetchCart}
            totalProduct={totalProduct}
            deleteCart={deleteCart}
          />
          {!cartData && <p>Your cart is empty</p>}
        </div>
      </div>
      <div className="rounded-xl bg-white w-full md:w-[500px] h-full p-5 shadow-md border border-gray-200">
        <div className="flex flex-col gap-3">
          <div className="font-semibold text-2xl">Order Summary</div>
          <hr />
          <div className="flex flex-col bg-blue-100 rounded-xl border border-blue-400 p-4 gap-1">
            <div className="flex justify-between items-center text-blue-700 ">
              <div className="flex gap-3 items-center font-semibold pb-1">
                <LiaShippingFastSolid className="text-2xl" />
                Shipping Address
              </div>
              <div className="text-lg">
                <FaChevronDown />
              </div>
            </div>
            <div className="text-sm">
              {shippingAddress?.address}
              {shippingAddress?.city && (
                <span className="text-sm">
                  , {''}
                  {shippingAddress.city.province},{' '}
                  {shippingAddress.city.cityName},{' '}
                  {shippingAddress.city.postalCode}
                </span>
              )}
            </div>
          </div>
          <hr />
          <div className="flex flex-col gap-2">
            <div className="text-xl font-semibold">Price Details</div>
            <div className="flex justify-between items-center font-semibold ">
              <span className="font-normal ">Subtotal</span>
              Rp {formatPrice(totalPrice)}
            </div>
            <div className="flex justify-between items-center font-semibold ">
              <span className="font-normal ">Shipping</span>
              Rp XX.XXX
            </div>
            <div className="flex justify-between items-center font-semibold ">
              <span className="font-normal ">Discount</span>
              Rp XX.XXX
            </div>
            <hr />
            <div className="flex justify-between items-center font-semibold text-lg">
              <span className="">Total Payment</span>
              Rp {formatPrice(totalPrice)}
            </div>
            <hr />
            <button className="flex justify-center w-full p-2 items-center gap-2 rounded-full border-2 border-blue-500 text-blue-700 font-semibold">
              <BiSolidDiscount className="text-2xl" />
              Apply Voucher
            </button>
            <button
              onClick={payGateway}
              className="flex justify-center bg-blue-600 text-white text-lg rounded-full p-2 font-semibold"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
