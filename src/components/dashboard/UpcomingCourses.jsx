import { ArrowRight} from "lucide-react";
import { coursesData } from "../../data/data";
import { data } from "react-router-dom";
function UpcomingCourses (){

    const upcomingCourses = coursesData.filter((data)=> data.status=="Upcoming")
    return(
        <div className="w-full min-h-96 bg-white shadow-md rounded-2xl flex flex-col mt-6 items-center justify-center">
             <div className="w-[95%]  h-16 flex items-center justify-between">
                    <span className="text-lg font-medium">Upcoming Courses</span>
                    <span className="flex text-lg font-medium">View Schedule  <ArrowRight /></span>
            </div>
             <div className="w-[95%] h-full  grid grid-cols-1 xl:grid-cols-2
                                2xl:grid-cols-4 gap-3 flex-wrap pb-5">
              
                    {
                        upcomingCourses.map((courses)=>{
                            return(
                                  <div className="rounded-xl bg-gray-100 shadow-sm">
                                    <div key={courses.title}>
                                        <span>
                                            <img src={courses.icon} className="w-23" alt="img"/>
                                        </span>
                                        <div>
                                            <span>
                                                <pa>{courses.category}</pa>
                                            </span>
                                            <h4 className="text-xl font-medium">
                                                {courses.title}
                                            </h4>
                                        </div>
                                    </div>
                                  </div>
                            )
                        })
                    }
                
                
             
             </div>
       </div>
    )
}
export default UpcomingCourses;