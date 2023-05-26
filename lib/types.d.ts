import { type FormControlLabelProps, type SwitchProps, type TextFieldProps } from '@mui/material'
import { type UseFormProps } from 'react-hook-form'

export type FormProps = React.PropsWithChildren<UseFormProps & {
  onSubmit?: (data: any) => void
}>

interface InputProps {
  name: string;
  label?: string;
}

export type InputFieldProps = InputProps & TextFieldProps

export type SecretFieldProps = InputFieldProps & {
  hiddenIcon?: React.ReactNode
  showIcon?: React.ReactNode
}

export type SwitchFieldProps = InputProps & SwitchProps & {
  labelProps?: Omit<FormControlLabelProps, 'control' | 'label'>
}
