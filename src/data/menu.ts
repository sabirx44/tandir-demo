import type { Lang } from '../i18n/langs';

type T = Record<Lang, string>;
export type Dish = { id: string; cat: string; price: number; name: T; desc: T; hit?: boolean; soldOut?: boolean };

export const categories: { id: string; name: T }[] = [
  { id: 'plov', name: { ru: 'Плов', uz: 'Palov', kk: 'Палау', en: 'Plov', ar: 'البلوف' } },
  { id: 'grill', name: { ru: 'С углей', uz: 'Cho‘g‘da', kk: 'Шоқта', en: 'From the coals', ar: 'على الفحم' } },
  { id: 'tandir', name: { ru: 'Из тандыра', uz: 'Tandirdan', kk: 'Тандырдан', en: 'From the tandir', ar: 'من التنور' } },
  { id: 'lagman', name: { ru: 'Лагман', uz: 'Lag‘mon', kk: 'Лағман', en: 'Lagman', ar: 'لاغمان' } },
  { id: 'salads', name: { ru: 'Салаты', uz: 'Salatlar', kk: 'Салаттар', en: 'Salads', ar: 'السلطات' } },
  { id: 'drinks', name: { ru: 'Напитки', uz: 'Ichimliklar', kk: 'Сусындар', en: 'Drinks', ar: 'المشروبات' } },
];

