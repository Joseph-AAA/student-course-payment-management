import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Footer from "./components/layout/Footer";

function App(){
  return  <div className="container grid min-h-screen grid-cols-[240px_1fr]">

              <aside  className="bg-blue-400 h-full w-full text-white">
                <Sidebar />
              </aside>
              <main className="grid grid-rows-[100px_1fr_100px] gap-4 bg-gray-100 h-full w-full">
                  <nav className="w-full bg-amber-300">
                     <Navbar />
                  </nav>
                  <div className="text-4xl font-bold text-blue-400">
                    Student Course Management
                  </div>
                
                <div className=" bg-green-600 w-full">
                  <Footer  />                
                </div>
              </main>
           
          </div>
}
export default App;