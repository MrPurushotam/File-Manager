import React, { useState } from 'react'

const File = (props) => {
  return (
    <div className={`m-5 float-left w-[7vh] h-[10vh] overflow-hidden`} onClick={props.onClick}>
        <div className='flex flex-col items-center'>
            <img alt="svgImg" className='w-[70%] h-[70%] block' src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAsMCwyNTYsMjU2IgpzdHlsZT0iZmlsbDojMDAwMDAwOyI+CjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxnIHRyYW5zZm9ybT0ic2NhbGUoOCw4KSI+PHBhdGggZD0iTTYsM2gxNS40MWw1LjU5LDUuNjcxdjIwLjMyOWgtMjF6IiBmaWxsLW9wYWNpdHk9IjAuOTI5NDEiIGZpbGw9IiNkZTU5ZGIiPjwvcGF0aD48cGF0aCBkPSJNMjcsMTBoLTd2LTdoMXY2aDZ6IiBmaWxsPSIjZmZmZmZmIj48L3BhdGg+PHBhdGggZD0iTTI4LDMwaC0yM3YtMjhoMTYuODIzbDYuMTc3LDYuMTU3ek03LDI4aDE5di0xOS4wMTNsLTUuMDAzLC00Ljk4N2gtMTMuOTk3eiIgZmlsbC1vcGFjaXR5PSIwLjk0OTAyIiBmaWxsPSIjMjEwNjI1Ij48L3BhdGg+PC9nPjwvZz4KPC9zdmc+"/>        
        </div>
        <p className='text-center block text-sm font-semibold mt-0 leading-tight'>{props.file_name || "Folder Name"}</p>
    </div>
  )
}

export default File
