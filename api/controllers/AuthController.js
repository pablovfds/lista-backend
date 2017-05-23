/**
 * AuthController
 *
 * @description :: Server-side logic for managing Auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');

module.exports = {

  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },


  /**
   * `AuthController.login()`
   */
  login: function (req, res) {
    passport.authenticate('local', function (err, user, info) {
      if ((err) || (!user)) {
        return res.send({
          message: info.message,
          user: user
        });
      }
      req.logIn(user, function (err) {
        if (err) res.send(err);
        return res.send({
          message: info.message,
          user: user
        });
      });

    })(req, res);
  },


  /**
   * `AuthController.logout()`
   */
  logout: function (req, res) {
    req.logout();
    res.redirect('/');
  }
};

