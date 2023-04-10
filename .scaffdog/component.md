---
name: 'component'
root: './src/components'
output: '.'
ignore: []
questions: 
  name: 'Please enter a component name.'
---

# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.tsx`

```typescript
import {  } from '@mantine/core'

export const {{ inputs.name | pascal }} = () => {
  return ()
}

```


# `{{ inputs.name | pascal }}/{{ inputs.name | pascal }}.stories.tsx`

```typescript
import type { Meta, StoryObj } from '@storybook/react'

import { {{ inputs.name | pascal }} } from './{{ inputs.name | pascal }}'

const meta: Meta<typeof {{ inputs.name | pascal }}> = {
  title: '{{ inputs.name | pascal }}',
  component: {{ inputs.name | pascal }}
}

export default meta

type Story = StoryObj<typeof {{ inputs.name | pascal }}>

export const Primary: Story = {
  render: () => <{{ inputs.name | pascal }}/>
}

```