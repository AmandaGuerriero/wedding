import axios from "axios";

export default {
  // Gets all rsvps
  getRsvp: function() {
    return axios.get("/api/rsvp");
  },

  // Gets the rsvp with the given id
  getRsvp: function(id) {
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

  // Gets all registered guests to send updates
  getUpdates: function() {
    return axios.get("/api/updates");
  },

  // Registers a Person for updates
  registerUpdates: function(updatesData) {
    return axios.post("/api/updates", updatesData);
  },
};
