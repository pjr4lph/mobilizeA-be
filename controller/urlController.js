const Url = require('./urlModel.js');

let lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let nums = ['0','2','3','4','5','6','7','8','9'];
let capLetters = ['Z','Y','X','W','V','U','T','S','R','Q','P','O','N','M','L','K','J','I','H','G','F','E','D','C','B','A'];
// randomly generated hash doesnt handle collisions
function changeHash() {
    const low = lowLetters[Math.floor(Math.random() * Math.floor(25))];
    const num = nums[Math.floor(Math.random() * Math.floor(9))];
    const cap = capLetters[Math.floor(Math.random() * Math.floor(25))];
    return `${low}${num}${cap}`;
}

const urlController = {};

urlController.addUrl = function(req, res, next) {
  const currentUrl = req.body.link;
  console.log(currentUrl);
  let currentHash = changeHash(currentUrl);
  Url.create({
    link: currentUrl,
    short: currentHash,
    visits: 0
  }, (err, result) => {
    if (err) console.log(err);
    else {
      console.log('in submit', result);
      let currentShort = `localhost:3000/${result.short}`;
      res.render('pages/index', {
        shortUrl: currentShort
      });
    }
  });
};

urlController.checkUrl = function(req, res, next) {
  Url.findOne({link: req.body.link}, (err, result) => {
    if (err) console.log(err);
    else if (result) {
      console.log('in check', result.short);
      let currentShort = result.short;
      res.render('pages/index', {
        shortUrl: `http://localhost:3000/${result.short}`
      })
      res.send();
    } else {
      next();
    }
  });
};

urlController.shortToLong = function(req, res) {
  let currentHash = req.params.hash;

  Url.findOne({short: currentHash}, function(err, result) {
    if (err) res.redirect('http://localhost:3000');
    else {
      console.log('in short2long', result);
      res.redirect(`http://${result.link}`);
    }
  });
}

module.exports = urlController;
