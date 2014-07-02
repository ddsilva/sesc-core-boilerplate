(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['core', 'views/layouts/layout', 'commons/mockjax-setup'], function() {
    'use strict';
    var Core, Layout, Test, _ref;
    Core = require('core');
    Layout = require('views/layouts/layout');
    Test = (function(_super) {
      __extends(Test, _super);

      function Test() {
        _ref = Test.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Test.prototype.initialize = function() {
        Test.__super__.initialize.apply(this, arguments);
        $.ajaxSetup({
          cache: false
        });
        if ($.fn.livequery) {
          $('[title]').livequery(function() {
            return $(this).tooltip();
          });
        }
        return Core.Feedback.defaults.timeout = 3000;
      };

      Test.prototype.routes = function(match) {
        match('', 'carro#index');
        match('!/carro', 'carro#index');
        match('!/carro/create', 'carro#create');
        match('!/carro/:id', 'carro#edit', {
          contains: {
            'id': '/.+$'
          }
        });
        return this;
      };

      Test.prototype.initLayout = function() {
        this.layout = new Layout();
        return this.layout.title = this.title;
      };

      Test.prototype.getUserOperation = function() {
        return $.Deferred().resolve([]);
      };

      Test.prototype.getUserObject = function(userData) {
        var user;
        user = new Core.WebUser;
        user.authenticate(userData);
        return user;
      };

      return Test;

    })(Core.SescApplication);
    return window.application = new Test({}, 'Test');
  });

}).call(this);
