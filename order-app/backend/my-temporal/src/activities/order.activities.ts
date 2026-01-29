import { pool } from '../db';

export async function processOrder(orderId: string) {
  console.log('Processing order:', orderId);

  // Update status to PROCESSING
  await pool.query(
    `UPDATE orders SET status='PROCESSING' WHERE id=$1`,
    [orderId]
  );

  // Simulate work
  await new Promise(res => setTimeout(res, 3000));

  // Update status to COMPLETED
  await pool.query(
    `UPDATE orders SET status='COMPLETED' WHERE id=$1`,
    [orderId]
  );

  console.log('Order completed:', orderId);
}
