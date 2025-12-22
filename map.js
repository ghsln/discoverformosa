let root = am5.Root.new("chartdiv");  
    root.setThemes([  
    am5themes_Animated.new(root)  
    ]);  
    let chart = root.container.children.push(am5map.MapChart.new(root, {  
    projection: am5map.geoMercator(),  
    panX: "none",  
    panY: "none",  
    wheelY: "zoom",  
    }));  let polygonSeries = chart.series.push(  
am5map.MapPolygonSeries.new(root, {  
    geoJSON: am5geodata_taiwanHigh  
})  
);  
polygonSeries.mapPolygons.template.setAll({  
fill: am5.color("#8B1E1E"),  
stroke: am5.color("#b1ddc8"),  
strokeWidth: 0.5,  
tooltipText: "",  
interactive: true  
});  

polygonSeries.mapPolygons.template.states.create("hover", {  
fill: am5.color("#005A2D"),  
transitionDuration: 400  
});  

polygonSeries.mapPolygons.template.events.on("click", ev => {  
chart.zoomToMapPolygon(ev.target);  
alert("You clicked: " + ev.target.dataItem.dataContext.name);  
});  

let pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));  
let cities = [  
{title: "Taipei", lat: 25.0330, lon: 121.5654, url: "taipei.html"},  
{title: "New Taipei", lat: 25.06199, lon: 121.45703, url: "new-taipei.html"},  
{title: "Keelung", lat: 25.1283, lon: 121.7419, url: "Keelung.html"},  
{title: "Yilan", lat: 24.757, lon: 121.753, url: "Yilan.html"},  
{title: "Taoyuan", lat: 24.99368, lon: 121.29696, url: "taoyuan-city.html"},  
{title: "Hsinchu", lat: 24.80361, lon: 120.96862, url: "hsinchu-county.html"},  
{title: "Miaoli", lat: 24.573389, lon: 120.815247, url: "miaoli-county.html"},  
{title: "Taichung", lat: 24.147736, lon: 120.673645, url: "taichung-county.html"},  
{title: "Changhua", lat: 24.0667, lon: 120.5333, url: "changhua-county.html"},  
{title: "Nantou", lat: 23.9157, lon: 120.6639, url: "nantou-county.html"},  
{title: "Yunlin", lat: 23.70489, lon: 120.47607, url: "yunlin-county.html"},  
{title: "Chiayi", lat: 23.46333, lon: 120.58166, url: "chiayi-county.html"},  
{title: "Tainan", lat: 22.99083, lon: 120.21333, url: "tainan.html"},  
{title: "Kaohsiung", lat: 22.633333, lon: 120.266670, url: "kaohsiung.html"},  
{title: "Hualien", lat: 23.991074, lon: 121.611198, url: "hualien-county.html"},  
{title: "Taitung", lat: 22.75991, lon: 121.14457, url: "taitung-county.html"},  
{title: "Penghu", lat: 23.571190, lon: 119.579316, url: "penghu-county.html"},  
{title: "Kinmen", lat: 24.44, lon: 118.33, url: "kinmen-county.html"},  
{title: "Orchid Island", lat: 22.05, lon: 121.533, url: "orchid-island.html"},  
{title: "Green Island", lat: 22.6667, lon: 121.483, url: "green-island.html"},  
{title: "Little Ryukyu", lat: 22.35, lon: 120.38, url: "little-ryukyu.html"},
{title: "Lienchiang County", lat: 26.2, lon: 119.976, url: "lieinchiang-county.html"}    
];  

cities.forEach(c => {  
pointSeries.pushDataItem({  
    latitude: c.lat,  
    longitude: c.lon,  
    title: c.title,
    url: c.url 
});  
});  

var bulletTemplate = am5.Template.new({  
fill: am5.color(0xe6e6e6)  
});  

pointSeries.bullets.push(function(root, dataItem) {  
let cityData = dataItem.dataContext;
let container = am5.Container.new(root, {interactive: true});  
let pin = am5.Graphics.new(root, {  
    width: 28,  
    height: 28,  
    centerX: am5.p50,  
    centerY: am5.p50,  
    svgPath: "M12,1a9,9,0,0,0-9,9c0,8,9,13,9,13s9-5,9-13A9,9,0,0,0,12,1Zm0,13a4,4,0,1,1,4-4A4,4,0,0,1,12,14Z",  
    fill: am5.color("#feb54f"),  
    stroke: am5.color("#feb54f"),  
    strokeOpacity: 0.5,  
    tooltipText: "{title}",  
    cursorOverStyle: "pointer"  
});  
    
container.children.push(pin);  

pin.events.on("pointerover", () => {  
    pin.animate({  
    key: "scale",  
    to: 1.4,  
    duration:120,  
    easing:  
    am5.ease.out(am5.ease.cubic)  
    });  
});  
    pin.events.on("pointerout", () => {  
    pin.animate({  
    key: "scale",  
    to: 1,  
    duration:120,  
    easing:  
    am5.ease.out(am5.ease.cubic)  
    });  
});  
pin.events.on("click", () => {
    if(cityData.url) {
    window.location.href = cityData.url;
    }
});
return am5.Bullet.new(root, {  
    sprite: pin  
});  
});  