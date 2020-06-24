import React from "react";
import Menu from "../../components/Menu";
import { loadData } from "../../actions";
import { connect } from "react-redux";
import TableItem from "../../components/TableItem";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      offset: 0,
      data: [],
      perPage: 5,
      currentPage: 0
    };
  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  componentDidMount() {
    this.props.loadData();
  }

  render() {
    let search = this.state.search.trim().toLowerCase();
    let filteredData = this.props.events;

    if (search !== "") {
      filteredData = filteredData.filter(
        (item) =>
          item.datas.title.toLowerCase().includes(search) ||
          item.datas.location.toLowerCase().includes(search) ||
          item.datas.date.toLowerCase().includes(search) ||
          item.datas.members.toString().toLowerCase().includes(search)
      );
    }

    const listItems = filteredData.map((item, index) => (
      <TableItem key={index} id={index + 1} events={{ ...item }} />
    ));

    return (
      <>
        <Menu />
        <div className="container">
          <div className="card shadow-sm">
            <div className="card-body">
              <form onSubmit={this.handleSubmit} className="row">
                <div className="col-lg-4">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search..."
                      onChange={this.handleSearchChange}
                      value={this.state.search}
                    />
                  </div>
                </div>
              </form>
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">No.</th>
                      <th scope="col">Title</th>
                      <th scope="col">Location</th>
                      <th scope="col">Date</th>
                      <th scope="col">Participant</th>
                      <th scope="col">Note</th>
                    </tr>
                  </thead>
                  <tbody>{listItems}</tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  events: state.events,
});

const mapDispatchToProps = (dispatch) => ({
  loadData: () => dispatch(loadData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
