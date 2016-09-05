function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

const fetch = require('isomorphic-fetch');
const micro = require('micro');

const srv = micro((() => {
  var _ref = _asyncToGenerator(function* (req, res) {
    const url = `http://ip-api.com/json/${ req.headers['x-real-ip'] }`;

    try {
      const response = yield fetch(url);
      const json = yield response.json();

      res.end(JSON.stringify(json));
    } catch (error) {
      res.end(error);
    }
  });

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
})());

srv.listen(4000);

setInterval(() => {
  fetch('https://geo-location.api.reimertz.co');
}, 60 * 1000 * 5);
