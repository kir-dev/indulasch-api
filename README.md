#InduláSch API
Departures and alerts querying backend for applications of the project induláSch. Uses the official BKK Futár API to get the most accurate departure times and information.

##Endpoints
Every endpoint is location and radius based (lat, lon, radius). The requests have to be POST requests, the request body has to be an object: `{lat: number, lon: number, radius: number}`, i.e.: `{"lat": 47.51045, "lon": 19.05597, "radius": 300}`
- `/api` - Gets departures and alert headers for every record.
- `/api/alerts` - Gets alerts for the given location.
##Configuration
A `.env` file can be used to set the following things (as seen in `.env.example`):
- `PORT`: The port to be used by the server.
- `DEBUG`: Set to true if you want to see the data the apiMW sends back to the user.