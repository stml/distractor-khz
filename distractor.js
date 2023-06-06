var collection;
// var collectionsize = 3146;
var collectionsize = 2377; /* sans prolitteris */

$( document ).ready(function() {
  // $('body').css('background-color',getDarkColor());
  $.ajax({
    type: "GET",
    url: "KHZ_online_collection_sans_prolitteris.csv",
    dataType: "text",
    success: function(data) {
      collection = $.csv.toObjects(data);
      // console.log(collection);
      getRandom();
      }
    });
    $(".refresh").click(function(){
      $('body').css('background-color',getDarkColor());
      $( '#image' ).css( 'background-image', '' );
      $('#words').hide();
      getRandom();
    });
 });

function getRandom() {
  var item = collection[getRandomInt(collectionsize)];

  // console.log(item);

  $('.more').unbind( "click" );
  $('.more').bind( "click", function() {
    window.open(item.permalink, "_blank");
  });
  $('.title').html('<a href="'+item.permalink+'">'+item.originaltitle+'</a>');
  $('.artist').text(item.artist.replace(/ *\([^)]*\) */g, ""));
  $('.date').text(item.date);

  var provenance = item.provenance.split('///');
  provenance = provenance.reverse();
  provenance_str = '';
  for (let i = 0; i < provenance.length; i++) {
    provenance_str = provenance_str+provenance[i].trim()+'<br/>';
    }
  if (provenance_str.includes("https://www.buehrle.ch/sammlung")) {
    provenance_str = 'Für Provenienz siehe / For provenance see <a href="https://www.buehrle.ch/sammlung">https://www.buehrle.ch/sammlung</a>';
    }
  if (provenance_str.includes("NO PUBLIC PROVENANCE")) {
    provenance_str = 'No Public Provenance';
    }
  $('.provenance').html(provenance_str);

  $('#words').show();


    var imagelink = item.permalinkimage
                  .replace('multimedia//', 'multimedia/0/');

  var $img = $( '<img src="' + imagelink + '">' );
  $img.bind( 'load', function(){
      $( '#image' ).css( 'background-image', 'url(' + imagelink + ')' );
  } );
  if( $img[0].width ){ $img.trigger( 'load' ); }

}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getDarkColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 10);
    }
    return color;
}
