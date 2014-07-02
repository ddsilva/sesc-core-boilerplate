define [
  'core'
  ], () ->

  # Imports
  # =============================================================
  Core = require 'core'

  # CarroItemView class
  # =============================================================
  class CarroItemView extends Core.ItemView

    template: """
      <td><a href="#!/carro/{{id}}">{{montadora.nome}}</a></td>
      <td>{{modelo}}</td>
      <td>
        <div class="pull-left">{{preco}}</div>
        <div class="actions btn-group">
          <a href="#" class="btn delete" title="Excluir">
            <i class="icon-remove icon-white"></i>
          </a>
        </div>
      </td>
    """