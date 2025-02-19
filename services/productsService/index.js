import { getAllProductsDatabase , insertProductDatabase, getProductByIdDatabase, updateProductDatabase, deleteProductDatabase } from "../../models/productsModels";

export async function getAllProductsService() {
    try{
        const products = await getAllProductsDatabase();
        return {success: true, data: products , message: 'Products retrieved successfully'}; ;
    }catch(error){
        return {success: false, message: error.message};
    }
}

export async function insertProductService(name, qty, price, stock){
    if(!name || !qty || !price || !stock){
        return {success: false, message: 'Please provide all details'};
    }
    try{
        const results= await insertProductDatabase(name, qty, price, stock);
        return {success: true, data: results, message: 'Product inserted successfully'};

    }catch(error){
        return {success: false, message: error.message};
    }
}

export async function getProductByIdService(id){
    if(!id){
        return {success: false, message: 'Please input id product'};
    }
    try{
        const product = await getProductByIdDatabase(id);
        if(product){
            return {success: true, data: product, message: 'Product retrieved successfully'};
        }else{
            return {success: false, message: 'Product not found'}
        }
        }catch(error){
        return {success:false, message: error.message};
    }
}

export async function updateProductService(id, name, qty, price, stock){
    if(!id || !name || !qty || !price || !stock){
        return {success: false, message: 'Please provide all details' , statuss: 400};
    }
    try{
        const results= await updateProductDatabase(id, name, qty, price, stock);
        if (!results){
            return {success: false, message: 'Product not found',statuss: 404};
        }
        else{
            return {success: true, data: results, message: 'Product updated successfully'};
        }

    }catch(error){
        return {success: false, message: error.message};
    }
    
}

export async function deleteProductService(id){
    if(!id){
        return {success: false, message: 'Please input id product', statuss: 400};
    }
    try{
        const results= await deleteProductDatabase(id);
        if(results){
            return {success: true, data: results, message: 'Product deleted successfully'};
        }else{
            return {success: false, message: 'Product not found',statuss: 404}
        }
    }catch(error){
        return {success: false, message: error.message, statuss: 500};
    }
}
