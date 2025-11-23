import axios from "axios";

setInterval(async () => {
  try {
    await axios.post("http://localhost:4000/heartbeat", {
      timestamp: Date.now(),
    });
  } catch (e) {}
}, 3000);
