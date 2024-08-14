const ToDo = ({ task }) => {
    return(
        <>
            <div>
                <p>{task.projectName}</p>
                <p>{task.taskDescription}</p>
            </div>
        </>
    )
}

export default ToDo;