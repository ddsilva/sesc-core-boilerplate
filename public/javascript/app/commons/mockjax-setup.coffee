define [
  'jquery.mockjax'
], ->

  # Collection te montadoras
  montadoras = [
      id   : 1
      nome : 'Fiat'
    ,
      id   : 2
      nome : 'Chevrolet'
    ,
      id   : 3
      nome : 'Volkswagen'
    ,
      id   : 4
      nome : 'Ford'
    ,
      id   : 5
      nome : 'Honda'
    ,
      id   : 6
      nome : 'Toyota'
  ]

  # Collection te carros
  carros = [{
    id        : 1
    montadora : montadoras[0]
    modelo    : 'Pálio Fire'
    preco     : '12000,00'
  },{
    id        : 2
    montadora : montadoras[4]
    modelo    : 'Civic'
    preco     : '45000,00'
  }]

  # Indíce de controle dos carros
  carIndex = 3

  # Padrões de url
  montadoraPattern = '/api/montadora'
  carroPattern     = '/api/carro'
  carroIdPattern   = /^\/api\/carro\/([\d]+)$/

  # Configurações do mockjax
  $.mockjax (settings) ->
    # GET /api/montadora
    if settings.url is montadoraPattern
      response = montadoras
    else if settings.url is carroPattern
      # POST /api/carro
      if settings.type is 'POST'
        carro           = settings.data
        montadoraId     = carro.montadora
        carro.montadora = _.find montadoras, (m) -> m.id + '' is montadoraId
        carro.id        = carIndex++

        carros.push carro

        response = carro
      # GET /api/carro
      else
        response = carros
    else if settings.url.match carroIdPattern
      id    = parseInt settings.url.match(carroIdPattern)[1]
      carro = _.find carros, (c) -> c.id is id

      # PUT /api/carros/:id
      if settings.type is 'PUT'
        montadoraId             = settings.data.montadora
        settings.data.montadora = _.find montadoras, (m) -> m.id + '' is montadoraId
        _.extend carro, settings.data
      # DELETE /api/carros/:id
      else if settings.type is 'POST' and settings.data._method is 'DELETE'
        carros = _.removeItem carros, carro

      response = carro

    if response
      return responseText: response
