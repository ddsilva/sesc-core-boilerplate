(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'models/montadora_model'], function() {
    var Core, Model, MontadoraCollection, _ref;
    Core = require('core');
    Model = require('models/montadora_model');
    return MontadoraCollection = (function(_super) {
      __extends(MontadoraCollection, _super);

      function MontadoraCollection() {
        _ref = MontadoraCollection.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      MontadoraCollection.prototype.url = '/api/montadora';

      MontadoraCollection.prototype.model = Model;

      return MontadoraCollection;

    })(Core.SyncCollection);
  });

}).call(this);
