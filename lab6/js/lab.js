/**
 * Author:    Nikas Mermer
 * Created:   10.20.2021
 *
 * No Copyright
 **/


var myTransport = ["walk", "run", "BART", "drive", "bus", "motorcycle"];

var myMainRide = {
    make: "Honda",
    model: "Element",
    color: "Orange",
    name: "Oscar",
}

document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
