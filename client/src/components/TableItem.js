import React from "react";

function TableItem(props) {
  const {title, location, date, members, note} = props.events.datas;

  return (
    <tr>
      <th scope="row">{props.id}</th>
      <td>{title}</td>
      <td>{location}</td>
      <td>{date}</td>
      <td>{members.join(", ")}</td>
      <td>{note}</td>
    </tr>
  )
}

export default TableItem