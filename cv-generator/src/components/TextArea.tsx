import { useState } from "react"

interface Props {
  name: string,
  label: string,
  isEditing: boolean
}

export default function TextArea({ name, label, isEditing }: Props) {
  const [textareaValue, setTextAreaValue] = useState('');

  function onChangeHandler(event: React.ChangeEvent<HTMLTextAreaElement>): void {
    setTextAreaValue(event.currentTarget.value)
  }
  return (
    <div className="textarea-block">
      <label htmlFor={name}>{label}</label>

      {isEditing ? (
        <textarea rows={5}
          name={name}
          id={name}
          onChange={onChangeHandler}>{textareaValue}</textarea>
      ) : (
        <div>{textareaValue}</div>
      )}

    </div >
  )
}