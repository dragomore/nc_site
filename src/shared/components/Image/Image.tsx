import { type ImgHTMLAttributes } from 'react'

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: Props) => {
  const { className, src, alt, ...rest } = props

  return <img className={className} src={src} alt={alt} {...rest} />
}
