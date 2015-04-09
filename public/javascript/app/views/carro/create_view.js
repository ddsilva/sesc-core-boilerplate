(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'collections/montadora_collection', 'text!templates/carro/form.html'], function() {
    var CarroCreateView, Core, MontadoraCollection, _ref;
    Core = require('core');
    MontadoraCollection = require('collections/montadora_collection');
    return CarroCreateView = (function(_super) {
      __extends(CarroCreateView, _super);

      function CarroCreateView() {
        _ref = CarroCreateView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      CarroCreateView.prototype.container = '#module-container';

      CarroCreateView.prototype.template = require('text!templates/carro/form.html');

      CarroCreateView.prototype.validationRules = {
        montadora: {
          required: true
        },
        modelo: {
          required: true,
          maxlength: 255
        },
        preco: {
          required: true
        }
      };

      CarroCreateView.prototype.initialize = function() {
        var _this = this;
        CarroCreateView.__super__.initialize.apply(this, arguments);
        return this.requestData().done(function() {
          return _this.render();
        });
      };

      CarroCreateView.prototype.afterRender = function() {
        CarroCreateView.__super__.afterRender.apply(this, arguments);
        return this.cacheDOMElements();
      };

      CarroCreateView.prototype.fillModel = function() {
        this.model.set('modelo', this.DOMElements.$modelo.val());
        this.model.set('montadora', this.DOMElements.$montadora.val());
        return this.model.set('preco', this.DOMElements.$preco.val());
      };

      CarroCreateView.prototype.getTemplateData = function() {
        return _.extend(CarroCreateView.__super__.getTemplateData.apply(this, arguments), {
          montadoras: _.generateOptions(this.montadoraCollection)
        });
      };

      CarroCreateView.prototype.requestData = function() {
        this.montadoraCollection = new MontadoraCollection;
        return this.montadoraCollection.fetch();
      };

      CarroCreateView.prototype.cacheDOMElements = function() {
        return this.DOMElements = {
          $modelo: this.$('#modelo'),
          $montadora: this.$('#montadora'),
          $preco: this.$('#preco')
        };
      };

      return CarroCreateView;

    })(Core.CreateView);
  });

}).call(this);
