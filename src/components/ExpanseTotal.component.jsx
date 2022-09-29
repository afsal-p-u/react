import React, { useContext } from "react";
import { AppContext } from '../Context/AppContex';

const ExpanseTotal = () => {

    const {expanses} = useContext(AppContext);

    const totalExpanses = expanses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    return(
        <div className="alert alert-primary">
            <span>Spend so far: ${totalExpanses}</span>
        </div>
    )
};

export default ExpanseTotal;