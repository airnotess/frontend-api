import { useEffect,useState } from "react"
import axios from 'axios'
const Signin = () => {
    const [email,setEmail ]= useState('');
    const [password,setPassword ]= useState('');

    function handleSubmit(){
        axios.post('http://localhost:3000/api/v1/user/signin',{
            email,
            password
        }).then((res)=>{
            localStorage.setItem('token',res.data.token)}
        ).catch((error)=>{
            console.log(error)
        })
    }

  return (
    <div>
        <input type="email" placeholder="enter your email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="enter your password" onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={handleSubmit}> submit </button>
    </div>
  )
}

export default Signin