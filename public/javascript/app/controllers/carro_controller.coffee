define [
  'core'
  'models/carro_model'
  'collections/carro_collection'
  'views/carro/list_view'
  'views/carro/create_view'
  'views/carro/edit_view'
  ], () ->

  # Imports
  # =============================================================

  Core       = require 'core'
  Model      = require 'models/carro_model'
  Collection = require 'collections/carro_collection'
  ListView   = require 'views/carro/list_view'
  CreateView = require 'views/carro/create_view'
  EditView   = require 'views/carro/edit_view'

  # CarroController class
  # =============================================================

  class CarroController extends Core.CrudController

    logPrefix: 'CarroController'

    # Classes
    listView        : ListView
    createView      : CreateView
    editView        : EditView
    collectionClass : Collection
    modelClass      : Model

    # Títulos
    indexTitle  : 'Cadastro de Carros'
    createTitle : 'Adicionar carro'
    editTitle   : 'Edição de carro'

    historyURL: (options={}) -> '!/carro'