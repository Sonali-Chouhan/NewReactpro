import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNetwok } from '../store/reducers/authReducer';

const Dashboard = () => {
    // const [data, setData] = useState()
    const dispatch = useDispatch();
    const getData = useSelector((state) => state?.Getapi)
    console.log(123,getData?.getApi)


    useEffect(() => {
        dispatch(getUserNetwok())
    }, [])
    return (
        <div>

            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Created at</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     getData?.getApi && getData?.getApi?.map((item)=>{
                        return(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td><img src={item.avatar} height="40px" width="40px" /></td>
                                <td>{item?.name}</td>
                                <td>{item.createdAt}</td>
                            </tr>
                        )
                     })
                    }
                </tbody>
               

            </Table>

        </div>
    )
}

export default Dashboard