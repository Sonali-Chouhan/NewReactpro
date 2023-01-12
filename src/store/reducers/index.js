import { combineReducers, createAsyncThunk } from "@reduxjs/toolkit";

// import auth from './authSlice';
// import user from './userSlice';
// import network from './netwokSlice'
// import environment from './environmentSlice'
// import node from './instanceSlice'
// import nodeApi from './nodeApiSlice'
// import channel from './channelsSlice'
// import error from './error'
// import eventlog from './eventLog'
import Getapi from "./authReducer"

export default combineReducers({
    // auth,
    // user,
    // node,
    // network,
    // environment,
    // nodeApi,
    // channel,
    // error,
    // eventlog
    Getapi
})