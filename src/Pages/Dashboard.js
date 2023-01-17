import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNetwok } from '../store/reducers/authReducer';
import { toast } from 'react-toastify';
import Pagination from '../Commoncomponent/CommonPaginations';
import { ListingLoading } from '../Commoncomponent/Loading';
import './index.css'
import Button from '../Commoncomponent/CommonButton';

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const dispatch = useDispatch();
    const getData = useSelector((state) => state?.Getapi)
    const [list, setList] = useState([])
    const [createdat, setCreatedAt] = useState()

    console.log(111, search)
    useEffect(() => {
        dispatch(getUserNetwok())
    }, [])

    useEffect(() => {
        if (getData.getApiStatus === "loading") {
            setLoading(true);
        }

        if (getData.getApiStatus === "succeeded") {
            setLoading(false)
            setList(getData.getApi)
            // toast.success(`${getData.getApiStatus}`, {
            //     toastId: "succeeded-1"
            // })
        }

        if (getData.getApiStatus === "failed") {
            toast.error(`${getData.getApiStatus}`, {
                toastId: "failed-1"
            })
        }
    }, [getData.getApiStatus, search])


    const handleChange = (e) => {
        let searchText = e.target.value;
        if (searchText.length > 0) {
            setSearch(e.target.value)
        } else {
            setSearch("");
        }
        // if (search === "") {
        //     setList(list)
        // }
    }

    const filterRecord = () => {

        // e.preventDefault();
        const filterd = list?.filter((element) => {
            // debugger
            return element?.name?.toLowerCase().includes(search?.toLowerCase()) &&
                element?.createdAt?.toLowerCase().includes(createdat?.toLowerCase())
        })
        setList(filterd)
    }
    // const clearData = (e) => {
    //     e.preventDefault();
    //     // dispatch(getUserNetwok())
    //     console.log(222)
    //     // setSearch("");
    // }
    console.log(777, createdat);
    return (
        <div>
            <div className='filterbox'>

                <label>Name:</label>
                <input
                    className='grocery'
                    type='text'
                    onChange={(e) => handleChange(e)}
                />
                <label className='datediv'>Date:</label>
                <input
                    className='grocery'
                    type='date'
                    value={createdat}
                    onChange={(e) => setCreatedAt(e.target.value)}
                />
                <button className='submit-btn' onClick={() => filterRecord()}>filter</button>
                {/* <button className='submit-btn' onClick={(e) => clearData(e)}>Clear</button> */}
            </div>
            <div className='table'>

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
                            list ? list?.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td><img src={item.avatar} height="40px" width="40px" alt={item.avatar} /></td>
                                        <td>{item?.name}</td>
                                        <td>{item.createdAt}</td>
                                    </tr>
                                )
                            })
                                :
                                <tr style={{ color: "black" }}>
                                    <td>Data Not Found</td>
                                </tr>
                        }
                    </tbody>
                </Table>
                <div className='maindivpagination'>

                </div>
            </div>
        </div>
    )
}

export default Dashboard

// const currentPosts = getData?.getApi.slice(indexOfFirstPost, indexOfLastPost);
// const currentlenght = getData?.getApi?.length
// const paginate = pageNumber => setCurrentPage(pageNumber);
// if (loading) {
//     return <ListingLoading />
// }
// const indexOfLastPost = currentPage * postsPerPage;
// const indexOfFirstPost = indexOfLastPost - postsPerPage;
{/* <Pagination
                        currentPage={currentPage}
                        postsPerPage={postsPerPage}
                        totalPosts={currentlenght}
                        paginate={paginate}
                    /> */}