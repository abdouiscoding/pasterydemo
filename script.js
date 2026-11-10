/* Arabic translations (French is the source text in index.html) */
const AR = {
  title: 'ميزون دوس | كعك وحلويات حسب الطلب',
  n1: 'إبداعاتنا', n2: 'كيف نعمل', n3: 'اطلب الآن', n4: 'اتصل بنا', nb: 'اطلب كعكتك',
  h_e: 'حلويات حرفية', h_h: 'كعكات صُنعت للحظات التي لا تُنسى.',
  h_l: 'صمّم كعكتك الخاصة عبر الإنترنت في دقيقتين. نحضّرها طازجة، ونزيّنها يدويًا، وتكون جاهزة في التاريخ الذي تختاره.',
  h_b1: 'صمّم كعكتي', h_b2: 'شاهد أعمالنا',
  s1: 'كعكة مُسلَّمة', s2: 'سنوات من الخبرة', s3: 'زبائن راضون (%)',
  cr_e: 'إبداعاتنا المميزة', cr_h: 'طازجة من الفرن، ومزيّنة يدويًا', cr_p: 'زبدة حقيقية وفواكه موسمية وبلا أي اختصارات في كل طبقة.',
  c1: 'كعكة الاحتفالات', c1d: 'طبقات من الإسفنج الهش وكريمة ناعمة ورسالتك على الوجه.', pr1: 'ابتداءً من 3 500 دج',
  c2: 'كعكة الزفاف', c2d: 'طوابق مصممة حسب ألوانك وموضوع حفلك.', pr2: 'ابتداءً من 12 000 دج',
  c3: 'علبة كب كيك', c3d: 'اثنا عشر كب كيك مزيَّنة يدويًا، مثالية للحفلات والهدايا.', pr3: 'ابتداءً من 1 800 دج',
  c4: 'تارت الفواكه', c4d: 'عجينة مقرمشة وكريمة الفانيلا وفواكه طازجة مغلّفة بالجلي.', pr4: 'ابتداءً من 2 500 دج',
  pc_e: 'كيف نعمل', pc_h: 'من الفكرة إلى مائدتك في ثلاث خطوات',
  st1: 'شاركنا فكرتك', st1d: 'اختر الكعكة والحجم والنكهة، وأرفق صورة التصميم الذي يعجبك.',
  st2: 'نؤكد ثم نخبز', st2d: 'نتصل بك لتأكيد التفاصيل، ثم نحضّر كعكتك طازجة في الموعد المحدد.',
  st3: 'استلم واحتفل', st3d: 'استلمها من المحل، مغلّفة وجاهزة. ولم يبقَ سوى الاحتفال.',
  or_e: 'طلب خاص', or_h: 'صمّم كعكتك', or_l: 'اختر خياراتك واحصل على سعر تقديري فوري. نؤكد التفاصيل عبر الهاتف.',
  f_name: 'الاسم الكامل', f_phone: 'الهاتف', f_type: 'نوع الكعكة', f_size: 'الحجم', f_flavor: 'النكهة',
  f_date: 'تاريخ الاستلام', f_photo: 'صورة التصميم (اختياري)', f_note: 'رسالة على الكعكة', f_total: 'السعر التقديري', f_send: 'أرسل طلبي',
  sz1: '6 أشخاص', sz2: '10 أشخاص', sz3: '16 شخصًا',
  fl1: 'فانيليا', fl2: 'شوكولاتة', fl3: 'فستق', fl4: 'ريد فيلفيت',
  'ph:name': 'اسمك', 'ph:note': 'عيد ميلاد سعيد يا سارة',
  d_e: 'فضاء التسيير الخاص بك', d_h: 'لوحة تحكم بسيطة لإدارة طلباتك',
  d_p: 'استقبل كل طلب بتفاصيله، وأكّده بنقرة واحدة، وتابع نشاطك من هاتفك أو حاسوبك.',
  m1: 'لوحة التحكم', m2: 'الطلبات', m3: 'التقويم', m4: 'الزبائن', m5: 'الإعدادات', d_hi: 'مرحبًا، ميزون دوس',
  k1: 'طلبات اليوم', k2: 'رقم الأعمال', k4: 'طلبات مُنجزة هذا الشهر',
  ch_t: 'الطلبات خلال آخر 7 أيام', tb_t: 'آخر الطلبات',
  th1: 'الزبون', th2: 'الكعكة', th3: 'الاستلام', th4: 'الحالة',
  p1: 'سارة ب.', p2: 'كريم م.', p3: 'أمينة ل.', p4: 'ياسين ح.',
  s_ok: 'مؤكدة', s_wa: 'قيد الانتظار', s_re: 'جاهزة',
  d_c: 'معاينة للواجهة. نسختك تُصمَّم حسب احتياجاتك.',
  ft1: 'ميزون دوس، [العنوان]، [المدينة]', ft2: '[الهاتف] · [إنستغرام]', ft3: 'مفتوح يوميًا من 8:00 إلى 20:00'
};
const M = {
  fr: { thanks: (n, d, p) => `Merci ${n}. Votre commande pour le ${d} a bien été reçue (estimation : ${p}). Nous vous appellerons pour confirmer les détails.` },
  ar: { thanks: (n, d, p) => `شكرًا ${n}. تم استلام طلبك بتاريخ ${d} (السعر التقديري: ${p}). سنتصل بك لتأكيد التفاصيل.` }
};

