import React, { useState } from 'react'


const Addclient =()=> {

    const [phones, setPhones] = useState([])
    const [phone, setPhone] = useState('')

    const addPhone = (phone) => {
        const phoneArray = phones

        phoneArray.push(phone)
        setPhones(phoneArray)
        setPhone("")
    }


    return (
        <div className="addclient">
            <p>Add new client</p>
            <label>
                Client Name
                <input placeholder="Enter name" />
            </label>
            <label>
                Client username
                <input placeholder="Enter username" />
            </label>

            <div className="phonegrid">
                {
                    phones.map(phone=> {
                        return <p>{phone}</p>
                    })
                }
            </div>
            <div className="phoneadder">
                <input onChange={(e)=> setPhone(e.target.value)} value={phone} type="number" placeholder="Enter new mobile number" />
                <button onClick={()=> addPhone(phone)}>+ADD</button>
            </div>
        </div>
    )
}

export default Addclient
