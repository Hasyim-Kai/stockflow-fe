export type UserRoleType = 'ADMIN' | 'OUTLET_OWNER' | 'EMPLOYEE'
export enum UserRoleEnum {
    ADMIN = `ADMIN`,
    OUTLET_OWNER = `OUTLET_OWNER`,
    EMPLOYEE = `EMPLOYEE`,
}
export const userRoleList: { label: string, value: UserRoleType }[] = [
    { label: 'ADMIN', value: 'ADMIN' },
    { label: 'OUTLET OWNER', value: 'OUTLET_OWNER' },
    { label: 'EMPLOYEE', value: 'EMPLOYEE', }
]