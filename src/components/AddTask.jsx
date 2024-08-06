import { useState } from "react"


const AddTask = () => {
    const [addModal, setAddModal] = useState(false);

    return (
        <>
        <button className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
            type="button"
            onClick={() => setAddModal(true)}
            >
            + New Task</button>
            {addModal ? (
                <>
                <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
                    <h3 className="bg-white">Add New Task</h3>
                </div>
                 
                </>
            ) : null}
        </>
    )
}

export default AddTask;