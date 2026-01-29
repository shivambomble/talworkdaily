import { gql } from '@apollo/client/core';
import { useMutation, useQuery } from '@apollo/client/react';

type Order = {
  id: string;
  product: string;
  amount: number;
  status: string;
};

type OrdersQueryData = {
  orders: Order[];
};

const GET_ORDERS = gql`
  query {
    orders(order_by: { created_at: desc }) {
      id
      product
      amount
      status
    }
  }
`;

const CREATE_ORDER = gql`
  mutation {
    insert_orders_one(object: {
      product: "Demo Product",
      amount: 500
    }) {
      id
    }
  }
`;

export default function App() {
  const { data, refetch, loading } = useQuery<OrdersQueryData>(
    GET_ORDERS,
    {
      pollInterval: 2000,
    }
  );

  const [createOrder] = useMutation(CREATE_ORDER, {
    onCompleted: () => refetch(),
  });

  return (
    <div style={{ padding: 20 }}>
      <h1>Order Dashboard</h1>

      <button onClick={() => createOrder()}>
        Create Order
      </button>

      {loading && <p>Loading...</p>}

      <ul>
        {data?.orders.map((o) => (
          <li key={o.id}>
            {o.product} — ₹{o.amount} — <b>{o.status}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}
