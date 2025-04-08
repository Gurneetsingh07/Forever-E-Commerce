import React from 'react'

const OrderManagement = () => {
    const order=[{
        _id:12312321,
        user:{
            name:"john doe",
        },
        totalPrice:110,
        status:"processing",
    },
];
  return (
    <div className='max-w-7xl mx-auto p-6'>
      <h2 className='text-2xl font-bold mb-6'>Order Management</h2>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className='min-2-full text-left text-gray-500'>
                <thead className='bg-gray-100 text-xs uppercase text-gray-700'>
                   <tr>
                    <th className='py-3 px-4'>Order Id</th>
                    <th className='py-3 px-4'>Customer</th>
                    <th className='py-3 px-4'>Total Price</th>
                    <th className='py-3 px-4'>Status</th>
                    <th className='py-3 px-4'>Actions</th>
                    </tr> 
                </thead>
                <tbody>
                    {order.length>0 ? (
                        order.map((order)=>(
                            <tr key={order._id} className='border-b hover:bg-gray-50 cursor-pointer'>
                                <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                                #{order._id}    
                                </td>
                            </tr>
                        ))
                    ): (<tr></tr>)}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default OrderManagement
