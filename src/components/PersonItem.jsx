import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRemovItem } from "../store/reducers/getUsers";
import './PersonItem.css'

function PersonItem() {
  const { persons } = useSelector((state) => state.person);
  const dispatch = useDispatch()

  const deleteHandler = (id) => {
    dispatch( getRemovItem(id));
  }
  return (
    <div>
      {persons.map((item) => (
        <ul key={item.id} className="ul">
          <li>
            {item.name} {item.username}
          </li>
          <li>{item.email}</li>
          <button onClick={() => deleteHandler(item.id)}>delete</button>
        </ul>
      ))}
    </div>
  );
}

export default PersonItem;
