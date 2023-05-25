import { Meta, StoryObj } from "@storybook/react";
import { SwitchField } from "../lib/switch";
import { Form } from "../lib/form";
import React from "react";
import { Stack } from "@mui/material";

const meta: Meta<typeof SwitchField> = {
  title: 'Form Fields/Switch Field',
  component: SwitchField,
  tags: ['autodocs'],
  argTypes: {}
}

export default meta

type Story = StoryObj<typeof SwitchField>

export const Default: Story = {
  render: (props) => (
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
  render: (props) => (
    <Form>
      <Stack spacing={2}>
        <SwitchField name="switch" label="Switch Label" />
        <SwitchField name="switch2" label="Required" labelProps={{ required: true }} />
        <SwitchField name="switch3" label="Disabled" labelProps={{ disabled: true }} />
      </Stack>
    </Form>
  )
}