export const CATEGORIES = [
  {
    key: "plastic",
    label: "플라스틱",
    info: "플라스틱은 용기에 묻은 이물질을 물로 씻어내고 부착된 라벨을 분리한 뒤 버리도록 한다.",
  },
  { key: "can", label: "캔", info: "캔은 행구면 좋지만 개끗하게 마셨다면 그냥 찌그러트려서 버리도록 하자." },
  { key: "paper", label: "종이", info: "종이는 이물질이 없다면 종이칸에 버리고 이물질이 있다면 일반 쓰레기에 버리자자." },
  {
    key: "general",
    label: "일반",
    info: "위 3개 이외의 애매한 것들은 전부 일반 쓰레기로 버리자. 단, 유리나 병은 분리수거함 위에 따로 모아두자.",
  },
];

export const OPTIONS = CATEGORIES.map((c) => c.label);

export const INFO_TEXT = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.info]));

// answer uses OPTIONS index (0~3)
export const QUIZZES = [
  { id: "bottle", item: "페트병", image: "/quiz/bottle.jpg", answer: 0 },
  { id: "paper", item: "종이팩/종이류", image: "/quiz/paper.jpg", answer: 2 },
  { id: "can", item: "캔", image: "/quiz/can.jpg", answer: 1 },
  { id: "vitamin", item: "영양제통/혼합재질", image: "/quiz/vitamin.jpg", answer: 3 },
];

export const GUIDE_ITEMS = [
  {
    name: "페트병",
    categoryKey: "plastic",
    tips: ["내용물 비우기", "헹구기", "라벨 제거 가능하면 제거"],
  },
  {
    name: "플라스틱 컵",
    categoryKey: "plastic",
    tips: ["내용물 비우기", "헹구기", "뚜껑/빨대 분리 배출"],
  },
  {
    name: "알루미늄 캔",
    categoryKey: "can",
    tips: ["헹구기", "가능하면 압착", "이물질 제거"],
  },
  {
    name: "종이(신문/박스)",
    categoryKey: "paper",
    tips: ["테이프/스티커 제거", "물기 제거", "접어서 배출"],
  },
  {
    name: "건전지",
    categoryKey: "general",
    tips: ["지역 수거함/전용 수거함 권장", "없으면 학교 지침 따르기"],
  },
  {
    name: "칫솔, 치약",
    categoryKey: "general",
    tips: ["칫솔은 플라스틱이 아니라 일반 쓰레기다.", "치약은 가위로 잘라서 내용물을 비운 뒤 플라스틱으로 배출하는 것이 정석이나, 그럴 수 없다면 일반 쓰레기에 버리자자"]
  }
];

