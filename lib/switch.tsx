import { useFormContext } from 'react-hook-form'
import { type SwitchFieldProps } from './types'
import { FormControlLabel, Switch } from '@mui/material'

export const SwitchField: React.FC<SwitchFieldProps> = ({ name, label, labelProps, ...props }: SwitchFieldProps) => {
  const { register } = useFormContext()

  return (
    <FormControlLabel
      {...labelProps}
      label={label}
      control={(
        <Switch
          {...props}
          {...register(name)}
        />
      )}
    />
  )
}
