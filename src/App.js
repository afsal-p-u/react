import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import Budget from "./components/Budget.component";
import Remaining from "./components/Remaining.component";
import ExpanseTotal from "./components/ExpanseTotal.component";
import ExpanseList from "./components/ExpanseList.component";
import AddExpenseForm from "./components/AddExpanseForm.component";

import { AppProvider } from "./Context/AppContex";

const App = () => {
  return(
    <AppProvider>
      <div className="container">
        <h3 className="mt-3">My Budget Planner</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpanseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpanseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
          <div className="mt-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
      </div>
    </AppProvider>
  )
}

export default App;