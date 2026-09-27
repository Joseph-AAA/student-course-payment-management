import PaymentRemiderHighlight from "./highlights/PaymentRemiderHighlight";
import UpcomingClassHighlight from "./highlights/UpcomingClassHighlight";
import CourseUpdateHighlight from "./highlights/CourseUpdateHighlight";
function ShowHighlights (){
        return (
             <div className="w-full bg-white h-full shadow-md rounded-xl flex justify-center p-2 items-center">
                <div className="w-[90%] h-[90%]  rounded-2xl">
                        <CourseUpdateHighlight />
                </div>
            </div>
        )
}

export default ShowHighlights;