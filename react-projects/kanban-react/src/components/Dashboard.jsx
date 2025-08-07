export function Dashboard({ close }) {
  return (
    <div className="child1">
      <h2 className="logo">Kanban</h2>
      <p className="first-paragraph">ALL BOARDS(8)</p>
      <ul className="list-items">
        <li className="dashboard1 selected-item">
          <svg
            className="gallery1"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15 5c0-.53-.47-1-1-1h-11c-.53 0-1 .47-1 1v14c0 .53.47 1 1 1h11c.53 0 1-.47 1-1zm7 11.6c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-18.5-11.1h10v13h-10zm14.4 11.6h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6z"
              fill-rule="nonzero"
            />
          </svg>
          PlatformLaunch
        </li>
        <li className="dashboard2">
          <svg
            className="gallery"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15 5c0-.53-.47-1-1-1h-11c-.53 0-1 .47-1 1v14c0 .53.47 1 1 1h11c.53 0 1-.47 1-1zm7 11.6c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-18.5-11.1h10v13h-10zm14.4 11.6h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6z"
              fill-rule="nonzero"
            />
          </svg>
          Marketing PLan
        </li>
        <li className="dashboard3">
          <svg
            className="gallery"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15 5c0-.53-.47-1-1-1h-11c-.53 0-1 .47-1 1v14c0 .53.47 1 1 1h11c.53 0 1-.47 1-1zm7 11.6c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-18.5-11.1h10v13h-10zm14.4 11.6h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6z"
              fill-rule="nonzero"
            />
          </svg>
          Roadmap
        </li>
        <li className="dashboard4">
          <svg
            className="gallery"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m15 5c0-.53-.47-1-1-1h-11c-.53 0-1 .47-1 1v14c0 .53.47 1 1 1h11c.53 0 1-.47 1-1zm7 11.6c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-18.5-11.1h10v13h-10zm14.4 11.6h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6zm4.1-6.3c0-.53-.47-1-1-1h-3.6c-.53 0-1 .47-1 1v2.4c0 .53.47 1 1 1h3.6c.53 0 1-.47 1-1zm-4.1.5h2.6v1.4h-2.6z"
              fill-rule="nonzero"
            />
          </svg>
          +createNewBoard
        </li>
      </ul>
      <div className="inside-of-child1">
        <div className="icon">
          <i className="fa-regular fa-sun"></i>
        </div>
        <div className="switch">
          <div className="switch-parent">
            <input type="checkbox" id="switch" />
            <label for="switch">
              <div className="circle"></div>
            </label>
          </div>
        </div>
        <div className="icon">
          <i className="fa-solid fa-moon"></i>
        </div>
      </div>
      <div className="first">
        <div className="eye">
          <i className="fa-solid fa-eye-slash"></i>
        </div>
        <button className="button" onClick={close}>
          Hide Sidebar
        </button>
      </div>
    </div>
  );
}
