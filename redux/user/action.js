
// Set User Data from Login Firebase
export const setUser = (payload) => async dispatch => {
    dispatch({ type: "SET_USER", payload })
}