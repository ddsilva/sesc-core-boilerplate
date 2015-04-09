define [
  'core'
  ], () ->

  # Imports
  # =============================================================

  Core = require 'core'

  # CarroItemView class
  # =============================================================

  class CarroItemView extends Core.ItemView

    # Override Attributes
    # =============================================================

    events:
      'click [name="btn-info"]': 'clickBtnInfoHandler'

    template: """
      <td>{{montadora.nome}}</td>
      <td><a href="#!/carro/{{id}}">{{modelo}}</a></td>
      <td>
        <div class="pull-left">{{preco}}</div>
        <div class="actions btn-group">
          <a href="#" class="btn btn-secondary" name="btn-info" title="Informações">
            <i class=" icon-info-sign icon-white"></i>
          </a>
          <a href="#" class="btn delete" title="Excluir">
            <i class="icon-remove icon-white"></i>
          </a>
        </div>
      </td>
    """

    # Additional Methods
    # =============================================================

    triggerInfo: ->
      @trigger 'modelData:send', @model.toJSON()

    # Event Handlers
    # =============================================================

    clickBtnInfoHandler: (event) ->
      event.preventDefault()
      @triggerInfo()
