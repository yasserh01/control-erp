'use strict';
// Stand-alone server (Stage 2 seed): node server/run.js --port 8080 --host 0.0.0.0 --data D:\ERPData
const { createApp } = require('./app');

const arg = (name, def) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > -1 ? process.argv[i + 1] : def;
};

const app = createApp({ dataDir: arg('data', './data') });
app.listen(Number(arg('port', 8080)), arg('host', '127.0.0.1')).then((port) => {
  console.log(`Control ERP server running on http://${arg('host', '127.0.0.1')}:${port}  (data: ${app.db.file})`);
});
process.on('SIGINT', () => { app.close(); process.exit(0); });
