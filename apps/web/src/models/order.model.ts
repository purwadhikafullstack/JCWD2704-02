import { TStore } from './store.model';

export type TOrder = {
  id: string;
  user: TUser;
  invoice: string;
  status: string;
  totalPrice: number;
  address: {
    address: string;
  };
  OrderItem: [TOrderItem];
  createdAt: Date;
  paidAt: Date;
  processedAt: Date;
  shippedAt: Date;
  confirmedAt: Date;
  cancelledAt: Date;
  payment_method: string;
  paidType: string;
  discountPrice: number;
  snap_token: string;
  store: TStore;
  checkedAt: Date;
  updatedAt: Date;
  expiry_time: Date;
  shippingCost: number;
};

type TUser = {
  id: string;
  name: string;
  email: string;
};

export type TOrderItem = {
  id: string;
  product: {
    id: string;
    name: string;
    price: number;
    ProductImage: [TImage];
  };
  store?: {
    name?: string;
    address?: string;
    city?: {};
  };
  quantity: number;
  price: number;
};

export type TImage = {
  id: string;
};
