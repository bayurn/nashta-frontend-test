import { connect } from "react-redux";
import { deleteData } from "../actions";
import Items from "./Items";

const mapDispatchToProps = (dispatch, ownProps) => ({
  delete: () => dispatch(deleteData(ownProps.events.id)),
});

export default connect(null, mapDispatchToProps)(Items);
