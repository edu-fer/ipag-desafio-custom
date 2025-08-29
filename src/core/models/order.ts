export interface Order {
  id: number;
  order_id: string;
  order_number: string;
  status: string;
  total_value: number;
  customer: Customer;
  items: Item[];
  created_at: string;
}

interface Item {
  product_name: string;
  quantity: number;
  unit_value: number;
  total_value: number;
}

interface Customer {
  id: number;
  name: string;
  document: string;
  email: string;
  phone: string;
}
