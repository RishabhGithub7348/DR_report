import axios from "axios";


const URL='http://localhost:3001';

export const RegisterUser= async(data)=>{

    try{
        return await axios.post(`${URL}/form/`,data);
    }catch(error){
        console.log(data)
        console.log("error occured in registerUser api",error);
    }
}
