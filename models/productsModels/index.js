import pool from "@/app/lib/db";
import {queryDatabase} from "@/app/lib/query";

export async function getAllProductsDatabase() {
    return await queryDatabase('SELECT * FROM products');
}

export async function insertProductDatabase(name, qty, price, stock) {
    const results = await queryDatabase('INSERT INTO products (name, qty, price, stock) VALUES(?,?,?,?)',
        [name, qty, price, stock]
    );
    return results.insertId;
}

export async function getProductByIdDatabase(id) {
    const result = await queryDatabase("SELECT * FROM products WHERE id = ?",[id]);
    return result.length? result[0]: null;
}

export async function updateProductDatabase(id, name, qty, price, stock) {
    const result = await queryDatabase("UPDATE products set name = ?,qty = ?,price = ?,stock = ? WHERE id = ?",[name,qty,price,stock,id]);
    return result.length? result[0]: null;
}

export async function deleteProductDatabase(id) {
    const result = await queryDatabase("DELETE FROM products WHERE id = ?",[id]);
    return result.affectedRows;
}