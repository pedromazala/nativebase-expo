/**
 * Created by Pedro Mazala on 20/07/2017.
 */
let count = 0;

export default (state = count, action) => {
  switch (action.type) {
    case "Increment":
      count++;
      break;
    case "Decrement":
      count--;
      break;
  }
  return count;
}
