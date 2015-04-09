(function() {
  define(['jquery.mockjax'], function() {
    var carIndex, carroIdPattern, carroPattern, carros, montadoraPattern, montadoras;
    montadoras = [
      {
        id: 1,
        nome: 'Fiat'
      }, {
        id: 2,
        nome: 'Chevrolet'
      }, {
        id: 3,
        nome: 'Volkswagen'
      }, {
        id: 4,
        nome: 'Ford'
      }, {
        id: 5,
        nome: 'Honda'
      }, {
        id: 6,
        nome: 'Toyota'
      }
    ];
    carros = [
      {
        id: 1,
        montadora: montadoras[0],
        modelo: 'Pálio Fire',
        preco: '12000,00'
      }, {
        id: 2,
        montadora: montadoras[4],
        modelo: 'Civic',
        preco: '45000,00'
      }
    ];
    carIndex = 3;
    montadoraPattern = '/api/montadora';
    carroPattern = '/api/carro';
    carroIdPattern = /^\/api\/carro\/([\d]+)$/;
    return $.mockjax(function(settings) {
      var carro, id, montadoraId, response;
      if (settings.url === montadoraPattern) {
        response = montadoras;
      } else if (settings.url === carroPattern) {
        if (settings.type === 'POST') {
          carro = settings.data;
          montadoraId = carro.montadora;
          carro.montadora = _.find(montadoras, function(m) {
            return m.id + '' === montadoraId;
          });
          carro.id = carIndex++;
          carros.push(carro);
          response = carro;
        } else {
          response = carros;
        }
      } else if (settings.url.match(carroIdPattern)) {
        id = parseInt(settings.url.match(carroIdPattern)[1]);
        carro = _.find(carros, function(c) {
          return c.id === id;
        });
        if (settings.type === 'PUT') {
          montadoraId = settings.data.montadora;
          settings.data.montadora = _.find(montadoras, function(m) {
            return m.id + '' === montadoraId;
          });
          _.extend(carro, settings.data);
        } else if (settings.type === 'POST' && settings.data._method === 'DELETE') {
          carros = _.removeItem(carros, carro);
        }
        response = carro;
      }
      if (response) {
        return {
          responseText: response
        };
      }
    });
  });

}).call(this);
