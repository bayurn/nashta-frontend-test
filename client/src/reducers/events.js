const events = (state = [], action) => {
  switch (action.type) {
    case "LOAD_DATA_SUCCESS":
      return action.params.data.map((item) => {
        item.sent = true;
        return item;
      });

    case "POST_DATA":
      const {id, title, location, date, members, note} = action;
      return [
        ...state,
        {
          id: id,
          title: title,
          location: location,
          date: date,
          members: members,
          note: note,
          sent: true,
        },
      ];

    case "POST_DATA_SUCCESS":
      return state.map((item) => {
        if (item.id === action.param.id) {
          item.sent = true;
        }
        return item;
      });

    case "POST_DATA_FAILURE":
      return state.map((item) => {
        if (item.id === action.id) {
          item.sent = false;
        }
        return item;
      });

    case "DELETE_DATA":
      return state.filter((item) => item.id !== action.id);

    case "DELETE_DATA_SUCCESS":
    case "LOAD_DATA_FAILURE":
    default:
      return state;
  }
};

export default events;
