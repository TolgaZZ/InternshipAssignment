const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case'LOGIN_ERROR':
        console.log('Login Error!')
        return {
            ...state,
            authError: 'Login failed'
        }
        case'LOGIN_SUCCES':
        console.log('Login Succes!')
        return {
            ...state,
            authError: null
        }
    default:
        return state;
    }
}

export default authReducer 