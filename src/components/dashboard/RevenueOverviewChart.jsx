import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { usePayment } from "../../context/PaymentContext";

function RevenueOverviewChart(){
     const {chartData,payments,totalRevenue} = usePayment();

    
   console.log(payments);

   

    return(
        <div className="w-full flex flex-col items-center rounded-xl mt-5 mb-5 min-h-20
                         bg-white shadow-sm">

          <div className="w-full flex h-15 items-cente px-5 py-5 justify-between">
                    
                    <div>
                        <h3 className="font-bold">Revenue Overview</h3>

                    </div>
                    <select className="border h-10 w-30 rounded-md">
                        <option value="this-month">
                            This month
                        </option>

                        <option value="last-month">
                            Last month
                        </option>

                        <option value="last-3-months">
                            Last 3 months
                        </option>

                        <option value="this-year">
                            This year
                        </option>
                    </select>
            </div>                
            <div className="flex flex-col justify-start w-full px-5 font-bold">
               <h1>{totalRevenue}  </h1>   
                <p className="px-1 font-medium">Totoal Revenue</p>
            </div>  
        <ResponsiveContainer width="100%" height={300} >
            <AreaChart  data={chartData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />

                <Area
                type="monotone"
                dataKey="revenue"
                fill="#2563eb"
                stroke="#2563eb"
                fillOpacity={0.15}
                />
        </AreaChart>
</ResponsiveContainer>
        </div>
    )
}

export default RevenueOverviewChart;