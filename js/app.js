/* ============================================================
   ДАННЫЕ. Изображения — маски туши (белое = линия) и карты света
   (R — окно/светильник, G — очередь включения, B — ореол).
   Чтобы заменить скетч: подставьте URL/base64 в ASSETS.
   ============================================================ */
const ASSETS = {"Fg117_sk-10":"assets/img/Fg117_sk-10.webp","Fg117_sk-10#L":"assets/img/Fg117_sk-10-light.webp","Fg117_sk-12":"assets/img/Fg117_sk-12.webp","Fg117_sk-12#L":"assets/img/Fg117_sk-12-light.webp","Fg131_sk-06":"assets/img/Fg131_sk-06.webp","Fg131_sk-06#L":"assets/img/Fg131_sk-06-light.webp","Fg200_sk-01-1":"assets/img/Fg200_sk-01-1.webp","Fg200_sk-01-1#L":"assets/img/Fg200_sk-01-1-light.webp","Fg200_sk-02":"assets/img/Fg200_sk-02.webp","Fg200_sk-02#L":"assets/img/Fg200_sk-02-light.webp","Fg200_sk-03":"assets/img/Fg200_sk-03.webp","Fg200_sk-03#L":"assets/img/Fg200_sk-03-light.webp","Fg_sk-08":"assets/img/Fg_sk-08.webp","Fg_sk-08#L":"assets/img/Fg_sk-08-light.webp","Fg_sk-09":"assets/img/Fg_sk-09.webp","Fg_sk-09#L":"assets/img/Fg_sk-09-light.webp","ph_oxy":"assets/img/ph_oxy.webp","ph_roy":"assets/img/ph_roy.webp"};

