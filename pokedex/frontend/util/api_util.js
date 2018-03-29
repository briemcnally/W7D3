export const fetchAllPokemon = () => {
  return $.ajax({
    url: '/api/pokemon',
    method: 'GET',
    dataType: 'json'
  });
};

export const fetchPokemon = (pokemon) => {
  return $.ajax({
    url: `/api/pokemon/${pokemon}`,
    method: 'GET',
    dataType: 'json'
  });
};
