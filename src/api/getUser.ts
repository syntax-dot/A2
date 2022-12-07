import { getUserUserId } from '../schema/services'

export async function getUser() {
  const userId = localStorage.getItem('userId')
  if (!userId)
    return

  const user = await getUserUserId(+userId)

  return user
}
