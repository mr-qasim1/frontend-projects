export function Task_input({ text }) {
    return (
      <div id="task-list-items">
        <div className="task-item">
          <div className="square">
            <i className="fa-regular fa-circle"></i>
          </div>
          <div className="task-tile">{text}</div>
          <div className="delete">
            <button className="delete-button">
              <i className="hgi hgi-stroke hgi-delete-02"></i>
            </button>
          </div>
        </div>
      </div>
    );
}