# HTTP Cats Offline
In preparation for [CoderCruise](https://www.codercruise.com/), I needed to ensure that my presentation demos would work offline.  When testing the demos, I realized that my *status cat* links would not work.  No way I can do a demo with the HTTP cats!  So I wrote my own little server so I could have them offline.

## Installation 
Clone the repo, run npm install and run the index.js file

    git clone https://github.com/joellord/httpcats-offline.git
    cd httpcats-offline
    npm install
    node .

## Usage
Point your browser to http://localhost:4444/<status_code>.  Just enter the status code, nothing else.  Any invalid code will return the 404 cat, the same as you would get for http://localhost:4444/404

### Examples:
To get the 200 OK cat, go to http://localhost:4444/200
For the 401 Unauthorized cat, go to http://localhost:4444/401

## Options
The default port is 4444 (4, in French is  "quatre" which most French-Canadians pronounce "cat").  If you want to use another port, use the -p or --port flag

    node . -p 8080
will serve httpcats on port 8080

## Credits
All the http cats images are part of this repo for offline serving.  Those were downloaded on [Flickr](https://www.flickr.com/photos/girliemac/sets/72157628409467125) and are property of [@girlie_mac](https://twitter.com/girlie_mac).
This project mimics the behaviour of the [https://http.cat/](http.cat) project by [@rogeriopvl](https://twitter.com/rogeriopvl)
