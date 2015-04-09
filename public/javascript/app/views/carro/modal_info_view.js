(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core'], function() {
    var Core, ModalInfoView, _ref;
    Core = require('core');
    return ModalInfoView = (function(_super) {
      __extends(ModalInfoView, _super);

      function ModalInfoView() {
        _ref = ModalInfoView.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      ModalInfoView.prototype.modalTitle = 'Informações do veículo';

      ModalInfoView.prototype.bodyTemplate = "<div class=\"form-horizontal\">\n\n  <!-- Montadora -->\n  <div class=\"control-group\">\n    <label class=\"control-label\">Montadora</label>\n    <div class=\"controls\">\n      <span id=\"montadora\">Nome da montadora</span>\n    </div>\n  </div>\n\n  <!-- Modelo -->\n  <div class=\"control-group\">\n    <label class=\"control-label\">Modelo</label>\n    <div class=\"controls\">\n      <span id=\"modelo\">Nome do modelo</span>\n    </div>\n  </div>\n\n  <!-- Preço -->\n  <div class=\"control-group\">\n    <label class=\"control-label\">Preço</label>\n    <div class=\"controls\">\n      <span id=\"preco\">Preço</span>\n    </div>\n  </div>\n\n</div>";

      ModalInfoView.prototype.afterRender = function() {
        ModalInfoView.__super__.afterRender.apply(this, arguments);
        return this.cacheDOMElements();
      };

      ModalInfoView.prototype.cacheDOMElements = function() {
        return this.DOMElements = {
          $montadora: this.$('#montadora'),
          $modelo: this.$('#modelo'),
          $preco: this.$('#preco')
        };
      };

      ModalInfoView.prototype.setInfo = function(info) {
        if (info == null) {
          info = {};
        }
        if (info.montadora) {
          this.DOMElements.$montadora.text(info.montadora.nome);
        }
        if (info.modelo) {
          this.DOMElements.$modelo.text(info.modelo);
        }
        if (info.preco) {
          return this.DOMElements.$preco.text(info.preco);
        }
      };

      return ModalInfoView;

    })(Core.ModalView);
  });

}).call(this);
