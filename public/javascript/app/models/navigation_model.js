(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core'], function() {
    var Core, NavigationModel, _ref;
    Core = require('core');
    return NavigationModel = (function(_super) {
      __extends(NavigationModel, _super);

      function NavigationModel() {
        _ref = NavigationModel.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavigationModel.prototype.initialize = function() {
        NavigationModel.__super__.initialize.apply(this, arguments);
        return this.addItem('Carros', '#!/carro');
      };

      return NavigationModel;

    })(Core.NavigationModel);
  });

}).call(this);
