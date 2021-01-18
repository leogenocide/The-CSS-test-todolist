import React from "react";
import "./Radio.css";

class radio extends React.Component {
  constructor(props) {
    super(props);
    this.state = { checked: false,
    };
    
  }

  handleChange = (e) => {
    this.setState({ checked: e.target.checked });
    console.log(e.target.parentNode.parentNode.children[1].classList.toggle("strike"));
  };

  render() {
    const listid=this.props.list.id;
    return (
     
      <label class="container">{listid+1}
    <input
         type="checkbox"
         checked={this.state.checked}
         onChange={this.handleChange}
     ></input>
       <span class="checkmark"></span>
      </label>
    );
  }
}

export default radio;