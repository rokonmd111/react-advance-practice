import React, { useEffect, useState } from 'react';
import './TodoReact.css'

const getLocalData = () => {
    const dataList = localStorage.getItem('mytodolist');
    if (dataList) {
        return JSON.parse(dataList)
    }
    else {
        setItems([]);
    }
}


const TodoReact = () => {
    const [inputData, setInputData] = useState('');
    const [items, setItems] = useState(getLocalData);
    const [isEdit, setIsEdit] = useState('');
    const [toggoleBtn, setToggoleBtn] = useState(false);
    

    const addItem = () => {
        if (!inputData) {
            alert('Please Write Something');
        }
        //for edit item in same list
        else if (inputData && toggoleBtn){
            setItems(items.map(item => {
                if (item.id === isEdit) {
                    return(
                        {...item, name:inputData}
                    )
                }
                else {
                    return item;
                }
            }
            ))
        }
        else {
            const newInputData = {
                id: new Date().getTime().toString(),
                name: inputData
            }

            setItems([...items, newInputData]);
            setInputData('');
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addItem()
        }
    }

    const handleEdit = (id) => {
        const todoEdit = items.find(item => item.id === id);
        setInputData(todoEdit.name)
        setIsEdit(id)
        setToggoleBtn(true);
    }

    const removeItem = (id) => {
        const updateItems = items.filter(item => item.id !== id)
        setItems(updateItems);
    }

    const removeAll = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem('mytodolist', JSON.stringify(items))
    }, [items])

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="../../../public/images/todo.svg" alt="" />
                        <figcaption>Add Your List Here</figcaption>
                        <div className="addItem">
                            <input type="text" className="form-control" placeholder='✍ Add Item'
                            value={inputData} onChange={(e) => setInputData(e.target.value)} onKeyDown={handleKeyDown}/>
                            {
                            toggoleBtn ? <i className="fa fa-edit add-btn" onClick={addItem}></i>
                            : <i className="fa fa-plus add-btn" onClick={addItem}></i>
                            }
                        </div>
                    </figure>

                    <div className="showItems">
                        {
                            items.map((item) => {
                                return (
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => handleEdit(item.id)}></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => removeItem(item.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>


                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={removeAll}>
                            <span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoReact;