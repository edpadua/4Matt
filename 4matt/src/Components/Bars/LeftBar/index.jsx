import React from 'react'

import { FaRegChartBar } from "react-icons/fa"

import tw from "tailwind-styled-components";

function LeftBar() {
  return (
    <div className='w-2/12 bg-slate-400 justify-center flex'>
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
