import { TextField } from '@mui/material'
import { type InputFieldProps } from './types'
import { useFormContext } from 'react-hook-form'

export const InputField: React.FC<InputFieldProps> = ({
  name,
  ...props
}: InputFieldProps) => {
  const { register, formState: { errors } } = useFormContext()

  const hasError = (errors[name]?.message as string) ?? null
  console.log(errors)

  return (
    <TextField
      {...props}
      {...register(name)}
      error={hasError !== null}
      helperText={hasError}
    />
  )
}