export const dishes: Dish[] = [
  {
    id: 'plov-wedding', cat: 'plov', price: 65000, hit: true,
    name: { ru: 'Свадебный плов', uz: 'To‘y oshi', kk: 'Той палауы', en: 'Wedding plov', ar: 'بلوف الأعراس' },
    desc: { ru: 'Девзира, баранина, нут, изюм, перепелиные яйца', uz: 'Devzira, qo‘y go‘shti, no‘xat, mayiz, bedana tuxumi', kk: 'Девзира, қой еті, ноқат, мейіз, бөдене жұмыртқасы', en: 'Devzira rice, lamb, chickpeas, raisins, quail eggs', ar: 'أرز ديفزيرا، لحم ضأن، حمص، زبيب، بيض السمان' },
  },
  {
    id: 'plov-samarkand', cat: 'plov', price: 58000,
    name: { ru: 'Самаркандский плов', uz: 'Samarqand oshi', kk: 'Самарқанд палауы', en: 'Samarkand plov', ar: 'بلوف سمرقند' },
    desc: { ru: 'Слоями, морковь отдельно от риса, головка чеснока', uz: 'Qatlam-qatlam, sabzi alohida, butun sarimsoq', kk: 'Қабат-қабат, сәбіз бөлек, тұтас сарымсақ', en: 'Layered, carrots on top, a whole head of garlic', ar: 'طبقات، الجزر فوق الأرز، رأس ثوم كامل' },
  },
  {
    id: 'grill-lamb', cat: 'grill', price: 42000, hit: true,
    name: { ru: 'Шашлык из баранины', uz: 'Qo‘y go‘shti kabobi', kk: 'Қой етінен кәуап', en: 'Lamb shashlik', ar: 'شيش لحم الضأن' },
    desc: { ru: 'На углях саксаула, лук в уксусе, зелень', uz: 'Saksovul cho‘g‘ida, sirkali piyoz, ko‘kat', kk: 'Сексеуіл шоғында, сірке суындағы пияз, көк', en: 'Over saxaul coals, pickled onion, herbs', ar: 'على جمر الساكسول، بصل بالخل، أعشاب' },
  },
  {
    id: 'grill-lula', cat: 'grill', price: 32000,
    name: { ru: 'Люля-кебаб', uz: 'Lula kabob', kk: 'Люля-кәуап', en: 'Lula kebab', ar: 'لولا كباب' },
    desc: { ru: 'Рубленая баранина с курдючным жиром, лаваш, сумах', uz: 'Qiyma qo‘y go‘shti va dumba, lavash, sumax', kk: 'Турама қой еті мен құйрық май, лаваш, сумах', en: 'Minced lamb with tail fat, lavash, sumac', ar: 'لحم ضأن مفروم مع الشحم، خبز لافاش، سماق' },
  },
  {
    id: 'tandir-samsa', cat: 'tandir', price: 14000, hit: true,
    name: { ru: 'Самса тандырная', uz: 'Tandir somsa', kk: 'Тандыр самса', en: 'Tandir samsa', ar: 'سمسة التنور' },
    desc: { ru: 'Слоёное тесто, рубленая баранина, лук', uz: 'Qatlama xamir, qiyma qo‘y go‘shti, piyoz', kk: 'Қат-қат қамыр, турама қой еті, пияз', en: 'Flaky pastry, minced lamb, onion', ar: 'عجينة مورقة، لحم ضأن مفروم، بصل' },
  },
  {
    id: 'tandir-bread', cat: 'tandir', price: 6000,
    name: { ru: 'Лепёшка', uz: 'Non', kk: 'Нан', en: 'Non bread', ar: 'خبز النان' },
    desc: { ru: 'Горячая, с кунжутом, прямо из тандыра', uz: 'Issiq, kunjutli, tandirdan', kk: 'Ыстық, күнжітті, тандырдан', en: 'Hot, with sesame, straight from the tandir', ar: 'ساخن بالسمسم، من التنور مباشرة' },
  },
  {
    id: 'tandir-gosht', cat: 'tandir', price: 120000, soldOut: true,
    name: { ru: 'Тандыр-гушт', uz: 'Tandir go‘sht', kk: 'Тандыр ет', en: 'Tandir gosht', ar: 'لحم التنور' },
    desc: { ru: 'Баранина 12 часов в тандыре, на двоих', uz: '12 soat tandirda qo‘y go‘shti, ikki kishilik', kk: '12 сағат тандырдағы қой еті, екі адамға', en: 'Lamb slow-cooked 12 hours in the tandir, for two', ar: 'لحم ضأن مطهو 12 ساعة في التنور، لشخصين' },
  },
  {
    id: 'salad-achichuk', cat: 'salads', price: 18000,
    name: { ru: 'Аччик-чучук', uz: 'Achchiq-chuchuk', kk: 'Ащы-тұщы салат', en: 'Achichuk', ar: 'سلطة أتشيتشوك' },
    desc: { ru: 'Томаты, лук, острый перец, базилик', uz: 'Pomidor, piyoz, achchiq qalampir, rayhon', kk: 'Қызанақ, пияз, ащы бұрыш, райхан', en: 'Tomato, onion, hot pepper, basil', ar: 'طماطم، بصل، فلفل حار، ريحان' },
  },
  {
    id: 'lagman', cat: 'lagman', price: 32000,
    name: { ru: 'Лагман', uz: 'Lag‘mon', kk: 'Лағман', en: 'Lagman', ar: 'لاغمان' },
    desc: { ru: 'Тянутая вручную лапша, говядина, перец и овощи в бульоне', uz: 'Qo‘lda cho‘zilgan lag‘mon, mol go‘shti, qalampir va sabzavot', kk: 'Қолмен созылған кеспе, сиыр еті, бұрыш пен көкөніс', en: 'Hand-pulled noodles, beef, peppers and vegetables in broth', ar: 'معكرونة مسحوبة يدوياً مع لحم بقري وفلفل وخضار في المرق' },
  },
  {
    id: 'drink-tea', cat: 'drinks', price: 12000,
    name: { ru: 'Зелёный чай', uz: 'Ko‘k choy', kk: 'Көк шай', en: 'Green tea', ar: 'شاي أخضر' },
    desc: { ru: 'Чайник на компанию, курага и миндаль', uz: 'Choynak, o‘rik va bodom bilan', kk: 'Шәйнек, өрік пен бадам', en: 'A pot for the table, apricots and almonds', ar: 'إبريق للطاولة مع مشمش مجفف ولوز' },
  },
  {
    id: 'drink-compote', cat: 'drinks', price: 15000,
    name: { ru: 'Компот из сухофруктов', uz: 'Quruq meva kompoti', kk: 'Кептірілген жеміс компоты', en: 'Dried fruit compote', ar: 'كومبوت الفواكه المجففة' },
    desc: { ru: 'Домашний, 1 литр', uz: 'Uy usulida, 1 litr', kk: 'Үй әдісімен, 1 литр', en: 'Homemade, 1 litre', ar: 'منزلي، لتر واحد' },
  },
];

export const currency: Record<Lang, string> = { ru: 'сум', uz: 'so‘m', kk: 'сум', en: 'UZS', ar: 'سوم' };
