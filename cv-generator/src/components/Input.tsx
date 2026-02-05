import { useState } from "react"

interface Props {
  name: string,
  label: string,
  type: string,
  isEditing: boolean
}

export default function Input({ name, label, type, isEditing }: Props) {
  const [checkboxValue, setInputValue] = useState('')

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.currentTarget.value)
  }

  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      {isEditing ? (
        <input type={type}
          name={name}
          id={name}
          value={checkboxValue}
          onChange={onChangeHandler}></input>
      ) : (
        <p>{checkboxValue}</p>
      )}

    </div>
  )
}