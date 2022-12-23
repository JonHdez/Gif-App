import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
  
  const [inputValue, setinputValue] = useState('')
  
  const onInputChange = (e) => {
    console.log(e.target.value)
    setinputValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length < 1) return
    onNewCategory(inputValue.trim())
    setinputValue('');
  }


  return (
    <form onSubmit={onSubmit}>
      <input 
        type="text"
        placeholder="Buscar Gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
