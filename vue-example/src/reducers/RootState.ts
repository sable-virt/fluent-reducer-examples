export interface IRootState {
  name: string
  age: number
  isDirty: boolean
  saving: boolean
}
export const RootState: IRootState = {
  name: 'unknown',
  age: 20,
  isDirty: false,
  saving: false
}