# Quote research for the UCAS IT Club quote card

These are candidate quotes to replace the 20 placeholder lines in `quotes.js`. Every candidate has a named author and a source. Nothing here is on the page yet. Review the list, cut it down to 100-120, then move the chosen lines into `quotes.js`.

- **Date:** 2026-11-09
- **Candidates:** 132 (numbered 1-132 across the file)
- **Card limits:** Arabic 8 words or fewer, English 10 words or fewer. Lines that cannot fit without paraphrasing are marked **too long**. Their excerpts use "…" and never add words.

## How this was checked

- **Quran:** The Arabic (imlaei script) and the Saheeh International English were pulled for each verse from the quran.com API (`api.quran.com/api/v4`, translation id 20). Square brackets in the English are Saheeh International's own additions.
- **Hadith:** sunnah.com blocks automated fetching (HTTP 403), so it could not be read directly. Arabic and English texts come from the [AhmedBaset/hadith-json](https://github.com/AhmedBaset/hadith-json) dataset, which was scraped from sunnah.com. Grades for books outside Bukhari and Muslim come from islamtics.com, which mirrors sunnah.com's grading panel, and from sunnah.com search snippets. **Before publishing, open each sunnah.com link once to confirm the number and the grade.**
- **Wikiquote:** English Wikiquote pages were read as raw wikitext, and each quote's section (Sourced, Disputed or Misattributed) was recorded along with its citation.
- **Arabic texts:** Poems and books were checked on Arabic Wikisource (ar.wikisource.org) where a page existed: al-Mutanabbi, al-Shabbi, Ibn al-Jawzi's *Sayd al-Khatir*, al-Ghazali's *Ayyuha al-Walad*, Ilya Abu Madi (quoted in *al-Risala*), al-Shafi'i's Diwan and Ibrahim Tuqan. The remaining Arabic texts come from secondary sources that name the book.
- **Quote Investigator:** QI was consulted through search results only. Its pages were not opened directly.
- **Translations:** An Arabic card for an English quote is my translation into Modern Standard Arabic and is marked "(tr.)". An English card for an Arabic non-scripture quote is also my translation unless a published translation is named. **All "(tr.)" lines need review by a native Arabic speaker.**

### Confidence levels

- **Verified:** I located the primary text myself (a facsimile, the author's own book or paper, the Wikisource text, a hadith in Bukhari or Muslim, or a speech archive).
- **Sourced:** A reliable secondary source supports it, such as Wikiquote's sourced section with a citation, a sunnah.com grade, or multiple scholarly citations of a named book.
- **Attributed:** The attribution is traditional or disputed, or comes from only one weak source. The note on each one says why.

### Counts

| Category | Entries | Verified | Sourced | Attributed |
|---|---|---|---|---|
| 1. Quran | 17 (#1-17) | 17 (scripture text) | – | – |
| 2. Hadith | 21 (#18-38) | 15 (Bukhari/Muslim) | 5 | 1 |
| 3. Companions, scholars, Muslim scientists | 22 (#39-60) | 5 | 9 | 8 |
| 4. Arab and Palestinian poets and writers | 18 (#61-78) | 6 | 12 | 0 |
| 5. Scientists, computing pioneers, other figures | 54 (#79-132) | 12 | 39 | 3 |
| **Total** | **132** | **55** (17 scripture + 38) | **65** | **12** |

The 15 Bukhari/Muslim hadith count as "Verified" because the text appears in a sahih collection. Their grade is not debated. The other hadith are "Sourced", relying on graders shown on sunnah.com or its mirrors.

---

## 1. Quran (17)

All Arabic is from quran.com. All English is Saheeh International.

1. **Quran, al-Sharh 94:5-6** — Scripture
   - Original: «فَإِنَّ مَعَ الْعُسْرِ يُسْرًا ۝ إِنَّ مَعَ الْعُسْرِ يُسْرًا»
   - Card AR: فَإِنَّ مَعَ الْعُسْرِ يُسْرًا | Card EN: For indeed, with hardship [will be] ease.
   - Source: [quran.com/94/5-6](https://quran.com/94/5-6)

2. **Quran, al-Najm 53:39** — Scripture
   - Original: «وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ»
   - Card AR: وَأَن لَّيْسَ لِلْإِنسَانِ إِلَّا مَا سَعَىٰ | Card EN: …there is not for man except that for which he strives
   - Source: [quran.com/53/39](https://quran.com/53/39)
   - Note: The English excerpt leaves out "And that" and the bracketed "[good]".

3. **Quran, al-Ra'd 13:11** — Scripture
   - Original: «إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ»
   - Card AR: إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ | Card EN: Allah will not change the condition of a people until they change what is in themselves.
   - Source: [quran.com/13/11](https://quran.com/13/11)
   - Note: **Too long** (AR 9 words, EN 16 words). This phrase is the middle of a longer verse.

4. **Quran, Taha 20:114** — Scripture
   - Original: «وَقُل رَّبِّ زِدْنِي عِلْمًا»
   - Card AR: وَقُل رَّبِّ زِدْنِي عِلْمًا | Card EN: My Lord, increase me in knowledge.
   - Source: [quran.com/20/114](https://quran.com/20/114)

5. **Quran, al-Zumar 39:9** — Scripture
   - Original: «قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ»
   - Card AR: هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ | Card EN: Are those who know equal to those who do not know?
   - Source: [quran.com/39/9](https://quran.com/39/9)
   - Note: The English card is 11 words, one over the limit.

6. **Quran, al-Zumar 39:53** — Scripture
   - Original: «لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ»
   - Card AR: لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ | Card EN: Do not despair of the mercy of Allah.
   - Source: [quran.com/39/53](https://quran.com/39/53)

7. **Quran, Yusuf 12:87** — Scripture
   - Original: «وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ»
   - Card AR: وَلَا تَيْأَسُوا مِن رَّوْحِ اللَّهِ | Card EN: Despair not of relief from Allah.
   - Source: [quran.com/12/87](https://quran.com/12/87)

8. **Quran, al-Baqara 2:286** — Scripture
   - Original: «لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا»
   - Card AR: لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا | Card EN: Allah does not charge a soul except [with that within] its capacity.
   - Source: [quran.com/2/286](https://quran.com/2/286)
   - Note: The English is 9 words without the bracketed insertion and 12 with it. Decide whether cards keep the brackets.

9. **Quran, al-'Ankabut 29:69** — Scripture
   - Original: «وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا»
   - Card AR: وَالَّذِينَ جَاهَدُوا فِينَا لَنَهْدِيَنَّهُمْ سُبُلَنَا | Card EN: And those who strive for Us – We will surely guide them
   - Source: [quran.com/29/69](https://quran.com/29/69)

10. **Quran, al-Tawba 9:105** — Scripture
    - Original: «وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ وَرَسُولُهُ وَالْمُؤْمِنُونَ»
    - Card AR: وَقُلِ اعْمَلُوا فَسَيَرَى اللَّهُ عَمَلَكُمْ | Card EN: Do [as you will], for Allah will see your deeds
    - Source: [quran.com/9/105](https://quran.com/9/105)
    - Note: Saheeh International renders اعملوا as "Do [as you will]". Many other translations say "Work".

11. **Quran, al-'Alaq 96:1** — Scripture
    - Original: «اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ»
    - Card AR: اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ | Card EN: Recite in the name of your Lord who created
    - Source: [quran.com/96/1](https://quran.com/96/1)
    - Note: Other translations render اقرأ as "Read", which suits a learning club better.

12. **Quran, al-Talaq 65:7** — Scripture
    - Original: «سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا»
    - Card AR: سَيَجْعَلُ اللَّهُ بَعْدَ عُسْرٍ يُسْرًا | Card EN: Allah will bring about, after hardship, ease.
    - Source: [quran.com/65/7](https://quran.com/65/7)

13. **Quran, al-Mujadila 58:11** — Scripture
    - Original: «يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ»
    - Card AR: يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ | Card EN: Allah will raise those who have believed among you and those who were given knowledge, by degrees.
    - Source: [quran.com/58/11](https://quran.com/58/11)
    - Note: **Too long** (AR 9, EN 17). Do not shorten it by dropping "those who have believed", because that changes the meaning.

14. **Quran, Al 'Imran 3:139** — Scripture
    - Original: «وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنتُمُ الْأَعْلَوْنَ إِن كُنتُم مُّؤْمِنِينَ»
    - Card AR: وَلَا تَهِنُوا وَلَا تَحْزَنُوا | Card EN: So do not weaken and do not grieve
    - Source: [quran.com/3/139](https://quran.com/3/139)
    - Note: The verse was revealed after the battle of Uhud. Some readers will see a political or military context.

15. **Quran, al-Kahf 18:30** — Scripture
    - Original: «إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا»
    - Card AR: إِنَّا لَا نُضِيعُ أَجْرَ مَنْ أَحْسَنَ عَمَلًا | Card EN: We will not allow to be lost the reward of any who did well in deeds.
    - Source: [quran.com/18/30](https://quran.com/18/30)
    - Note: The English is **too long** (15 words). The Arabic أحسن عملا is the Quranic root of the إتقان theme.

16. **Quran, al-Baqara 2:153** — Scripture
    - Original: «اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ ۚ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ»
    - Card AR: إِنَّ اللَّهَ مَعَ الصَّابِرِينَ | Card EN: Indeed, Allah is with the patient.
    - Source: [quran.com/2/153](https://quran.com/2/153)

17. **Quran, al-Talaq 65:3** — Scripture
    - Original: «وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ»
    - Card AR: وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ | Card EN: And whoever relies upon Allah – then He is sufficient for him.
    - Source: [quran.com/65/3](https://quran.com/65/3)
    - Note: The English card is 11 words, one over the limit.

---

## 2. Hadith (21)

The English is sunnah.com's translation as found in the dataset. Wording in parentheses comes from that translation, not from me.

18. **Prophet Muhammad ﷺ (narrated by Abu Hurayra)** — Verified (Sahih Muslim)
    - Original: «وَمَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ»
    - Card AR: مَنْ سَلَكَ طَرِيقًا يَلْتَمِسُ فِيهِ عِلْمًا سَهَّلَ اللَّهُ لَهُ بِهِ طَرِيقًا إِلَى الْجَنَّةِ | Card EN: he who treads the path in search of knowledge, Allah would make that path easy, leading to Paradise for him
    - Source: Sahih Muslim 2699, [sunnah.com/muslim:2699a](https://sunnah.com/muslim:2699a)
    - Note: **Too long** (AR 13). Cutting it after علما leaves an unfinished sentence, so use a two-line card or drop it.

19. **Prophet Muhammad ﷺ (Abu Hurayra)** — Verified (Sahih Muslim)
    - Original: «احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجِزْ»
    - Card AR: احْرِصْ عَلَى مَا يَنْفَعُكَ وَاسْتَعِنْ بِاللَّهِ وَلاَ تَعْجِزْ | Card EN: seek help from Allah and do not lose heart
    - Source: Sahih Muslim 2664, [sunnah.com/muslim:2664](https://sunnah.com/muslim:2664)
    - Note: The full sunnah.com English, "cherish that which gives you benefit (in the Hereafter) and seek help from Allah and do not lose heart", is too long, so the card uses its second half.

20. **Prophet Muhammad ﷺ (Anas ibn Malik)** — Sourced (Sahih, al-Albani)
    - Original: «إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ، فَإِنِ اسْتَطَاعَ أَنْ لاَ تَقُومَ حَتَّى يَغْرِسَهَا فَلْيَغْرِسْهَا»
    - Card AR: إِنْ قَامَتِ السَّاعَةُ وَفِي يَدِ أَحَدِكُمْ فَسِيلَةٌ… فَلْيَغْرِسْهَا | Card EN: If the Final Hour comes while you have a shoot of a plant in your hands… you should plant it.
    - Source: al-Adab al-Mufrad 479, [sunnah.com/adab:479](https://sunnah.com/adab:479). It is graded Sahih by al-Albani (per amrayn.com, tohed.com and sunnah.com search results).
    - Note: The English is **too long**. The Arabic excerpt (8 words) leaves out "if he is able to before it comes".

21. **Prophet Muhammad ﷺ ('A'isha)** — Verified (Sahih Muslim; also Bukhari)
    - Original: «أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ تَعَالَى أَدْوَمُهَا وَإِنْ قَلَّ»
    - Card AR: أَحَبُّ الأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ | Card EN: The acts most pleasing to Allah are those which are done continuously, even if they are small.
    - Source: Sahih Muslim 783, [sunnah.com/muslim:783](https://sunnah.com/muslim:783). The question-and-answer form is Bukhari 6464.
    - Note: The English is **too long** (17 words). The Arabic card leaves out تعالى.

22. **Prophet Muhammad ﷺ (Anas)** — Sourced (Hasan)
    - Original: «اعْقِلْهَا وَتَوَكَّلْ»
    - Card AR: اعْقِلْهَا وَتَوَكَّلْ | Card EN: Tie it and rely (upon Allah).
    - Source: Jami' al-Tirmidhi 2517, [sunnah.com/tirmidhi:2517](https://sunnah.com/tirmidhi:2517). Darussalam, Ahmad Shakir, al-Albani and Zubair Ali Zai all grade it Hasan (per islamtics.com).
    - Note: Al-Tirmidhi calls it *gharib* (single-route), and Yahya al-Qattan, a narrator in the chain, called it *munkar*. The later graders still accept it as hasan.

23. **Prophet Muhammad ﷺ ('Umar ibn al-Khattab)** — Sourced (Hasan sahih)
    - Original: «لَوْ أَنَّكُمْ كُنْتُمْ تَوَكَّلُونَ عَلَى اللَّهِ حَقَّ تَوَكُّلِهِ لَرُزِقْتُمْ كَمَا تُرْزَقُ الطَّيْرُ تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا»
    - Card AR: تَغْدُو خِمَاصًا وَتَرُوحُ بِطَانًا | Card EN: it goes out in the morning empty, and returns full
    - Source: Jami' al-Tirmidhi 2344, [sunnah.com/tirmidhi:2344](https://sunnah.com/tirmidhi:2344). Tirmidhi: hasan sahih. Al-Albani: Sahih. Darussalam: Hasan.
    - Note: The excerpt only makes sense if the card adds context, so it is effectively **too long**. Its message is that reliance on Allah goes together with going out to work.

24. **Prophet Muhammad ﷺ (Shaddad ibn Aws)** — Verified (Sahih Muslim)
    - Original: «إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَىْءٍ»
    - Card AR: إِنَّ اللَّهَ كَتَبَ الإِحْسَانَ عَلَى كُلِّ شَىْءٍ | Card EN: Verily Allah has enjoined goodness to everything
    - Source: Sahih Muslim 1955, [sunnah.com/muslim:1955](https://sunnah.com/muslim:1955)
    - Note: This is the strongest authentic hadith on excellence (إحسان). The rest of the hadith is about slaughtering animals humanely.

25. **Prophet Muhammad ﷺ ('Uthman)** — Verified (Sahih al-Bukhari)
    - Original: «خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ»
    - Card AR: خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ | Card EN: The best among you… are those who learn the Qur'an and teach it.
    - Source: Sahih al-Bukhari 5027, [sunnah.com/bukhari:5027](https://sunnah.com/bukhari:5027)
    - Note: The English is 11 words without the parenthetical "(Muslims)". The hadith is about the Quran specifically.

26. **Prophet Muhammad ﷺ ('Abdullah ibn 'Amr)** — Verified (Sahih al-Bukhari)
    - Original: «بَلِّغُوا عَنِّي وَلَوْ آيَةً»
    - Card AR: بَلِّغُوا عَنِّي وَلَوْ آيَةً | Card EN: Convey (my teachings)… even if it were a single sentence
    - Source: Sahih al-Bukhari 3461, [sunnah.com/bukhari:3461](https://sunnah.com/bukhari:3461)

27. **Prophet Muhammad ﷺ (al-Miqdam)** — Verified (Sahih al-Bukhari)
    - Original: «مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ»
    - Card AR: مَا أَكَلَ أَحَدٌ طَعَامًا قَطُّ خَيْرًا مِنْ أَنْ يَأْكُلَ مِنْ عَمَلِ يَدِهِ | Card EN: Nobody has ever eaten a better meal than that which one has earned by working with one's own hands.
    - Source: Sahih al-Bukhari 2072, [sunnah.com/bukhari:2072](https://sunnah.com/bukhari:2072)
    - Note: **Too long** in both languages.

28. **Prophet Muhammad ﷺ (Ibn 'Abbas)** — Verified (Sahih al-Bukhari)
    - Original: «نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ، الصِّحَّةُ وَالْفَرَاغُ»
    - Card AR: نِعْمَتَانِ مَغْبُونٌ فِيهِمَا كَثِيرٌ مِنَ النَّاسِ: الصِّحَّةُ وَالْفَرَاغُ | Card EN: There are two blessings that many people are deceived into losing: health and free time.
    - Source: Sahih al-Bukhari 6412, [sunnah.com/bukhari:6412](https://sunnah.com/bukhari:6412)
    - Note: The Arabic fits (8 words). The English is **too long** (15).

29. **Prophet Muhammad ﷺ (Abu Sa'id al-Khudri)** — Verified (Sahih al-Bukhari)
    - Original: «وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ»
    - Card AR: وَمَا أُعْطِيَ أَحَدٌ عَطَاءً خَيْرًا وَأَوْسَعَ مِنَ الصَّبْرِ | Card EN: Nobody can be given a blessing better and greater than patience.
    - Source: Sahih al-Bukhari 1469, [sunnah.com/bukhari:1469](https://sunnah.com/bukhari:1469)

30. **Prophet Muhammad ﷺ (Abu Hurayra)** — Verified (Sahih al-Bukhari)
    - Original: «إِنَّ الدِّينَ يُسْرٌ… فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا»
    - Card AR: فَسَدِّدُوا وَقَارِبُوا وَأَبْشِرُوا | Card EN: try to be near to perfection and receive the good tidings
    - Source: Sahih al-Bukhari 39, [sunnah.com/bukhari:39](https://sunnah.com/bukhari:39)
    - Note: The English card is 11 words. Sunnah.com's English here is loose; a closer rendering is "aim straight, come close, and rejoice".

31. **Prophet Muhammad ﷺ (Anas)** — Verified (Sahih al-Bukhari)
    - Original: «يَسِّرُوا وَلاَ تُعَسِّرُوا، وَبَشِّرُوا وَلاَ تُنَفِّرُوا»
    - Card AR: يَسِّرُوا وَلاَ تُعَسِّرُوا، وَبَشِّرُوا وَلاَ تُنَفِّرُوا | Card EN: Facilitate things to people… and do not make it hard for them
    - Source: Sahih al-Bukhari 69, [sunnah.com/bukhari:69](https://sunnah.com/bukhari:69)
    - Note: The English is 12 words. This is a good motto for club mentors.

32. **Prophet Muhammad ﷺ (Mu'awiya)** — Verified (Sahih al-Bukhari)
    - Original: «مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ»
    - Card AR: مَنْ يُرِدِ اللَّهُ بِهِ خَيْرًا يُفَقِّهْهُ فِي الدِّينِ | Card EN: If Allah wants to do good to a person, He makes him comprehend the religion.
    - Source: Sahih al-Bukhari 71, [sunnah.com/bukhari:71](https://sunnah.com/bukhari:71)
    - Note: The English is **too long** (14). The hadith is about religious understanding specifically.

33. **Prophet Muhammad ﷺ (Abu Hurayra)** — Verified (Sahih Muslim)
    - Original: «إِذَا مَاتَ الإِنْسَانُ انْقَطَعَ عَنْهُ عَمَلُهُ إِلاَّ مِنْ ثَلاَثَةٍ… أَوْ عِلْمٍ يُنْتَفَعُ بِهِ»
    - Card AR: (needs the full sentence) | Card EN: When a man dies, his acts come to an end, but three… or knowledge (by which people) benefit
    - Source: Sahih Muslim 1631, [sunnah.com/muslim:1631](https://sunnah.com/muslim:1631)
    - Note: **Too long**, and it is framed around death. It is listed because it is the core text on lasting knowledge (open source code, teaching).

34. **Prophet Muhammad ﷺ (Abu Mas'ud al-Ansari)** — Verified (Sahih Muslim)
    - Original: «مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ»
    - Card AR: مَنْ دَلَّ عَلَى خَيْرٍ فَلَهُ مِثْلُ أَجْرِ فَاعِلِهِ | Card EN: One who guides to something good has a reward similar to that of its doer.
    - Source: Sahih Muslim 1893, [sunnah.com/muslim:1893](https://sunnah.com/muslim:1893)
    - Note: The English is 14 words.

35. **Prophet Muhammad ﷺ (Suhayb)** — Verified (Sahih Muslim)
    - Original: «عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ»
    - Card AR: عَجَبًا لأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ | Card EN: there is good in every affair of his
    - Source: Sahih Muslim 2999, [sunnah.com/muslim:2999](https://sunnah.com/muslim:2999)

36. **Prophet Muhammad ﷺ (Ibn 'Abbas)** — Sourced (Hasan sahih)
    - Original: «احْفَظِ اللَّهَ يَحْفَظْكَ»
    - Card AR: احْفَظِ اللَّهَ يَحْفَظْكَ | Card EN: Be mindful of Allah and He will protect you.
    - Source: Jami' al-Tirmidhi 2516, [sunnah.com/tirmidhi:2516](https://sunnah.com/tirmidhi:2516). Tirmidhi: hasan sahih. Al-Albani and Ahmad Shakir: Sahih.
    - Note: The well-known continuation "واعلم أن النصر مع الصبر وأن الفرج مع الكرب" is **not** in Tirmidhi's version. It is in Musnad Ahmad, which I did not check.

37. **Prophet Muhammad ﷺ ('A'isha)** — Attributed (grading disputed)
    - Original: «إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ»
    - Card AR: إِنَّ اللَّهَ يُحِبُّ إِذَا عَمِلَ أَحَدُكُمْ عَمَلًا أَنْ يُتْقِنَهُ | Card EN (tr.): Allah loves that when one of you works, he perfects it.
    - Source: Not on sunnah.com. It is reported by Abu Ya'la (4386), al-Tabarani in *al-Awsat* (897) and al-Bayhaqi in *Shu'ab al-Iman* (4929). Al-Albani graded it **hasan** in *Sahih al-Jami'* (1880), and there is a related narration in *al-Silsila al-Sahiha* (vol. 3, p. 107). See [dorar.net](https://dorar.net/h/UtSlZmEN?osoul=1) and [mawdoo3 commentary](https://mawdoo3.com/شرح_حديث_(إن_الله_يحب_إذا_عمل_أحدكم_عملًا_أن_يتقنه)).
    - Note: The Arabic is 9 words (**too long** by one) and the English is 11. The hadith has only one chain (Mus'ab ibn Thabit, then Bishr ibn al-Sari). Many earlier critics graded it weak; al-Albani and other later scholars strengthened it through supporting routes. If used, cite it as «حسّنه الألباني».

38. **Prophet Muhammad ﷺ (Anas)** — Sourced, with a caveat
    - Original: «طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ»
    - Card AR: طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ | Card EN: Seeking knowledge is a duty upon every Muslim
    - Source: Sunan Ibn Majah 224, [sunnah.com/ibnmajah:224](https://sunnah.com/ibnmajah:224)
    - Note: Darussalam grades the chain of the full Ibn Majah narration *da'if jiddan* (very weak). Sunnah.com's note says that the first sentence is authentic through many other routes, and al-Albani graded that sentence Sahih. Only the first sentence is usable; the rest of the narration (about necklaces on swine) is rejected.

---

## 3. Companions, early Muslims, scholars and Muslim scientists (24)

39. **'Umar ibn al-Khattab** (d. 23 AH / 644, second caliph) — Sourced
    - Original: «تَفَقَّهُوا قَبْلَ أَنْ تُسَوَّدُوا» (al-Bukhari adds: «وبعد أن تُسَوَّدوا»)
    - Card AR: تَفَقَّهُوا قَبْلَ أَنْ تُسَوَّدُوا | Card EN (tr.): Gain understanding before you are made leaders.
    - Source: Sahih al-Bukhari, Book of Knowledge, chapter «الاغتباط في العلم والحكمة», as an unconnected report (*mu'allaq*). It is connected with a chain in Sunan al-Darimi 256, and Ibn Muflih judged that chain sahih. See [dorar.net commentary](https://dorar.net/hadith/sharh/209587).
    - Note: Al-Bukhari's addition, "and after you are made leaders", means it is never too late to learn. The card could include it as «تفقهوا قبل أن تسودوا، وبعد أن تسودوا».

40. **Yahya ibn Abi Kathir** (d. 132 AH, Successor and hadith scholar) — Verified
    - Original: «لاَ يُسْتَطَاعُ الْعِلْمُ بِرَاحَةِ الْجِسْمِ»
    - Card AR: لاَ يُسْتَطَاعُ الْعِلْمُ بِرَاحَةِ الْجِسْمِ | Card EN: Knowledge cannot be acquired with sloth. (sunnah.com translation)
    - Source: Sahih Muslim 612 (narrated with a chain from his son 'Abdullah), [sunnah.com/muslim:612](https://sunnah.com/muslim:612)
    - Note: This is Yahya's own saying, not a hadith. Al-Nawawi remarks on Muslim's unusual choice to include it.

41. **'Ali ibn Abi Talib** (d. 40 AH / 661, fourth caliph) — Attributed
    - Original: «قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ»
    - Card AR: قِيمَةُ كُلِّ امْرِئٍ مَا يُحْسِنُهُ | Card EN (tr.): Each person's worth is what they do well.
    - Source: Al-Jahiz, *al-Bayan wa'l-Tabyin* (3rd century AH). Al-Jahiz attributes it to 'Ali and praises it at length, a century before *Nahj al-Balagha* was compiled. It also appears in *Nahj al-Balagha* (sayings). See [forums.alkafeel.net summary of al-Jahiz](https://forums.alkafeel.net/node/872816).
    - Note: Because al-Jahiz records it early, this is the best attested of the 'Ali sayings here. A good fit for the إتقان theme.

42. **'Ali ibn Abi Talib** — Attributed
    - Original: «الْفُرْصَةُ تَمُرُّ مَرَّ السَّحَابِ، فَانْتَهِزُوا فُرَصَ الْخَيْرِ»
    - Card AR: الفرصة تمر مر السحاب، فانتهزوا فرص الخير | Card EN (tr.): Opportunity passes like clouds; seize the chances for good.
    - Source: *Nahj al-Balagha*, saying 21 (compiled by al-Sharif al-Radi, d. 406 AH). See [thaqalayn.net 32/3/21](https://thaqalayn.net/chapter/32/3/21).
    - Note: *Nahj al-Balagha* was compiled about 350 years after 'Ali, and many Sunni critics (for example Ibn Hajar, al-Dhahabi) question its attribution.

43. **al-Hasan al-Basri** (d. 110 AH, Successor, preacher of Basra) — Attributed
    - Original (English as given by the source): "The life of this world is made up of three days: yesterday has gone with all that was done; tomorrow, you may never reach; but today is for you so do what you should do today."
    - Card AR (tr.): اليوم لك، فاعمل فيه ما ينبغي | Card EN: today is for you so do what you should do today
    - Source: Al-Bayhaqi, *al-Zuhd al-Kabir*, p. 197, as cited on [Wikiquote](https://en.wikiquote.org/wiki/Hasan_al-Basri).
    - Note: I did not locate the Arabic original in *al-Zuhd*, so the Arabic card is a back-translation. Replace it with the original wording if you find it.

44. **al-Hasan al-Basri** — Attributed
    - Original: «يا ابنَ آدم، إنما أنت أيام، كلما ذهب يومٌ ذهب بعضُك»
    - Card AR: يا ابن آدم، إنما أنت أيام | Card EN (tr.): Son of Adam, you are only days.
    - Source: Abu Nu'aym, *Hilyat al-Awliya'* 2/148, via Salih al-Murri. See [hadithanswers.com](https://hadithanswers.com/man-is-nothing-but-a-span-of-days/).
    - Note: The chain is weak (Salih al-Murri). A similar saying is reported from Abu al-Darda'.

45. **al-Shafi'i** (d. 204 AH, founder of the Shafi'i school) — Attributed
    - Original: «ومن لم يذق مرَّ التعلم ساعةً / تجرَّع ذلَّ الجهل طولَ حياته»
    - Card AR: ومن لم يذق مر التعلم ساعة… تجرع ذل الجهل طول حياته | Card EN (tr.): Whoever never tastes learning's bitterness drinks ignorance's humiliation lifelong.
    - Source: *Diwan al-Shafi'i*, the poem «اصبر على مر الجفا من معلم», [aldiwan.net/poem24719](https://www.aldiwan.net/poem24719.html)
    - Note: The Arabic is **too long** (11 words), so use two lines. The Diwan was compiled long after al-Shafi'i, and much of its poetry is attributed to him without a firm chain. *Tabaqat al-Shafi'iyya* records a similar prose saying from al-Asma'i: «من لم يحتمل ذل التعلم ساعة بقي في ذل الجهل أبدا».

46. **al-Shafi'i** — Attributed
    - Original: «تغرَّب عن الأوطان في طلب العلا / وسافر ففي الأسفار خمسُ فوائد»
    - Card AR: تغرب عن الأوطان في طلب العلا | Card EN (tr.): Leave your homeland in pursuit of high goals.
    - Source: *Diwan al-Shafi'i*, rhyming in dal (قافية الدال), on [ar.wikisource](https://ar.wikisource.org/wiki/قافية_الدال)
    - Note: Same Diwan caveat as #45. For students in Gaza, who mostly cannot travel, this line may read badly. See Open questions.

47. **Ahmad ibn Hanbal** (d. 241 AH, founder of the Hanbali school) — Attributed
    - Original: «مع المحبرة إلى المقبرة»
    - Card AR: مع المحبرة إلى المقبرة | Card EN (tr.): With the inkpot until the grave.
    - Source: Ahmad's reply when asked why he still studied despite his rank, as reported in later biographies. Found on [Shamela (book 8322, p. 808)](https://shamela.ws/book/8322/808). It is often attributed to Ibn al-Jawzi's *Manaqib al-Imam Ahmad*, but I could not confirm it there.
    - Note: The message is lifelong learning.

48. **Ibn Qayyim al-Jawziyya** (d. 751 AH, Damascene scholar) — Sourced
    - Original: «إضاعة الوقت أشد من الموت، لأن إضاعة الوقت تقطعك عن الله والدار الآخرة، والموت يقطعك عن الدنيا وأهلها»
    - Card AR: إضاعة الوقت أشد من الموت | Card EN (tr.): Wasting time is worse than death.
    - Source: Ibn al-Qayyim, *al-Fawa'id*, as quoted by [kalemtayeb.com](https://kalemtayeb.com/hekam/item/5571) and islamonline.net.
    - Note: I did not check the page in a printed edition. On a card the excerpt sounds harsher than the full sentence, which explains that wasted time cuts you off from God and the Hereafter.

49. **Ibn Taymiyya** (d. 728 AH, Damascene scholar, died in prison) — Sourced
    - Original: «ما يصنع أعدائي بي؟ أنا جنتي وبستاني في صدري»
    - Card AR: أنا جنتي وبستاني في صدري | Card EN (tr.): My paradise and my garden are in my chest.
    - Source: Reported by his student Ibn al-Qayyim, who heard him say it («سمعت شيخ الإسلام ابن تيمية يقول»), usually located in *al-Wabil al-Sayyib*. See [alukah.net collection](https://www.alukah.net/rommany/11642/74571/).
    - Note: An eyewitness reported it, so it is near-primary, but I did not confirm the exact location in *al-Wabil al-Sayyib*. Ibn Taymiyya said it while imprisoned, a message of inner freedom under confinement that fits Gaza.

50. **Ibn al-Haytham (Alhazen)** (d. c. 430 AH / c. 1040, physicist, founder of experimental optics) — Sourced
    - Original: «فطالب الحق ليس هو الناظر في كتب المتقدمين المسترسل مع طبعه في حسن الظن بهم، بل طالب الحق هو المتهم لظنه فيهم، المتوقف فيما يفهمه عنهم، المتبع الحجة والبرهان…»
    - Card AR: طالب الحق… المتبع الحجة والبرهان | Card EN: The seeker after the truth… submits to argument and demonstration (A. I. Sabra's translation)
    - Source: Ibn al-Haytham, *al-Shukuk 'ala Batlamyus* (*Doubts Concerning Ptolemy*), introduction. The English is Sabra's translation in [Harvard Magazine, 2003](http://harvardmagazine.com/2003/09/ibn-al-haytham-html), quoted on [Wikiquote/Alhazen](https://en.wikiquote.org/wiki/Alhazen).
    - Note: Printed editions differ in wording (some read «المسيء لظنه فيهم» instead of «المتهم لظنه فيهم»), so check the Arabic against an edited text (Sabra & Shehaby, Cairo 1971).

51. **Ibn al-Haytham** — Sourced
    - Original: «فالواجب على الناظر في كتب العلوم، إذا كان غرضه معرفة الحقائق، أن يجعل نفسه خصمًا لكل ما ينظر فيه»
    - Card AR: أن يجعل نفسه خصما لكل ما ينظر فيه | Card EN: …to make himself an enemy of all that he reads (Sabra)
    - Source: Same passage of *al-Shukuk 'ala Batlamyus*. Sabra's English: "the duty of the man who investigates the writings of scientists, if learning the truth is his goal, is to make himself an enemy of all that he reads". [Wikiquote/Alhazen](https://en.wikiquote.org/wiki/Alhazen)
    - Note: The Arabic wording is as widely cited; I did not check it against the edition. This is ideal for a code-review culture.

52. **Ibn Sina (Avicenna)** (d. 428 AH / 1037, physician and philosopher) — Sourced
    - Original (paraphrase of the narrative): he says he read Aristotle's *Metaphysics* and could not understand it, «حتى أعدتُ قراءته أربعين مرة وصار لي محفوظًا»
    - Card AR: أعدت قراءته أربعين مرة | Card EN (tr.): I read it again forty times.
    - Source: Ibn Sina's autobiography (*Sirat al-Shaykh al-Ra'is*, dictated to al-Juzjani), preserved in Ibn Abi Usaybi'a, *'Uyun al-Anba'*. Summary on [Shamela](https://shamela.ws/book/273/9).
    - Note: The story goes on to say that understanding came only when he found al-Farabi's commentary, bought cheaply in the booksellers' market. It is a good story about persistence and about using other people's explanations (documentation).

53. **Abu Hamid al-Ghazali** (d. 505 AH / 1111, theologian) — Verified
    - Original: «العلم بلا عمل جنون، والعمل بغير علم لا يكون»
    - Card AR: العلم بلا عمل جنون، والعمل بغير علم لا يكون | Card EN (tr.): Knowledge without action is madness; action without knowledge is impossible.
    - Source: Al-Ghazali, *Ayyuha al-Walad*, on [ar.wikisource](https://ar.wikisource.org/wiki/أيها_الولد)

54. **Ibn Rushd (Averroes)** (d. 595 AH / 1198, philosopher, judge, physician) — Sourced
    - Original: «فإن الحق لا يضاد الحق، بل يوافقه ويشهد له»
    - Card AR: الحق لا يضاد الحق، بل يوافقه ويشهد له | Card EN: Truth does not oppose truth but accords with it (G. Hourani's translation)
    - Source: Ibn Rushd, *Fasl al-Maqal* (Markaz Dirasat al-Wahda al-'Arabiyya ed., 2002). Cited in several academic papers, for example [mominoun.com PDF](https://www.mominoun.com/pdf1/2022-12/63a0a02d1192e870931904.pdf).
    - Note: The point is that science and revelation do not conflict. The English card is my excerpt of Hourani's rendering, from memory and not re-checked; the full rendering continues "and bears witness to it".

55. **Ibn Khaldun** (d. 808 AH / 1406, historian, *Muqaddimah*) — Sourced
    - Original: «الحذق في العلم والتفنن فيه والاستيلاء عليه إنما هو بحصول ملكة…»
    - Card AR: الحذق في العلم… إنما هو بحصول ملكة | Card EN (tr.): Skill in a science comes only from acquiring a habit.
    - Source: *Muqaddimah*, Book 6, the chapter on teaching as a craft. Quoted on [islamonline.net](https://islamonline.net/التخصص-الشريعة-الإسلامية-عند-ابن-خلدو/).
    - Note: ملكة means a skill rooted by practice, which is the case for practice over memorisation. Rosenthal's English translation could replace mine.

56. **Ibn Khaldun** — Sourced
    - Original (chapter title): «في أن الرحلة في طلب العلوم ولقاء المشيخة مزيد كمال في التعلم»
    - Card AR: لقاء المشيخة مزيد كمال في التعلم | Card EN (tr.): Meeting teachers adds perfection to learning.
    - Source: *Muqaddimah*, Book 6. Page numbers vary by edition. See [Shamela 1581](https://shamela.ws/book/1581/21).
    - Note: The full title is **too long**. The card drops the travel half. Editions differ between التعلم and التعليم.

57. **Ibn al-Jawzi** (d. 597 AH, Baghdadi scholar and preacher) — Verified
    - Original: «من علامة كمال العقل: علو الهمة. والراضي بالدون دنيء»
    - Card AR: من علامة كمال العقل علو الهمة | Card EN (tr.): A sign of a complete mind is high aspiration.
    - Source: *Sayd al-Khatir*, the chapter «كمال العقل», on [ar.wikisource](https://ar.wikisource.org/wiki/صيد_الخاطر/فصل:_كمال_العقل)

58. **Ibn al-Jawzi** — Verified
    - Original: «فينبغي للعاقل أن ينتهي إلى غاية ما يمكنه»
    - Card AR: ينبغي للعاقل أن ينتهي إلى غاية ما يمكنه | Card EN (tr.): The wise should reach the utmost of what they can.
    - Source: *Sayd al-Khatir*, the chapter «لا تنون عن طلب الكمال», on [ar.wikisource](https://ar.wikisource.org/wiki/صيد_الخاطر/فصل:_لا_تنون_عن_طلب_الكمال)
    - Note: In the same chapter, Ibn al-Jawzi quotes al-Mutanabbi's verse (#62) as his starting point.

59. **Ibn al-Jawzi** — Verified
    - Original: «ينبغي للإنسان أن يعرف شرف زمانه، وقدر وقته، فلا يضيع منه لحظة في غير قربة»
    - Card AR: ينبغي للإنسان أن يعرف… قدر وقته | Card EN (tr.): A person ought to know the worth of his time.
    - Source: *Sayd al-Khatir*, the chapter «المحافظة على الوقت», on [ar.wikisource](https://ar.wikisource.org/wiki/صيد_الخاطر/فصل:_المحافظة_على_الوقت)

60. **al-Biruni** (d. c. 440 AH / c. 1050, astronomer and polymath) — Attributed
    - Original (story, wording not verified): on his deathbed he asked a visitor about a point of inheritance law. When the visitor asked why he asked in such a state, he replied that dying knowing the answer was better than dying ignorant of it.
    - Card AR: (none until the Arabic is verified) | Card EN: (none until the Arabic is verified)
    - Source: The story is told by the jurist Abu al-Hasan al-Walwaliji. Yaqut's *Irshad al-Arib* (vol. 6, pp. 308-14) is the main biography of al-Biruni ([Encyclopaedia Iranica](https://iranicaonline.org/articles/biruni-abu-rayhan-i-life)), but I could not confirm the story's text there.
    - Note: This is a strong lifelong-learning story, but it should only go on a card once the Arabic is quoted from Yaqut.


---

## 4. Arab and Palestinian poets and writers (18)

61. **al-Mutanabbi** (d. 354 AH / 965, Abbasid poet) — Verified
    - Original: «عَلى قَدْرِ أهْلِ العَزْم تأتي العَزائِمُ / وَتأتي علَى قَدْرِ الكِرامِ المَكارمُ»
    - Card AR: على قدر أهل العزم تأتي العزائم | Card EN (tr.): Resolve comes in the measure of the resolute.
    - Source: The poem in praise of Sayf al-Dawla (al-Hadath), on [ar.wikisource](https://ar.wikisource.org/wiki/على_قدر_أهل_العزم_تأتي_العزائم)

62. **al-Mutanabbi** — Verified
    - Original: «وَلم أرَ في عُيُوبِ النّاسِ شَيْئاً / كَنَقصِ القادِرِينَ على التّمَامِ»
    - Card AR: ولم أر في عيوب الناس شيئا كنقص القادرين على التمام | Card EN (tr.): No fault in people is like the able falling short of completion.
    - Source: The poem «ملومكما يجل عن الملام», on [ar.wikisource](https://ar.wikisource.org/wiki/ملومكما_يجل_عن_الملام). Ibn al-Jawzi quotes it in *Sayd al-Khatir* (see #58).
    - Note: **Too long** (AR 10, EN 12), so use two lines. This is the best Arabic line on إتقان.

63. **al-Mutanabbi** — Verified
    - Original: «إذا غامَرْتَ في شَرَفٍ مَرُومِ / فَلا تَقنَعْ بما دونَ النّجومِ»
    - Card AR: فلا تقنع بما دون النجوم | Card EN (tr.): Do not settle for anything below the stars.
    - Source: The poem «إذا غامرت في شرف مروم», on [ar.wikisource](https://ar.wikisource.org/wiki/إذا_غامرت_في_شرف_مروم)
    - Note: The next verse is about death in battle, so keep the card to this line.

64. **al-Mutanabbi** — Verified
    - Original: «أعَزُّ مَكانٍ في الدُّنَى سَرْجُ سابحٍ / وَخَيرُ جَليسٍ في الزّمانِ كِتابُ»
    - Card AR: وخير جليس في الزمان كتاب | Card EN: The best companions are books alone. (Nicholson's translation, via Wikiquote)
    - Source: The poem «منى كن لي أن البياض خضاب», on [ar.wikisource](https://ar.wikisource.org/wiki/منى_كن_لي_أن_البياض_خضاب). Translation on [Wikiquote](https://en.wikiquote.org/wiki/Al-Mutanabbi).

65. **Abu al-Qasim al-Shabbi** (1909-1934, Tunisian poet) — Verified
    - Original: «إذا الشّعْبُ يَوْمَاً أرَادَ الْحَيَـاةَ / فَلا بُدَّ أنْ يَسْتَجِيبَ القَـدَر»
    - Card AR: إذا الشعب يوما أراد الحياة فلا بد أن يستجيب القدر | Card EN (tr.): If a people one day wills to live, fate must answer.
    - Source: «إرادة الحياة» (1933), in the Diwan *Aghani al-Hayat*, on [ar.wikisource](https://ar.wikisource.org/wiki/إرادة_الحياة)
    - Note: The Arabic is **too long** (10 words). These are the opening lines of Tunisia's national anthem and were an Arab Spring slogan, so the line reads politically. See Open questions.

66. **Abu al-Qasim al-Shabbi** — Verified
    - Original: «ومن يتهيب صعود الجبال / يعش أبَدَ الدهر بين الحفرْ»
    - Card AR: ومن يتهيب صعود الجبال يعش أبد الدهر بين الحفر | Card EN (tr.): Whoever fears climbing mountains lives forever among the pits.
    - Source: Same poem, Wikisource page «لحن الحياة» ([ar.wikisource](https://ar.wikisource.org/wiki/لحن_الحياة))
    - Note: The Arabic is **too long** (9 words, one over). **Use يتهيب, not the popular misquote «ومن لا يحب صعود الجبال».**

67. **Mahmoud Darwish** (1941-2008, Palestinian national poet) — Sourced
    - Original: «على هذه الأرض ما يستحق الحياة»
    - Card AR: على هذه الأرض ما يستحق الحياة | Card EN (tr.): On this earth there is what makes life worth living.
    - Source: The poem «على هذه الأرض», in the Diwan *Ward Aqall* (1986). Listed in the collection's table of contents per [abjjad.com](https://www.abjjad.com/book/15445666/ورد-اقل).
    - Note: Published English translations differ (for example Akash & Forché, 2003). I did not check them.

68. **Mahmoud Darwish** — Sourced
    - Original: «وَنَحْنُ نُحِبُّ الحَيَاةَ إذَا مَا اسْتَطَعْنَا إِلَيْهَا سَبِيلاَ»
    - Card AR: ونحن نحب الحياة إذا ما استطعنا إليها سبيلا | Card EN: We love life if we find a way to it. (Fady Joudah's translation)
    - Source: «ونحن نحب الحياة», *Ward Aqall* (1986). The Arabic text and Joudah's translation are on [Wikiquote](https://en.wikiquote.org/wiki/Mahmoud_Darwish), linking [aldiwan.net/poem9030](https://www.aldiwan.net/poem9030.html).
    - Note: The next line of the poem mentions martyrs, so use only this line.

69. **Mahmoud Darwish** — Sourced
    - Original: «وأنتَ تُعِدُّ فطورك، فكِّر بغيركْ»
    - Card AR: وأنت تعد فطورك، فكر بغيرك | Card EN: When you prepare your breakfast, think upon others (Wikiquote translation)
    - Source: «فكّر بغيرك», in *Ka-Zahr al-Lawz aw Ab'ad* (2005). [Wikiquote](https://en.wikiquote.org/wiki/Mahmoud_Darwish)
    - Note: The theme is compassion rather than effort.

70. **Ahmad Shawqi** (1868-1932, Egyptian, "Prince of Poets") — Sourced
    - Original: «وما نيلُ المطالبِ بالتمني / ولكن تؤخذُ الدنيا غِلابا»
    - Card AR: وما نيل المطالب بالتمني | Card EN (tr.): Goals are not attained by wishing.
    - Source: The poem «سلوا قلبي غداة سلا وتابا» (a *mawlid* poem in praise of the Prophet, sung by Umm Kulthum), [aldiwan.net/poem63783](https://www.aldiwan.net/poem63783.html)
    - Note: The full verse is **too long** (10 words). The card uses the first half; the second half is «ولكن تؤخذ الدنيا غلابا».

71. **Ahmad Shawqi** — Sourced
    - Original: «قُم للمعلِّم وفِّه التبجيلا / كاد المعلم أن يكون رسولا»
    - Card AR: قم للمعلم وفه التبجيلا | Card EN (tr.): Stand for the teacher and give him full honour.
    - Source: Shawqi's poem on knowledge and teaching (*al-Shawqiyyat*). The verse appears on [ar.wikisource](https://ar.wikisource.org/wiki/قف_سائل_النحل_به).
    - Note: The Palestinian poet Ibrahim Tuqan wrote a famous humorous reply, «الشاعر المعلم» («شوقي يقول وما درى بمصيبتي»), on [ar.wikisource](https://ar.wikisource.org/wiki/الشاعر_المعلم), which could be fun for a teachers' day.

72. **al-Tughra'i** (d. 513/515 AH, Abbasid poet and vizier) — Sourced
    - Original: «أعلِّل النفسَ بالآمال أرقبُها / ما أضيقَ العيشَ لولا فسحةُ الأمل»
    - Card AR: ما أضيق العيش لولا فسحة الأمل | Card EN (tr.): How narrow life would be without hope's open space.
    - Source: *Lamiyyat al-'Ajam* (composed in Baghdad, 505 AH), on [ar.wikisource](https://ar.wikisource.org/wiki/لامية_العجم)

73. **Ilya Abu Madi** (1890-1957, Lebanese-American *mahjar* poet) — Sourced
    - Original: «أيهذا الشاكي وما بك داءٌ / كن جميلًا ترَ الوجود جميلا»
    - Card AR: كن جميلا ترى الوجود جميلا | Card EN (tr.): Be beautiful, and you will see existence beautiful.
    - Source: The poem «فلسفة الحياة», in Diwan *al-Jadawil* (1927). Quoted in *al-Risala* no. 2 (1933) on [ar.wikisource](https://ar.wikisource.org/wiki/مجلة_الرسالة/العدد_2/من_طرائف_الشعر).
    - Note: The poem has تَرَ (jussive). Some printings have ترى.

74. **Ibrahim Tuqan** (1905-1941, Palestinian poet from Nablus) — Sourced
    - Original: «الحسامُ واليراعُ، لا الكلامُ والنزاعُ، رمزُنا»
    - Card AR: الحسام واليراع لا الكلام والنزاع رمزنا | Card EN: The sword and the pen, not talking nor quarreling, are our symbols (Wikiquote translation)
    - Source: «موطني» (1934), now the national anthem of Iraq. [Wikiquote](https://en.wikiquote.org/wiki/Ibrahim_Tuqan)
    - Note: The English is **too long** (11). The line pairs a martial image with "the pen", so decide whether that is wanted.

75. **Fadwa Tuqan** (1917-2003, Palestinian poet from Nablus) — Sourced
    - Original (English edition): "A seed does not see the light without first cleaving a difficult path through the earth."
    - Card AR (tr.): لا ترى البذرة النور قبل أن تشق طريقها الصعب في التراب | Card EN: A seed does not see the light without first cleaving… (excerpt)
    - Source: Fadwa Tuqan, *A Mountainous Journey* (English translation by Olive Kenny, 1990, first page) of «رحلة جبلية، رحلة صعبة» (1985). [Wikiquote](https://en.wikiquote.org/wiki/Fadwa_Tuqan)
    - Note: **Too long**. The original Arabic sentence was not located, so the Arabic card is a back-translation and the original should replace it. Taken out of school by her family, Fadwa was taught by her brother Ibrahim (#74), which makes this a story of self-education.

76. **Fadwa Tuqan** — Sourced
    - Original (English edition): "…the river of my life goes on and, after that destructive experience, I'll never allow an obstacle to stand in its way."
    - Card AR (tr.): لن أسمح لعقبة أن تقف في طريقه | Card EN: I'll never allow an obstacle to stand in its way.
    - Source: *A Mountainous Journey*, p. 180. [Wikiquote](https://en.wikiquote.org/wiki/Fadwa_Tuqan)
    - Note: "Its" refers to "the river of my life", so the card needs that context or a subtitle. Same Arabic caveat as #75.

77. **Edward Said** (1935-2003, Palestinian-American literary scholar) — Sourced
    - Original: "When one learns something one first performs an act of will, because only by willing to learn can one learn."
    - Card AR (tr.): لا يتعلم المرء إلا إذا أراد أن يتعلم | Card EN: only by willing to learn can one learn
    - Source: "Vico: Autodidact and Humanist", *The Centennial Review* 11:3 (Summer 1967), p. 340. [Wikiquote](https://en.wikiquote.org/wiki/Edward_Said)

78. **Ghassan Kanafani** (1936-1972, Palestinian novelist) — Sourced
    - Original: «لماذا لم تدقّوا جدران الخزان؟»
    - Card AR: لماذا لم تدقوا جدران الخزان؟ | Card EN (tr.): Why didn't you knock on the walls of the tank?
    - Source: *Rijal fi al-Shams* (*Men in the Sun*, 1963), closing line. See [al-Quds al-Arabi](https://www.alquds.co.uk/يا-عالم-إننا-ندقّ-جدران-الخزان/).
    - Note: In the novel, three men die silently inside a water tank. Readers take the line as a call to speak up instead of suffering in silence, but the context is grim and political. See Open questions.

---

## 5. Scientists, engineers, computing pioneers and other figures (54)

79. **Isaac Newton** (1643-1727, physicist) — Verified
    - Original: "If I have seen further it is by standing on ye sholders of Giants."
    - Card AR (tr.): رأيت أبعد لأني وقفت على أكتاف العمالقة | Card EN: If I have seen further it is by standing on the shoulders of giants
    - Source: Letter to Robert Hooke, 5 February 1675/6 (facsimile at the [Historical Society of Pennsylvania](https://digitallibrary.hsp.org/index.php/Detail/objects/9792)). [Wikiquote](https://en.wikiquote.org/wiki/Isaac_Newton)
    - Note: The English is **too long** (14). An excerpt such as "…standing on the shoulders of giants" fits. The image itself is older than Newton (Bernard of Chartres).

80. **Isaac Newton** — Verified
    - Original: "But if I have done the public any service this way, 'tis due to nothing but industry and a patient thought."
    - Card AR (tr.): لا يعود إلا إلى الاجتهاد والتفكير الصبور | Card EN: due to nothing but industry and a patient thought
    - Source: Letter to Richard Bentley, 10 December 1692, *The Correspondence of Isaac Newton*, ed. Turnbull, vol. 3, p. 233. [Wikiquote](https://en.wikiquote.org/wiki/Isaac_Newton)

81. **Isaac Newton** — Attributed
    - Original: "…whilst the great ocean of truth lay all undiscovered before me."
    - Card AR (tr.): محيط الحقيقة العظيم ممتد أمامي لم يكتشف | Card EN: the great ocean of truth lay all undiscovered before me
    - Source: Reported in David Brewster, *Memoirs of the Life… of Sir Isaac Newton* (1855), vol. II, ch. 27. [Wikiquote](https://en.wikiquote.org/wiki/Isaac_Newton)
    - Note: Newton did not write this himself; it is a remark others reported after his death.

82. **Marie Curie** (1867-1934, physicist and chemist, two Nobel Prizes) — Sourced
    - Original: "One never notices what has been done; one can only see what remains to be done."
    - Card AR (tr.): لا يرى المرء إلا ما بقي عليه أن يفعله | Card EN: one can only see what remains to be done
    - Source: Letter to her brother, 1894. Cited in *Oxford Essential Quotations* (6th ed., 2018) and on [Wikiquote](https://en.wikiquote.org/wiki/Marie_Curie).
    - Note: Her family letters were written in Polish or French; the Oxford source gives only the English.

83. **Marie Curie** — Sourced
    - Original (French): « La vie n'est facile pour aucun de nous. Mais quoi, il faut avoir de la persévérance, et surtout de la confiance en soi. »
    - Card AR (tr.): لا بد من المثابرة، وفوق كل شيء الثقة بالنفس | Card EN: We must have perseverance and above all confidence in ourselves.
    - Source: Quoted in Eve Curie, *Madame Curie* (1937), part 2, p. 116. [Wikiquote](https://en.wikiquote.org/wiki/Marie_Curie)

84. **Marie Curie** — Attributed
    - Original: "In life, there's nothing to be feared, everything is to be understood."
    - Card AR (tr.): لا شيء في الحياة يُخشى، كل شيء يُفهم | Card EN: nothing to be feared, everything is to be understood
    - Source: The only source on [Wikiquote](https://en.wikiquote.org/wiki/Marie_Curie) is Melvin Benarde, *Our Precarious Habitat* (1973; 2006 edition).
    - Note: No primary source is known. The usual wording, "Nothing in life is to be feared, it is only to be understood", is also unsourced.

85. **Thomas Edison** (1847-1931, inventor) — Sourced
    - Original: "Genius is one per cent inspiration, ninety-nine per cent perspiration."
    - Card AR (tr.): العبقرية واحد بالمئة إلهام وتسعة وتسعون بالمئة عرق | Card EN: Genius is one percent inspiration, ninety-nine percent perspiration.
    - Source: Edison confirmed it in a 1927 letter, reported in the *Argus Leader* on 21 February 1932, and in *Harper's Monthly*, September 1932, p. 406. [Wikiquote](https://en.wikiquote.org/wiki/Thomas_Edison)
    - Note: It was attributed to him as early as 1901. Some early versions say "two per cent", so use the 1932 wording.

86. **Albert Einstein** (1879-1955, physicist) — Sourced
    - Original: "The important thing is not to stop questioning."
    - Card AR (tr.): المهم ألا تتوقف عن السؤال | Card EN: The important thing is not to stop questioning.
    - Source: Statement to William Miller, "Death of a Genius", *LIFE*, 2 May 1955, p. 64. [Wikiquote](https://en.wikiquote.org/wiki/Albert_Einstein)

87. **Albert Einstein** — Sourced
    - Original (German letter; English as usually given): "I have no special talents. I am only passionately curious."
    - Card AR (tr.): ليست لدي مواهب خاصة، أنا فقط فضولي بشغف | Card EN: I have no special talents. I am only passionately curious.
    - Source: Letter to Carl Seelig, 11 March 1952 (a photograph is in the Albert Einstein Archives, Jerusalem). [Wikiquote](https://en.wikiquote.org/wiki/Albert_Einstein)

88. **Albert Einstein** — Sourced
    - Original (German): "Life is like riding a bicycle. To keep your balance you must keep moving."
    - Card AR (tr.): لكي تحفظ توازنك عليك أن تواصل الحركة | Card EN: To keep your balance you must keep moving.
    - Source: Letter to his son Eduard, 5 February 1930, as quoted in Walter Isaacson, *Einstein* (2007), p. 367. [Wikiquote](https://en.wikiquote.org/wiki/Albert_Einstein)

89. **Albert Einstein** — Sourced
    - Original: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world."
    - Card AR (tr.): الخيال أهم من المعرفة | Card EN: Imagination is more important than knowledge.
    - Source: Interview with G. S. Viereck, *Saturday Evening Post*, 26 October 1929. [Wikiquote](https://en.wikiquote.org/wiki/Albert_Einstein)
    - Note: For a club about learning, this line can read as dismissing knowledge. Decide whether to use it.

90. **Michael Faraday** (1791-1867, physicist and chemist) — Sourced
    - Original: "The secret is comprised in three words — Work, Finish, Publish."
    - Card AR (tr.): اعمل، أتمّ، انشر | Card EN: Work, Finish, Publish.
    - Source: His advice to the young William Crookes, as recorded in J. H. Gladstone, *Michael Faraday* (1874), p. 123. [Wikiquote](https://en.wikiquote.org/wiki/Michael_Faraday)
    - Note: This is a good motto for shipping projects.

91. **Nikola Tesla** (1856-1943, electrical engineer) — Sourced
    - Original (Serbian interview): "The present is theirs; the future, for which I really worked, is mine."
    - Card AR (tr.): المستقبل الذي عملت من أجله حقا هو لي | Card EN: the future, for which I really worked, is mine
    - Source: D. L. Petković, "A Visit to Nikola Tesla", *Politika*, April 1927, quoted in Cheney et al., *Tesla, Master of Lightning* (1999), p. 73. [Wikiquote](https://en.wikiquote.org/wiki/Nikola_Tesla)

92. **Richard Feynman** (1918-1988, physicist) — Verified
    - Original: "The first principle is that you must not fool yourself — and you are the easiest person to fool."
    - Card AR (tr.): يجب ألا تخدع نفسك، فأنت أسهل من يُخدع | Card EN: you must not fool yourself — and you are the easiest person to fool
    - Source: "Cargo Cult Science", Caltech commencement address, 1974 ([Caltech text](http://calteches.library.caltech.edu/51/2/CargoCult.htm))
    - Note: The English is **too long** (13). "You must not fool yourself" fits on its own.

93. **Richard Feynman** — Verified
    - Original: "What I cannot create, I do not understand."
    - Card AR (tr.): ما لا أستطيع صنعه لا أفهمه | Card EN: What I cannot create, I do not understand.
    - Source: Written on his Caltech blackboard at his death, February 1988 ([Caltech Archives](https://digital.archives.caltech.edu/collections/Images/1.10-29/))
    - Note: This line is perfect for builders.

94. **Richard Feynman** — Sourced
    - Original: "[S]tudy hard what interests you the most in the most undisciplined, irreverent and original manner possible."
    - Card AR (tr.): ادرس بجد ما يثير اهتمامك أكثر من غيره | Card EN: Study hard what interests you the most
    - Source: Letter to J. M. Szabados, 30 November 1965, in *Perfectly Reasonable Deviations from the Beaten Track* (2005). [Wikiquote](https://en.wikiquote.org/wiki/Richard_Feynman)

95. **Ada Lovelace** (1815-1852, mathematician, first published computer program) — Verified
    - Original: "We may say most aptly that the Analytical Engine weaves algebraical patterns just as the Jacquard-loom weaves flowers and leaves."
    - Card AR (tr.): المحرك التحليلي ينسج أنماطا جبرية كما ينسج النول الأزهار | Card EN: the Analytical Engine weaves algebraical patterns
    - Source: "Notes by the Translator", *Sketch of the Analytical Engine* (1843), on [Wikisource](https://en.wikisource.org/wiki/Scientific_Memoirs/3/Sketch_of_the_Analytical_Engine_invented_by_Charles_Babbage,_Esq./Notes_by_the_Translator)
    - Note: The Arabic is 9 words. The line is inspiring for computing but not actionable.

96. **Grace Hopper** (1906-1992, computer scientist, COBOL pioneer) — Sourced
    - Original: "Humans are allergic to change. They love to say, 'We've always done it this way.' I try to fight that."
    - Card AR (tr.): البشر يتحسسون من التغيير… وأنا أحاول محاربة ذلك | Card EN: Humans are allergic to change… I try to fight that.
    - Source: *The Wit and Wisdom of Grace Hopper* (1987). [Wikiquote](https://en.wikiquote.org/wiki/Grace_Hopper)
    - Note: Use this sourced version, not the popular "most dangerous phrase" line (see Rejected).

97. **Alan Turing** (1912-1954, mathematician, father of computer science) — Verified
    - Original: "We can only see a short distance ahead, but we can see plenty there that needs to be done."
    - Card AR (tr.): نرى هناك الكثير مما يجب إنجازه | Card EN: we can see plenty there that needs to be done
    - Source: "Computing Machinery and Intelligence", *Mind* 59 (1950), p. 460. [Wikiquote](https://en.wikiquote.org/wiki/Alan_Turing)
    - Note: The full line is **too long** (18); the card uses the second half.

98. **Edsger W. Dijkstra** (1930-2002, computer scientist) — Verified
     - Original: "Simplicity is prerequisite for reliability."
     - Card AR (tr.): البساطة شرط مسبق للموثوقية | Card EN: Simplicity is prerequisite for reliability.
     - Source: "How do we tell truths that might hurt?" (EWD498, 1975), [UT Austin EWD archive](https://www.cs.utexas.edu/users/EWD/transcriptions/EWD04xx/EWD498.html)

99. **Alan Kay** (b. 1940, computer scientist, Smalltalk) — Sourced
     - Original: "The best way to predict the future is to invent it."
     - Card AR (tr.): أفضل طريقة للتنبؤ بالمستقبل أن تخترعه | Card EN: The best way to predict the future is to invent it.
     - Source: Said at a 1971 Xerox PARC meeting ([Quote Investigator](http://quoteinvestigator.com/2012/09/27/invent-the-future/)). [Wikiquote](https://en.wikiquote.org/wiki/Alan_Kay)
     - Note: Dennis Gabor wrote a similar idea in 1963.

100. **Linus Torvalds** (b. 1969, creator of Linux and Git) — Verified
     - Original: "Talk is cheap. Show me the code."
     - Card AR (tr.): الكلام رخيص. أرني الكود | Card EN: Talk is cheap. Show me the code.
     - Source: Linux kernel mailing list, 25 August 2000, [lkml.org/lkml/2000/8/25/132](http://lkml.org/lkml/2000/8/25/132)

101. **Linus Torvalds** — Sourced
     - Original: "…most of the good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."
     - Card AR (tr.): المبرمجون الجيدون يبرمجون لأن البرمجة ممتعة | Card EN: most of the good programmers do programming… because it is fun to program
     - Source: Interview with Rishab Aiyer Ghosh, *First Monday*, 2 March 1998. [Wikiquote](https://en.wikiquote.org/wiki/Linus_Torvalds)
     - Note: The English is 12 words. The Arabic card drops "most of" (معظم), so restore it if space allows.

102. **Steve Wozniak** (b. 1950, co-founder of Apple, designer of the Apple I and II) — Sourced
     - Original: "If you love what you do and are willing to do what it takes, it's within your reach."
     - Card AR (tr.): إن أحببت ما تفعل وبذلت ما يلزم، فهو في متناولك | Card EN: If you love what you do and are willing to do what it takes, it's within your reach.
     - Source: *iWoz* (2006), p. 300. [Wikiquote](https://en.wikiquote.org/wiki/Steve_Wozniak)
     - Note: **Too long** (AR 9, EN 17). Do not cut "willing to do what it takes", because that is the actionable part.

103. **Tim Berners-Lee** (b. 1955, inventor of the World Wide Web) — Sourced
     - Original: "The web is more a social creation than a technical one."
     - Card AR (tr.): الويب صنيعة اجتماعية أكثر منها تقنية | Card EN: The web is more a social creation than a technical one.
     - Source: *Weaving the Web* (1999). [Wikiquote](https://en.wikiquote.org/wiki/Tim_Berners-Lee)

104. **Nelson Mandela** (1918-2013, anti-apartheid leader, president of South Africa) — Sourced
     - Original: "Education is the most powerful weapon we can use to change the world."
     - Card AR (tr.): التعليم أقوى سلاح يمكننا استخدامه لتغيير العالم | Card EN: Education is the most powerful weapon we can use…
     - Source: Speech at the launch of Mindset Network, 16 July 2003 ([Nelson Mandela Foundation archive](http://db.nelsonmandela.org/speeches/pub_view.asp?pg=item&ItemID=NMS909)). A similar line is in his speech at Madison Park High School, Boston, 23 June 1990. [Wikiquote](https://en.wikiquote.org/wiki/Nelson_Mandela)
     - Note: The full English line is 13 words. The popular "which you can use" wording is a variant.

105. **Nelson Mandela** — Sourced
     - Original: "…after climbing a great hill, one only finds that there are many more hills to climb."
     - Card AR (tr.): بعد تسلق تل عظيم، يجد المرء تلالا أخرى ليتسلقها | Card EN: after climbing a great hill… many more hills to climb
     - Source: *Long Walk to Freedom* (1994), final chapter. [Wikiquote](https://en.wikiquote.org/wiki/Nelson_Mandela)

106. **Martin Luther King Jr.** (1929-1968, civil rights leader) — Sourced
     - Original: "If you can't fly, run; if you can't run, walk; if you can't walk, crawl; but by all means keep moving."
     - Card AR (tr.): إن لم تستطع أن تطير فاركض… وواصل التحرك | Card EN: If you can't fly, run… but by all means keep moving.
     - Source: "Keep Moving from This Mountain", address at Spelman College, 1960. [Wikiquote](https://en.wikiquote.org/wiki/Martin_Luther_King_Jr.)

107. **Mahatma Gandhi** (1869-1948, leader of Indian independence) — Sourced
     - Original: "Strength does not come from physical capacity. It comes from an indomitable will."
     - Card AR (tr.): القوة تأتي من إرادة لا تقهر | Card EN: Strength… comes from an indomitable will.
     - Source: "The Doctrine of the Sword", *Young India*, 11 August 1920. [Wikiquote](https://en.wikiquote.org/wiki/Mahatma_Gandhi)
     - Note: The original context is an argument for non-violence.

108. **Abraham Lincoln** (1809-1865, 16th U.S. president) — Sourced
     - Original: "Always bear in mind that your own resolution to succeed, is more important than any other one thing."
     - Card AR (tr.): عزمك على النجاح أهم من أي شيء آخر | Card EN: your own resolution to succeed, is more important than any other one thing
     - Source: Letter to Isham Reavis, 5 November 1855 (*Collected Works of Abraham Lincoln*, vol. 2). [Wikiquote](https://en.wikiquote.org/wiki/Abraham_Lincoln)
     - Note: The English is 13 words. Reavis was a young man asking how to study law without a teacher, which makes this an ideal self-study letter.

109. **Abraham Lincoln** — Sourced
     - Original: "Get the books, and read and study them till you understand them in their principal features; and that is the main thing."
     - Card AR (tr.): احصل على الكتب، واقرأها وادرسها حتى تفهمها | Card EN: Get the books, and read and study them
     - Source: Same letter to Isham Reavis, 5 November 1855. [Wikiquote](https://en.wikiquote.org/wiki/Abraham_Lincoln)

110. **Seneca** (c. 4 BC – AD 65, Roman Stoic philosopher) — Sourced
     - Original (Latin): "Non est ad astra mollis e terris via."
     - Card AR (tr.): ليس من الأرض إلى النجوم طريق سهل | Card EN: No easy way leads from the earth to the stars.
     - Source: *Hercules Furens*, line 437. [Wikiquote](https://en.wikiquote.org/wiki/Seneca_the_Younger)
     - Note: The line is spoken by Megara, a character in the play. Wikiquote translates *astra* as "heaven"; "stars" is the literal sense.

111. **Seneca** — Sourced
     - Original (Latin): "Mutuo ista fiunt, et homines dum docent discunt."
     - Card AR (tr.): الناس يتعلمون حين يعلّمون | Card EN: men learn while they teach
     - Source: *Epistulae Morales* 7.8. [Wikiquote](https://en.wikiquote.org/wiki/Seneca_the_Younger)
     - Note: This is the club's peer-teaching motto.

112. **Marcus Aurelius** (121-180, Roman emperor and Stoic) — Sourced
     - Original (Greek; English by Gregory Hays): "The impediment to action advances action. What stands in the way becomes the way."
     - Card AR (tr.): ما يقف في الطريق يصبح هو الطريق | Card EN: What stands in the way becomes the way.
     - Source: *Meditations* V.20 (Hays translation, 2002). [Wikiquote](https://en.wikiquote.org/wiki/Marcus_Aurelius)
     - Note: Hays's rendering is freer than older translations.

113. **Marcus Aurelius** — Sourced
     - Original (Greek): «Μηκέθ᾽ ὅλως περὶ τοῦ οἷόν τινα εἶναι τὸν ἀγαθὸν ἄνδρα διαλέγεσθαι, ἀλλὰ εἶναι τοιοῦτον.»
     - Card AR (tr.): كفّ عن الجدال في صفات الرجل الصالح، وكن واحدا | Card EN: Waste no more time arguing what a good man should be. Be one.
     - Source: *Meditations* X.16. [Wikiquote](https://en.wikiquote.org/wiki/Marcus_Aurelius)
     - Note: The English is 12 words.

114. **Confucius** (551-479 BC, Chinese philosopher) — Sourced
     - Original (Chinese): 學而不思則罔，思而不學則殆
     - Card AR (tr.): التعلم بلا تفكير جهد ضائع، والتفكير بلا تعلم خطر | Card EN: Learning without thought is labor lost; thought without learning is perilous.
     - Source: *Analects* II.15 (James Legge translation). [Wikiquote](https://en.wikiquote.org/wiki/Confucius)
     - Note: The English is 10 words; "labor lost" counts as two. I added the Chinese myself from the standard text (not via Wikiquote).

115. **Confucius** — Sourced
     - Original (Legge): "When you know a thing, to hold that you know it; and when you do not know a thing, to allow that you do not know it; this is knowledge."
     - Card AR (tr.): أن تعرف ما تعرف وما لا تعرف، تلك هي المعرفة | Card EN: To know what you know and what you do not know, that is true knowledge.
     - Source: *Analects* II.17. The shorter English is the variant given on [Wikiquote](https://en.wikiquote.org/wiki/Confucius).
     - Note: **Too long** (AR 9, EN 14).

116. **Laozi (Lao Tzu)** (traditionally 6th century BC, *Tao Te Ching*) — Sourced
     - Original (Chinese): 千里之行，始於足下
     - Card AR: رحلة الألف ميل تبدأ بخطوة | Card EN: A thousand-mile journey starts from your feet down there.
     - Source: *Tao Te Ching*, chapter 64. [Wikiquote](https://en.wikiquote.org/wiki/Laozi) lists several translations.
     - Note: Credit it to *Tao Te Ching* ch. 64, not just "Lao Tzu". The Chinese says *li*, not miles, and literally "starts beneath one's feet". The Arabic card is the established Arabic proverb form.

117. **Helen Keller** (1880-1968, deaf-blind author and activist) — Verified
     - Original: "Optimism is the faith that leads to achievement; nothing can be done without hope."
     - Card AR (tr.): التفاؤل هو الإيمان الذي يقود إلى الإنجاز | Card EN: Optimism is the faith that leads to achievement
     - Source: *Optimism: An Essay* (1903), on [Wikisource](https://en.wikisource.org/wiki/Optimism_(Keller)). [Wikiquote](https://en.wikiquote.org/wiki/Helen_Keller)
     - Note: The popular ending "…without hope and confidence" is not in the 1903 text.

118. **Helen Keller** — Verified
     - Original: "…although the world is full of suffering, it is full also of the overcoming of it."
     - Card AR (tr.): العالم مليء بالمعاناة، ومليء أيضا بالتغلب عليها | Card EN: the world is full of suffering… full also of the overcoming of it
     - Source: *Optimism: An Essay* (1903). [Wikiquote](https://en.wikiquote.org/wiki/Helen_Keller)
     - Note: The English is 11 words. This line fits Gaza especially well.

119. **Booker T. Washington** (1856-1915, educator, born enslaved) — Verified
     - Original: "I have learned that success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed."
     - Card AR (tr.): يقاس النجاح بالعقبات التي تغلب عليها المرء | Card EN: success is to be measured… by the obstacles which he has overcome
     - Source: *Up From Slavery* (1901), ch. II, on [Wikisource/Gutenberg](https://en.wikisource.org/wiki/Up_from_Slavery). [Wikiquote](https://en.wikiquote.org/wiki/Booker_T._Washington)
     - Note: The English excerpt is 12 words.

120. **Ahmed Zewail** (1946-2016, Egyptian-American chemist, Nobel Prize 1999) — Sourced
     - Original: "The ocean was full of knowledge, culture and opportunities, and the choice was clear: I could either learn to swim or sink."
     - Card AR (tr.): إما أن أتعلم السباحة أو أغرق | Card EN: I could either learn to swim or sink.
     - Source: His Nobel autobiography (1999), [nobelprize.org](https://www.nobelprize.org/prizes/chemistry/1999/zewail/biographical/), and *Voyage Through Time* (2002). Also quoted in his *LA Times* obituary via [Wikiquote](https://en.wikiquote.org/wiki/Ahmed_Zewail).
     - Note: nobelprize.org blocked automated fetching; the wording was confirmed through search results and Wikiquote.

121. **Ahmed Zewail** — Sourced
     - Original: "The culture was foreign, the language was difficult, but my hopes were high."
     - Card AR (tr.): كانت اللغة صعبة، لكن آمالي كانت كبيرة | Card EN: the language was difficult, but my hopes were high
     - Source: Same sources as #120.

122. **Malcolm X** (1925-1965, Muslim civil rights leader) — Sourced
     - Original: "Education is our passport to the future, for tomorrow belongs only to the people who prepare for it today."
     - Card AR (tr.): التعليم جواز سفرنا إلى المستقبل | Card EN: Education is our passport to the future
     - Source: Speech at the founding rally of the Organization of Afro-American Unity, 28 June 1964, in *By Any Means Necessary* (1970). [Wikiquote](https://en.wikiquote.org/wiki/Malcolm_X)

123. **Louis Pasteur** (1822-1895, chemist and microbiologist) — Sourced
     - Original (French): « Dans les champs de l'observation le hasard ne favorise que les esprits préparés. »
     - Card AR (tr.): الصدفة لا تخدم إلا العقول المستعدة | Card EN: chance favours only the prepared mind
     - Source: Lecture at the University of Lille, 7 December 1854. [Wikiquote](https://en.wikiquote.org/wiki/Louis_Pasteur)

124. **Frederick Douglass** (c. 1818-1895, abolitionist, self-taught after escaping slavery) — Sourced
     - Original: "If there is no struggle, there is no progress."
     - Card AR (tr.): حيث لا كفاح، لا تقدم | Card EN: If there is no struggle, there is no progress.
     - Source: West India Emancipation speech, 3 August 1857. [Wikiquote](https://en.wikiquote.org/wiki/Frederick_Douglass)
     - Note: The speech is about political reform.

125. **Martin Fowler** (b. 1963, software engineer) — Sourced
     - Original: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
     - Card AR (tr.): المبرمجون الجيدون يكتبون كودا يفهمه البشر | Card EN: Good programmers write code that humans can understand.
     - Source: *Refactoring: Improving the Design of Existing Code* (1999), p. 15. [Wikiquote](https://en.wikiquote.org/wiki/Martin_Fowler)

126. **Harold Abelson and Gerald Jay Sussman** (MIT computer scientists, authors of SICP) — Verified
     - Original: "Thus, programs must be written for people to read, and only incidentally for machines to execute."
     - Card AR (tr.): يجب أن تكتب البرامج ليقرأها الناس | Card EN: programs must be written for people to read
     - Source: *Structure and Interpretation of Computer Programs*, preface to the first edition (1985), [MIT Press online text](https://mitp-content-server.mit.edu/books/content/sectbyfn/books_pres_0/6515/sicp.zip/full-text/book/book-Z-H-7.html)

127. **Fred Brooks** (1931-2022, software engineer, IBM System/360) — Sourced
     - Original: "Hence plan to throw one away; you will, anyhow."
     - Card AR (tr.): خطط لرمي النسخة الأولى، فسترميها حتما | Card EN: plan to throw one away; you will, anyhow
     - Source: *The Mythical Man-Month* (1975), p. 116. [Wikiquote](https://en.wikiquote.org/wiki/Fred_Brooks)
     - Note: From memory: Brooks qualified this advice in the 1995 anniversary edition. I did not re-check that.

128. **Steve Jobs** (1955-2011, co-founder of Apple) — Sourced
     - Original: "Sometimes life hits you in the head with a brick. Don't lose faith. … The only way to do great work is to love what you do."
     - Card AR (tr.): الطريقة الوحيدة لعمل عظيم أن تحب ما تفعل | Card EN: The only way to do great work is to love what you do.
     - Source: Stanford commencement address, 12 June 2005. [Wikiquote](https://en.wikiquote.org/wiki/Steve_Jobs)
     - Note: The English is 12 words. "Don't lose faith." also works as its own card. His biological father, Abdulfattah Jandali, was Syrian.

129. **Vincent van Gogh** (1853-1890, painter) — Sourced
     - Original (Dutch letter; English): "Great things are not done by impulse, but by a series of small things brought together."
     - Card AR (tr.): العظائم تصنع بسلسلة من الأشياء الصغيرة | Card EN: …by a series of small things brought together
     - Source: Letter to Theo, The Hague, 22 October 1882 ([webexhibits](http://www.webexhibits.org/vangogh/letter/11/237.htm)). [Wikiquote](https://en.wikiquote.org/wiki/Vincent_van_Gogh)

130. **Epictetus** (c. 50-135, Stoic philosopher, born enslaved) — Sourced
     - Original (Greek; English): "No thing great is created suddenly, any more than a bunch of grapes or a fig."
     - Card AR (tr.): لا شيء عظيم يخلق فجأة | Card EN: No thing great is created suddenly
     - Source: *Discourses* I.15.7. [Wikiquote](https://en.wikiquote.org/wiki/Epictetus)

131. **Plato** (c. 428-348 BC, philosopher) — Sourced
     - Original (Greek; Jowett): "The beginning is the most important part of any work."
     - Card AR (tr.): البداية أهم جزء في أي عمل | Card EN: The beginning is the most important part of any work.
     - Source: *Republic* 377a (Jowett translation). [Wikiquote](https://en.wikiquote.org/wiki/Plato)
     - Note: In the original, the line is about educating the young.

132. **Katherine Johnson** (1918-2020, NASA mathematician) — Attributed
     - Original: "Everything was so new – the whole idea of going into space was new and daring. There were no textbooks, so we had to write them."
     - Card AR (tr.): لم تكن هناك كتب دراسية، فاضطررنا إلى كتابتها | Card EN: There were no textbooks, so we had to write them.
     - Source: The only source found is a quote list at [wearetechwomen.com](https://wearetechwomen.com/inspirational-quotes-katherine-johnson-nasa-mathematician/), cited on [Wikiquote](https://en.wikiquote.org/wiki/Katherine_Johnson).
     - Note: The original interview was not located. The line is strongly relevant (no textbooks), so keep it only if a primary source turns up.

---

## Rejected or misattributed

### Famous quotes that the named person did not say (or that cannot be traced)

- **Einstein: "Insanity is doing the same thing over and over and expecting different results."** Wikiquote lists it under Misattributed. Its earliest known form is in a 1981 Narcotics Anonymous text.
- **Einstein: "Everybody is a genius. But if you judge a fish by its ability to climb a tree…"** Misattributed per Wikiquote and [Quote Investigator (2013)](http://quoteinvestigator.com/2013/04/06/fish-climb/).
- **Einstein: "In the middle of difficulty lies opportunity."** John Wheeler said this in a 1979 interview, and no Einstein source exists (Wikiquote, "Quotes about Einstein").
- **Einstein: "Anyone who has never made a mistake has never tried anything new."** It is not in Wikiquote's sourced sections and has no primary source. QI lists several candidate originators.
- **Edison: "I have not failed. I've just found 10,000 ways that won't work."** Wikiquote lists it under Disputed. The earliest source is a 1967 magazine, 36 years after Edison's death. His sourced line is #85.
- **Edison: "Opportunity is missed by most people because it is dressed in overalls…"** and **"Our greatest weakness lies in giving up…"** The only sources are a 1990 self-help book and a 2003 quote book.
- **Mandela: "It always seems impossible until it's done."** There is no record of Mandela saying it ([Africa Check](https://africacheck.org/spot-check/no-record-mandela-saying-always-seems-impossible-done/)). [QI](https://quoteinvestigator.com/2016/01/05/done/) traces several older candidates.
- **Mandela: "I never lose. I either win or learn."** It is not in Wikiquote's sourced Mandela quotes, and no primary source was found.
- **Gandhi: "Be the change you wish to see in the world."** Wikiquote lists it under Misattributed. It is not in the *Collected Works* ([NYT, 2011](http://www.nytimes.com/2011/08/30/opinion/falser-words-were-never-spoken.html)), and its earliest form is from a 1970s school project. His real line is #107.
- **Gandhi: "Live as if you were to die tomorrow. Learn as if you were to live forever."** Wikiquote lists it under Disputed. It is an old proverb, also credited to Isidore of Seville, Erasmus and the *Hitopadesha*.
- **Lincoln: "Give me six hours to chop down a tree and I will spend the first four sharpening the axe."** [QI (2014)](https://quoteinvestigator.com/2014/03/29/sharp-axe/) found no Lincoln evidence. The saying started as a story about an anonymous woodsman, and the Lincoln version appeared in the 1980s.
- **Churchill: "Success is not final, failure is not fatal: it is the courage to continue that counts."** Wikiquote lists it under Misattributed and traces it to a 1930s Budweiser advertisement, per QI.
- **Confucius: "It does not matter how slowly you go as long as you do not stop."** It is not in the *Analects* and is modern phrasing. Use #114 or #115 instead.
- **Aristotle: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."** This is Will Durant's paraphrase in *The Story of Philosophy* (1926) (Wikiquote, Misattributed).
- **Seneca: "Luck is what happens when preparation meets opportunity."** Wikiquote lists it under Disputed. It has been credited to Seneca only since the 1990s. Use #110 or #111 instead.
- **Benjamin Franklin: "Tell me and I forget, teach me and I may remember, involve me and I learn."** Wikiquote lists it under Misattributed. It derives from the *Xunzi* ([QI](https://quoteinvestigator.com/2019/02/27/tell/)).
- **Henry Ford: "Whether you think you can, or you think you can't — you're right."** It was first credited to Ford months after his death in 1947 ([QI](https://quoteinvestigator.com/2015/02/03/you-can/)).
- **Martin Luther King Jr.: "Faith is taking the first step even when you don't see the whole staircase."** It is not found in King's writings or sermons, and its first known modern use is Marian Wright Edelman's, in 1999 ([QI, 2019](https://quoteinvestigator.com/2019/04/18/staircase/)). His real line is #106.
- **Grace Hopper: "It's easier to ask forgiveness than it is to get permission."** Hopper said it in 1986, but the phrase dates from the mid-19th century, and Wikiquote lists her attribution under Misattributed.
- **Grace Hopper: "The most dangerous phrase in the language is 'We've always done it this way.'"** Wikiquote lists this form under Disputed. Use the sourced version, #96.
- **Dijkstra: "Computer science is no more about computers than astronomy is about telescopes."** Wikiquote lists it under Disputed and calls it possibly folklore.
- **Carl Sagan: "Somewhere, something incredible is waiting to be known."** The reporter Sharon Begley wrote it in *Newsweek*, 1977 (Wikiquote, Misattributed; QI).
- **Steve Jobs: "Stay hungry, stay foolish."** Jobs quoted it from the *Whole Earth Epilog* (1974) and said so himself. If used, credit the *Whole Earth Catalog*.
- **Galileo: "Eppur si muove."** The story was first recorded by Baretti over a century after Galileo (Wikiquote, Misattributed).
- **Rumi: "Come, come, whoever you are… ours is not a caravan of despair."** It is by Abu Sa'id Abu'l-Khayr (Wikiquote, Misattributed). More generally, most popular English "Rumi" lines are loose modern rewrites with no matching Persian text, so I included none.
- **Lao Tzu: "A journey of a thousand miles begins with a single step."** This one is **kept, not rejected**, but only when credited to *Tao Te Ching* ch. 64 (#116).

### Misquotations of real Arabic lines

- **Al-Shabbi: «ومن لا يحب صعود الجبال».** The text reads **«ومن يتهيب صعود الجبال»** (Wikisource), so use the correct wording (#66).
- **Shawqi's verse (#70)** is often attributed to other poets. It is Shawqi's, from «سلوا قلبي».

### Hadith rejected as weak or fabricated

- **«اطلبوا العلم ولو بالصين»** (Seek knowledge even in China) was graded *batil* (false) by al-Albani in *al-Silsila al-Da'ifa* (no. 416), and Ibn al-Jawzi listed it among fabrications. The number and both gradings are from memory; I did not check them this session.
- **«اطلبوا العلم من المهد إلى اللحد»** (from the cradle to the grave) has no chain at all and is not a hadith. It is a later saying.
- **«الكلمة الحكمة ضالة المؤمن»** (Wisdom is the lost property of the believer) is Tirmidhi 2687. Darussalam grades it Da'if, al-Albani and Ahmad Shakir Very Da'if ([islamtics.com](https://islamtics.com/hadith/tirmidhi/2687/)). Tirmidhi himself notes that the narrator Ibrahim ibn al-Fadl is weak.
- **«اعمل لدنياك كأنك تعيش أبدا، واعمل لآخرتك كأنك تموت غدا»** is not authentic as a saying of the Prophet. Al-Albani said it has no basis as a marfu' report (*al-Silsila al-Da'ifa*); this is from memory and I did not check the number this session.
- **The rest of Ibn Majah 224** («…وواضع العلم عند غير أهله كمقلد الخنازير الجوهر») is very weak (Darussalam). Only the first sentence is kept (#38).
- **«إن الله يحب إذا عمل أحدكم عملا أن يتقنه»** is **not rejected** but disputed. See #37.

---

## Open questions for you

1. **Political and martial lines.** Several candidates read politically: «إذا الشعب يوما أراد الحياة» (#65, Tunisia's anthem and an Arab Spring slogan), «موطني» (#74, mentions the sword), Kanafani's tank (#78), Douglass (#124), Malcolm X (#122) and Mandela's "weapon" (#104). Keep them, keep a few, or keep the page strictly study-focused? Churchill's real "Never give in" (Harrow School speech, 29 October 1941; sourced) was left out on purpose, since he was colonial secretary at the time of the 1922 Palestine White Paper. Confirm that choice.
2. **Balance between scripture and other sources.** There are currently 38 scripture entries (17 Quran, 21 hadith) out of 132 entries. Should Quran and hadith be about a quarter of cards, or a separate "daily verse" mode? Also decide how cards display honorifics: «قال تعالى», «قال رسول الله ﷺ», or the reference only.
3. **Brackets in Saheeh International.** Keep the bracketed words on cards (#1, #8, #10) or remove them? Removing them still matches the Arabic, but no longer matches the published translation exactly.
4. **"Too long" entries.** About 30 entries are marked too long. Options: drop them, allow a two-line card for a small set (the Mutanabbi #62 and Muslim 2699 #18 are the best of these), or raise the word limit slightly.
5. **Death and grief framing.** Muslim 1631 (#33) and Kanafani (#78) are framed around death. Drop them, given the audience?
6. **Travel lines in Gaza.** Al-Shafi'i's «تغرب عن الأوطان» (#46) and Ibn Khaldun's chapter on travel (#56) praise travelling to study, which most Gaza students cannot do. The card for #56 already drops the travel part. Keep #46?
7. **Attribution labels on cards.** For "Attributed" items ('Ali via *Nahj al-Balagha*, al-Shafi'i's Diwan, al-Hasan al-Basri), should the card say «يُنسب إلى» (attributed to) instead of «قال»? *Nahj al-Balagha* is also sensitive between Sunni and Shia readers in both directions.
8. **The itqan hadith (#37).** It is the club's natural motto, but its grading is disputed. Include it with «حسّنه الألباني», or use Muslim 1955 «إن الله كتب الإحسان على كل شيء» (#24) as the excellence hadith instead?
9. **Native-speaker review.** Every "(tr.)" Arabic card is my translation and needs a native reader before publishing, especially #75-76, where the original Arabic of Fadwa Tuqan's memoir should replace my back-translation.
10. **Items to finish before use.** Do not use #60 (al-Biruni) until the Arabic is found in Yaqut, or #132 (Katherine Johnson) until a primary source is found. Without those two, 130 usable candidates remain. 'Ali's Kumayl saying («العلم يحرسك وأنت تحرس المال») was dropped because I could not check its source this session.
11. **Not researched, possible additions.** These figures could be added in a follow-up: Abdus Salam (Muslim Nobel physicist), al-Khwarizmi (no card-ready verified line found), al-Jazari, Fatima al-Fihri (no recorded sayings), Ibn Battuta, Tamim al-Barghouti and Mourid Barghouti.
12. **Spot-check sunnah.com.** sunnah.com could not be fetched directly. Please open the 21 hadith links once to confirm the number and the grade shown, especially #20 (adab:479), #22, #23, #36 and #38, and the Muslim numbers that sunnah.com splits into sub-letters (for example 2699a, 783a).
