import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';

export function processPayment(paymentMethod, couponCode = null) {

  const items = getCartItems();
  const subtotal = getCartTotal();

  if (items.length === 0) {
    return {
      status: "failed",
      message: "Cart is empty"
    };
  }

  if (!validatePaymentMethod(paymentMethod)) {
    return {
      status: "failed",
      message: "Invalid payment method"
    };
  }

  let discount = 0;
  let total = subtotal;

  if (couponCode) {
    const discountResult = applyDiscount(subtotal, couponCode, items);
    discount = discountResult.discount;
    total = discountResult.finalTotal;
  }

  items.forEach(item => {
    reduceStock(item.id, item.quantity);
  });

  clearCart();

  return {
    orderId: generateOrderId(),
    items: items,
    subtotal: subtotal,
    discount: discount,
    total: total,
    paymentMethod: paymentMethod,
    status: "success",
    message: "Payment successful"
  };
}

export function validatePaymentMethod(method) {
  const methods = ['card', 'upi', 'cod'];
  return methods.includes(method);
}

function generateOrderId() {
  return 'ORD' + Date.now();
}