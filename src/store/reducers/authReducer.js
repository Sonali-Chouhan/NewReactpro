import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {  getUserNetworkRoute } from "../api/ApiRoutesHelper";
import apiClient from "../api/apiClient";

const initialState = {
    getApiStatus: false,
    getApi: "",
    getApiErr: ""
}

// export const GetApiResponse = createAsyncThunk('Getapi/GetApiResponse', async (data, { rejectWithValue, fulfillWithValue }) => {
//     try {
//         const response = await apiClient({ method: 'GET', endPoint: GetRoute() })
//         // return response
//         return fulfillWithValue(response.data)
//     }
//     catch (error) {
//         if (error?.response?.data) {
//             return rejectWithValue(error.response.data)
//         }
//         else {
//             return rejectWithValue(error)
//         }
//     }
// })
export const getUserNetwok = createAsyncThunk('netwok/getUserNetwok', async(_,{ rejectWithValue, fulfillWithValue, dispatch }) => {
    try{
        const response = await apiClient({method: 'GET', endPoint: getUserNetworkRoute()})
       return fulfillWithValue(response.data)
    }
    catch(error){
        if(error?.response?.data){
            // dispatch(getError(error?.response?.data))
            return rejectWithValue(error.response.data)
        }
        else {
            return rejectWithValue(error)
        }
    } 
})
const getSlice = createSlice({
    name: 'netwok',
    initialState,
    reducers: {
        changeStatus(state, action) {
            state.getApi = ""
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserNetwok.pending, (state, action) => {
                state.getApiStatus = 'loading'
            })
            .addCase(getUserNetwok.fulfilled, (state, action) => {
                state.getApiStatus = "succeeded"
                state.getApi = action?.payload;
            })
            .addCase(getUserNetwok.rejected, (state, action) => {
                state.getApiStatus = "failed";
                state.getApiErr = action.payload;
            })

    }
})
export const { changeStatus } = getSlice.actions;
export default getSlice.reducer;