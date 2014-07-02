define ['core'], () ->

  Core = require 'core'

  # A classe NavigationModel é utilizada para criação dos itens de menu da aplicação
  class NavigationModel extends Core.NavigationModel

    initialize: ->
      super

      @addItem('Carros', '#!/carro')
