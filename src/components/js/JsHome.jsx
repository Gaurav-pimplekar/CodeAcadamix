import React from 'react'
import Sidebar from '../Sidebar'
import { jsData } from './jsdata.jsx'

function JsHome() {
  return (
    <div>
        <Sidebar data={jsData} />
    </div>
  )
}

export default JsHome