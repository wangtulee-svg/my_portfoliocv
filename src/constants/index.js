const navLinks = [
  {
    name: "ຜົນງານ",
    link: "#work",
  },
  {
    name: "ປະສົບການ",
    link: "#experience",
  },
  {
    name: "ທັກສະ",
    link: "#skills",
  },
  {
    name: "ຜົນຈາກການຮອງຮັບ",
    link: "#testimonials",
  },
];

const words = [
  { text: "ວິທີການ", imgPath: "/images/ideas.svg" },
  { text: "ແນວຄວາມຄິດ", imgPath: "/images/concepts.svg" },
  { text: "ການອອກແບບ", imgPath: "/images/designs.svg" },
  { text: "ການຂຽນໂຄດ", imgPath: "/images/code.svg" },
  { text: "ວິທີການ", imgPath: "/images/ideas.svg" },
  { text: "ແນວຄວາມຄິດ", imgPath: "/images/concepts.svg" },
  { text: "ການອອກແບບ", imgPath: "/images/designs.svg" },
  { text: "ການຂຽນໂຄດ", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "ປີປະສົບການ" },
  { value: 100, suffix: "+", label: "ໂປຣເຈັກທີ່ລູກຄ້າພໍໃຈ" },
  { value: 108, suffix: "+", label: "ໂປຣເຈັກທີ່ເຮັດໄປແລ້ວ" },
  { value: 90, suffix: "%", label: "ອັດຕາການຮັກສາລູກຄ້າ" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "ໃສ່ໃຈຄຸນນະພາບ",
    desc: "ສົ່ງມອບຜົນງານທີ່ມີຄຸນນະພາບສູງ ໂດຍໃຫ້ຄວາມສຳຄັນກັບທຸກລາຍລະອຽດຢ່າງຈິງຈັງ.",
  },
  {
    imgPath: "/images/chat.png",
    title: "ການສື່ສານທີ່ໜ້າເຊື່ອຖື",
    desc: "ອັບເດດຂໍ້ມູນໃຫ້ທ່ານໃນທຸກຂັ້ນຕອນ ເພື່ອຮັບປະກັນຄວາມໂປ່ງໃສ ແລະ ຄວາມຊັດເຈນ.",
  },
  {
    imgPath: "/images/time.png",
    title: "ສົ່ງວຽກມອບກົງຕາມກຳນົດ On-Time",
    desc: "ຮັບປະກັນວ່າໂຄງການສຳເລັດລົງຕາມແຜນກຳນົດ, ພ້ອມດ້ວຍຄຸນນະພາບ ແລະ ຄວາມສົນໃຈໃນລາຍລະອຽດ.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Wells ໄດ້ນຳເອົາຄວາມຄິດສ້າງສັນ ແລະ ຄວາມຊ່ຽວຊານດ້ານເຕັກນິກມາສູ່ທີມ, ເຊິ່ງຊ່ວຍປັບປຸງປະສິດທິພາບ Frontend ຂອງພວກເຮົາໃຫ້ດີຂຶ້ນຢ່າງຫຼວງຫຼາຍ. ຜົນງານຂອງລາວມີຄຸນຄ່າຫຼາຍໃນການສົ່ງມອບປະສົບການທີ່ວ່ອງໄວກວ່າເກົ່າ.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - ປັດຈຸບັນ",
    responsibilities: [
      "ພັດທະນາ ແລະ ເບິ່ງແຍງຟີເຈີຕ່າງໆໃນເວັບໄຊ Hostinger ສໍາລັບຜູ້ໃຊ້ງານ.",
      "ຮ່ວມມືຢ່າງໃກ້ຊິດກັບນັກອອກແບບ UI/UX ເພື່ອຮັບປະກັນປະສົບການຜູ້ໃຊ້ທີ່ລຽບງ່າຍ.",
      "ປັບປຸງແອັບພລິເຄຊັນເວັບເພື່ອຄວາມໄວ ແລະ ຄວາມສາມາດໃນການຂະຫຍາຍຕົວສູງສຸດ.",
    ],
  },
  {
    review:
      "ການປະກອບສ່ວນຂອງ Wells ເຂົ້າໃນເວັບແອັບພລິເຄຊັນຂອງ Docker ແມ່ນໂດດເດັ່ນຫຼາຍ. ລາວຮັບມືກັບສິ່ງທ້າທາຍຕ່າງໆ ດ້ວຍແນວຄິດໃນການແກ້ໄຂບັນຫາທີ່ດີຢ້ຽມ.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "ນຳພາການພັດທະນາແອັບພລິເຄຊັນເວັບຂອງ Docker ໂດຍເນັ້ນທີ່ຄວາມສາມາດຂະຫຍາຍລະບົບ.",
      "ເຮັດວຽກຮ່ວມກັບວິສະວະກອນ Backend ເພື່ອເຊື່ອມຕໍ່ APIs ເຂົ້າກັບ Frontend ຢ່າງມີປະສິດທິພາບ.",
      "ປະກອບສ່ວນໃຫ້ກັບໂປຣເຈກ open-source ທີ່ຖືກນຳໃຊ້ໃນລະບົບນິເວດ Docker.",
    ],
  },
  {
    review:
      "ຜົນງານຂອງ Wells ໃນການພັດທະນາໂມບາຍແອັບຂອງ Appwrite ໄດ້ນຳເອົາຄຸນນະພາບ ແລະ ປະສິດທິພາບລະດັບສູງມາສູ່ທີມ. ລາວໄດ້ສົ່ງມອບວິທີການແກ້ໄຂທີ່ຊ່ວຍຍົກລະດັບປະສົບການການໃຊ້ງານ ແລະ ຕອບໂຈດເປົ້າໝາຍຂອງຜະລິດຕະພັນໄດ້ເປັນຢ່າງດີ.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "ສ້າງແອັບມືຖືແບບຂ້າມແພລດຟອມໂດຍໃຊ້ React Native ເຊື່ອມຕໍ່ກັບບໍລິການ backend ຂອງ Appwrite.",
      "ປັບປຸງປະສິດທິພາບແລະປະສົບການຜູ້ໃຊ້ຂອງແອັບຜ່ານການເພີ່ມປະສິດທິພາບໂຄດແລະການທົດສອບ.",
      "ປະສານງານກັບທີມຜະລິດຕະພັນ ເພື່ອພັດທະນາຟີເຈີຕ່າງໆ ໂດຍອີງຕາມຄຳຄິດເຫັນຂອງຜູ້ໃຊ້ງານ.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};