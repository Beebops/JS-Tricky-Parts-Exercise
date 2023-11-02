function createAccount(PIN, balance) {
  const bankAccount = {
    PIN,
    balance,

    checkBalance(enteredPIN) {
      return enteredPIN === this.PIN
        ? `Current balance: $${this.balance}`
        : 'Invaid PIN'
    },

    deposit(enteredPIN, depositAmt) {
      return enteredPIN === this.PIN
        ? `Succesfully deposited $${depositAmt}. Current balance: $${(this.balance +=
            depositAmt)}.`
        : 'Invaid PIN'
    },

    withdrawal(enteredPIN, withdrawalAmt) {
      if (enteredPIN === this.PIN && withdrawalAmt <= this.balance) {
        this.balance -= withdrawalAmt
        return `Succesfully withdrew $${withdrawalAmt}. Current balance: $${this.balance}.`
      } else if (withdrawalAmt > this.balance) {
        return `Withdrawal amount exceeds account balance. Canceling transaction.`
      } else {
        return 'Invalid PIN.'
      }
    },

    changePIN(oldPIN, newPIN) {
      return oldPIN === this.PIN
        ? ((this.PIN = newPIN), 'PIN successfully changed.')
        : 'Invalid PIN.'
    },
  }

  return function () {
    return bankAccount
  }
}

const makeAccount = createAccount(1234, 100)
const account = makeAccount()
