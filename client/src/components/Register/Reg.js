

function Reg(){


    return(
        <div className='flex justify-center items-center h-screen bg-green-600'>

          <div className="w-96 p-6 shadow-lg bg-white rounded-md">
            
          <h1 className="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>  Registration</h1>

          <hr className="mt-3"></hr>


        
          <form action="">
           <div className="mt-3">
            <label htmlFor="name" className="block text-base  mb-2">usename</label>
            <input type="text" name="name" id="name"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Username"/>

            </div> 

            <div className="mt-3">
            <label htmlFor="email"className="block text-base  mb-2" >Gmail</label>
            <input type="text" name="email" id="email" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Your Gmail"/>
            
            </div> 
            <div className="mt-3">
            <label htmlFor="password" className="block text-base  mb-2" >password</label>
            <input type="password" name="password" id="password"  className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password"/>
            
            </div> 
          
            <div className="mt-5"></div>
            <button type="submit"  class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>  Sign Up</button>
          </form>
        
          

          </div>
        
           
        
        </div>
    )
}
export default Reg;