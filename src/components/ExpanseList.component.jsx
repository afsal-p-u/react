import React, { useContext } from "react";
import ExpanseItem from "./ExpanseItem.component";

import { AppContext } from "../Context/AppContex"; 

const ExpanseList = () => {
    
    const { expanses } = useContext(AppContext);

    return(
        <ul className="list-group">
            {expanses.map(((expanse) => (
                <ExpanseItem key={expanse.id} id={expanse.id} name={expanse.name} cost={expanse.cost} />
            )))}
        </ul>
    )
};

export default ExpanseList;

