import React from 'react'

const JobBoredComponent = ({job:{id,company,logo,isNew,featured,position,role,level,postedAt,contract,
    location,languages,tools},handleFilter}) => {

const tags = [role,level];
if(tools){
    tags.push(...tools);
}
if(languages){
    tags.push(...languages);
}

  return (
    
    <div className={`flex flex-col lg:flex-row mx-10 p-4 bg-bgc 
                    shadow-lg text-gray-300 my-16 lg:my-10 rounded-lg 
                    ${featured===true? 'border-l-4 border-solid border-indigo-500':'border-none'}
                    `}>
        <div className='mb-4 -mt-16 lg:mt-0'>
         <img src={logo} alt={company} />
        </div>

        <div className='flex flex-col ml-2 justify-between mb-4'>
           <p> 
                <span className='mr-2 text-white font-bold'>{company}</span>
                {isNew ===true?<span 
                    className='mr-2 uppercase bg-indigo-400 text-white rounded-full px-2 py-1'>new!</span>:"" }
                {featured ===true?<span 
                    className='mr-2 uppercase bg-indigo-400 text-white rounded-full px-2 py-1'>featured</span>:"" }
            </p>
           <h3 className='font-bold text-2xl'>{position}</h3>
           <span>{postedAt}.{contract}.{location}</span>
        </div>

        <div className='flex flex-wrap ml-2 border-t-2 border-solid border-indigo-500 lg:border-none lg:ml-auto lg:items-center '>
            {tags? 
                (tags.map((tag)=>
                    <span onClick={()=>handleFilter(tag)} 
                        className='mr-4 bg-indigo-400 text-white font-bold p-1 rounded-md cursor-pointer mt-4'>
                    {tag}</span>)):""}
        </div>
    </div>
  )
}

export default JobBoredComponent