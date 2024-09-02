    import { useState } from "react"

    const Army = ({invite, setInvite}) => {

    const inviteFilter = () => {
        const filteredInvite = invite.filter(item => item.age > 18)
        setInvite(filteredInvite)
    }  
    return (
        <div className='mx-5'>
            <div>
                <button onClick={inviteFilter} className='btn btn-success my-3'>Armiyaga qabul qilish</button>
            </div>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        invite.map((item,ind) => {
                            return <tr key={ind}>
                                <td>{ind+1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.age}</td>
                                <td>{item.city}</td>
                                <td>{item.salary}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    )
    }

    export default Army