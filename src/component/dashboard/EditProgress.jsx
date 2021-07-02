import React, { useState } from 'react';

const EditProgress = () => {
    const [clients, setClients] = useState(['','',''])
    const [selected, setSelected] = useState()

    return (
        <div className="editprogress">
            Edit Progress

            {
                clients.map((client, i)=> {
                    return <div onClick={()=> setSelected(i)} className="client">
                        <div className="top">
                            <div className="details">
                                <h5>{'John Doe'}</h5>
                                <p>{'FSP02273'}</p>
                            </div>
                            <div className="toggle">{">"}</div>
                        </div>
                        {
                            selected===i?
                            <div className="bottom">
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                                <p>2387387387</p>
                            </div>:null
                        }
                    </div>
                })
            }

        </div>
    );
};

export default EditProgress;