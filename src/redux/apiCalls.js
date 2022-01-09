import { publicRequest } from "../RequeistMethod"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"

 const login =  async (dispatch,user)=>{
    
        dispatch(loginStart())
        try {
            const res = await publicRequest.post('/auth/login' ,user)  
            dispatch(loginSuccess(res.data))  
        
    } catch (error) {
        dispatch(loginFailure())
    }
}

export default login