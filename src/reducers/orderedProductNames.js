const initialstate = {
    ordersProductName : null,
}

const orderedProductNames = (state=initialstate, action) => {
    switch(action.type){
        case 'SET_PRODUCTNAMES':
            return action.payload
        default:
            return state
    }
}

export default orderedProductNames
