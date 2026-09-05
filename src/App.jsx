import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Students from "./pages/Students";
import Payments from "./pages/Payments";
import Setting from "./pages/Setting";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {Route,Routes} from "react-router-dom";  


function App(){
  return  <div className="grid min-h-screen grid-cols-[240px_1fr]">

              <aside  className="bg-(--sidebar) h-full w-full  text-white flex flex-col items-center">
                <Sidebar  />
              </aside>

              <div className= "grid grid-rows-[76px_1fr_56px] gap-0 bg-(--background) h-full w-full">

                  <nav className="w-full bg-(--navbar) shadow-md">
                      <Navbar />
                  </nav>
                        


                  <main className="w-full  flex justify-center items-center">
                      <Routes>
                          <Route path="/about" element= {<About />} />
                          <Route path="/contact" element= {<Contact />} />
                          <Route path="/courses" element= {<Courses />} />
                          <Route path="/payments" element= {<Payments />} />
                          <Route path="/setting" element= {<Setting />} />
                          <Route path="/" element={<Dashboard />} />
                          <Route path="/students" element= {<Students />} />
                         
                        
                          
                      </Routes>
                  </main>
                  

                  <div className=" bg-(--footer)  w-full">
                    <Footer />                
                  </div>
              </div>
           
          </div>
}
export default App;