import axios from 'axios';

setInterval(async () => {
  try {
    await axios.post(`${import.meta.env.VITE_BACKEND_URL || ''}/heartbeat`, {
      timestamp: Date.now(),
    });
  } catch (e) {
    console.error(e);
  }
}, 3000);
