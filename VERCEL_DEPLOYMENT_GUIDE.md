# 🚀 Deploying to Vercel & Accessing CMS on Production

## ✅ Good News!

Your Sanity Studio is **already embedded** in your Next.js app at `/admin`. When you deploy to Vercel, it will automatically be available at:

```
https://yourdomain.com/admin
```

## 📋 Pre-Deployment Checklist

### 1. Configure Environment Variables in Vercel

**Critical Step:** You must add your environment variables in Vercel's dashboard.

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add these variables:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=u1tu4f9f
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Optional (but recommended):**
```
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_API_WRITE_TOKEN=your_write_token_here
```

4. **Important:** Make sure to add them for:
   - ✅ **Production**
   - ✅ **Preview** (optional, for preview deployments)
   - ✅ **Development** (optional)

5. **Redeploy** after adding environment variables

### 2. Configure CORS in Sanity

You need to allow your production domain to access Sanity:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project (`u1tu4f9f`)
3. Navigate to **API** → **CORS origins**
4. Click **Add CORS origin**
5. Add your production domain:
   - **Origin**: `https://yourdomain.com` (or `https://your-app.vercel.app`)
   - **Allow credentials**: ✅ Checked
   - **Click "Save"**

**For local development, also add:**
- `http://localhost:3000`

### 3. Deploy to Vercel

#### Option A: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel will auto-detect Next.js
6. **Add environment variables** (see step 1 above)
7. Click **"Deploy"**

#### Option B: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## 🌐 Accessing CMS on Production

Once deployed, you can access the CMS at:

```
https://yourdomain.com/admin
```

or

```
https://your-app.vercel.app/admin
```

### How It Works:

1. **Visit** `https://yourdomain.com/admin`
2. **You'll be prompted to log in** with your Sanity account
3. **After logging in**, you'll see the full CMS interface
4. **Create and manage content** just like locally
5. **All changes are saved** to your Sanity project

## 🔐 Security Considerations

### Option 1: Public Access (Current Setup)
- Anyone with the URL can access `/admin`
- Sanity authentication protects your content
- Only users with Sanity account access can edit

### Option 2: Add Authentication Layer (Recommended for Production)

You can add additional protection to the `/admin` route. Here's a simple middleware approach:

**Create `middleware.ts` in the root:**

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Protect /admin route
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Option 1: Basic auth (simple password protection)
    const authHeader = request.headers.get('authorization')
    const expectedAuth = `Basic ${Buffer.from(`admin:${process.env.ADMIN_PASSWORD || 'changeme'}`).toString('base64')}`
    
    if (authHeader !== expectedAuth) {
      return new NextResponse('Authentication required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Admin Area"',
        },
      })
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/admin/:path*',
}
```

Then add `ADMIN_PASSWORD` to Vercel environment variables.

**Or use Vercel's built-in password protection:**
- In Vercel dashboard → Settings → Deployment Protection
- Enable password protection for specific paths

## 🔄 After Deployment

### 1. Test the CMS
- Visit `https://yourdomain.com/admin`
- Log in with your Sanity account
- Create a test piece of content
- Verify it saves correctly

### 2. Configure Webhooks (Optional - for On-Demand Revalidation)

To automatically rebuild your site when content changes:

1. In Vercel → Your Project → Settings → Git
2. Get your **Deployment Hook URL**
3. In Sanity → API → Webhooks
4. Add webhook:
   - **Name**: "Vercel Revalidation"
   - **URL**: Your Vercel deployment hook URL
   - **Dataset**: `production`
   - **Trigger on**: `Create`, `Update`, `Delete`
   - **HTTP method**: `POST`

### 3. Share Access with Your Team

1. In Sanity → Project Settings → Members
2. Invite team members by email
3. They can access `/admin` and log in with their Sanity accounts
4. Set appropriate permissions (Editor, Admin, etc.)

## 📱 Accessing CMS from Anywhere

Once deployed, you can:

- ✅ Access CMS from any device (desktop, tablet, phone)
- ✅ Manage content on the go
- ✅ Share access with team members
- ✅ No need for local development setup

## 🐛 Troubleshooting

### "Cannot access /admin on production"
- Check environment variables are set in Vercel
- Verify CORS is configured in Sanity
- Check browser console for errors
- Ensure you're logged into the correct Sanity account

### "Studio loads but can't save content"
- Check CORS configuration
- Verify you have write permissions in Sanity
- Check browser console for API errors

### "Environment variables not working"
- Make sure variables start with `NEXT_PUBLIC_` for client-side access
- Redeploy after adding environment variables
- Check Vercel build logs for errors

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub (or ready to deploy)
- [ ] Environment variables added in Vercel
- [ ] CORS configured in Sanity for production domain
- [ ] Deployed to Vercel
- [ ] Tested `/admin` route on production
- [ ] Can log in and create content
- [ ] Team members have access (if applicable)
- [ ] Webhooks configured (optional)

## 🎉 You're All Set!

Once deployed, your CMS will be accessible at:
```
https://yourdomain.com/admin
```

You can manage all your content directly from the web, no local setup needed!

---

**Note:** The Studio is embedded in your Next.js app, so it deploys automatically with your site. Just make sure environment variables and CORS are configured correctly.


