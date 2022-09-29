import React from "react";
import { listreducer } from "./reducer";
//import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
const initialState = {
   
    email: "",
    password: "",
    loggedin: false,
    error:false
    };
const Login = () => {
  
    const [state, dispatch] = React.useReducer(listreducer, initialState);
    //const history = useHistory();

    const sub = async (e)=>{
        e.preventDefault();
    }
    const handleSubmit = async(e) => {
    dispatch({
      type: "Change_input",
      payload: {name: e.target.name, value: e.target.value}
    })
    }
        const check = async() => {
            const { email, password } = state;
            if(!email || !password){
                toast.error("fields are required")   
                return
              }
            const res = await fetch("/login",{
                method: "POST",
                headers:{
                  "Content-Type": "application/json"
                },
                body:JSON.stringify({ email: state.email, password: state.password })
              })
                    const data = await res.json();
                    console.log(data);
                    if(data.success){
                        //alert("login successfully")      
                        dispatch({ type: "SUCCESS"});  
                        toast.success("login successfully")
                         }
                    else{  
                        dispatch({type: "ERROR"})
                        toast.error("invalid credentials")
                    }
              
            };
    return (
        <div className="container-fluid pt-4 ">
                <ToastContainer></ToastContainer>
            <div className="col-sm-6 mx-auto">
            {
                state.loggedin ? (
                <div>
                    <h2 >You have Successfully logged in </h2>
                    <button className="btn btn-danger" onClick={() => {dispatch({type:"logout"})}}>Logout</button>
                </div>
                 ):(
                <div className="card ">
                    <div className="card-header">
                        <h3 className="text-center pt-5">Login </h3>
                    </div>
                 
                    <div className="card-body">
                 
                        <form className="form-inline" onSubmit={sub}>
                            <p className="error_message">{state.error}</p>
                        <label className="mt-3">Email: </label>
                        <input type="email" name="email"placeholder="Enter Email.." onChange={handleSubmit} className="form-control" />
                        <label className="mt-3">Password: </label>
                        <input type="password"name="password" placeholder="Enter Password.." onChange={handleSubmit} className="form-control" />
                    
                        <input type="submit" name="login" className="btn btn-danger mt-3" onClick={check}/>
                        </form>
                    </div>
                        
                 </div>
                )}
            </div>
        </div>
        );
}

export default Login;