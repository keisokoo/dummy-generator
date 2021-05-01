import React, { useState } from 'react'
import { KeyValueWrap } from 'custom-types'
import Textinput from '../themes/textinput'

const Wrap = () => {
  const [keyValues, setKeyValues] = useState([
    {
      key: 'abc',
      valueType: 'string',
    },
  ] as Array<KeyValueWrap.List>)
  const [key, setKey] = useState('' as string)
  const [value, setValue] = useState('' as string)
  return (
    <div>
      <div>
        <Textinput onValueChange={(value) => setKey(value)} />
        <Textinput onValueChange={(value) => setValue(value)} />
      </div>
      <code>
        {'{'}
        <br />
        {`    "${key}": "${value}"`}
        <br />
        {'}'}
      </code>
    </div>
  )
}
export default Wrap
