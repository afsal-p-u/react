import React, { useContext } from "react";
import { AppContext } from "../Context/AppContex";

const Remaining = () => {

    const {expanses, budget} = useContext(AppContext); 

    const totalExpanses = expanses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);

    const alertType = totalExpanses > budget ? 'alert-danger' : 'alert-success'

    return(
        <div className={`alert ${alertType}`}>
            <span>Remaining: ${budget - totalExpanses}</span>
        </div>
    )
}

export default Remaining;