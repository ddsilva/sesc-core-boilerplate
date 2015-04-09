(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'collections/montadora_collection', 'text!templates/carro/form.html'], function() {
    var CarroEditView, Core, MontadoraCollection, _ref;
    Core = require('core');
    MontadoraCollection = require('collections/montadora_collection');
    return CarroEditView = (function(_super) {
      __extends(CarroEditView, _super);

      function CarroEditView() {
        _ref = CarroEditView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroEditView.prototype.container = '#module-container';

      CarroEditView.prototype.template = require('text!templates/carro/form.html');

      CarroEditView.prototype.validationRules = {
        montadora: {
          required: true
        },
        modelo: {
          required: true,
          maxlength: 10
        },
        preco: {
          required: true
        }
      };

      CarroEditView.prototype.initialize = function() {
        var _this = this;
        CarroEditView.__super__.initialize.apply(this, arguments);
        return this.requestData().done(function() {
          return _this.render();
        });
      };

      CarroEditView.prototype.getTemplateData = function() {
        return _.extend(CarroEditView.__super__.getTemplateData.apply(this, arguments), {
          montadoras: _.generateOptions(this.montadoraCollection)
        });
      };

      CarroEditView.prototype.fillForm = function() {
        this.cacheDOMElements();
        this.DOMElements.$modelo.val(this.model.get('modelo'));
        this.DOMElements.$montadora.val(this.model.get('montadora').id);
        return this.DOMElements.$preco.val(this.model.get('preco'));
      };

      CarroEditView.prototype.fillModel = function() {
        this.model.set('modelo', this.DOMElements.$modelo.val());
        this.model.set('montadora', this.DOMElements.$montadora.val());
        return this.model.set('preco', this.DOMElements.$preco.val());
      };

      CarroEditView.prototype.requestData = function() {
        this.montadoraCollection = new MontadoraCollection;
        return this.montadoraCollection.fetch();
      };

      CarroEditView.prototype.cacheDOMElements = function() {
        return this.DOMElements = {
          $modelo: this.$('#modelo'),
          $montadora: this.$('#montadora'),
          $preco: this.$('#preco')
        };
      };

      return CarroEditView;

    })(Core.EditView);
  });

}).call(this);
