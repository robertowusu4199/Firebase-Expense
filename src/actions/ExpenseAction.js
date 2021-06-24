export function addExpense(newExpense) {
    return{
        type:"SET_ADD_EXPENSE",
        payload: newExpense
    }
}

export function deleteExpense(id) { 
    return{
       type:"SET_DELETE_EXPENSE",
       payload: id
    }
}

export  function updateExpense(id,updatedExpense) {    
    return{
       type:"SET_UPDATE_EXPENSE",
       payload:{ id:id , updatedExpenseinfo:updatedExpense}
    }
}