import { proxyActivities } from '@temporalio/workflow';

const { processOrder } = proxyActivities<{
  processOrder(orderId: string): Promise<void>;
}>({
  startToCloseTimeout: '30 seconds',
});

export async function orderWorkflow(orderId: string) {
  await processOrder(orderId);
}
