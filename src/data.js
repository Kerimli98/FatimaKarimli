const projects = [
  {
    id: "01",
    title: "BidTaxi",
    websitelink: "https:/bidtaxi.az/",
    languages: ["React", "CSS"],
    langDetails: [
      "Done in ReactJS, as fully stand-alone frontend application",
      "Responsive web design",
      "Connects to the API server via HTTP",
      "Register form, Form Validations",
      "Use of tools like React Hooks, React-slick, React-scroll, React-select, React-toastify",
    ],
    desc: "Introductory company website for the Bid Taxi mobile app which helps users to get information about the taxi app and its advantages and features",
    goal: [
      {
        id: 1,
        goalName: "Information about app",
        goalDesc:
          "The website allows users to learn more about the taxi app and determine whether it is suitable for them",
      },
      {
        id: 2,
        goalName: "Register form for drivers",
        goalDesc:
          "As a driver you can register from the website itself in addition to the mobile application",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/bid.png",
  },
  {
    id: "02",
    title: "Naringi",
    websitelink: "http://naringi.az/",
    languages: ["React", "Redux", "SCSS", "CSS"],
    desc: "This website is still in progress. Naringi is an online job portal that assists customers in finding jobs as well as hiring people in the service industry.",
    langDetails: [
      "Done in ReactJS and state management in Redux Toolkit",
      "Responsive web design",
      "Connects to the API server via HTTP",
      "Register and Login forms, Form Validations",
      "Managing reusable Form Modals with React Portal",
      "Use of Google Map API",
      "Use of tools like React Hooks, React Portal, Redux Toolkit, React-scroll, React-select, React-toastify",
    ],
    goal: [
      {
        id: 1,
        goalName: "Register / Login",
        goalDesc:
          "Create your account whether you are someone in the service field and wants to be hired, or you need to get your task done by sending job offers to employees.",
      },
      {
        id: 2,
        goalName: "Find job easily",
        goalDesc:
          "You can serve your job in the application and receive offers that are relevant to your provided service",
      },
      {
        id: 3,
        goalName: "Hire people",
        goalDesc:
          "You can quickly hire people that you need to get your task done by sending them offers",
      },
      {
        id: 4,
        goalName: "Filtering option",
        goalDesc:
          "Find job offers located nearby or you can filter the job requirements according to the gender, age and so on..",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/naringi.png",
  },

  {
    id: "03",
    title: "E-SAYAR",
    websitelink: "https://www.e-sayar.az/",
    languages: ["React", "SCSS"],
    langDetails: [
      "Done in ReactJS, as fully stand-alone frontend application",
      "Responsive web design",
      "Use of tools like React Hooks, Framer-Motion, React-Scroll-Motion",
    ],
    desc: "Introductory company website for E-SAYAR which helps users to get information about the company, its advantages and features",
    goal: [
      {
        id: 1,
        goalName: "Information about E-SAYAR",
        goalDesc:
          "The web page allows users to get information about the e-sayar accounting platform and decide whether it's suitable for them or not",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/esayar.png",
  },
  {
    id: "04",
    title: "Portfolio Website",
    websitelink: "https://fatimakarimli.netlify.app/",
    languages: ["React", "SCSS"],
    langDetails: [
      "Done in ReactJS, as fully stand-alone frontend application",
      "Responsive web design",
      "Use of tools like React Hooks, SCSS, React-slick, React-aos",
    ],
    desc: "A portfolio website for myself in order to showcase of my projects",
    goal: [
      {
        id: 1,
        goalName: "Information about my projects",
        goalDesc: "The webpage aims to provide information about my projects",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/fatima.png",
  },

  {
    id: "05",
    title: "Eazy Pizz",
    websitelink: "https://eazypizz.netlify.app/home",
    languages: ["React", "Redux", "CSS", "Bootstrap"],
    langDetails: [
      "Done in ReactJS, state management in Redux Toolkit",
      "Modern minimalist responsive UI using Reactstrap",
      "Use of tools like React Hooks, React-slick, React-paginate, Redux Toolkit",
    ],
    desc: "Simple e-commerce website - Food Delivery App",
    goal: [
      {
        id: 1,
        goalName: "Food Delivery App",
        goalDesc: "Simple e-commerce website - Food Delivery App",
      },
      {
        id: 2,
        goalName: "Cart Features",
        goalDesc:
          "You can add to shopping cart, view cart and delete cart items. You can filter products and see related products as well",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/eazypizz.png",
  },

  {
    id: "06",
    title: "Natours",
    websitelink: "https://natours-go.netlify.app/",
    languages: ["HTML", "SCSS"],
    langDetails: [
      "Built by using HTML and SCSS",
      "Responsive web design",
      "Use of CSS Grid, Flexbox",
    ],
    desc: "A creative web page for booking tours",
    goal: [
      {
        id: 1,
        goalName: "Responsiveness",
        goalDesc: "Modern one-page app, responsive web design;",
      },
      {
        id: 2,
        goalName: "Components",
        goalDesc: "Created multiple custom CSS cards, animations, contact form",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/natours.png",
  },
  {
    id: "07",
    title: "Nexter",
    websitelink: "https://nexter-go.netlify.app/",
    languages: ["HTML", "SCSS"],
    langDetails: [
      "Built by using HTML and SCSS",
      "Responsive web design",
      "Use of CSS Grid, Flexbox",
    ],
    desc: "A creative web page for renting apartments and villas",
    goal: [
      {
        id: 1,
        goalName: "Layout with CSS Grid",
        goalDesc: "Handling layout structure with CSS Grid",
      },
      {
        id: 2,
        goalName: "Components",
        goalDesc: "Created multiple custom CSS cards, gallery, etc.",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/nexter.png",
  },
  {
    id: "08",
    title: "Trillo",
    websitelink: "https://trillo-go.netlify.app/",
    languages: ["HTML", "SCSS"],
    langDetails: [
      "Built by using HTML and SCSS",
      "Responsive web design",
      "Use of CSS Grid, Flexbox",
    ],
    desc: "Your one-stop travel site for your dream vacation. Bundle your stay with a car rental or flight and you can save more.",
    goal: [
      {
        id: 1,
        goalName: "Responsiveness",
        goalDesc: "Modern one-page app, responsive web design;",
      },
      {
        id: 2,
        goalName: "Components",
        goalDesc: "Created multiple custom CSS cards, gallery, sidebar, etc.",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/trillo.png",
  },

  {
    id: "09",
    title: "Selnet",
    websitelink: "https://selnet.az/",

    languages: ["HTML", "CSS", "Vanilla JS"],
    langDetails: [
      "Built by using HTML, CSS and Javascript",
      "Responsive web design",
      "Use of CSS Grid, Flexbox, slick-slider",
      "Use of Google API",
    ],
    desc: "Introductory website for Selnet which helps users to get information about the company",
    goal: [
      {
        id: 1,
        goalName: "Modern Website",
        goalDesc:
          "Modern responsive web design, with multiple custom CSS cards, tabs, sliders, usage of Google API",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/selnet.png",
  },

  {
    id: "10",
    title: "Currency Converter",
    websitelink: "https://currency-converter-go.netlify.app/",

    languages: ["React", "CSS"],
    desc: "Simple currency converter. It works for available currencies ",
    langDetails: [
      "Built by ReactJS and CSS",
      "Connects to the free currency API server via HTTP",
    ],
    goal: [
      {
        id: 1,
        goalName: "Currency Converter",
        goalDesc:
          "Simple currency converter. It works for available currencies by connecting to a free currency api via HTTP",
      },
    ],
    challanges: "",
    solution: "",
    screenshots: "/assets/images/currency.png",
  },
];
export default projects;
