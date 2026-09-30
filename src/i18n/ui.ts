import type { Lang } from './langs';

// Manifesto: text runs with inline photo "beads" between them.
type Seg = string | { img: string };

const ru = {
  meta: { title: 'Tandir Hall — плов на огне, Ташкент', description: 'Узбекский ресторан в Ташкенте: плов из казана на саксауле, самса из тандыра, шашлык на углях. Бронь стола онлайн и меню по QR-коду.' },
  nav: { menu: 'Меню', day: 'День казана', book: 'Бронь', visit: 'Как найти', lang: 'Язык' },
  status: { before: 'Казан разожгли в 7:00 · плов с 12:00', serving: 'Плов подают · осталось около {n} порций', after: 'Плов на сегодня закончился · шашлык и самса до 23:00' },
  hero: { kicker: 'Узбекская кухня · Ташкент', title: 'Плов на огне с рассвета', stamp: 'ЗАБРОНИРОВАТЬ СТОЛ · TANDIR HALL · ', menu: 'Смотреть меню' },
  manifesto: ['Рис девзира из Ферганы,', { img: 'plov-samarkand' }, 'баранина из Паркента,', { img: 'grill-lamb' }, 'огонь из саксаула', { img: 'hero' }, ' и тридцать лет у одного казана.'] as Seg[],
  manifestoBy: 'Равшан-ака, ошпаз',
  day: {
    title: 'Один день казана',
    steps: [
      { time: '07:00', title: 'Огонь', text: 'Разжигаем саксаул. Казан прогревается целый час.', img: 'hero' },
      { time: '09:00', title: 'Зирвак', text: 'Баранина, лук и жёлтая морковь томятся в хлопковом масле.', img: 'chef' },
      { time: '11:00', title: 'Рис', text: 'Девзира ложится сверху и доходит под крышкой.', img: 'plov-samarkand' },
      { time: '12:00', title: 'Подача', text: 'Первая порция уходит в зал с горячей лепёшкой.', img: 'plov-wedding' },
      { time: '15:00', title: 'Пусто', text: 'Казан пуст. Завтра в семь всё начнётся снова.', img: 'hall' },
    ],
  },
  menu: { title: 'Меню', intro: 'Плов до 15:00 или пока не закончится. Шашлык, самса и чай весь день.', all: 'Всё меню', hit: 'Выбор гостей', sold: 'Закончилось' },
  qr: { kicker: 'За столом', title: 'Меню на вашем телефоне', text: 'Наведите камеру на карточку на столе: меню с фото на пяти языках, заказ сразу на кухню, официант по одной кнопке.', try: 'Открыть меню стола 7', cards: 'Карточки для столов' },
  book: {
    title: 'Стол на вечер', note: 'Подтвердим бронь в WhatsApp в течение 15 минут.',
    name: 'Имя', phone: 'Телефон', guests: 'Гостей', date: 'Дата', time: 'Время', submit: 'Забронировать',
    ticketKicker: 'Приглашение', ticketTitle: 'Стол забронирован', guest: 'Гость', ticketNote: 'Покажите приглашение на входе',
    save: 'Сохранить', calendar: 'В календарь', close: 'Готово',
  },
  visit: { title: 'Приходите', address: 'Ташкент, ул. Шота Руставели, 18', hours: 'Ежедневно 11:00–23:00', phone: '+998 90 000 00 00', addressLabel: 'Адрес', hoursLabel: 'Часы', phoneLabel: 'Бронь', now: 'Сейчас в Ташкенте', route: 'Маршрут в Яндекс Картах' },
  footer: 'Демо-проект SABR. Ресторан, шеф и цены вымышлены, фото: авторы Pexels и ИИ.',
  app: { table: 'Стол', add: 'Добавить', order: 'Заказ', items: 'блюд', send: 'Отправить на кухню', waiter: 'Позвать официанта', bill: 'Попросить счёт', sent: 'Заказ на кухне', sentText: 'Официант подтвердит его в течение пары минут.', waiterSent: 'Официант идёт к вашему столу', total: 'Итого', close: 'Закрыть', demo: 'Так сообщение приходит на кухню в Telegram:' },
  tables: { title: 'Карточки для столов', text: '12 карточек A6, по четыре на лист A4. Каждый QR открывает меню своего стола.', print: 'Печать', card: 'Меню и заказ с телефона', scan: 'Наведите камеру на код' },
};

type UI = typeof ru;

