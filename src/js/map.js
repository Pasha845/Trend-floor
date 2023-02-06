ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    { 
      center: [53.19915531007761, 50.18990726455686], 
      zoom: 16, 
      controls: ['geolocationControl', 'zoomControl']
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "360px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "260px", right: "20px" }
    }
  );
  
  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [53.19915531007761, 50.18990726455686],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/point.svg",
      iconImageSize: [20, 20],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}