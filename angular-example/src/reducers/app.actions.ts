import { Injectable } from '@angular/core';
import { rootReducer } from './RootReducer'
import { IRootState } from './RootState'



@Injectable({
  providedIn: 'root',
})
export class RootStateService {
  private _state: IRootState = rootReducer.getState()
  constructor() {
    rootReducer.subscribe((state) => {
      this._state = state
    })
  }

}
