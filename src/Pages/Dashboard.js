import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNetwok } from '../store/reducers/authReducer';
import { toast } from 'react-toastify';
import Pagination from '../Commoncomponent/CommonPaginations';
import { ListingLoading } from '../Commoncomponent/Loading';

const Dashboard = () => {

    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

    const dispatch = useDispatch();
    const getData = useSelector((state) => state?.Getapi)

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = getData?.getApi.slice(indexOfFirstPost, indexOfLastPost);
    const currentlenght = getData?.getApi?.length

    useEffect(() => {
        dispatch(getUserNetwok())
    }, [])

    useEffect(() => {
        if (getData.getApiStatus === "loading") {
            setLoading(true);
            // toast.warning(`${getData.getApiStatus}`,{
            //     toastId:"loading-1"      
            // })
        }
        setTimeout(() => {
            if (getData.getApiStatus === "succeeded") {
                setLoading(false)
                toast.success(`${getData.getApiStatus}`, {
                    toastId: "succeeded-1"
                })
            }
          }, 3000);
       
        if (getData.getApiStatus ==="failed") {
            toast.error(`${getData.getApiStatus}`, {
                toastId: "failed-1"
            })
        }
    }, [getData.getApiStatus])

    const paginate = pageNumber => setCurrentPage(pageNumber);
    if (loading) {
        return <ListingLoading />
    }
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
                       currentPosts ? currentPosts?.map((item) => {
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
            <Pagination
                currentPage={currentPage}
                postsPerPage={postsPerPage}
                totalPosts={currentlenght}
                paginate={paginate}
            />
            </div>

        </div>
    )
}

export default Dashboard