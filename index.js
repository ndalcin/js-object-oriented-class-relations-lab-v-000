let store = {drivers: [], passengers: [], trips: []}

let driverId = 0
class Driver {
  constructor(name){
    this.name = name;
    this.id = ++driverId;
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return this.trips().map(function (trip){
      return trip.passenger()
    })
  }
}

let passengerId = 0
class Passenger {
  constructor(name){
    this.name = name;
    this.id = ++passengerId;
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return this.trips().map(function (trip){
      return trip.driver()
    })
  }
}

let tripId = 0
class Trip {
  constructor(driver, passenger) {
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    this.id = ++tripId

    store.trips.push(this)
  }
  setDriver(driver){
    this.driverId = driver.id
  }
  driver(){
    return store.drivers.find(function (driver){
      return driver.id === this.driverId
    }.bind(this))
  }
  setPassenger(passenger){
    this.passengerId = passenger.id
  }
  passenger(){
    return store.passengers.find((passenger) => {
      return passenger.id === this.passengerId
    })
  }
}
