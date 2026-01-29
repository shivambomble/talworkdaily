import express from 'express';
import bodyParser from 'body-parser';
import { Client } from '@temporalio/client';
import { orderWorkflow } from './workflows/order.workflow';

const app = express();
app.use(bodyParser.json());

const client = new Client();

app.post('/order-created', async (req, res) => {
  const orderId = req.body.event.data.new.id;

  console.log('Order created:', orderId);

  await client.workflow.start(orderWorkflow, {
    args: [orderId],
    taskQueue: 'hello-world',
    workflowId: orderId,
  });

  res.json({ status: 'workflow started' });
});

app.listen(4000, () =>
  console.log('Backend webhook running on port 4000')
);
