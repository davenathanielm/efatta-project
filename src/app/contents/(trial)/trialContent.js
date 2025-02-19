"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/app/lib/axios";

export default function Trial(){
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts,
    });
    // data.data (data is from axios return name)
    const products = data?.data || []; 
    console.log(data);
    return(
        <div className="min-h-screen bg-white text-black pt-5" >
            <h2 className="text-center border-b border-gray-900/10 pb-1  mx-44">Input Product</h2>
            <div className="p-4 flex flex-col bg-white lg:mx-36 mx-5 rounded-lg mt-5 shadow-2xl">
                <form action="">
                    <div className=" ">
                        <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
                            {/* firstname */}
                            <div className="sm:col-span-1">
                                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">
                                    name of product
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 border-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            
                            {/* qty */}
                            <div className="sm:col-span21">
                                <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                                   qty product
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="qty"
                                    name="qty"
                                    type="number"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white border-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>

                            {/* price */}
                            <div className="sm:col-span-1">
                                <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
                                  Price
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="price"
                                    name="price"
                                    type="number"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white border-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                            
                            {/* stock */}
                            <div className="sm:col-span-1">
                                <label htmlFor="stock" className="block text-sm/6 font-medium text-gray-900">
                                  Stock
                                </label>
                                <div className="mt-2">
                                    <input
                                    id="stock"
                                    name="stock"
                                    type="number"
                                    autoComplete="given-name"
                                    className="block w-full rounded-md bg-white border-2 px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                        <button type="button" className="text-sm/6 font-semibold text-gray-900">
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>

            {/* table */}
            <div className="mx-36 mt-28">
                <h2 className="font-bold text-xl text-center mb-2">Table for Products</h2>
                <table className="min-w-full border border-gray-300 divide-y divide-gray-200">
                    <thead className="bg-gray-100 text-center">
                        <tr>
                            <th className="px-6 py-3  text-sm font-medium text-gray-600 uppercase">No</th>
                            <th className="px-6 py-3  text-sm font-medium text-gray-600 uppercase">Name</th>
                            <th className="px-6 py-3  text-sm font-medium text-gray-600 uppercase">Qty</th>
                            <th className="px-6 py-3  text-sm font-medium text-gray-600 uppercase">Price</th>
                            <th className="px-6 py-3  text-sm font-medium text-gray-600 uppercase">Stock</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                       {products?.map((product) => (
                            <tr key={product.id} className="text-center">
                            <td className="border p-2">{product.id}</td>
                            <td className="border p-2">{product.name}</td>
                            <td className="border p-2">{product.qty ?? 0}</td>
                            <td className="border p-2">${product.price}</td>
                            <td className="border p-2">{product.stock}</td>
                            </tr>
                        ))}
                    </tbody>
                   
                    {/* <tbody className="divide-y divide-gray-200">
                        <tr className="hover:bg-gray-50 text-center">
                            <td className="py-4">1</td>
                            <td className="py-4">John Doe</td>
                            <td className="py-4">john@example.com</td>
                            <td className="py-4">Admin</td>
                            <td className="">20</td>
                        </tr>
                        <tr className="hover:bg-gray-50 text-center">
                            <td className="py-4">2</td>
                            <td className="py-4">Jane Smith</td>
                            <td className="py-4">jane@example.com</td>
                            <td className="py-4">Editor</td>
                            <td className="">10</td>
                        </tr>
                    </tbody> */}
                </table>
            </div>
        </div>
    );
}