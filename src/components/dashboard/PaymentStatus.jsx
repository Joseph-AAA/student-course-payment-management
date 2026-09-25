import PaymentStatusPieChart from './PaymentStatusPieChart'
function PaymentStatus(){
    return(
        <div className="w-full bg-white min-h-96 rounded-xl flex justify-center items-center">
            <div className="w-[90%] h-[90%] mt-2 rounded-2xl">
                    <PaymentStatusPieChart />
            </div>
        </div>
    )
}
export default PaymentStatus;