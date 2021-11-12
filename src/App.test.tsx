import React from "react"
import { render } from "enzyme"
import App from "./App"

test('dummy', () => {
  // @ts-ignore
  const e = render(<div><p id='title'>Faucet</p></div>)

  expect(e.find('#title').text()).toContain('Faucet')
})
