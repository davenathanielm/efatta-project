import { deleteProductService, getProductByIdService, updateProductService } from "../../../services/productsService";

export default async function handler(req, res) {
    const { id } = req.query;
    
    if(req.method === 'GET'){
        const result = await getProductByIdService(id);
        if(result.success){
            res.status(200).json({
                data: result.data
            });
        }else{
            res.status(404).json({success: false, message: result.message});
        }
    }
    else if(req.method === 'PUT'){
        const {name, qty, price, stock} = req.body;
        const result = await updateProductService(id, req.body.name, req.body.qty, req.body.price, req.body.stock);
        if(result.success){
            res.status(200).json({
                message: result.message
            });
         }else{
            res.status(result.statuss).json({success: false, message: result.message});
        }

    }
    else if(req.method === 'DELETE'){
        const result = await deleteProductService(id);
        if(result.success){
            res.status(200).json({
                message: result.message
            });
        }else{
            res.status(result.statuss).json({success: false, message: result.message});
        }
    }
    else{
        res.setHeader('Allow', ['GET', 'PUT','DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}