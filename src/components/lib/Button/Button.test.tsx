import Button from '.'
import { describe, afterEach, expect, it } from 'vitest'
import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'

describe('Button.tsx', () => {
  afterEach(() => {
    cleanup()
  })

  it('should render the page title', () => {
    render(<Button label="Press Me" handleClick={() => {}} />)
    const headingElement = screen.getByRole('button')
    expect(headingElement).toHaveTextContent('Press Me')
  })

  it('should match snapshot', () => {
    const tree = renderer.create(<Button label="Press Me" handleClick={() => {}} />)
    expect(tree).toMatchSnapshot()
  })
})
