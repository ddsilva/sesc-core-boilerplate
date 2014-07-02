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

      CarroEditView.prototype.autoRender = true;

      CarroEditView.prototype.template = require('text!templates/carro/form.html');

      CarroEditView.prototype.validationRules = {};

      CarroEditView.prototype.initialize = function() {
        var _this = this;
        return this.requestData().done(function() {
          return CarroEditView.__super__.initialize.apply(_this, arguments);
        });
      };

      CarroEditView.prototype.getTemplateData = function() {
        return _.extend(CarroEditView.__super__.getTemplateData.apply(this, arguments), {
          montadoras: _.generateOptions(this.montadoraCollection)
        });
      };

      CarroEditView.prototype.fillForm = function() {
        return this.$('#modelo').val(this.model.get('modelo'));
      };

      CarroEditView.prototype.fillModel = function() {
        return this.model.set('modelo', this.$('#modelo').val());
      };

      CarroEditView.prototype.requestData = function() {
        this.montadoraCollection = new MontadoraCollection;
        return this.montadoraCollection.fetch();
      };

      return CarroEditView;

    })(Core.EditView);
  });

}).call(this);
