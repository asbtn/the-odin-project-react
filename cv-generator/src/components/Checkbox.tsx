import { useState } from "react"

interface Props {
  name: string,
  label: string,
  isEditing: boolean
}

export default function Checkbox({ name, label, isEditing }: Props) {
  const [inputValue, setInputValue] = useState(false)

  function onChangeHandler(event: React.ChangeEvent<HTMLInputElement>): void {
    setInputValue(event.currentTarget.checked)
  }

  return (
    <div className="checkbox-block">
      <label htmlFor={name}>{label}</label>
      <input type="checkbox"
        name={name}
        id={name}
        checked={inputValue}
        disabled={isEditing}
        onChange={onChangeHandler}></input>
    </div >
  )
}