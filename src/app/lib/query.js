import pool from "./db";

export async function queryDatabase(sql,params = []) {
    try{
        const [rows] = await pool.query(sql,params);
        return rows;
    }catch (error){
        throw new Error(error.message);
    }
}