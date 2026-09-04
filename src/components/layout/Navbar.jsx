function Navbar() {
  return <>
              <form className="flex justify-between items-center gap-4 container 
                               h-full  ">
                <input
                   placeholder = "Search Students..."
                       className="h-9 w-[45%] rounded-md border border-gray-300 text-sm 
                                  focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-e-blue-300 px-[8px] "
                  />
              
              </form>  
         </>
}
export default Navbar;