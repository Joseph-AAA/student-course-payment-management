import { createContext, useContext, useMemo } from "react";
import { payments } from "../data/data";
const PaymentContext = createContext();

export function PaymentProvider ({children}){

    const totalRevenue = useMemo(()=>{
      return  payments.reduce((total,current)=>{
        return   (total+current.amountPaid)},0)
    },[]);
    console.log(totalRevenue);

     const chartData = useMemo(() => {
    const monthlyRevenue = {};

    payments.forEach((payment) => {
      if (!payment.paymentDate) return;

      const month = new Date(payment.paymentDate).toLocaleDateString(
        "en-US",
        { month: "short" }
      );

      if (!monthlyRevenue[month]) {
        monthlyRevenue[month] = 0;
      }

      monthlyRevenue[month] += payment.amountPaid;
    });

    return Object.entries(monthlyRevenue).map(([month, revenue]) => ({
      month,
      revenue,
    }));
  }, []);

    return (
        <PaymentContext.Provider value={{payments,totalRevenue,chartData}}>
            {children}
        </PaymentContext.Provider>
    )
}


export function usePayment(){
        return useContext(PaymentContext);
}