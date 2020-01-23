import { useState, useEffect } from 'react'
import { compose } from 'redux'
import withAuthenticated from '../hocs/withAuthenticated'
import Layout from '../components/Layout'
import { connect } from 'react-redux'
import { Table, Divider, Tag } from 'antd'
import Card from '../components/Card'
const { Column, ColumnGroup } = Table;
import Button from '../components/Button'
import { Modal, message, Input, DatePicker, InputNumber } from 'antd'
import { serviceAdd } from '../config/firebase'
import firebase from 'firebase'
import Link from 'next/link'

const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
]

const App = () => {

    //State
    const [visible, setVisible] = useState(false)
    const [product, setProdcut] = useState('')
    const [serial, setSerial] = useState('')
    const [warranty, setWarranty] = useState('')
    const [start, setStart] = useState('')
    const [end, setEnd] = useState('')
    const [link, setLink] = useState('')
    const [year, setYear] = useState('')
    const [stock, setStock] = useState('')
    const [list, setList] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    //Function
    const success = (m) => {
        message.success(m, 10);
    }

    const info = (m) => {
        message.config({
            maxCount: 3,
        })
        message.info(m)
    }

    const fetchData = () => {
        var userId = firebase.auth().currentUser.uid

        var ref = firebase.database().ref('/warranty')
        ref.on("value",
            (snapshot) => {
                let obj = snapshot.val()
                var res = []
                for (const key in snapshot.val()) {
                    res.push(obj[key])
                }
                console.log('RES', res)
                setList(res)
            }, (error) => {
                console.log("Error: " + error.code)
            })


    }

    const nextAdd = () => {
        if (product !== '' && serial !== '' && warranty !== '' && start !== '' && end !== '' && link !== '') {
            const payload = { product, serial, warranty, start, end, link }
            serviceAdd.child(serial).set(payload,
                function (error) {
                    if (error) {
                        info('Add Error')
                    } else {
                        success('Add Successfully')
                    }
                }
            )
            setVisible(false)
            setProdcut('')
            setSerial('')
            setWarranty('')
            setStart('')
            setEnd('')
            setLink('')
        }
        else {
            info('Something is empty')
        }
    }

    function onChangeStart(date, dateString) {
        setStart(dateString)
    }

    function onChangeEnd(date, dateString) {
        setEnd(dateString)
    }


    return (
        <div>

            <Layout>
                <Modal
                    title="Add Data"
                    visible={visible}
                    footer={null}
                    onCancel={() => setVisible(false)}
                >
                    <main className="in-modal">
                        <Input className="mb-10" placeholder="Product" onChange={(e) => setProdcut(e.target.value)} value={product} />
                        <Input className="mb-10" placeholder="Serial Number" onChange={(e) => setSerial(e.target.value)} value={serial} />
                        <Input className="mb-10" placeholder="Warranty" onChange={(e) => setWarranty(e.target.value)} value={warranty} />
                        <div className="data-picker">
                            <DatePicker className="mb-10" onChange={onChangeStart} placeholder="Date Start" />
                            <DatePicker className="mb-10" onChange={onChangeEnd} placeholder="Date End" />
                        </div>
                        <InputNumber className="mb-10" placeholder="Year" onChange={(e) => setYear(e)} min={1} max={10} defaultValue={1} />
                        <Input className="mb-10" placeholder="Link" onChange={(e) => setLink(e.target.value)} value={link} />
                        <div className="bt-modal mt-10">
                            <Button color="reverse-red" className="bdr-5 mr-5" onClick={() => setVisible(false)}>Close</Button>
                            <Button color="green" className="bdr-5" onClick={nextAdd}>Add</Button>
                        </div>
                    </main>
                </Modal>

                <Card className="ma-30 pa-25 bdr-8">
                    <div className="bt-area">
                        <Button color="green" className="bdr-5 mb-20" onClick={() => setVisible(true)}>Add</Button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th className="a">#</th>
                                <th className="b">Product</th>
                                <th className="c">Serial Number </th>
                                <th className="d">Warranty</th>
                                <th className="d">Start</th>
                                <th className="d">End</th>
                                <th className="d">Link</th>
                                <th className="d">Status</th>
                            </tr>

                        </thead>
                        <tbody>
                            {list ? list.map((item, key) => (
                                <tr>
                                    <td>{key + 1}</td>
                                    <td>{item.product}</td>
                                    <td>{item.serial}</td>
                                    <td>{item.warranty}</td>
                                    <td>{item.start}</td>
                                    <td>{item.end}</td>
                                    <td><a href={item.link}><span className="bt-link bdr-10 px-15 ">Link</span></a> </td>
                                </tr>
                            )) : ''}
                        </tbody>
                    </table>
                </Card>
            </Layout>
            <style jsx>{`
                th {
                    color: #696a6e;
                    font-weight: normal;
                }
                .bt-area {
                    display: flex;
                    justify-content: flex-end;
                }
                .in-modal input {
                    margin-bottom: 10px;
                }
                .bt-modal{
                    display: flex;
                    justify-content: flex-end;
                }
                .data-picker {
                    display: flex;
                    justify-content: space-between;
                }
                a {
                    color: #fff;
                }
                tr {
                    height: 40px;
                }
                .a {
                    width: 50px;
                    min-width: 50px;
                }
                .b {
                    width: 100%;
                    min-width: 300px;
                }
                .c {
                    width: 200px;
                    min-width: 200px;
                }
                .d {
                    width: 120px;
                    min-width: 120px;
                }
                .bt-link {
                    background-color: #3c93ef;
                    user-select: none;
                    cursor: pointer;
                }
            `}</style>
        </div >
    )
}

export default compose(
    withAuthenticated,
)(App)