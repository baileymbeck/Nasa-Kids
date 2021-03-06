import axios from "axios";
import User from './user';

export default {
  // Gets all saved users
  getSavedUsers: function() {
    return axios.get("/api/users");
  },
  // Deletes the saved user with the given id
  deleteUser: function(id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves an user to the database
  saveUser: function(req, res) {
    if (req.body.email &&
        req.body.username &&
        req.body.password) {
      
        var userData = {
          email: req.body.email,
          username: req.body.username,
          password: req.body.password,
        }
      
        //use schema.create to insert data into the db
        User.create(userData, function (err) {
          if (err) {
            return (err)
          } else {
            return res.redirect('/profile');
          }
        });
      }
    return axios.post("/api/users", userData);
  }
};
