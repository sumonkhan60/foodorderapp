function placeOrder() {
    document.getElementById('printorder').style.display = "block";
    document.getElementById('order').style.display = "none";

    var customerName = document.getElementById("customer_name").value;
    var customerMobile = document.getElementById("customer_mobile").value;
    o_burger = document.getElementById("burger").value;
    o_sandwitch = document.getElementById("sandwitch").value;
    addone_drinks = document.getElementById("drinks").value;
    addone_milkshake = document.getElementById("milkshake").value;

    var orderitem = "";
    var addoneitem = "";
    var itemcost = 0;
    var addonecost = 0;

    if(burger.checked) {
        itemcost = 150;
        orderitem = o_burger;
    }
    if(sandwitch.checked) {
        itemcost = 150;
        orderitem = o_sandwitch;
    }
    if(drinks.checked) {
        addonecost = 80;
        itemcost = itemcost + addonecost;
        addoneitem = addoneitem + addone_drinks + "<br>";
    }
    if(milkshake.checked) {
        addonecost = 100;
        itemcost = itemcost + addonecost;
        addoneitem = addoneitem + addone_milkshake + "<br>";
    }

    document.getElementById("name_data").innerHTML = customerName;
    document.getElementById("mobile_data").innerHTML = customerMobile;
    document.getElementById("orderitem_data").innerHTML = orderitem;
    document.getElementById("addoneitem_data").innerHTML = addoneitem;
    document.getElementById("cost_data").innerHTML = itemcost;
}