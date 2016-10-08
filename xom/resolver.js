exports = module.exports = function() {
  return require('dns');
};

exports['@implements'] = [
  'http://i.bixbyjs.org/dns/Resolver'
];
exports['@singleton'] = true;
