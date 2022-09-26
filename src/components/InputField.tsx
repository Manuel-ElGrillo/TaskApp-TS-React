import React, {useRef} from 'react'
import "./InputField.css";

interface TaskProps {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>> //Este type se puede obtener haciendo hover en la función setTask del componente App.tsx... Cosa pa' rara xD
  addTask: (event: React.FormEvent) => void;
}

const InputField = ({task, setTask, addTask}: TaskProps) => {

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form action=""
          className='input'
          onSubmit={(event) => {
            addTask(event);
            inputRef.current?.blur();
          }}>

      <input type="text" 
             placeholder='Escribe tu próxima tarea 😁' 
             className='input__field'
             value={task}
             onChange={(event) => { setTask(event.target.value) }}
             ref={inputRef}/>

      <button className='input__submit' 
              type='submit'>
        Añadir
      </button>

    </form>
  )
}

export default InputField