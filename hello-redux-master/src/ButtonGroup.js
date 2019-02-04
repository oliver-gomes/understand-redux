import React from "react";
import { store } from "./store";
import { setTechnology } from "./actions";
import { connect } from "react-redux";

function dispatchBtnAction(e) {
  const tech = e.target.dataset.tech;
  store.dispatch(setTechnology(tech));
}

const ButtonGroup = ({ technologies }) => {
  return (
    <div>
      {technologies.map((tech, i) => (
        <button
          data-tech={tech}
          key={`btn-${i}`}
          className="hello-btn"
          onClick={dispatchBtnAction}
        >
          {tech}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;
