import { server } from './src/server.js';

const PORT = 4001;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}.`);
});