const SHEETS = (()=>{
  const all = [
    { code:'FG164', years:'2021–2026', title:'s.fg164.title', view:'s.fg164a.view', location:'s.fg164.loc', stage:'s.fg164.stage', scale:'scale.persp', desc:'s.fg164a.desc',
      layers:[{ink:'Fg117_sk-10',light:'Fg117_sk-10#L'}], notes:[] },
    { code:'FG164', years:'2021–2026', title:'s.fg164.title', view:'s.fg164b.view', location:'s.fg164.loc', stage:'s.fg164.stage', scale:'scale.persp', desc:'s.fg164b.desc',
      layers:[{ink:'Fg117_sk-12',light:'Fg117_sk-12#L'}], notes:[] },
    { code:'FG200', years:'2024–2026', title:'s.fg200.title', view:'s.fg200a.view', location:'s.fg200.loc', stage:'s.fg200.stage', scale:'scale.persp', desc:'s.fg200a.desc',
      layers:[{ink:'Fg200_sk-01-1',light:'Fg200_sk-01-1#L'}], notes:[] },
    { code:'FG200', years:'2024–2026', title:'s.fg200.title', view:'s.fg200b.view', location:'s.fg200.loc', stage:'s.fg200.stage', scale:'scale.persp', desc:'s.fg200b.desc',
      layers:[{ink:'Fg200_sk-02',light:'Fg200_sk-02#L'}], notes:[] },
    { code:'FG131', years:'2018–2026', title:'s.fg131.title', view:'s.fg131.view', location:'s.fg131.loc', stage:'s.fg131.stage', scale:'scale.persp', desc:'s.fg131.desc',
      layers:[{ink:'Fg131_sk-06',light:'Fg131_sk-06#L'}], notes:[] },
    { code:'FG200', years:'2024–2026', title:'s.fg200c.title', view:'s.fg200c.view', location:'s.fg200.loc', stage:'s.fg200.stage', scale:'scale.persp', desc:'s.fg200c.desc',
      layers:[{ink:'Fg200_sk-03',light:'Fg200_sk-03#L'}], notes:[] },
    { code:'—', years:'', title:'s.cla.title', view:'s.cla.view', location:'s.cl.loc', stage:'s.cl.stage', scale:'scale.none', desc:'s.cla.desc',
      layers:[{ink:'Fg_sk-08',light:'Fg_sk-08#L'}], notes:[] },
    { code:'—', years:'', title:'s.clb.title', view:'s.clb.view', location:'s.cl.loc', stage:'s.cl.stage', scale:'scale.persp', desc:'s.clb.desc',
      layers:[{ink:'Fg_sk-09',light:'Fg_sk-09#L'}], notes:[] },
  ];
  return { main: all, arch: all, int: all };
})();
/* ---------- ЯЗЫКИ ---------- */
const I18N = {"ru":{"svc.tab":"Услуги","svc.header":"FG ARCHITECTS — ВЕДОМОСТЬ УСЛУГ","svc.sheet":"ЛИСТ: КАЛЬКА 04-А","svc.title":"Что мы проектируем","svc.1":"Жилая архитектура: частные дома, в том числе на склоне","svc.2":"Общественная архитектура: офисы, отели и курорты","svc.3":"Общественные бани, тир-парк","svc.4":"Интерьеры всех типов: жилые и общественные","svc.5":"Авторский надзор на объекте","svc.stages.k":"Стадии","svc.stages":"эскизный проект → рабочий проект → авторский надзор","svc.cta":"Обсудить проект","wa.msg0":"Здравствуйте! Хочу обсудить проект.","wa.msg":"Здравствуйте! Хочу обсудить проект. Смотрю на вашем сайте:","rl.show":"Снять кальку","rl.hide":"Вернуть кальку","rl.photo":"Фото · реализовано","rl.render":"Визуализация","meta.title":"fg architects — архитектурное бюро в Алматы | архитектура и интерьеры","meta.description":"fg architects (ТОО «Fort Groupe») — архитектурное бюро в Алматы с 2004 года, более 200 реализованных проектов и казахстанские и международные награды. Жилая и общественная архитектура — частные дома, офисы, отели и курорты, общественные бани, тир-парк — и интерьеры всех типов: от эскиза до рабочего проекта и авторского надзора.","og.title":"fg architects — архитектурное бюро в Алматы","og.description":"С 2004 года: жилая и общественная архитектура — частные дома, офисы, отели и курорты, общественные бани, тир-парк — и интерьеры всех типов. Алматы, пр. Серкебаева, 107/1, оф. 13.","tagline":"Архитектурное бюро · Алматы · с 2004","logo.aria":"fg architects — на первый лист","tabs.aria":"Разделы","tab.arch":"Архитектура","tab.int":"Интерьер","tab.founders":"Основатели","theme.paper":"Ватман","theme.bp":"Blueprint","theme.aria":"Свет: синька с освещением окон","sound.label":"Звук","sound.aria":"Звук карандаша: включить или выключить","lang.aria":"Язык сайта","hint.sheets":"листы","hint.bp":"свет","hint.layer":"слой","hint.sound":"звук","layer.label":"Слой:","layer.lines":"Линии","layer.shade":"Подача","layer.aria":"Переключить слой: линии или тональная подача","loader":"ЗАКРЕПЛЯЮ ЛИСТ…","loader.error":"ЛИСТ НЕ ЗАГРУЗИЛСЯ","nav.prev":"Предыдущий лист","nav.next":"[следующий лист] →","tb.brandSmall":"FORT GROUPE · АЛМАТЫ","tb.stage":"Стадия","tb.scale":"Масштаб","tb.location":"Локация","tb.object":"Объект","tb.sheet":"Лист","tb.contacts":"Контакты","canvas.prefix":"Эскиз","tr.header":"FG ARCHITECTS — РУКОВОДСТВО БЮРО","tr.sheet":"ЛИСТ: КАЛЬКА 01-А","f1.name":"Владимир Рой","f1.role":"СООСНОВАТЕЛЬ / ГЛАВНЫЙ АРХИТЕКТОР ПРОЕКТОВ","f1.since":"В профессии с 1999 года","f2.name":"Оксана Погодаева","f2.role":"ОСНОВАТЕЛЬ / УПРАВЛЯЮЩИЙ ПАРТНЁР","f2.since":"В профессии с 1995 года","quote":"«Архитектура начинается с человека и строится вокруг человека. Человек — мера всего».","tr.foot":"Студия основана в 2004 году · Алматы, пр. Серкебаева, 107/1, оф. 13","founders.meta":"Калька 01-А","founders.title":"Руководство бюро","founders.desc":"Студия основана в 2004 году. Архитектура, интерьеры и концепции: от первой линии на листе до авторского надзора на объекте.","founders.stage":"—","founders.location":"Алматы","founders.object":"Руководство бюро","noscript.h":"fg architects — архитектурное бюро в Алматы","noscript.p1":"ТОО «Fort Groupe», с 2004 года. Жилая и общественная архитектура — частные дома, офисы, отели и курорты, общественные бани, тир-парк — и интерьеры всех типов: эскиз, рабочий проект, авторский надзор.","noscript.p2":"Руководство: Оксана Погодаева — основатель, управляющий партнёр (в профессии с 1995 года); Владимир Рой — сооснователь, главный архитектор проектов (в профессии с 1999 года).","noscript.p3":"Для просмотра эскизов включите JavaScript.","scale.persp":"б/м · перспектива","scale.none":"б/м","s.fg164.title":"Agua Dulce — дом на горном склоне","s.fg164.loc":"Алматы, Медеуский р‑н","s.fg164.stage":"ЭП · РП","s.fg164a.view":"Вид с подъездной дороги","s.fg164a.desc":"Индивидуальный жилой дом на сложном горном рельефе: два этажа и цоколь, гостевой флигель, террасы со стороны склона. Проект учитывает высокую сейсмичность, подпорные стены и отвод ливневых вод.","s.fg164b.view":"Терраса и лестница к саду","s.fg164b.desc":"Крытая терраса продолжает гостиную, кухню и столовую. Цоколь облицован натуральным камнем, объёмы — деревом; лестница спускается к нижнему уровню участка.","s.fg200.title":"Офисное здание класса А","s.fg200.loc":"Карасайский р‑н, с. Абай","s.fg200.stage":"Эскизный проект","s.fg200a.view":"Главный фасад","s.fg200a.desc":"Административное здание класса А: перфорированная оболочка с органическими проёмами, витражный первый этаж и проект фасадного освещения.","s.fg200b.view":"Угловой вид, главный вход","s.fg200b.desc":"Угол здания с вертикальным объёмом входной группы. Оболочка волной поднимается над входом и открывает витраж лобби.","s.fg200c.title":"Офисное здание — атриум","s.fg200c.view":"Лаунж у витража","s.fg200c.desc":"Двухсветное пространство за витражом: перфорация оболочки даёт рассеянный верхний свет, лаунж-зона выходит к озеленению.","s.fg131.title":"Отель в Чундже — лобби-бар","s.fg131.loc":"Алматинская обл., Чунджа","s.fg131.stage":"РД · авторский надзор","s.fg131.view":"Перспектива лобби","s.fg131.desc":"Загородный отель: интерьеры, комплектация и авторский надзор. Лобби с реечным потолком, кольцевыми светильниками и живым озеленением.","s.cl.loc":"Алматы","s.cl.stage":"Дизайн-проект","s.cla.title":"Классический интерьер — холл","s.cla.view":"Развёртка стены с порталом","s.cla.desc":"Симметричная развёртка холла: пилястры, филёнки, двустворчатые двери с остеклением и кованые комоды.","s.clb.title":"Классический интерьер — гостиная","s.clb.view":"Перспектива","s.clb.desc":"Гостиная в той же стилистике: стеновые панели, карнизы, потолочный светильник и анфиладная связь с холлом.","tb.studio":"Студия","addr":"Алматы, пр. Серкебаева, 107/1, оф. 13","map.btn":"На карте","map.aria":"Показать офис студии на карте","map.header":"СИТУАЦИОННАЯ СХЕМА — ОФИС СТУДИИ","map.sheet":"ЛИСТ: КАЛЬКА 02-А","map.lead":"Офис fg architects","map.open":"Открыть в навигаторе","close":"Закрыть","scale.firm":"200+ реализованных проектов","awards.seal":"НАГРАДЫ · 10+ · KZ · INT · ","awards.aria":"Награды студии: открыть ведомость","awards.header":"FG ARCHITECTS — ВЕДОМОСТЬ НАГРАД","awards.sheet":"ЛИСТ: КАЛЬКА 03-А","awards.count":"10+","awards.lead":"наград казахстанских и международных конкурсов по архитектуре и дизайну","awards.text":"Основатели студии — победители казахстанских и международных конкурсов по архитектуре и дизайну интерьера. С 2004 года студия реализовала более 200 проектов.","lamp.label":"свет","map.yandex":"Яндекс Карты","cap.more":"Подробнее","cap.less":"Свернуть","tl.aria":"Вехи студии","tl.2004":"Основание студии fg architects (ТОО «Fort Groupe»)","tl.2015":"Владимир Рой становится соучредителем студии","tl.2017a":"Победители конкурса IDEA","tl.2017b":"Внедрение BIM: проектирование в единой цифровой модели Revit","tl.2018":"Дипломы Союза архитекторов","tl.2024":"20 лет студии","tl.2026":"200+ реализованных проектов","aw.idea":"Победители конкурса IDEA","aw.union":"Дипломы Союза архитекторов","bim.line":"Проектируем в BIM (Revit) с 2017 года: единая цифровая модель от эскиза до рабочей документации","nav.short":"Далее →","zoom.fit":"Весь лист","zoom.in":"Крупно","tl.play":"Пройти по вехам"},"kk":{"svc.tab":"Қызметтер","svc.header":"FG ARCHITECTS — ҚЫЗМЕТТЕР ТІЗІМДЕМЕСІ","svc.sheet":"ПАРАҚ: КАЛЬКА 04-А","svc.title":"Біз не жобалаймыз","svc.1":"Тұрғын сәулет: жеке үйлер, соның ішінде беткейде","svc.2":"Қоғамдық сәулет: кеңселер, қонақүйлер мен курорттар","svc.3":"Қоғамдық моншалар, тир-парк","svc.4":"Барлық түрдегі интерьерлер: тұрғын және қоғамдық","svc.5":"Нысандағы авторлық қадағалау","svc.stages.k":"Кезеңдер","svc.stages":"эскиздік жоба → жұмыс жобасы → авторлық қадағалау","svc.cta":"Жобаны талқылау","wa.msg0":"Сәлеметсіз бе! Жобаны талқылағым келеді.","wa.msg":"Сәлеметсіз бе! Жобаны талқылағым келеді. Сайтыңыздан көріп отырмын:","rl.show":"Кальканы алу","rl.hide":"Кальканы қайтару","rl.photo":"Фото · жүзеге асырылды","rl.render":"Визуализация","meta.title":"fg architects — Алматыдағы сәулет бюросы | сәулет және интерьерлер","meta.description":"fg architects («Fort Groupe» ЖШС) — 2004 жылдан бері Алматыдағы сәулет бюросы: 200-ден астам іске асырылған жоба, қазақстандық және халықаралық марапаттар. Тұрғын және қоғамдық сәулет — жеке үйлер, кеңселер, қонақүйлер мен курорттар, қоғамдық моншалар, тир-парк — және барлық түрдегі интерьерлер: эскизден жұмыс жобасы мен авторлық қадағалауға дейін.","og.title":"fg architects — Алматыдағы сәулет бюросы","og.description":"2004 жылдан бері: тұрғын және қоғамдық сәулет — жеке үйлер, кеңселер, қонақүйлер мен курорттар, қоғамдық моншалар, тир-парк — және барлық түрдегі интерьерлер. Алматы, Серкебаев даңғылы, 107/1, 13-кеңсе.","tagline":"Сәулет бюросы · Алматы · 2004 жылдан","logo.aria":"fg architects — бірінші параққа","tabs.aria":"Бөлімдер","tab.arch":"Сәулет","tab.int":"Интерьер","tab.founders":"Құрылтайшылар","theme.paper":"Ватман","theme.bp":"Blueprint","theme.aria":"Жарық: терезелері жарықтандырылған көк сызба","sound.label":"Дыбыс","sound.aria":"Қарындаш дыбысы: қосу немесе өшіру","lang.aria":"Сайт тілі","hint.sheets":"парақ","hint.bp":"жарық","hint.layer":"қабат","hint.sound":"дыбыс","layer.label":"Қабат:","layer.lines":"Сызық","layer.shade":"Тон","layer.aria":"Қабатты ауыстыру: сызықтар немесе тондық бейнелеу","loader":"ПАРАҚ БЕКІТІЛУДЕ…","loader.error":"ПАРАҚ ЖҮКТЕЛМЕДІ","nav.prev":"Алдыңғы парақ","nav.next":"[келесі парақ] →","tb.brandSmall":"FORT GROUPE · АЛМАТЫ","tb.stage":"Кезең","tb.scale":"Масштаб","tb.location":"Орны","tb.object":"Нысан","tb.sheet":"Парақ","tb.contacts":"Байланыс","canvas.prefix":"Эскиз","tr.header":"FG ARCHITECTS — БЮРО БАСШЫЛЫҒЫ","tr.sheet":"ПАРАҚ: КАЛЬКА 01-А","f1.name":"Владимир Рой","f1.role":"ТЕҢ ҚҰРЫЛТАЙШЫ / ЖОБАЛАРДЫҢ БАС СӘУЛЕТШІСІ","f1.since":"1999 жылдан бері кәсіпте","f2.name":"Оксана Погодаева","f2.role":"ҚҰРЫЛТАЙШЫ / БАСҚАРУШЫ СЕРІКТЕС","f2.since":"1995 жылдан бері кәсіпте","quote":"«Сәулет адамнан басталып, адамның айналасында тұрғызылады. Адам — бәрінің өлшемі».","tr.foot":"Студия 2004 жылы құрылған · Алматы, Серкебаев даңғылы, 107/1, 13-кеңсе","founders.meta":"Калька 01-А","founders.title":"Бюро басшылығы","founders.desc":"Студия 2004 жылы құрылған. Сәулет, интерьерлер және тұжырымдамалар: парақтағы алғашқы сызықтан нысандағы авторлық қадағалауға дейін.","founders.stage":"—","founders.location":"Алматы","founders.object":"Бюро басшылығы","noscript.h":"fg architects — Алматыдағы сәулет бюросы","noscript.p1":"«Fort Groupe» ЖШС, 2004 жылдан бері. Тұрғын және қоғамдық сәулет — жеке үйлер, кеңселер, қонақүйлер мен курорттар, қоғамдық моншалар, тир-парк — және барлық түрдегі интерьерлер: эскиз, жұмыс жобасы, авторлық қадағалау.","noscript.p2":"Басшылық: Оксана Погодаева — құрылтайшы, басқарушы серіктес (1995 жылдан бері кәсіпте); Владимир Рой — тең құрылтайшы, жобалардың бас сәулетшісі (1999 жылдан бері кәсіпте).","noscript.p3":"Эскиздерді көру үшін JavaScript қосыңыз.","scale.persp":"масштабсыз · перспектива","scale.none":"масштабсыз","s.fg164.title":"Agua Dulce — тау беткейіндегі үй","s.fg164.loc":"Алматы, Медеу ауданы","s.fg164.stage":"ЭЖ · ЖЖ","s.fg164a.view":"Кіреберіс жолдан көрініс","s.fg164a.desc":"Күрделі таулы жер бедеріндегі жеке тұрғын үй: екі қабат пен цоколь, қонақтарға арналған қосалқы үй, беткей жағындағы террасалар. Жобада жоғары сейсмикалық белсенділік, тірек қабырғалары және нөсер суларын бұру ескерілген.","s.fg164b.view":"Терраса және бақшаға түсетін баспалдақ","s.fg164b.desc":"Жабық терраса қонақ бөлмесін, ас үй мен тамақтану аймағын жалғастырады. Цоколь табиғи таспен, көлемдер ағашпен қапталған; баспалдақ учаскенің төменгі деңгейіне түседі.","s.fg200.title":"А класындағы кеңсе ғимараты","s.fg200.loc":"Қарасай ауданы, Абай ауылы","s.fg200.stage":"Эскиздік жоба","s.fg200a.view":"Бас қасбет","s.fg200a.desc":"А класындағы әкімшілік ғимарат: органикалық ойықтары бар перфорацияланған қабық, витражды бірінші қабат және қасбетті жарықтандыру жобасы.","s.fg200b.view":"Бұрыштық көрініс, бас кіреберіс","s.fg200b.desc":"Кіреберіс тобының тік көлемі орналасқан ғимарат бұрышы. Қабық кіреберіс үстінде толқындай көтеріліп, лоббидің витражын ашады.","s.fg200c.title":"Кеңсе ғимараты — атриум","s.fg200c.view":"Витраж жанындағы лаунж","s.fg200c.desc":"Витраж артындағы екі жарықты кеңістік: қабықтың перфорациясы жоғарыдан шашыраңқы жарық түсіреді, лаунж аймағы көгалдандыруға шығады.","s.fg131.title":"Шонжыдағы қонақүй — лобби-бар","s.fg131.loc":"Алматы облысы, Шонжы","s.fg131.stage":"ЖҚ · авторлық қадағалау","s.fg131.view":"Лобби перспективасы","s.fg131.desc":"Қала сыртындағы қонақүй: интерьерлер, жабдықтау және авторлық қадағалау. Рейкалы төбесі, сақина шамдары және тірі көгалдандыруы бар лобби.","s.cl.loc":"Алматы","s.cl.stage":"Дизайн-жоба","s.cla.title":"Классикалық интерьер — холл","s.cla.view":"Порталы бар қабырға жаймасы","s.cla.desc":"Холлдың симметриялы жаймасы: пилястрлар, филенкалар, әйнектелген қос жармалы есіктер және соғылма әшекейлі комодтар.","s.clb.title":"Классикалық интерьер — қонақ бөлмесі","s.clb.view":"Перспектива","s.clb.desc":"Сол стилистикадағы қонақ бөлмесі: қабырға панельдері, карниздер, төбе шамы және холлмен анфиладалық байланыс.","tb.studio":"Студия","addr":"Алматы, Серкебаев даңғылы, 107/1, 13-кеңсе","map.btn":"Картада","map.aria":"Студия кеңсесін картадан көрсету","map.header":"ЖАҒДАЯТТЫҚ СХЕМА — СТУДИЯ КЕҢСЕСІ","map.sheet":"ПАРАҚ: КАЛЬКА 02-А","map.lead":"fg architects кеңсесі","map.open":"Навигатордан ашу","close":"Жабу","scale.firm":"200+ іске асырылған жоба","awards.seal":"МАРАПАТТАР · 10+ · KZ · INT · ","awards.aria":"Студия марапаттары: тізімді ашу","awards.header":"FG ARCHITECTS — МАРАПАТТАР ТІЗІМІ","awards.sheet":"ПАРАҚ: КАЛЬКА 03-А","awards.count":"10+","awards.lead":"сәулет және дизайн бойынша қазақстандық және халықаралық конкурстардың марапаты","awards.text":"Студияның негізін қалаушылар — сәулет және интерьер дизайны бойынша қазақстандық және халықаралық конкурстардың жеңімпаздары. Студия 2004 жылдан бері 200-ден астам жобаны іске асырды.","lamp.label":"жарық","map.yandex":"Яндекс Карталар","cap.more":"Толығырақ","cap.less":"Жасыру","tl.aria":"Студия кезеңдері","tl.2004":"fg architects студиясының құрылуы («Fort Groupe» ЖШС)","tl.2015":"Владимир Рой студияның тең құрылтайшысы болады","tl.2017a":"IDEA конкурсының жеңімпаздары","tl.2017b":"BIM енгізу: Revit бірыңғай цифрлық моделінде жобалау","tl.2018":"Сәулетшілер одағының дипломдары","tl.2024":"Студияға 20 жыл","tl.2026":"200+ іске асырылған жоба","aw.idea":"IDEA конкурсының жеңімпаздары","aw.union":"Сәулетшілер одағының дипломдары","bim.line":"2017 жылдан бері BIM (Revit) жүйесінде жобалаймыз: эскизден жұмыс құжаттамасына дейін бірыңғай цифрлық модель","nav.short":"Әрі қарай →","zoom.fit":"Бүкіл парақ","zoom.in":"Ірі","tl.play":"Кезеңдерді көрсету"},"en":{"svc.tab":"Services","svc.header":"FG ARCHITECTS — SCHEDULE OF SERVICES","svc.sheet":"SHEET: TRACING 04-A","svc.title":"What we design","svc.1":"Residential architecture: private houses, including on slopes","svc.2":"Public architecture: offices, hotels and resorts","svc.3":"Public bathhouses, a shooting-range park","svc.4":"Interiors of every kind: residential and public","svc.5":"Design supervision on site","svc.stages.k":"Stages","svc.stages":"schematic design → construction documents → design supervision","svc.cta":"Discuss a project","wa.msg0":"Hello! I'd like to discuss a project.","wa.msg":"Hello! I'd like to discuss a project. I'm looking at this on your site:","rl.show":"Lift the tracing","rl.hide":"Put it back","rl.photo":"Photo · built","rl.render":"Visualization","meta.title":"fg architects — architecture firm in Almaty | architecture and interiors","meta.description":"fg architects (Fort Groupe LLP) is an architecture firm in Almaty founded in 2004, with 200+ completed projects and Kazakh and international awards. Residential and public architecture — private houses, offices, hotels and resorts, public bathhouses, a shooting-range park — and interiors of every kind: from concept sketch to construction documents and design supervision.","og.title":"fg architects — architecture firm in Almaty","og.description":"Since 2004: residential and public architecture — private houses, offices, hotels and resorts, public bathhouses, a shooting-range park — and interiors of every kind. Almaty, 107/1 Serkebayev Ave., office 13.","tagline":"Architecture firm · Almaty · since 2004","logo.aria":"fg architects — back to the first sheet","tabs.aria":"Sections","tab.arch":"Architecture","tab.int":"Interiors","tab.founders":"Founders","theme.paper":"Paper","theme.bp":"Blueprint","theme.aria":"Light: blueprint with lit windows","sound.label":"Sound","sound.aria":"Pencil sound: turn on or off","lang.aria":"Site language","hint.sheets":"sheets","hint.bp":"light","hint.layer":"layer","hint.sound":"sound","layer.label":"Layer:","layer.lines":"Lines","layer.shade":"Render","layer.aria":"Switch layer: line drawing or tonal rendering","loader":"PINNING SHEET…","loader.error":"SHEET FAILED TO LOAD","nav.prev":"Previous sheet","nav.next":"[next sheet] →","tb.brandSmall":"FORT GROUPE · ALMATY","tb.stage":"Phase","tb.scale":"Scale","tb.location":"Location","tb.object":"Project","tb.sheet":"Sheet","tb.contacts":"Contact","canvas.prefix":"Sketch","tr.header":"FG ARCHITECTS — STUDIO LEADERSHIP","tr.sheet":"SHEET: TRACING 01-A","f1.name":"Vladimir Roy","f1.role":"CO-FOUNDER / CHIEF PROJECT ARCHITECT","f1.since":"In practice since 1999","f2.name":"Oksana Pogodaeva","f2.role":"FOUNDER / MANAGING PARTNER","f2.since":"In practice since 1995","quote":"“Architecture begins with people and is built around them. The human being is the measure of all things.”","tr.foot":"Studio founded in 2004 · Almaty, 107/1 Serkebayev Ave., office 13","founders.meta":"Tracing 01-A","founders.title":"Studio leadership","founders.desc":"Founded in 2004. Architecture, interiors, and concepts: from the first line on the sheet to design supervision on site.","founders.stage":"—","founders.location":"Almaty","founders.object":"Studio leadership","noscript.h":"fg architects — architecture firm in Almaty","noscript.p1":"Fort Groupe LLP, since 2004. Residential and public architecture — private houses, offices, hotels and resorts, public bathhouses, a shooting-range park — and interiors of every kind: sketch design, construction documents, design supervision.","noscript.p2":"Leadership: Oksana Pogodaeva — founder, managing partner (in practice since 1995); Vladimir Roy — co-founder, chief project architect (in practice since 1999).","noscript.p3":"Enable JavaScript to view the sketches.","scale.persp":"NTS · perspective","scale.none":"NTS","s.fg164.title":"Agua Dulce — house on a mountain slope","s.fg164.loc":"Almaty, Medeu District","s.fg164.stage":"SD · CD","s.fg164a.view":"View from the driveway","s.fg164a.desc":"A private residence on challenging mountain terrain: two stories over a lower level, a guesthouse, and terraces on the slope side. The design accounts for high seismicity, retaining walls, and stormwater drainage.","s.fg164b.view":"Terrace and stairs to the garden","s.fg164b.desc":"The covered terrace extends the living room, kitchen, and dining room. The base is clad in natural stone and the volumes in wood; a stair leads down to the lower level of the site.","s.fg200.title":"Class A office building","s.fg200.loc":"Abai village, Karasai District","s.fg200.stage":"Schematic design","s.fg200a.view":"Main facade","s.fg200a.desc":"A Class A office building: a perforated skin with organic openings, a fully glazed first floor, and a facade lighting design.","s.fg200b.view":"Corner view, main entrance","s.fg200b.desc":"The building corner with the vertical volume of the entrance. The skin rises in a wave above the entrance, revealing the glazed lobby.","s.fg200c.title":"Office building — atrium","s.fg200c.view":"Lounge by the glazing","s.fg200c.desc":"A double-height space behind the glazing: the perforated skin admits soft, diffused light from above, and the lounge opens onto the planting.","s.fg131.title":"Hotel in Shonzhy — lobby bar","s.fg131.loc":"Almaty Region, Shonzhy (Chundzha)","s.fg131.stage":"CD · design supervision","s.fg131.view":"Lobby perspective","s.fg131.desc":"A countryside hotel: interiors, FF&E, and design supervision. A lobby with a slatted ceiling, ring pendants, and living greenery.","s.cl.loc":"Almaty","s.cl.stage":"Interior design","s.cla.title":"Classic interior — hall","s.cla.view":"Wall elevation with portal","s.cla.desc":"A symmetrical interior elevation of the hall: pilasters, raised panels, glazed double doors, and chests of drawers with wrought-iron details.","s.clb.title":"Classic interior — living room","s.clb.view":"Perspective","s.clb.desc":"The living room in the same style: wall paneling, cornices, a ceiling fixture, and an enfilade connection to the hall.","tb.studio":"Studio","addr":"107/1 Serkebayev Ave., office 13, Almaty","map.btn":"Map","map.aria":"Show the studio office on a map","map.header":"SITE PLAN — STUDIO OFFICE","map.sheet":"SHEET: TRACING 02-A","map.lead":"fg architects office","map.open":"Open in maps","close":"Close","scale.firm":"200+ completed projects","awards.seal":"AWARDS · 10+ · KZ · INT · ","awards.aria":"Studio awards: open the schedule","awards.header":"FG ARCHITECTS — AWARDS SCHEDULE","awards.sheet":"SHEET: TRACING 03-A","awards.count":"10+","awards.lead":"awards from Kazakh and international architecture and design competitions","awards.text":"The studio’s founders have won Kazakh and international competitions in architecture and interior design. Since 2004 the studio has completed more than 200 projects.","lamp.label":"light","map.yandex":"Yandex Maps","cap.more":"More","cap.less":"Less","tl.aria":"Studio milestones","tl.2004":"fg architects (Fort Groupe LLP) is founded","tl.2015":"Vladimir Roy becomes a co-founder","tl.2017a":"Winners of the IDEA competition","tl.2017b":"BIM adoption: design in a single Revit digital model","tl.2018":"Diplomas from the Union of Architects","tl.2024":"20 years of the studio","tl.2026":"200+ completed projects","aw.idea":"Winners of the IDEA competition","aw.union":"Diplomas from the Union of Architects","bim.line":"Designing in BIM (Revit) since 2017: one digital model from concept sketch to construction documents","nav.short":"Next →","zoom.fit":"Full sheet","zoom.in":"Close-up","tl.play":"Play milestones"}};
const LANGS=['ru','kk','en'];
let LANG='ru';
function t(k){return (I18N[LANG]&&I18N[LANG][k])||(I18N.ru&&I18N.ru[k])||k;}
const TAB_ORDER = ['main','founders'];

