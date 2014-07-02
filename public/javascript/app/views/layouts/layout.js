(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'handlebars', 'models/navigation_model', 'jquery.cookie', 'text!templates/layout.html'], function() {
    var Core, Handlebars, Layout, NavigationModel, _ref;
    Core = require('core');
    Handlebars = require('handlebars');
    NavigationModel = require('models/navigation_model');
    Layout = (function(_super) {
      __extends(Layout, _super);

      function Layout() {
        _ref = Layout.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Layout.prototype.logPrefix = 'Layout';

      Layout.prototype.navigationModelClass = NavigationModel;

      Layout.prototype.template = require('text!templates/layout.html');

      Layout.prototype.initialize = function() {
        Layout.__super__.initialize.apply(this, arguments);
        this.subscribeEvent('session:expired', this.onSessionExpired);
        this.subscribeEvent('service:error', this.onServiceError);
        return this.subscribeEvent('startupController', this.activeNavigationItem);
      };

      Layout.prototype.onSessionExpired = function() {
        return $('#session-expired-modal').modal({
          backdrop: 'static',
          keyboard: false,
          show: true
        });
      };

      Layout.prototype.onServiceError = function() {
        return $('#service-error-modal').modal('show');
      };

      Layout.prototype.activeNavigationItem = function(data) {
        var $anchor, $nav, classActive, path, _ref1, _ref2, _ref3, _ref4;
        path = (data != null ? (_ref1 = data.params) != null ? _ref1.path : void 0 : void 0) || '';
        $nav = (_ref2 = this.navigationView) != null ? _ref2.$el : void 0;
        classActive = 'active';
        $anchor = $nav != null ? $nav.find(("[href='#" + path + "']") || []) : void 0;
        if ($nav != null) {
          if ((_ref3 = $nav.find("li." + classActive)) != null) {
            _ref3.removeClass("" + classActive);
          }
        }
        if ($anchor != null ? $anchor.length : void 0) {
          return (_ref4 = $anchor.parents('li')) != null ? _ref4.addClass("" + classActive) : void 0;
        }
      };

      Layout.prototype.updateUser = function() {
        var location, permissaoLink, url;
        Layout.__super__.updateUser.apply(this, arguments);
        permissaoLink = this.layoutEl.find('[role=account_nav] .link-permissions');
        location = window.location;
        url = location.protocol + '//' + location.host + '/permissao/component.jsp';
        url += '?hash=' + $.cookie('hash') + '&opc_codigo=' + $.cookie('opc_codigo') + '&permissao=CURSO.COMPONENTE.PERMISSAO';
        if (Core.Session.user.checkAccess(["CURSO.COMPONENTE.PERMISSAO"])) {
          $('#permission-modal').find('iframe').attr('src', url);
          return permissaoLink.click(function() {
            return $('#permission-modal').modal('show');
          });
        } else {
          return permissaoLink.hide();
        }
      };

      return Layout;

    })(Core.SescLayout);
    return Layout;
  });

}).call(this);
