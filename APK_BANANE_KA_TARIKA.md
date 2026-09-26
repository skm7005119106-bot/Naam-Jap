# APK Kaise Banayein (bina Android Studio ke) + Address bar wali line hatana

## Address bar / "...github.io" wali line kyun aa rahi thi?
Ye app code ka bug nahi tha — index.html, app.js, style.css kahin bhi koi URL text hardcoded nahi hai.
Jab GitHub Pages ke PWA ko APK mein wrap kiya jaata hai (TWA/Trusted Web Activity), Android/Chrome
check karta hai ki APK aur website dono ek hi owner ke hain ya nahi. Ye check `.well-known/assetlinks.json`
file se hota hai. Agar ye file missing hai ya galat fingerprint ke saath hai, Chrome safety ke liye
upar ek chhota address bar dikha deta hai (jaise browser tab mein). File sahi hone par ye bar apne aap
gayab ho jaata hai — koi code change iसे theek nahi kar sakta, sirf ye file sahi karni padti hai.

## Step-by-step (PWABuilder se — free, bina coding ke)

1. **Saari files GitHub repo ke root mein daalein** (is fix wali zip ke andar ki sab files, `.well-known`
   folder sameत), aur GitHub Pages ko `main` branch se enable karein.
2. Pages URL browser mein khol kar check karein ki app sahi khul raha hai
   (e.g. `https://aapka-username.github.io/repo-naam/`).
3. **https://www.pwabuilder.com** par jaayein, apna Pages URL paste karein aur "Start" dabayein.
4. Report aane ke baad **Android** package/package chunein.
5. Package options mein:
   - Package ID (jaise `com.aapkanaam.naamjap`) set karein.
   - **Signing key** ke liye "PWABuilder se naya signing key banayein" wala option chunein (aasaan hai) —
     ya agar pehle se koi `.keystore` hai to wahi use karein.
   - **Signed APK** download karein (unsigned mat lein, warna address bar wapas aayega).
6. Downloaded zip mein ek `assetlinks.json` file milegi (ya "Next steps" page par uska content dikhega).
   Us content ko copy karke is repo ki `.well-known/assetlinks.json` file mein paste kar dein
   (abhi usme placeholder text hai — `REPLACE_WITH_...` — usko replace karna hai).
7. GitHub par push karein, 1-2 minute GitHub Pages ke refresh hone ka wait karein.
8. Check karein: `https://aapka-username.github.io/repo-naam/.well-known/assetlinks.json` khol kar
   dekhein ki wahi JSON dikh raha hai (404 nahi aana chahiye).
9. PWABuilder se mila **.apk** file Android phone par install karein — ab top par koi address bar/
   github.io wali line nahi dikhegi.

## Zaroori baatein
- Signing key (`.keystore` file) ko safe rakhein — agli baar app update karne ke liye wahi key chahiye hoga.
- Agar kabhi package ID ya signing key badla, to `assetlinks.json` ka fingerprint bhi dubara update
  karna padega, warna address bar wapas aa jaayega.
- Play Store par publish karte waqt Google khud bhi ek fingerprint deta hai (App integrity/Play App
  Signing) — wo fingerprint bhi isi `assetlinks.json` array mein ek extra entry ke roop mein add karna
  hota hai.
