export async function generateMetadata() {
  const { profile } = await getProfile()

  const { username } = profile

  return {
    title: username,
    description: `Interests ${username}`
  }
}

const goldTextStyle = {
  background:
    'linear-gradient(74deg, #94783E -6.8%, #F3EDA6 16.76%, #F8FAE5 30.5%, #FFE2BE 49.6%, #D5BE88 78.56%, #F8FAE5 89.01%, #D5BE88 100.43%)',
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}

const InterestsView = () => {
  return (
    <div className='flex-1 flex flex-col justify-center w-full'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-2'>
          <p className='text-xs font-bold' style={goldTextStyle}>
            Tell everyone about yourself
          </p>
          <p className='font-bold text-white'>What interest you?</p>
        </div>
        <div className='relative'>
          <input type='text' className='h-full absolute top-0 bottom-0 w-full' />
          <div className='top-0 flex flex-wrap'>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
            <span className='text-red-300'>chip</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterestsView
