export default function sortCharacters(characterList) {
  characterList.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    return 1;
  });
  return characterList;
}
