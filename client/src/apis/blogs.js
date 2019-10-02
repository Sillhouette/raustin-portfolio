//Start imports
import axios from "axios";

/**
 * Create an instance of axios to interact with our rails backend
 **/
export default axios.create({
  baseURL: "http://134.209.52.55/api/v1"
});
