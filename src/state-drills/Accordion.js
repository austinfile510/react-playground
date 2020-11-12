import React from "react";

class Accordion extends React.Component {
    static defaultProps = { sections: [] };
    state = {
        tab: null
    }
    handleButtonClick(index) {
        this.setState({ tab: index })
    }
  render() {
    return (
      <div>
        <ul>
          {this.props.sections.map((section, index) => (
            <li key= {index}>
              <button onClick={() => this.handleButtonClick(index)}>{section.title}</button>
              {this.state.tab == index?<p>{section.content}</p>: null}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Accordion;