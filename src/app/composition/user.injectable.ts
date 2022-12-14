import { ref, Ref, watch } from 'vue'
import { User } from '../types/User'
import { createInjectable } from '../utils/createInjectable'

// const userKey: InjectionKey<Ref<User>> = Symbol('user')

// export function provideUser(initialUser: Ref<User>) {
//   const user = ref<User>({ ...initialUser.value })

//   watch(initialUser, value => user.value = value)

//   provide(userKey, user)

//   return user
// }

// export function injectUser() {
//   const user = inject(userKey)

//   if (!user)
//     throw new Error(`injection key ${userKey} not found`)

//   return user
// }

export const userInjectable = createInjectable((initialUser: Ref<User>) => {
  const user = ref<User>({ ...initialUser.value })

  watch(initialUser, value => user.value = value)

  return user
})
