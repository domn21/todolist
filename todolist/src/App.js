import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]); //빈 배열에 리스트 저장
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {  //데이터 가져오기
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => { //데이터 저장
    localStorage.setItem('todos', JSON.stringify(todos)); 
  }, [todos]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

const removeTodo = (index) => {
  const newTodos = todos.filter((_, i) => i !== index);
  setTodos(newTodos);
};
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <h1 >TO-DO List</h1>
            <div style={{
                width: "393px",
                height: "55px",
                borderRadius: "4px",
                padding: "5px",
                boxShadow: "0 2px 8px rgba(0,0,0,.16)",
                display: "flex", alignItems: "center"
            }}>
                <input
                    style={{
                        width: "345px",
                        height: "45px",
                        margin: "5px 10px",
                        border: "none",
                    }}
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange} />
                <button
                    style={{
                        height: "32px",
                        padding: "6px",
                        backgroundColor: "black",
                        border: "none",
                        borderRadius: "4px",
                        color: "white",
                        position: "relative",
                        right: "6px",
                    }}
                    onClick={addTodo}>Add</button>
            </div>
            <ol style={{ listStyleType: "none", padding: "0" }}>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            width: "386px",
                            height: "45px",
                            margin: "5px 10px",
                            padding: "10px",
                            marginBottom: "5px",
                            borderRadius: "4px",
                            boxShadow: "0 2px 8px rgba(0,0,0,.16)",
                            position: "relative",
                            left: "5px",
                            right: "5px"
                        }}
                        className="todolist"
                    >
                        <span style={{ flex: 1 }}>{todo}</span>
                        <button
                            style={{
                                height: "32px",
                                padding: "6px",
                                backgroundColor: "black",
                                border: "none",
                                borderRadius: "4px",
                                color: "white",
                                marginLeft: "5px"
                            }}
                            onClick={() => removeTodo(index)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default App;

