import React, { useEffect, useState } from 'react';
import './TodoReact'


// get data from localStorage
const handleLocalStorage = () => {
    const dataList = localStorage.getItem('todoPractice')
    if (dataList) {
        return JSON.parse(dataList);
    } else {
        setAddItem([]);
    }
}

const TodoPractice = () => {
    // this state below for input field
    const [inputData, setInputData] = useState('');
    // this state below for add item on div section
    const [addItem, setAddItem] = useState(handleLocalStorage);
    // this state below for just get data from edit button clicking
    const [isEdit, setIsEdit] = useState('');
    // this state below for just toggle edit and plus button
    const [toggoleBtn, setToggoleBtn] = useState(false);


    //handle main todo item adding with input field
    const handleAddItem = () => {
        // if input field false then call
        if (!inputData) {
           alert('Please Write Something'); 
        }
        // if toogle button true and input field have content or after clicking edit button
        else if (inputData && toggoleBtn) {
            // setAddItem(addItem.map((item) => {
            //     if (item.id === isEdit) {
            //         return({...item, name:inputData})
            //     }
            //     else {
            //         return item;
            //     }
            // }))

            // Trying My Style
            const findItem = addItem.map((item) => {
                if (item.id === isEdit) {
                    return (
                        {...item, name: inputData}
                    )
                }
                else {
                    return item;
                }
            })
            setAddItem(findItem);
            setInputData('')
            setToggoleBtn(false);
        }
        // if input field true then call
        else{
            const updateItems = {
                id: new Date().getTime().toString(),
                name: inputData
            }
            setAddItem([...addItem, updateItems])
            setInputData('')
        }
    }

    // handle add todo with enter button clicking
    const handleEnterBtn = (e) => {
        if (e.key === 'Enter') {
            handleAddItem()
        }
    }

    // handle remove by clicking on the remove button
    const handleRemove = (id) => {
        const removeItem = addItem.filter(item => item.id !== id);
        setAddItem(removeItem);
    }

    // handle remove all items by clicking on the check list button
    const handleRemoveAll = () => {
        setAddItem([]);
    }

    // handle edit item by clicking on the edit button
    const handleEditBtn = (id) => {
        const edit = addItem.find((item) => item.id === id);
        setInputData(edit.name);
        setIsEdit(id);
        setToggoleBtn(true);
    }

    // handle Local Storage for Store data useing useEffect Hook
    useEffect(() => {
        localStorage.setItem('todoPractice', JSON.stringify(addItem))
    }, [addItem])



    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="../../../public/images/todo.svg" alt="" />
                        <figcaption>Add Your List Here</figcaption>
                        <div className="addItem">
                            <input type="text" className="form-control" placeholder='✍ Add Item' value={inputData} onChange={(e) => setInputData(e.target.value)} onKeyDown={handleEnterBtn}/>
                            {
                                toggoleBtn ? <i className="fa fa-edit add-btn" onClick={handleAddItem}></i>
                                : <i className="fa fa-plus add-btn" onClick={handleAddItem}></i>
                            }
                            
                        </div>
                    </figure>

                    <div className="showItems">
                        {
                            addItem.map((item) => {
                                return(
                                    <div className="eachItem" key={item.id}>
                                        <h3>{item.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => handleEditBtn(item.id)}></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => handleRemove(item.id)}></i>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text='Remove All' onClick={handleRemoveAll}>
                            <span>Check List</span></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoPractice;