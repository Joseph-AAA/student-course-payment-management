
import {sidebarLinks} from "../../data/data.js";  
import { GraduationCap } from "lucide-react";
function Sidebar() {
  return <div className="flex flex-col w-[89%] min-h-80">

                      <div className="flex items-center gap-2 h-20 justify-center ">
                          <GraduationCap className="size-16 " />
                        
                          <div>
                              <h1 className="text-sm font-bold">MyCode Academy</h1>
                              <p>Student Portal</p>
                          </div>
                      </div>

                      {sidebarLinks.map((link) => (
                          <div
                              key={link.path}
                              className="flex  items-center gap-3 h-12  pl-3 rounded-md cursor-pointer hover:bg-(--primary-hover)"
                            >
                           
                                <link.icon className="size-5 " />
                                <span className="text-sm font-medium">
                                  {link.label}
                                </span>
                            </div>
                    
                        ))}
            </div>
}
export default Sidebar;