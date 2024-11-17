import { InputHTMLAttributes } from 'react'
import { StyledInput } from './styles'

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput placeholder="Buscar conteúdo" {...props} />
}
