import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { type InputFieldProps } from './types'

export const InputField: React.FC<InputFieldProps> = ({
  name,
  ...props
}: InputFieldProps) => {
  const { register, formState: { errors } } = useFormContext()

  const hasError = (errors[name]?.message as string) ?? null

  return (
    <TextField
      {...props}
      {...register(name)}
      error={hasError !== null}
      helperText={hasError}
    />
  )
}
