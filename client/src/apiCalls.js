import axios from "axios";

export const loginCalls = async (userCredential, dispatch) =>{
    dispatch({type: "LOGIN_START"});
    try {
        await axios.post("http://localhost:8000/user/login",userCredential).then((res)=>{
            dispatch({type: "LOGIN_SUCCESS", payload: res.data});
        });
    } catch (error) {
        dispatch({type: "LOGIN_FAILURE", payload: error});
    }
}