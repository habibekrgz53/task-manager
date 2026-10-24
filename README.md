# Görev Yöneticim | Task Manager

React ve Vite kullanılarak geliştirilen, görevleri düzenlemeyi ve ilerlemeyi takip etmeyi sağlayan bir görev yönetimi uygulaması.

## ✨ Özellikler

- Görev ekleme, düzenleme ve silme
- Görevleri tamamlandı olarak işaretleme
- Görev önceliği belirleme (Düşük, Orta, Yüksek)
- Görevlerde arama yapma
- Aktif ve tamamlanan görevleri filtreleme
- Önceliğe ve alfabetik sıraya göre sıralama
- Görev istatistiklerini ve tamamlanma oranını görüntüleme
- `localStorage` ile görevleri tarayıcıda saklama

## 🛠️ Kullanılan Teknolojiler

- React
- JavaScript
- Vite
- HTML ve CSS
- React Hooks (`useState`, `useEffect`)
- Özel Hook (`useTasks`)

## 🚀 Kurulum ve Çalıştırma

Projeyi bilgisayarına indirdikten sonra terminalde proje klasörüne gir ve aşağıdaki komutları çalıştır:

```bash
npm install
npm run dev
```

Terminalde gösterilen yerel adresi tarayıcıda aç.

## 📁 Proje Yapısı

```text
src/
├── components/
│   ├── Stats.jsx
│   ├── TaskForm.jsx
│   ├── TaskItem.jsx
│   └── TaskList.jsx
├── hooks/
│   └── useTasks.js
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## 🎯 Projenin Amacı

Bu proje, React bileşenleri, özel Hook geliştirme, durum yönetimi ve kullanıcı etkileşimleri konularında pratik yapmak amacıyla geliştirilmiştir.