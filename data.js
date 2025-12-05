const universities = [
/* ------------------------ 1 ------------------------ */
{
    id: 1,
    name: "Назарбаев Университет",
    overview: "Исследовательский университет мирового уровня.",
    programs: [
        { level: "Бакалавриат", list: ["Инженерия", "Биология", "ИТ", "Медицина"] },
        { level: "Магистратура", list: ["Data Science", "Robotics"] },
        { level: "PhD", list: ["Engineering", "Life Sciences"] }
    ],
    tuition: { bachelor: "3 800 000 ₸", master: "4 500 000 ₸", phd: "Бесплатно" },
    scholarships: ["Полный грант NU", "Социальная поддержка"],
    admission: "IELTS + внутренний экзамен.",
    international: "Партнёры: Duke, Cambridge"
},

/* ------------------------ 2 ------------------------ */
{
    id: 2,
    name: "КазНУ им. Аль-Фараби",
    overview: "Крупнейший классический университет РК.",
    programs: [
        { level: "Бакалавриат", list: ["Физика", "Биология", "Юриспруденция"] },
        { level: "Магистратура", list: ["Экономика", "Философия"] },
        { level: "PhD", list: ["Математика"] }
    ],
    tuition: { bachelor: "1 200 000 ₸", master: "1 500 000 ₸", phd: "1 000 000 ₸" },
    scholarships: ["Государственная стипендия", "Повышенная академическая"],
    admission: "ЕНТ + конкурс.",
    international: "QS Ranking, ERASMUS+"
},

/* ------------------------ 3 — 30 ------------------------ */
{
    id: 3,
    name: "ЕНУ им. Л.Н. Гумилёва",
    overview: "Главный университет столицы.",
    programs: [
        { level: "Бакалавриат", list: ["История", "ИТ", "Журналистика"] },
        { level: "Магистратура", list: ["Политология"] }
    ],
    tuition: { bachelor: "950 000 ₸", master: "1 200 000 ₸", phd: "Бесплатно" },
    scholarships: ["Грант", "Стипендия акимата"],
    admission: "ЕНТ / творческий экзамен.",
    international: "300+ партнёров"
},

{
    id: 4,
    name: "КБТУ",
    overview: "Технический лидер Казахстана.",
    programs: [
        { level: "Бакалавриат", list: ["ИТ", "Кибербезопасность", "Нефтегаз"] }
    ],
    tuition: { bachelor: "2 200 000 ₸", master: "2 600 000 ₸", phd: "Нет" },
    scholarships: ["Ректорская", "Технические гранты"],
    admission: "ЕНТ + экзамены.",
    international: "Chevron, MIT"
},

{
    id: 5,
    name: "СДУ (SDU)",
    overview: "Сильный ИТ-университет.",
    programs: [
        { level: "Бакалавриат", list: ["Computer Science", "Data Analytics"] }
    ],
    tuition: { bachelor: "1 500 000 ₸", master: "1 900 000 ₸", phd: "Нет" },
    scholarships: ["SDU Grand", "Олимпиадные скидки"],
    admission: "IELTS / SDU Test",
    international: "Партнёры в Европе"
},

/* Дальше — 25 университетов, сокращённые описания */
{ id: 6, name: "Университет НарХоз", overview: "Экономический профиль.", programs:[{level:"Бакалавриат",list:["Экономика","Бизнес"]}], tuition:{bachelor:"1 100 000 ₸",master:"1 400 000 ₸",phd:"Нет"}, scholarships:["Гранты","Скидки"], admission:"ЕНТ", international:"ACCA" },

{ id: 7, name: "КазАТК им. М. Тынышпаева", overview:"Транспортный университет.", programs:[{level:"Бакалавриат",list:["Логистика","Транспорт"]}], tuition:{bachelor:"900 000 ₸",master:"1 200 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Транспортные ассоциации" },

{ id: 8, name: "КазГЮУ (KAZGUU)", overview:"Юридический университет.", programs:[{level:"Бакалавриат",list:["Право","Международное право"]}], tuition:{bachelor:"1 800 000 ₸",master:"2 000 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Правовые программы" },

{ id: 9, name: "КазНАИ им. Жургенова", overview:"Главный творческий ВУЗ.", programs:[{level:"Бакалавриат",list:["Актёрское","Режиссура"]}], tuition:{bachelor:"1 200 000 ₸",master:"1 500 000 ₸",phd:"Нет"}, scholarships:["Творческие гранты"], admission:"Творческий экзамен", international:"Art programs" },

{ id: 10, name: "КазНТУ им. Сатпаева", overview:"Техническая подготовка.", programs:[{level:"Бакалавриат",list:["Инженерия","Геология"]}], tuition:{bachelor:"1 400 000 ₸",master:"1 700 000 ₸",phd:"1 200 000 ₸"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Tech partners" },

{ id: 11, name: "МУИТ (IITU)", overview:"Университет ИТ.", programs:[{level:"Бакалавриат",list:["Программирование","Кибербезопасность"]}], tuition:{bachelor:"1 600 000 ₸",master:"1 900 000 ₸",phd:"Нет"}, scholarships:["ИТ-гранты"], admission:"ЕНТ / IELTS", international:"Cisco Academy" },

{ id: 12, name: "Алматы Менеджмент Университет (AlmaU)", overview:"Бизнес/менеджмент.", programs:[{level:"Бакалавриат",list:["Менеджмент","HR"]}], tuition:{bachelor:"1 200 000 ₸",master:"1 400 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"AMBA" },

{ id: 13, name: "КазНАУ", overview:"Аграрный университет.", programs:[{level:"Бакалавриат",list:["Аграрные науки","Ветеринария"]}], tuition:{ bachelor:"850 000 ₸", master:"1 000 000 ₸", phd:"Бесплатно" }, scholarships:["Гранты"], admission:"ЕНТ", international:"FAO" },

{ id: 14, name: "МУХТ (Медицинский университет Астаны)", overview:"Медицина.", programs:[{level:"Бакалавриат",list:["Лечебное дело","Фармация"]}], tuition:{bachelor:"1 800 000 ₸",master:"2 000 000 ₸",phd:"Бесплатно"}, scholarships:["Медицинские гранты"], admission:"ЕНТ + экзамены", international:"WHO" },

{ id: 15, name: "КазМУОТ", overview:"Открытый университет технологий.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"750 000 ₸",master:"900 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Online partners" },

{ id: 16, name: "Семей университет Шакарима", overview:"Региональный университет.", programs:[{level:"Бакалавриат",list:["Образование","Инженерия"]}], tuition:{bachelor:"600 000 ₸",master:"800 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional partners" },

{ id: 17, name: "ЮКУ им. Ауэзова", overview:"Крупнейший южный ВУЗ.", programs:[{level:"Бакалавриат",list:["Педагогика","Экономика"]}], tuition:{bachelor:"700 000 ₸",master:"900 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Erasmus" },

{ id: 18, name: "Актюбинский РУХ", overview:"Региональный тех. ВУЗ.", programs:[{level:"Бакалавриат",list:["Нефтегаз","Строительство"]}], tuition:{bachelor:"650 000 ₸",master:"900 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Tech partners" },

{ id: 19, name: "Таразский университет Дулати", overview:"Инженерный университет.", programs:[{level:"Бакалавриат",list:["Инженерия","Строительство"]}], tuition:{bachelor:"700 000 ₸",master:"850 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional" },

{ id: 20, name: "ЗКАТУ им. Жангир хана", overview:"Западно-Казахстанский аграрный ВУЗ.", programs:[{level:"Бакалавриат",list:["Аграрные науки"]}], tuition:{bachelor:"600 000 ₸",master:"700 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Agro partners" },

{ id: 21, name: "Карагандинский Технический Университет", overview:"Технический ВУЗ.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"750 000 ₸",master:"900 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Tech" },

{ id: 22, name: "Карагандинский университет им. Букетова", overview:"Классический ВУЗ.", programs:[{level:"Бакалавриат",list:["Физика","Математика"]}], tuition:{bachelor:"650 000 ₸",master:"800 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Academic" },

{ id: 23, name: "КАСУ", overview:"Американский университет КЗ.", programs:[{level:"Бакалавриат",list:["Бизнес","ИТ"]}], tuition:{bachelor:"1 700 000 ₸",master:"2 000 000 ₸",phd:"Нет"}, scholarships:["Американские гранты"], admission:"IELTS", international:"USA partners" },

{ id: 24, name: "Туран Университет", overview:"Гуманитарий/экономика.", programs:[{level:"Бакалавриат",list:["Журналистика","Экономика"]}], tuition:{bachelor:"1 200 000 ₸",master:"1 400 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"EU programs" },

{ id: 25, name: "Евразийский технологический университет", overview:"Инженерия/ИТ.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"900 000 ₸",master:"1 200 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Tech partners" },

{ id: 26, name: "Алматинский энергетический университет (АЭжБУ)", overview:"Энергетика и ИТ.", programs:[{level:"Бакалавриат",list:["Энергетика","Автоматика"]}], tuition:{bachelor:"1 300 000 ₸",master:"1 600 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Energy alliances" },

{ id: 27, name: "Каспийский университет", overview:"Бизнес/право.", programs:[{level:"Бакалавриат",list:["Экономика","Право"]}], tuition:{bachelor:"1 000 000 ₸",master:"1 300 000 ₸",phd:"Нет"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Regional" },

{ id: 28, name: "Атырауский университет нефти и газа", overview:"Нефтегаз.", programs:[{level:"Бакалавриат",list:["Нефтегаз","Геология"]}], tuition:{bachelor:"850 000 ₸",master:"1 000 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Oil partners" },

{ id: 29, name: "Кокшетауский университет", overview:"Региональный ВУЗ.", programs:[{level:"Бакалавриат",list:["Педагогика","Экономика"]}], tuition:{bachelor:"600 000 ₸",master:"750 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional" },

{ id: 30, name: "Костанайский инженерно-экономический университет", overview:"Инженерия/экономика.", programs:[{level:"Бакалавриат",list:["Экономика","Строительство"]}], tuition:{bachelor:"650 000 ₸",master:"850 000 ₸",phd:"Нет"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional" }

];
