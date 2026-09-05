let selectedPlan = 'free';
let selectedPaymentMethod = 'card';

const currencyRates = {
  USD: 1, INR: 83.5, GBP: 0.79, EUR: 0.92, CAD: 1.36, AUD: 1.53,
  JPY: 149.5, BRL: 4.97, KRW: 1320, SGD: 1.34, AED: 3.67,
  SAR: 3.75, ZAR: 18.2, MXN: 17.15, NGN: 1540, PKR: 285,
  BDT: 110, PHP: 56
};

const currencySymbols = {
  USD: '$', INR: '₹', GBP: '£', EUR: '€', CAD: 'C$', AUD: 'A$',
  JPY: '¥', BRL: 'R$', KRW: '₩', SGD: 'S$', AED: 'د.إ',
  SAR: '﷼', ZAR: 'R', MXN: 'Mex$', NGN: '₦', PKR: '₨',
  BDT: '৳', PHP: '₱'
};

const basePrices = { pro: 3.34, enterprise: 9.99 };

let currentCurrency = 'INR';
let currentSymbol = '₹';

function getPriceInCurrency(plan, currency) {
  const usdPrice = basePrices[plan];
  const rate = currencyRates[currency] || 1;
  const converted = usdPrice * rate;
  if (currency === 'JPY' || currency === 'KRW' || currency === 'NGN') {
    return Math.round(converted);
  }
  return parseFloat(converted.toFixed(2));
}

function formatPrice(amount, symbol) {
  if (currency === 'JPY' || currency === 'KRW') {
    return `${symbol}${amount.toLocaleString()}`;
  }
  return `${symbol}${amount.toFixed(2)}`;
}

function updateAllPrices() {
  const isYearly = document.getElementById('pricingToggle')?.checked;
  const multiplier = isYearly ? 0.8 : 1;

  const proPrice = getPriceInCurrency('pro', currentCurrency);
  const enterprisePrice = getPriceInCurrency('enterprise', currentCurrency);
  const proFinal = Math.round(proPrice * multiplier * 100) / 100;
  const enterpriseFinal = Math.round(enterprisePrice * multiplier * 100) / 100;

  document.getElementById('proPrice').textContent = `${currentSymbol}${proFinal.toLocaleString()}`;
  document.getElementById('enterprisePrice').textContent = `${currentSymbol}${enterpriseFinal.toLocaleString()}`;

  if (selectedPlan !== 'free') {
    updateOrderSummary();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  updateNavbar();

  const countryFilter = document.getElementById('countryFilter');
  const pricingToggle = document.getElementById('pricingToggle');
  const monthlyLabel = document.getElementById('monthlyLabel');
  const yearlyLabel = document.getElementById('yearlyLabel');

  countryFilter?.addEventListener('change', (e) => {
    const option = e.target.options[e.target.selectedIndex];
    currentCurrency = option.dataset.currency;
    currentSymbol = option.dataset.symbol;
    updateAllPrices();
  });

  pricingToggle?.addEventListener('change', () => {
    if (pricingToggle.checked) {
      monthlyLabel.classList.remove('active');
      yearlyLabel.classList.add('active');
    } else {
      monthlyLabel.classList.add('active');
      yearlyLabel.classList.remove('active');
    }
    updateAllPrices();
  });

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const faqItem = question.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const icon = question.querySelector('i');
      faqItem.classList.toggle('active');
      if (faqItem.classList.contains('active')) {
        answer.style.maxHeight = answer.scrollHeight + 'px';
        icon.style.transform = 'rotate(180deg)';
      } else {
        answer.style.maxHeight = '0';
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  const cardNumber = document.getElementById('cardNumber');
  if (cardNumber) {
    cardNumber.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      val = val.replace(/(.{4})/g, '$1 ').trim();
      e.target.value = val;
    });
  }

  const cardExpiry = document.getElementById('cardExpiry');
  if (cardExpiry) {
    cardExpiry.addEventListener('input', (e) => {
      let val = e.target.value.replace(/\D/g, '');
      if (val.length >= 2) val = val.slice(0, 2) + '/' + val.slice(2);
      e.target.value = val;
    });
  }
});

function selectPlan(plan) {
  selectedPlan = plan;
  document.querySelectorAll('.pricing-card').forEach(c => c.classList.remove('selected'));
  document.getElementById(plan + 'Card')?.classList.add('selected');

  const freeBtn = document.getElementById('freeBtn');
  const proBtn = document.getElementById('proBtn');
  const enterpriseBtn = document.getElementById('enterpriseBtn');

  freeBtn.textContent = 'Current Plan';
  proBtn.innerHTML = '<i class="fas fa-crown"></i> Get Pro';
  enterpriseBtn.textContent = 'Contact Sales';

  if (plan === 'free') {
    freeBtn.textContent = 'Selected';
    document.getElementById('paymentSection').style.display = 'none';
  } else if (plan === 'pro') {
    proBtn.textContent = 'Selected';
    document.getElementById('paymentSection').style.display = 'block';
    document.getElementById('selectedPlanName').textContent = 'Pro';
  } else {
    enterpriseBtn.textContent = 'Selected';
    document.getElementById('paymentSection').style.display = 'block';
    document.getElementById('selectedPlanName').textContent = 'Enterprise';
  }

  updateOrderSummary();
}

