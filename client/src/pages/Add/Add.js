import React from "react";
import Menu from "../../components/Menu";
import { postData } from "../../actions";
import { connect } from "react-redux";

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      location: "",
      date: "",
      memberInput: "",
      members: [],
      note: "",
      image: ""
    };
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleMemberChange = (event) => {
    this.setState({ memberInput: event.target.value })
  }

  addMember = () => {
    this.setState({
      members: [...this.state.members, this.state.memberInput],
    });
    this.setState({
      memberInput: ""
    });
  };

  deleteMembers = (event, id) => {
    event.preventDefault();
    this.setState((state) => ({
      members: state.members.filter((item) => item.id !== id),
    }));
  };

  handleSubmit = (event) => {
    const { title, location, date, members, note } = this.state;
    event.preventDefault();
    this.props.postData(
      title,
      location,
      date,
      members,
      note
    );
  };

  render() {
    const { title, location, date, members, note, memberInput } = this.state;

    return (
      <>
        <Menu />
        <div className="container">
          <div className="card shadow-sm mb-3">
            <div className="row no-gutters">
              <div className="col-md-6">
                <div className="card-body">
                  <h5 className="card-title mb-0">Add Event</h5>
                  <form className="mt-2" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={this.handleChange}
                            className="form-control"
                            id="title"
                            placeholder="Title"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            name="location"
                            value={location}
                            onChange={this.handleChange}
                            className="form-control"
                            id="location"
                            placeholder="Location"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <div className="input-group">
                            <input
                              type="text"
                              name="members"
                              value={memberInput}
                              onChange={this.handleMemberChange}
                              className="form-control"
                              id="participant"
                              placeholder="Participant name"
                            />
                            <div className="input-group-append">
                              <button
                                type="button"
                                className="btn btn-outline-dark"
                                onClick={this.addMember}
                              >
                                <i className="fa fa-plus"></i>
                              </button>
                            </div>
                          </div>
                          <div className="row">
                            {members.map((item, index) => (
                              <div key={index} className="col-md-auto">
                                <div className="card mt-2">
                                  <div className="card-body py-1 px-2">
                                    {item}
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="date"
                            name="date"
                            value={date}
                            onChange={this.handleChange}
                            className="form-control"
                            id="date"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        name="note"
                        value={note}
                        onChange={this.handleChange}
                        id="note"
                        rows="3"
                        placeholder="Note"
                        required
                      ></textarea>
                    </div>
                    {/* <div className="form-group">
                      <input
                        type="file"
                        name="image"
                        value={image}
                        onChange={this.handleChange}
                        className="form-control"
                        id="image"
                        placeholder="Add Image"
                        required
                      />
                    </div> */}
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
              <div className="col-md-6">
                <img
                  src={require("../../assets/vkte.png")}
                  className="card-img"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  postData: (title, location, date, members, note) =>
    dispatch(postData(title, location, date, members, note)),
});

export default connect(null, mapDispatchToProps)(Add);
