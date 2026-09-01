
import {sidebarLinks} from "../../data/data.js";    
function Sidebar() {
  return <div>
           { sidebarLinks.map((link) => (
              <div key={link.path} className="flex items-center gap-2 p-2 hover:bg-gray-200 cursor-pointer">
                <link.icon className="w-5 h-5" />
                <span>{link.label}</span>
              </div>
            ))}
         </div>
}
export default Sidebar;