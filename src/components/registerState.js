import React from "react";
import { listreducer } from "./reducer";
 import { ToastContainer, toast } from 'react-toastify';
 import 'react-toastify/dist/ReactToastify.css';

const initialState = {
    username: "",
    email: "",
    password: "",
   
   
    };
const Register = () => {
  
   
    const [state, dispatch] = React.useReducer(listreducer, initialState);

    const sub = async (e)=>{
        e.preventDefault();
    }
    const handleSubmit = async(e) => {
    dispatch({
      type: "change_input",
      payload: {name: e.target.name, value: e.target.value}
    })
    }
        const add = async() => {
        
            const { username, email, password } = state;
            if(!username || !email || !password){
              toast.error("All fields are required")   
              return
            }
            if(password.length < 5){
              toast.error("The password needs to be at least 5 characters long.")   
              return
            }
              const res = await fetch("/register",{
                method: "POST",
                headers:{
                  "Content-Type": "application/json"
                },
                body:JSON.stringify({
                  username,email,password
                })
              });
              const all = await res.json();
              if(all.success){
                dispatch({ type: "add"});
                toast.success("records register successfully")   
                 }
              else{
                dispatch({ type: "notadd"});  
              }
            };
      
        return (
       
            <div className="container-fluid pt-4 ">
                 <ToastContainer></ToastContainer>
                <div className="col-sm-6 mx-auto">
                    <div className="card ">
                        <div className="card-header">
                            <h3 className="text-center pt-5">Register </h3>
                        </div>
                        <div className="card-body">
                     
                        <form className="form-inline" onSubmit={sub}>
                            
                        <p className="error_message">{state.success}</p>
                        <label className="mt-3">Email: </label>
                        <input type="email" name="email" onChange={handleSubmit} value= {state.email}  placeholder="Enter Email.." className="form-control" />
                        <label className="mt-3">Password: </label>
                        <input type="password"name="password"onChange={handleSubmit} value= {state.password} placeholder="Enter Password.." className="form-control" />
                        <label className="mt-3">Display name </label>
                        <input type="text" id="dsplay-name"onChange={handleSubmit} name="username" value= {state.username} placeholder="Enter username.." className="form-control" />
                  
                        <input type="submit" name="submit" className="btn btn-danger mt-3" onClick={add} />
                        </form>
                    </div>
                </div>
            </div>
            </div>
            );
            
            
    
}

export default Register;