const uz: UI = {
  meta: { title: 'Tandir Hall — olovda palov, Toshkent', description: 'Toshkentdagi o‘zbek restorani: saksovulda qozon palov, tandir somsa, cho‘g‘da kabob. Stolni onlayn band qilish va QR menyu.' },
  nav: { menu: 'Menyu', day: 'Qozon kuni', book: 'Band qilish', visit: 'Manzil', lang: 'Til' },
  status: { before: 'Qozon soat 7:00 da yoqildi · palov 12:00 dan', serving: 'Palov tortilmoqda · taxminan {n} porsiya qoldi', after: 'Bugungi palov tugadi · kabob va somsa 23:00 gacha' },
  hero: { kicker: 'O‘zbek oshxonasi · Toshkent', title: 'Tongdan olovda palov', stamp: 'STOL BAND QILISH · TANDIR HALL · ', menu: 'Menyuni ko‘rish' },
  manifesto: ['Farg‘onadan devzira guruch,', { img: 'plov-samarkand' }, 'Parkentdan qo‘y go‘shti,', { img: 'grill-lamb' }, 'saksovul olovi', { img: 'hero' }, ' va bitta qozon boshida o‘ttiz yil.'],
  manifestoBy: 'Ravshan aka, oshpaz',
  day: {
    title: 'Qozonning bir kuni',
    steps: [
      { time: '07:00', title: 'Olov', text: 'Saksovul yoqiladi. Qozon bir soat qiziydi.', img: 'hero' },
      { time: '09:00', title: 'Zirvak', text: 'Qo‘y go‘shti, piyoz va sariq sabzi paxta yog‘ida dimlanadi.', img: 'chef' },
      { time: '11:00', title: 'Guruch', text: 'Devzira ustiga solinadi va qopqoq ostida pishadi.', img: 'plov-samarkand' },
      { time: '12:00', title: 'Tortish', text: 'Birinchi porsiya issiq non bilan zalga chiqadi.', img: 'plov-wedding' },
      { time: '15:00', title: 'Bo‘sh', text: 'Qozon bo‘sh. Ertaga soat yettida hammasi qaytadan.', img: 'hall' },
    ],
  },
  menu: { title: 'Menyu', intro: 'Palov 15:00 gacha yoki tugaguncha. Kabob, somsa va choy kun bo‘yi.', all: 'To‘liq menyu', hit: 'Mehmonlar tanlovi', sold: 'Tugadi' },
  qr: { kicker: 'Stolda', title: 'Menyu telefoningizda', text: 'Stoldagi kartochkaga kamerani qarating: rasmli menyu besh tilda, buyurtma to‘g‘ri oshxonaga, ofitsiant bitta tugma bilan.', try: '7-stol menyusini ochish', cards: 'Stol kartochkalari' },
  book: {
    title: 'Kechki stol', note: 'Bandni 15 daqiqa ichida WhatsApp orqali tasdiqlaymiz.',
    name: 'Ism', phone: 'Telefon', guests: 'Mehmonlar', date: 'Sana', time: 'Vaqt', submit: 'Band qilish',
    ticketKicker: 'Taklifnoma', ticketTitle: 'Stol band qilindi', guest: 'Mehmon', ticketNote: 'Kirishda taklifnomani ko‘rsating',
    save: 'Saqlash', calendar: 'Kalendarga', close: 'Tayyor',
  },
  visit: { title: 'Kelib turing', address: 'Toshkent, Shota Rustaveli ko‘chasi, 18', hours: 'Har kuni 11:00–23:00', phone: '+998 90 000 00 00', addressLabel: 'Manzil', hoursLabel: 'Ish vaqti', phoneLabel: 'Band qilish', now: 'Hozir Toshkentda', route: 'Yandex Xaritada yo‘nalish' },
  footer: 'SABR demo loyihasi. Restoran, oshpaz va narxlar to‘qima, rasmlar: Pexels mualliflari va SI.',
  app: { table: 'Stol', add: 'Qo‘shish', order: 'Buyurtma', items: 'ta taom', send: 'Oshxonaga yuborish', waiter: 'Ofitsiantni chaqirish', bill: 'Hisobni so‘rash', sent: 'Buyurtma oshxonada', sentText: 'Ofitsiant bir necha daqiqada tasdiqlaydi.', waiterSent: 'Ofitsiant stolingizga kelmoqda', total: 'Jami', close: 'Yopish', demo: 'Xabar oshxonaga Telegramda shunday keladi:' },
  tables: { title: 'Stol kartochkalari', text: '12 ta A6 kartochka, A4 varaqda to‘rttadan. Har bir QR o‘z stolining menyusini ochadi.', print: 'Chop etish', card: 'Menyu va buyurtma telefondan', scan: 'Kamerani kodga qarating' },
};

