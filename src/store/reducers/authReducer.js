import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetRoute} from "../api/ApiRoutesHelper";
import apiClient from "../api/apiClient";

const initialState = {
   getApiStatus: false,
   getApi: "",
   getApiErr: false
}

export const GetApiResponse = createAsyncThunk('Getapi/GetApiResponse', async(data,{ rejectWithValue, fulfillWithValue }) => {
    try{
        const response = await apiClient({method: 'GET', endPoint: GetRoute()})
        // return response
       return fulfillWithValue(response.data)
    }
    catch(error){
        if(error?.response?.data){
            return rejectWithValue(error.response.data)
        }
        else {
            return rejectWithValue(error)
        }
    } 
})

const getSlice = createSlice({
    name: 'Getapi',
    initialState,
    reducers:{
        changeStatus(state,action){
            state.GetApi=""
        }
    },
    extraReducers : (builder) => {
        builder
          .addCase(GetApiResponse.pending, (state, action) => {
            state.getApiStatus = 'loading'
          })
          .addCase(GetApiResponse.fulfilled, (state, action) => {
            state.getApiStatus = "succeeded"
            state.getApi = action?.payload;
            console.log(43,state.getApi);
          })
          .addCase(GetApiResponse.rejected, (state, action) => {
            state.getApiStatus = "failed";
            state.getApiErr = action.payload;
          })
    // extraReducers: {
    //     [GetApiResponse.pending]: (state, action) => {
    //         state.getApiStatus = 'loading'
    //     },
    //     [GetApiResponse.fulfilled]: (state, action) => {
    //         state.getApiStatus = "succeeded"
    //         state.getApi = action.payload
    //         console.log(43,state.getApi)
    //     },
    //     [GetApiResponse.rejected]: (state, action) => {
    //         state.getApiStatus = "failed"
    //         state.getApiErr = action.payload
    //     }
    // }
        }
})
export const { changeStatus } = getSlice.actions;
export default getSlice.reducer;