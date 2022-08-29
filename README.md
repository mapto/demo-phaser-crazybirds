Boykomet
====================================================

This is intended to be something like a reskinning of the game [Angry Birds](https://en.wikipedia.org/wiki/Angry_Birds_(video_game)) with Bulgarian politicians that need to be thrown away. To emphasise and explain this need, their quotes would be included from the [Bulgarian version of Wikiquote](https://bg.wikiquote.org/wiki/%D0%91%D0%BE%D0%B9%D0%BA%D0%BE_%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2).

The idea was inspired by the Bulgarian first lady at the time, that in October 2010 [tweeted](https://bivol.bg/firstlady.html) about prime minister Boyko Borissov:
"What we need is not a [Boykometer](https://www.novinite.com/articles/146138/Bulgarian+%27Boykometer%27+Creators+Genov+and+Pavlov%3A+We+Strive+to+Reduce+Political+Hypocrisy), we need a Boykomet [meaning Boyko-thrower]. To send him far far away, and let those poor people work out how to handle him". In 2021, more than a decade later, Borissov, a [communist protege](https://en.wikipedia.org/wiki/Boyko_Borisov#Early_life) and [alleged criminal](https://en.wikipedia.org/wiki/Boyko_Borisov#Allegations_of_corruption_and_connections_with_organized_crime) was still in power.

[![Направихме бойкомет](https://videoapi-muybridge.vimeocdn.com/animated-thumbnails/image/cbcb25f8-6ae1-4bb1-bf59-18959d63c14a.gif?ClientID=vimeo-core-prod&Date=1613128304&Signature=46da6d5090f0f6da751c4698f4f3727231cfc641)](https://vimeo.com/511527367)

More detailed documentation of this cocnept is available in Bulgarian in the [draft game design document](https://docs.google.com/document/d/1i27Hsxnfu54dyp9ykNLZqtWY4lRPJKb3CiyQVx2srpk/edit#).

The implementation is based on [Phaser Demo Game - Crazy Birds](https://github.com/nixsolutions/demo-phaser-crazybirds) by nixsolutions. This was motivated by the fact that in the [package.json](https://github.com/nixsolutions/demo-phaser-crazybirds/blob/master/package.json) file, the [Internet Software Consortium license](https://en.wikipedia.org/wiki/ISC_license) was indicated. Just later I noticed that the code is minifies/obfuscared into the `dist/` directory. I decided that this obfuscation is not a problem for a simple reskinning with some minor feature improvements.

Running
-------

The game is work in progress, but is already playable. [Try it out](https://mapto.itch.io/boykomet) on itch.io. You can also play it by following this sequence (git and npm are required to be installed):

    git clone https://github.com/mapto/boykomet  # download project
    cd boykomet                                  # enter source directory
    npm install                                  # install dependencies
    grunt                                        # start locally

This should start a new browser window with the game.

Implementation
--------------

Three parallel and long-living branches are planned:

* development - technological developments that could potentially be merged back into the original Crazy Birds project as a sign of gratitude.
* design - the specific changes, related to the reskinning of the game. This would most probably depend on tech changes.
* master - as usually, the stable and culuminative end result of the development.

Artwork and photography are taken exclusively from Wikipedia and other Wikimedia projects.

Technologies
------------

* [Phaser.io](https://phaser.io/)
* [Box2D](http://box2d.org/)
* [Texture packer](https://www.codeandweb.com/texturepacker)
* Web Audio
* Javascript
* Bitmap Font
* SpriteSheets


# Open Issues (Help needed)

1. Remove any use of copyrighted material

    1. Remove counter (to remove use of font face)
    2. Rework [sprite map](https://github.com/mapto/boykomet/blob/master/assets/BirdAngry.png) to remove original images
    3. Change (or temporarily remove) sound and music

2. Create a branch for Radevmet, reworking the [sprite map](https://github.com/mapto/boykomet/blob/master/assets/BirdAngry.png) where:

    1. Instead of Boyko Borissov, the birds are Rumen Radev
    2. Instead of Ursula von der Leyen, the pigs are Vladimir Putin
    3. Instead of the Bundestag, the bricks are from Kremlin

3. Create a branch for Shishimet, reworking the [sprite map](https://github.com/mapto/boykomet/blob/master/assets/BirdAngry.png) where:

    1. Instead of Boyko Borissov, the birds are Delyan Peevski
    2. Instead of Ursula von der Leyen, the pigs are Recep Erdogan
    3. Instead of the Bundestag, the bricks are from Ayasofya
