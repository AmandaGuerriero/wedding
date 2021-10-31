import axios from "axios";

export default {
  // Gets all rsvps
  getRsvp: function() {
    return axios.get("/api/rsvp");
  },

  // Gets the rsvp with the given id
  getRsvpById: function(id) {
    return axios.get("/api/rsvp" + id);
  },
  // Updates an rsvp with the given id - Not sure if this will work
  // updateRsvp: function(rsvpData) {
  //   return axios.put("/api/rsvp" + rsvpData);
  // },

  // Saves an rsvp to the database
  saveRsvp: function(rsvpData) {
    return axios.post("/api/rsvp", rsvpData);
  },

  // Gets all Bear Contributions
  getBears: function() {
    return axios.get("/api/gifts/bears");
  },

  // Saves an rsvp to the database
  saveBears: function(bearsData) {
    return axios.post("/api/gifts/bears", bearsData);
  },

  // Gets all Total Contributions
  getTotals: function() {
    return axios.get("/api/amounts");
  },

  // Gets all registered guests to send updates
  getUpdates: function() {
    return axios.get("/api/updatesAmandaEric05300716");
  },

  // Registers a Person for updates
  registerUpdates: function(updatesData) {
    return axios.post("/api/updatesAmandaEric05300716", updatesData);
  },

  // Deletes a user from the database
  deleteUpdates: function(updatesData) {
    return axios.delete("/api/updatesAmandaEric05300716/:id", updatesData);
  },

  getUser: function() {
    return axios.get("/api/users/:email");
  },
};
