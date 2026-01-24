# 🚀 Quick Start - CMS Ready to Use!

Your Sanity CMS is now configured with Project ID: `u1tu4f9f`

## ✅ Configuration Complete

- ✅ Project ID configured: `u1tu4f9f`
- ✅ Environment variables set up in `.env.local`
- ✅ Sanity Studio route configured at `/admin`
- ✅ All schemas and utilities ready

## 🎯 Next Steps

### 1. Start the Development Server

```bash
npm run dev
```

### 2. Access Sanity Studio

Open your browser and go to:
```
http://localhost:3000/admin
```

### 3. Log In to Sanity

- You'll be prompted to log in with your Sanity account
- If you don't have an account, create one at [sanity.io](https://www.sanity.io)
- Make sure you're logged into the account that owns project `u1tu4f9f`

### 4. Start Creating Content

Once logged in, you'll see the CMS interface with these content types:

#### Priority Content (Start Here):
1. **Site Settings** ⚙️
   - Click "Site Settings" to configure your site-wide settings
   - Add organization name, contact info, social links, etc.

2. **Team Members** 👥
   - Add your team members
   - Include photos, roles, bios, and social links

3. **Programs** 📋
   - Add your initiatives and programs
   - Each program can have descriptions, images, impact metrics, and sub-programs

4. **Partners** 🤝
   - Add partner organizations
   - Upload logos and descriptions

#### Additional Content:
5. **Blog Posts** 📝 - News articles and updates
6. **Events** 📅 - Upcoming and past events
7. **Reports** 📊 - Annual reports, financial reports, etc.
8. **Testimonials** 💬 - Impact stories and testimonials
9. **Support Methods** 💰 - Ways to support the organization
10. **Resources** 📚 - Resources for the Find Support page
11. **Pages** 📄 - Additional static content pages

## 🔧 Optional: Set Up API Tokens

For server-side operations and better security, you can add API tokens:

1. Go to [https://www.sanity.io/manage](https://www.sanity.io/manage)
2. Select your project `u1tu4f9f`
3. Navigate to **API** → **Tokens**
4. Create a new token:
   - **Name**: "Website Read Token"
   - **Permissions**: Read only
   - Copy the token
5. Add it to your `.env.local` file:
   ```env
   SANITY_API_READ_TOKEN=your_token_here
   ```

## 🎨 Configure CORS (If Needed)

If you encounter CORS errors when accessing the Studio:

1. Go to your Sanity project dashboard
2. Navigate to **API** → **CORS origins**
3. Add these origins:
   - `http://localhost:3000` (for development)
   - Your production domain (when deployed)

## 📖 Using the CMS

### Creating Your First Team Member

1. In Sanity Studio (`/admin`), click **Team Members**
2. Click **Create**
3. Fill in:
   - Full Name
   - Role/Position
   - Department (optional)
   - Photo (upload or drag & drop)
   - Biography (rich text)
   - Social Links (optional)
4. Set **Display on Team Page** to `true`
5. Set **Display Order** (lower numbers appear first)
6. Click **Publish**

### Creating Your First Program

1. Click **Programs** in the sidebar
2. Click **Create**
3. Fill in:
   - Program Title
   - Category (Education, Health, WASH, etc.)
   - Description (rich text with formatting)
   - Featured Image
   - Impact Metrics (text summary)
   - Sub-Programs (list of components)
4. Set Status to `Active`
5. Click **Publish**

## 🔍 Testing Your Setup

### Test Query in Vision Tool

1. In Sanity Studio, click the **Vision** icon (top right, looks like an eye)
2. Try this query:
   ```groq
   *[_type == "teamMember"] {
     name,
     role,
     photo
   }
   ```
3. This should return all team members

### Verify Data Access

You can test fetching data in your Next.js app. For example, to fetch team members:

```typescript
// In a server component
import { client } from '@/lib/sanity/client'
import { teamMembersQuery } from '@/lib/sanity/queries'

const teamMembers = await client.fetch(teamMembersQuery)
```

## 🐛 Troubleshooting

### "Project not found" or "Invalid project ID"
- Verify your Project ID is correct: `u1tu4f9f`
- Make sure you're logged into the correct Sanity account
- Restart your dev server after changing `.env.local`

### Studio doesn't load
- Check that `npm run dev` is running
- Verify the URL is `http://localhost:3000/admin`
- Check browser console for errors
- Make sure you're logged into Sanity

### Can't see content types
- Make sure all schema files are in `sanity/schemas/`
- Check that `sanity/schemas/index.ts` exports all schemas
- Restart the dev server

### Images not loading
- Verify CORS is configured for `http://localhost:3000`
- Check that `next.config.js` includes `cdn.sanity.io` in image domains

## ✅ Success Checklist

- [ ] Dev server running (`npm run dev`)
- [ ] Can access `/admin` route
- [ ] Logged into Sanity Studio
- [ ] Can see all content types in sidebar
- [ ] Created Site Settings document
- [ ] Added at least one team member
- [ ] Added at least one program
- [ ] Tested Vision tool with a query

## 📚 Next Steps After Content Creation

Once you have content in the CMS:

1. **Integrate with Pages** - Update your Next.js pages to fetch from Sanity
   - Example: `app/our-team/page.tsx` - fetch and display team members
   - Example: `app/our-programs/page.tsx` - fetch and display programs

2. **Set Up Preview Mode** - Allow previewing draft content (optional)

3. **Configure Webhooks** - Set up on-demand revalidation for production (optional)

## 🎉 You're All Set!

Your CMS is configured and ready to use. Start adding content and then integrate it with your Next.js pages!

---

**Need help?** Check the [SANITY_SETUP_GUIDE.md](./SANITY_SETUP_GUIDE.md) for detailed instructions.




