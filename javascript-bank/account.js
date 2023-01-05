/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (amount < 0 && typeof amount !== 'number') {
    return false;
  } else if (amount > 0) {
    return true;
  }
};
