// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from 'next';

type ResponseBody = {
  [key: string]: {
    [key: string]: number;
  };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const response = await fetch(
    `https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`
  );
  const ResponseBody: ResponseBody = await response.json();
  if ((id as string) in ResponseBody) {
    res.status(200).json({ price: ResponseBody[id as string]['usd'] });
  } else {
    res.status(404).json({ error: 'price not found' });
  }
}
