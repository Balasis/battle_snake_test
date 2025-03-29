// info is called when you create your Battlesnake on play.battlesnake.com
// and controls your Battlesnake's appearance
// TIP: If you open your Battlesnake URL in a browser you should see this data

export default function info() {
    console.log("INFO");

    const snakeAppearance = {
      color: "#00FF00",  // Default snake color
      headType: "bendr", // Head shape
      tailType: "curled", // Tail shape
    };

    return {
      apiversion: "1",
      author: "",       // TODO: Your Battlesnake Username
      color: snakeAppearance.color, // TODO: Choose color
      head: snakeAppearance.headType,  // TODO: Choose head
      tail: snakeAppearance.tailType,  // TODO: Choose tail
    };
  }


