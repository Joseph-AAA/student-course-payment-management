import PaymentRemiderHighlight from "./highlights/PaymentRemiderHighlight";
import UpcomingClassHighlight from "./highlights/UpcomingClassHighlight";
import CourseUpdateHighlight from "./highlights/CourseUpdateHighlight";
import StudentUpdateHighlight from "./highlights/StudentUpdateHighlight";
function ShowHighlights (){
        return (
             <div className="w-full bg-white min-h-full shadow-sm rounded-xl flex justify-center p-2 items-center">
                <div className="w-[90%] h-[90%]  rounded-2xl">
                        <UpcomingClassHighlight />
                </div>
            </div>
        )
}

export default ShowHighlights;