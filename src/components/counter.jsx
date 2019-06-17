import React, { Component } from "react";

class Counter extends Component {
  //   state = {
  //     value: this.props.counter.value,
  //     imageUrl: "https://picsum.photos/200",
  //     tags: []
  //   };

  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map(tag => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }

  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //     //console.log("Constructor", this);
  //   }

  //   handleIncrement = product => {
  //     //console.log("Increment Clicked", this);
  //     //console.log(product);
  //     this.setState({ value: this.state.value + 1 });
  //   };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    let classes = this.getBadgeClasses();
    console.log("props", this.props);
    return (
      // <React.Fragment></React.Fragment> if you dont want a div to show use
      <div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        {/* <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
          {this.formatCount()}
        </span> */}
        {/* {this.props.children} */}
        {/* <span className="badge badge-primary m-2">{this.formatCount()}</span> */}
        <span className={classes}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* {this.state.tags.length === 0 && "Please create a new tag"}
        {this.renderTags()} */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter; //object distructuring represent this.state with the count or value value
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
