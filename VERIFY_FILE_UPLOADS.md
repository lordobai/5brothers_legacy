# ✅ How to Verify File Uploads Succeeded

## Method 1: Check Browser Console (Easiest)

1. **Open Browser Developer Tools:**
   - Press `F12` or `Right-click` → `Inspect`
   - Go to **Console** tab

2. **Submit the Career Application Form:**
   - Fill out the form
   - Upload a file
   - Submit

3. **Check Console:**
   - Look for any errors (red text)
   - Look for success messages
   - Check Network tab for API calls

4. **Check Network Tab:**
   - Go to **Network** tab in DevTools
   - Filter by "upload" or "career"
   - Click on the upload request
   - Check the **Response** - should show `{"success": true, "url": "https://..."}`

---

## Method 2: Check Database (Prisma Studio)

1. **Open Prisma Studio:**
   ```bash
   npm run db:studio
   ```

2. **Navigate to Career Applications:**
   - Click on `CareerApplication` model
   - Find your recent submission

3. **Check File URLs:**
   - Look at `resume_url` field
   - Look at `cover_letter_url` field
   - Look at `additional_docs` field (JSON array)
   - URLs should start with `https://res.cloudinary.com/...`

4. **Verify:**
   - If URLs are present → Upload succeeded ✅
   - If URLs are `null` → Upload failed or no file uploaded

---

## Method 3: Check Cloudinary Dashboard

1. **Go to Cloudinary Dashboard:**
   - Visit [cloudinary.com/console](https://cloudinary.com/console)
   - Log in

2. **Check Media Library:**
   - Click **Media Library** in sidebar
   - Navigate to `career-applications` folder
   - You should see uploaded files there

3. **Verify Files:**
   - Files should have names like: `career-applications/1234567890-abc123.pdf`
   - You can click to view/download them

---

## Method 4: Check Application Response

After submitting the form, check:

1. **Success Message:**
   - Should see: "Thank you! Your application has been submitted successfully."

2. **No Error Messages:**
   - Should NOT see: "File storage is not configured" error

3. **Form Resets:**
   - Form fields clear after successful submission

---

## Method 5: Test Upload Endpoint Directly

You can test the upload endpoint directly:

1. **Open Browser Console:**
   - Press `F12` → Go to **Console** tab

2. **Run this test:**
   ```javascript
   // Create a test file
   const testFile = new File(['test content'], 'test.pdf', { type: 'application/pdf' });
   const formData = new FormData();
   formData.append('file', testFile);

   // Upload it
   fetch('/api/career/upload', {
     method: 'POST',
     body: formData
   })
   .then(res => res.json())
   .then(data => {
     console.log('Upload result:', data);
     if (data.url) {
       console.log('✅ Success! File URL:', data.url);
     } else {
       console.log('❌ Failed:', data.error);
     }
   });
   ```

3. **Check the Response:**
   - Should see: `{success: true, url: "https://res.cloudinary.com/..."}`
   - If you see an error, check the message

---

## Method 6: Check Server Logs

1. **Look at Terminal/Console:**
   - Where you're running `npm run dev`
   - Check for any error messages
   - Look for Cloudinary-related logs

2. **Common Errors:**
   - "Cloudinary credentials are not set" → Environment variables not loaded
   - "Invalid API key" → Wrong credentials
   - "Upload failed" → Check Cloudinary dashboard for details

---

## Quick Verification Checklist

After submitting a career application:

- [ ] Form shows success message
- [ ] No error messages displayed
- [ ] Check Prisma Studio - see submission with file URLs
- [ ] Check Cloudinary dashboard - see files in `career-applications/` folder
- [ ] Click file URLs - files should be accessible

---

## Troubleshooting

### If Uploads Fail:

1. **Check Environment Variables:**
   ```bash
   # In your terminal (where dev server is running)
   echo $env:CLOUDINARY_CLOUD_NAME  # Should show your cloud name
   ```

2. **Verify Credentials:**
   - Go to Cloudinary dashboard
   - Check that API key and secret match what's in `.env.local`

3. **Check File Size:**
   - Max 5MB per file
   - Check file size before uploading

4. **Check File Type:**
   - Only PDF, DOC, DOCX allowed
   - Verify file extension

5. **Restart Dev Server:**
   - Environment variables only load on startup
   - Must restart after changing `.env.local`

---

## Expected Behavior

### ✅ Success:
- File uploads to Cloudinary
- URL saved to database
- Success message shown
- File accessible via URL

### ❌ Failure:
- Error message displayed
- No URL in database
- File not in Cloudinary
- Check console for specific error

---

**Quick Test:** Try uploading a small PDF file and check Prisma Studio to see if the URL appears in the database!

