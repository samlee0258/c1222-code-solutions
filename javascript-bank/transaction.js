/* exported Transaction */
function Transaction(type, amount) {
  this.type = type;
  this.amount = amount;
}

Transaction.prototype.getType = function () {
  var type = this.type;
  return type;
};

Transaction.prototype.getAmount = function () {
  var amount = this.amount;
  return amount;
};
