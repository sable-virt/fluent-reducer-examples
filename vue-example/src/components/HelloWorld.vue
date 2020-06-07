<template>
  <div class="hello">
    <form @submit="save">
      <p>Name: <input type="text" :disabled="state.saving" :value="state.name" @input="updateName" /></p>
      <p>Age: <input type="number" :disabled="state.saving" :value="state.age" @input="updateAge" /></p>
      <button type="submit" :disabled="state.saving">
        {{state.saving ? 'saving...' : 'save'}}
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { changeAge, changeName, rootReducer, save } from '@/reducers/RootReducer'
import { IRootState } from '@/reducers/RootState'
import { Component, Vue, Watch } from 'vue-property-decorator'

@Component
export default class HelloWorld extends Vue {
  state: IRootState
  data() {
    return {
      state: rootReducer.getState(),
    }
  }
  mounted() {
    rootReducer.subscribe(state => {
      this.state = state
    })
  }
  updateName(e: InputEvent) {
    const target  = e.target as HTMLInputElement
    if (target) {
      rootReducer.dispatch(changeName(target.value))
    }
  }
  updateAge(e: InputEvent) {
    const target  = e.target as HTMLInputElement
    if (target) {
      rootReducer.dispatch(changeAge(parseInt(target.value, 10)))
    }
  }
  save(e: Event) {
    e.preventDefault()
    rootReducer.dispatch(save())
  }
}
</script>

<style scoped>
</style>
