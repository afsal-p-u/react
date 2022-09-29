import React, { useState, useContext } from "react";
import { AppContext } from "../Context/AppContex";

import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

    const { dispatch } = useContext(AppContext);

    const [name, setName] = useState('');
    const [cost, setCost] = useState('');    

    const handleSubmit = () => {
        
        if(name === '' || cost === ''){
            return;
        }

        const expanse = {
            id: uuidv4(),
            name: name,
            cost: parseInt(cost),
        }

        dispatch({
            type: 'ADD_EXPANSES',
            payload: expanse,
        })
    }

    return(
        // <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" 
                        required='required' 
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <label htmlFor="cost">Cost</label>
                    <input 
                        type="text"
                        className="form-control"
                        id="cost"
                        required="required"
                        value={cost}
                        onChange={(event) => setCost(event.target.value)}
                    ></input>
                </div>
                <div className="col-sm">
                    <button className="btn btn-primary mt-3" type="submit" onClick={handleSubmit}>Save</button>
                </div>
            </div>
        // </form>
    )
}

export default AddExpenseForm;