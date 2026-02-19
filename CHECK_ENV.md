# 🔍 Checking Environment Variables

## Current .env.local Contents

The file currently shows:
```
DATABASE_URL=...
```

## Cloudinary Variables Needed

Make sure your `.env.local` file has all three Cloudinary variables:

```bash
DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require

CLOUDINARY_CLOUD_NAME=your-cloud-name-here
CLOUDINARY_API_KEY=your-api-key-here
CLOUDINARY_API_SECRET=your-api-secret-here
```

## Important Notes

1. **No spaces around the `=` sign**
2. **No quotes needed** (unless the value has spaces)
3. **One variable per line**
4. **Restart dev server** after adding variables

## How to Add

1. Open `.env.local` in your editor
2. Add the three Cloudinary lines at the end
3. Save the file
4. **Restart your dev server** (stop and start `npm run dev`)

## Verify They're Loaded

After restarting, the variables should be available. If you still get the error:
- Check for typos in variable names
- Make sure there are no extra spaces
- Verify the values are correct from Cloudinary dashboard

