import React, {useState} from 'react'

import { FaRegChartBar } from "react-icons/fa"

import tw from "tailwind-styled-components";

function LeftBar() {

  const [open,setOpen]=useState("w-0 bg-slate-400 justify-center flex border-solid border-r-2 border-gray-900 duration-75");

  return (
    
    <div className={open} onMouseEnter={() => setOpen("w-2/12 bg-slate-400 justify-center flex duration-75")}
    onMouseLeave={() => setOpen("w-0 bg-slate-400 justify-center flex border-solid border-r-2 border-gray-900 duration-75")}> 
        <div>
          <FaRegChartBar className="pt-4 mb-4" style={{ fontSize: '50px' }} />
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
        </ul>
        </div>
    </div>
    
  )
}

export default LeftBar
