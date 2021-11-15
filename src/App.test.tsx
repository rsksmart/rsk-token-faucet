import React from 'react'
import { render } from 'enzyme'

test('dummy', () => {
  // @ts-ignore
  const e = render(<div><p id='title'>Faucet</p></div>)

  expect(e.find('#title').text()).toContain('Faucet')
})
