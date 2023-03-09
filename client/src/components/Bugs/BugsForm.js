

const BugsForm = ()=>{

    return (

     <div className='flex justify-center items-center h-screen bg-sky-600'>
     <form className="w-96 p-6 shadow-lg bg-white rounded-md">
     <h1 className="text-3xl block text-center font-semibold"><i class="fa-solid fa-bug"></i> Add New Bug</h1>
     <hr className="mt-3"></hr>
     <div className="mt-3">
     <label htmlFor="name" className="block text-base  mb-2">Name</label>
        <input type='text' placeholder="Name" name="name" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"  />
     </div>
     
     <div  className="mt-3">
        <h4 className="font-weight: 600;">Status</h4>
        <select name="status" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600"  >
            <option >
                Open
            </option>
            <option>
                Ongoing
            </option>
            <option>
                Delayed
            </option>
            <option>
                Overdue
            </option>
            <option>
                completed
            </option>
        </select>
     </div>

     <div  className="mt-3">
        <h4>Location</h4>
        <input type='text' placeholder="Location" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" />
     </div>

     <div  className="mt-3">
        <h4>Description</h4>
        <textarea name="description" cols="30" row="40" placeholder="Description" className="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" ></textarea>
     </div>
      <div  className="mt-3">
        <h4>Priority</h4>
        <select name="priority">
            <option>
                High
            </option>
            <option>
                Normal
            </option>
            <option>
                Low
            </option>
        </select>
      </div>
      <div className="mt-3" >
  
      <button type="submit"  class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-check"></i> Submit</button>
      </div>
     </form>

     </div>

    )
}
export default BugsForm;