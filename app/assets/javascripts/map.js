function getPins (addPins, map) {
  $.get("/pins", function (pins) {
    addPins(map, pins);
  });
}
function addPin(map, pin) {
  var pos = new google.maps.LatLng(pin.lat, pin.lng);
  new google.maps.Marker({ position: pos, map: map });
}
function addPins (map, pins) {
  pins.forEach(function (pin) {
    addPin(map, pin);
  });
}
function createPin (map, lat, lng) {
  $.ajax({
    type: "post",
    url: "/pins",
    dataType: 'json',
    data: { lat: lat, lng: lng },
    success: function (pin) {
      addPin(map, pin)
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  var root = document.getElementById("map");
  var latlng = new google.maps.LatLng(40.71, -74);
  var map = new google.maps.Map(root, { zoom: 10, center: latlng });
  google.maps.event.addListener(map, 'click', function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    createPin(map, lat, lng);
  })
  getPins(addPins, map);

})
