
import HttpStatusCodes from '@src/constants/HttpStatusCodes';
// import { getAll , deleteById, createData , updateById } from '';
import { IReq, IRes } from './types/types';
import express from 'express';
import { getAll , deleteById, createData , updateById } from '@src/services/Product.service';

const routes = express.Router()

// **** Functions **** //
// routes.('product')
/**
 * Get all users.
 */
routes.get('/getall',   async (req, res)  =>{
  const product =  await getAll(req, res);
  return res.status(HttpStatusCodes.OK).json({ product });
})

/**
 * Add one user.
 */
routes.post('create', async (req, res) => {
  const { user } = req.body;
  await  createData;
  return res.status(HttpStatusCodes.CREATED).end();
})

/**
 * Update one user.
 */
routes.put('update/:id',async (req, res: IRes) => {
  const { user } = req.body;
  await updateById
  return res.status(HttpStatusCodes.OK).end();
})

/**
 * Delete one user.
 */
//   routes.delete('delet/:id', async (req, res: IRes)  =>{
//   const id = +req.params;
//   await ProductService.delete(id);
//   return res.status(HttpStatusCodes.OK).end();
// }
// )

// **** Export default **** //

export default routes
