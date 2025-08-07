import { useState } from "react";
import { Data } from "./Data";
import { Dialog } from "./Dialog";
import { Dashboard } from "./dashboard";
export function Main() {
  const [showPopup, setShowPopup] = useState(false);
  function display() {
    setShowPopup(true);
  }
  function hide() {
    setShowPopup(false);
  }
  const [showSidebar, setShowSidebar] = useState(true);
  function close() {
    setShowSidebar(false);
  }
  function open() {
    setShowSidebar(true);
  }
  return (
    <>
      <div id="main-parent">
        {showSidebar == true ? <Dashboard close={close} /> : <></>}
        <div className="child2">
          <nav className="first-nav">
            <div className="burger-icon" onClick={open}>
              <svg
                
                className="menu-icon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
              >
                <path
                  d="M24 18v1h-24v-1h24zm0-6v1h-24v-1h24zm0-6v1h-24v-1h24z"
                  fill="#1040e2"
                />
                <path d="M24 19h-24v-1h24v1zm0-6h-24v-1h24v1zm0-6h-24v-1h24v1z" />
              </svg>
              <h4>Platform Launch</h4>
            </div>

            <div className="inside-of-first-nav">
              <div>
                <button className="second" onClick={display}>
                  +Add New Task
                </button>
              </div>
            </div>
          </nav>
          <main id="main">
            <Data />
          </main>
        </div>
      </div>
      {showPopup == true ? <Dialog hide={hide} /> : <></>}
    </>
  );
}
