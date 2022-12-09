import { inject, InjectionKey, provide, ref, Ref } from 'vue'
import { User } from '../types/User'

const userKey: InjectionKey<Ref<User>> = Symbol('user')

export function provideUser(initialUser: Ref<User>) {
  const user = ref<User>({ ...initialUser.value })

  provide(userKey, user)

  return user
}

export function injectUser() {
  const user = inject(userKey)

  if (!user)
    throw new Error(`injection key ${userKey} not found`)

  return user
}
