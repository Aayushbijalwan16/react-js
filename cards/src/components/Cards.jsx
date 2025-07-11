import React from 'react'

function Cards(props) {
    console.log("props", props); 
    
  return (
    <div className='relative h-[400px] w-[300px] rounded-md'>
        <img src="https://images.upsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop;w=800&amp;q=60" alt="AirMax Pro"  class="z-0 h-full w-full rounded-md object-cover"/>
      <div className="absolute inset-0 bg-gradient-to-tfrom-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
      <h1 className="text-lg font-semibold text-white">Delba</h1>
      <p className='mt-2 text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id iure a sequi nobis in, veniam possimus, 
        illum, dolorem distinctio minima iste fugit numquam delectus reiciendis incidunt eligendi magnam corporis optio ducimus 
        magni doloremque. Mollitia, quam?</p>
        <button className='mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white'>View Profile</button>
        </div>
    </div>
  )
}

export default Cards