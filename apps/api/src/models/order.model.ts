import { Paid, Status } from '@prisma/client';

export type TOrder = {
  id: string;
  invoice: string;
  userId: string;
  totalPrice: number;
  addressId: string;
  shippingCost?: number | null;
  shippedAt?: Date | null;
  paidType: Paid;
  snap_token?: string | null;
  paidProof?: string | null;
  updatedAt: Date;
};
