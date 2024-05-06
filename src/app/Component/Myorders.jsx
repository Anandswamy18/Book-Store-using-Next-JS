import React from 'react';
import Link from 'next/link';


function MyOrders({ orderDetails }) {
    
    return (
       
                    <div className="flex flex-col items-center justify-center gap-10 mt-5 min-h-[200px]">
                        <div className="flex w-full p-10 h-[180px] rounded font-[Roboto] border-[#707070] border justify-between">
                            <div className="flex gap-10">
                                {/* Display order details based on the orderDetails */}
                                {/* For example: */}
                                {/* <img src={orderDetails.product_image} alt={orderDetails.product_name} className="w-[80px] h-[100px]"/> */}
                                <div className="flex flex-col gap-2">
                                    <h1 className="font-medium"></h1>
                                        <p className="text-[#878787] text-sm"></p>
                                    <div className="flex items-center gap-1">
                                        <h1 className="text-[18px] font-bold"></h1>
                                        <p className="line-through text-[12px] text-[#878787]"></p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center font-bold">
                                <li className="text-[#26A541] text-2xl">Order Placed on </li>
                            </div>
                        </div>
                    </div>
                
    );
}

export default MyOrders;
