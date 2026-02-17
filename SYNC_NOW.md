# 🚀 ازامن الآن! / Sync Now!

## الطريقة السريعة / Quick Method

### خيار 1: استخدم السكريبت الآلي (الأسهل)
```powershell
.\git-sync.ps1
```

### خيار 2: أوامر يدوية (3 أوامر فقط)
```bash
git add .
git commit -m "✨ Major improvements and cleanup"
git push origin main
```

---

## 📋 قبل البدء / Before Starting

### تأكد من:
1. ✅ لديك حساب GitHub
2. ✅ لديك مستودع على GitHub
3. ✅ Git مثبت على جهازك

### إذا لم يكن لديك مستودع:
1. اذهب إلى https://github.com
2. اضغط "New repository"
3. اسم المستودع: `soul-guidance`
4. اضغط "Create repository"

---

## 🔧 الإعداد لأول مرة / First Time Setup

### إذا كانت أول مرة:
```bash
# 1. ابدأ Git
git init

# 2. أضف remote (غيّر yourusername)
git remote add origin https://github.com/yourusername/soul-guidance.git

# 3. تحقق
git remote -v

# 4. اعمل commit أول
git add .
git commit -m "Initial commit"

# 5. ادفع
git push -u origin main
```

---

## ⚡ الأوامر السريعة / Quick Commands

### للمزامنة العادية:
```bash
git add .
git commit -m "Update"
git push
```

### إذا فشل Push:
```bash
git pull --rebase
git push
```

### لرؤية الحالة:
```bash
git status
```

---

## 🆘 حل المشاكل / Troubleshooting

### مشكلة: "not a git repository"
```bash
git init
git remote add origin https://github.com/yourusername/soul-guidance.git
```

### مشكلة: "Updates were rejected"
```bash
git pull origin main --rebase
git push origin main
```

### مشكلة: "Permission denied"
```bash
# استخدم HTTPS
git remote set-url origin https://github.com/yourusername/soul-guidance.git
```

---

## ✅ قائمة التحقق / Checklist

- [ ] Git مثبت
- [ ] لدي حساب GitHub
- [ ] لدي مستودع على GitHub
- [ ] عرّفت user.name و user.email
- [ ] أضفت remote
- [ ] جاهز للـ push!

---

## 📞 المساعدة / Help

### للمزيد من التفاصيل:
- **GIT_SYNC_GUIDE.md** - دليل شامل
- **git-sync.ps1** - سكريبت آلي

### موارد مفيدة:
- [GitHub Docs](https://docs.github.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)

---

<div align="center">

## 🎉 جاهز!

**اختر طريقة وابدأ!**

### الطريقة 1 (الأسهل):
```powershell
.\git-sync.ps1
```

### الطريقة 2 (السريعة):
```bash
git add .
git commit -m "Update"
git push
```

---

**صُنع بـ ❤️ و 🙏**

</div>
