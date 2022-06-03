const initalState = {
    firstName:'',
    lastName:'',
    phoneNumber:'',
    email:'',
    address:'',
    dob:''
}

const detailsReducer = (state=initalState, action) => {

    if(action.type === 'ADD'){
        console.log('from reducer');
        const {name,value} = action.payload;
        console.log(name,value);
        return {
         ...state,
         [name]:value
        }
    }

    if(action.type === 'CLEAR'){
        return initalState;
    }

    return state;
}

export default detailsReducer;

