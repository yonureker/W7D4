export const selectAllPokemon = (state) => {
  return Object.values(state.entities.pokemon);
};

// export const selectAPokemon = (state) => {
//   return Object.values(state.entities.pokemon[state.id]);
// };