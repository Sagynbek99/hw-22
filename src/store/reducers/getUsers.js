import axios from "axios";

export const getButtonHandler = () => {
  return (dispatch) => {
    axios("https://jsonplaceholder.typicode.com/users").then((res) => {
      const newRes = res.data.filter((item) => {
        if (item.id % 2 === 0) {
          return item;
        }
        return null;
      });
      dispatch({ type: "GET_USERS", payload: newRes });
      localStorage.setItem("persons", JSON.stringify(newRes));
    });
  };
};

export const getRemovItem = (id) => {
  console.log(id, "=>id");
  return async (dispatch) => {
    localStorage.setItem(
      "persons",
      JSON.stringify(
        JSON.parse(localStorage.getItem("persons") ?? "[]").filter(
          (item) => item.id !== id
        )
      )
    );
    dispatch({ type: "REMOVE", id: id });
  };
};
