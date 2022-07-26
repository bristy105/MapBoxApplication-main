
![MapBox](https://user-images.githubusercontent.com/8566850/132137911-dbe52fe1-8c39-4049-9a35-63c877530fb0.png)


# MapBoxApplication
* using mapbox-gl with react(https://visgl.github.io/react-map-gl/)
* application can upload json data and convert C to F
![NewMapBox](https://user-images.githubusercontent.com/8566850/132141300-bbca8bb1-f6b2-47c5-b79d-d7890cd76fc6.gif)


## Running the application
### setup
* prerequisite: node and npm (https://nodejs.org/en/, https://www.npmjs.com/)
* Clone the repo (git clone git@github.com:tanmoyb/MapBoxApplication.git)
* Add mapbox access token to .env file
* run "npm install" or "npm ci"
* run "npm run server" or "node server.js"(in one terminal)
* run "npm run start"(in another terminal)
* application can be acessed from localhost:3000

### Json data 
* supports .json file
* Json format example:
[
  {
    "city": "Helsinki",
    "lat": "60.1676",
    "lon": "24.9421",
    "temp": "7.0"
  },
]
* data.json file in root can be used for the demostration purpose

## Development guidelines

### Code
* Writing a placeholder function is done by creating a function that returns null e.g (): null => null.

### TypeScript
* done as accurately as possible and with respect to eslint rules related to it.


### Testing
* npm run test
* https://testing-library.com/docs/react-testing-library/intro/ library is used for testing 

### Libraries
* for UI (https://material-ui.com/) is used
