

function Reg(){


    return(
        <>
          <form action="">
           <div>
            <label htmlFor="name">usename</label>
            <input type="text" name="name" id="name" />

            </div> 

            <div>
            <label htmlFor="email">Gmail</label>
            <input type="text" name="email" id="email" />
            
            </div> 
            <div>
            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />
            
            </div> 
          

            <button type="submit">Sign Up</button>
          </form>
           
        
        </>
    )
}
export default Reg;