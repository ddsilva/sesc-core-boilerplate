define [
  'core'
], ->

  # Imports
  # =============================================================

  Core  = require 'core'

  # ModalInfoView
  # =============================================================

  class ModalInfoView extends Core.ModalView

    # Override Attributes
    # =============================================================

    modalTitle: 'Informações do veículo'

    bodyTemplate: """
      <div class="form-horizontal">

        <!-- Montadora -->
        <div class="control-group">
          <label class="control-label">Montadora</label>
          <div class="controls">
            <span id="montadora">Nome da montadora</span>
          </div>
        </div>

        <!-- Modelo -->
        <div class="control-group">
          <label class="control-label">Modelo</label>
          <div class="controls">
            <span id="modelo">Nome do modelo</span>
          </div>
        </div>

        <!-- Preço -->
        <div class="control-group">
          <label class="control-label">Preço</label>
          <div class="controls">
            <span id="preco">Preço</span>
          </div>
        </div>

      </div>
    """

    # Override Methods
    # =============================================================

    afterRender: ->
      super

      @cacheDOMElements()

    # Adittional Methods
    # =============================================================

    cacheDOMElements: ->
      @DOMElements =
        $montadora : @$ '#montadora'
        $modelo    : @$ '#modelo'
        $preco     : @$ '#preco'

    setInfo: (info={}) ->
      @DOMElements.$montadora .text info.montadora.nome if info.montadora
      @DOMElements.$modelo    .text info.modelo         if info.modelo
      @DOMElements.$preco     .text info.preco          if info.preco
