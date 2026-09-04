# Abd El Rahman Karkar — Professional AI Engineer Portfolio

A modern, high-performance, dark-themed personal portfolio built for **Abd El Rahman Mohamed Karkar**, AI Engineer & Machine Learning Specialist.

---

## 🚀 Quick Start (داخل VS Code)

### الطريقة الأولى: بنقرة واحدة (One-Click)
قم بالدخول إلى مجلد المشروع ثم تشغيل الملف:
```cmd
run-portfolio.bat
```
سيقوم تلقائيًا بنسخ الصورة الشخصية وملف الـ CV، وتثبيت الحزم، وتشغيل السيرفر على:
`http://localhost:3000`

---

### الطريقة الثانية: عبر VS Code Terminal
1. افتح مجلد المشروع في VS Code:
   `C:\Users\MANSY\.gemini\antigravity\scratch\karkar-portfolio`
2. افتح الـ Terminal (`Ctrl + \``) واكتب:
   ```bash
   npm install
   ```
3. شغّل المشروع في وضع التطوير:
   ```bash
   npm run dev
   ```
4. افتح المتصفح على: [http://localhost:3000](http://localhost:3000)

---

## 🛠️ هيكلية المشروع (Project Structure)

```
karkar-portfolio/
│
├── index.html                     # إعدادات الـ SEO و OpenGraph و Fonts
├── package.json                   # التبعيات والأوامر
├── tailwind.config.js             # ثيم الألوان والدارك مود المخصص
├── vite.config.js                 # إعدادات Vite السريعة
│
├── public/
│   ├── favicon.svg                # أيقونة الموقع
│   └── assets/
│       ├── profile.jpg            # صورتك الشخصية الأصلية
│       └── Abd-El-Rahman-Karkar-CV.pdf  # ملف الـ CV القابل للتحميل المباشر
│
├── src/
│   ├── main.jsx                   # نقطة انطلاق تطبيق React
│   ├── App.jsx                    # تجميع كافة الأقسام مع شريط التقدم وزر الصعود
│   ├── index.css                  # أنماط Tailwind وتأثيرات الـ Glassmorphism
│   │
│   ├── data/
│   │   └── portfolio.js           # 🌟 الملف المركزي لجميع بياناتك (Projects, Skills, Bio, Links)
│   │
│   └── components/
│       ├── Navbar.jsx             # شريط التنقل الزجاجي + القائمة للموبايل + زر الـ CV
│       ├── Hero.jsx               # قسم الهيرو مع خلفية Canvas عصبية وإطار الصورة
│       ├── About.jsx              # نبذة عنك، إحصائيات حقيقية من الـ CV، وركائز التخصص
│       ├── Skills.jsx             # كروت المهارات المقسمة بدقة حسب مجالات الـ AI
│       ├── Projects.jsx           # كروت المشاريع مع فلترة حسب التصنيف
│       ├── ProjectModal.jsx       # نافذة منبثقة تفصيلية (Problem, Solution, Dataset, Results)
│       ├── Experience.jsx         # تايم لاين الخبرات العملية والعمل الحر ومبادرة DEPI
│       ├── Education.jsx          # قسم جامعة الدلتا واللغات
│       ├── ResumeCTA.jsx          # قسم تحميل ومعاينة السيرة الذاتية
│       ├── Contact.jsx            # تفاصيل التواصل وفورم المراسلة السريعة
│       ├── Footer.jsx             # الفوتر وحقوق النشر وروابط التواصل
│       ├── ScrollProgress.jsx     # مؤشر التقدم العلوي عند التمرير
│       └── BackToTop.jsx          # زر العودة لأعلى الصفحة
```

---

## 📝 كيفية تخصيص وتعديل البيانات مستقبلاً

### 1. إضافة أو تعديل مشروع:
افتح الملف:
[`src/data/portfolio.js`](./src/data/portfolio.js)
وابحث عن مصفوفة `projectsData`. كل ما عليك هو إضافة عنصر جديد بنفس التنسيق:
```javascript
{
  id: "new-project-id",
  title: "اسم المشروع",
  category: "Computer Vision", // أو "Machine Learning" أو "Deep Learning"
  tags: ["Python", "PyTorch", "OpenCV"],
  image: "رابط صورة المشروع",
  shortDescription: "وصف موجز للمشروع...",
  keyMetrics: [
    { label: "Accuracy", value: "95%" },
    { label: "Dataset", value: "10,000 Samples" }
  ],
  highlights: [
    "النقطة الأولى من الإنجاز...",
    "النقطة الثانية..."
  ],
  details: {
    problem: "المشكلة التي يحلها المشروع...",
    solution: "الحل والمعمارية المستخدمة...",
    dataset: "تفاصيل الداتاسيت...",
    technologies: ["Python", "TensorFlow"],
    methodology: "المنهجية المتبعة...",
    results: "النتائج المحققة..."
  },
  githubUrl: "https://github.com/...",
  liveUrl: null
}
```

### 2. تغيير الصورة الشخصية:
استبدل الملف في المسار:
`public/assets/profile.jpg`
بصورتك الجديدة بنفس الاسم.

### 3. تحديث ملف السيرة الذاتية (CV):
استبدل الملف في المسار:
`public/assets/Abd-El-Rahman-Karkar-CV.pdf`
بملفك المحدث بنفس الاسم ليعمل زر **Download CV** وزر **View CV** فورًا وبدون أي تعديل في الأكواد.

---

## 🌐 كيفية نشر الموقع على Vercel (مجاناً وبدقيقة واحدة)

1. ارفع المشروع إلى حسابك على **GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AI Engineer Portfolio"
   git remote add origin https://github.com/abdelrahmankarkar7-sys/karkar-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. ادخل على موقع [Vercel](https://vercel.com) وسجل الدخول بحساب GitHub.
3. اضغط **Add New Project** واختر المستودع `karkar-portfolio`.
4. اترك جميع الإعدادات الافتراضية (Framework Preset: Vite).
5. اضغط **Deploy**! سيعطيك Vercel رابطًا حيًا عالميًا وسريعًا لموقعك.

---

## 📄 الترخيص وحقوق الملكية
جميع الحقوق محفوظة © 2026 **عبد الرحمن محمد كركار** (Abd El Rahman Mohamed Karkar).
