function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let product = document.getElementById("product").value;
  let phone = document.getElementById("phone").value;

  let message =
`🛒 New Order Received!
Name: ${name}
Phone: ${phone}
Product: ${product}`;

  let whatsappNumber = "+44 7915007157";

  let url = `https://wa.me/${+44 7915 007157}?text=${encodeURIComponent(Hi I Ordered From You.)}`;

  window.open(url, "_blank");
}