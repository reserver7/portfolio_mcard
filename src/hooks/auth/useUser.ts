import { userAtom } from '@/atoms/user'
import { useRecoilValue } from 'recoil'

function useUser() {
  return useRecoilValue(userAtom)
}

export default useUser
