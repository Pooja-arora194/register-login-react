
export const listreducer = (state,action) => {
    switch(action.type){
        case "Change_input":
            return{
                ...state,
                [action.payload.name]:action.payload.value
            };
        case "add":
        return {
            ...state,
            email:"",
            password:"", 
            username:"",
           
        }
        case "notadd":
            return {
                ...state,
              
            }
        case "SUCCESS":
            return {
                ...state,
                loggedin: true,
                email:"",
                password:""
               
            }
            case "ERROR":
                return {
                    ...state,
                   
                }
                case "logout":
                    return {
                        ...state,
                       error:false,
                       loggedin:false
                    }
            default:
                return state;
         
    };
}