function updateOrderSummary() {
  const isYearly = document.getElementById('pricingToggle')?.checked;
  const multiplier = isYearly ? 0.8 : 1;
  const period = isYearly ? 'Yearly' : 'Monthly';

  const baseAmount = getPriceInCurrency(selectedPlan, currentCurrency);
  const amount = Math.round(baseAmount * multiplier * 100) / 100;
  const tax = Math.round(amount * 0.08 * 100) / 100;
  const total = Math.round((amount + tax) * 100) / 100;

  const planLabel = selectedPlan === 'pro' ? 'Pro' : 'Enterprise';
  document.getElementById('selectedPlanPrice').textContent = `${currentSymbol}${amount.toLocaleString()}/${isYearly ? 'mo' : 'month'}`;
  document.getElementById('summaryPlan').textContent = `${planLabel} (${period})`;
  document.getElementById('summaryAmount').textContent = `${currentSymbol}${amount.toLocaleString()}`;
  document.getElementById('summaryTax').textContent = `${currentSymbol}${tax.toLocaleString()}`;
  document.getElementById('summaryTotal').textContent = `${currentSymbol}${total.toLocaleString()}`;

  const bankRef = document.getElementById('bankRef');
  if (bankRef) {
    bankRef.textContent = `LC-${selectedPlan.toUpperCase()}-${Date.now().toString().slice(-6)}`;
  }

  const payBtn = document.getElementById('payBtn');
  if (payBtn) {
    payBtn.innerHTML = `<i class="fas fa-lock"></i> Pay ${currentSymbol}${total.toLocaleString()}`;
  }
}

function selectPaymentMethod(method) {
  selectedPaymentMethod = method;
  document.querySelectorAll('.method-tab').forEach(t => t.classList.remove('active'));
  event.target.closest('.method-tab').classList.add('active');

  document.getElementById('cardForm').style.display = method === 'card' ? 'block' : 'none';
  document.getElementById('paypalForm').style.display = method === 'paypal' ? 'block' : 'none';
  document.getElementById('bankForm').style.display = method === 'bank' ? 'block' : 'none';
}

