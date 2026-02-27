(function () {
  'use strict';

  var keyInput = document.getElementById('rp-key');
  var orderInput = document.getElementById('rp-order');
  var amountInput = document.getElementById('rp-amount');
  var descInput = document.getElementById('rp-desc');
  var payBtn = document.getElementById('rp-pay-btn');
  var resultEl = document.getElementById('rp-result');

  function showResult(message, isSuccess) {
    resultEl.textContent = message;
    resultEl.className = 'result ' + (isSuccess ? 'success' : 'error');
    resultEl.style.display = 'block';
  }

  function hideResult() {
    resultEl.style.display = 'none';
  }

  payBtn.addEventListener('click', function () {
    var key = (keyInput && keyInput.value) ? keyInput.value.trim() : '';
    var orderId = (orderInput && orderInput.value) ? orderInput.value.trim() : '';
    var amount = amountInput ? parseInt(amountInput.value, 10) : 100;
    var description = (descInput && descInput.value) ? descInput.value.trim() : 'Test payment';

    hideResult();

    if (!key) {
      showResult('Please enter your Razorpay Key ID.', false);
      return;
    }
    if (!orderId) {
      showResult('Please enter an Order ID (create an order from your backend first).', false);
      return;
    }
    if (isNaN(amount) || amount < 100) {
      showResult('Amount must be at least 100 paise.', false);
      return;
    }

    if (typeof Razorpay === 'undefined') {
      showResult('Razorpay script failed to load. Check your connection.', false);
      return;
    }

    var options = {
      key: key,
      order_id: orderId,
      amount: amount,
      currency: 'INR',
      description: description || 'Test payment',
      config: {
        display: {
          blocks: {
            upi: {
              name: 'Pay using UPI',
              instruments: [{ method: 'upi' }]
            },
            other: {
              name: 'Other payment methods',
              instruments: [
                { method: 'card' },
                { method: 'netbanking' },
                { method: 'wallet' }
              ]
            }
          },
          sequence: ['block.upi', 'block.other'],
          preferences: {
            show_default_blocks: false
          }
        }
      },
      handler: function (response) {
        showResult(
          'Payment success. payment_id: ' + (response.razorpay_payment_id || '') +
          ', order_id: ' + (response.razorpay_order_id || ''),
          true
        );
        console.log('Razorpay success', response);
      },
      modal: {
        ondismiss: function () {
          showResult('Checkout closed or payment failed.', false);
        }
      }
    };

    var rzp = new Razorpay(options);
    rzp.on('payment.failed', function (response) {
      showResult('Payment failed: ' + (response.error && response.error.description ? response.error.description : 'Unknown error'), false);
      console.error('Razorpay payment.failed', response);
    });
    rzp.open();
  });
})();
