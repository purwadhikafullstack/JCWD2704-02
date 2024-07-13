import React, { useEffect } from 'react';
import { GoTrash } from 'react-icons/go';
import { formatPrice } from './format';
import Quantity from './input';
import { CartTableProps } from '@/model/cart.model';

const CartTable: React.FC<CartTableProps> = ({
  cartData,
  fetchCart,
  totalProduct,
  deleteCart,
}) => {
  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <div className=" w-full flex flex-col gap-2">
      <div className="flex justify-between px-2">
        <div className="text-xs font-medium text-gray-500 uppercase">
          Product
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase hidden">
          Price
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase hidden">
          Quantity
        </div>
        <div className="text-xs font-medium text-gray-500 uppercase">Total</div>
      </div>
      <div className="flex flex-col gap-2 w-full">
        {cartData?.map((cart) => (
          <div
            key={cart.id}
            className={`flex flex-col justify-between h-full rounded-lg border border-gray-300 ${cart.stock.quantity === 0 ? 'bg-red-50' : cart.quantity > cart.stock.quantity ? 'bg-gray-100' : ''}`}
          >
            {cart.quantity > cart.stock.quantity && (
              <span
                className={`${cart.stock.quantity === 0 ? 'bg-red-100' : cart.quantity > cart.stock.quantity ? 'bg-gray-200' : ''} font-semibold w-full px-2 py-1 text-xs text-red-700`}
              >
                {cart.stock.quantity === 0
                  ? '*out of stock '
                  : cart.quantity > cart.stock.quantity
                    ? '*insufficient stock '
                    : ''}
                {/* ({cart.stock.quantity}) */}
              </span>
            )}
            <div className="flex justify-between p-2">
              <div className="flex gap-2 items-center w-full">
                <img
                  className="h-14 w-14 md:h-20 md:w-20 object-cover rounded"
                  src="https://assets.klikindomaret.com/products/20127820/20127820_1.jpg"
                  alt=""
                />
                <div
                  className={`font-medium flex flex-col text-wrap gap-1 text-sm ${
                    cart.quantity > cart.stock.quantity ? 'text-gray-500' : ''
                  }`}
                >
                  <div
                    className="text-wrap overflow-hidden"
                    style={{
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }}
                  >
                    {cart.product.name}
                  </div>
                  <span className="md:hidden font-normal">
                    Rp {formatPrice(cart.product.price)}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1 justify-between ">
                <div
                  className={`text-sm text-right font-semibold ${
                    cart.quantity > cart.stock.quantity ? 'text-gray-500' : ''
                  }`}
                >
                  Rp{' '}
                  {formatPrice(totalProduct(cart.quantity, cart.product.price))}
                </div>
                <div className="flex gap-1 items-end justify-end">
                  <button
                    onClick={() => deleteCart(cart.id)}
                    className="text-red-700 p-1"
                  >
                    <GoTrash />
                  </button>
                  <div className="text-sm  ">
                    <Quantity cart={cart} fetchCart={fetchCart} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;
