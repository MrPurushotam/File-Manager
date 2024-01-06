import React, { useEffect,useRef,useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [data,setData]=useState([])
    const refresh=useRef(true)
    useEffect(()=>{
        async function getData(){
            const resp= await axios.get(`http://localhost:8000/test2`)
            console.log(resp.data)
            if(resp.data && resp.data.status===200){
                refresh.current=false
                setData(resp.data.list)
            }
        }
        if(refresh.current){
            getData()
        }
    })
  return (
    <div>
        <p className='border-2 border-black w-4/5 h-1/5 mx-auto p-5 text-2xl text-purple-700'>
            data from backend:- {data}
        </p>
    </div>
  )
}

export default Test
