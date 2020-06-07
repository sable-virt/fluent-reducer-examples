import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'
import { changeAge, changeName, rootReducer, save } from './RootReducer'
import { IRootState } from './RootState'

@Injectable({
  providedIn: 'root',
})
export class RootStateService {
  private _subject: Subject<IRootState> = new Subject()
  constructor() {
    rootReducer.subscribe((state) => {
      this._subject.next(state)
    })
  }
  get subject() {
    return this._subject
  }
  changeName(name: string) {
    rootReducer.dispatch(changeName(name))
  }
  changeAge(age: number) {
    rootReducer.dispatch(changeAge(age))
  }
  save() {
    rootReducer.dispatch(save())
  }
}
