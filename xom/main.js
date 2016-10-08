exports = module.exports = function(resolver) {
  var api = {};
  
  api.resolve = function(hostname, rrtype, cb) {
    resolver.resolve(hostname, rrtype, cb);
  }
  
  return api;
};

exports['@implements'] = 'http://i.bixbyjs.org/dns';
exports['@singleton'] = true;
exports['@require'] = [
  'http://i.bixbyjs.org/dns/Resolver'
];
