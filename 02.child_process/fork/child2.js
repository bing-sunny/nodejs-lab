// Generated by CoffeeScript 1.7.1
(function() {
  process.on('message', function(msg) {
    console.log('from parent coffee:', msg);
    process.send('hello parent');
    return process.disconnect();
  });

}).call(this);