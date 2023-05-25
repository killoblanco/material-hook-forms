import { type TextFieldProps } from "@mui/material";
import { type UseFormProps } from "react-hook-form";

interface InputProps {
  name: string;
}

export type InputFieldProps = InputProps & TextFieldProps
export type FormProps = React.PropsWithChildren<UseFormProps & {
  onSubmit?: (data: any) => void
}>
