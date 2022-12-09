import { uniqueId } from 'lodash'
import { InjectionKey, provide as vueProvide } from 'vue'
import { createInjector } from './createInjector'

interface Injectable<T, A extends any[]> {
  provide(...args: A): T
  inject(): T
}

export function createInjectable<T, A extends any[]>(factory: (...args: A) => T): Injectable<T, A> {
  const key: InjectionKey<T> = Symbol.for(uniqueId('injectable'))

  function provide(...args: A) {
    const data = factory(...args)

    vueProvide(key, data)

    return data
  }

  const inject = createInjector(key)

  return {
    inject,
    provide,
  }
}
