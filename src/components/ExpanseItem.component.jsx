import React, { useContext } from "react";
import { TiDelete } from 'react-icons/ti';
import { AppContext } from "../Context/AppContex";

const ExpanseItem = (props) => { 

    const { dispatch } = useContext(AppContext);

    const handleDeleteExpanses = () => {
        dispatch({
            type: 'DELETE_EXPANSE',
            payload: props.id,
        })
    }

    return(
        <li className="list-group-item d-flex justify-content-between align-items-centet">
            {props.name}
            <div>
                <span className="badge bg-primary rounded-pill me-3">
                    ${props.cost} 
                </span>
                <TiDelete size='1.5rem' onClick={handleDeleteExpanses}></TiDelete>
            </div>
        </li>
    )
};

export default ExpanseItem;