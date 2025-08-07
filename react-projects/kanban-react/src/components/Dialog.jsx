export function Dialog({ hide }) {
  return (
    <div className="start-up">
      <div id="pop-up">
        <div className="heading">
          <h2>Add new task</h2>

          <svg
            onClick={hide}
            className="cross"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m12 10.93 5.719-5.72c.146-.146.339-.219.531-.219.404 0 .75.324.75.749 0 .193-.073.385-.219.532l-5.72 5.719 5.719 5.719c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-5.719-5.719-5.719 5.719c-.146.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l5.719-5.719-5.72-5.719c-.146-.147-.219-.339-.219-.532 0-.425.346-.749.75-.749.192 0 .385.073.531.219z" />
          </svg>
        </div>
        <p>title</p>
        <input
          type="text"
          placeholder="e.g Take coffee break"
          id="input-field1"
        />
        <p>Description</p>
        <input
          type="text"
          placeholder="e.g it's always good to take a break.This 15 minute break will recharge the batteries a little"
          id="input-field2"
        />
        <p>Subtasks</p>
        <div id="subtask">
          <input
            type="text"
            placeholder="e.g Take coffee break"
            id="input-field3"
          />
          <button className="for-cross">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <br />
          <input
            type="text"
            placeholder="e.g Drinkcoffee&smile"
            id="input-field3"
          />
          <button className="for-cross">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <button className="second-last-button">+Add New Subtask</button>
        <p>Status</p>
        <input
          type="text"
          placeholder="e.g Take coffee break"
          id="input-field4"
        />
        <button className="last-button">Create Task</button>
      </div>
    </div>
  );
}
