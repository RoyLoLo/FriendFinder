const express = require(`express`);
const router = express.Router();
const path = require(`path`);
const friends = require(`../data/friends.js`)


router.get(`/friends/:friend`, (req, res) => {
  let choice = req.params.friend;
  for (i = 0; i < friends.length; i++) {
    if (choice === friends[i].rname) {
      return res.json(friends[i]);
    }
  }
  return res.json(false);
});

router.get(`/friends`, (req, res) => {

  return res.json(friends);
});

router.post(`/friends`, (req, res) => {
  var newfriend = req.body;
  newfriend.name = newfriend.name.replace(/\s+/g, ).toLowerCase();
  friends.push(newfriend);

  res.json(friends);
});


//console.log(friends.fArr);
 module.exports = router;