import { IconButton } from '@mui/material'
import { useState } from 'react'
import { InputField } from './input'
import { type SecretFieldProps } from './types'

export const SecretField: React.FC<SecretFieldProps> = ({
  hiddenIcon,
  showIcon,
  ...props
}: SecretFieldProps) => {
  const [show, setShow] = useState(false)

  const toggleShow = (): void => {
    setShow(!show)
  }

  return (
    <InputField
      {...props}
      type={show ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <IconButton onClick={toggleShow} size="small">
            {show ? showIcon ?? 'H' : hiddenIcon ?? 'S'}
          </IconButton>
        )
      }}
    />
  )
}
