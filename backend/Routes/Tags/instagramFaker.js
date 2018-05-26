var moment = require("moment");
var faker = require("faker");
faker.locale = "de";

var fake = function() {
  return {
    "type": "image",
    "images": {
      "standard_resolution": {
        "url": faker.image.cats()+'/'+faker.lorem.word()+faker.random.number(10012039123)
      }
    },
    "user": {
      "username": faker.internet.userName()
    },
    "likes": {
      "count": faker.random.number(42)
    },
    "caption": {
      "text": faker.random.words(8)
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 60}), 'minutes').unix(),
    "tags": [faker.random.word(), faker.random.word()],
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
  };
};

var sampleData = {
    "data": [{
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
            "text": "#Hackaburg2018 ist echt ein riesen Spaß!",
            "from": {
                "username": "joshHacker123",
            },
            "id": "25663923"
        },
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "joshHacker123",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/Hackathon_TLV_2013_-_%2831%29.jpg",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ['Hackaburg2018'],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "kevin",
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/CH-NB-Swiss_Open_Cultural_Hackathon_2015-Picture-031.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
            "text": "Ich hab sooo hunger. Ich will mehr Pizza, aber mich nicht anstellen. #Hackaburg2018",
            "from": {
                "username": "SamyDecoder",
            },
            "id": "25663923"
        },
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "SamyDecoder",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/Wikimania_hackathon_2.JPG",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "kevin",
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://upload.wikimedia.org/wikipedia/commons/0/02/Hackathon_TLV_2013_-_%2848%29.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
            "text": "Well.. let's give it a try. You never know, what will happen..#Hackaburg2018",
            "from": {
                "username": "SusanBob",
            },
            "id": "25663923"
        },
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "SusanBob",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://c1.staticflickr.com/9/8390/8675018770_3cfba75977_b.jpg",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "kevin",
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "http://navylive.dodlive.mil/files/2016/07/160625-N-PM023-075.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
            "text": "I don't know any german word. Send help! #Hackaburg2018",
            "from": {
                "username": "KafkaLos",
            },
            "id": "25663923"
        },
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "KafkaLos",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://c1.staticflickr.com/6/5615/15801674875_2c17382541_b.jpg",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "video",
        "videos": {
            "low_resolution": {
                "url": "http://distilleryvesper9-13.ak.instagram.com/090d06dad9cd11e2aa0912313817975d_102.mp4",
                "width": 480,
                "height": 480
            },
            "standard_resolution": {
                "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
                "width": 640,
                "height": 640
            }
          },
        "users_in_photo": null,
        "filter": "Vesper",
        "tags": ["Hackaburg2018"],
        "comments": {
            "count": 2
        },
        "caption": null,
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "kevin",
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distilleryimage2.ak.instagram.com/11f75f1cd9cc11e2a0fd22000aa8039a_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://c1.staticflickr.com/6/5029/5684887983_6afdec16b3_b.jpg",
                "width": 612,
                "height": 612
            }
        },
        "id": "3",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
        "type": "image",
        "users_in_photo": [],
        "filter": "Earlybird",
        "tags": ["MZ"],
        "comments": {
            "count": 0
        },
        "caption": {
            "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
            "text": "Schön gemütlich Zeitung lesen. #MZ",
            "from": {
                "username": "MartinaMeyer98",
            },
            "id": "25663923"
        },
        "likes": {
            "count": faker.random.number({min: 0, max: 100})
        },
        "link": faker.internet.url()+'/'+faker.random.number(1000000),
        "user": {
            "username": "MartinaMeyer98",
            "profile_picture": "...",
            "id": "33"
        },
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "images": {
            "low_resolution": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
                "width": 306,
                "height": 306
            },
            "thumbnail": {
                "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
                "width": 150,
                "height": 150
            },
            "standard_resolution": {
                "url": "https://c1.staticflickr.com/6/5663/30551885913_41d55a6f75_b.jpg",
                "width": 612,
                "height": 612
            }
        },
        "user_has_liked": false,
        "id": "22097367",
        "location": {
            "latitude": 37.780885099999999,
            "id": "222175378",
            "longitude": -122.3948632,
            "name": "Regensburg"
        }
    },
    {
      "type": "image",
      "users_in_photo": [],
      "filter": "Earlybird",
      "tags": ["MZ"],
      "comments": {
          "count": 0
      },
      "caption": {
          "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
          "text": "Lest alle den interessanten Artikel auf Seite 3. Ich hab nur what the hack?! #MZ",
          "from": {
              "username": "LuluStitch",
          },
          "id": "25663923"
      },
      "likes": {
          "count": faker.random.number({min: 0, max: 100})
      },
      "link": faker.internet.url()+'/'+faker.random.number(1000000),
      "user": {
          "username": "LuluStitch",
          "profile_picture": "...",
          "id": "33"
      },
      "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
      "images": {
          "low_resolution": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
              "width": 306,
              "height": 306
          },
          "thumbnail": {
              "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
              "width": 150,
              "height": 150
          },
          "standard_resolution": {
              "url": "https://upload.wikimedia.org/wikipedia/commons/5/5d/Duke_Kahanamoku_Newspaper_Page.jpg",
              "width": 612,
              "height": 612
          }
      },
      "user_has_liked": false,
      "id": "22097367",
      "location": {
          "latitude": 37.780885099999999,
          "id": "222175378",
          "longitude": -122.3948632,
          "name": "Regensburg"
      }
  },
  {
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["MZ"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Hat jemand Erfahrung mit dem digitalen Abo der #MZ?",
        "from": {
            "username": "SandroSwinger012",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "SandroSwinger012",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/d/d6/Bouquin_%C3%A9lectronique_iLiad_en_plein_soleil.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["MZ"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Ich hab den besten Arbeitsplatz der Welt! Liebe meinen Job bei der #MZ",
        "from": {
            "username": "Loeschzwerg",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "Loeschzwerg",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://c1.staticflickr.com/7/6054/6277208708_7e6607d601_b.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["WM2018"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Nur noch 5 Wochen! Ich bin so aufgeregt #WM2018",
        "from": {
            "username": "FootballHead",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "FootballHead",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Football_iu_1996.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["WM2018"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Fußball is my life! #WM2018",
        "from": {
            "username": "SoccerFan99",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "SoccerFan99",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://images.pexels.com/photos/47730/the-ball-stadion-football-the-pitch-47730.jpeg?cs=srgb&dl=ball-feld-football-47730.jpg&fm=jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["WM2018"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Wenn dein Herz wie ein Fußball schlägt .. #WM2018",
        "from": {
            "username": "HansMartinTest",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "HansMartinTest",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/Mia1997.JPG",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Das Feuerwerk war so beeindruckend! #Maidult",
        "from": {
            "username": "DultLover",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "DultLover",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://fthmb.tqn.com/X76cp2KLew1NOPV9uQFddvWL90Q=/768x0/filters:no_upscale():max_bytes(150000):strip_icc()/low-angle-view-of-firework-display-over-river-during-sunset-604213021-57752e7b3df78cb62c11aba4.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Feuerwerk und Dult. Die beste Zeit #Maidult.",
        "from": {
            "username": "MarieGeier",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "MarieGeier",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://www.publicdomainpictures.net/pictures/10000/velka/33-1196545384.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Maidult. Einfach die 5. Jahreszeit! #Maidult",
        "from": {
            "username": "LexiPrexi",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "LexiPrexi",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "http://www.tampabay.com/storyimage/HI/20170207/ARTICLE/302079454/AR/0/AR-302079454.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult", "Dultlover"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "#Maidult. I love it so much! #Dultlover",
        "from": {
            "username": "MaxLoppinger76",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "MaxLoppinger76",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://ais.badische-zeitung.de/piece/03/25/70/57/52785239-h-720.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult", "Fisch"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Die #Maidult ist auch nicht mehr das, was sie mal war. So teuer der #Fisch.",
        "from": {
            "username": "Franziskaner24",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "Franziskaner24",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://static1.squarespace.com/static/555a4661e4b04d1c6549a89c/t/555a6910e4b09f906401840d/1431988496457/fair+background.jpg?format=1500w",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["Maidult", "Fisch"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Wenn du #Fisch essen willst, geh nicht auf die #Maidult. Teuer aber geil.",
        "from": {
            "username": "SebastianCatLover",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "SebastianCatLover",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/Cannstatter-volksfest-festzeltarcadia-innen_EYB.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "Regensburg"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["LamasInPyjamas"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Es gibt nichts schöneres als weiße Lamas. Obwohl.. es wäre toll, wenn sie Pyjamas anhaben würden.. #LamasInPyjamas",
        "from": {
            "username": "MaikeSchmargendor",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "MaikeSchmargendorf",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://scontent-frx5-1.xx.fbcdn.net/v/t31.0-8/11080582_811989972172224_2808133893141369046_o.jpg?_nc_cat=0&oh=fe61da3a220611603325df4fa074ad92&oe=5B84B426",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["LamasInPyjamas"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "#LamasInPyjamas sind das schönste und süßeste auf der Welt.",
        "from": {
            "username": "KathrinFischer",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "KathrinFischer",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpk6-OefJiZXxUArUqZ6JhB8OzzhPh76T0QL0gRW4C3ZoN7zn4Iw",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["LamasInPyjamas", "SoSüß"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "#LamasInPyjamas oh Gott #SoSüß. I love lamas!",
        "from": {
            "username": "LuluBecker",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "LuluBecker",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3m_svUwmUTauWD7LOiRsQHQQbNrrDzPS-LEeVlhA9hBkSo0hL0g",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
},
{
    "type": "image",
    "users_in_photo": [],
    "filter": "Earlybird",
    "tags": ["LamasInPyjamas", "Fisch"],
    "comments": {
        "count": 0
    },
    "caption": {
        "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
        "text": "Stell dir mal vor ein Lama würde einen #Fisch essen. Oder einen Lollipop. Das wäre echt strange. Aber nicht so strange wie #LamasInPyjamas",
        "from": {
            "username": "MareikeLovesFish",
        },
        "id": "25663923"
    },
    "likes": {
        "count": faker.random.number({min: 0, max: 100})
    },
    "link": faker.internet.url()+'/'+faker.random.number(1000000),
    "user": {
        "username": "MareikeLovesFish",
        "profile_picture": "...",
        "id": "33"
    },
    "created_time": moment().subtract(faker.random.number({min: 0, max: 4320}), 'minutes').unix(),
    "images": {
        "low_resolution": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_6.jpg",
            "width": 306,
            "height": 306
        },
        "thumbnail": {
            "url": "http://distillery.s3.amazonaws.com/media/2011/01/31/32d364527512437a8a17ba308a7c83bb_5.jpg",
            "width": 150,
            "height": 150
        },
        "standard_resolution": {
            "url": "https://c1.staticflickr.com/8/7448/10826723054_0235f71f5d_b.jpg",
            "width": 612,
            "height": 612
        }
    },
    "user_has_liked": false,
    "id": "22097367",
    "location": {
        "latitude": 37.780885099999999,
        "id": "222175378",
        "longitude": -122.3948632,
        "name": "München"
    }
}

  ]
}

module.exports = {
  sampleData: sampleData,
  fake: fake
}
