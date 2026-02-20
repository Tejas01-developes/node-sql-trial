import {db} from './dbcntt.js'

const values=[];

for(var i=1;i<=10000000;i++){
values.push([i,`user${i}`]);
}


export const insert=async(req,resp)=>{
 db.query(
    'INSERT INTO users1 (id,name) VALUES ?',
    [values],
    (err)=>{
        if(err){
            resp.json({message:"db insert error"})
        }
        resp.json({message:"success"})
    }
)
}