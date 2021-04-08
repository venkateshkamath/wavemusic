import { v4 as uuidv4 } from "uuid";
function chillHop() {
  // Here we have an array of OBJECTS that stores the data which in our case is a state that we need for later. We do not add such bog state in App.js because it makes things a lot bulky
  return [
    {
      name: "Into the past",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14984",
      color: ["#DA87D6", "#0D122F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lost Soul",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14988",
      color: ["#78A2D9", "#0D122F"],
      id: uuidv4(),
      active: false,
    },

    {
      name: "Beaver Creek",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Devil Eyes",
      cover:
        "https://images.hungama.com/c/1/3b8/382/35143311/35143311_300x300.jpg",
      artist: "Cristian",
      audio:
        "https://media.hungama.com/c/4/1e4/bbe/35143312/35143312_128.mp3?_roKEMwpND6TvUraBNMjXlZfITogQIw1akajKXcoqTmjgM_gn57oZfP0asJdhXtnXTJySveL7xajN28rudtuA30rYtwHbNsnaBsh3lzBB9Y3HP3THgAbE_1n9bFs-vhG5HsUUQ",
      color: ["##9EDDE5", "##4646E9"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Daylight",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Lonely Waves",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg",
      artist: "C Y G N",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14980",
      color: ["#2E213D", "#0D122F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Keep Going",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Cascade",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/02/70a56749b8b89815fa75446030c6ba57d2c34de7-1024x1024.jpg",
      artist: "KNOWMADIC",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=14993",
      color: ["#2E213D", "#0D122F"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Nightfall",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
      artist: "Aiguille",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Reflection",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
      artist: "Swørn",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Under the City Stars",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Jazz Cabbage",
      artist: "Ian Ewing, Strehlow",
      //unique id
      id: uuidv4(),
      active: false,
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12137",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/06/49f6e32ca521fbad46a1b281e3893cf6254bf11d-1024x1024.jpg",
      color: ["#D2ABA6", "#CBB0B5"],
    },
    {
      name: "Desire",
      id: uuidv4(),
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/b879702e76f573e03ce60da9237ded86b4a3ebd7-1024x1024.jpg",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10550",
      artist: "Psalm Trees, Guillaume Muschalle",
      active: false,
      color: ["#000000", "#EACBA6"],
    },
  ];
}

export default chillHop;
