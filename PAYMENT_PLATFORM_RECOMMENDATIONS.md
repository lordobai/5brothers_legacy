# 💳 Payment Platform Recommendations

**Payment gateway recommendations for accepting both USD and NGN (Nigerian Naira) card payments.**

---

## 🎯 Requirements

- ✅ Accept USD (Dollar) cards
- ✅ Accept NGN (Naira) cards
- ✅ Support for Nigerian market
- ✅ Suitable for nonprofits
- ✅ Easy integration with Next.js
- ✅ Recurring payments support (optional)

---

## 🏆 Top Recommendations

### Option 1: Paystack ⭐ (Best for Nigeria)

**Why Paystack?**
- ✅ **Native NGN Support** - Built for Nigeria, excellent NGN card support
- ✅ **USD Support** - Accepts USD cards from international donors
- ✅ **Nonprofit-Friendly** - Lower fees for nonprofits
- ✅ **Easy Integration** - Great Next.js/React SDK
- ✅ **Recurring Payments** - Subscription/donation support
- ✅ **Local Expertise** - Nigerian company, understands local market
- ✅ **Bank Transfers** - Also supports bank transfers (NGN)

**Currency Support:**
- ✅ NGN (Nigerian Naira) - Full support
- ✅ USD (US Dollar) - Full support
- ✅ Other currencies available

**Pricing:**
- **NGN Transactions**: 1.5% + ₦100 per transaction
- **USD Transactions**: 3.9% + $0.15 per transaction
- **Nonprofit Discount**: Available (contact for rates)

**Integration:**
```bash
npm install paystack
```

**Best For:** Nigerian nonprofits, local + international donors