function processPayment() {
  if (selectedPlan === 'free') {
    toast.info('You are already on the Free plan');
    return;
  }

  if (selectedPaymentMethod === 'card') {
    const cardNum = document.getElementById('cardNumber').value.replace(/\s/g, '');
    const expiry = document.getElementById('cardExpiry').value;
    const cvv = document.getElementById('cardCvv').value;
    const name = document.getElementById('cardName').value;

    if (!cardNum || cardNum.length < 16) {
      toast.error('Please enter a valid card number');
      return;
    }
    if (!expiry || expiry.length < 5) {
      toast.error('Please enter a valid expiry date');
      return;
    }
    if (!cvv || cvv.length < 3) {
      toast.error('Please enter a valid CVV');
      return;
    }
    if (!name.trim()) {
      toast.error('Please enter cardholder name');
      return;
    }
  }

  const payBtn = document.getElementById('payBtn');
  payBtn.disabled = true;
  payBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';

  setTimeout(() => {
    payBtn.disabled = false;
    payBtn.innerHTML = '<i class="fas fa-lock"></i> Pay Now';

    const totalText = document.getElementById('summaryTotal').textContent;
    const planName = selectedPlan === 'pro' ? 'Pro' : 'Enterprise';

    document.getElementById('modalPlanName').textContent = planName;
    document.getElementById('paymentModal').classList.add('active');

    if (AuthService.isLoggedIn()) {
      const user = AuthService.getCurrentUser();
      if (user) {
        user.plan = selectedPlan;
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    }

    toast.success(`Welcome to ${planName}! Payment of ${totalText} successful.`);
  }, 2000);
}

function closeModal() {
  document.getElementById('paymentModal').classList.remove('active');
}

const featureDetails = {
  ai: {
    title: 'AI Agents',
    icon: 'fas fa-robot',
    content: `
      <div style="margin-bottom:16px">
        <p style="color:var(--text-secondary);margin-bottom:16px">Unlock the full power of our AI-powered coding assistants:</p>
        <ul style="list-style:none;padding:0">
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
            <i class="fas fa-lightbulb" style="color:var(--accent);margin-top:3px"></i>
            <div><strong>Hint Agent</strong><br><span style="color:var(--text-secondary);font-size:13px">Get step-by-step hints without spoiling the solution</span></div>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
            <i class="fas fa-code" style="color:var(--accent);margin-top:3px"></i>
            <div><strong>Code Review Agent</strong><br><span style="color:var(--text-secondary);font-size:13px">Get your code reviewed with optimization suggestions</span></div>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
            <i class="fas fa-bug" style="color:var(--accent);margin-top:3px"></i>
            <div><strong>Debug Agent</strong><br><span style="color:var(--text-secondary);font-size:13px">Find and fix bugs in your code instantly</span></div>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:flex-start">
            <i class="fas fa-graduation-cap" style="color:var(--accent);margin-top:3px"></i>
            <div><strong>Learning Agent</strong><br><span style="color:var(--text-secondary);font-size:13px">Understand concepts with detailed explanations</span></div>
          </li>
          <li style="padding:10px 0;display:flex;gap:12px;align-items:flex-start">
            <i class="fas fa-infinity" style="color:var(--easy);margin-top:3px"></i>
            <div><strong>Unlimited Queries</strong><br><span style="color:var(--text-secondary);font-size:13px">Free plan: 3 queries/day → Pro: Unlimited</span></div>
          </li>
        </ul>
      </div>
    `
  },
  company: {
    title: 'Company Tags',
    icon: 'fas fa-building',
    content: `
      <div style="margin-bottom:16px">
        <p style="color:var(--text-secondary);margin-bottom:16px">Access company-specific problem sets:</p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fab fa-google" style="font-size:20px;color:#4285f4"></i><br><small>Google</small></div>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fab fa-amazon" style="font-size:20px;color:#ff9900"></i><br><small>Amazon</small></div>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fab fa-meta" style="font-size:20px;color:#0081fb"></i><br><small>Meta</small></div>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fab fa-microsoft" style="font-size:20px;color:#00a4ef"></i><br><small>Microsoft</small></div>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fab fa-apple" style="font-size:20px;color:#a2aaad"></i><br><small>Apple</small></div>
          <div style="background:var(--bg-tertiary);padding:12px;border-radius:8px;text-align:center"><i class="fas fa-chart-line" style="font-size:20px;color:#536dfe"></i><br><small>Goldman Sachs</small></div>
        </div>
        <p style="color:var(--text-secondary);font-size:13px;margin-top:16px"><i class="fas fa-lock" style="margin-right:4px"></i> Free plan shows limited company tags. Pro unlocks all.</p>
      </div>
    `
  },
  analytics: {
    title: 'Analytics Dashboard',
    icon: 'fas fa-chart-bar',
    content: `
      <div style="margin-bottom:16px">
        <p style="color:var(--text-secondary);margin-bottom:16px">Track your progress with detailed insights:</p>
        <ul style="list-style:none;padding:0">
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-chart-line" style="color:var(--easy);font-size:18px;width:24px;text-align:center"></i>
            <span>Solve rate trends over time</span>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-clock" style="color:var(--medium);font-size:18px;width:24px;text-align:center"></i>
            <span>Time spent per problem category</span>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-trophy" style="color:var(--accent);font-size:18px;width:24px;text-align:center"></i>
            <span>Strength & weakness analysis</span>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-fire" style="color:var(--hard);font-size:18px;width:24px;text-align:center"></i>
            <span>Streak tracking & milestones</span>
          </li>
          <li style="padding:10px 0;display:flex;gap:12px;align-items:center">
            <i class="fas fa-download" style="color:var(--text-secondary);font-size:18px;width:24px;text-align:center"></i>
            <span>Export progress reports as PDF</span>
          </li>
        </ul>
      </div>
    `
  },
  support: {
    title: 'Priority Support',
    icon: 'fas fa-headset',
    content: `
      <div style="margin-bottom:16px">
        <p style="color:var(--text-secondary);margin-bottom:16px">Get help when you need it most:</p>
        <ul style="list-style:none;padding:0">
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-bolt" style="color:var(--accent);font-size:18px;width:24px;text-align:center"></i>
            <span><strong>2x faster</strong> response time</span>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-comments" style="color:var(--easy);font-size:18px;width:24px;text-align:center"></i>
            <span>Direct chat with support team</span>
          </li>
          <li style="padding:10px 0;border-bottom:1px solid var(--border);display:flex;gap:12px;align-items:center">
            <i class="fas fa-video" style="color:#0081fb;font-size:18px;width:24px;text-align:center"></i>
            <span>Video call support sessions</span>
          </li>
          <li style="padding:10px 0;display:flex;gap:12px;align-items:center">
            <i class="fas fa-star" style="color:var(--medium);font-size:18px;width:24px;text-align:center"></i>
            <span>Dedicated account manager (Enterprise)</span>
          </li>
        </ul>
      </div>
    `
  }
};

function showFeatureDetail(feature) {
  const data = featureDetails[feature];
  if (!data) return;
  document.getElementById('featureModalTitle').innerHTML = `<i class="${data.icon}" style="color:var(--accent);margin-right:8px"></i> ${data.title}`;
  document.getElementById('featureModalBody').innerHTML = data.content;
  document.getElementById('featureModal').classList.add('active');
}

function closeFeatureModal() {
  document.getElementById('featureModal').classList.remove('active');
}
