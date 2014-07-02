(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core'], function() {
    var CarroModel, Core, _ref;
    Core = require('core');
    return CarroModel = (function(_super) {
      __extends(CarroModel, _super);

      function CarroModel() {
        _ref = CarroModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroModel.prototype.urlRoot = '/api/carro';

      return CarroModel;

    })(Core.Model);
  });

}).call(this);
