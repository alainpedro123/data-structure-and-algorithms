// Linear Search.

var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

// 1) first way
beasts.indexOf('Godzilla');

// 2) second way
beasts.findIndex(function(item){
  return item === 'Godzilla';
});

// 3) third way
beasts.find(function(item){
  return item === 'Godzilla';
})

// 4) fourth way
beasts.includes('Godzilla')