/* ============================================================
   СОСТОЯНИЕ
   ============================================================ */
const S = { tab:'main', idx:0, layer:0, blueprint:false, mode:0, light:0, reveal:1, wipe:0, draw:2, t0:performance.now() };
const $ = id => document.getElementById(id);
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ============================================================
   WebGL: тушь, синька, свет
   ============================================================ */
const canvas = $('gl');
let gl = canvas.getContext('webgl',{premultipliedAlpha:true,antialias:false,alpha:true});
let glLost=false;
const texCache = {};
let prog, U = {}, PROGS = null;
/* картинки: отдельные файлы WebP; при открытии с диска (file://) — JS-обёртки, т.к. WebGL не принимает file://-картинки */
const FILE_MODE=location.protocol==='file:';
const BASE=(()=>{try{return new URL(window.FGA_BASE||'./',location.href).href;}catch(e){return window.FGA_BASE||'';}})();
const srcCache={};
function assetSrc(key){
  if(srcCache[key])return srcCache[key];
  const p=BASE+ASSETS[key];
  srcCache[key]=!FILE_MODE?Promise.resolve(p):new Promise((res,rej)=>{
    window.__FGA=window.__FGA||{};if(__FGA[key])return res(__FGA[key]);
    const sc=document.createElement('script');sc.src=p.replace('assets/img/','assets/js/').replace(/\.\w+$/,'.js');
    sc.onload=()=>__FGA[key]?res(__FGA[key]):rej(new Error('asset'));sc.onerror=rej;document.head.appendChild(sc);});
  return srcCache[key];
}
function loadImg(src){return new Promise((res,rej)=>{const i=new Image();i.onload=()=>res(i);i.onerror=rej;i.src=src;});}
async function getTex(key){
  if(texCache[key]) return texCache[key];
  const p = (async()=>{
    const img = await loadImg(await assetSrc(key));
    if(!gl) return {img};
    const t = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D,t);
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,img);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
    return {img,t};
  })();
  texCache[key]=p; return p;
}
const VS=`attribute vec2 p;varying vec2 v;void main(){v=vec2(p.x*.5+.5,.5-p.y*.5);gl_Position=vec4(p,0.,1.);}`;
const FS=`precision mediump float;varying vec2 v;
uniform sampler2D uA,uB,uLA,uLB;uniform float uWipe,uReveal,uMode,uLight,uTime,uDpr;uniform vec2 uTx;
uniform float uDraw;uniform sampler2D uT;
uniform vec3 uInkV,uInkB,uSil,uWarm,uHot;
float h(float n){return fract(sin(n)*43758.5453);}
float ink5(sampler2D t,vec2 p){float c=texture2D(t,p).r;if(uTx.x<=0.)return c;
  c=max(c,max(texture2D(t,p+uTx).r,texture2D(t,p-uTx).r));
  return max(c,max(texture2D(t,p+vec2(uTx.x,-uTx.y)).r,texture2D(t,p+vec2(-uTx.x,uTx.y)).r));}
void main(){
  float edge=smoothstep(uWipe-.0015,uWipe+.0015,v.x); // 0 слева (слой B), 1 справа (слой A)
  float ia=ink5(uA,v), ib=ink5(uB,v);
  float ink=mix(ib,ia,edge);
  vec3 L=mix(texture2D(uLB,v).rgb,texture2D(uLA,v).rgb,edge);
  float d=L.g;
  float on=smoothstep(d*.9,d*.9+.07,uLight);
  // мерцание при включении
  float fl=h(floor(uTime*22.)+d*311.7);
  on*=mix(step(.35,fl),1.,smoothstep(d*.9+.05,d*.9+.16,uLight));
#ifdef LIVE
  float live=smoothstep(1.15,1.24,uLight),sd=h(d*71.3)*7.,cy=uTime*.21+sd,ph=fract(cy);
  float blink=step(.86,h(floor(cy)+d*13.))*smoothstep(.30,.40,ph)*(1.-smoothstep(.58,.70,ph));
  on*=mix(1.,(1.+.09*sin(uTime*(.55+h(d*97.3)*.8)+d*40.))*(1.-blink*.9),live);
#endif
  float tint=h(d*97.3);
  float glow=L.r*on*uMode;
  float halo=L.b*smoothstep(.05,1.2,uLight)*uMode;
  float rv=1.-smoothstep(uReveal-.012,uReveal,v.y);
  float gD=1.,fD=1.;
#ifdef DRAW
  {float T=texture2D(uT,v).r*1.2;
    gD=smoothstep(T,T+.03,uDraw);fD=smoothstep(T+.07,T+.2,uDraw);rv*=gD*.42+.58*fD;}
#endif
  vec3 inkCol=mix(uInkV,uInkB,uMode);
  inkCol=mix(inkCol,uSil,clamp(glow*1.35,0.,1.)*.92);
  inkCol=mix(mix(vec3(.50,.49,.47),vec3(.62,.70,.82),uMode),inkCol,fD);
  float ia2=clamp(mix(ink,pow(ink,1.35)*.9,uMode),0.,1.)*rv;
  vec3 warm=mix(uWarm,uHot,tint*.6);
  vec3 lc=warm*glow*1.05+uHot*halo*.42;
  float la=clamp(max(glow,halo*.5),0.,1.)*rv*fD;
  vec3 col=inkCol*ia2+lc*(1.-ia2);
  float a=ia2+la*(1.-ia2);
  gl_FragColor=vec4(col,a);
}`;
function initGL(){
  if(!gl) return false;
  const sh=(t,s)=>{const o=gl.createShader(t);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))console.warn(gl.getShaderInfoLog(o));return o;};
  const NAMES=['uA','uB','uLA','uLB','uWipe','uReveal','uMode','uLight','uTime','uDpr','uInkV','uInkB','uSil','uWarm','uHot','uTx','uDraw','uT'];
  /* три варианта шейдера: обычный, «рисование» и «живой свет» — каждый кадр считает только нужное */
  const mk=defs=>{const pr=gl.createProgram();gl.attachShader(pr,sh(gl.VERTEX_SHADER,VS));gl.attachShader(pr,sh(gl.FRAGMENT_SHADER,defs+FS));gl.bindAttribLocation(pr,0,'p');gl.linkProgram(pr);
    if(!gl.getProgramParameter(pr,gl.LINK_STATUS)){console.warn(gl.getProgramInfoLog(pr));return null;}
    gl.useProgram(pr);const u={};NAMES.forEach(n=>u[n]=gl.getUniformLocation(pr,n));
    gl.uniform1i(u.uA,0);gl.uniform1i(u.uB,1);gl.uniform1i(u.uLA,2);gl.uniform1i(u.uLB,3);gl.uniform1i(u.uT,4);
    gl.uniform3f(u.uInkV,.11,.105,.10);gl.uniform3f(u.uInkB,.86,.91,.97);gl.uniform3f(u.uSil,.10,.13,.22);gl.uniform3f(u.uWarm,1.0,.80,.48);gl.uniform3f(u.uHot,1.0,.62,.28);
    return {pr,u};};
  const base=mk('');if(!base)return false;
  PROGS={base,draw:mk('#define DRAW\n')||base,live:mk('#define LIVE\n')||base};
  prog=base.pr;U=base.u;gl.useProgram(prog);
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
  gl.enable(gl.BLEND);gl.blendFunc(gl.ONE,gl.ONE_MINUS_SRC_ALPHA);
  return true;
}
let hasGL = initGL();
let cur = null; // {A,B,LA,LB,aspect}
/* потеря контекста WebGL: показать маску-фолбэк, затем восстановить */
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();glLost=true;showFallback(curInk);});
canvas.addEventListener('webglcontextrestored',()=>{glLost=false;TMAP=null;for(const k in texCache)delete texCache[k];hasGL=initGL();hideFallback();showSheet(false);});
let curInk=null;
function showFallback(key){if(!key)return;const sk=$('sketch');
  const f=sk.querySelector('.fallback')||Object.assign(sk.appendChild(document.createElement('div')),{className:'fallback'});
  f.style.display='';canvas.style.visibility='hidden';assetSrc(key).then(u=>{f.style.webkitMaskImage=f.style.maskImage=`url(${u})`;});}
