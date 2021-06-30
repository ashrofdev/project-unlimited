import React, { useState } from 'react'


const Addclient =()=> {

    const [phones, setPhones] = useState([])
    const [phone, setPhone] = useState('')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')

    const addPhone = (phone) => {
        if(phone !==""){
            const phoneArray = phones

            phoneArray.push(phone)
            setPhones(phoneArray)
            setPhone("")
        }
    }

    const saveClient = () => {

        const clientData = {
            name,
            username,
            phones
        }
        alert(clientData)
    }

    return (
        <div className="addclient">
            <p>Add new client</p>
            <label>
                Client Name
                <input onChange={(e)=> setName(e.target.value)} placeholder="Enter name" />
            </label>
            <label>
                Client username
                <input onChange={(e)=> setUsername(e.target.value)} placeholder="Enter username" />
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
            <button onClick={saveClient} className="btn">Save Client</button>
        </div>
    )
}

export default Addclient
