import {CalendarDays} from 'lucide-react';
import DashboardComponent from '../components/dashboard/DashboardComponent';

function Dashboard (){

    const day = new Date().toLocaleDateString('en-GB', { weekday: 'long', month: 'short', day: '2-digit', year: 'numeric' });
    console.log(day);

    // const totalStudents = students.length;
    // const totalCourses = courses.length;
    // const totalRevenue = payments.reduce((total, payment) => total + payment.amountPaid, 0);
    // const pendingPayments = payments.reduce((total, payment) => total + payment.balance, 0);

    
    return  <div className="container pt-3 grid grid-cols-[1fr_1fr] lg:grid-cols-[2fr_1fr] border-2 border-(--border) rounded-xl ">
                    <section>

{/*****************************************************header**********************************************/}

                        <header className ="flex justify-between items-center">
                            <span className="flex flex-col gap-2">
                                <h1 className=" font-bold text-blue-400">
                                    Welcome back, Admin! 👋
                                </h1>
                                <p className="text-sm text-(--text-primary)">
                                    Here's what's happening with MyCodeAcademy today.
                                </p>
                            </span>
                            <span className="border-2 border-(--border) rounded-xl p-5 h-4 flex items-center gap-2 text-(--text-primary) text-sm">
                                <CalendarDays/>
                                {day}
                            </span>
                        </header>

{/****************************************************Total View Card***********************************************/}
                        <DashboardComponent />

                    </section>
                    <section>

                    </section>
            </div>
}
export default Dashboard;