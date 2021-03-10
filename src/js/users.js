export default function sortByHealth(users) {
  return users.sort((a, b) => b.health - a.health);
}
