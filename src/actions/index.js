export const USER_SELECTED = "USER_SELECTED";
export function SelectUser(user) {
  console.log("user: ", user);
  return {
    type: USER_SELECTED,
    payload: user
  };
}