const kk: UI = {
  meta: { title: 'Tandir Hall — отта піскен палау, Ташкент', description: 'Ташкенттегі өзбек мейрамханасы: сексеуілдегі қазан палау, тандыр самса, шоқтағы кәуап. Үстелді онлайн брондау және QR мәзір.' },
  nav: { menu: 'Мәзір', day: 'Қазан күні', book: 'Брондау', visit: 'Мекенжай', lang: 'Тіл' },
  status: { before: 'Қазан 7:00-де жағылды · палау 12:00-ден', serving: 'Палау беріліп жатыр · шамамен {n} порция қалды', after: 'Бүгінгі палау бітті · кәуап пен самса 23:00-ге дейін' },
  hero: { kicker: 'Өзбек асханасы · Ташкент', title: 'Таң атқаннан отта палау', stamp: 'ҮСТЕЛ БРОНДАУ · TANDIR HALL · ', menu: 'Мәзірді көру' },
  manifesto: ['Ферғанадан девзира күріші,', { img: 'plov-samarkand' }, 'Паркенттен қой еті,', { img: 'grill-lamb' }, 'сексеуіл оты', { img: 'hero' }, ' және бір қазан басында отыз жыл.'],
  manifestoBy: 'Равшан аға, ошпаз',
  day: {
    title: 'Қазанның бір күні',
    steps: [
      { time: '07:00', title: 'От', text: 'Сексеуіл жағылады. Қазан бір сағат қызады.', img: 'hero' },
      { time: '09:00', title: 'Зирвак', text: 'Қой еті, пияз және сары сәбіз мақта майында бұқтырылады.', img: 'chef' },
      { time: '11:00', title: 'Күріш', text: 'Девзира үстіне салынып, қақпақ астында піседі.', img: 'plov-samarkand' },
      { time: '12:00', title: 'Беру', text: 'Алғашқы порция ыстық нанмен залға шығады.', img: 'plov-wedding' },
      { time: '15:00', title: 'Бос', text: 'Қазан бос. Ертең сағат жетіде бәрі қайта басталады.', img: 'hall' },
    ],
  },
  menu: { title: 'Мәзір', intro: 'Палау 15:00-ге дейін немесе біткенше. Кәуап, самса және шай күні бойы.', all: 'Толық мәзір', hit: 'Қонақтар таңдауы', sold: 'Бітті' },
  qr: { kicker: 'Үстел басында', title: 'Мәзір телефоныңызда', text: 'Үстелдегі карточкаға камераны бағыттаңыз: суретті мәзір бес тілде, тапсырыс бірден асханаға, даяшы бір батырмамен.', try: '7-үстел мәзірін ашу', cards: 'Үстел карточкалары' },
  book: {
    title: 'Кешкі үстел', note: 'Брондауды 15 минут ішінде WhatsApp арқылы растаймыз.',
    name: 'Аты', phone: 'Телефон', guests: 'Қонақтар', date: 'Күні', time: 'Уақыты', submit: 'Брондау',
    ticketKicker: 'Шақыру', ticketTitle: 'Үстел брондалды', guest: 'Қонақ', ticketNote: 'Кіреберісте шақыруды көрсетіңіз',
    save: 'Сақтау', calendar: 'Күнтізбеге', close: 'Дайын',
  },
  visit: { title: 'Келіңіздер', address: 'Ташкент, Шота Руставели көшесі, 18', hours: 'Күн сайын 11:00–23:00', phone: '+998 90 000 00 00', addressLabel: 'Мекенжай', hoursLabel: 'Жұмыс уақыты', phoneLabel: 'Брондау', now: 'Қазір Ташкентте', route: 'Яндекс Картадағы бағыт' },
  footer: 'SABR демо жобасы. Мейрамхана, аспаз және бағалар ойдан алынған, суреттер: Pexels авторлары және ЖИ.',
  app: { table: 'Үстел', add: 'Қосу', order: 'Тапсырыс', items: 'тағам', send: 'Асханаға жіберу', waiter: 'Даяшыны шақыру', bill: 'Есепшот сұрау', sent: 'Тапсырыс асханада', sentText: 'Даяшы бірнеше минутта растайды.', waiterSent: 'Даяшы үстеліңізге келе жатыр', total: 'Барлығы', close: 'Жабу', demo: 'Хабар асханаға Telegram-да осылай келеді:' },
  tables: { title: 'Үстел карточкалары', text: '12 A6 карточка, A4 парағында төрттен. Әр QR өз үстелінің мәзірін ашады.', print: 'Басып шығару', card: 'Мәзір мен тапсырыс телефоннан', scan: 'Камераны кодқа бағыттаңыз' },
};

