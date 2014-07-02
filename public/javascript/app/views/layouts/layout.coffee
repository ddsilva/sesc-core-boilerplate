define [
  'core'
  'handlebars'
  'models/navigation_model'
  'jquery.cookie'
  'text!templates/layout.html'], () ->

  # Imports
  # =============================================================

  Core            = require 'core'
  Handlebars      = require 'handlebars'
  NavigationModel = require 'models/navigation_model'

  # Layout base da aplicação
  # =============================================================

  class Layout extends Core.SescLayout

    logPrefix: 'Layout'

    navigationModelClass: NavigationModel

    template : require 'text!templates/layout.html'

    initialize: ->
      super

      @subscribeEvent 'session:expired'   , @onSessionExpired
      @subscribeEvent 'service:error'     , @onServiceError
      @subscribeEvent 'startupController' , @activeNavigationItem

    onSessionExpired: ->
      $('#session-expired-modal').modal
        backdrop: 'static',
        keyboard: false,
        show: true

    onServiceError: ->
      $('#service-error-modal').modal('show')

    activeNavigationItem: (data) ->
      path        = data?.params?.path || ''
      $nav        = @navigationView?.$el
      classActive = 'active'
      $anchor     = $nav?.find "[href='##{path}']" || []

      $nav?.find("li.#{classActive}")?.removeClass "#{classActive}"

      if $anchor?.length
        $anchor.parents('li')?.addClass "#{classActive}"

    updateUser: ->
      super

      permissaoLink = @layoutEl.find('[role=account_nav] .link-permissions');

      location = window.location
      url = location.protocol + '//' + location.host + '/permissao/component.jsp'
      url += '?hash=' + $.cookie('hash') + '&opc_codigo=' + $.cookie('opc_codigo') + '&permissao=CURSO.COMPONENTE.PERMISSAO'

      if Core.Session.user.checkAccess(["CURSO.COMPONENTE.PERMISSAO"])
        $('#permission-modal').find('iframe').attr('src', url)

        permissaoLink.click -> $('#permission-modal').modal('show');
      else
        do permissaoLink.hide

  Layout
