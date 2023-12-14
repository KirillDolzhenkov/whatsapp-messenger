type DialogsInitialStateType  = {}
type actionType  = ReturnType<typeof addMessage>
    | ReturnType<typeof test>

const initialState: DialogsInitialStateType = {}

export const dialogsReducer = (state: DialogsInitialStateType = initialState, action: actionType) => {
    switch (action.type){
        case "SN/DIALOGS/ADD_MESSAGE":{
            return state;
        }
        case "SN/DIALOGS/TEST": {
            return state;
        }
        default: {
            return state;
        }
    }
}

const addMessage = (message: string) => {
    return {type: "SN/DIALOGS/ADD_MESSAGE", payload: {message}} as const;
}

const test = () => {
    return {type: "SN/DIALOGS/TEST", payload: {}} as const;
}