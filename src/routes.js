
module.exports = {
  '/': {
    get: function(req, res, cb) {
      res.json({});
      return cb();
    }
  },
  '/test': {
    get: function(req, res, cb) {
      setTimeout(function() {
        res.send('GO AWAY');
        res.end();
      }, 5000);
    }
  }
};
