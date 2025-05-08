interface Props {
  className?: string
  title: string
  message?: string
  statusCode?: string
}

export const Fallback = ({ className, title, message, statusCode }: Props) => {
  return (
    <div className={className}>
      <h1 className="status">{statusCode}</h1>
      <h2 className="title">{title}</h2>
      <p className="message">{message}</p>
    </div>
  )
}
