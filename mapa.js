




//
//
let map = L.map('map').setView([3.58234, -76.49146],15)



L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


document.getElementById('select-location').addEventListener('change',function(e){
  let coords = e.target.value.split(",");
  map.flyTo(coords,18);
})
// Me debes algo novia, con cariño para la mejor geografa <3

// Agregar mapa base
var carto_light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '©OpenStreetMap, ©CartoDB',subdomains: 'abcd',maxZoom: 24});

// Agregar plugin MiniMap
var minimap = new L.Control.MiniMap(carto_light,
    {
        toggleDisplay: true,
        minimized: false,
        position: "bottomleft"
    }).addTo(map);


    var greenIcon = L.icon({
      iconUrl: ("tren.png") ,

         iconSize:     [50, 50], // size of the icon
      iconAnchor:   [85, 100], // point of the icon which will correspond to marker's location
      popupAnchor:  [85, 100] // point from which the popup should open relative to the iconAnchor
  });

 
 
  L.marker([3.59021000,-76.48606167], {icon: 'tren.png'}).addTo(map);

  L.marker([3.58250244,-76.49303176], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58432797,-76.48743156], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57905128, -76.49623506], {icon: greenIcon}).addTo(map);
  
  L.marker([3.59021000, -76.48606167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58255384, -76.48729603], {icon: greenIcon}).addTo(map);
  
  L.marker([3.56691333, -76.48423500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58271710, -76.48987482], {icon: greenIcon}).addTo(map);
  
  L.marker([3.63593766, -76.48443268], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57029667, -76.48336667], {icon: greenIcon}).addTo(map);
  
  L.marker([3.56345000, -76.48978833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.55085500, -76.50274833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.63545960, -76.48379605], {icon: greenIcon}).addTo(map);
  
  L.marker([3.63766655, -76.47763489], {icon: greenIcon}).addTo(map);
  
  L.marker([3.53962667, -76.49227667], {icon: greenIcon}).addTo(map);
  
  L.marker([3.55692500, -76.50044667], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57820833, -76.48632833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58226500, -76.49049500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58312500, -76.49670667], {icon: greenIcon}).addTo(map);
  
  L.marker([3.62955587, -76.47057605], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58527333, -76.48790167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57592500, -76.48006500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54269500, -76.49121000], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54903940, -76.49039843], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58513879, -76.49244487], {icon: greenIcon}).addTo(map);
  
  L.marker([3.56203534, -76.49550466], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57159000, -76.48039167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.63706919, -76.48472808], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58192000, -76.48835167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58369333, -76.49388500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.66269031, -76.52591703], {icon: greenIcon}).addTo(map);

  L.marker([3.59013500, -76.48706500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57526584, -76.48572113], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57515167, -76.47933333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58435059, -76.48759460], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57079500, -76.48017500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58337755, -76.48927730], {icon: greenIcon}).addTo(map);
  
  L.marker([3.53947094, -76.49453042], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58531578, -76.49541586], {icon: greenIcon}).addTo(map);
  
  L.marker([3.55331014, -76.49054167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57887111, -76.49193493], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58836667, -76.49980333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.57159000, -76.48039167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58367000, -76.48917833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.59269707, -76.48592943], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54588333, -76.49215167], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58468167, -76.48501833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.55830500, -76.49971333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58832551, -76.49980012], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54673428, -76.49302714], {icon: greenIcon}).addTo(map);
  
  L.marker([3.64856999, -76.49580740], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54031667, -76.49211000], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58601689, -76.48669204], {icon: greenIcon}).addTo(map);

  
  L.marker([3.57054333, -76.48121333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58722000, -76.50843333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.55222833, -76.49015500], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58303000, -76.49522833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.54584667, -76.49183333], {icon: greenIcon}).addTo(map);
  
  L.marker([3.58673167, -76.49686833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.56307667, -76.49239833], {icon: greenIcon}).addTo(map);
  
  L.marker([3.56880167, -76.48509333], {icon: greenIcon}).addTo(map);

  
// Mapa Ilustrado

 //add basemap layer
    




 var imageUrl = '',
    imageBounds = [[3.5975,-76.5037], [3.5725,-76.4872]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);


 
