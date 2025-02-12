import React from 'react'
import Sidebar from "../Sidebar"
import { htmlData } from './htmldata'

function HtmlHome() {
  return (
    <div>
      <Sidebar data={htmlData} />
    </div>
  )
}

export default HtmlHome
