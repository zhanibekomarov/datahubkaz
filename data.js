const universities = [
    { id: 1, name: "Назарбаев Университет", overview: "Флагманский ВУЗ Казахстана.", programs:[{level:"Бакалавриат",list:["Инженерия","Биология","ИТ","Медицина"]}], tuition:{bachelor:"3 800 000 ₸", master:"4 500 000 ₸", phd:"Бесплатно"}, scholarships:["Полный грант"], admission:"IELTS + экзамен", international:"Cambridge, Duke", website:"https://nu.edu.kz" },

    { id: 2, name: "КазНУ им. Аль-Фараби", overview:"Старейший ВУЗ Казахстана.", programs:[{level:"Бакалавриат",list:["Физика","Биология","Право"]}], tuition:{bachelor:"1 200 000 ₸", master:"1 500 000 ₸", phd:"1 000 000 ₸"}, scholarships:["Гос.стипендия"], admission:"ЕНТ", international:"QS Ranking", website:"https://www.kaznu.kz" },

    { id: 3, name: "ЕНУ им. Л.Н. Гумилёва", overview:"Главный ВУЗ Астаны.", programs:[{level:"Бакалавриат",list:["История","ИТ","Журналистика"]}], tuition:{bachelor:"950 000 ₸", master:"1 200 000 ₸", phd:"Бесплатно"}, scholarships:["Гранты"], admission:"ЕНТ", international:"300+ партнёров", website:"https://enu.kz" },

    { id: 4, name: "КБТУ", overview:"Топ технический ВУЗ.", programs:[{level:"Бакалавриат",list:["ИТ","Кибербезопасность","Нефтегаз"]}], tuition:{bachelor:"2 200 000 ₸", master:"2 600 000 ₸", phd:"—"}, scholarships:["Тех. гранты"], admission:"ЕНТ", international:"MIT", website:"https://kbtu.kz" },

    { id: 5, name: "СДУ", overview:"Сильный ИТ-ВУЗ.", programs:[{level:"Бакалавриат",list:["Computer Science","Analytics"]}], tuition:{bachelor:"1 500 000 ₸", master:"1 900 000 ₸", phd:"—"}, scholarships:["SDU Grant"], admission:"IELTS", international:"Европа", website:"https://sdu.edu.kz" },

    { id: 6, name:"Университет Нархоз", overview:"Экономика/бизнес.", programs:[{level:"Бакалавриат",list:["Экономика","Бизнес"]}], tuition:{bachelor:"1 100 000 ₸", master:"1 400 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"ACCA", website:"https://narxoz.edu.kz" },

    { id: 7, name:"КазАТК", overview:"Транспорт/логистика.", programs:[{level:"Бакалавриат",list:["Логистика","Транспорт"]}], tuition:{bachelor:"900 000 ₸", master:"1 200 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Ассоциации", website:"https://kazatk.kz" },

    { id: 8, name:"MNU", overview:"Юридический ВУЗ.", programs:[{level:"Бакалавриат",list:["Право","Международное право"]}], tuition:{bachelor:"1 800 000 ₸", master:"2 000 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Правовые программы", website:"https://mnu.kz" },

    { id: 9, name:"КазНАИ", overview:"Творческий ВУЗ.", programs:[{level:"Бакалавриат",list:["Актёрское","Режиссура"]}], tuition:{bachelor:"1 200 000 ₸", master:"1 500 000 ₸", phd:"—"}, scholarships:["Творческие гранты"], admission:"Творческий", international:"Arts", website:"https://kaznai.kz" },

    { id: 10, name:"КазНТУ им. Сатпаева", overview:"Технический гигант.", programs:[{level:"Бакалавриат",list:["Инженерия","Геология"]}], tuition:{bachelor:"1 400 000 ₸", master:"1 700 000 ₸", phd:"1 200 000 ₸"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Tech", website:"https://satbayev.university" },

    { id: 11, name:"МУИТ (IITU)", overview:"ИТ-университет.", programs:[{level:"Бакалавриат",list:["Программирование","Кибербезопасность"]}], tuition:{bachelor:"1 600 000 ₸", master:"1 900 000 ₸", phd:"—"}, scholarships:["ИТ-гранты"], admission:"ЕНТ", international:"Cisco", website:"https://iitu.edu.kz" },

    { id: 12, name:"AlmaU", overview:"Менеджмент/бизнес.", programs:[{level:"Бакалавриат",list:["Менеджмент","HR"]}], tuition:{bachelor:"1 200 000 ₸", master:"1 400 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"AMBA", website:"https://almau.edu.kz" },

    { id: 13, name:"КазНАУ", overview:"Аграрный ВУЗ.", programs:[{level:"Бакалавриат",list:["Аграрные науки","Ветеринария"]}], tuition:{ bachelor:"850 000 ₸", master:"1 000 000 ₸", phd:"Бесплатно" }, scholarships:["Гранты"], admission:"ЕНТ", international:"FAO", website:"https://kaznau.kz" },

    { id: 14, name:"Медицинский Университет Астаны", overview:"Медицина.", programs:[{level:"Бакалавриат",list:["Лечебное дело","Фармация"]}], tuition:{bachelor:"1 800 000 ₸", master:"2 000 000 ₸", phd:"Бесплатно"}, scholarships:["Мед. гранты"], admission:"ЕНТ+экзамен", international:"WHO", website:"https://amu.edu.kz" },

    { id: 15, name:"КазМУОТ", overview:"Технологии/онлайн.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"750 000 ₸", master:"900 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Online", website:"https://kazmiot.edu.kz" },

    { id: 16, name:"Семей им. Шакарима", overview:"Региональный ВУЗ.", programs:[{level:"Бакалавриат",list:["Образование","Инженерия"]}], tuition:{bachelor:"600 000 ₸", master:"800 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional", website:"https://semeyuniver.edu.kz" },

    { id: 17, name:"ЮКУ им. Ауэзова", overview:"Южный ВУЗ.", programs:[{level:"Бакалавриат",list:["Педагогика","Экономика"]}], tuition:{bachelor:"700 000 ₸", master:"900 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Erasmus", website:"https://auezov.edu.kz" },

    { id: 18, name:"Актюбинский РУХ", overview:"Тех ВУЗ.", programs:[{level:"Бакалавриат",list:["Нефтегаз","Строительство"]}], tuition:{bachelor:"650 000 ₸", master:"900 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Partners", website:"https://atu.edu.kz" },

    { id: 19, name:"Дулати", overview:"Инженерия/строит.", programs:[{level:"Бакалавриат",list:["Инженерия","Строительство"]}], tuition:{bachelor:"700 000 ₸", master:"850 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional", website:"https://dulaty.edu.kz" },

    { id: 20, name:"ЗКАТУ им. Жангир хана", overview:"Аграрный.", programs:[{level:"Бакалавриат",list:["Аграрные науки"]}], tuition:{bachelor:"600 000 ₸", master:"700 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Agro", website:"https://wkau.kz" },

    { id: 21, name:"Карагандинский Технический Университет", overview:"Инженерия/ИТ.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"750 000 ₸", master:"900 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Tech", website:"https://kstu.kz" },

    { id: 22, name:"Карагандинский университет Букетова", overview:"Классика.", programs:[{level:"Бакалавриат",list:["Физика","Математика"]}], tuition:{bachelor:"650 000 ₸", master:"800 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Academic", website:"https://ksu.kz" },

    { id: 23, name:"КАСУ", overview:"Американский университет.", programs:[{level:"Бакалавриат",list:["Бизнес","ИТ"]}], tuition:{bachelor:"1 700 000 ₸", master:"2 000 000 ₸", phd:"—"}, scholarships:["US гранты"], admission:"IELTS", international:"USA", website:"https://casu.edu.kz" },

    { id: 24, name:"Туран", overview:"Экономика/медиа.", programs:[{level:"Бакалавриат",list:["Журналистика","Экономика"]}], tuition:{bachelor:"1 200 000 ₸", master:"1 400 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"EU", website:"https://turan.edu.kz" },

    { id: 25, name:"ЕТУ", overview:"Тех/ИТ.", programs:[{level:"Бакалавриат",list:["ИТ","Инженерия"]}], tuition:{bachelor:"900 000 ₸", master:"1 200 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Tech", website:"https://etu.edu.kz" },

    { id: 26, name:"АЭжБУ", overview:"Энергетика/автоматика.", programs:[{level:"Бакалавриат",list:["Энергетика","Автоматика"]}], tuition:{bachelor:"1 300 000 ₸", master:"1 600 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Energy", website:"https://aie.edu.kz" },

    { id: 27, name:"Каспийский университет", overview:"Право/бизнес.", programs:[{level:"Бакалавриат",list:["Экономика","Право"]}], tuition:{bachelor:"1 000 000 ₸", master:"1 300 000 ₸", phd:"—"}, scholarships:["Скидки"], admission:"ЕНТ", international:"Regional", website:"https://cu.edu.kz" },

    { id: 28, name:"Атырауский университет нефти и газа", overview:"Нефтегаз.", programs:[{level:"Бакалавриат",list:["Нефтегаз","Геология"]}], tuition:{bachelor:"850 000 ₸", master:"1 000 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Oil", website:"https://aogu.edu.kz" },

    { id: 29, name:"Кокшетауский университет", overview:"Региональный.", programs:[{level:"Бакалавриат",list:["Педагогика","Экономика"]}], tuition:{bachelor:"600 000 ₸", master:"750 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional", website:"https://kokuniver.edu.kz" },

    { id: 30, name:"Костанайский инженерно-экономический университет", overview:"Инженерия/экономика.", programs:[{level:"Бакалавриат",list:["Экономика","Строительство"]}], tuition:{bachelor:"650 000 ₸", master:"850 000 ₸", phd:"—"}, scholarships:["Гранты"], admission:"ЕНТ", international:"Regional", website:"https://kieu.edu.kz" }
];
