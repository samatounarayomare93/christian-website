# 🚀 كيف ترفع المشروع على GitHub

## الطريقة الأسهل (3 خطوات فقط!)

### الخطوة 1: شغّل السكريبت
```powershell
.\git-sync.ps1
```

**هذا كل شيء!** السكريبت سيعمل كل شيء تلقائياً.

---

## الطريقة اليدوية (إذا فضّلت)

### الخطوة 1: أضف الملفات
```bash
git add .
```

### الخطوة 2: اعمل Commit
```bash
git commit -m "تحسينات كبيرة وتنظيف شامل"
```

### الخطوة 3: ارفع على GitHub
```bash
git push origin main
```

**أو إذا كان الفرع master:**
```bash
git push origin master
```

---

## 🆕 إذا كانت أول مرة

### 1. أنشئ مستودع على GitHub:
1. اذهب إلى https://github.com
2. اضغط على زر "New" الأخضر
3. اسم المستودع: `soul-guidance`
4. اختر Public أو Private
5. **لا تضف** README (لديك واحد بالفعل)
6. اضغط "Create repository"

### 2. اربط المشروع بـ GitHub:
```bash
# ابدأ Git (إذا لم يكن مبدوء)
git init

# أضف عنوان GitHub (غيّر yourusername باسمك)
git remote add origin https://github.com/yourusername/soul-guidance.git

# تحقق من الاتصال
git remote -v

# أضف الملفات
git add .

# اعمل Commit
git commit -m "أول رفع للمشروع"

# ارفع على GitHub
git push -u origin main
```

---

## 🔧 إعدادات Git (مرة واحدة فقط)

### إذا طلب منك Git اسمك وبريدك:
```bash
git config --global user.name "اسمك"
git config --global user.email "your.email@example.com"
```

---

## ⚠️ حل المشاكل الشائعة

### مشكلة 1: "not a git repository"
**المعنى**: المجلد ليس مستودع Git

**الحل**:
```bash
git init
```

---

### مشكلة 2: "Updates were rejected"
**المعنى**: يوجد تغييرات على GitHub لم تسحبها

**الحل**:
```bash
git pull origin main --rebase
git push origin main
```

---

### مشكلة 3: "Please tell me who you are"
**المعنى**: Git لا يعرف من أنت

**الحل**:
```bash
git config --global user.name "اسمك"
git config --global user.email "your.email@example.com"
```

---

### مشكلة 4: "Permission denied"
**المعنى**: ليس لديك صلاحية

**الحل**:
```bash
# استخدم HTTPS بدلاً من SSH
git remote set-url origin https://github.com/yourusername/soul-guidance.git
```

---

### مشكلة 5: "No remote configured"
**المعنى**: لم تربط المشروع بـ GitHub

**الحل**:
```bash
git remote add origin https://github.com/yourusername/soul-guidance.git
```

---

## 📋 قائمة التحقق

### قبل الرفع:
- [ ] Git مثبت على جهازي
- [ ] لدي حساب على GitHub
- [ ] أنشأت مستودع على GitHub
- [ ] ربطت المشروع بـ GitHub
- [ ] عرّفت اسمي وبريدي في Git

### بعد الرفع:
- [ ] دخلت على GitHub وتأكدت أن الملفات موجودة
- [ ] README.md يظهر بشكل صحيح
- [ ] مجلد docs/ موجود
- [ ] كل شيء تمام ✅

---

## 🎯 الأوامر الأساسية

### لرؤية الحالة:
```bash
git status
```

### لرؤية التغييرات:
```bash
git diff
```

### لرؤية السجل:
```bash
git log --oneline
```

### للتراجع عن تغييرات:
```bash
git checkout -- filename
```

---

## 💡 نصائح مهمة

### ✅ افعل:
- اعمل commit بعد كل تغيير مهم
- اكتب رسائل commit واضحة
- ارفع على GitHub بانتظام
- تحقق من .gitignore

### ❌ لا تفعل:
- لا ترفع passwords أو API keys
- لا ترفع ملفات كبيرة جداً (>100MB)
- لا ترفع node_modules/
- لا ترفع معلومات شخصية حساسة

---

## 📞 إذا احتجت مساعدة

### ملفات المساعدة:
- **GIT_SYNC_GUIDE.md** - دليل شامل بالتفصيل
- **SYNC_NOW.md** - تعليمات سريعة
- **git-sync.ps1** - سكريبت آلي

### مواقع مفيدة:
- [GitHub Docs](https://docs.github.com)
- [Git Book (بالعربية)](https://git-scm.com/book/ar/v2)

---

## 🎉 الخلاصة

### الطريقة الأسهل:
```powershell
.\git-sync.ps1
```

### الطريقة السريعة:
```bash
git add .
git commit -m "تحديث"
git push
```

### إذا فشل:
```bash
git pull --rebase
git push
```

---

<div align="center">

## ✅ جاهز!

**اختر طريقة وابدأ الآن!**

---

**بالتوفيق! 🚀**

**صُنع بـ ❤️ و 🙏**

</div>
