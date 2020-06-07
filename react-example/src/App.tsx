import React, { ChangeEvent, FormEvent, useCallback } from 'react'
import logo from './logo.svg'
import './App.css';
import { changeAge, changeName, rootReducer, save } from './reducers/RootReducer'

function App() {
  const [state, dispatch] = rootReducer.useFluentReducer()
  const _handleOnChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value))
  }, [dispatch])
  const _handleOnChangeAge = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeAge(parseInt(e.target.value, 10)))
  }, [dispatch])
  const _handleOnSubmit = useCallback((e: FormEvent) => {
    e.preventDefault()
    dispatch(save())
  }, [dispatch])
  return (
    <form className="App" onSubmit={_handleOnSubmit}>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <p>Name: <input type="text" value={state.name} disabled={state.saving} onChange={_handleOnChangeName}/></p>
      <p>Age: <input type="number" value={state.age} disabled={state.saving} onChange={_handleOnChangeAge}/></p>
      <button type="submit" disabled={state.saving}>
        {state.saving ? 'saving...' : 'save'}
      </button>
    </form>
  )
}

export default App;
