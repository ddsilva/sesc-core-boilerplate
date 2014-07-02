(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core'], function() {
    var Core, MontadoraModel, _ref;
    Core = require('core');
    return MontadoraModel = (function(_super) {
      __extends(MontadoraModel, _super);

      function MontadoraModel() {
        _ref = MontadoraModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MontadoraModel.prototype.urlRoot = '/api/montadora';

      return MontadoraModel;

    })(Core.Model);
  });

}).call(this);
