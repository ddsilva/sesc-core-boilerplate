(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'models/carro_model'], function() {
    var CarroCollection, Core, Model, _ref;
    Core = require('core');
    Model = require('models/carro_model');
    return CarroCollection = (function(_super) {
      __extends(CarroCollection, _super);

      function CarroCollection() {
        _ref = CarroCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroCollection.prototype.url = '/api/carro';

      CarroCollection.prototype.model = Model;

      return CarroCollection;

    })(Core.SyncCollection);
  });

}).call(this);
