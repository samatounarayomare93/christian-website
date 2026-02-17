# 🚀 دليل البدء السريع / Quick Start Guide

## مرحباً بك في Soul Guidance! / Welcome to Soul Guidance!

هذا الدليل سيساعدك على البدء بسرعة وإصلاح المشاكل الحالية.  
This guide will help you get started quickly and fix current issues.

---

## ⚡ الخطوات السريعة / Quick Steps

### 1️⃣ التنظيف الفوري / Immediate Cleanup

```powershell
# قم بتشغيل سكريبت التنظيف
# Run the cleanup script
.\CLEANUP_SCRIPT.ps1
```

**ماذا سيفعل؟ / What will it do?**
- ✅ حذف النسخ الاحتياطية القديمة / Remove old backups
- ✅ حذف الملفات المكررة / Remove duplicate files
- ✅ تنظيم الوثائق / Organize documentation
- ✅ إنشاء نسخة احتياطية آمنة / Create safety backup

---

### 2️⃣ إصلاح خطأ JavaScript / Fix JavaScript Error

**المشكلة / Problem**: `script.js:11673 - SyntaxError: Unexpected end of input`

**الحل / Solution**:
1. افتح `script.js` في محرر الكود
2. اذهب إلى السطر 11673
3. تأكد من إغلاق جميع الأقواس `{}`
4. احفظ الملف

**أو استخدم هذا الأمر للفحص / Or use this command to check**:
```bash
node --check script.js
```

---

### 3️⃣ اختبار الموقع / Test the Website

```bash
# افتح الموقع في المتصفح
# Open the website in browser
start index.html

# أو استخدم خادم محلي
# Or use a local server
npx live-server --port=3000
```

**ما يجب اختباره / What to test**:
- [ ] الصفحة الرئيسية تعمل / Homepage works
- [ ] القائمة تعمل / Menu works
- [ ] الأزرار تعمل / Buttons work
- [ ] كتاب الصلوات يفتح / Prayer book opens
- [ ] الشموع تعمل / Candles work

---

## 📋 قائمة المهام اليومية / Daily Checklist

### اليوم / Today
- [ ] تشغيل سكريبت التنظيف / Run cleanup script
- [ ] إصلاح خطأ JavaScript / Fix JavaScript error
- [ ] اختبار الموقع / Test website
- [ ] قراءة التقرير الشامل / Read comprehensive report

### هذا الأسبوع / This Week
- [ ] تقسيم script.js / Split script.js
- [ ] دمج ملفات CSS / Merge CSS files
- [ ] تحسين الصور / Optimize images
- [ ] إضافة Build System / Add build system

### هذا الشهر / This Month
- [ ] كتابة Tests / Write tests
- [ ] تحسين SEO / Improve SEO
- [ ] تحسين الأداء / Improve performance
- [ ] نشر الموقع / Deploy website

---

## 🛠️ الأدوات المطلوبة / Required Tools

### أساسية / Essential
- ✅ محرر كود (VS Code مُوصى به) / Code editor (VS Code recommended)
- ✅ متصفح حديث / Modern browser
- ✅ Git (اختياري) / Git (optional)

### للتطوير / For Development
```bash
# تثبيت Node.js من
# Install Node.js from
https://nodejs.org

# تثبيت الحزم
# Install packages
npm install
```

---

## 🔧 الأوامر المفيدة / Useful Commands


### التنظيف / Cleanup
```powershell
# تشغيل سكريبت التنظيف
.\CLEANUP_SCRIPT.ps1

# حذف ملفات معينة
Remove-Item "_BACKUPS" -Recurse -Force
```

### الفحص / Testing
```bash
# فحص JavaScript
node --check script.js

# فحص HTML
npx html-validate index.html

# فحص CSS
npx stylelint "*.css"
```

### التطوير / Development
```bash
# تشغيل خادم محلي
npm run dev

# بناء للإنتاج
npm run build

# تنسيق الكود
npm run format
```

---

