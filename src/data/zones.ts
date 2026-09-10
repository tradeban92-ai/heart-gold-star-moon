export type ZoneKey =
  | "forehead"
  | "glabella"
  | "eyes"
  | "cheeks"
  | "nasolabial"
  | "lips"
  | "chin"
  | "jawline"
  | "neck"
  | "decollete";

export type ZoneItem = {
  name: string;
  drug: string;
  price: number;
  desc: string;
  url: string;
};

export type FaceZone = {
  key: ZoneKey;
  n: number;
  title: string;
  hint: string;
  items: ZoneItem[];
};

export type ZoneShape = {
  key: ZoneKey;
  paths: string[];
  badges: { x: number; y: number }[];
};

export const FACE_ZONES: FaceZone[] = [
  {
    key: "forehead",
    n: 1,
    title: "Лоб",
    hint: "Горизонтальные морщины",
    items: [
      {
        name: "Ботулинотерапия",
        drug: "Rentox",
        price: 7500,
        desc: "Убирает горизонтальные морщины на лбу. Результат 4–6 месяцев.",
        url: "https://dkd.su/1788592/s/18950887",
      },
      {
        name: "Ботулинотерапия",
        drug: "Релатокс",
        price: 12000,
        desc: "Лоб на препарате Релатокс. Результат 4–6 месяцев.",
        url: "https://dkd.su/1788592/s/18950887",
      },
    ],
  },
  {
    key: "glabella",
    n: 2,
    title: "Межбровье",
    hint: "Морщины гнева",
    items: [
      {
        name: "Ботулинотерапия",
        drug: "Rentox",
        price: 4500,
        desc: "Убирает вертикальную складку между бровей — «морщины гнева».",
        url: "https://dkd.su/1788592/s/21815928",
      },
      {
        name: "Ботулинотерапия",
        drug: "Релатокс",
        price: 6000,
        desc: "Межбровье на препарате Релатокс.",
        url: "https://dkd.su/1788592/s/21815928",
      },
    ],
  },
  {
    key: "eyes",
    n: 3,
    title: "Вокруг глаз",
    hint: "Гусиные лапки",
    items: [
      {
        name: "Ботулинотерапия",
        drug: "Rentox",
        price: 3500,
        desc: "Разглаживает «гусиные лапки» в уголках глаз при улыбке.",
        url: "https://dkd.su/1788592/s/21815936",
      },
      {
        name: "Ботулинотерапия",
        drug: "Релатокс",
        price: 5000,
        desc: "Гусиные лапки на препарате Релатокс.",
        url: "https://dkd.su/1788592/s/21815936",
      },
    ],
  },
  {
    key: "cheeks",
    n: 4,
    title: "Скулы",
    hint: "Объём средней трети",
    items: [
      {
        name: "Филлер",
        drug: "Tesoro SAB",
        price: 15000,
        desc: "Восполнение объёма скул, лифтинг средней трети лица.",
        url: "https://dkd.su/1788592/s/21816006",
      },
      {
        name: "Филлер",
        drug: "Stylage L",
        price: 18000,
        desc: "Выраженная коррекция скул, чёткий рельеф средней трети.",
        url: "https://dkd.su/1788592/s/21816006",
      },
    ],
  },
  {
    key: "nasolabial",
    n: 5,
    title: "Носогубные",
    hint: "Складки от носа к губам",
    items: [
      {
        name: "Филлер",
        drug: "коррекция складок",
        price: 15000,
        desc: "Заполнение носогубных складок, смягчает заломы, освежает лицо.",
        url: "https://dkd.su/1788592/s/21816020",
      },
    ],
  },
  {
    key: "lips",
    n: 6,
    title: "Губы",
    hint: "Объём и форма",
    items: [
      {
        name: "Контурная пластика",
        drug: "Южная Корея",
        price: 15000,
        desc: "Мягкий пластичный филлер, объём и коррекция формы. За 1 мл.",
        url: "https://dkd.su/1788592/s/18950942",
      },
      {
        name: "Контурная пластика",
        drug: "Франция",
        price: 18000,
        desc: "Филлер премиум-класса, мягкая текстура, длительный результат. За 1 мл.",
        url: "https://dkd.su/1788592/s/21816000",
      },
    ],
  },
  {
    key: "chin",
    n: 7,
    title: "Подбородок",
    hint: "Профиль и форма",
    items: [
      {
        name: "Филлер",
        drug: "Tesoro SAB",
        price: 15000,
        desc: "Коррекция формы подбородка, улучшает профиль.",
        url: "https://dkd.su/1788592/s/19807822",
      },
      {
        name: "Филлер",
        drug: "Stylage L",
        price: 18000,
        desc: "Выраженная коррекция подбородка, плотная фиксация формы.",
        url: "https://dkd.su/1788592/s/19807822",
      },
      {
        name: "Ботулинотерапия",
        drug: "гипертонус",
        price: 3500,
        desc: "Убирает эффект «апельсиновой корки» на подбородке.",
        url: "https://dkd.su/1788592/s/21815941",
      },
    ],
  },
  {
    key: "jawline",
    n: 8,
    title: "Челюсть",
    hint: "Овал и углы",
    items: [
      {
        name: "Филлер",
        drug: "углы НЧ 3 мл",
        price: 30000,
        desc: "Коррекция углов нижней челюсти. Чёткий овал лица, эффект jawline.",
        url: "https://dkd.su/1788592/s/21814912",
      },
    ],
  },
  {
    key: "neck",
    n: 9,
    title: "Шея",
    hint: "Платизма",
    items: [
      {
        name: "Ботулинотерапия",
        drug: "Платизма",
        price: 9000,
        desc: "Расслабляет мышцу шеи, тянущую лицо вниз. Лифтинг нижней трети и шеи.",
        url: "https://dkd.su/1788592/s/21815952",
      },
    ],
  },
  {
    key: "decollete",
    n: 10,
    title: "Декольте",
    hint: "Зона груди",
    items: [
      {
        name: "Биоревитализация",
        drug: "Реви Стронг / Силк",
        price: 15000,
        desc: "Увлажнение и качество кожи декольте. 1 мл.",
        url: "https://dkd.su/1788592/s/21815987",
      },
      {
        name: "Пилинг",
        drug: "Bio Re Pill",
        price: 4000,
        desc: "Поверхностный пилинг зоны декольте, минимальная реабилитация.",
        url: "https://dkd.su/1788592/s/19014816",
      },
    ],
  },
];

