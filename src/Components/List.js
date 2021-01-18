import React from "react";
import "./List.css";
import Radio from "./Radio";
class List extends React.Component {
  handleDelete = (e) => {
    e.target.parentNode.remove();
  };

  render() {
    return this.props.list.map((list) => {
      return (
        <div className="list" key={list.id}>
          <button className="delete-btn" onClick={this.handleDelete}>Delete</button>
          <nav className="list-text">{list.text}</nav>
          <Radio list={list}/>
        </div>
      );
    });
  }
}

export default List;
