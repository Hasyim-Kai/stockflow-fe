// import * as yup from 'yup'
import { useSelector } from 'react-redux'
import { GlobalStateType } from 'src/store'

export default function useStoreHelper() {
    const userInfo = useSelector((state: GlobalStateType) => state.global.user)
    const userRole = useSelector((state: GlobalStateType) => state.global.user?.role)

    return {
        userInfo, userRole,

    }
}