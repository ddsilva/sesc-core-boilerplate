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
    autoRender : yes
    template   : require 'text!templates/carro/form.html'
    validationRules: {}

    # Override Methods
    # =============================================================
    initialize: ->
      @requestData().done => super

    getTemplateData: ->
      _.extend super,
        montadoras: _.generateOptions @montadoraCollection

    fillForm: ->
      @$('#modelo').val @model.get 'modelo'

    fillModel: ->
      @model.set 'modelo', @$('#modelo').val()

    # Additional Methods
    # =============================================================

    requestData: ->
      @montadoraCollection = new MontadoraCollection
      @montadoraCollection.fetch()