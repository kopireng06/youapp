import { getProfile } from '@src/utils/api/getProfile'
import BackButton from './BackButton'

const AboutHeader = async ({ children }) => {
  const { profile } = await getProfile()

  return (
    <div className='flex relative justify-between w-full py-4'>
      <span className='text-white text-sm absolute text-center left-0 right-0'>{`@${profile?.username}`}</span>
      <BackButton />
      {children}
    </div>
  )
}

export default AboutHeader