function hideFallback(){const f=$('sketch').querySelector('.fallback');if(f)f.style.display='none';canvas.style.visibility='';}

function draw(){
  if(!hasGL||glLost||!cur) return;
  {const v=PROGS[S.draw<1.5?'draw':(S.blueprint&&S.light>1.1&&!reduce?'live':'base')];if(v.pr!==prog){prog=v.pr;U=v.u;gl.useProgram(prog);}}
  gl.viewport(0,0,canvas.width,canvas.height);
  gl.clearColor(0,0,0,0);gl.clear(gl.COLOR_BUFFER_BIT);
  const bind=(u,tex)=>{gl.activeTexture(gl.TEXTURE0+u);gl.bindTexture(gl.TEXTURE_2D,tex.t);};
  bind(0,cur.A);bind(1,cur.B);bind(2,cur.LA);bind(3,cur.LB);
  gl.uniform1f(U.uWipe,S.wipe);gl.uniform1f(U.uReveal,S.reveal);gl.uniform1f(U.uMode,S.mode);
  {const iw=cur.A.img.width,ih=cur.A.img.height,r=iw/Math.max(1,canvas.width),o=r>1.15?Math.min(1.6,.6*(r-1)):0;gl.uniform2f(U.uTx,o/iw,o/ih);}
  gl.uniform1f(U.uDraw,S.draw);if(S.draw<1.5&&TMAP){gl.activeTexture(gl.TEXTURE4);gl.bindTexture(gl.TEXTURE_2D,TMAP);}
  gl.uniform1f(U.uLight,S.light);gl.uniform1f(U.uTime,((performance.now()-S.t0)/1000)%100);
  gl.drawArrays(gl.TRIANGLE_STRIP,0,4);
}

/* ============================================================
   АНИМАЦИИ (простые твины)
   ============================================================ */
const tweens = {};
const ease = t=>1-Math.pow(1-t,3);
let rafId=0, dirty=true;
function kick(){dirty=true;if(!rafId)rafId=requestAnimationFrame(loop);}
function tween(key,from,to,dur,onEnd,fn=ease){
  if(reduce) dur=1;
  tweens[key]={from,to,dur,start:performance.now(),onEnd,fn};
  kick();
}
function loop(now){
  rafId=0;
  for(const k in tweens){
    const tw=tweens[k];const p=Math.min(1,(now-tw.start)/tw.dur);
    S[k]=tw.from+(tw.to-tw.from)*tw.fn(p);
    if(p>=1){delete tweens[k];tw.onEnd&&tw.onEnd();}
  }
  // рейсшина следует за проявкой
  const tsq=$('tsq');
  if(tweens.reveal){tsq.style.opacity=1;tsq.classList.remove('v');tsq.style.top=(S.reveal*100)+'%';}
  else if(tweens.wipe && cur && cur.aligned){tsq.style.opacity=1;tsq.classList.add('v');tsq.style.left=(S.wipe*100)+'%';tsq.style.top='';}
  else tsq.style.opacity=0;
  if(cur&&cur.aligned){$('wipe').style.left=(S.wipe*100)+'%';}
  const animating=Object.keys(tweens).length>0;
  if(animating||dirty){draw();dirty=false;}
  const dmMoving=dmStep();
  if(animating||dmMoving) rafId=requestAnimationFrame(loop);
}

/* ============================================================
   РАЗМЕР ЛИСТА
   ============================================================ */
function fit(){
  if(!cur) return;
  const st=$('stage').getBoundingClientRect();
  const mob=innerWidth<860;
  const land=innerHeight<=500&&innerWidth>innerHeight;
  const port=mob&&!land&&innerHeight>innerWidth;
  const maxW=land?st.width*0.9:(port?st.width-32:mob?innerWidth-8:st.width*0.86), maxH=Math.max(60,Math.min(st.height-(land?12:mob?20:(innerHeight<=820?44:120)), innerHeight*0.78));
  let w=maxW,h=w/cur.aspect; if(h>maxH){h=maxH;w=h*cur.aspect;}
  const sk=$('sketch');let pan=0;
  const zoomable=port;
  $('zoomBtn').hidden=!zoomable;
  if(zoomable){ // крупный план: высота эскиза до 2× от «вписанной», лишнее по ширине — плавная панорама
    const zh=Math.min(st.height-6,h*2);
    if(zh>h*1.15){const zw=zh*cur.aspect;if(zoomIn){w=zw;h=zh;pan=Math.max(0,(w-st.width)/2);}$('zoomBtn').hidden=false;}else $('zoomBtn').hidden=true;
  }
  sk.style.width=w+'px';sk.style.height=h+'px';sk.style.setProperty('--pan',pan+'px');sk.classList.toggle('zoomed',pan>0);
  $('zoomBtn').setAttribute('aria-pressed',zoomIn);$('zoomBtn').querySelector('span').textContent=t(zoomIn?'zoom.fit':'zoom.in');
  const dpr=Math.min(devicePixelRatio||1,2);
  canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);
  drawOverlay();kick();
}
let zoomIn=true;
function toggleZoom(){zoomIn=!zoomIn;haptic();fit();}
let fitRaf=0;new ResizeObserver(()=>{cancelAnimationFrame(fitRaf);fitRaf=requestAnimationFrame(fit);}).observe(document.getElementById('stage'));

/* ============================================================
   ОВЕРЛЕЙ: оси и рукописные выноски
   ============================================================ */
const NS='http://www.w3.org/2000/svg';
function el(t,a,p){const e=document.createElementNS(NS,t);for(const k in a)e.setAttribute(k,a[k]);p&&p.appendChild(e);return e;}
function drawOverlay(){
  const svg=$('ovl');svg.innerHTML='';
  if(!cur) return;
  const W=1600,H=Math.round(1600/cur.aspect);
  svg.setAttribute('viewBox',`0 0 ${W} ${H}`);svg.setAttribute('preserveAspectRatio','none');
  const sx=$('sketch').clientWidth/W; const k=1/Math.max(sx,.35); // постоянный экранный размер
  const ax=el('g',{class:'axis'},svg);
  const r=13*k, off=26*k;
  (LANG==='en'?['A','B','C','D']:['А','Б','В','Г']).forEach((s,i)=>{const x=W*i/3;
    el('line',{x1:x,y1:-off+r,x2:x,y2:-4*k},ax);el('circle',{cx:x,cy:-off,r},ax);
    const t=el('text',{x,y:-off,'font-size':12*k},ax);t.textContent=s;});
  if(innerWidth>=860)['1','2','3'].forEach((s,i)=>{const y=H*i/2;
    el('line',{x1:-off+r,y1:y,x2:-4*k,y2:y},ax);el('circle',{cx:-off,cy:y,r},ax);
    const t=el('text',{x:-off,y,'font-size':12*k},ax);t.textContent=s;});
  const sheet=curSheet(); if(!sheet||S.layer===1&&sheet.layers.length>1&&!sheet.aligned) return;
  (sheet.notes||[]).forEach((n,i)=>{
    const g=el('g',{class:'note','data-i':i},svg);
    const [ax_,ay]=n.a,[tx,ty]=n.t;
    const fs=((n.sz||36)/36)*(innerWidth<860?14:23)*k;
    if(n.s.startsWith('±')){
      el('path',{d:`M${ax_} ${ay} l14 -14 l14 14 M${ax_-30} ${ay} h${90}`},g);
      const t=el('text',{x:ax_+34,y:ay-10,'font-size':fs},g);t.textContent=n.s;return;
    }
    const mx=(ax_+tx)/2+(ty>ay?60:-60),my=(ay+ty)/2;
    const p=el('path',{d:`M${tx} ${ty+ (ty<ay?10:-30)} Q${mx} ${my} ${ax_} ${ay}`},g);
    // наконечник
    el('path',{d:`M${ax_} ${ay} m-7 -7 l7 7 l-9 2`},g);
    const t=el('text',{x:tx,y:ty,'font-size':fs},g);t.textContent=n.s;
    if(tx>W*0.6) t.setAttribute('text-anchor','start');
  });
}
function showNotes(){document.querySelectorAll('.note').forEach((g,i)=>{setTimeout(()=>g.classList.add('show'),i*220);
  const p=g.querySelector('path');if(!p||reduce)return;const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;
  p.getBoundingClientRect();p.style.transition='stroke-dashoffset .8s ease '+(i*.22)+'s';p.style.strokeDashoffset=0;});}

/* ============================================================
   ЛИСТЫ
   ============================================================ */
function list(){return SHEETS[S.tab]||SHEETS.main||[];}
function curSheet(){return list()[S.idx];}
let loadToken=0, firstShow=true;
/* траектория руки: спираль от главного объёма к краям листа; x — в долях высоты */
let PATH=new Float32Array(48);
function makePath(asp){const P=new Float32Array(48),R=.5*Math.hypot(asp,1)*.95,a0=Math.random()*6.28,sp=1.6+Math.random()*.4;
  for(let i=0;i<16;i++){const f=i/15,r=.03+R*Math.pow(f,.8),a=a0+f*6.283*sp+(Math.random()-.5)*.45;
    P[i*3]=Math.min(asp+.04,Math.max(-.04,asp*.5+Math.cos(a)*r));P[i*3+1]=Math.min(1.04,Math.max(-.04,.56+Math.sin(a)*r*.82));P[i*3+2]=f*.8;}
  return P;}
function penAt(t){t=Math.min(.8,Math.max(0,t));const i=Math.min(14,Math.floor(t/.8*15)),k=(t-PATH[i*3+2])/(PATH[i*3+5]-PATH[i*3+2]||1);
  return [PATH[i*3]+(PATH[i*3+3]-PATH[i*3])*k,PATH[i*3+1]+(PATH[i*3+4]-PATH[i*3+1])*k];}
