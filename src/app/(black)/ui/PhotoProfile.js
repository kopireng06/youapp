import Image from 'next/image'

const style = {
  background: '#162329',
  height: 190
}

const PhotoProfile = (props) => {
  return (
    <div style={style} className='rounded-2xl relative overflow-hidden'>
      <div className='h-full w-full'>
        <Image
          src='https://live.staticflickr.com/8/7202/7154429164_d26db0a060_z.jpg'
          layout='fill'
          objectFit='cover'
          alt='Picture of the author'
        />
      </div>
      <p className='absolute bottom-3 left-4 font-bold text-white'>{`@${props?.username}`}</p>
    </div>
  )
}

export default PhotoProfile
