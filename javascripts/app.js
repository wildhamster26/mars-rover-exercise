let grid = [
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""],
  ["","","","","","","","","",""]
]

//===================================================
// ROVER OBJECT - EXPLORATION, MOVING ON A 10x10 GRID
//===================================================
var rover = {
  //================
  //STATUS REPORT
  //================
  status: function status(rover) {
    console.log("Rover is currently at position: " + this.positionX + "," + this.positionY + " facing " + this.currentDirection);
  },
  //================
  //TRAVEL LOG
  //================
  travelLog: [],
  log: function log(rover) {
    console.log(this.travelLog);
  },
  //================
  //TURNING THE ROVER
  //================
  currentDirection: "N",
    //TURNING LEFT
  turnLeft: function turnLeft(rover){
    console.log("turnLeft was called!");    
    switch(this.currentDirection) {
      case "N":
        this.currentDirection = "W";
        console.log("Completed turn from North to West.");
        break;
      case "S":
        this.currentDirection = "E";
        console.log("Completed turn from South to East.");
        break;
      case "E":
        this.currentDirection = "N";
        console.log("Completed turn from East to North.");
        break;
      case "W":
        this.currentDirection = "S";
        console.log("Completed turn from West to South.");
        break;
      default:
        console.log("Hmm... Not sure which direction Rover is facing...");
    }
    this.status();
  },
    //TURNING RIGHT
  turnRight: function turnRight(rover){
    console.log("turnRight was called!");    
    switch(this.currentDirection) {
      case "N":
        this.currentDirection = "E";
        console.log("Completed turn from North to East.");
        break;
      case "S":
        this.currentDirection = "W";
        console.log("Completed turn from South to West.");
        break;
      case "E":
        this.currentDirection = "S";
        console.log("Completed turn from East to South.");
        break;
      case "W":
        this.currentDirection = "N";
        console.log("Completed turn from West to North.");
        break;
      default:
        console.log("Hmm... Not sure which direction Rover is facing, so Rover can't move in that direction...");
    }
    this.status();
  },
  //================
  //MOVING THE ROVER
  //================
  //MOVING FORWARD
  positionX: 0,
  positionY: 0,
  moveForward: function moveForward(rover){
    console.log("moveForward was called");
    switch(this.currentDirection) {
      case "N":
        //LIMIT NORTH MOVEMENT TO THE GRID
        if(this.positionY < 10) {
          this.positionY += 1;
          console.log("Completed a move to the North.");
        } else 
            console.log("Danger! Cliff ahead! Can't move any further.");
        break;
      case "S":
        //LIMIT SOUTH MOVEMENT TO THE GRID
        if(this.positionY > 0) {
          this.positionY -= 1;
          console.log("Completed a move to the South.");
        } else 
           console.log("Danger! Cliff ahead! Can't move any further.");
        break;
      case "E":
      //LIMIT EAST MOVEMENT TO THE GRID
        if(this.positionX < 10) {
          this.positionX += 1;
          console.log("Completed a move to the East.");
        } else
           console.log("Danger! Cliff ahead! Can't move any further.");
        break;
      case "W":
      //LIMIT WEST MOVEMENT TO THE GRID
        if(this.positionX > 0) {
          this.positionX -= 1; 
          console.log("Completed a move to the West.");
        } else
            console.log("Danger! Cliff ahead! Can't move any further.");
        break;
      default:
        console.log("Hmm... Not sure which direction Rover is facing, so Rover can't move in that direction...");
    }
    this.travelLog.push(this.positionX + " , " + this.positionY);
    this.status();
  },
  //MOVING BACKWARD
  moveBackward: function moveBackward(rover){
    console.log("moveBackward was called");
    switch(this.currentDirection) {
      case "N":
        //LIMIT SOUTH MOVEMENT TO THE GRID
        if(this.positionY > 0) {
          this.positionY -= 1;
          console.log("Completed a move backards, to the South.");
        } else 
            console.log("Danger! Cliff behind! Can't move any further.");
        break;
      case "S":
        //LIMIT NORTH MOVEMENT TO THE GRID
        if(this.positionY < 10) {
          this.positionY += 1;
          console.log("Completed a move backards, to the North.");
        } else 
           console.log("Danger! Cliff behind! Can't move any further.");
        break;
      case "E":
      //LIMIT WEST MOVEMENT TO THE GRID
        if(this.positionX > 0) {
          this.positionX -= 1;
          console.log("Completed a move backards, to the West.");
        } else
           console.log("Danger! Cliff behind! Can't move any further.");
        break;
      case "W":
      //LIMIT EAST MOVEMENT TO THE GRID
        if(this.positionX < 10) {
          this.positionX += 1; 
          console.log("Completed a move backards, to the East.");
        } else
            console.log("Danger! Cliff behind! Can't move any further.");
        break;
      default:
        console.log("Hmm... Not sure which direction Rover is facing, so Rover can't move in that direction...");
    }
    this.travelLog.push(this.positionX + " , " + this.positionY);
    this.status();
  },
  //================
  //EXECUTE A COMMAND LIST
  //================
  commandList: function commandList(commands){
    for(let i = 0; i < commands.length; i++) {
      if (commands[i] === "r") 
        rover.turnRight();
      else if (commands[i] === "l")
        rover.turnLeft();
      else if (commands[i] === "f")
        rover.moveForward();
      else if (commands[i] === "b")
        rover.moveBackward();
      else {
        //IF THERE'S AN ILLEGAL COMMAND: STOP ROVER, NOTIFY USER ABOUT THE ERROR AND SEND STATUS REPORT
        console.log("Unknown command. Stopping Rover, as your input has a mistake in it. Please enter only the letters 'r', 'l', 'b' or 'f'.");
        return rover.status();
      }
    }
  }
}

rover.status();

let marsRover = new rover();