/* карта «когда проявится пиксель»: расстояние до траектории + рваный край штриха; один раз на лист */
let TMAP=null;
function makeTmap(asp){if(!hasGL||glLost||!gl)return;const W=256,H=Math.max(48,Math.min(320,Math.round(W/asp))),a=new Uint8Array(W*H);
  const hs=n=>{const x=Math.sin(n)*43758.5453;return x-Math.floor(x);};
  const vn=(x,y)=>{const ix=Math.floor(x),iy=Math.floor(y);let fx=x-ix,fy=y-iy;fx=fx*fx*(3-2*fx);fy=fy*fy*(3-2*fy);const n=ix+iy*57;
    const a1=hs(n),b1=hs(n+1),c1=hs(n+57),d1=hs(n+58);return (a1+(b1-a1)*fx)+((c1+(d1-c1)*fx)-(a1+(b1-a1)*fx))*fy;};
  for(let y=0;y<H;y++){const vy=(y+.5)/H;for(let x=0;x<W;x++){const vx=(x+.5)/W,qx=vx*asp;let T=9;
    for(let i=0;i<15;i++){const ax=PATH[i*3],ay=PATH[i*3+1],az=PATH[i*3+2],bx=PATH[i*3+3]-ax,by=PATH[i*3+4]-ay,bz=PATH[i*3+5]-az;
      let k=((qx-ax)*bx+(vy-ay)*by)/Math.max(bx*bx+by*by,1e-5);k=k<0?0:k>1?1:k;const dx=qx-ax-bx*k,dy=vy-ay-by*k;
      const t=az+bz*k+Math.sqrt(dx*dx+dy*dy)*.38;if(t<T)T=t;}
    T+=(vn((vx+vy)*70,(vx-vy)*16)-.5)*.08+(vn(vx*7,vy*7)-.5)*.05;
    a[y*W+x]=Math.max(0,Math.min(255,Math.round(T/1.2*255)));}}
  if(!TMAP)TMAP=gl.createTexture();gl.activeTexture(gl.TEXTURE4);gl.bindTexture(gl.TEXTURE_2D,TMAP);
  const fl=gl.getParameter(gl.UNPACK_FLIP_Y_WEBGL),al=gl.getParameter(gl.UNPACK_ALIGNMENT),pm=gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,false);gl.pixelStorei(gl.UNPACK_ALIGNMENT,1);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,false);
  gl.texImage2D(gl.TEXTURE_2D,0,gl.LUMINANCE,W,H,0,gl.LUMINANCE,gl.UNSIGNED_BYTE,a);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,fl);gl.pixelStorei(gl.UNPACK_ALIGNMENT,al);gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,pm);}
function penOff(){const p=$('pen');p&&p.classList.remove('on');}
function penStep(){const p=$('pen');if(!p||!cur)return;const sk=$('sketch'),[x,y]=penAt(S.draw),n=performance.now()/1000;
  p.classList.toggle('on',S.draw<.84);
  p.style.transform=`translate(${(x/cur.aspect*sk.clientWidth).toFixed(1)}px,${(y*sk.clientHeight).toFixed(1)}px) rotate(${(Math.sin(n*9)*4+Math.sin(n*23)*1.5).toFixed(1)}deg)`;}
/* вспомогательные линии построения: горизонт и лучи перспективы */
function drawGuides(dur){const svg=$('ovl');if(!svg||!cur||reduce)return;const W=1600,H=Math.round(1600/cur.aspect),hz=H*.64;
  const g=el('g',{class:'guides'},svg);
  [[-W*.08,hz,W*1.08,hz],[-W*.3,hz,W*1.06,H*.16],[-W*.3,hz,W*1.06,H*1.02],[W*1.3,hz,-W*.06,H*.28],[W*1.3,hz,-W*.06,H*.96]].forEach(([a,b,c,d],i)=>{
    const l=el('line',{x1:a,y1:b,x2:c,y2:d},g);const len=Math.hypot(c-a,d-b);l.style.strokeDasharray=len;l.style.strokeDashoffset=len;
    l.getBoundingClientRect();l.style.transition=`stroke-dashoffset ${dur*.28}ms cubic-bezier(.4,0,.2,1) ${i*dur*.05}ms`;l.style.strokeDashoffset=0;});
  setTimeout(()=>g.classList.add('gone'),dur*.92);setTimeout(()=>g.remove(),dur+1600);}
const easeIO=t=>-(Math.cos(Math.PI*t)-1)/2;
/* ---------- снять кальку: под скетчем — фото или визуализация объекта ---------- */
const REAL={"Fg_sk-08": {"src": "assets/img/real-Fg_sk-08.webp", "w": 0.9851, "x": 0.0078, "y": -0.0324, "kind": "photo"}, "Fg117_sk-10": {"src": "assets/img/real-Fg117_sk-10.webp", "w": 1.0, "x": 0.0, "y": 0.0, "kind": "render"}, "Fg117_sk-12": {"src": "assets/img/real-Fg117_sk-12.webp", "w": 1.1922, "x": -0.1499, "y": 0.0471, "kind": "render"}, "Fg131_sk-06": {"src": "assets/img/real-Fg131_sk-06.webp", "w": 1.14, "x": -0.133, "y": -0.0753, "kind": "photo"}};
let RP=1,RL=null,rpAnim=0,rlHinted=false;
function rlApply(){const sk=$('sketch');sk.style.setProperty('--rp',RP.toFixed(4));const open=RL&&RP<.985;
  sk.classList.toggle('peeling',!!open);sk.classList.toggle('rl-wide',!!RL&&RP<.62);const b=$('peelBtn');
  if(b){const full=RP<.02;b.classList.toggle('back',full);b.classList.toggle('mid',!full&&RP<.8);b.setAttribute('aria-pressed',open?'true':'false');
    b.querySelector('.pl-t').textContent=t(full?'rl.hide':'rl.show');}
  const m=$('peelM');if(m){const half=RP<.5;m.setAttribute('aria-pressed',half?'true':'false');m.querySelector('span').textContent=t(half?'rl.hide':'rl.show');}}
function rlTo(to,dur){cancelAnimationFrame(rpAnim);const from=RP,t0=performance.now();dur=reduce?1:dur;
  const st=n=>{const k=Math.min(1,(n-t0)/dur);RP=from+(to-from)*easeIO(k);rlApply();if(k<1)rpAnim=requestAnimationFrame(st);};rpAnim=requestAnimationFrame(st);}
function rlSetup(){cancelAnimationFrame(rpAnim);RP=1;const r=$('reality'),b=$('peelBtn');if(!r)return;
  const sh=curSheet();RL=sh&&sh.layers&&REAL[sh.layers[0].ink]||null;
  const u=$('rlUnder');r.hidden=u.hidden=!RL;b.hidden=!RL;$('kEdge').hidden=!RL;$('peelM').hidden=!RL;
  if(RL){const src=BASE+RL.src;[r,u].forEach(c=>{const im=c.querySelector('.rl-img');if(im.getAttribute('src')!==src){im.src=src;c.querySelector('.rl-bg').style.backgroundImage=`url("${src}")`;}
    im.style.left=(RL.x*100)+'%';im.style.top=(RL.y*100)+'%';im.style.width=(RL.w*100)+'%';});
    r.querySelector('.rl-tag').textContent=t(RL.kind==='photo'?'rl.photo':'rl.render');}
  b.classList.remove('ready');rlApply();}
function rlReady(){const b=$('peelBtn');if(!RL||!b)return;b.classList.add('ready');
  if(!rlHinted&&!reduce){rlHinted=true;setTimeout(()=>{if(RP>.98&&RL&&!openK){rlTo(.88,650);setTimeout(()=>{if(RP>.85&&RP<.9)rlTo(1,650);},1250);}},350);}}
function rlToggle(){if(!RL)return;haptic();const opening=RP>.5;rustle(opening?.9:.7);track('reality',opening?'open':'close');rlTo(opening?0:1,opening?1100:800);try{resetAutoplay();}catch(e){}}
/* перетаскивание края кальки */
(()=>{let drag=null;
  const start=e=>{if(!RL)return;const sk=$('sketch').getBoundingClientRect();drag={x0:e.clientX,moved:false,r:sk};e.currentTarget.setPointerCapture(e.pointerId);cancelAnimationFrame(rpAnim);e.preventDefault();};
  const move=e=>{if(!drag)return;if(Math.abs(e.clientX-drag.x0)>4)drag.moved=true;if(!drag.moved)return;
    RP=Math.max(0,Math.min(1,(e.clientX-drag.r.left)/drag.r.width));rlApply();};
  const end=e=>{if(!drag)return;const d=drag;drag=null;
    if(!d.moved){rlToggle();return;}if(RP<.07)rlTo(0,250);else if(RP>.93)rlTo(1,250);track('reality','drag');};
  ['peelBtn','kEdge'].forEach(id=>{const el=$(id);if(!el)return;el.addEventListener('pointerdown',start);el.addEventListener('pointermove',move);
    el.addEventListener('pointerup',end);el.addEventListener('pointercancel',end);});
  $('peelBtn').addEventListener('keydown',e=>{if(!RL)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();e.stopPropagation();
    RP=Math.max(0,Math.min(1,RP+(e.key==='ArrowLeft'?-.1:.1)));rlApply();}});
  $('peelBtn').addEventListener('click',e=>{if(e.detail===0)rlToggle();});
  $('peelM').addEventListener('click',rlToggle);})();
/* шорох бумаги */
function rustle(dur){if(!soundOn||!actx||actx.state!=='running')return;const t0=actx.currentTime+.01;
  const src=actx.createBufferSource();src.buffer=noiseBuf;src.playbackRate.value=.6;
  const bp=actx.createBiquadFilter();bp.type='bandpass';bp.Q.value=.7;bp.frequency.setValueAtTime(1400,t0);bp.frequency.linearRampToValueAtTime(3400,t0+dur);
  const g=actx.createGain();g.gain.setValueAtTime(0,t0);g.gain.linearRampToValueAtTime(.09,t0+.08);
  for(let i=1;i<6;i++)g.gain.linearRampToValueAtTime(.03+Math.random()*.08,t0+dur*i/6);g.gain.linearRampToValueAtTime(0,t0+dur);
  src.connect(bp);bp.connect(g);g.connect(actx.destination);src.start(t0);src.stop(t0+dur+.05);}
function prefetchNext(){const go=()=>{const l=list();if(!l.length)return;[l[(S.idx+1)%l.length],l[(S.idx-1+l.length)%l.length]].forEach(sh=>sh&&sh.layers.forEach(ly=>{getTex(ly.ink).catch(()=>{});getTex(ly.light).catch(()=>{});}));};
  (window.requestIdleCallback||setTimeout)(()=>{go();setTimeout(loadPhotos,1500);},{timeout:1500});}
