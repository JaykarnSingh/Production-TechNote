import React,{useEffect,useState} from 'react'

const HTML = () => {
const [data,setData]=useState([])
  useEffect(()=>{
 fetch("http://146.190.109.193:8082/getuser").then((res)=>{
  res.json().then((resp)=>{
   setData(resp)
   
  })
 })
  },[])
  return (
    <div>
    <h1>API fetch demo</h1>
      <table border="2">
        <thead>
          <tr>
            <td>token</td>
            <td>nickname</td>
            <td>email</td>
            <td>metamaskid</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((val)=>{
               return(
                <tr>
            <td>{val.token}</td>
            <td>{val.nickname}</td>
            <td>{val.email}</td>
            <td>{val.metamaskId}</td>
          </tr>
               )
            })
          }
        </tbody>
      </table>
    </div>
  )
}    
            
export default HTML
     