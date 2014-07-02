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

      CarroCreateView.prototype.autoRender = true;

      CarroCreateView.prototype.template = require('text!templates/carro/form.html');

      CarroCreateView.prototype.validationRules = {};

      CarroCreateView.prototype.initialize = function() {
        var _this = this;
        return this.requestData().done(function() {
          return CarroCreateView.__super__.initialize.apply(_this, arguments);
        });
      };

      CarroCreateView.prototype.fillModel = function() {
        return this.model.set('modelo', this.$('#modelo').val());
      };

      CarroCreateView.prototype.requestData = function() {
        this.montadoraCollection = new MontadoraCollection;
        return this.montadoraCollection.fetch();
      };

      return CarroCreateView;

    })(Core.CreateView);
  });

}).call(this);
