// utils/sendEmail.js
import nodemailer from "nodemailer";

export const sendOrderConfirmationEmail = async (order) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "anibashakeel73@gmail.com",
      pass: "rjalsfqkfzxfgduc", // App Password from Gmail
    },
  });

  const itemsList = order.items.map(item =>
    `<li>${item.name} - ${item.quantity} × $${item.price}</li>`
  ).join("");

  const mailOptions = {
    from: "anibashakeel73@gmail.com",
    to: order.customer.email,
    subject: `Order Confirmation - Order #${order.orderNumber}`,
    html: `
      <h3>Thank you for your order, ${order.customer.name}!</h3>
      <p><strong>Order Number:</strong> ${order.orderNumber}</p>
      <p><strong>Total:</strong> $${order.total}</p>
      <p><strong>Shipping Address:</strong> ${order.customer.address}</p>
      <h4>Items Ordered:</h4>
      <ul>${itemsList}</ul>
    `,
  };

  await transporter.sendMail(mailOptions);
};
