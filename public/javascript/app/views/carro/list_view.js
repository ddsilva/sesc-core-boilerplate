(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'views/carro/item_view'], function() {
    var CarroIndexView, Core, _ref;
    Core = require('core');
    return CarroIndexView = (function(_super) {
      __extends(CarroIndexView, _super);

      function CarroIndexView() {
        _ref = CarroIndexView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroIndexView.prototype.container = '#module-container';

      CarroIndexView.prototype.itemView = require('views/carro/item_view');

      CarroIndexView.prototype.emptyCollectionMessage = 'Atenção <br /> Não há carro cadastrada. Clique em "Adicionar" para começar.';

      CarroIndexView.prototype.createLink = function() {
        return '#!/carro/create';
      };

      CarroIndexView.prototype.headerTemplate = function() {
        return "<thead>\n  <tr>\n    <th>Montadora</th>\n    <th>Modelo</th>\n    <th>Preço</th>\n  </tr>\n</thead>";
      };

      CarroIndexView.prototype.template = function() {
        return "" + (this.optionsTemplate()) + "\n<div class=\"table-crud-container\">\n  <table class=\"table table-bordered\">\n    " + (this.headerTemplate()) + "\n    <tbody>\n    </tbody>\n  </table>\n</div>\n<p class=\"fallback alert\">" + this.emptyCollectionMessage + "</p>\n<p class=\"loading\" spin></p>";
      };

      return CarroIndexView;

    })(Core.TableCrudView);
  });

}).call(this);
