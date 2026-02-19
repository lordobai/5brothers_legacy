# 📋 Database Schema Review - Comprehensive Field Review

## ✅ Review Summary

After comparing all form fields with the database schema, here are the findings:

---

## 1. Contact Form (`/contact-us`) ✅ **COMPLETE**

**Form Fields:**
- name ✅
- email ✅
- subject ✅
- message ✅

**Schema Fields:**
- name ✅
- email ✅
- subject ✅
- message ✅
- status ✅
- createdAt ✅
- updatedAt ✅

**Status:** ✅ All fields match perfectly

---

## 2. Volunteer Form (`/get-involved`) ✅ **COMPLETE**

**Form Fields:**
- name ✅
- email ✅
- phone ✅
- availability ✅
- skills ✅
- message (maps to interests/additionalInfo) ✅

**Schema Fields:**
- name ✅
- email ✅
- phone ✅
- availability ✅
- skills ✅
- interests ✅ (populated from message)
- additionalInfo ✅ (populated from message)
- status ✅
- createdAt ✅
- updatedAt ✅

**Status:** ✅ All fields captured (message field maps to both interests and additionalInfo)

---

## 3. Partner Form (`/get-involved`) ✅ **COMPLETE**

**Form Fields:**
- name (maps to contactName) ✅
- email ✅
- phone ✅
- organization (maps to organizationName) ✅
- partnershipType (maps to organizationType) ✅
- message (maps to partnershipInterest/additionalInfo) ✅
- website ❌ (not in form, but optional in schema)

**Schema Fields:**
- organizationName ✅
- contactName ✅
- email ✅
- phone ✅
- organizationType ✅
- partnershipInterest ✅
- website ✅ (optional - not in form but available)
- additionalInfo ✅
- status ✅
- createdAt ✅
- updatedAt ✅

**Status:** ✅ All fields captured (website is optional and not in form, which is fine)

---

## 4. Advocate Form (`/get-involved`) ✅ **COMPLETE**

**Form Fields:**
- name ✅
- email ✅
- phone ✅
- platform ✅
- message (maps to advocacyInterest/additionalInfo) ✅

**Schema Fields:**
- name ✅
- email ✅
- phone ✅
- platform ✅
- advocacyInterest ✅ (populated from message)
- additionalInfo ✅ (populated from message)
- status ✅
- createdAt ✅
- updatedAt ✅

**Status:** ✅ All fields captured

---

## 5. Career Application Form (`/career`) ⚠️ **NEEDS UPDATES**

**Form Fields:**
- name ✅
- email ✅
- phone ✅
- address ❌ **MISSING IN SCHEMA**
- position ✅ (from selectedJob.title)
- coverLetter (text) ❌ **MISSING IN SCHEMA**
- resume (file) ✅ (maps to resumeUrl)
- coverLetterFile (file) ✅ (maps to coverLetterUrl)
- additionalDocs (files) ✅ (maps to additionalDocs)

**Schema Fields:**
- name ✅
- email ✅
- phone ✅
- position ✅
- resumeUrl ✅
- coverLetterUrl ✅
- additionalDocs ✅
- address ❌ **MISSING**
- coverLetter ❌ **MISSING** (text field for typed cover letter)
- status ✅
- notes ✅
- createdAt ✅
- updatedAt ✅

**Issues Found:**
1. ❌ **Missing `address` field** - Form collects address but schema doesn't store it
2. ❌ **Missing `coverLetter` text field** - Form allows typing a cover letter OR uploading it, but schema only has coverLetterUrl (for file upload)

**Status:** ⚠️ **Needs schema update**

---

## 6. Donation Model ✅ **COMPLETE** (Not yet implemented in forms)

**Schema Fields:**
- donorName ✅
- email ✅
- phone ✅
- amount ✅
- currency ✅
- paymentMethod ✅
- paymentReference ✅
- status ✅
- receiptSent ✅
- receiptUrl ✅
- metadata ✅
- createdAt ✅
- updatedAt ✅

**Status:** ✅ Schema is complete (ready for when donation form is implemented)

---

## 7. Newsletter Subscription ✅ **COMPLETE**

**Schema Fields:**
- email ✅
- name ✅
- status ✅
- source ✅
- subscribedAt ✅
- unsubscribedAt ✅

**Status:** ✅ All fields captured

---

## 🔧 Required Schema Updates

### Update CareerApplication Model

Add these fields:
1. `address` - String? (optional, for applicant's address)
2. `coverLetter` - String? @db.Text (optional, for typed cover letter text)

**Updated Schema:**
```prisma
model CareerApplication {
  id              String   @id @default(uuid())
  name            String
  email           String
  phone           String?
  address         String?  @db.Text  // NEW: Address field
  position        String
  coverLetter     String?  @db.Text  // NEW: Text cover letter
  resumeUrl       String?  @map("resume_url")
  coverLetterUrl  String?  @map("cover_letter_url")
  additionalDocs  Json?    @map("additional_docs")
  status          String   @default("pending")
  notes           String?  @db.Text
  createdAt       DateTime @default(now()) @map("created_at")
  updatedAt       DateTime @updatedAt @map("updated_at")

  @@map("career_applications")
  @@index([email])
  @@index([position])
  @@index([status])
}
```

---

## 📝 Notes

1. **Volunteer/Advocate Forms:** The "message" field maps to both `interests`/`advocacyInterest` and `additionalInfo`. This is intentional and works fine.

2. **Partner Form:** The `website` field is optional in the schema but not in the form. This is fine - it can be added to the form later if needed.

3. **Career Form:** The form allows both typing a cover letter AND uploading one. The schema needs both fields to support this.

---

## ✅ Action Items

- [x] Review Contact Form - Complete
- [x] Review Volunteer Form - Complete
- [x] Review Partner Form - Complete
- [x] Review Advocate Form - Complete
- [ ] **Update CareerApplication schema** - Add `address` and `coverLetter` fields
- [ ] **Create Career API route** - Not yet created
- [ ] **Update Career form** - Connect to API when route is created

---

**Review Date:** 2025-01-27
**Reviewer:** AI Assistant
**Status:** 1 schema update needed