**Website:** [paystack.com](https://paystack.com)

---

### Option 2: Flutterwave ⭐ (Great Alternative)

**Why Flutterwave?**
- ✅ **Multi-Currency** - Supports 150+ currencies including NGN and USD
- ✅ **African Focus** - Built for African markets
- ✅ **International Cards** - Excellent USD/international card support
- ✅ **Nonprofit Rates** - Special rates for nonprofits
- ✅ **Multiple Payment Methods** - Cards, bank transfers, mobile money
- ✅ **Recurring Payments** - Subscription support

**Currency Support:**
- ✅ NGN (Nigerian Naira) - Full support
- ✅ USD (US Dollar) - Full support
- ✅ 150+ other currencies

**Pricing:**
- **NGN Transactions**: 1.4% + ₦100 per transaction
- **USD Transactions**: 3.8% + $0.15 per transaction
- **Nonprofit Discount**: Available

**Integration:**
```bash
npm install flutterwave-node-v3
```

**Best For:** African nonprofits, international reach

**Website:** [flutterwave.com](https://flutterwave.com)

---

### Option 3: Stripe (International Standard)

**Why Stripe?**
- ✅ **Global Leader** - Most trusted payment platform
- ✅ **USD Support** - Excellent USD card support
- ⚠️ **NGN Support** - Limited (not fully available in Nigeria)
- ✅ **Nonprofit Program** - Stripe for Nonprofits (discounted rates)
- ✅ **Recurring Payments** - Excellent subscription support
- ✅ **Developer-Friendly** - Best documentation and SDKs

**Currency Support:**
- ✅ USD (US Dollar) - Full support
- ⚠️ NGN (Nigerian Naira) - Limited (check current availability)
- ✅ 135+ other currencies

**Pricing:**
- **USD Transactions**: 2.9% + $0.30 per transaction
- **Nonprofit Discount**: Available through Stripe for Nonprofits
- **NGN**: May require workaround or alternative

**Integration:**
```bash
npm install @stripe/stripe-js
```

**Best For:** International nonprofits, if NGN not critical

**Website:** [stripe.com](https://stripe.com)

**Note:** Stripe's NGN support in Nigeria is limited. Consider using Stripe for USD and Paystack/Flutterwave for NGN if you need both.

---

## 📊 Comparison Table

| Feature | Paystack | Flutterwave | Stripe |
|---------|----------|----------|--------|
| **NGN Support** | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent | ⚠️ Limited |
| **USD Support** | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent | ⭐⭐⭐⭐⭐ Excellent |
| **Nigerian Market** | ⭐⭐⭐⭐⭐ Native | ⭐⭐⭐⭐⭐ Strong | ⭐⭐ Limited |
| **Nonprofit Rates** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Recurring Payments** | ✅ Yes | ✅ Yes | ✅ Yes |
| **Integration Ease** | ⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐ Easy | ⭐⭐⭐⭐⭐ Very Easy |
| **Documentation** | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐ Good | ⭐⭐⭐⭐⭐ Excellent |
| **Bank Transfers** | ✅ Yes (NGN) | ✅ Yes (Multi) | ❌ No |
| **Mobile Money** | ❌ No | ✅ Yes | ❌ No |

---

## 🎯 Recommendation for 5Brothers Legacy

### Primary Recommendation: **Paystack**

**Why Paystack is Best for You:**

1. **Perfect for Nigeria**
   - Native NGN support
   - Understands Nigerian market
   - Local bank integration

2. **USD Support**
   - Accepts international USD cards
   - Good for international donors
   - Multi-currency support

3. **Nonprofit-Friendly**
   - Lower fees for nonprofits
   - Good customer support
   - Nonprofit program available

4. **Easy Integration**
   - Great Next.js/React support
   - Good documentation
   - Active community

5. **Additional Features**
   - Bank transfers (NGN)
   - Recurring donations
   - Payment links
   - Invoicing

### Alternative: **Flutterwave**

**Choose Flutterwave if:**
- You need more currency options (150+)
- You want mobile money support
- You need broader African market coverage
- You prefer slightly lower fees

---

## 💰 Pricing Comparison (Example: $100 USD Donation)

| Platform | Fee Structure | Total Fee | You Receive |
|----------|--------------|-----------|-------------|
| **Paystack** | 3.9% + $0.15 | $4.05 | $95.95 |
| **Flutterwave** | 3.8% + $0.15 | $3.95 | $96.05 |
| **Stripe** | 2.9% + $0.30 | $3.20 | $96.80 |

**Note:** Nonprofit rates may be lower - contact each platform for nonprofit pricing.

---

## 🚀 Integration Steps (Paystack)

### Step 1: Create Paystack Account

1. Go to [paystack.com](https://paystack.com)
2. Sign up for an account
3. Complete business verification
4. Get your API keys:
   - **Test Keys** (for development)
   - **Live Keys** (for production)

### Step 2: Install Paystack SDK

```bash
npm install paystack
```

### Step 3: Add Environment Variables

**Local (`.env.local`):**
```env
PAYSTACK_PUBLIC_KEY=pk_test_xxxxxxxxxxxxx
PAYSTACK_SECRET_KEY=sk_test_xxxxxxxxxxxxx
```

**Production (Vercel):**
- Add same variables in Vercel Dashboard
- Use **live keys** for production

### Step 4: Create Payment API Route

Create `app/api/donations/pay/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import Paystack from 'paystack'

const paystack = Paystack(process.env.PAYSTACK_SECRET_KEY!)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, amount, currency, donorName, phone } = body

    // Initialize payment
    const payment = await paystack.transaction.initialize({
      email,
      amount: amount * 100, // Convert to kobo/cent
      currency: currency.toUpperCase(),
      metadata: {
        donorName,
        phone,
      },
    })

    // Save donation record (pending status)
    await prisma.donation.create({
      data: {
        donorName,
        email,
        phone,
        amount,
        currency: currency.toUpperCase(),
        paymentMethod: 'card',
        paymentReference: payment.data.reference,
        status: 'pending',
      },
    })

    return NextResponse.json({
      success: true,
      authorizationUrl: payment.data.authorization_url,
      reference: payment.data.reference,
    })
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Payment initialization failed', details: error.message },
      { status: 500 }
    )
  }
}
```

### Step 5: Handle Webhooks

Create `app/api/donations/webhook/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
  const body = await request.text()
  const signature = request.headers.get('x-paystack-signature')

  // Verify webhook signature
  const hash = crypto
    .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY!)
    .update(body)
    .digest('hex')

  if (hash !== signature) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
  }

  const event = JSON.parse(body)

  if (event.event === 'charge.success') {
    const { reference, amount, currency, customer } = event.data

    // Update donation status
    await prisma.donation.update({
      where: { paymentReference: reference },
      data: {
        status: 'completed',
        receiptSent: false,
      },
    })

    // TODO: Send receipt email
  }

  return NextResponse.json({ received: true })
}
```

### Step 6: Update Donation Page

Update `app/make-a-gift/page.tsx` to integrate Paystack:

```typescript
// Add Paystack script
import Script from 'next/script'

// In your component
const handleDonate = async (formData) => {
  const response = await fetch('/api/donations/pay', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })

  const { authorizationUrl } = await response.json()
  
  // Redirect to Paystack payment page
  window.location.href = authorizationUrl
}
```

---

## 🔄 Multi-Currency Setup

### Option 1: Single Gateway (Paystack or Flutterwave)

**Recommended:** Use one gateway for both currencies

**Advantages:**
- ✅ Simpler integration
- ✅ One set of API keys
- ✅ Unified dashboard
- ✅ Easier reconciliation

**Implementation:**
- Let user select currency (NGN or USD)
- Pass selected currency to payment gateway
- Gateway handles conversion and processing

### Option 2: Dual Gateway (Stripe + Paystack)

**Use Case:** If you need Stripe's features for USD

**Setup:**
- **Stripe** for USD transactions
- **Paystack** for NGN transactions
- Route payments based on selected currency

**Advantages:**
- ✅ Best of both worlds
- ✅ Stripe's excellent USD support
- ✅ Paystack's NGN support

**Disadvantages:**
- ⚠️ More complex integration
- ⚠️ Two dashboards to manage
- ⚠️ Two sets of API keys

---

## 📋 Implementation Checklist

### Setup
- [ ] Create Paystack account
- [ ] Complete business verification
- [ ] Get API keys (test and live)
- [ ] Install Paystack SDK
- [ ] Add environment variables

### Integration
- [ ] Create payment API route
- [ ] Create webhook handler
- [ ] Update donation page UI
- [ ] Add currency selector
- [ ] Test with test cards

### Testing
- [ ] Test NGN payment (test card)
- [ ] Test USD payment (test card)
- [ ] Test webhook handling
- [ ] Test donation record creation
- [ ] Test error handling

### Production
- [ ] Switch to live API keys
- [ ] Configure webhook URL in Paystack
- [ ] Test live payment (small amount)
- [ ] Set up email receipts
- [ ] Monitor transactions

---

## 🧪 Test Cards

### Paystack Test Cards

**NGN:**
- Card: `4084084084084081`
- CVV: `408`
- Expiry: Any future date
- PIN: `0000`

**USD:**
- Card: `5399838383838381`
- CVV: `883`
- Expiry: Any future date

### Flutterwave Test Cards

**NGN:**
- Card: `5531886652142950`
- CVV: `564`
- Expiry: Any future date
- PIN: `3310`

**USD:**
- Card: `4260012345678932`
- CVV: `123`
- Expiry: Any future date

---

## 🔒 Security Best Practices

1. **Never expose secret keys** - Keep them server-side only
2. **Verify webhook signatures** - Always validate Paystack webhooks
3. **Use HTTPS** - All payment pages must use HTTPS
4. **Validate amounts** - Double-check amounts server-side
5. **Log transactions** - Keep audit trail of all payments
6. **PCI Compliance** - Don't store card details, use payment gateway

---

## 📚 Resources

### Paystack
- **Website**: [paystack.com](https://paystack.com)
- **Documentation**: [paystack.com/docs](https://paystack.com/docs)
- **API Reference**: [paystack.com/docs/api](https://paystack.com/docs/api)
- **Node.js SDK**: [github.com/PaystackHQ/paystack-node](https://github.com/PaystackHQ/paystack-node)

### Flutterwave
- **Website**: [flutterwave.com](https://flutterwave.com)
- **Documentation**: [developer.flutterwave.com](https://developer.flutterwave.com)
- **Node.js SDK**: [github.com/Flutterwave/Flutterwave-Node-V3](https://github.com/Flutterwave/Flutterwave-Node-V3)

### Stripe
- **Website**: [stripe.com](https://stripe.com)
- **Documentation**: [stripe.com/docs](https://stripe.com/docs)
- **Nonprofit Program**: [stripe.com/nonprofits](https://stripe.com/nonprofits)

---

## ✅ Final Recommendation

**For 5Brothers Legacy Initiative:**

👉 **Use Paystack** as your primary payment gateway

**Reasons:**
1. ✅ Best NGN support (native to Nigeria)
2. ✅ Good USD support (international cards)
3. ✅ Nonprofit-friendly pricing
4. ✅ Easy Next.js integration
5. ✅ Bank transfer support (bonus)
6. ✅ Great for Nigerian nonprofits

**Alternative:** Flutterwave if you need more currencies or mobile money support.

---

**Last Updated:** 2026-02-19  
**Recommended:** Paystack  
**Status:** Ready for Integration

