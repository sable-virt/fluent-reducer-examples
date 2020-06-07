import { ReactFluentReducer } from 'fluent-reducer/react'
import { IRootState, RootState } from './RootState'

export const rootReducer = new ReactFluentReducer<'root', IRootState>(RootState, {
  verbose: true
})

export const changeName = rootReducer.sync<string>('CHANGE_NAME', (state, name) => {
  state.name = name
  state.isDirty = true
})

export const changeAge = rootReducer.sync<number>('CHANGE_AGE', (state, age) => {
  state.age = age
  state.isDirty = true
})

export const save = rootReducer.async<void, { name: string, age: number }, Error>('SAVE', (_, dispatch, getState) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentState = getState()
      resolve({
        name: currentState.name,
        age: currentState.age
      })
    }, 3000)
  })
}, {
  started(state, params) {
    state.saving = true
  },
  failed(state, { error }) {
    state.saving = false
    console.error(error)
  },
  done(state, { result, params }) {
    state.saving = false
    state.isDirty = false
    alert(`DONE: ${result.name}(${result.age})`)
  }
})
