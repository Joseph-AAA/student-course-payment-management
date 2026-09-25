import { PieChart, Pie } from "recharts";

const data = [
  { name: "Paid", value: 7250, fill: "#22c55e"},
  { name: "Partial", value: 3450 , fill: "#f59e0b"},
  { name: "Pending", value: 1750,  fill: "#ef4444" },
];

export default function PaymentStatusPieChart() {
  return (
    <div className="w-full rounded-xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-lg font-semibold">Payment Status</h2>

      <div className="relative flex items-center justify-center">
        <PieChart
          responsive
          style={{
            width: "100%",
            maxWidth: "300px",
            aspectRatio: 1,
          }}
        >
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="50%"
            outerRadius="80%"
            isAnimationActive={false}
          /> 
          
          
        </PieChart>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold">RM 12,450</span>
            <span className="text-md font-medium text-black">Total</span>
        </div>
      </div>
      
    </div>
  );
}