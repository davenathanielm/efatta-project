// pages/api/products/index.js
import pool from "@/app/lib/db";
import { getAllProductsService, insertProductService, getProductByIdService, updateProductService } from "../../../services/productsService";

export default async function handler(req, res) {
  // const id = req.query
  if (req.method === 'GET') {
      const results = await getAllProductsService();
      if(results.success){
        res.status(200).json({
          data : results.data,
          message : results.message
        });
      }
      else{
        res.status(500).json({ success: false, message: results.message });
      }
    } 

  else if (req.method === 'POST') {
    const { name, qty, price, stock } = req.body;
    const results = await insertProductService(name, qty, price, stock);
    if(results.success){
      res.status(201).json({
        data: results.data
      })
    }
    else{
      res.status(500).json({ error: results.message});
    }
  } 
  
  else {
    res.setHeader('Allow', ['GET', 'POST', 'PUT']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

