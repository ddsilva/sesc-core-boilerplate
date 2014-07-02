(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'models/carro_model', 'collections/carro_collection', 'views/carro/list_view', 'views/carro/create_view', 'views/carro/edit_view'], function() {
    var CarroController, Collection, Core, CreateView, EditView, ListView, Model, _ref;
    Core = require('core');
    Model = require('models/carro_model');
    Collection = require('collections/carro_collection');
    ListView = require('views/carro/list_view');
    CreateView = require('views/carro/create_view');
    EditView = require('views/carro/edit_view');
    return CarroController = (function(_super) {
      __extends(CarroController, _super);

      function CarroController() {
        _ref = CarroController.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroController.prototype.logPrefix = 'CarroController';

      CarroController.prototype.listView = ListView;

      CarroController.prototype.createView = CreateView;

      CarroController.prototype.editView = EditView;

      CarroController.prototype.collectionClass = Collection;

      CarroController.prototype.modelClass = Model;

      CarroController.prototype.indexTitle = 'Cadastro de Carros';

      CarroController.prototype.createTitle = 'Adicionar carro';

      CarroController.prototype.editTitle = 'Edição de carro';

      CarroController.prototype.historyURL = function(options) {
        if (options == null) {
          options = {};
        }
        return '!/carro';
      };

      return CarroController;

    })(Core.CrudController);
  });

}).call(this);