const en: UI = {
  meta: { title: 'Tandir Hall — plov over fire, Tashkent', description: 'Uzbek restaurant in Tashkent: kazan plov cooked over saxaul, samsa from the tandir, shashlik over coals. Book a table online, QR menu at every table.' },
  nav: { menu: 'Menu', day: 'The kazan day', book: 'Book', visit: 'Visit', lang: 'Language' },
  status: { before: 'Kazan lit at 7:00 · plov from 12:00', serving: 'Plov is being served · about {n} portions left', after: "Today's plov is gone · shashlik and samsa until 23:00" },
  hero: { kicker: 'Uzbek kitchen · Tashkent', title: 'Plov over fire since dawn', stamp: 'BOOK A TABLE · TANDIR HALL · ', menu: 'See the menu' },
  manifesto: ['Devzira rice from Fergana,', { img: 'plov-samarkand' }, 'lamb from Parkent,', { img: 'grill-lamb' }, 'a saxaul fire', { img: 'hero' }, ' and thirty years at one kazan.'],
  manifestoBy: 'Ravshan-aka, head cook',
  day: {
    title: 'One day of the kazan',
    steps: [
      { time: '07:00', title: 'Fire', text: 'We light the saxaul. The kazan heats for a full hour.', img: 'hero' },
      { time: '09:00', title: 'Zirvak', text: 'Lamb, onion and yellow carrots braise in cottonseed oil.', img: 'chef' },
      { time: '11:00', title: 'Rice', text: 'Devzira goes on top and finishes under the lid.', img: 'plov-samarkand' },
      { time: '12:00', title: 'Service', text: 'The first plate leaves for the hall with hot non bread.', img: 'plov-wedding' },
      { time: '15:00', title: 'Empty', text: 'The kazan is empty. Tomorrow at seven it starts again.', img: 'hall' },
    ],
  },
  menu: { title: 'Menu', intro: 'Plov until 15:00 or until it runs out. Shashlik, samsa and tea all day.', all: 'Full menu', hit: "Guests' choice", sold: 'Sold out' },
  qr: { kicker: 'At your table', title: 'The menu on your phone', text: 'Point your camera at the card on the table: a photo menu in five languages, orders straight to the kitchen, a waiter at one tap.', try: 'Open the menu for table 7', cards: 'Table cards' },
  book: {
    title: 'A table tonight', note: "We confirm on WhatsApp within 15 minutes.",
    name: 'Name', phone: 'Phone', guests: 'Guests', date: 'Date', time: 'Time', submit: 'Book',
    ticketKicker: 'Invitation', ticketTitle: 'Your table is booked', guest: 'Guest', ticketNote: 'Show this invitation at the door',
    save: 'Save', calendar: 'Add to calendar', close: 'Done',
  },
  visit: { title: 'Come by', address: 'Tashkent, 18 Shota Rustaveli St', hours: 'Every day 11:00–23:00', phone: '+998 90 000 00 00', addressLabel: 'Address', hoursLabel: 'Hours', phoneLabel: 'Bookings', now: 'Now in Tashkent', route: 'Directions in Yandex Maps' },
  footer: 'SABR demo project. The restaurant, chef and prices are fictional; photos by Pexels contributors and AI.',
  app: { table: 'Table', add: 'Add', order: 'Order', items: 'items', send: 'Send to kitchen', waiter: 'Call a waiter', bill: 'Ask for the bill', sent: 'Your order is in the kitchen', sentText: 'A waiter will confirm it in a couple of minutes.', waiterSent: 'A waiter is on the way', total: 'Total', close: 'Close', demo: 'This is how the kitchen receives it in Telegram:' },
  tables: { title: 'Table cards', text: '12 A6 cards, four per A4 sheet. Each QR opens the menu for its table.', print: 'Print', card: 'Menu and ordering from your phone', scan: 'Point your camera at the code' },
};

