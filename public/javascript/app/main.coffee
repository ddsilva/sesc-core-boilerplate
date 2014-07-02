define [
  'core'
  'views/layouts/layout'
  'commons/mockjax-setup'
  ], () ->

  'use strict'

  # Imports
  # =============================================================

  Core        = require 'core'
  Layout      = require 'views/layouts/layout'

  # Cursos
  # =============================================================

  # As aplicações do Sesc devem extender de Core.SescApplication para
  # herdar todas as características necessárias.
  class Test extends Core.SescApplication

    # Properties
    # ==============================================================================

    initialize: ->
      super

      # Desabilita o cache das chamadas ajax do jquery
      $.ajaxSetup cache: false

      # Configuração do tooltip
      if $.fn.livequery then $('[title]').livequery -> do $(this).tooltip

      # Configura o timeout das mensagens de feedback para 2 segundos
      Core.Feedback.defaults.timeout = 3000

      # @initRouter(@routes)

    routes: (match) ->
      match ''               , 'carro#index'
      match '!/carro'        , 'carro#index'
      match '!/carro/create' , 'carro#create'
      match '!/carro/:id'    , 'carro#edit',
        contains: {'id': '/.+$'}
      return @

    # Inicializa o layout principal da aplicação.
    initLayout: ->
      # O layout contêm a estrutura base para a aplicação
      @layout = new Layout()
      @layout.title = @title

    getUserOperation: ->
      $.Deferred().resolve([])

    getUserObject: (userData) ->
      user = new Core.WebUser
      user.authenticate userData
      return user

  # Aqui instanciamos a aplicação e guardamos uma referência da mesma no window.application
  # Toda aplicação deve ser instânciada com o seu ID e nome.
  window.application = new Test({}, 'Test')

  # Retornamos a classe para utilizar esse arquivo numa fase de teste unitário
  # Cursos
