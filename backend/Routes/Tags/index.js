var _ = require('lodash');
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var instagramFaker = require('./instagramFaker');
var twitterFaker = require('./twitterFaker');
var Post = require('./post');
var Tag = require('./tag');

router.use(bodyParser.json());

  var tags = [];
  var posts = [];

  var instagramPosts = instagramFaker.sampleData.data;

  for (var i = 0; i < 10; i++) {
    instagramPosts.push(instagramFaker.fake());
  }

  instagramPosts = instagramPosts.map( item => {

    tags.push(...item.tags);
    //nullable values
    var url = "";
    if (item.type == "video") {
      url = item.videos.standard_resolution.url;
    } else {
      url = item.images.standard_resolution.url;
    }
    var text = "";

    if (item.caption) {
      text = item.caption.text;
    }

    var location = "";
    if (item.location == undefined) {
      location = "Regensburg"
    } else {
      location = item.location.name;

    }
    console.log(location);


    return new Post(text, item.link, item.tags, item.created_time, location, {"name": item.user.username, "followers_count": 0}, "INSTAGRAM", {"type": item.type, "url": url}, item.likes.count, 0, false);
  });

  var twitterPosts = twitterFaker.sampleData.statuses.map( item => {
    var hashtags = item.entities.hashtags.map(hashtag =>  hashtag.text);
    tags.push(...hashtags);
    return new Post(item.text, item.entities.urls[0].expanded_url, hashtags, item.created_at, item.place.name, {"name": item.user.name, "followers_count": item.followers_count}, "TWITTER", null, item.favorite_count, item.retweet_count, false);
  });

  tags = _.uniq(tags);
  posts.push(...twitterPosts);
  posts.push(...instagramPosts);

router.get('/', function (req, res) {
  var location = req.query.location;
  if (location == undefined) {
    location = "Regensburg";
  }

  var fittingTags = tags.map(tag => {
    var score = 0;
    var fittingPosts = posts.filter(post => {
      return post.tags.includes(tag) && post.city == location
    });
    score += fittingPosts.length;
    fittingPosts.forEach(post => {
      score = score + post.like_count * 0.01;
      score = score + post.retweet_count * 0.5;
    });
    return new Tag(tag, false, fittingPosts, score);
  }).filter(tag => tag.posts.length > 0)
    .sort(function(lhs, rhs) {
      if (lhs.score > rhs.score) {
        return -1;
      }
      if (lhs.score < rhs.score) {
        return +1;
      }
      return 0;
  });

  res.status(200).send({tags: fittingTags});
});

module.exports = router;
