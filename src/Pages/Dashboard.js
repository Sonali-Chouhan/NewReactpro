import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { GetApiResponse } from '../store/reducers/authReducer';

const Dashboard = () => {
    // const [data, setData] = useState()
    const dispatch = useDispatch();
    const getData = useSelector((state) => state?.Getapi)
    const getresp= getData?.getApi 
    console.log(11, getData);

    console.log(22, getData?.getApi);

    // const url = 'https://62458ed12cfed1881722c047.mockapi.io/'
    // const getAllData= ()=>{
    //     axios.get(`${url}post`)
    //     .then((response)=>{
    //         console.log(222,response)
    //     }
    //     )
    //     .catch(error=>console.error("Error"))
    // }

    useEffect(() => {
dispatch(GetApiResponse())
    }, [])

    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First Name</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        getData&&getresp?.map((items)=>{
                            return(
                                <tr>
                                    <td>{items?.id}</td>
                                    <td>{items?.name}</td>
                                    <td>{items?.createdAt}</td>

                                </tr>
                            )
                        })
                    }
                </tbody>

                {/* <tbody>
                   
                    {
                        getData?.getApi?.map((item) => {
                            return (
                                <tr>
                                    <td>{item?.id}</td>
                                    <td>{item?.name}</td>
                                    <td>{item?.createdAt}</td>

                                </tr>

                            )
                        })
                    }



                </tbody> */}

            </Table>

        </div>
    )
}

export default Dashboard