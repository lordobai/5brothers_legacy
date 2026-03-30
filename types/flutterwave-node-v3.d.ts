declare module 'flutterwave-node-v3' {
  interface FlutterwaveConfig {
    publicKey?: string
    secretKey: string
  }

  interface PaymentInitializeData {
    tx_ref: string
    amount: number
    currency: string
    redirect_url: string
    payment_options: string
    customer: {
      email: string
      name: string
      phone_number: string
    }
    customizations: {
      title: string
      description: string
      logo: string
    }
    meta?: Record<string, any>
  }

  interface PaymentResponse {
    status: string
    message: string
    data?: {
      link: string
      [key: string]: any
    }
  }

  class Flutterwave {
    constructor(publicKey: string, secretKey: string)
    Payment: {
      initialize(data: PaymentInitializeData): Promise<PaymentResponse>
    }
  }

  export default Flutterwave
}