async function showSheet(animate=true){
  const sheet=curSheet(); if(!sheet) return;
  const token=++loadToken;
  const sk=$('sketch');
  if(animate){sk.classList.add('leaving');}
  const L=sheet.layers;
  const la=L[0], lb=(sheet.aligned&&L[1])?L[1]:L[0];
  const active = (!sheet.aligned && L.length>1 && S.layer===1) ? L[1] : la;
  let A,B,LA,LB;
  try{[A,B,LA,LB]=await Promise.all([getTex(sheet.aligned?la.ink:active.ink),getTex(sheet.aligned?lb.ink:active.ink),getTex(sheet.aligned?la.light:active.light),getTex(sheet.aligned?lb.light:active.light)]);}
  catch(err){if(token!==loadToken)return;sk.classList.remove('leaving');sk.style.visibility='hidden';updateChrome(sheet);
    const ld=$('loader');ld.textContent=t('loader.error');ld.classList.remove('done');delete texCache[(sheet.layers[0]||{}).ink];delete texCache[(sheet.layers[0]||{}).light];return;}
  if(token!==loadToken) return;
  $('loader').classList.add('done');$('loader').textContent=t('loader');sk.style.visibility='';
  await new Promise(r=>setTimeout(r,animate?220:0));
  if(token!==loadToken) return;
  cur={A,B,LA,LB,aspect:A.img.width/A.img.height,aligned:!!sheet.aligned};
  curInk=active.ink;
  if(!hasGL||glLost) showFallback(active.ink);
  S.wipe = sheet.aligned ? (S.layer?1:0) : 0;
  $('wipe').classList.toggle('on',!!sheet.aligned&&hasGL);
  updateChrome(sheet);
  fit();
  sk.classList.remove('leaving');
  const wasFirst=firstShow;firstShow=false;
  const rdur=reduce?1:(wasFirst?(store('fg-drawn')?1800:3000):1100);
  if(wasFirst)store('fg-drawn','1');
  rlSetup();
  S.reveal=1.02;PATH=makePath(cur.aspect);if(!reduce)makeTmap(cur.aspect);
  if(wasFirst&&hasGL&&!glLost)drawGuides(rdur);
  S.draw=0;tween('draw',0,1.25,rdur,()=>{S.draw=2;penOff();showNotes();prefetchNext();kick();rlReady();},easeIO);
  pencil(reduce?0:rdur/1000*.85);
  if(S.blueprint){S.light=0;clearTimeout(lightTimer);lightTimer=setTimeout(()=>{if(token===loadToken&&S.blueprint)tween('light',0,1.25,2600,null,t=>t);},650);}
}
let lightTimer=0;
function updateChrome(sheet){
  const n=list().length;
  $('project-index').innerHTML=`[ <b>${String(S.idx+1).padStart(2,'0')}</b> / ${String(n).padStart(2,'0')} ]`;
  $('cap-meta').textContent=[sheet.code!=='—'?sheet.code:null,sheet.years||null,t(sheet.view)].filter(Boolean).join(' · ');
  $('cap-title').textContent=t(sheet.title);
  $('cap-desc').textContent=t(sheet.desc);
  if($('caption').classList.contains('open'))toggleCap(false);
  canvas.setAttribute('aria-label',t('canvas.prefix')+': '+t(sheet.title)+', '+t(sheet.view).toLowerCase());
  typeTo('tb-stage',t(sheet.stage));typeTo('tb-location',t(sheet.location));
  typeTo('tb-object-name',(sheet.code!=='—'?sheet.code+' · ':'')+t(sheet.title).split(' — ')[0]);
  {const msg=S.tab==='founders'?t('wa.msg0'):t('wa.msg')+' «'+t(sheet.title)+'».';document.querySelectorAll('.wa-btn').forEach(w=>w.href='https://wa.me/77017176647?text='+encodeURIComponent(msg));}
  const s=$('tb-sheet');s.textContent=String(S.idx+1).padStart(2,'0');s.classList.remove('stamp');void s.offsetWidth;s.classList.add('stamp');
  const ct=$('concept-toggle-btn');
  const hasPair=sheet.layers.length>1;
  ct.classList.toggle('hidden',!hasPair);ct.inert=!hasPair;
  updateLayerLabels();
}
function layerIsLines(){const sh=curSheet();if(!sh)return true;return sh.aligned?S.layer===0:S.layer===1;}
function updateLayerLabels(){const l=layerIsLines();$('lyL').classList.toggle('on',l);$('lyS').classList.toggle('on',!l);}
/* машинописная перепечатка ячеек штампа */
const typeTimers={};
function typeTo(id,text){
  const e=$(id);clearInterval(typeTimers[id]);
  if(reduce){e.textContent=text;return;}
  const chars='░▒▓—/·01';let i=0;
  typeTimers[id]=setInterval(()=>{i++;
    e.textContent=text.slice(0,i)+(i<text.length?chars[(Math.random()*chars.length)|0]:'');
    if(i>=text.length)clearInterval(typeTimers[id]);},22);
}

/* ============================================================
   ПУБЛИЧНЫЕ ФУНКЦИИ (как в прототипе)
   ============================================================ */
function selectTab(tab){
  if(tab==='services'){if(openK==='services-overlay')closeKalka();else{openKalka('services-overlay');$('tab-services').classList.add('active');track('services','open');}return;}
  if(tab==='founders' && S.tab==='founders'){closeFounders();return;}
  if(tab==='founders'&&S.tab&&S.tab!=='founders'){prevTab=S.tab;prevIdx=S.idx;prevLayer=S.layer;}
  if(openK)closeKalka();
  if(tab===S.tab && tab!=='founders' && !$('tracing-overlay').classList.contains('active')) return;
  document.querySelectorAll('.tab-btn').forEach(b=>{const on=b.dataset.tab===tab;b.classList.toggle('active',on);b.setAttribute('aria-selected',on);b.tabIndex=on?0:-1;});
  $('stage').setAttribute('aria-labelledby','tab-'+tab);
  const tr=$('tracing-overlay');
  if(tab==='founders'){
    stopAutoplay();
    loadToken++;$('sketch').classList.remove('leaving');
    document.body.classList.add('kalka-open');S.tab='founders';tr.classList.add('active');$('wipe').classList.remove('on');tr.setAttribute('aria-hidden','false');tr.inert=false;
    $('sketch').classList.add('dim');$('pnav').style.visibility='hidden';
    $('concept-toggle-btn').classList.add('hidden');$('concept-toggle-btn').inert=true;
    loadPhotos();foundersChrome();
    return;
  }
  tr.classList.remove('active');tr.setAttribute('aria-hidden','true');tr.inert=true;document.body.classList.remove('kalka-open');
  $('sketch').classList.remove('dim');$('pnav').style.visibility='';
  const back=S.tab==='founders'&&tab===prevTab;
  S.tab=tab;S.idx=back?prevIdx:0;S.layer=back?prevLayer:0;showSheet();
  startAutoplay();
}
function foundersChrome(){
  $('tb-sheet').textContent = t('founders.meta');
  typeTo('tb-stage', t('founders.stage'));
  typeTo('tb-location', t('founders.location'));
  typeTo('tb-object-name', t('founders.object'));
  $('cap-meta').textContent = t('founders.meta');
  $('cap-title').textContent = t('founders.title');
  $('cap-desc').textContent = t('founders.desc');
}
function closeFounders(){
  const t2=prevTab&&prevTab!=='founders'?prevTab:'main';
  selectTab(t2);
  const b=$('tab-founders');if(b){b.classList.remove('active');b.setAttribute('aria-selected','false');}
}
function goHome(){if(S.tab!=='main'||S.idx!==0||$('tracing-overlay').classList.contains('active')){S.tab='main';S.idx=0;selectTab('main');}}
function nextProject(isAuto=false){
  if(S.tab==='founders')return;
  if(!isAuto)resetAutoplay();
  S.idx=(S.idx+1)%list().length;
  S.layer=0;
  showSheet();
}
function prevProject(){
  if(S.tab==='founders')return;
  resetAutoplay();
  S.idx=(S.idx-1+list().length)%list().length;
  S.layer=0;
  showSheet();
}
let openK=null,kalkaOpener=null;
function openKalka(id){
  stopAutoplay();
  if(openK&&openK!==id)closeKalka(true);
  kalkaOpener=document.activeElement;
  openK=id;
  const k=$(id);if(!k)return;
  document.body.classList.add('kalka-open');
  k.classList.add('active');k.setAttribute('aria-hidden','false');k.inert=false;
  $('sketch').classList.add('dim');
  const cb=k.querySelector('.kalka-close');if(cb)cb.focus();
}
function openMap(){openKalka('map-overlay');}
function closeKalka(silent){
  if(!openK)return;
  {const sb=$('tab-services');sb&&sb.classList.remove('active');}
  const k=$(openK);
  if(k){k.classList.remove('active');k.setAttribute('aria-hidden','true');k.inert=true;}
  openK=null;
  if(S.tab!=='founders'){
    document.body.classList.remove('kalka-open');
    $('sketch').classList.remove('dim');
  }else{
    const tr=$('tracing-overlay');tr.classList.add('active');tr.inert=false;tr.setAttribute('aria-hidden','false');
  }
  if(!silent&&kalkaOpener&&kalkaOpener.focus){kalkaOpener.focus({preventScroll:true});}
  kalkaOpener=null;
  resetAutoplay();
}
function renderAwards(){
  const tbl=$('awTable');if(!tbl)return;
  tbl.innerHTML='<tbody><tr><td><b>2017</b></td><td>'+t('aw.idea')+'</td></tr><tr><td><b>2018</b></td><td>'+t('aw.union')+'</td></tr></tbody>';
}
function lampClick(){
  if(!soundOn||!actx||actx.state!=='running')return;
  const t0=actx.currentTime;[0,.05].forEach((d,i)=>{const src=actx.createBufferSource();src.buffer=noiseBuf;const f=actx.createBiquadFilter();f.type='bandpass';f.frequency.value=i?2400:1600;f.Q.value=2;
    const g=actx.createGain();g.gain.setValueAtTime(.5,t0+d);g.gain.exponentialRampToValueAtTime(.001,t0+d+.035);src.connect(f);f.connect(g);g.connect(actx.destination);src.start(t0+d,Math.random(),.05);});
}
(function(){const c=$('themeBtn');let y0=null,moved=false;
  c.addEventListener('pointerdown',e=>{y0=e.clientY;moved=false;c.setPointerCapture(e.pointerId);});
  c.addEventListener('pointermove',e=>{if(y0==null)return;const dy=Math.max(0,Math.min(28,e.clientY-y0));if(dy>3)moved=true;
    c.querySelector('.cord').style.height=(44+dy)+'px';c.querySelector('.bead').style.top=(42+dy)+'px';c.querySelector('.lamp-lbl').style.top=(60+dy)+'px';});
  const end=e=>{if(y0==null)return;const dy=e.clientY-y0;y0=null;['.cord','.bead','.lamp-lbl'].forEach(q=>c.querySelector(q).style.removeProperty(q==='.cord'?'height':'top'));
    if(moved){if(e.pointerType==='mouse'){c.dataset.skip='1';setTimeout(()=>delete c.dataset.skip,400);}if(dy>12){haptic();pullLamp();}}};
  c.addEventListener('pointerup',end);c.addEventListener('pointercancel',()=>{y0=null;});
  c.addEventListener('click',()=>{if(c.dataset.skip){delete c.dataset.skip;return;}pullLamp();});
})();
function pullLamp(){const c=$('themeBtn');c.classList.remove('pull');void c.offsetWidth;c.classList.add('pull');setTimeout(()=>c.classList.remove('pull'),260);lampClick();toggleTheme();}
function toggleTheme(){
  S.blueprint=!S.blueprint;
  lightSound(S.blueprint);track('blueprint',S.blueprint?'on':'off');
  if(!reduce)document.body.classList.add('dusking');document.body.classList.toggle('blueprint',S.blueprint);
  $('themeBtn').setAttribute('aria-pressed',S.blueprint);
  document.querySelector('meta[name=theme-color]').content=S.blueprint?'#12233c':'#f6f5f0';
  clearTimeout(lightTimer);
  if(S.blueprint){
    dusk('dusk');S.light=0;const m0=reduce?0:320;
    setTimeout(()=>{if(S.blueprint)tween('mode',S.mode,1,1200,null,easeIO);},m0);
    lightTimer=setTimeout(()=>{if(S.blueprint)tween('light',0,1.25,2800,null,t=>t);},reduce?0:1250);
  }else{
    dusk('dawn');tween('light',S.light,0,800,null,t=>t);tween('mode',S.mode,0,900,null,easeIO);
  }
  try{resetAutoplay();}catch(e){}
}
/* сумерки/рассвет: цветовой «вечер» поверх листа, фон темнеет медленнее обычного */
let duskT=0;function dusk(k){if(reduce)return;const b=$('board'),B=document.body;clearTimeout(duskT);
  b.classList.remove('dusk','dawn');void b.offsetWidth;b.classList.add(k);B.classList.add('dusking');
  duskT=setTimeout(()=>{b.classList.remove('dusk','dawn');B.classList.remove('dusking');},1900);}
/* живой свет: редкая перерисовка, только когда синька включена и вкладка видна */
setInterval(()=>{if(S.blueprint&&!reduce&&hasGL&&!glLost&&S.light>1.15&&!tweens.light&&!document.hidden)kick();},83);
function toggleConceptLayer(){
  const sheet=curSheet();if(!sheet||sheet.layers.length<2)return;
  S.layer=S.layer?0:1;
  updateLayerLabels();
  if(sheet.aligned){tween('wipe',S.wipe,S.layer?1:0,1100,null,t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2);}
  else showSheet();
}

/* перетаскивание края кальки */
(function(){
  const h=$('wipe');let drag=false;
  const mv=e=>{if(!drag)return;const r=$('sketch').getBoundingClientRect();
    S.wipe=Math.min(1,Math.max(0,(e.clientX-r.left)/r.width));delete tweens.wipe;kick();
    const L=S.wipe>.5?1:0;if(L!==S.layer){S.layer=L;updateLayerLabels();}};
  h.addEventListener('pointerdown',e=>{drag=true;h.setPointerCapture(e.pointerId);});
  h.addEventListener('pointermove',mv);
  h.addEventListener('pointerup',()=>drag=false);
  h.addEventListener('pointercancel',()=>drag=false);
})();

