import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

function App() {
  const [browseData, setBrowseData] = useState(null);

  const socketRef = useRef(null);
  const coreUrlRef = useRef(null);

  useEffect(() => {
    socketRef.current = io("http://192.168.2.102:4001");
    const socket = socketRef.current;

    socket.on("coreUrl", (coreUrl) => {
      console.log("coreUrl:", coreUrl);

      coreUrlRef.current = coreUrl;
    });
  }, []);

  console.log("coreUrlRef:", coreUrlRef);

  return <div></div>;
}

export default App;
