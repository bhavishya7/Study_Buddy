import {selector} from "recoil";
import {userState} from "./atoms";


export const setUserState = selector(
    {
        key: 'setUserState',
        get: ({get}) => {
            return get(userState)
        },
        set: ({set}, newValue) => set(userState, newValue)
    }
)