## 📚 الملفات المهمة / Important Files

### يجب قراءتها / Must Read
1. **COMPREHENSIVE_ANALYSIS_REPORT.md** - التقرير الشامل
2. **README_NEW.md** - الوثائق الجديدة
3. **docs/ARCHITECTURE.md** - البنية المعمارية

### للمطورين / For Developers
- `script.js` - الكود الرئيسي
- `styles.css` - الأنماط الأساسية
- `theme.css` - الثيم
- `package.json` - إعدادات المشروع

### للمستخدمين / For Users
- `index.html` - الصفحة الرئيسية
- `consolidated-prayer-book.html` - كتاب الصلوات
- `manifest.json` - إعدادات PWA

---

## ❓ الأسئلة الشائعة / FAQ

### س: الموقع لا يعمل، ماذا أفعل؟
**ج**: 
1. افتح Console في المتصفح (F12)
2. ابحث عن الأخطاء
3. أصلح خطأ JavaScript أولاً
4. أعد تحميل الصفحة

### Q: The website doesn't work, what should I do?
**A**:
1. Open Console in browser (F12)
2. Look for errors
3. Fix JavaScript error first
4. Reload the page

---

### س: كيف أحذف الملفات غير الضرورية؟
**ج**: استخدم سكريبت التنظيف:
```powershell
.\CLEANUP_SCRIPT.ps1
```

### Q: How do I delete unnecessary files?
**A**: Use the cleanup script:
```powershell
.\CLEANUP_SCRIPT.ps1
```

---

### س: كيف أختبر الموقع؟
**ج**: 
```bash
# طريقة 1: افتح مباشرة
start index.html

# طريقة 2: استخدم خادم محلي
npx live-server
```

### Q: How do I test the website?
**A**:
```bash
# Method 1: Open directly
start index.html

# Method 2: Use local server
npx live-server
```

---

## 🆘 المساعدة / Help

### إذا واجهت مشكلة / If you face an issue:
1. اقرأ التقرير الشامل / Read comprehensive report
2. ابحث في الأخطاء / Search for errors
3. راجع الوثائق / Check documentation
4. اطلب المساعدة / Ask for help

### موارد مفيدة / Useful Resources:
- [MDN Web Docs](https://developer.mozilla.org)
- [Stack Overflow](https://stackoverflow.com)
- [GitHub Issues](https://github.com/yourusername/soul-guidance/issues)

---

## ✅ قائمة التحقق النهائية / Final Checklist

قبل النشر، تأكد من / Before deployment, make sure:

- [ ] ✅ تم تشغيل سكريبت التنظيف / Cleanup script ran
- [ ] ✅ لا توجد أخطاء JavaScript / No JavaScript errors
- [ ] ✅ الموقع يعمل بشكل صحيح / Website works correctly
- [ ] ✅ تم اختبار جميع الميزات / All features tested
- [ ] ✅ تم تحسين الصور / Images optimized
- [ ] ✅ تم ضغط الملفات / Files minified
- [ ] ✅ تم اختبار الموبايل / Mobile tested
- [ ] ✅ تم فحص الأداء / Performance checked

---

## 🎉 تهانينا! / Congratulations!

إذا أكملت جميع الخطوات، موقعك الآن:
- ✅ نظيف ومنظم / Clean and organized
- ✅ يعمل بشكل صحيح / Works correctly
- ✅ جاهز للتطوير / Ready for development
- ✅ احترافي / Professional

If you completed all steps, your website is now:
- ✅ Clean and organized
- ✅ Works correctly
- ✅ Ready for development
- ✅ Professional

---

**الخطوة التالية / Next Step**: اقرأ `COMPREHENSIVE_ANALYSIS_REPORT.md` للتفاصيل الكاملة  
**Next Step**: Read `COMPREHENSIVE_ANALYSIS_REPORT.md` for full details

---

<div align="center">

**صُنع بـ ❤️ بواسطة Kiro AI**  
**Made with ❤️ by Kiro AI**

</div>
