(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core'], function() {
    var CarroItemView, Core, _ref;
    Core = require('core');
    return CarroItemView = (function(_super) {
      __extends(CarroItemView, _super);

      function CarroItemView() {
        _ref = CarroItemView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroItemView.prototype.template = "<td><a href=\"#!/carro/{{id}}\">{{montadora.nome}}</a></td>\n<td>{{modelo}}</td>\n<td>\n  <div class=\"pull-left\">{{preco}}</div>\n  <div class=\"actions btn-group\">\n    <a href=\"#\" class=\"btn delete\" title=\"Excluir\">\n      <i class=\"icon-remove icon-white\"></i>\n    </a>\n  </div>\n</td>";

      return CarroItemView;

    })(Core.ItemView);
  });

}).call(this);
