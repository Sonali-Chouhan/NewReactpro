import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getUserNetwok, getUserNetwoks } from '../store/reducers/authReducer';
import { toast } from 'react-toastify';
import Pagination from '../Commoncomponent/CommonPaginations';
import { ListingLoading } from '../Commoncomponent/Loading';
import './index.css';
import DataTable from 'react-data-table-component';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from '../Commoncomponent/Sidebar';
import Modal from 'react-modal';
import Button from '../Commoncomponent/CommonButton'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '35%',
        height: '90%',
    },
};

const columns = [
    {
        name: 'ID',
        selector: (row) => row.id,
    },
    {
        name: 'Profile_Picture',
        cell: (row) => <img src={row.avatar} width={50} alt={row.name}></img>,
        selector: (row) => row.coverimage,
    },
    {
        name: 'Name',
        selector: (row) => row.name,
    },
    {
        name: 'CreatedAt',
        selector: (row) => row.createdAt,
    },
    {
        name: 'country',
        selector: (row) => row.country,
    },
    {
        name: 'city',
        selector: (row) => row.city,
    },
];

const Dashboard = () => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("")
    const [singleRecord,setSingleRecord]=useState({
        name:"",
        city:"",
        country:""
    })
    const dispatch = useDispatch();
    const getData = useSelector((state) => state?.Getapi)
    console.log(98,getData);
    const [list, setList] = useState([])
    const [createdat, setCreatedAt] = useState()
    const [findId, setFindId] = useState()
    const [modalIsOpen, setIsOpen] = useState(false);
    const [city,setCity]= useState()
    const [country,setCountry]=useState()

    console.log(111, search)
    useEffect(() => {
        dispatch(getUserNetwok())
    }, [])

    function openModal(item) {
        setIsOpen(true);
        dispatch(getUserNetwoks(item?.id))

        console.log(44,item)
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        console.log("model");
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        if (getData.getApiStatus === "loading") {
            setLoading(true);
        }

        if (getData.getApiStatus === "succeeded") {
            setLoading(false)
            setList(getData.getApi)
        }

        if (getData.getApiStatus === "failed") {
            toast.error(`${getData.getApiStatus}`, {
                toastId: "failed-1"
            })
        }
    }, [getData.getApiStatus, search, createdat, findId])

    // const filterRecord = () => {
    //     const filterd = list?.filter((element) => {
    //         if(search && !createdat){
    //             return element?.name?.toLowerCase().includes(search?.toLowerCase())
    //         }
    //         else if (search  && createdat) {   
    //             return element?.name?.toLowerCase().includes(search?.toLowerCase()) &&
    //             element?.createdAt?.toLowerCase().includes(createdat?.toLowerCase())
    //         }
    //         else if (createdat && !search) {
    //             return element?.createdAt?.toLowerCase().includes(createdat?.toLowerCase())
    //         }
    //     })
    //     setList(filterd)
    // }

    const filterRecord = () => {
        const filterd = list?.filter((element) => {
            return (
                findId ? element?.id === findId : !findId &&
                    search ? element.name === search : !search &&
                        createdat ? element.createdAt.toLowerCase().includes(createdat.toLowerCase()) : !createdat
            )
        })
        setList(filterd)
    }

    const clearData = () => {
        setSearch("")
        setCreatedAt("")
        setFindId("")
        dispatch(getUserNetwok())
    }
    
    useEffect(()=>{
        if(getData.singleRecordApiStatus==="succeeded"){
            setSingleRecord({
                ...singleRecord,
                name:getData?.singleRecordApi?.name
            })
        }
    },[getData])

    return (
        <div>
            <Sidebar />
            <div className='filterbox'>

                <label className='label'>Name:</label>
                <input
                    className='grocery'
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <label className='datediv'>Date:</label>
                <input
                    className='grocery'
                    type='date'
                    value={createdat}
                    onChange={(e) => setCreatedAt(e.target.value)}
                />
                <label>id:</label>
                <input
                    className='grocery'
                    type='number'
                    value={findId}
                    onChange={(e) => setFindId(e.target.value)}
                />
                <button className='submit-btn' onClick={() => filterRecord()}>filter</button>
                <button className='submit-btn' onClick={() => clearData()} >Clear</button>
            </div>
            <div className='table'>
                {/* <div>
                    <Container>
                        <Row className='users-details-wrappers' >
                            <Col onClick={openModal} >
                                <DataTable
                                    columns={columns}
                                    data={list}
                                    pagination
                                    onClick={openModal}
                                />

                            </Col>
                        </Row>
                    </Container>
                </div> */}
                <div className='modal'>
                <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}

                 >
                 <h3 style={{ textAlign: 'center'}}>Modal</h3>
                    <Button label="Close" onClick={closeModal}>close</Button>
                    <form className='modal-form'>
                    <label className='label'>Name:</label>
                <input
                    className='modal-input'
                    type='text'
                    value={singleRecord.name}
                    onChange={(e) => setSingleRecord({...singleRecord,name:e.target.value})}
                />
                   <label>Country:</label>
                <input
                    className='modal-input'
                    type='text'
                    value={singleRecord.city}
                    onChange={(e) => setSingleRecord({...singleRecord,city:e.target.value})}
                />
                   <label>City:</label>
                <input
                    className='modal-input'
                    type='text'
                    value={singleRecord.country}
                    onChange={(e) => setSingleRecord({...singleRecord,country:e.target.value})}
                />
                        <Button label='Edit'>Edit</Button>
                        <Button label='Delete'>Delete</Button>
                    </form>
                </Modal>
                </div>
                {list.length > 0 ?
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Image</th>
                                <th>Name</th>
                                <th>City</th>
                                <th>Country</th>
                                <th>Created at</th>
                                <th>Actions</th>
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
                                            <td>{item.city}</td>
                                            <td>{item.countritem}</td>
                                            <td>{item.createdAt}</td>
                                            <td><button onClick={()=>openModal(item)} >Edit</button></td>
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
                    :
                    <p>Data not found</p>
                }
            </div>
        </div>
    )
}

export default Dashboard
