import {setAppErrorAC, SetAppErrorActionType, setAppStatusAC, SetAppStatusActionType} from '../app/app-reducer'
import {ResponseType} from '../api/todolists-api'
import {Dispatch} from 'redux'

export const handleServerAppError = <D>(data: ResponseType<D>, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {
    if (data.messages.length) {
        dispatch(setAppErrorAC(data.messages[0]))
    } else {
        dispatch(setAppErrorAC('Some error occurred'))
    }
    dispatch(setAppStatusAC('failed'))
}

export const handleServerNetworkError = (errorMessage: string, dispatch: Dispatch<SetAppErrorActionType | SetAppStatusActionType>) => {

    const textError = () => {
        if (errorMessage) {
            if (errorMessage === 'Authorization has been denied for this request.') {
                return 'Authorization please!'
            } else
                return errorMessage
        } else {
            return 'Some error occurred'
        }
    }
    dispatch(setAppErrorAC(textError()))
    dispatch(setAppStatusAC('failed'))
}
