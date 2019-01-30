var privateData = 'weixin';
function run(who) {
  console.log(who + 'run');
}
function walk(who) {
  console.log(who + 'walk');
}
module.exports.run = run;
module.exports.walk = walk;
module.exports = {
  run: run,
  walk: walk
};