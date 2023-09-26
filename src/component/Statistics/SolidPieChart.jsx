import { PieChart, Pie, Cell, Label } from 'recharts';

const SolidPieChart = ({ donationItem }) => {
    
    const data = [
        { name: 'Total', amount: 12, color: '#FF444A' },
        { name: 'Donation done', amount: 5, color: '#82ca9d' }
    ];

    const COLORS = ['#FF444A', '#82ca9d'];

    return (
        <div className='px-2'>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    dataKey="amount"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={200}
                    labelLine={false}
                >
                    {
                        data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))
                    }
                    <Label
                        value={`${((data[0].amount / (data[0].amount + data[1].amount)) * 100).toFixed(0)}%`}
                        position="center"
                        fill="#ffffff"
                        fontSize={30}
                        dy={-80}
                        dx={-30}
                    />
                    <Label
                        value={`${((data[1].amount / (data[0].amount + data[1].amount)) * 100).toFixed(0)}%`}
                        position="center"
                        fill="#ffffff"
                        fontSize={30}
                        dy={100}
                        dx={50}
                    />
                </Pie>
            </PieChart>
            <div className='sm:grid sm:justify-center md:flex md:justify-between px-5 gap-5 items-center mt-10'>
                <div className='flex justify-center items-center'>
                    <p className='text-lg font-normal'>Your Donation </p>
                    <div className='h-3 w-20 bg-[#82ca9d] ml-2 rounded'></div>
                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-lg font-normal'>Total Donation</p>
                    <div className='h-3 w-20 bg-[#FF444A] ml-2 rounded'></div>
                </div>
            </div>
        </div>
    );
};

export default SolidPieChart;