/* клавиатура */
let kbdFocus=false;addEventListener('keydown',e=>{if(e.key==='Tab')kbdFocus=true;},true);addEventListener('pointerdown',()=>{kbdFocus=false;},true);
addEventListener('keydown',e=>{
  if(e.ctrlKey||e.metaKey||e.altKey||e.target.closest('input,textarea,select,[contenteditable]'))return;
  if(e.key==='Escape'&&openK){closeKalka();return;}
  if(e.key==='Tab'&&openK){const f=[...$(openK).querySelectorAll('a[href],button')];if(f.length){const i=f.indexOf(document.activeElement);
    if(e.shiftKey&&(i<=0)){f[f.length-1].focus();e.preventDefault();return;}if(!e.shiftKey&&(i===f.length-1||i<0)){f[0].focus();e.preventDefault();return;}}}
  if(openK&&(e.key==='ArrowRight'||e.key==='ArrowLeft'))return;
  const tb=e.target.closest&&e.target.closest('[role=tab]');
  if(tb&&kbdFocus&&(e.key==='ArrowRight'||e.key==='ArrowLeft')){const all=[...document.querySelectorAll('[role=tab]')];const n=all[(all.indexOf(tb)+(e.key==='ArrowRight'?1:all.length-1))%all.length];n.focus();n.click();e.preventDefault();return;}
  if(e.key==='Escape'&&S.tab==='founders'){closeFounders();return;}
  if(e.key==='ArrowRight')nextProject();
  else if(e.key==='ArrowLeft')prevProject();
  else if(e.key==='b'||e.key==='B'||e.key==='и'||e.key==='И')pullLamp();
  else if(e.key==='l'||e.key==='L'||e.key==='д'||e.key==='Д')toggleConceptLayer();
  else if(e.key==='s'||e.key==='S'||e.key==='ы'||e.key==='Ы')toggleSound();
});
/* свайпы на телефоне */
(function(){let x0=null;const st=$('stage');
  let y0=null;
  st.addEventListener('touchstart',e=>{if(e.target.closest('#wipe,#tracing-overlay,#kEdge,#peelBtn,#peelM')){x0=null;return;}x0=e.touches[0].clientX;y0=e.touches[0].clientY;},{passive:true});
  st.addEventListener('touchend',e=>{if(x0==null)return;const dx=e.changedTouches[0].clientX-x0,dy=e.changedTouches[0].clientY-y0;if(Math.abs(dx)>50&&Math.abs(dx)>Math.abs(dy)*1.5){haptic();(dx<0?nextProject:prevProject)();}x0=null;});
  st.addEventListener('touchcancel',()=>{x0=null;});})();

/* ============================================================
   ГОЛОВКА КУЛЬМАНА
   ============================================================ */
const DM={x:0,y:0,tx:0,ty:0,on:false};
(function(){
  const g=$('dmTicks');
  for(let a=0;a<360;a+=15){const r1=a%90===0?13:a%45===0?17:19,rad=a*Math.PI/180;
    el('line',{x1:Math.cos(rad)*r1,y1:Math.sin(rad)*r1,x2:Math.cos(rad)*22,y2:Math.sin(rad)*22},g);}
  const b=$('board');
  b.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=$('dm').getBoundingClientRect();DM.tx=e.clientX-r.left;DM.ty=e.clientY-r.top;
    if(!DM.on){DM.on=true;DM.x=DM.tx;DM.y=DM.ty;$('dm').classList.add('on');}
    if(!rafId)rafId=requestAnimationFrame(loop);});
  b.addEventListener('pointerleave',()=>{DM.on=false;$('dm').classList.remove('on');});
})();
/* живой лист: наклон за мышкой / гироскопом */
const TILT=(()=>{if(reduce)return null;const sk=$('sketch');let last=0;
  function set(rx,ry,gx,gy){if(document.body.classList.contains('kalka-open')||tweens.draw){rx=ry=0;}
    sk.style.setProperty('--rx',rx.toFixed(2)+'deg');sk.style.setProperty('--ry',ry.toFixed(2)+'deg');
    sk.style.setProperty('--shx',(-ry*1.1).toFixed(1)+'px');sk.style.setProperty('--shy',(1.5+rx*.9).toFixed(1)+'px');
    if(gx!=null){sk.style.setProperty('--gx',gx.toFixed(1)+'%');sk.style.setProperty('--gy',gy.toFixed(1)+'%');}}
  if(matchMedia('(pointer:fine)').matches){
    $('board').addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const n=performance.now();if(n-last<30)return;last=n;
      const r=sk.getBoundingClientRect(),nx=Math.max(-1,Math.min(1,(e.clientX-r.left-r.width/2)/(r.width*.75))),ny=Math.max(-1,Math.min(1,(e.clientY-r.top-r.height/2)/(r.height*.75)));
      set(-ny*2.4,nx*3,(e.clientX-r.left)/r.width*100,(e.clientY-r.top)/r.height*100);sk.classList.add('lit');});
    $('board').addEventListener('pointerleave',()=>{set(0,0);sk.classList.remove('lit');});
  }else if('DeviceOrientationEvent' in window){let b0=null,g0=null,raf=0,ev=null;
    const on=e=>{if(e.beta==null)return;ev=e;if(raf)return;raf=requestAnimationFrame(()=>{raf=0;const e=ev;
      if(b0==null){b0=e.beta;g0=e.gamma;}b0+=(e.beta-b0)*.03;g0+=(e.gamma-g0)*.03;
      const c=v=>Math.max(-3,Math.min(3,v));set(c(-(e.beta-b0)*.3),c((e.gamma-g0)*.3));});};
    const D=window.DeviceOrientationEvent;
    if(typeof D.requestPermission==='function')addEventListener('touchend',()=>{D.requestPermission().then(s=>{if(s==='granted')addEventListener('deviceorientation',on);}).catch(()=>{});},{once:true});
    else addEventListener('deviceorientation',on);}
  return {set};})();
function dmStep(){
  if(!DM.on) return false;
  DM.x+=(DM.tx-DM.x)*.22;DM.y+=(DM.ty-DM.y)*.22;
  $('dmH').style.transform=`translateY(${DM.y}px)`;$('dmV').style.transform=`translateX(${DM.x}px)`;
  $('dmHead').style.transform=`translate(${DM.x}px,${DM.y}px)`;
  $('dmX').style.transform=`translateX(${DM.x+6}px)`;$('dmY').style.transform=`translateY(${DM.y+6}px)`;
  $('dmX').textContent='X '+String(Math.max(0,Math.round(DM.x))).padStart(4,'0');
  $('dmY').textContent='Y '+String(Math.max(0,Math.round(DM.y))).padStart(4,'0');
  return Math.abs(DM.tx-DM.x)>.3||Math.abs(DM.ty-DM.y)>.3;
}

/* ============================================================
   МЕДАЛЬОНЫ ОСНОВАТЕЛЕЙ (штриховка + монограмма)
   ============================================================ */

/* ============================================================
   ЯЗЫК: словарь, ?lang=, localStorage, <html lang>
   ============================================================ */
function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v);}catch(e){return null;}}
function setLang(l,init){
  setTimeout(()=>{try{if(RL){$('reality').querySelector('.rl-tag').textContent=t(RL.kind==='photo'?'rl.photo':'rl.render');rlApply();}}catch(e){}},0);
  if(!LANGS.includes(l))l='ru';LANG=l;if(!init)track('lang',l);
  document.documentElement.lang=l;
  document.title=t('meta.title');
  $('metaDesc').content=t('meta.description');$('ogTitle').content=t('og.title');$('ogDesc').content=t('og.description');
  $('ogLocale').content={ru:'ru_KZ',kk:'kk_KZ',en:'en_US'}[l];
  document.querySelectorAll('[data-i18n]').forEach(e=>{e.textContent=t(e.dataset.i18n);});
  if($('caption').classList.contains('open'))$('capMore').textContent=t('cap.less');
  document.querySelectorAll('[data-i18n-title]').forEach(e=>{e.title=t(e.dataset.i18nTitle);});
  document.querySelectorAll('[data-i18n-alt]').forEach(e=>{e.alt=t(e.dataset.i18nAlt);});
  document.querySelectorAll('[data-i18n-aria]').forEach(e=>{e.setAttribute('aria-label',t(e.dataset.i18nAria));});
  document.querySelectorAll('.lang-switch button').forEach(b=>b.setAttribute('aria-pressed',b.dataset.lang===l));
  store('fg-lang',l);
  if(!FILE_MODE&&!(init&&l===window.FGA_LANG))try{const u=new URL((l==='ru'?'./':l+'/'),BASE);u.hash=location.hash;history.replaceState(null,'',u);}catch(e){}
  {const c=document.querySelector('link[rel=canonical]');if(c&&window.FGA_ORIGIN)c.href=window.FGA_ORIGIN+(l==='ru'?'/':'/'+l+'/');}
  if(!init){renderAwards();renderTimeline();}
  if(!init){if(S.tab==='founders')foundersChrome();else if(curSheet()&&cur)updateChrome(curSheet());drawOverlay();}
}
(function(){let q=null;try{q=(new URLSearchParams(location.search).get('lang')||'').toLowerCase()||null;}catch(e){}
  setLang(window.FGA_LANG||q||store('fg-lang')||'ru',true);})();

/* ============================================================
   ТАКТИЛЬНОСТЬ: vibrate (Android) / switch-хак (iOS 18+)
   ============================================================ */
const hp=$('hapticProxy');
function haptic(){
  try{
    if(navigator.vibrate){navigator.vibrate(8);return;}
    if(/iP(hone|ad|od)/.test(navigator.userAgent)&&hp)hp.click();
  }catch(e){}
}
document.addEventListener('click',e=>{if(e.target.closest('button,a,[role=tab]'))haptic();},true);
$('wipe').addEventListener('pointerdown',()=>haptic());
addEventListener('pointerdown',()=>{const d=tweens.draw;if(d&&performance.now()-d.start>250){d.start=performance.now()-d.dur;kick();}},{passive:true,capture:true});

/* ============================================================
   ЗВУК КАРАНДАША: синтез шума (WebAudio), без файлов
   ============================================================ */
let actx=null, noiseBuf=null, soundOn=store('fg-sound')!=='off';
function audio(){
  if(!actx){const C=window.AudioContext||window.webkitAudioContext;if(!C)return null;actx=new C();
    const n=actx.sampleRate*2;noiseBuf=actx.createBuffer(1,n,actx.sampleRate);const d=noiseBuf.getChannelData(0);
    let b=0;for(let i=0;i<n;i++){const w=Math.random()*2-1;b=.6*b+.4*w;d[i]=w*.7+b*.3;}}
  if(actx.state==='suspended')actx.resume();
  return actx;
}
['pointerdown','keydown','touchstart'].forEach(ev=>addEventListener(ev,()=>{if(soundOn)audio();},{once:true,passive:true}));
function pencil(dur){
  if(!soundOn||!dur||!actx||actx.state!=='running')return;
  const t0=actx.currentTime+.02, end=t0+dur;
  const out=actx.createGain();out.gain.value=.16;out.connect(actx.destination);
  let t=t0;
  while(t<end-.05){
    const len=.07+Math.random()*.19, gap=.015+Math.random()*.06;
    const src=actx.createBufferSource();src.buffer=noiseBuf;src.playbackRate.value=.85+Math.random()*.3;
    const bp=actx.createBiquadFilter();bp.type='bandpass';bp.Q.value=.9;
    bp.frequency.setValueAtTime(2600+Math.random()*1600,t);bp.frequency.linearRampToValueAtTime(2200+Math.random()*2200,t+len);
    const hpF=actx.createBiquadFilter();hpF.type='highpass';hpF.frequency.value=900;
    const g=actx.createGain();const pk=.35+Math.random()*.65;
    g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(pk,t+.012);
    g.gain.setValueAtTime(pk*(.7+Math.random()*.3),t+len*.7);g.gain.linearRampToValueAtTime(0,t+len);
    src.connect(bp);bp.connect(hpF);hpF.connect(g);g.connect(out);
    src.start(t,Math.random()*1.5,len+.02);
    t+=len+gap;
  }
  setTimeout(()=>out.disconnect(),(dur+.5)*1000);
}
function updateSoundBtn(){$('soundBtn').setAttribute('aria-pressed',soundOn);}
function toggleSound(){soundOn=!soundOn;store('fg-sound',soundOn?'on':'off');updateSoundBtn();if(soundOn){audio();pencil(.5);}}
updateSoundBtn();

function loadPhotos(){document.querySelectorAll('img[data-asset]').forEach(i=>{if(!i.src)i.src=BASE+ASSETS[i.dataset.asset];});}

setTimeout(()=>{const h=document.querySelector('.kbd-hint');h&&h.classList.add('fade');},8000);
if(!store('fg-nudged')){setTimeout(()=>{if(!S.blueprint){$('themeBtn').classList.add('nudge');store('fg-nudged','1');}},3500);}
/* ============================================================
   ТАЙМЛАЙН: вехи студии 2004–2026
   ============================================================ */
