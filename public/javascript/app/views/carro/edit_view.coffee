define [
  'core',
  'collections/montadora_collection'
  'text!templates/carro/form.html'
], () ->

  # Imports
  # =============================================================

  Core                = require 'core'
  MontadoraCollection = require 'collections/montadora_collection'

  # CarroEditView class
  # =============================================================

  class CarroEditView extends Core.EditView

    # Override Attributes
    # =============================================================

    container  : '#module-container'
    template   : require 'text!templates/carro/form.html'
    validationRules:
      montadora :
        required:true
      modelo:
        required:true
        maxlength:10
      preco:
        required:true

    # Override Methods
    # =============================================================
    initialize: ->
      super
      @requestData().done => @render()

    getTemplateData: ->
      _.extend super,
        montadoras: _.generateOptions @montadoraCollection

    fillForm: ->
      @cacheDOMElements()
      @DOMElements.$modelo    .val @model.get 'modelo'
      @DOMElements.$montadora .val @model.get('montadora').id
      @DOMElements.$preco     .val @model.get 'preco'

    fillModel: ->
      @model.set 'modelo'   , @DOMElements.$modelo    .val()
      @model.set 'montadora', @DOMElements.$montadora .val()
      @model.set 'preco'    , @DOMElements.$preco     .val()

    # Additional Methods
    # =============================================================

    requestData: ->
      @montadoraCollection = new MontadoraCollection
      @montadoraCollection.fetch()

    cacheDOMElements: ->
      @DOMElements =
        $modelo     : @$ '#modelo'
        $montadora  : @$ '#montadora'
        $preco      : @$ '#preco'



