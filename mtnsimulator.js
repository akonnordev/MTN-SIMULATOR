const momoUserName = "Bern";
const startMomo = Number(
  prompt(`Please make a selection
1. Transfer Momo
2. Deposit
3. Allow CashOut
4. My wallet`)
);
console.log(startMomo);
switch (startMomo) {
  case 1:
    Number(
      prompt(`Please make a selection
    1. Momo User
    2. Other Networks`)
    );
    break;
  case 2:
    prompt(`
    1. Make Deposit`);
    //alert("Go to Accra");
    //console.log("Go to Accra")
    break;
  case 3:
    prompt(`
    1. Allow Cashout`);
    //alert("Go to Circle");
    //console.log("Go to Circle");
    break;
  case 4:
    prompt(`
    1. My Wallet`);
    //alert("Go to Church");
    //console.log("Go to Church");
    break;
  default:
    alert("Please select a valid option");

  //console.log("Not a valid day");
}
