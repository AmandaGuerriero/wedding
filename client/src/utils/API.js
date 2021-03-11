import axios from "axios";

export default {
  // Gets all rsvps
  getBooks: function() {
    return axios.get("/api/rsvp");
  },
  // Gets the rsvp with the given id
  getBook: function(id) {
    return axios.get("/api/rsvp" + id);
  },
  // Updates an rsvp with the given id - Not sure if this will work
  // updateBook: function(rsvpData) {
  //   return axios.put("/api/rsvp" + rsvpData);
  // },
  // Saves an rsvp to the database
  saveBook: function(rsvpData) {
    return axios.post("/api/rsvp", rsvpData);
  }
};
