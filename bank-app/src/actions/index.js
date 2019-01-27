export function withdrawMoney(amount) {
  return {
    type: "WITHDRAW_MONEY",
    amount
  };
}
