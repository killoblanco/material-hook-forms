import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Form } from '../lib/form';
import { InputField } from '../lib/input';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Stack } from '@mui/material';

const meta: Meta<typeof InputField> = {
  title: 'Form Fields/Input',
  component: InputField,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      description: 'The color of the component. It supports both default and custom theme colors, which can be added as shown in the [palette customization guide.](https://mui.com/material-ui/customization/palette/#adding-new-colors)',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
    disabled: {
      control: 'boolean',
      description: 'If `true`, the input element will be disabled.',
      defaultValue: false
    },
    error: {
      control: 'boolean',
      description: 'If `true`, the label will be displayed in an error state.',
      defaultValue: false
    },
    fullWidth: {
      control: 'boolean',
      description: 'If `true`, the input will take up the full width of its container.',
      defaultValue: false
    },
    helperText: {
      control: 'text',
      description: 'The helper text content.',
    },
    label: {
      control: 'text',
      description: 'The label content.',
    },
    multiline: {
      control: 'boolean',
      description: 'If `true`, a `textarea` element will be rendered instead of an input.',
      defaultValue: false
    },
    name: { control: 'text' },
    placeholder: {
      control: 'text',
      description: 'The short hint displayed in the `input` before the user enters a value.',
    },
    required: {
      control: 'boolean',
      description: 'If `true`, the label is displayed as required and the `input` element is required.',
      defaultValue: false
    },
    size: {
      control: 'select',
      description: 'The size of the component.',
      defaultValue: 'medium',
      options: ['small', 'medium']
    },
    variant: {
      control: 'select',
      description: 'The variant to use.',
      defaultValue: 'outlined',
      options: ['outlined', 'standard', 'filled'],
    },
  }
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Input Field',
    name: 'input',
  },
  render: (props: any) => (
    <Form><InputField {...props} /></Form>
  )
}

export const WithValidations: Story = {
  render: () => {
    const schema = yup.object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    }).required();

    return (
      <Form
        mode='onChange'
        resolver={yupResolver(schema)}
      >
        <Stack spacing={2}>
          <InputField name="firstName" label="First Name" required />
          <InputField name="age" label="Age" type="number" />
        </Stack>
      </Form>
    )
  }
}
