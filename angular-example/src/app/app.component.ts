import { Component, Inject, Self } from '@angular/core'
import { root } from 'rxjs/internal-compatibility'
import { RootStateService } from '../reducers/app.reducer.service'
import { changeAge, changeName, rootReducer, save } from '../reducers/RootReducer'
import { IRootState } from '../reducers/RootState'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-example'
  state: IRootState = rootReducer.getState()
  constructor(public rootStateService: RootStateService) {
    rootReducer.subscribe((state) => {
      this.state = state
    })
  }
  _handleOnChangeName(e: Event) {
    const target = e.target as HTMLInputElement
    rootReducer.dispatch(changeName(target.value))
  }
  _handleOnChangeAge(e: Event) {
    const target = e.target as HTMLInputElement
    rootReducer.dispatch(changeAge(parseInt(target.value, 10)))
  }
  _handleOnSave(e: Event) {
    e.preventDefault()
    rootReducer.dispatch(save())
  }
}
