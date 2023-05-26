import { Stack } from '@mui/material'
import { type Meta, type StoryObj } from '@storybook/react'
import { Form } from '../lib/form'
import { SwitchField } from '../lib/switch'

const meta: Meta<typeof SwitchField> = {
  title: 'Form Fields/Switch Field',
  component: SwitchField,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof SwitchField>

export const Default: Story = {
  render: () => (
    <Form>
      <Stack direction="row" spacing={2}>
        <SwitchField name="switch" defaultChecked />
        <SwitchField name="switch2" />
        <SwitchField name="switch3" disabled defaultChecked />
        <SwitchField name="switch4" disabled />
      </Stack>
    </Form>
  )
}

export const WithLabel: Story = {
  render: () => (
    <Form>
      <Stack spacing={2}>
        <SwitchField name="switch" label="Switch Label" />
        <SwitchField name="switch2" label="Required" labelProps={{ required: true }} />
        <SwitchField name="switch3" label="Disabled" labelProps={{ disabled: true }} />
      </Stack>
    </Form>
  )
}

export const Sizes: Story = {
  render: () => (
    <Form>
      <Stack direction="row" spacing={2}>
        <SwitchField name="switch" size="small" />
        <SwitchField name="switch2" size="medium" />
      </Stack>
    </Form>
  )
}

export const Colors: Story = {
  render: () => (
    <Form>
      <Stack direction="row" spacing={2}>
        <SwitchField name="switch" color="primary" defaultChecked />
        <SwitchField name="switch2" color="secondary" defaultChecked />
        <SwitchField name="switch3" color="error" defaultChecked />
        <SwitchField name="switch4" color="info" defaultChecked />
        <SwitchField name="switch5" color="success" defaultChecked />
        <SwitchField name="switch6" color="warning" defaultChecked />
        <SwitchField name="switch7" color="default" defaultChecked />
      </Stack>
    </Form>
  )
}

export const LabelPlacement: Story = {
  render: () => (
    <Form>
      <Stack direction="row" spacing={2}>
        <SwitchField name="switch" label="Top" labelProps={{ labelPlacement: 'top' }} />
        <SwitchField name="switch2" label="End" labelProps={{ labelPlacement: 'end' }} />
        <SwitchField name="switch3" label="Bottom" labelProps={{ labelPlacement: 'bottom' }} />
        <SwitchField name="switch4" label="Start" labelProps={{ labelPlacement: 'start' }} />
      </Stack>
    </Form>
  )
}
