const express=require('express')
const fs=require('fs')
const cors=require('cors')
const path=require('path')
const app=express()

require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname.split('api')[0],'root')))
const defaultPath=`${__dirname.split('api')[0]}`

app.get('/test',async(req,res)=>{
    try{
        const list = fs.readdirSync(defaultPath);
        console.log(list)
        res.json({status:200,message:'done',list:list})
    }catch(e){
        console.log(e.message)
        res.json({status:400,message:e.message})
    }
})
async function printAll(dirPath,res=[]){
    const list = fs.readdirSync(dirPath);
    console.log(list)
    for(const file of list){
        if(file==='node_modules'){
            continue
        }
        const filePath=path.join(dirPath,file)
        console.log(filePath)
        const stat=fs.statSync(filePath)
        console.log(stat)
        if(stat.isDirectory()){
            res.push(filePath)
            await printAll(filePath)
        }
    }
    return res;
}
app.get('/test2',async(req,res)=>{
    try{
        const resp=await printAll(defaultPath)
        console.log(resp)
        res.json({status:200,message:'done',list:resp})
    }catch(e){
        console.log(e.message)
        res.json({status:400,message:e.message})
    }
})

app.get('/tweakfolder/:foldername?',async(req,res)=>{
    try{
        const folders=[]
        const files=[]
        if(!req.params.foldername){
            const listFiles=await fs.readdirSync(defaultPath)
            listFiles.forEach((item,i) => {
                const tempPath=path.join(defaultPath,item)
                const stats=fs.statSync(tempPath)
                console.log(stats)
                if(stats.isFile()){
                    files.push([item,stats.size,stats.birthtime])
                }else if(stats.isDirectory()){
                    folders.push([item,stats.birthtime])
                }
            }); 
        }else{
            const currPath=path.join(defaultPath,req.params.foldername)
            const listFiles=await fs.readdirSync(currPath)
            listFiles.forEach((item,i) => {
                const tempPath=path.join(currPath,item)
                const stats=fs.statSync(tempPath)
                if(stats.isFile()){
                    files.push([item,stats.size,stats.birthtime])
                }else if(stats.isDirectory()){
                    folders.push([item,stats.birthtime])
                }
            }); 
        }
        console.log(folders,files)
        res.json({status:200,message:'done',foldersList:folders,filesList:files})
    }catch(err){
        console.log(err.message)
        res.json({status:404, message:err.message})
    }
})

app.listen(8000,()=>console.log('Up on 8000'))