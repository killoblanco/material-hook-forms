import { yupResolver } from '@hookform/resolvers/yup';
import { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import * as yup from "yup";
import { Form } from '../lib/form';
import { SecretField } from '../lib/secret';

const meta: Meta<typeof SecretField> = {
  title: 'Form Fields/Secret Field',
  component: SecretField,
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
    label: 'Secret Field',
    name: 'secret',
  },
  render: (props: any) => (
    <Form><SecretField {...props} /></Form>
  )
}

export const WithValidations: Story = {
  render: () => {
    const schema = yup.object({
      password: yup.string().min(8).required(),
    }).required();

    return (
      <Form
        mode='onChange'
        resolver={yupResolver(schema)}
      >
        <SecretField name="password" label="Pasword" required />
      </Form>
    )
  }
}
