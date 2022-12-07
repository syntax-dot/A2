import { postLogin } from '../schema/services'

export async function login() {
  const isLogin = localStorage.getItem('userToken')
  if (isLogin)
    return

  const user = await postLogin({
    login: '9852158891',
    password: '6030616154',
  })

  localStorage.setItem('userToken', user.token)
  localStorage.setItem('userId', user.user.id)
}
