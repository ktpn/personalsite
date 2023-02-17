

export const Task = (props) => {
    return (
        <div className="items">
              <div className="addedTask" style={{backgroundColor: props.done ? "lightgreen" : "rgb(210, 254, 255)"}}>
                <h1>{props.id}. {props.taskName}</h1>
              </div>
              <div>
                <button className="donebutton" onClick={() => props.doneTask(props.id)}>Done</button>
                <button className="graybutton" onClick={() => props.notDoneTask(props.id)}>Not Done</button>
                <button className="redbutton" onClick={() => props.deleteTask(props.id)}>X</button>
              </div>
            </div>
    )
}