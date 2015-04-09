(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'views/carro/item_view', 'views/carro/modal_info_view'], function() {
    var CarroIndexView, Core, ModalInfoView, _ref;
    Core = require('core');
    ModalInfoView = require('views/carro/modal_info_view');
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
        return "" + (this.optionsTemplate()) + "\n<div class=\"table-crud-container\">\n  <table class=\"table table-bordered\">\n    " + (this.headerTemplate()) + "\n    <tbody>\n    </tbody>\n  </table>\n</div>\n<p class=\"fallback alert\">" + this.emptyCollectionMessage + "</p>\n<p class=\"loading\" spin></p>\n<div id=\"modal-container\"></div>";
      };

      CarroIndexView.prototype.redrawTable = function() {
        /* Redezenha a tabela utilizando a API do DataTables*/

        if (this.applyDatatable && !this.oTable) {
          return this.oTable = this.$('table').dataTable().rowGrouping({
            bExpandableGrouping: true
          });
        }
      };

      CarroIndexView.prototype.getView = function(model) {
        var itemView,
          _this = this;
        itemView = CarroIndexView.__super__.getView.apply(this, arguments);
        itemView.on('modelData:send', function(modelData) {
          return _this.showItemInfo(modelData);
        });
        return itemView;
      };

      CarroIndexView.prototype.afterRender = function() {
        CarroIndexView.__super__.afterRender.apply(this, arguments);
        return this.instanceSubviews();
      };

      CarroIndexView.prototype.instanceSubviews = function() {
        var modalInfoViewInstance;
        modalInfoViewInstance = new ModalInfoView({
          container: this.$('#modal-container')
        });
        return this.subview('modalInfoView', modalInfoViewInstance);
      };

      CarroIndexView.prototype.showItemInfo = function(modelData) {
        this.subview('modalInfoView').setInfo(modelData);
        return this.subview('modalInfoView').show();
      };

      return CarroIndexView;

    })(Core.TableCrudView);
  });

}).call(this);
