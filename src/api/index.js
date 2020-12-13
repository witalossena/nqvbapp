/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  getData: () =>
    axios({
      method: "GET",
      url: "https://nqvb-api.herokuapp.com/",
      headers: {
        "content-type": "application/json",
      },
    }),
};
