import { Readpage } from "./Read";
import { Form } from "./nweForm";
import { Listall } from "./tempva";
import { useEffect, useState } from 'react';
export let Mainpage = () => {

    const [createpage, setCreatepage] = useState(false);

    const [tempvalues, setTempvalues] = useState([]);

    const [readpage, setReadpage] = useState(false);

    const [position, setPosition] = useState(0)

    useEffect(() => {
        // alert(typeof tempvalues);
        setTempvalues(Listall);
    })

    return (
        <>
            {
                (createpage) ?
                    <>
                        <Form /><div className=' mt-5 row justify-content-center'>
        <button className='btn btn-outline-danger col-3'
        onClick={ () => {
        setCreatepage(false)}}>Close
    </button></div>
                        
                    </>
                    :
                    (readpage) ?
                        <>
                            <Readpage who={position} />
                            <button
                                className='btn btn-outline-secondary'
                                onClick={
                                    () => {
                                        setReadpage(false)
                                    }
                                }>
                                BACK
                            </button>
                        </>
                        :
                        <>
                            <button
                                className='btn btn-outline-success mt-5 ms-5'
                                onClick={
                                    () => {
                                        setCreatepage(true)
                                    }
                                }>
                                REGISTER
                            </button>
                            <div className='container mt-5'>
                                <table className='table table-striped table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>StudentNAME</th>
                                            <th>StudentAGE</th>
                                            <th>StudentPLACE</th>
                                            <th>StudentMAILID</th>
                                            <th>PIN CODE</th>
                                            <th>ACTIONS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            tempvalues.map(
                                                (element, index) =>
                                                    <>
                                                        <tr>
                                                            <td>{element.studentname}</td>
                                                            <td>{element.studentage}</td>
                                                            <td>{element.studentplace}</td>
                                                            <td>{element.studentemail}</td>
                                                            <td>{element.pinnumber}</td>
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setReadpage(true);
                                                                        // position 
                                                                        setPosition(index)
                                                                    }}>READ</button>
                                                                <button>UPDATE</button>
                                                                <button> DELETE</button>
                                                            </td>
                                                        </tr>
                                                    </>
                                            )
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </>

            }
        </>
    )
}