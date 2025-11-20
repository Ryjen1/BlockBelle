# BlockBelle - Vercel Deployment Guide

**Time Required**: 20-30 minutes  
**Cost**: Free tier available (or $20/month for Pro)

---

## 🚀 **Quick Deployment Steps**

### Step 1: Push to GitHub (5 min)

```bash
cd next-frontend
git add .
git commit -m "Ready for production with Vercel Postgres"
git push origin main
```

---

### Step 2: Deploy to Vercel (10 min)

1. **Go to [vercel.com](https://vercel.com)**
2. **Sign up** with GitHub (if you haven't)
3. Click **"Add New Project"**
4. **Select** your BlockBelle repository
5. **Framework Preset**: Next.js (auto-detected)
6. **Root Directory**: `next-frontend`
7. Click **"Deploy"**

✅ Your app is now live at `https://your-app.vercel.app`!

---

### Step 3: Add Postgres Database (5 min)

1. In Vercel dashboard, go to your **project**
2. Click **"Storage"** tab
3. Click **"Create Database"**
4. Select **"Postgres"**
5. Name it: `blockbelle-db`
6. Click **"Create"**

✅ Database created! Vercel automatically adds these environment variables:
- `POSTGRES_URL`
- `POSTGRES_PRISMA_URL`
- `POSTGRES_URL_NON_POOLING`
- `POSTGRES_USER`
- `POSTGRES_HOST`
- `POSTGRES_PASSWORD`
- `POSTGRES_DATABASE`

---

### Step 4: Update Environment Variables (5 min)

1. In Vercel dashboard, go to **Settings** → **Environment Variables**
2. Add these variables:

```bash
# SELF Protocol Configuration
NEXT_PUBLIC_SELF_APP_NAME=BlockBelle
NEXT_PUBLIC_SELF_SCOPE=blockbelle-chat
NEXT_PUBLIC_SELF_ENDPOINT=https://your-app.vercel.app/api/self/verify
NEXT_PUBLIC_SELF_ENDPOINT_TYPE=https
NEXT_PUBLIC_BASE_URL=https://your-app.vercel.app
SELF_SCOPE=blockbelle-chat
SELF_ENDPOINT=https://your-app.vercel.app/api/self/verify
SELF_USE_MOCK_PASSPORT=false
```

**Important**: Replace `your-app.vercel.app` with your actual Vercel URL!

3. Click **"Save"**
4. Go to **Deployments** tab
5. Click **"Redeploy"** to apply new environment variables

---

### Step 5: Test SELF Protocol (10 min)

1. **Open your app**: `https://your-app.vercel.app`
2. **Connect wallet** (MetaMask, etc.)
3. **Navigate to Account tab**
4. **Click "Verify with Self Protocol"**
5. **Scan QR code** with SELF mobile app
6. **Complete verification**

✅ If verification works, you're production-ready!

---

## 🔧 **Troubleshooting**

### Issue: "Database connection failed"
**Solution**: 
- Check that Postgres database is created in Vercel
- Verify environment variables are set
- Redeploy the app

### Issue: "QR code not displaying"
**Solution**:
- Check browser console for errors
- Verify `NEXT_PUBLIC_SELF_ENDPOINT` is correct
- Make sure URL uses `https://` not `http://`

### Issue: "Verification not saving"
**Solution**:
- Check Vercel logs: Dashboard → Deployments → Click deployment → "Functions" tab
- Look for database errors
- Run database initialization manually (it should auto-run on first request)

---

## 📊 **Vercel Dashboard Overview**

### Key Sections:
- **Overview**: Deployment status, analytics
- **Deployments**: History of all deployments
- **Storage**: Your Postgres database
- **Settings**: Environment variables, domains
- **Analytics**: Traffic, performance (Pro plan)

---

## 🔄 **Auto-Deployment**

Vercel automatically deploys when you push to GitHub:

```bash
git add .
git commit -m "Update feature"
git push
```

✅ Vercel detects the push and deploys automatically!

---

## 🌐 **Custom Domain (Optional)**

1. Buy domain (Namecheap, GoDaddy, etc.)
2. In Vercel: **Settings** → **Domains**
3. Add your domain
4. Update DNS records (Vercel provides instructions)
5. Update environment variables with new domain

---

## 💰 **Pricing**

### Free Tier (Hobby)
- ✅ Unlimited deployments
- ✅ 100 GB bandwidth/month
- ✅ Serverless functions
- ❌ Limited Postgres (256 MB, 60 hours compute)

### Pro Tier ($20/month)
- ✅ Everything in Free
- ✅ Better Postgres (512 MB, 100 hours)
- ✅ Analytics
- ✅ Team collaboration

**Recommendation**: Start with Free tier, upgrade if needed

---

## 📱 **Testing with SELF Mobile App**

### Download SELF App:
- **iOS**: App Store → Search "SELF Protocol"
- **Android**: Google Play → Search "SELF Protocol"

### Test Flow:
1. Open SELF app
2. Complete onboarding
3. Scan QR code from your app
4. Complete verification
5. Check that status updates in your app

---

## 🔐 **Security Checklist**

- [x] HTTPS enabled (automatic with Vercel)
- [x] Environment variables secured
- [x] Database credentials not in code
- [x] SELF Protocol using real passports (`SELF_USE_MOCK_PASSPORT=false`)
- [ ] Rate limiting (optional, add later)
- [ ] Error monitoring (Sentry, optional)

---

## 📈 **Post-Deployment**

### Monitor Your App:
1. **Vercel Analytics**: Track visitors, performance
2. **Function Logs**: Check API route execution
3. **Database Usage**: Monitor Postgres storage

### Next Steps:
1. Share your app URL
2. Onboard users
3. Gather feedback
4. Iterate and improve

---

## 🆘 **Need Help?**

- **Vercel Docs**: https://vercel.com/docs
- **SELF Protocol Docs**: https://docs.self.xyz
- **Vercel Support**: support@vercel.com
- **Community**: Vercel Discord

---

## ✅ **Deployment Checklist**

- [ ] Code pushed to GitHub
- [ ] Vercel project created
- [ ] App deployed successfully
- [ ] Postgres database created
- [ ] Environment variables configured
- [ ] App redeployed with new variables
- [ ] SELF verification tested
- [ ] Custom domain added (optional)
- [ ] Monitoring enabled

---

**🎉 Congratulations! Your BlockBelle app is live!** 🎉

Share your URL: `https://your-app.vercel.app`