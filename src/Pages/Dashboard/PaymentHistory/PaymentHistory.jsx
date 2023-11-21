import React from 'react'
import useAuth from '../../../hooks/useAuth'
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <h1 className='text-3xl font-medium'>Total Payments: {payments.length}</h1>
            <div className="overflow-x-auto mt-16 w-4/5 mx-auto rounded-xl">
                <table className="table">
                    <thead className='bg-amber-600 text-white font-medium text-base'>
                        <tr>
                            <th>#</th>
                            <th>Email</th>
                            <th>Transaction ID</th>
                            <th>Total Price</th>
                            <th>Status</th>
                            <th>Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, idx) => <tr key={payment._id}>
                                <th>{idx + 1}</th>
                                <td>{payment.email}</td>
                                <td>{payment.transactionId}</td>
                                <td>${payment.price}</td>
                                <td className='text-warning font-bold'>{payment.status}</td>
                                <td>{payment.date.slice(0,10)}</td>
                            </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default PaymentHistory