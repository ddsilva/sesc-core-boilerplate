define [
  'core'
  'collections/montadora_collection'
  'text!templates/carro/form.html'
], () ->

  # Imports
  # =============================================================

  Core                = require 'core'
  MontadoraCollection = require 'collections/montadora_collection'

  # CarroCreateView
  # =============================================================

  class CarroCreateView extends Core.CreateView

    # Override Attributes
    # =============================================================

    container       : '#module-container'
    template        : require 'text!templates/carro/form.html'
    validationRules :
      montadora:
        required: true
      modelo:
        required  : true
        maxlength : 255
      preco:
        required: true

    # Override Methods
    # =============================================================

    initialize: ->
      super

      @requestData().done => @render()

    afterRender: ->
      super

      @cacheDOMElements()

    fillModel: ->
      @model.set 'modelo'    , @DOMElements.$modelo    .val()
      @model.set 'montadora' , @DOMElements.$montadora .val()
      @model.set 'preco'     , @DOMElements.$preco     .val()

    getTemplateData: ->
      _.extend super,
        montadoras: _.generateOptions @montadoraCollection

    # Additional Methods
    # =============================================================

    requestData: ->
      @montadoraCollection = new MontadoraCollection
      @montadoraCollection.fetch()

    cacheDOMElements: ->
      @DOMElements =
        $modelo    : @$ '#modelo'
        $montadora : @$ '#montadora'
        $preco     : @$ '#preco'
