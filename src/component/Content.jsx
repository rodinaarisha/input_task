import React, { useState } from "react";

function Content() {
  const [newItem, setNewItem] = useState("")

  const [items, setItems] = useState([]); //состояние для добавленных элементов

  const changeText = () => {
    return newItem.toUpperCase();
  }


  const addItem = (e) => {
    e.preventDefault() // Предотвращаем перезагрузку страницы
    const upperCaseItem = changeText(); // Получаем измененный текст
    setItems([...items, upperCaseItem]); // Добавляем новый элемент в массив состояний
    setNewItem(""); // Очищаем поле ввода после добавления


  }
  return (
    <div>
      <form>
        <input type="text" required
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)} />
        <button type="submit" onClick={addItem}>Добавить</button>
      </form>
      <div style={{ color: 'pink' }}>
        {items.map((item, index) => (
          // Отображаем все добавленные элементы
          <p key={index}>{item}</p>
        ))}
      </div>

    </div>
  )
}

export default Content;