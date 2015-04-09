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

      CarroItemView.prototype.events = {
        'click [name="btn-info"]': 'clickBtnInfoHandler'
      };

      CarroItemView.prototype.template = "<td>{{montadora.nome}}</td>\n<td><a href=\"#!/carro/{{id}}\">{{modelo}}</a></td>\n<td>\n  <div class=\"pull-left\">{{preco}}</div>\n  <div class=\"actions btn-group\">\n    <a href=\"#\" class=\"btn btn-secondary\" name=\"btn-info\" title=\"Informações\">\n      <i class=\" icon-info-sign icon-white\"></i>\n    </a>\n    <a href=\"#\" class=\"btn delete\" title=\"Excluir\">\n      <i class=\"icon-remove icon-white\"></i>\n    </a>\n  </div>\n</td>";

      CarroItemView.prototype.triggerInfo = function() {
        return this.trigger('modelData:send', this.model.toJSON());
      };

      CarroItemView.prototype.clickBtnInfoHandler = function(event) {
        event.preventDefault();
        return this.triggerInfo();
      };

      return CarroItemView;

    })(Core.ItemView);
  });

}).call(this);
