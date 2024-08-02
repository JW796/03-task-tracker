import { useState } from "react"


const AddTask = () => {
    const (addModal, setModal) = useState(false);

    return (
        <>
        <button className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
            type="button"
            onClick={() => setModal(true)}
            >
            + New Task</button>
            {addModal ? (
                <>
                <div>
                    <h3>Add New Task</h3>
                </div>
                
                </>
            ) : null}
        </>
    )
}