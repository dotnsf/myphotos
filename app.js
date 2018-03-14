//.  app.js
var express = require( 'express' ),
    cfenv = require( 'cfenv' ),
    fs = require( 'fs' ),
    ejs = require( 'ejs' ),
    request = require( 'request' ),
    settings = require( './settings' ),
    app = express();
var appEnv = cfenv.getAppEnv();

app.use( express.static( __dirname + '/public' ) );

app.get( '/', function( req, res ){
  var template = fs.readFileSync( __dirname + '/public/index.ejs', 'utf-8' );
  res.write( ejs.render( template, {} ) );
  res.end();
});

app.get( '/myphotos', function( req, res ){
  var items = [];

  //. https://api.instagram.com/v1/users/self/media/recent?access_token=(access_token)
  var options0 = { url: 'https://api.instagram.com/v1/users/self/media/recent?access_token=' + settings.access_token, method: 'GET' };
  request( options0, ( err0, res0, body0 ) => {
    if( err0 ){
      //console.log( 'err0 = ' + JSON.stringify(err0) );
      res.write( JSON.stringify( { status: false, error: error }, 2, null ) );
      res.end();
    }else{
      //console.log( 'body0 = ' + JSON.stringify(body0) );
      body0 = JSON.parse( body0 );
      var data = body0.data;

      for( var i = 0; i < data.length; i ++ ){
        var id = data[i].id;
        var user_username = data[i].user.username;
        var user_full_name = data[i].user.full_name;
        var user_profile_picture = data[i].user.profile_picture;

        var image = data[i].images;
        var image_url = image.standard_resolution.url;

        var created_time = data[i].created_time;
        
        var caption = data[i].caption;
        var caption_text = ( caption && caption.text ? caption.text : '' );

        var tags = data[i].tags;
        var link = data[i].link;

        var item = {
          id: id,
          username: user_username,
          user_picture: user_profile_picture,
          image_url: image_url,
          created: new Date( created_time ),
          text: caption_text,
          link: link
        };
        items.push( item );
      }

      res.write( JSON.stringify( { status: true, items: items }, 2, null ) );
      res.end();
    }
  });
});


var port = /*appEnv.port ||*/ 3000;
app.listen( port );
console.log( "server starting on " + port + " ..." );



