function calculateTotal() {
    let subtotal = parseFloat(document.getElementById('subtotal').value);
    let tipp = parseFloat(document.getElementById('tipPercent').value);
    let tip = (subtotal * tipp) / 100;
    let total = subtotal + tip;
    document.getElementById('result').value = total;
}
