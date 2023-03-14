import JobBoredComponent from "./component/JobBoredComponent";
import data from './API/data.json';
import { useState,useEffect } from "react";

function App() {
  const [jobs,setJobs] = useState([]);
  const [filters,setFilters] = useState([]);
  
  useEffect(()=>{
    setJobs(data);
  },[]);

 const handleFilter =(tag)=>{
  if(filters.includes(tag))return;
  setFilters([...filters,tag]);
 }

 const cancleOneTatg=(fil)=>{
  setFilters(filters.filter(passdValue=>passdValue !== fil))
 }

 const cancleAllTag =()=>{
  setFilters([]);
 }

 const filterFunc =({role,level,languages,tools})=>{
  const tags = [role,level];
  if(tools){
    tags.push(...tools);
  }
  if(languages){
    tags.push(...languages);
  }

  return filters.every((filter)=>tags.includes(filter));
 }

 const filterJobs= jobs.filter(filterFunc);
  return (
    <div className="App">
      <header className="bg-hc mb-12">
        <img className="w-full" src={"./images/bg-header-desktop.svg"} alt="bgcolor" />
      </header>
      {filters.length>0 &&  
        <div className="flex flex-wrap items-center mx-10 p-4 bg-bgc text-indigo-900 rounded-lg -mt-20 z-10 relative lg:mt-0">
          {filters.map((fil)=>
          <span className="bg-indigo-400 text-white font-bold p-1 mr-2 mt-2 rounded-md cursor-pointer" onClick={()=>cancleOneTatg(fil)}>{fil}</span> )}
          <p  className="ml-auto bg-indigo-400 text-white rounded cursor-pointer px-1 font-bold" onClick={cancleAllTag}>Clear</p>
          
        </div>
      }

      {filterJobs.map(job=>
        <JobBoredComponent 
          job={job} 
          key={job.id} 
          handleFilter={handleFilter}
        />)}
      
    </div>
  );
}

export default App;
