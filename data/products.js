//тут все товары что булут в каталоге
const products = [
    {
        id: 1,
        title: "RTX 4070 Ti",
        category: "Видеокарты",
        brand: "NVIDIA",
        price: 79990,
        oldPrice: 89990,
        rating: 4.95,
        stock: true,
        isPopular: true,
        specs: {
            memory: "12GB",
            frequency: "2640 MHz",
            power: "285W"
        },
        description: "Видеокарта GIGABYTE GeForce RTX 4070 Ti GAMING OC – воплощение оригинального стиля, мощного вычислительного потенциала и эффективного охлаждения. Модель разработана для сборки игрового компьютера и позволяет наслаждаться плавностью визуальных эффектов. Микроархитектура NVIDIA Ada Lovelace нацелена на достижение стабильно высокой производительности и четкости отображения динамичных кадров. Тактовая частота процессора составляет 2310 МГц и способна достигать значения 2640 МГц в режиме разгона. GIGABYTE GeForce RTX 4070 Ti GAMING ОС оборудована эффективной системой охлаждения с тремя вентиляторами, массивным радиатором и тепловыми трубками. Вентиляторы украшены светодиодной подсветкой RGB с гибкой настройкой оттенков и световых эффектов. Для подключения к мониторов предусмотрены 3 разъема DisplayPort и 1 HDMI. Фирменная утилита CONTROL CENTER позволяет осуществлять мониторинг, программировать освещение, управлять различными параметрами видеокарты.",
        reviews: [],
        image: "./assets/Products/RTX 4070 Ti.jpg"
    },
    
    {
        id: 2,
        title: "Ryzen 7 7800X3D",
        category: "Процессоры",
        brand: "AMD",
        price: 29190,
        oldPrice: 30800,
        rating: 5.0,
        stock: true,
        isPopular: true,
        specs: {
            cores: "8",
            threads: "16",
            frequency: "5.0 GHz"
        },
        description: "8-ядерный процессор AMD Ryzen 7 7800X3D OEM – оснащение для игровых компьютеров и производительных универсальных ПК для дома или офиса. Модель базируется на архитектуре AMD Zen 4 и произведена по техпроцессу TSMC 5nm FinFET. Базовая частота процессора – 4.2 ГГц. CPU поддерживает до 16 потоков. В турборежиме частота процессора может повышаться до 5 ГГц. Любые операции ускоряют 8-мегабайтный кэш L2 и 96-мегабайтный кэш L3. Встроенный контроллер PCI Express соответствует версии 5.0 и поддерживает 24 линии. Особенность процессора AMD Ryzen 7 7800X3D OEM – наличие интегрированного графического ядра. GPU AMD Radeon Graphics работает на частотах до 2200 МГц. Производительность встроенной графики сопоставима с быстродействием видеокарт среднего класса. Процессор совместим с памятью DDR5, с общим объем которой ограничен до 128 ГБ. Максимальная частота ОЗУ – 5200 МГц. Возможно использование модулей с коррекцией ошибок. Процессор поддерживает аппаратную виртуализацию. Это расширяет функциональность ПК при работе с виртуальными машинами. OEM-комплектация модели означает отсутствие кулера.",
        reviews: [],
        image: "./assets/Products/Ryzen 7 7800x3d.jpg"
    },

    {
        id: 3,
        title: "Corsair 32GB DDR5",
        category: "Оперативная память",
        brand: "Corsair",
        price: 53999,
        oldPrice: 59999,
        rating: 5.0,
        stock: true,
        isPopular: true,
        specs: {
            capacity: "32GB",
            type: "DDR5",
            frequency: "6000 MHz"
        },
        description: "Оперативная память Corsair Vengeance [CMK32GX5M2B6000C36] пригодится пользователям, которые планируют собрать или модернизировать игровой системный блок. 32-гигабайтный комплект состоит из 2 модулей DDR5 по 16 ГБ. Устройство поддерживает технологию разгона XMP 3.0. Тактовая частота памяти – 6000 МГц. Ее пропускная способность позволяет продуктивно работать с любым программным обеспечением. Память подходит для оснащения производительных офисных и домашних ПК. Тайминги модулей – 36-38-38-76. Оперативная память Corsair Vengeance [CMK32GX5M2B6000C36] использует увеличенное до 1.25 В напряжение питания. Избыточный нагрев модулей при любых нагрузках исключают алюминиевые радиаторы. Устройство поддерживает технологию Power Management IC, которая оптимизирует энергопотребление. Поддержка частот от 4800 МГц расширяет совместимость комплекта.",
        reviews: [],
        image: "./assets/Products/Corsair 32GB DDR5.webp"
    },
    {
        id: 4,
        title: "Samsung 990 PRO 2TB",
        category: "SSD",
        brand: "Samsung",
        price: 18990,
        oldPrice: 21990,
        rating: 4.9,
        stock: true,
        isPopular: false,
        specs: {
            type: "NVMe",
            capacity: "2TB",
            speed: "7450 MB/s"
        },
        description: "SSD Samsung 990 PRO 2TB - флагманская серия NVMe SSD с невероятной скоростью чтения до 7450 МБ/с и записи до 6900 МБ/с. Технология V-NAND 5-bit TLC обеспечивает надежность и долговечность. Встроенный контроллер Phoenix PCIe 4.0 обеспечивает стабильную производительность.",
        image: "./assets/Products/Samsung 990 PRO 2TB.webp"
    },

    {
        id: 5,
        title: "ASUS ROG STRIX B650",
        category: "Материнские платы",
        brand: "ASUS",
        price: 23990,
        oldPrice: 25990,
        rating: 4.7,
        stock: true,
        isPopular: false,
        specs: {
            socket: "AM5",
            memory: "DDR5",
            slots: "4"
        },
        description: "Материнская плата ASUS ROG STRIX B650-E GAMING - идеальный выбор для сборки игрового ПК на базе AMD Ryzen 7000. Поддержка PCIe 5.0, DDR5, Wi-Fi 6E и множества портов подключения. Эффективная система охлаждения и надежные компоненты.",
        image: "./assets/Products/ASUS ROG STRIX B650.webp"
    },

    {
        id: 6,
        title: "DeepCool AK620",
        category: "Охлаждение",
        brand: "DeepCool",
        price: 6990,
        oldPrice: 7990,
        rating: 4.8,
        stock: true,
        isPopular: false,
        specs: {
            type: "Воздушное",
            fans: "2",
            tdp: "260W"
        },
        description: "Воздушное охлаждение DeepCool AK620 - надежное решение для процессоров среднего класса. Компактная конструкция с 6 тепловыми трубками обеспечивает эффективный отвод тепла. Совместим с процессорами Intel и AMD.",
        image: "./assets/Products/DeepCool AK620.webp"
    },

    {
        id: 7,
        title: "Видеокарта ASUS GeForce RTX 4060 DUAL V2",
        category: "Видеокарты",
        brand: "NVIDIA",
        price: 29990,
        oldPrice: 34990,
        rating: 4.7,
        stock: true,
        isPopular: false,
        specs: {
            memory: "8GB",
            frequency: "2475 MHz",
            power: "115W"
        },
        description: "Видеокарта NVIDIA GeForce RTX 4060 - идеальный выбор для игр в Full HD. Технология DLSS 3 обеспечивает высокую производительность. Эффективная система охлаждения позволяет работать тихо и стабильно.",
        image: "./assets/Products/ASUS GeForce RTX 4060 DUAL V2.jpg.webp"
    },

    {
        id: 8,
        title: "Intel Core i7-14700KF OEM",
        category: "Процессоры",
        brand: "Intel",
        price: 33299,
        oldPrice: 34990,
        rating: 4.8,
        stock: true,
        isPopular: true,
        specs: {
            cores: "20",
            threads: "28",
            frequency: "5.6 GHz"
        },
        description: "Процессор Intel Core i7-14700KF OEM - мощный 20-ядерный процессор для игр и профессиональных задач. Поддержка технологий Intel Turbo Boost Max 3.0 и Thermal Velocity Boost обеспечивает высокую производительность.",
        image: "./assets/Products/Intel Core i7-14700KF OEM.jpg.webp"
    },

    {
        id: 9,
        title: "NZXT H5 Flow",
        category: "Корпуса",
        brand: "NZXT",
        price: 8990,
        oldPrice: 9990,
        rating: 4.6,
        stock: true,
        isPopular: false,
        specs: {
            type: "Mid-Tower",
            fans: "2",
            material: "Сталь/Стекло"
        },
        description: "Корпус NZXT H5 Flow - современный корпус с отличной циркуляцией воздуха. Включает 2 предустановленных вентилятора и поддержку жидкостного охлаждения. Стеклянная боковая панель для демонстрации компонентов.",
        image: "./assets/Products/RTX 4070 Ti.jpg"
    },

    {
        id: 10,
        title: "Corsair RM850x",
        category: "Блоки питания",
        brand: "Corsair",
        price: 12990,
        oldPrice: 14990,
        rating: 4.8,
        stock: true,
        isPopular: false,
        specs: {
            power: "850W",
            efficiency: "80+ Gold",
            modular: "Полностью модульный"
        },
        description: "Блок питания Corsair RM850x - полностью модульный блок питания с сертификатом 80+ Gold. Тихая работа благодаря вентилятору с нулевым режимом вращения. 10-летняя гарантия и надежные японские конденсаторы.",
        image: "./assets/Products/Ryzen 7 7800x3d.jpg"
    },

    {
        id: 11,
        title: "ASUS TUF Gaming VG27AQ",
        category: "Мониторы",
        brand: "ASUS",
        price: 29990,
        oldPrice: 32990,
        rating: 4.7,
        stock: true,
        isPopular: true,
        specs: {
            size: "27 дюймов",
            resolution: "2560x1440",
            refresh: "165Hz"
        },
        description: "Монитор ASUS TUF Gaming VG27AQ - 27-дюймовый игровой монитор с разрешением QHD и частотой обновления 165 Гц. Технология Adaptive-Sync и низкое время отклика 1 мс для плавного геймплея.",
        image: "./assets/Products/Corsair 32GB DDR5.webp"
    },

    {
        id: 12,
        title: "Logitech G Pro X",
        category: "Клавиатуры",
        brand: "Logitech",
        price: 11990,
        oldPrice: 13990,
        rating: 4.5,
        stock: true,
        isPopular: false,
        specs: {
            type: "Механическая",
            switches: "GX Blue",
            backlight: "RGB"
        },
        description: "Клавиатура Logitech G Pro X - профессиональная механическая клавиатура для киберспорта. Сменные переключатели, компактный дизайн и настраиваемая RGB-подсветка.",
        image: "./assets/Products/Samsung 990 PRO 2TB.webp"
    },

    {
        id: 13,
        title: "Razer DeathAdder V3",
        category: "Мыши",
        brand: "Razer",
        price: 6990,
        oldPrice: 7990,
        rating: 4.9,
        stock: true,
        isPopular: true,
        specs: {
            sensor: "Focus Pro 30K",
            weight: "59g",
            buttons: "5"
        },
        description: "Мышь Razer DeathAdder V3 - легкая игровая мышь весом 59 грамм с сенсором Focus Pro 30K. Эргономичный дизайн для правой руки и долговечные переключатели.",
        image: "./assets/Products/ASUS ROG STRIX B650.webp"
    },

    {
        id: 14,
        title: "SteelSeries QcK Heavy",
        category: "Аксессуары",
        brand: "SteelSeries",
        price: 1990,
        oldPrice: 2490,
        rating: 4.6,
        stock: true,
        isPopular: false,
        specs: {
            size: "450x400mm",
            thickness: "6mm",
            material: "Ткань"
        },
        description: "Коврик для мыши SteelSeries QcK Heavy - профессиональный игровой коврик увеличенной толщины 6 мм. Антискол��зящая резиновая основа и оптимальная поверхность для точного управления.",
        image: "./assets/Products/DeepCool AK620.webp"
    },

    {
        id: 15,
        title: "Noctua NH-D15",
        category: "Охлаждение",
        brand: "Noctua",
        price: 8990,
        oldPrice: 9990,
        rating: 4.9,
        stock: true,
        isPopular: true,
        specs: {
            type: "Воздушное",
            fans: "2",
            tdp: "250W"
        },
        description: "Кулер Noctua NH-D15 - флагманское воздушное охлаждение с двумя вентиляторами NF-A15. Совместим с большинством сокетов Intel и AMD. Тихая работа и высокая эффективность.",
        image: "./assets/Products/ASUS GeForce RTX 4060 DUAL V2.jpg.webp"
    },

    {
        id: 16,
        title: "Kingston Fury Beast 16GB",
        category: "Оперативная память",
        brand: "Kingston",
        price: 3990,
        oldPrice: 4490,
        rating: 4.7,
        stock: true,
        isPopular: false,
        specs: {
            capacity: "16GB",
            type: "DDR4",
            frequency: "3200 MHz"
        },
        description: "Оперативная память Kingston Fury Beast 16GB DDR4 - надежная память для игровых систем. Поддержка XMP 2.0 для автоматического разгона и стильный дизайн с радиатором.",
        image: "./assets/Products/Intel Core i7-14700KF OEM.jpg.webp"
    }
];