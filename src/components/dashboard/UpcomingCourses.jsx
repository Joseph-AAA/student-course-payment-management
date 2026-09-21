import { ArrowRight, CalendarDays} from "lucide-react";
import { coursesData } from "../../data/data";
import { data } from "react-router-dom";
function UpcomingCourses (){

    const upcomingCourses = coursesData.filter((data)=> data.status=="Upcoming")
    return(
        <div className="w-full min-h-96 bg-white shadow-md rounded-2xl flex flex-col mt-6 items-center justify-center">
             <div className="w-[95%]  h-16 flex items-center justify-between">
                    <span className="text-lg font-medium text-blue-600">Upcoming Courses</span>
                    <a className="flex text-lg font-medium text-blue-600" href="#">View Schedule  <ArrowRight  /></a>
            </div>
             <div className="w-[95%] h-full  grid   md:grid-cols-2
  xl:grid-cols-1
  2xl:grid-cols-2 gap-3 flex-wrap pb-5">
              
                    {
                        upcomingCourses.map((courses)=>{
                            return(
                                  <div className="relative rounded-xl min-h-56 bg-gray-100 shadow-sm">
                                    <div key={courses.title} className="flex p-3">
                                        <span className="shrink-0 pr-3">
                                            <img src={courses.icon} className="w-23" alt="img"/>
                                        </span>
                                        <div className="pt-3">
                                            <span className={`${courses.bgcolor} inline-block px-2 py-1 mb-1 rounded-md`} >
                                                <p>{courses.category}</p>
                                            </span>
                                         
                                            <h4 className="text-xl font-medium mb-5">
                                                {courses.title}
                                            </h4>
                                               <span className="flex gap-2">
                                                <CalendarDays /> {courses.releaseDate} <label>( Release Date )</label> 
                                            </span>
                                        </div>
                                    </div>
                                    <div className="absolute flex items-center gap-5 pl-3 bottom-0 w-full h-16 bg-[#F6F8FD] ">
                                            <span className="flex justify-center items-center w-16 h-16 rounded-2xl">
                                                <img src={courses.instructor.image} className="w-12 rounded-full" alt={courses.instructor}/>
                                            </span>
                                            <span className="font-medium">
                                                Instructor : {courses.instructor.name}
                                            </span>
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