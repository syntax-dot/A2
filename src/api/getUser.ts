import { User } from '../app/types/User'
import { getUserUserId } from '../schema/services'

export async function getUser(): Promise<User | undefined> {
  const userId = localStorage.getItem('userId')
  if (!userId)
    return

  return await getUserUserId(+userId)
}