/* ---------- Shared: language, navigation, scroll effects ---------- */
const $ = id => document.getElementById(id);
const hooks = [];
let lang = 'fr';
const DAYS = { fr: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'], ar: ['إثن', 'ثلا', 'أرب', 'خمي', 'جمع', 'سبت', 'أحد'] };
const fmt = n => n.toLocaleString(lang === 'ar' ? 'en-US' : 'fr-FR');
const cur = () => lang === 'ar' ? 'دج' : 'DA';
const t = k => M[lang][k];

// Keep the French source text so switching back is lossless
const src = {};
document.querySelectorAll('[data-i]').forEach(el => src[el.dataset.i] = el.innerHTML);
document.querySelectorAll('[data-ph]').forEach(el => src['ph:' + el.dataset.ph] = el.placeholder);

function setLang(l) {
  lang = l;
  const ar = l === 'ar';
  document.documentElement.lang = l;
  document.documentElement.dir = ar ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i]').forEach(el => el.innerHTML = (ar && AR[el.dataset.i]) || src[el.dataset.i]);
  document.querySelectorAll('[data-ph]').forEach(el => el.placeholder = (ar && AR['ph:' + el.dataset.ph]) || src['ph:' + el.dataset.ph]);
  document.querySelectorAll('[data-d]').forEach(el => el.textContent = DAYS[l][el.dataset.d]);
  document.querySelectorAll('[data-cur]').forEach(el => el.textContent = cur());
  $('sw').dataset.l = l;
  $('sw').setAttribute('aria-checked', ar);
  try { localStorage.setItem('lang', l); } catch (e) {}
  hooks.forEach(fn => fn());
}
$('sw').onclick = () => setLang(lang === 'fr' ? 'ar' : 'fr');

const nav = $('nav'), menu = $('menu');
addEventListener('scroll', () => nav.classList.toggle('solid', scrollY > 40), { passive: true });
$('burger').onclick = () => menu.classList.toggle('open');
menu.onclick = e => { if (e.target.tagName === 'A') menu.classList.remove('open'); };

const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const co = new IntersectionObserver(es => es.forEach(e => {
  if (!e.isIntersecting) return;
  co.unobserve(e.target);
  const to = +e.target.dataset.count, t0 = performance.now();
  (function tick(now) {
    const p = Math.min((now - t0) / 1400, 1);
    e.target.textContent = Math.round(to * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(t0);
}), { threshold: .6 });
document.querySelectorAll('[data-count]').forEach(el => co.observe(el));

/* ---------- Pastry: order form ---------- */
const min = new Date(); min.setDate(min.getDate() + 2);
$('date').min = min.toISOString().slice(0, 10);

const showTotal = () => {
  $('total').textContent = fmt(+$('type').value + +$('size').value + +$('flavor').value) + ' ' + cur();
};
['type', 'size', 'flavor'].forEach(id => $(id).addEventListener('change', showTotal));
hooks.push(showTotal, () => $('msg').style.display = 'none');

$('order-form').addEventListener('submit', e => {
  e.preventDefault();
  const m = $('msg'); m.style.display = 'block';
  m.textContent = M[lang].thanks($('name').value, $('date').value, $('total').textContent);
  m.scrollIntoView({ behavior: 'smooth', block: 'center' });
  e.target.reset(); showTotal();
});

/* ---------- Start ---------- */
let saved = 'fr';
try { saved = localStorage.getItem('lang') || 'fr'; } catch (e) {}
setLang(saved);
