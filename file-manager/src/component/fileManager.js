import React, { useEffect, useRef, useState } from 'react'
import Loading from './loading'
import Folder from '../icons/folder'
import File from '../icons/file'
import axios from 'axios'

const FileManager = () => {
  const [dirLoc,setDirLoc]=useState('')
  const [navTo,setNavTo]=useState('')
  const [data,setData]=useState({folders:["h"],files:["i"]})
  const [loading,setLoading]=useState(false)
  const refresh=useRef(true)
  useEffect(()=>{
    async function getFolder(){
      const resp=await axios.get(`http://localhost:8000/tweakfolder/${dirLoc}`)
      refresh.current=false
      if(resp.data.status===200){
        setData({folders:resp.data.foldersList,files:resp.data.filesList})
      }
    }
    if(refresh.current){
      getFolder()
    }
  },[refresh.current])
  console.log(navTo)
  return (
    <div className='w-4/5 h-1/3 border-2 border-black mx-auto p-5'>
      <div className='w-[70%] border-3 border-black rounded-sm text-2xl bg-slate-200 font-[650] py-2 pl-4 text-left'>
        <span className='text-[#e5383b] '>/root/</span>
        <span className='text-black '>{dirLoc}</span>
      </div>
      <div className='w-[75%] my-5 mx-auto p-4 h-[7vh] '>
        <span className='options optionsOnHover'>Create Folder</span>
        <span className='options optionsOnHover'>Create File </span>
        <span className='options optionsOnHover'>Delete File</span>
      </div>
      <div className='border-[0.4vh] border-black rounded-lg w-4/5 min-h-96 h-auto mx-auto my-2 text-left p-5 text-break overflow-auto'>
        {data.folders  && data.folders.length>0 ?
          data.folders.map(item=>(
            <div key={item[0]} onClick={(e)=>{setNavTo(item[0])}} 
              onDoubleClick={(e)=>{
                console.log('double clicked')
                refresh.current=true;
                setDirLoc(dirLoc+navTo+"/")
              }}
              >
              <Folder folder_name={item[0]} folder_size={item[1]} folder_create_date={item[2]} selected={navTo}/>
            </div>
          )):
        ""}
        {(data.files && data.files.length>0)?
          data.files.map(item=>(
            <File key={item[0]} file_name={item[0]} file_size={item[1]} file_create_date={item[2]}/>
          ))
          :""
        }
      </div>
      {loading && <Loading/>}
    </div>
  )
}
export default FileManager