/** Hover ovals from the user's diagram. viewBox 0 0 100 133.11 */
export const FRONT_SHAPES: ZoneShape[] = [
  {
    key: "forehead",
    badges: [{ x: 50, y: 26.5 }],
    paths: ["M34.5 26.5a15.5 7.2 0 1 0 31 0a15.5 7.2 0 1 0 -31 0"],
  },
  {
    key: "glabella",
    badges: [{ x: 50, y: 35.2 }],
    paths: ["M44.8 35.2a5.2 3 0 1 0 10.4 0a5.2 3 0 1 0 -10.4 0"],
  },
  {
    key: "eyes",
    badges: [
      { x: 36.5, y: 39.8 },
      { x: 63.5, y: 39.8 },
    ],
    paths: [
      "M31.3 39.8a8.2 3.4 0 1 0 16.4 0a8.2 3.4 0 1 0 -16.4 0",
      "M52.3 39.8a8.2 3.4 0 1 0 16.4 0a8.2 3.4 0 1 0 -16.4 0",
    ],
  },
  {
    key: "cheeks",
    badges: [
      { x: 38, y: 50.5 },
      { x: 62, y: 50.5 },
    ],
    paths: [
      "M30.2 50.5a7.8 8.8 0 1 0 15.6 0a7.8 8.8 0 1 0 -15.6 0",
      "M54.2 50.5a7.8 8.8 0 1 0 15.6 0a7.8 8.8 0 1 0 -15.6 0",
    ],
  },
  {
    key: "nasolabial",
    badges: [
      { x: 44.8, y: 53.8 },
      { x: 55.2, y: 53.8 },
    ],
    paths: [
      "M41.2 53.8a3.6 5.2 0 1 0 7.2 0a3.6 5.2 0 1 0 -7.2 0",
      "M51.6 53.8a3.6 5.2 0 1 0 7.2 0a3.6 5.2 0 1 0 -7.2 0",
    ],
  },
  {
    key: "lips",
    badges: [{ x: 50, y: 57.2 }],
    paths: ["M41.6 57.2a8.4 3.4 0 1 0 16.8 0a8.4 3.4 0 1 0 -16.8 0"],
  },
  {
    key: "chin",
    badges: [{ x: 50, y: 66.4 }],
    paths: ["M41.8 66.4a8.2 5 0 1 0 16.4 0a8.2 5 0 1 0 -16.4 0"],
  },
  {
    key: "jawline",
    badges: [
      { x: 35.8, y: 61.5 },
      { x: 64.2, y: 61.5 },
    ],
    paths: [
      "M31.2 61.5a4.6 8 0 1 0 9.2 0a4.6 8 0 1 0 -9.2 0",
      "M59.6 61.5a4.6 8 0 1 0 9.2 0a4.6 8 0 1 0 -9.2 0",
    ],
  },
  {
    key: "neck",
    badges: [
      { x: 44.8, y: 82 },
      { x: 55.2, y: 82 },
    ],
    paths: [
      "M40.4 82a4.4 11.5 0 1 0 8.8 0a4.4 11.5 0 1 0 -8.8 0",
      "M50.8 82a4.4 11.5 0 1 0 8.8 0a4.4 11.5 0 1 0 -8.8 0",
    ],
  },
  {
    key: "decollete",
    badges: [{ x: 50, y: 110 }],
    paths: ["M18 110a32 8.5 0 1 0 64 0a32 8.5 0 1 0 -64 0"],
  },
];

export const FACE_IMAGE = "/face-front.jpg";
