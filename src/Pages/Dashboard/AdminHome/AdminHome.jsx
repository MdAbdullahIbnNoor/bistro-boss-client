import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { FaMoneyBillAlt, FaUsers, FaBook, FaShoppingCart } from 'react-icons/fa';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, PieChart, Pie, Legend } from 'recharts';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const AdminHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data: stats, isLoading } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    });

    const { data: chartData, isLoading: loadingMamma } = useQuery({
        queryKey: ['order-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/order-stats')
            return res.data;
        }
    })

    // custom shape for the bar chart
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    // custom shape for the pie chart
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    const pieChartData = chartData.map(data => {
        return { name: data.category, value: data.revenue }
    })

    if (isLoading || loadingMamma) {
        return (
            <span className="loading loading-dots loading-xl w-24 mx-auto"></span>
        );
    }

    return (
        <div>
            <h2 className='text-3xl font-medium mb-10'>
                <span>Hi, Welcome {<span className='text-blue-600 font-bold'> {user?.displayName} </span> || 'Back'}</span>
            </h2>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-green-400 to-green-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaMoneyBillAlt size={24} color="green" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Revenues</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">${stats.revenue}</p>
                    </div>
                </div>
                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-blue-400 to-blue-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaUsers size={24} color="blue" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Customers</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.users}</p>
                    </div>
                </div>

                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaBook size={24} color="yellow" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Recipes</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.menuItems}</p>
                    </div>
                </div>

                <div className="p-4 rounded-lg shadow-lg bg-gradient-to-br from-red-400 to-red-600 text-white">
                    <div className="flex items-center justify-center">
                        <span className="relative w-10 h-10 p-2 bg-white rounded-full">
                            <FaShoppingCart size={24} color="red" />
                        </span>
                        <p className="ml-2 text-white text-lg font-semibold">Orders</p>
                    </div>
                    <div className="flex flex-col justify-center items-center">
                        <p className="my-4 text-4xl font-bold text-white">{stats.orders}</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-around items-center mt-24 ">
                <div className="w-1/2 mr-16">
                    <BarChart
                        width={560}
                        height={350}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Bar dataKey="quantity" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 6]} />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
                <div className="w-1/2">
                    <PieChart width={380} height={360}>
                        <Pie
                            data={pieChartData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={130}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {pieChartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend></Legend>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
