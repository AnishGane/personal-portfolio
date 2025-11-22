import axios from "axios";

setInterval(async () => {
  try {
    await axios.post(`${import.meta.env.VITE_SERVER}/heartbeat`, {
      timestamp: Date.now(),
    });
  } catch (e) {}
}, 3000);
