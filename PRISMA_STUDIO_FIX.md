# 🔧 Prisma Studio Fix

## Issue
Prisma Studio wasn't reading the `DATABASE_URL` from `.env.local` file.

## Solution
1. ✅ Created `.env` file (Prisma Studio reads `.env`, not `.env.local`)
2. ✅ Installed `dotenv-cli` to explicitly load environment variables
3. ✅ Updated `db:studio` script to use dotenv

## How to Use

### Option 1: Use the Updated Script (Recommended)
```bash
npm run db:studio
```

This will automatically load the `.env` file.

### Option 2: Set Environment Variable Manually (Windows PowerShell)
```powershell
$env:DATABASE_URL="postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require"
npx prisma studio
```

### Option 3: Set Environment Variable Manually (Command Prompt)
```cmd
set DATABASE_URL=postgresql://neondb_owner:npg_tA2doQ4PpBfj@ep-withered-wildflower-aikh1l1q-pooler.c-4.us-east-1.aws.neon.tech/neondb?sslmode=require
npx prisma studio
```

## Important Notes

1. **Close Prisma Studio First**: If you get file lock errors, close Prisma Studio completely before running commands.

2. **Both Files Needed**:
   - `.env.local` - Used by Next.js (your app)
   - `.env` - Used by Prisma Studio and CLI tools

3. **Both files are in `.gitignore`** - Your credentials are safe!

## Troubleshooting

### "File is locked" error
- Close Prisma Studio completely
- Close any other processes using Prisma
- Try again

### "Environment variable not found"
- Make sure `.env` file exists in project root
- Check that `DATABASE_URL` is in the file
- Restart your terminal/command prompt
- Use `npm run db:studio` (uses dotenv-cli)

### Still not working?
Try running with explicit environment variable:
```bash
# Windows PowerShell
$env:DATABASE_URL="your-connection-string"; npx prisma studio
```

