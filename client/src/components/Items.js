import React from "react";
import Moment from "react-moment";

function Items(props) {
  const {location, date, members, note, title} = props.events.datas;

  return (
    <div className="col-md-4">
      <div className="card shadow-sm mb-4">
        <button type="button" onClick={props.delete} className="delete-btn">
          <i className="fa fa-trash"></i>
        </button>
        <img
          className="card-img-top"
          src={require("../assets/vkte.png")}
          alt="Card Header"
        />
        <div className="card-body py-2">
          <p className="card-text mb-1">
            <small>
              <i
                className="fa fa-map-marker text-danger mr-1"
                aria-hidden="true"
              ></i>
              {location}
            </small>
          </p>
          <h4 className="card-title mb-0">{title}</h4>
          <p className="card-text text-muted">
            <small>
              <Moment format="D MMMM YYYY" withTitle>
                {date}
              </Moment>
            </small>
          </p>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item">
            <div className="row">
              {members.map((item, index) => (
                <div key={index} className="col-auto mb-1">
                  <div className="media">
                    <img
                      src={require("../assets/user-picture.jpg")}
                      className="align-self-center profile-pict mr-1"
                      alt="..."
                    />
                    <div className="media-body">
                      <small>{item}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            <strong className="text-bold">Note :</strong>{" "}
            {note}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Items;
