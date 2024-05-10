export type QuantityUnitType = `Pcs` | `Liter` | `MiliLiter` | `Box` | `Cup` | `Bottle`
export const quantityUnitOptions: { label: string, value: QuantityUnitType }[] = [
    { label: 'Pcs', value: 'Pcs' },
    { label: 'Liter', value: 'Liter' },
    { label: 'MiliLiter', value: 'MiliLiter' },
    { label: 'Box', value: 'Box' },
    { label: 'Cup', value: 'Cup' },
    { label: 'Bottle', value: 'Bottle' },
]