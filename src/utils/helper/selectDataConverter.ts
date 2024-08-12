export const convertSelectOptions = (data: any[]) => data?.map((item: any) => {
    return { label: item.name, value: item.id }
})