"use client";

import { useQuery } from "@tanstack/react-query";
import styles from "./page.module.css";
import { OrdersApi } from "../../utils/pretend";

export default function Orders() {
  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () => new OrdersApi().getAllOrders(),
  });

  return (
    <div>
      {data?.map((order) => (
        <div key={order.id} className={styles.order}>
          <div>{order.id}</div>
          <div>
            {order.items.map((orderItem) => (
              <div key={orderItem.item.id}>
                <div>{orderItem.item.name}</div>
                <div>{orderItem.item.price}</div>
                <div>{orderItem.quantity}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
