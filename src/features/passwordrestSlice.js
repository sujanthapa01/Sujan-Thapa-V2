import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const resetPassword = createAsyncThunk(
    'auth/resetpassword',
    async({ email }, { rejectWithValue }) => {
       
          try{
              const response = await axios.post('http://localhost:7000/forget-password',{email});
              const data = response.json();
              console.log(data);
              return data;

          }catch(error){
            return rejectWithValue(error.response.data);
          }
     
    });
const resetpassword = createSlice({
    name : 'resetpassword',
    initialState : {
        error: null,
        success : null,
        loading : false

    },reducers : {
        clearError :  (state ) => {
            state.error = null
        },
        clearSuccess : (state) => {
            state.success = null;
        }
    },
    extraReducers : (builder) => {
        builder,
        add.case(resetPassword.pending, (state) => {
            state.loading = true;
        })
        add.case(resetPassword.fulfilled, (state,action) => {
           state.loading = false,
           state.error = null;
           state.success = action.payload;
        })
        add.case(resetPassword.rejected, (state,action) =>{
            state.loading = false,
            state.error = action.payload;
            state.success = null ;
        })
    }

})
export const {clearError,clearSuccess} = resetPassword.action;
export default resetPassword.reducers;