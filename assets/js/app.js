var curr_bln = 1240;
curr_bln = parseInt(curr_bln);

function balance_transfer() {

    var deposit = document.getElementById('deposit').value;
    if (deposit == "") {
    alert("Enter Amount");
    return false;
  }
    deposit = parseInt(deposit);
    document.getElementById('deposit-status').innerHTML = ("$") + deposit;
    document.getElementById('balance-status').innerHTML  = deposit+curr_bln;
}

function withdraw_bln() {
    var withdraw = document.getElementById('withdraw').value;
    if (withdraw == "") {
    alert("Enter Amount");
    return false;
  }
    withdraw = parseInt(withdraw);
    document.getElementById('withdraw-status').innerHTML = ("$") + withdraw;
    document.getElementById('balance-status').innerHTML  = withdraw+curr_bln;
}
