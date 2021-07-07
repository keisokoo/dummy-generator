import React, { createRef, useState, useEffect, useMemo, useRef } from 'react'
import { KeyValueWrap } from 'custom-types'
import Textinput from '../themes/textinput'
import {
  randomDate,
  randomName,
  randomNumber,
  randomAddress,
  randomMail,
  randomTitle,
  randomArticle,
  randomRange,
  randomCode,
  randomBrands,
  randomProducts,
} from '../utils/lib'
// import { format } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'

const initialKeyValue = [
  {
    name: 'id',
    valueType: 'id',
    refs: createRef(),
    custom: '',
    wrapType: true,
  },
  {
    name: 'code',
    valueType: 'code',
    refs: createRef(),
    custom: '',
    wrapType: true,
  },
  // {
  //   name: 'name',
  //   valueType: 'name',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'phone',
  //   valueType: 'phone',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'address',
  //   valueType: 'address',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'email',
  //   valueType: 'email',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'date',
  //   valueType: 'date',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: false,
  // },
  // {
  //   name: 'title',
  //   valueType: 'title',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'article',
  //   valueType: 'article',
  //   refs: createRef(),
  //   custom: '',
  //   wrapType: true,
  // },
  // {
  //   name: 'custom',
  //   valueType: 'custom',
  //   refs: createRef(),
  //   custom: 'customer',
  //   wrapType: true,
  // },
  // {
  //   name: 'json',
  //   valueType: 'custom',
  //   refs: createRef(),
  //   custom: "['a','b','c']",
  //   wrapType: true,
  // },
  // {
  //   name: 'array-random',
  //   valueType: 'split',
  //   refs: createRef(),
  //   custom: '["a","b","c"]|["d","e",0,"f"]|["g","h"]',
  //   wrapType: false,
  // },
  // {
  //   name: 'enum',
  //   valueType: 'split',
  //   refs: createRef(),
  //   custom: '0|1|2|3|4|5',
  //   wrapType: false,
  // },
] as Array<KeyValueWrap.List>
const Wrap = () => {
  const codeRef = useRef(null as any)
  const [keyValues, setKeyValues] = useState(initialKeyValue)
  const [valueName, setValueName] = useState('example')
  const [count, setCount] = useState(3)
  const manys = useMemo(() => new Array(count).fill(1), [count])
  const handleCustom = (value: string, index: number): void => {
    setKeyValues((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], custom: value },
      ...prev.slice(index + 1),
    ])
  }
  const handleSetKey = (value: string, index: number): void => {
    setKeyValues((prev) => [
      ...prev.slice(0, index),
      { ...prev[index], name: value },
      ...prev.slice(index + 1),
    ])
  }
  const handleKeyDownOnSelect = (event: any, index: number): void => {
    if (event.code.toLowerCase().includes('tab') && keyValues[index].name) {
      event.preventDefault()
      setKeyValues((prev) => [
        ...prev.slice(0, index),
        { ...prev[index] },
        {
          name: '',
          valueType: '',
          refs: createRef(),
          custom: '',
          wrapType: true,
        },
        ...prev.slice(index + 1),
      ])
    }
  }
  const handleKeyDown = (event: any, index: number): void => {
    if (event.code.toLowerCase().includes('enter') && event.target.value) {
      setKeyValues((prev) => [
        ...prev.slice(0, index),
        { ...prev[index] },
        {
          name: '',
          valueType: '',
          refs: createRef(),
          custom: '',
          wrapType: true,
        },
        ...prev.slice(index + 1),
      ])
    }
    if (
      event.code.toLowerCase().includes('backspace') &&
      !event.target.value &&
      keyValues.length > 1
    ) {
      setKeyValues((prev) => prev.filter((_, idx) => index !== idx))
    }
  }
  useEffect(() => {
    if (keyValues.findIndex((dt) => dt.name === '') > 0) {
      keyValues[
        keyValues.findIndex((dt) => dt.name === '')
      ].refs.current.focus()
    }
  }, [keyValues.length])
  useEffect(() => {
    if (keyValues) {
      console.log('keyValues', keyValues)
    }
  }, [keyValues])
  return (
    <div id="wrap">
      <div className="key-part">
        <div className="key-part-wrap">
          <div>
            <input
              type="number"
              min="1"
              max="10000"
              value={count}
              onChange={(e) => {
                if (Number(e.target.value) > 0) {
                  setCount(Number(e.target.value))
                } else {
                  setCount(1)
                }
              }}
            />
            <Textinput
              defaultValue={valueName}
              onValueChange={(value) => setValueName(value)}
            />
            <button
              onClick={() => {
                if (window && window.getSelection) {
                  let range = document.createRange()
                  let selection = window.getSelection()
                  range.selectNode(codeRef.current)
                  selection?.removeAllRanges()
                  selection?.addRange(range)
                  document.execCommand('copy')
                  alert('복사했습니다.')
                }
              }}
            >
              전체 복사
            </button>
          </div>
          {keyValues &&
            keyValues.length > 0 &&
            keyValues.map((item, index) => (
              <div className="key-value-box" key={'keytype' + index}>
                <Textinput
                  index={index}
                  refs={item.refs}
                  defaultValue={item.name}
                  onValueChange={(value) => handleSetKey(value, index)}
                  onKeyDown={handleKeyDown}
                />
                <select
                  value={item.valueType}
                  onChange={(e) => {
                    setKeyValues((prev) => [
                      ...prev.slice(0, index),
                      { ...prev[index], valueType: e.target.value },
                      ...prev.slice(index + 1),
                    ])
                  }}
                  onKeyDown={(e) => handleKeyDownOnSelect(e, index)}
                >
                  <option>id</option>
                  <option>code</option>
                  <option>name</option>
                  <option>brand</option>
                  <option>product</option>
                  <option>phone</option>
                  <option>email</option>
                  <option>address</option>
                  <option>date</option>
                  <option>title</option>
                  <option>article</option>
                  <option value={'split'}>split("|")</option>
                  <option>custom</option>
                </select>

                {(item.valueType === 'custom' ||
                  item.valueType === 'split') && (
                  <>
                    <select
                      value={item.wrapType ? 'true' : 'false'}
                      onChange={(e) => {
                        setKeyValues((prev) => [
                          ...prev.slice(0, index),
                          {
                            ...prev[index],
                            wrapType: e.target.value === 'true',
                          },
                          ...prev.slice(index + 1),
                        ])
                      }}
                    >
                      <option value={'true'}>wrap ""</option>
                      <option value={'false'}>no-wrap</option>
                    </select>
                    <Textinput
                      defaultValue={item.custom}
                      onValueChange={(value) => handleCustom(value, index)}
                    />
                  </>
                )}
              </div>
            ))}
        </div>
      </div>
      <div className="value-part">
        <div className="value-part-wrap">
          <code ref={codeRef}>
            {valueName && (
              <>
                const {valueName} = {manys.length > 1 ? <>[{'\n'}</> : ''}
              </>
            )}
            {manys.map((_, manyIndex) => {
              return (
                <React.Fragment key={`code-${manyIndex}`}>
                  {'{'}
                  {keyValues &&
                    keyValues.length > 0 &&
                    keyValues.map((item, index) => {
                      if (item.valueType === 'date') {
                        item.wrapType = false
                      }
                      return (
                        <React.Fragment key={`code-${index}`}>
                          {'\n'}
                          {`    "${item.name}": ${item.wrapType ? `"` : ``}${
                            item.valueType === 'id' ? uuidv4() : ''
                          }${
                            item.valueType === 'product' ? randomProducts() : ''
                          }${item.valueType === 'brand' ? randomBrands() : ''}${
                            item.valueType === 'code' ? randomCode() : ''
                          }${item.valueType === 'name' ? randomName() : ''}${
                            item.valueType === 'phone' ? randomNumber() : ''
                          }${
                            item.valueType === 'split'
                              ? item.custom?.includes('|')
                                ? randomRange(item.custom.split('|'))
                                : item.custom
                              : ''
                          }${
                            item.valueType === 'address' ? randomAddress() : ''
                          }${item.valueType === 'email' ? randomMail() : ''}${
                            item.valueType === 'date'
                              ? randomDate(
                                  new Date(2012, 0, 1),
                                  new Date()
                                ).getTime()
                              : ''
                          }${item.valueType === 'title' ? randomTitle() : ''}${
                            item.valueType === 'article' ? randomArticle() : ''
                          }${item.valueType === 'custom' ? item.custom : ''}${
                            item.wrapType ? `"` : ``
                          },`}
                        </React.Fragment>
                      )
                    })}
                  {'\n'}
                  {'}'}
                  {manys.length > 1 && manys.length - 1 !== manyIndex ? (
                    <>,{'\n'}</>
                  ) : (
                    ''
                  )}
                </React.Fragment>
              )
            })}
            {manys.length > 1 ? <>]{'\n'}</> : ''}
          </code>
        </div>
      </div>
    </div>
  )
}
export default Wrap
