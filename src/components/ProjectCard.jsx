import React from 'react'

function ProjectCard({item}) {
  return (
    <>
      <div className="img-box  lg2:w-auto mx-auto flex justify-center items-center relative overflow-hidden rounded-3xl">
              <img src={item.img} alt="" className='' />
              <div className=" text-center bg-[#b004b0b7] p-4 pt-20">
                <h1 className="font-bold text-3xl">{item.title}</h1>
                <p className="font-bold">{item.description}</p>
              </div>
            </div>
    </>
  )
}

export default ProjectCard