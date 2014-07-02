define [
  'core'
  'views/carro/item_view'
  ], () ->

  # Imports
  # =============================================================

  Core  = require 'core'

  # CarroIndexView
  # =============================================================

  class CarroIndexView extends Core.TableCrudView

    container              : '#module-container'
    itemView               : require 'views/carro/item_view'
    emptyCollectionMessage : 'Atenção <br /> Não há carro cadastrada. Clique em "Adicionar" para começar.'

    createLink: ->
      '#!/carro/create'

    headerTemplate: -> """
      <thead>
        <tr>
          <th>Montadora</th>
          <th>Modelo</th>
          <th>Preço</th>
        </tr>
      </thead>
    """

    template: -> """
      #{@optionsTemplate()}
      <div class="table-crud-container">
        <table class="table table-bordered">
          #{@headerTemplate()}
          <tbody>
          </tbody>
        </table>
      </div>
      <p class="fallback alert">#{@emptyCollectionMessage}</p>
      <p class="loading" spin></p>
    """
