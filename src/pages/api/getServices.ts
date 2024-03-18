import { NextApiRequest, NextApiResponse } from 'next';
import {getAllServices} from "@/pages/utils/postsFetcher";

export default async function GetServices(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.send({
      services: await getAllServices(),
    });
    res.status(200).end();
  } catch (err) {
    console.log('ERROR', err);
    res.status(400).send({ message: err });
  }
}
