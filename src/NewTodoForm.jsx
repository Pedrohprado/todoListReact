import { useState } from "react";

export function NewTodoForm({ onSubmit }) {

    const [newItem, setNewItem] = useState("")

    function handlerSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    };

    return (
        <form onSubmit={handlerSubmit} action="" className="new-item-form">
            <div className="form-row">
                <input
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                    type="text"
                    id="item"
                />
                <button className="btn-add">+</button>

            </div>

        </form>
    )
}