import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';



import { Container, ToDoList, Input, Button, ListenItens, Trash, Check } from './styles';
import GlobalStyles  from './globalStyles';
import { FiFilter } from 'react-icons/fi';



//Criei um Objeto dentro da minha [] que no caso é o {}
function App() {

  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('')

  
  function inputChange(event) {
    setInputTask(event.target.value)

  }

  function endTask (id){

    const newList = list.map( item => (
      item.id === id ? {...item, finished: !item.finished} : item
    ))

    setList(newList)
  } 

  function deletTask (id){
    const deletList = list.filter(item => item.id !== id)
    
    setList(deletList)
  
    }

  function buttonCLick() {
    if(inputTask){
      setList([...list, { id: uuid(), task: inputTask, finished: false }])
    }
  }

  return (

    <Container>

        <ToDoList> 

          <Input onChange={inputChange} placeholder="O que tenho que fazer..."></Input>
          <Button onClick={buttonCLick}>Adicionar</Button>

          <ul>
            {
                list.length > 0 ? ( 

              list.map(item => ( // utilizando essas duas ( ( ) ) não preciso escrever return, caso usa-se ( { } ) precisaria
              
              <ListenItens $isFinished = {item.finished} key={item.id}> 
                
                <Check onClick={() => endTask (item.id)} />
                <li > {item.task}</li>
                <Trash onClick={ () => deletTask (item.id)}/>

              </ListenItens>

              ))
            ) : (
                <h3> Não há itens na lista </h3>
            )}
          </ul>

        </ToDoList>

    </Container>
  )

}
export default App

