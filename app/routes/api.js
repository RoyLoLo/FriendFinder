const express = require(`express`);
const router = express.Router();
const path = require(`path`);
const friends = require(`../data/friends.js`)


router.get(`/friends/:friend`, (req, res) => {
  let choice = req.params.friend;
  for (i = 0; i < friends.fArr.length; i++) {
    if (choice === friends.fArr[i].rname) {
      return res.json(friends.fArr[i]);
    }
  }
  return res.json(false);
});

router.get(`/friends`, (req, res) => {

  return res.json(friends.fArr);
});

router.post(`/friends`, (req, res) => {
  var newfriend = req.body;
  newfriend.rname = newfriend.name.replace(/\s+/g, ).toLowerCase();
  friends.fArr.push(newfriend);
  res.json("");
  
});


//console.log(friends.fArr);
 module.exports = router;