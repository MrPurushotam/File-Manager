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
  const [del,setDel]=useState("")
  const refresh=useRef(true)

  useEffect(()=>{
    async function getFolder(){
      setLoading(true)
      const resp=await axios.get(`http://localhost:8000/tweakfolder/${dirLoc}`)
      refresh.current=false
      if(resp.data.status===200){
        setData({folders:resp.data.foldersList,files:resp.data.filesList})
      }
      setLoading(false)
    }
    if(refresh.current){
      getFolder()
    }
  },[refresh.current])

  const createFolder=async()=>{
    setLoading(true)
    try{
      const name=prompt("Enter Folder Name? Must not be empty spaces").trim()
      if(!name){
        throw Error("Folder Name can't be empty")
      }
      console.log(dirLoc+name)
      const resp=await axios.post(`http://localhost:8000/createfolder`,JSON.stringify({folder:dirLoc+name}),
      {headers:{"Content-Type":"application/json"}})
      if(resp.data.status===200){
        setData({folders:resp.data.foldersList,files:resp.data.filesList})
      }
      setLoading(false)
    }catch(err){
      console.log(err.message)
    }
  }

  const createFile=async()=>{
    setLoading(true)
    try{
      const name=prompt("Enter Complete Name of File? Must not be empty spaces").trim()
      const type=prompt("Enter type of file").trim("").trim(".")
      console.log(name,type,dirLoc+name+'.'+type)
      if(!name){
        throw Error("file Name can't be blank")
      }
      const resp=await axios.post(`http://localhost:8000/createfile`,JSON.stringify({filename:dirLoc+name+'.'+type}),
      {headers:{"Content-Type":"application/json"}})
      if(resp.data.status===200){
        setData({folders:resp.data.foldersList,files:resp.data.filesList})
      }
      setLoading(false)
    }catch(err){
      console.log(err.message)
    }
  }

  const deleteFunc=async ()=>{
    setLoading(true)
    try {
      let reply=confirm(`Are you sure you want to delete ${del}?`)
      console.log(reply)
      if(!reply){
        throw Error('User Denied to delete!!')
      }

      if(!del.trim()){
        throw Error("Select a folder or file to delete")
      }
      console.log(dirLoc+del)
      const resp=await axios.post(`http://localhost:8000/delete`,JSON.stringify({deletePath:dirLoc+del}),
      {headers:{"Content-Type":"application/json"}})
      if(resp.data.status===200){
        setData({folders:resp.data.foldersList,files:resp.data.filesList})
      }
    } catch (err) {
      console.log(err.message)
    }
    setLoading(false)
  }


  console.log(navTo,dirLoc,dirLoc.split('/'),del)
  return (
    <div className='w-4/5 h-1/3 border-2 border-black mx-auto p-5'>
      <div className='w-[70%] border-3 border-black rounded-sm text-2xl bg-slate-200 font-[650] py-2 pl-4 text-left'>
        <span className='text-[#e5383b] '>/root/</span>
        <span className='text-black '>{dirLoc}</span>
      </div>
      <div className='w-[75%] my-5 mx-auto p-4 h-[7vh] '>
        <span className='options optionsOnHover' onClick={createFolder}>Create Folder</span>
        <span className='options optionsOnHover' onClick={createFile}>Create File </span>
        <span className='options optionsOnHover' onClick={deleteFunc}>Delete File</span>
      </div>
      <div className='border-[0.4vh] border-black rounded-lg w-4/5 min-h-96 h-auto mx-auto my-2 text-left p-5 text-break overflow-auto'>
        {data.folders  && data.folders.length>0 ?
          data.folders.map(item=>(
            <div key={item[0]} 
              onClick={()=>setDel(item[0])}
              onDoubleClick={(e)=>{
                setLoading(true)
                console.log('double clicked')
                refresh.current=true;
                setDirLoc(dirLoc+item[0]+"/")
                setLoading(false)
              }}
              >
              <Folder folder_name={item[0]} folder_size={item[1]} folder_create_date={item[2]}/>
            </div>
          )):
        ""}
        {(data.files && data.files.length>0)?
          data.files.map(item=>(
            <File 
            onClick={()=>(setDel(item[0]))}
            key={item[0]} file_name={item[0]} file_size={item[1]} file_create_date={item[2]}/>
          ))
          :""
        }
      </div>
      {loading && <Loading/>}
    </div>
  )
}
export default FileManager
