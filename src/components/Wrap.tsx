import React, { createRef, useEffect, useMemo, useRef, useState } from 'react'
import Textinput from '../themes/textinput'
import { disposeByType } from '../utils/lib'
// import { format } from 'date-fns'
import {
  isValueTypes,
  ValueTypeList,
  ValueTypes,
} from '../../@types/custom-types'

export interface KeyValueWrap {
  name: string
  valueType: ValueTypes
  refs: React.MutableRefObject<any>
  custom: string
  wrapType: boolean
}

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
] as Array<KeyValueWrap>
const Wrap = () => {
  const codeRef = useRef(null as any)
  const [keyValues, setKeyValues] = useState(initialKeyValue)
  const [valueName, setValueName] = useState('example')
  const [count, setCount] = useState(3)
  const manyOf = useMemo(() => new Array(count).fill(1), [count])
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
          valueType: 'index',
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
          valueType: 'index',
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
    let findResult = keyValues.findIndex((dt) => dt.name === '')
    let findTarget = keyValues[findResult]
    if (findResult && findTarget) {
      findTarget.refs.current.focus()
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
              onValueChange={(value: string) => setValueName(value)}
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
                  onValueChange={(value: string) => handleSetKey(value, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                />
                <select
                  value={item.valueType}
                  onChange={(e) => {
                    setKeyValues((prev) => {
                      let changeType = e.target.value
                      if (isValueTypes(changeType)) {
                        return [
                          ...prev.slice(0, index),
                          { ...prev[index], valueType: changeType },
                          ...prev.slice(index + 1),
                        ]
                      } else {
                        return prev
                      }
                    })
                  }}
                  onKeyDown={(e) => handleKeyDownOnSelect(e, index)}
                >
                  {ValueTypeList.map((item) => {
                    return (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    )
                  })}
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
                      onValueChange={(value: string) =>
                        handleCustom(value, index)
                      }
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
                const {valueName} = {manyOf.length > 1 ? <>[{'\n'}</> : ''}
              </>
            )}
            {manyOf.map((_, manyIndex) => {
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
                          {`    "${item.name}": ${
                            item.wrapType && item.valueType !== 'index'
                              ? `"`
                              : ``
                          }${disposeByType(
                            item.valueType,
                            item.valueType === 'index' ? manyIndex : item.custom
                          )}${
                            item.wrapType && item.valueType !== 'index'
                              ? `"`
                              : ``
                          },`}
                        </React.Fragment>
                      )
                    })}
                  {'\n'}
                  {'}'}
                  {manyOf.length > 1 && manyOf.length - 1 !== manyIndex ? (
                    <>,{'\n'}</>
                  ) : (
                    ''
                  )}
                </React.Fragment>
              )
            })}
            {manyOf.length > 1 ? <>]{'\n'}</> : ''}
          </code>
        </div>
      </div>
    </div>
  )
}
export default Wrap
