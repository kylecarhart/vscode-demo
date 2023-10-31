export type Item = {
  id: string;
  name: string;
  price: number;
  description: string;
};

export type OrderItem = {
  item: Item;
  quantity: number;
};

export type OrderRequest = {
  items: OrderItem[];
  total: number;
};

export type Order = {
  id: string;
  items: OrderItem[];
  total: number;
};

export interface ErrorResponse {
  message: string;
  code: string;
}
