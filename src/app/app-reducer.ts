
// TYPES
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type InitialStateType = {
    // если false то условие в App покажет true и заретурнет, после чего сразу попадем в useEffect
    isInit: any,
    // происходит ли сейчас взаимодействие с сервером
    status: RequestStatusType,
    // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
    error: string | null,
}

const initialState: InitialStateType = {
    isInit: false, // should be 'false' to work with authorization
    status: 'idle',
    error: null,
}
// REDUCER
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return {...state, status: action.status}
        case 'APP/SET-ERROR':
            return {...state, error: action.error}
        case 'APP/IS-INIT':
            return {...state, isInit: action.isInit}
        default:
            return {...state}
    }
}


//ACTIONS
type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetAppInitActionType

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitActionType = ReturnType<typeof setAppInitAC>


export const setAppErrorAC = (error: string | null) => ({type: 'APP/SET-ERROR', error} as const)
export const setAppStatusAC = (status: RequestStatusType) => ({type: 'APP/SET-STATUS', status} as const)
export const setAppInitAC = (isInit: any) => ({type: 'APP/IS-INIT', isInit} as const)







