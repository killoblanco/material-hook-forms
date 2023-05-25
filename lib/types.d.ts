import {
  type TextFieldProps,
  type SwitchProps,
  type FormControlLabelProps
} from "@mui/material";
import { type UseFormProps } from "react-hook-form";

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