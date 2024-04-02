let map;
let marker;
let imatge;
let estil;

function initMap() {
  //Coordenades inicials del mapa
  const myLatLng = { lat: 41.390205, lng: 2.154007 };

  //Configuració de la imatge del marcador
  imatge = {
    url: "flame.png",
    scaledSize: new google.maps.Size(50, 50),
  };

  //Carrega del fitxer d'estil del mapa
  fetch("style.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al carregar l'arxiu de configuració");
      }
      console.log(response);
      estil = response;
      return response.json();
    })
    .then((config) => {
      estil = config;
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  //Inicialització del mapa
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
    styles: estil,
  });

  //Creació del marcador inicial
  marker = new google.maps.Marker({
    position: myLatLng,
    map,
    title: "GeoFrank",
  });

  //Busca l'adreça especificada
  buscarDireccio();
}

function buscarDireccio() {
  //Geocodificació de l'adreça especificada
  let geocoder = new google.maps.Geocoder();
  let address = document.getElementById("adreca").value;
  geocoder.geocode({ address: address }, function (results, status) {
    if (status == google.maps.GeocoderStatus.OK) {
      //Obtenció de les coordenades de l'adreça
      latitude = results[0].geometry.location.lat();
      longitude = results[0].geometry.location.lng();
      let center = new google.maps.LatLng(latitude, longitude);
      //Mou el marcador a les noves coordenades
      marker.setPosition(center);
      //Canvia el zoom i centra el mapa en les noves coordenades
      map.setZoom(16);
      map.setCenter(center);
      console.log("Latitude:" + latitude + " Longitud:" + longitude);
    } else {
      //En cas de no trobar l'adreça, mostra un missatge d'error
      alert("No hem trobat la direcció :( " + status);
    }
  });
}

function laTevaUbi() {
  //Obtenir la ubicació actual de l'usuari
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      //Centra el mapa en la ubicació actual de l'usuari
      map.setCenter(pos);
      //Ajusta el zoom per mostrar amb detall la ubicació actual
      map.setZoom(20);
      //Afegeix un marcador a la ubicació actual de l'usuari
      let marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: imatge,
      });
    });
  }
}
