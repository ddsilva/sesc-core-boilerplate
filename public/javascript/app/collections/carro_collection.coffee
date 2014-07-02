define [
  'core'
  'models/carro_model'
  ], () ->

  # Imports
  # =============================================================

  Core  = require 'core'
  Model = require 'models/carro_model'

  # CarroCollection class.
  # =============================================================

  class CarroCollection extends Core.SyncCollection

    url: '/api/carro'
    model: Model