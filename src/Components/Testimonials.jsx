import React from 'react'

const Testimonials = () => {
    const list = [  {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis, aliquam ea ullam quae aut necessitatibus accusamus."
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis, aliquam ea ullam quae aut necessitatibus accusamus."
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis, aliquam ea ullam quae aut necessitatibus accusamus."
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis, aliquam ea ullam quae aut necessitatibus accusamus."
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis"
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis, aliquam ea ullam quae "
    },
    {
        name:"Roman King",
        role:"Businessman",
        img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        comment:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sequi qui perferendis"
    }
]
  return (
    <div className='container mx-auto'>
        <h1 className='text-3xl font-bold mb-0 px-[4rem] py-[2rem] mt-[2rem]'>Testimonials</h1>
        <div className="testimonial-container w-full flex items-center  mx-auto gap-2  flex-wrap justify-center lg:max-w-[70%] lg:gap-4">
            {
                list.map(person=>{
                    return(
                        <div className='testimony flex  justify-center border   p-2 gap-2 max-w-[180px] min-h-[30px] rounded-md lg:min-h-[50px]'>
                            <div className="profile-container ">
                                <img src={person.img} alt="profile image" className='max-w-[30px] h-[30px] rounded-full' />
                            </div>
                            <div className="text-container text-left">
                                <h3 className='font-semibold text-md'>{person.name}</h3>
                                <p className='text-[10px] mt-[-6px] font-thin'>{person.role}</p>
                                <p className='text text-[8px]'>
                                    {person.comment}
                                </p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    </div>
  )
}

export default Testimonials