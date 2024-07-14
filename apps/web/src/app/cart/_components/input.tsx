import React, { useEffect, useState } from 'react';
import { axiosInstance } from '@/lib/axios';
import { useDebounce } from 'use-debounce';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { QtyProps } from '@/model/cart.model';

const Quantity: React.FC<QtyProps> = ({ cart, fetchCart }) => {
  const [quantity, setQuantity] = useState(cart.quantity);
  const [debouncedQuantity] = useDebounce(quantity, 1500);

  const updateQuantity = async (cartId: string, newQuantity: number) => {
    try {
      const response = await axiosInstance().patch(`/cart/${cartId}`, {
        quantity: newQuantity,
      });
      // console.log('Update successful:', response.data);
      fetchCart();
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

  useEffect(() => {
    if (debouncedQuantity !== undefined) {
      updateQuantity(cart.id, debouncedQuantity);
    }
  }, [debouncedQuantity]);

  const handleDecrement = () => {
    const newQuantity = quantity - 1;
    if (newQuantity >= cart.stock.quantity) {
      setQuantity(cart.stock.quantity);
    } else {
      setQuantity(Math.max(1, newQuantity));
    }
  };

  const handleIncrement = () => {
    const newQuantity = Math.min(quantity + 1, cart.stock.quantity);
    setQuantity(newQuantity);
  };

  const handleManual = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity)) {
      newQuantity = 0;
    } else {
      newQuantity = Math.min(Math.max(1, newQuantity), cart.stock.quantity);
    }
    setQuantity(newQuantity);
  };

  return (
    <div className="flex justify-center items-center ">
      <button
        className="text-xs flex justify-center items-center w-6 h-6 rounded-tl rounded-bl text-white bg-blue-600"
        onClick={handleDecrement}
        // disabled={quantity <= 1}
      >
        <FaMinus />
      </button>
      <input
        type="text"
        className="w-10 h-6 text-center border border-gray-400"
        value={quantity.toString()}
        onChange={handleManual}
        style={{ outline: 'none' }}
      />
      <button
        className="text-xs flex justify-center items-center w-6 h-6 rounded-tr rounded-br text-white bg-blue-600"
        onClick={handleIncrement}
        disabled={quantity > cart.stock.quantity}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default Quantity;
