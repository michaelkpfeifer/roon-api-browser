import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [browseData, setBrowseData] = useState(null);

  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://192.168.2.102:4001");
    const socket = socketRef.current;

    socket.on("connectionTest", (testData) => {
      setBrowseData(JSON.parse(testData));
    });
  }, []);

  if (browseData !== null) {
    return (
      <div>
        <p>{browseData}</p>
      </div>
    );
  }

  return null;
}

export default App;
