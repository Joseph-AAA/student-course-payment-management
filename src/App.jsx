import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";


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
                      <div className="text-4xl font-bold text-blue-400">
                        Student Course Management Dashboard
                      </div>              
                  </main>
                  

                  <div className=" bg-green-600  w-full">
                    <Footer />                
                  </div>
              </div>
           
          </div>
}
export default App;