const ar: UI = {
  meta: { title: 'تندير هول — بلوف على النار، طشقند', description: 'مطعم أوزبكي في طشقند: بلوف القزان على نار الساكسول، سمسة التنور، شيش على الفحم. احجز طاولتك عبر الإنترنت، وقائمة طعام برمز QR على كل طاولة.' },
  nav: { menu: 'القائمة', day: 'يوم القزان', book: 'الحجز', visit: 'الموقع', lang: 'اللغة' },
  status: { before: 'أُشعل القزان الساعة 7:00 · البلوف من 12:00', serving: 'يُقدَّم البلوف الآن · بقي نحو {n} طبقًا', after: 'نفد بلوف اليوم · الشيش والسمسة حتى 23:00' },
  hero: { kicker: 'المطبخ الأوزبكي · طشقند', title: 'بلوف على النار منذ الفجر', stamp: 'احجز طاولة · TANDIR HALL · ', menu: 'تصفح القائمة' },
  manifesto: ['أرز ديفزيرا من فرغانة،', { img: 'plov-samarkand' }, 'لحم ضأن من باركنت،', { img: 'grill-lamb' }, 'نار الساكسول', { img: 'hero' }, ' وثلاثون عامًا أمام قزان واحد.'],
  manifestoBy: 'رافشان آكا، رئيس الطهاة',
  day: {
    title: 'يوم في حياة القزان',
    steps: [
      { time: '07:00', title: 'النار', text: 'نشعل خشب الساكسول ويسخن القزان ساعة كاملة.', img: 'hero' },
      { time: '09:00', title: 'الزيرفاك', text: 'يُطهى لحم الضأن والبصل والجزر الأصفر في زيت القطن.', img: 'chef' },
      { time: '11:00', title: 'الأرز', text: 'يوضع أرز ديفزيرا في الأعلى وينضج تحت الغطاء.', img: 'plov-samarkand' },
      { time: '12:00', title: 'التقديم', text: 'يخرج أول طبق إلى الصالة مع خبز النان الساخن.', img: 'plov-wedding' },
      { time: '15:00', title: 'فارغ', text: 'القزان فارغ. غدًا في السابعة يبدأ كل شيء من جديد.', img: 'hall' },
    ],
  },
  menu: { title: 'القائمة', intro: 'البلوف حتى 15:00 أو حتى نفاده. الشيش والسمسة والشاي طوال اليوم.', all: 'القائمة الكاملة', hit: 'اختيار الضيوف', sold: 'نفد' },
  qr: { kicker: 'على طاولتك', title: 'القائمة على هاتفك', text: 'وجّه الكاميرا إلى البطاقة على الطاولة: قائمة مصوّرة بخمس لغات، والطلب يصل إلى المطبخ مباشرة، والنادل بلمسة واحدة.', try: 'افتح قائمة الطاولة 7', cards: 'بطاقات الطاولات' },
  book: {
    title: 'طاولة لهذا المساء', note: 'نؤكد الحجز عبر واتساب خلال 15 دقيقة.',
    name: 'الاسم', phone: 'الهاتف', guests: 'عدد الضيوف', date: 'التاريخ', time: 'الوقت', submit: 'احجز',
    ticketKicker: 'دعوة', ticketTitle: 'تم حجز طاولتك', guest: 'الضيف', ticketNote: 'أظهر هذه الدعوة عند المدخل',
    save: 'حفظ', calendar: 'إضافة إلى التقويم', close: 'تم',
  },
  visit: { title: 'تفضلوا بزيارتنا', address: 'طشقند، شارع شوتا روستافيلي 18', hours: 'يوميًا 11:00–23:00', phone: '+998 90 000 00 00', addressLabel: 'العنوان', hoursLabel: 'ساعات العمل', phoneLabel: 'الحجز', now: 'الآن في طشقند', route: 'الاتجاهات في خرائط ياندكس' },
  footer: 'مشروع تجريبي من SABR. المطعم والطاهي والأسعار خيالية، والصور من Pexels والذكاء الاصطناعي.',
  app: { table: 'الطاولة', add: 'إضافة', order: 'الطلب', items: 'أطباق', send: 'إرسال إلى المطبخ', waiter: 'استدعاء النادل', bill: 'طلب الحساب', sent: 'طلبك في المطبخ', sentText: 'سيؤكده النادل خلال دقيقتين.', waiterSent: 'النادل في طريقه إليك', total: 'المجموع', close: 'إغلاق', demo: 'هكذا تصل الرسالة إلى المطبخ عبر تيليجرام:' },
  tables: { title: 'بطاقات الطاولات', text: '12 بطاقة بحجم A6، أربع في كل ورقة A4. كل رمز QR يفتح قائمة طاولته.', print: 'طباعة', card: 'القائمة والطلب من هاتفك', scan: 'وجّه الكاميرا إلى الرمز' },
};

export const ui: Record<Lang, UI> = { ru, uz, kk, en, ar };
export type { UI, Seg };
