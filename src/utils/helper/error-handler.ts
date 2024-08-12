export function handleErrMsg(error: any): string {
    if (`data` in error) {
        const err = error.data?.message;
        if (typeof err === `string` ? err : err[0]) {
            return err
        } else {
            return err[0]
        }
    } else {
        return error.message;
    }
}