const MILESTONES=[
  {y:2004,k:'tl.2004'},{y:2015,k:'tl.2015'},{y:2017,k:'tl.2017a',k2:'tl.2017b',bim:true},
  {y:2018,k:'tl.2018'},{y:2024,k:'tl.2024'},{y:2026,k:'tl.2026'}];
const TL0=2004,TL1=2026;
function renderTimeline(){
  const r=$('tlRule');if(!r)return;try{tlTour.stop(true);}catch(e){}r.innerHTML='';
  const pg=document.createElement('i');pg.className='tl-prog';r.appendChild(pg);const hd=document.createElement('i');hd.className='tl-head';r.appendChild(hd);
  const pos=y=>((y-TL0)/(TL1-TL0)*100)+'%';
  for(let y=TL0;y<=TL1;y++){const tk=document.createElement('i');tk.className='tl-tick'+(y%5===0||y===TL0||y===TL1?' major':'');tk.style.left=pos(y);r.appendChild(tk);
    if(y%5===0&&!MILESTONES.some(m=>Math.abs(m.y-y)<2)){const l=document.createElement('span');l.className='tl-yr';l.style.left=pos(y);l.textContent=y;r.appendChild(l);}}
  const mob=innerWidth<861;
  let items=MILESTONES.map(m=>({y:String(m.y),at:m.y,lines:[m.k].concat(m.k2?[m.k2]:[]),bim:m.bim,dbl:!!m.k2}));
  if(mob){const a=items.findIndex(x=>x.at===2017),b=items.findIndex(x=>x.at===2018);
    if(a>=0&&b>=0){items[a]={y:'2017–18',at:2017.5,lines:items[a].lines.concat(items[b].lines),bim:true,dbl:true};items.splice(b,1);}}
  items.forEach(m=>{const d=document.createElement('button');d.className='tl-dot'+(m.dbl?' double':'');d.style.left=pos(m.at);
    d.setAttribute('aria-label',m.y+': '+m.lines.map(t).join(' · '));
    const yy=document.createElement('span');yy.className='tl-y';yy.textContent=m.y;d.appendChild(yy);
    const show=()=>{const p=$('tlPop');p.innerHTML='';const b=document.createElement('b');b.textContent=m.y;p.appendChild(b);
      m.lines.forEach((k,i)=>{if(i)p.appendChild(document.createElement('br'));p.appendChild(document.createTextNode(t(k)));});
      if(m.bim){const bb=document.createElement('span');bb.className='bim';bb.textContent='BIM · Revit';p.appendChild(document.createElement('br'));p.appendChild(bb);}
      const tl=$('timeline').getBoundingClientRect(),dr=d.getBoundingClientRect();let x=dr.left+dr.width/2-tl.left;
      p.classList.add('on');const w=p.offsetWidth;x=Math.max(w/2,Math.min(tl.width-w/2,x));p.style.left=x+'px';
      document.querySelectorAll('.tl-dot.on').forEach(o=>o.classList.remove('on'));d.classList.add('on');track('milestone',m.y);};
    const hide=()=>{$('tlPop').classList.remove('on');d.classList.remove('on');};
    d._show=show;d._hide=hide;d._at=m.at;
    d.addEventListener('pointerdown',()=>tlTour.stop());
    d.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse'){tlTour.stop();show();}});d.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hide();});
    d.addEventListener('focus',()=>{if(kbdFocus)show();});d.addEventListener('blur',hide);
    d.addEventListener('click',e=>{e.stopPropagation();if(e.pointerType==='mouse'||e.detail===0&&kbdFocus){show();return;}d.classList.contains('on')?hide():show();});
    r.appendChild(d);});
}
document.addEventListener('click',()=>{const p=$('tlPop');if(p&&p.classList.contains('on')){p.classList.remove('on');document.querySelectorAll('.tl-dot.on').forEach(o=>o.classList.remove('on'));}});
renderTimeline();renderAwards();
addEventListener('resize',()=>{clearTimeout(window.__tlr);window.__tlr=setTimeout(renderTimeline,200);});
$('timeline').addEventListener('pointerenter',()=>$('dm').classList.add('off'));$('timeline').addEventListener('pointerleave',()=>$('dm').classList.remove('off'));
/* проход по вехам: бегунок едет от 2004 к 2026, на каждой вехе — подпись */
const tlTour=(()=>{let tok=0,on=false;
  const wait=ms=>new Promise(r=>setTimeout(r,ms));
  const el=()=>({tl:$('timeline'),r:$('tlRule'),pg:document.querySelector('.tl-prog'),hd:document.querySelector('.tl-head')});
  const setPos=(e,y,ms)=>{const p=((y-TL0)/(TL1-TL0)*100)+'%';
    e.pg.style.transition=`width ${ms}ms linear,opacity .8s`;e.hd.style.transition=`left ${ms}ms linear,opacity .3s`;e.pg.style.width=p;e.hd.style.left=p;};
  async function play(){
    const e=el();if(!e.tl||!e.tl.offsetParent||!e.pg)return;
    const my=++tok;on=true;e.tl.classList.add('touring');
    const ds=[...e.r.querySelectorAll('.tl-dot')];ds.forEach(d=>d.classList.remove('past','on'));$('tlPop').classList.remove('on');
    e.pg.style.opacity='1';setPos(e,TL0,0);void e.pg.offsetWidth;
    let y=TL0;const fast=reduce;
    for(const d of ds){
      const ms=fast?0:Math.max(350,(d._at-y)*110);ds.forEach(o=>o.classList.contains('on')&&o._hide());setPos(e,d._at,ms);y=d._at;
      await wait(ms+40);if(my!==tok)return;
      d.classList.add('past');d._show();
      await wait(fast?2600:2100);if(my!==tok)return;
    }
    await wait(600);if(my!==tok)return;
    stop(false,true);
  }
  function stop(silent,done){if(!on&&!done)return;tok++;on=false;const e=el();if(!e.tl)return;
    e.tl.classList.remove('touring');e.r.querySelectorAll('.tl-dot').forEach(d=>d.classList.remove('past'));
    if(e.pg)e.pg.style.opacity='0';
    if(done||!silent){$('tlPop').classList.remove('on');e.r.querySelectorAll('.tl-dot.on').forEach(d=>d.classList.remove('on'));}}
  return {play,stop,toggle(){if(on){stop();}else{haptic();track('tl_tour','play');play();}},get on(){return on;}};})();
/* автозапуск один раз за визит; любое действие пользователя его останавливает */
setTimeout(()=>{if(!openK&&S.tab!=='founders'&&RP>.98)tlTour.play();},5600);
['keydown','wheel'].forEach(ev=>addEventListener(ev,()=>tlTour.on&&tlTour.stop(),{passive:true}));
addEventListener('pointerdown',e=>{if(tlTour.on&&!e.target.closest('#tlPlay'))tlTour.stop();},{passive:true});

/* ============================================================
   ЗВУК ВКЛЮЧЕНИЯ СВЕТА: гул лампы + тики мерцания
   ============================================================ */
function lightSound(on){
  if(!soundOn||!actx||actx.state!=='running')return;
  const t0=actx.currentTime+(on?.5:0);
  if(on){
    const g=actx.createGain();g.gain.setValueAtTime(0,t0+.45);g.gain.linearRampToValueAtTime(.05,t0+1.1);g.gain.linearRampToValueAtTime(.03,t0+2.6);g.gain.linearRampToValueAtTime(0,t0+3.4);
    const lp=actx.createBiquadFilter();lp.type='lowpass';lp.frequency.value=900;g.connect(lp);lp.connect(actx.destination);
    [100,200,300].forEach((f,i)=>{const o=actx.createOscillator();o.type=i?'sine':'triangle';o.frequency.value=f;const og=actx.createGain();og.gain.value=[1,.45,.2][i];o.connect(og);og.connect(g);o.start(t0+.45);o.stop(t0+3.5);});
    for(let i=0;i<14;i++){const tt=t0+.6+Math.random()*2.2;const src=actx.createBufferSource();src.buffer=noiseBuf;
      const f=actx.createBiquadFilter();f.type='bandpass';f.frequency.value=3200+Math.random()*2500;f.Q.value=3;
      const tg=actx.createGain();tg.gain.setValueAtTime(.18*Math.random()+.06,tt);tg.gain.exponentialRampToValueAtTime(.001,tt+.02);
      src.connect(f);f.connect(tg);tg.connect(actx.destination);src.start(tt,Math.random(),.03);}
  }else{
    const o=actx.createOscillator();o.type='sine';o.frequency.setValueAtTime(220,t0);o.frequency.exponentialRampToValueAtTime(60,t0+.35);
    const g=actx.createGain();g.gain.setValueAtTime(.05,t0);g.gain.exponentialRampToValueAtTime(.001,t0+.4);o.connect(g);g.connect(actx.destination);o.start(t0);o.stop(t0+.45);
  }
}

/* ============================================================
   СТАТИСТИКА: Google Analytics 4 + Яндекс Метрика (ID в js/config.js)
   ============================================================ */
const CFG=window.FGA_CONFIG||{};
function track(name,val){try{if(CFG.ym&&window.ym)ym(CFG.ym,'reachGoal',name,{value:val});if(CFG.ga4&&window.gtag)gtag('event',name,{value:val});}catch(e){}}
(function(){
  if(FILE_MODE)return;
  if(CFG.ga4){
    window.dataLayer=window.dataLayer||[];
    window.gtag=function(){dataLayer.push(arguments);};
  }
  if(CFG.ym){
    window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments);};
    window.ym.l=1*new Date();
  }
  function loadAnalytics(){
    if(window.__analyticsLoaded)return;
    window.__analyticsLoaded=true;
    if(CFG.ga4){
      const sc=document.createElement('script');sc.async=true;sc.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(CFG.ga4);document.head.appendChild(sc);
      gtag('js',new Date());gtag('config',CFG.ga4,{anonymize_ip:true});
    }
    if(CFG.ym){
      const k=document.createElement('script'),a=document.getElementsByTagName('script')[0];k.async=true;k.src='https://mc.yandex.ru/metrika/tag.js';a.parentNode.insertBefore(k,a);
      ym(CFG.ym,'init',{clickmap:true,trackLinks:true,accurateTrackBounce:true,webvisor:false});
    }
  }
  if(window.requestIdleCallback){
    requestIdleCallback(loadAnalytics,{timeout:2500});
  }else{
    setTimeout(loadAnalytics,1500);
  }
  ['pointerdown','scroll','keydown','touchstart'].forEach(ev=>window.addEventListener(ev,loadAnalytics,{once:true,passive:true}));
})();

/* старт */
kick();
showSheet(false);
document.fonts && document.fonts.ready.then(()=>drawOverlay());


/* ============================================================
   АВТОМАТИЧЕСКАЯ ПРОКРУТКА СЛАЙДОВ (AUTOPLAY SLIDESHOW)
   Продолжительность: 7 секунд на слайд.
   Пауза при наведении мыши, таче, открытых кальки/карты/наградах,
   при работе таймлайн-тура и в фоновых вкладках.
   ============================================================ */
let autoTimer = null;
const SLIDE_INTERVAL = 7000;
let autoHovered = false;

function isOverlayActive(){
  return (openK !== null) ||
         $('tracing-overlay').classList.contains('active') ||
         $('map-overlay').classList.contains('active') ||
         $('awards-overlay').classList.contains('active') ||
         (window.tlTour && tlTour.on);
}

function startAutoplay(){
  stopAutoplay();
  if(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  autoTimer = setInterval(()=>{
    if(autoHovered || RP<.98 || document.hidden || S.tab === 'founders' || isOverlayActive()) return;
    nextProject(true);
  }, SLIDE_INTERVAL);
}

function stopAutoplay(){
  if(autoTimer){clearInterval(autoTimer);autoTimer = null;}
}

function resetAutoplay(){
  stopAutoplay();
  startAutoplay();
}

// Hook hover and touch pauses
['stage','caption','timeline'].forEach(id=>{
  const el = document.getElementById(id);
  if(el){
    el.addEventListener('pointerenter', e=>{ if(e.pointerType==='mouse') autoHovered = true; });
    el.addEventListener('pointerleave', e=>{ if(e.pointerType==='mouse') autoHovered = false; });
  }
});
const tb = document.querySelector('.title-block');
if(tb){
  tb.addEventListener('pointerenter', e=>{ if(e.pointerType==='mouse') autoHovered = true; });
  tb.addEventListener('pointerleave', e=>{ if(e.pointerType==='mouse') autoHovered = false; });
}
document.addEventListener('visibilitychange', ()=>{
  if(document.hidden) stopAutoplay(); else startAutoplay();
});

startAutoplay();
