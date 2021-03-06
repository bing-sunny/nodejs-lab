var cluster = require('cluster');
var path = require('path');

cluster.setupMaster({
  exec: path.join(__dirname, 'worker.js')
});

cluster.fork();
cluster.fork();

cluster.on('disconnect', function (worker) {
  var w = cluster.fork();
  console.error('[%s] [master:%s] wroker:%s disconnect! new worker:%s fork',
    new Date(), process.pid, worker.process.pid, w.process.pid);
});

cluster.on('exit', function (worker) {
  console.error('[%s] [master:%s] wroker:%s exit!',
    new Date(), process.pid, worker.process.pid);
});