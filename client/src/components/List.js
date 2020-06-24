import React, { Component } from "react";
import Items from "./Event";
import { loadData } from "../actions";
import { connect } from "react-redux";

class List extends Component {
  componentDidMount() {
    this.props.loadData();
  }

  render() {
    const {events} = this.props;
    const listItems = events.map((item, idx) => (
      <Items key={idx} events={{ ...item }} />
    ));

    return <div className="row">{listItems}</div>;
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
