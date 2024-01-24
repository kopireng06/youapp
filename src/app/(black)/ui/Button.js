import { useFormStatus } from 'react-dom'

const style = {
  'border-radius': '8px',
  height: 48,
  background: 'linear-gradient(108deg, #62CDCB 24.88%, #4599DB 78.49%)'
}

const Button = (props) => {
  const { pending } = useFormStatus()

  const className = props?.disabled ? 'font-bold text-white opacity-30' : 'font-bold text-white'

  return <button style={style} className={className} {...props}></button>
}

export default Button
