import { FormProvider, useForm } from 'react-hook-form'
import { type FormProps } from './types'

export const Form: React.FC<FormProps> = ({
  children,
  onSubmit = () => {
  },
  ...props
}: FormProps) => {
  const form = useForm(props)

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}
