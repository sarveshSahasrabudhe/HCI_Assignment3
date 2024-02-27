import React, { useState } from 'react';
import styles from './ItemList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const addItem = (e) => {
    e.preventDefault();
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };

  const removeItem = (indexToRemove) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const clearItems = () => setItems([]);

  return (
    <div className={styles.container}>
      <header>
        <h1>Course List</h1>
      </header>
      <form onSubmit={addItem} className={styles.itemForm}>
        <div className={styles.formControl}>
          <input
            type="text"
            className={styles.formInput}
            placeholder="Enter Course"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          /> <hr/>
          <button type="submit" className={styles.btn}>
            <FontAwesomeIcon icon={faPlus} /> Add Course
          </button>
        </div>
      </form>
      <ul className={styles.items}>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button className={styles.btnLink} onClick={() => removeItem(index)}>
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </li>
        ))}
      </ul>
      <button className={styles.btnClear} onClick={clearItems}>Clear All</button>
    </div>
  );
}

export default ItemList;
