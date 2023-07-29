import { Meta, StoryObj } from '@storybook/react'
import Button from 'components/lib/Button'
import 'scss/globals.scss'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
  parameters: {
    layout: 'centered'
  }
}

export default meta

type Story = StoryObj<typeof Button>

export const Demo: Story = {
  args: {
    label: 'Press me'
  }
}
