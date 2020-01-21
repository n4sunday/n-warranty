const user = {
    data: {
        name: 'Sunday'
    }
}

export const userReducer = (state = user, action) => {
    switch (action.type) {
        case 'TEST':
            return state
        case 'SET_USER':
            return state = { ...state, data: action.payload }
        default:
            return state
    }
}