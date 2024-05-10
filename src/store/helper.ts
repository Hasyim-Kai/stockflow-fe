// import * as yup from 'yup'
import { useSelector } from 'react-redux'
import { GlobalStateType } from 'src/store'

export default function useStoreHelper() {
    const userRole = useSelector((state: GlobalStateType) => state.global.user?.role)

    return {
        userRole,

    }
}