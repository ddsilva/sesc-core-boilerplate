define [
  'core'
  'views/carro/item_view'
  'views/carro/modal_info_view'
  ], () ->

  # Imports
  # =============================================================

  Core          = require 'core'
  ModalInfoView = require 'views/carro/modal_info_view'

  # CarroIndexView
  # =============================================================

  class CarroIndexView extends Core.TableCrudView

    # Override Attributes
    # =============================================================

    container              : '#module-container'
    itemView               : require 'views/carro/item_view'
    emptyCollectionMessage : 'Atenção <br /> Não há carro cadastrada. Clique em "Adicionar" para começar.'

    # Override Methods
    # =============================================================

    createLink: -> '#!/carro/create'

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
      <div id="modal-container"></div>
    """

    redrawTable: ->
      ### Redezenha a tabela utilizando a API do DataTables ###
      if @applyDatatable and not @oTable
          @oTable = @$('table').dataTable().rowGrouping bExpandableGrouping: true

    getView: (model) ->
      itemView = super
      itemView.on 'modelData:send', (modelData) => @showItemInfo modelData
      return itemView

    afterRender: ->
      super

      @instanceSubviews()

    # Additional Methods
    # =============================================================

    instanceSubviews: ->
      modalInfoViewInstance = new ModalInfoView
        container: @$('#modal-container')

      @subview 'modalInfoView', modalInfoViewInstance

    showItemInfo: (modelData) ->
      @subview('modalInfoView').setInfo modelData
      @subview('modalInfoView').show()
