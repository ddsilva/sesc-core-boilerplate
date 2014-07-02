define [
  'core'
  'models/montadora_model'
  ], () ->

  # Imports
  # =============================================================

  Core  = require 'core'
  Model = require 'models/montadora_model'

  # MontadoraCollection class.
  # =============================================================

  class MontadoraCollection extends Core.SyncCollection

    url: '/api/montadora'
    model: Model