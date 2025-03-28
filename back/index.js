import { port } from "./envs/index.js";
import server from "./server/index.js";

server.listen(port, () => {
  console.log(`Server up & running on port ${port} ...`);
});
