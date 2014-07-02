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

    container  : '#module-container'
    autoRender : yes
    template   : require 'text!templates/carro/form.html'
    validationRules: {}

    # Override Methods
    # =============================================================
    initialize: ->
      @requestData().done => super

    fillModel: ->
      @model.set 'modelo', @$('#modelo').val()

    # Additional Methods
    # =============================================================

    requestData: ->
      @montadoraCollection = new MontadoraCollection
      @montadoraCollection.fetch()