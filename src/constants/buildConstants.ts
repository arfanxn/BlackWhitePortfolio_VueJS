import { stacksMap, type Stack } from '@/constants/stackConstants'

export type Build = {
  title: string
  description: string
  stacks: Stack[]
  imageUrls: string[]
  urls: string[]
  startedAt: Date
  completedAt: Date | null
}

const imageUrlPrefix = '/images/builds'

const description = `Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas.`

export const builds: readonly Build[] = Object.freeze([
  {
    title: 'Black White Portfolio',
    description: description,
    stacks: [
      stacksMap.html,
      stacksMap.css,
      stacksMap.tailwind,
      stacksMap.typescript,
      stacksMap.vue,
    ],
    imageUrls: [
      `${imageUrlPrefix}/bw-portfolio/bw-portfolio.jpg`,
      `${imageUrlPrefix}/bw-portfolio/hero.jpg`,
      `${imageUrlPrefix}/bw-portfolio/about-me.jpg`,
      `${imageUrlPrefix}/bw-portfolio/builds.jpg`,
      `${imageUrlPrefix}/bw-portfolio/certs.jpg`,
      `${imageUrlPrefix}/bw-portfolio/404-page.jpg`,
    ],
    urls: ['https://github.com/arfanxn/BlackWhitePortfolio_VueJS'],
    startedAt: new Date('2025-04-20'),
    completedAt: new Date('2025-04-06'),
  },
  {
    title: 'Fortified Wallet',
    description: description,
    stacks: [
      stacksMap.html,
      stacksMap.css,
      stacksMap.tailwind,
      stacksMap.typescript,
      stacksMap.vue,
      stacksMap.ethers,
      stacksMap.solidity,
      stacksMap.foundry,
    ],
    imageUrls: [
      `${imageUrlPrefix}/fortified-wallet/connect.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard-add-wallet.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard-token-deposit.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard-token-deposit-success.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard-transfer-token.png`,
      `${imageUrlPrefix}/fortified-wallet/dashboard-lock-unlock.jpg`,
      `${imageUrlPrefix}/fortified-wallet/token-list.png`,
      `${imageUrlPrefix}/fortified-wallet/transaction-approve.png`,
      `${imageUrlPrefix}/fortified-wallet/toasts.jpg`,
      `${imageUrlPrefix}/fortified-wallet/404-page.png`,
    ],
    urls: [
      'https://github.com/arfanxn/FortifiedWallet_VueJS',
      'https://github.com/arfanxn/FortifiedWallet_FoundrySolidity',
      'https://docs.google.com/document/d/1MKa_wO-cxa1YI_SImiihjGUPH3npkwN8xtvu5TPu_O4/edit?usp=sharing',
      'https://drive.google.com/drive/folders/1bS4-XP7e2x5isl-bMcP5jlDAhp4DCRv0?usp=sharing',
    ],
    startedAt: new Date('2025-01-31'),
    completedAt: new Date('2025-04-05'),
  },
  {
    title: 'Spotifan',
    description: description,
    stacks: [stacksMap.swift],
    imageUrls: [
      `${imageUrlPrefix}/spotifan/spotifan.jpg`,
      `${imageUrlPrefix}/spotifan/home.png`,
      `${imageUrlPrefix}/spotifan/home-2.png`,
      `${imageUrlPrefix}/spotifan/search.png`,
      `${imageUrlPrefix}/spotifan/search-2.png`,
      `${imageUrlPrefix}/spotifan/your-library.png`,
      `${imageUrlPrefix}/spotifan/your-library-2.png`,
    ],
    urls: [
      'https://github.com/arfanxn/Spotifan_SwiftUI',
      'https://docs.google.com/document/d/1hclx18HU93LRTFRaioE-mLALSI9pTnxxTYfel6P-W7g/edit?usp=sharing',
      'https://drive.google.com/file/d/1WaakhSTek2LVgulabusbOub1OsBZ8SiQ/view?usp=sharing',
    ],
    startedAt: new Date('2022-11-01'),
    completedAt: new Date('2022-11-20'),
  },
  {
    title: 'Arfinance',
    description: description,
    stacks: [stacksMap.swift],
    imageUrls: [
      `${imageUrlPrefix}/arfinance/arfinance.jpg`,
      `${imageUrlPrefix}/arfinance/live-prices.png`,
      `${imageUrlPrefix}/arfinance/live-prices-dark.png`,
      `${imageUrlPrefix}/arfinance/overviews.png`,
      `${imageUrlPrefix}/arfinance/overviews-dark.png`,
      `${imageUrlPrefix}/arfinance/portfolio.png`,
      `${imageUrlPrefix}/arfinance/portfolio-dark.png`,
      `${imageUrlPrefix}/arfinance/edit-portfolio.png`,
      `${imageUrlPrefix}/arfinance/edit-portfolio-dark.png`,
      `${imageUrlPrefix}/arfinance/app-icon.png`,
    ],
    urls: [
      'https://github.com/arfanxn/Arfinance_SwiftUI',
      'https://docs.google.com/document/d/1gXqlpTmPlHn9bqoVtBifYTxPFNWs7-xywhuhVpIirto/edit?usp=sharing',
      'https://drive.google.com/file/d/1cBm26jG1AjhyDHRolX4cEEFsh-sYezqB/view?usp=sharing',
    ],
    startedAt: new Date('2022-10-22'),
    completedAt: new Date('2022-11-20'),
  },
  {
    title: 'Cashierfan',
    description: `Cashierfan is a point-of-sale web app built with Laravel, Vue, Inertia.js, and Tailwind CSS. It features product and customer management, barcode-based sales input, stock tracking, role-based access, and auto-generated invoices. The dashboard gives an overview of daily activity and reports. Designed for small retail use, it focuses on speed and clarity. The name combines “cashier” and my name, Arfan, reflecting both function and personal touch.`,
    stacks: [
      stacksMap.html,
      stacksMap.css,
      stacksMap.tailwind,
      stacksMap.javascript,
      stacksMap.vue,
      stacksMap.inertia,
      stacksMap.laravel,
    ],
    imageUrls: [
      `${imageUrlPrefix}/cashierfan/dashboard-sidebar-opened.png`,
      `${imageUrlPrefix}/cashierfan/create-sale.png`,
      `${imageUrlPrefix}/cashierfan/invoice.png`,
    ],
    urls: [
      'https://github.com/arfanxn/Cashierfan_InertiaVue',
      'https://docs.google.com/document/d/1MseCtJ82n-N5aBwBn8PFEDxij4aAbTLJdIhq37HE33E/edit?usp=sharing',
    ],
    startedAt: new Date('2022-05-24'),
    completedAt: new Date('2022-06-25'),
  },
  {
    title: 'PayFan',
    description: `PayFan is a PayPal clone I developed using Laravel, Vue.js, Bootstrap, and other web technologies. It replicates core features like sending and requesting money, tracking transactions, and managing user account settings including profile, password, privacy, and notifications. This project challenged me to understand how real-world financial platforms are structured, and it strengthened my full-stack development and user experience skills.`,
    stacks: [
      stacksMap.html,
      stacksMap.css,
      stacksMap.bootstrap,
      stacksMap.javascript,
      stacksMap.vue,
      stacksMap.laravel,
    ],
    imageUrls: [
      `${imageUrlPrefix}/payfan/dashboard.png`,
      `${imageUrlPrefix}/payfan/send-and-request.png`,
      `${imageUrlPrefix}/payfan/activity.png`,
      `${imageUrlPrefix}/payfan/activity-2.png`,
      `${imageUrlPrefix}/payfan/activity-3.png`,
      `${imageUrlPrefix}/payfan/account.png`,
    ],
    urls: [
      'https://github.com/arfanxn/Payfan_VueJS',
      'https://github.com/arfanxn/Payfan_Laravel',
      'https://docs.google.com/document/d/14kHJDbcptAadZDto-3anGRDGXEF9A8zp2FCnTQw6g3Q/edit?usp=sharing',
    ],
    startedAt: new Date('2022-01-22'),
    completedAt: new Date('2022-04-22'),
  },
  {
    title: 'Fund Manager',
    description: `Fund Manager is a simple fund management app I built using HTML, CSS, Bootstrap, JavaScript, and Vue.js. It lets users track their income and expenses with editable notes, dates, and auto-updated balances. I learned about CRUD operations, Vue’s reactivity, form handling, and using Bootstrap for a clean layout. The app includes pagination and in-line editing. Although it’s not fully responsive yet, this project helped me understand real-time updates, basic state management, and building interactive user experiences.`,
    stacks: [
      stacksMap.html,
      stacksMap.css,
      stacksMap.bootstrap,
      stacksMap.javascript,
      stacksMap.vue,
      stacksMap.lumen,
    ],
    imageUrls: [
      `${imageUrlPrefix}/fund-manager/fund-manager.jpg`,
      `${imageUrlPrefix}/fund-manager/dashboard.png`,
      `${imageUrlPrefix}/fund-manager/dashboard-2.png`,
    ],
    urls: [
      'https://github.com/arfanxn/FundManager_VueJS',
      'https://github.com/arfanxn/FundManager_LaravelLumen',
      'https://docs.google.com/document/d/1eKflGurS10icuF4X--BszH1bVQ9fjVMf9Y_rlj_b1uM/edit?usp=sharing',
    ],
    startedAt: new Date('2021-12-26'),
    completedAt: new Date('2022-01-08'),
  },
  {
    title: 'E-Library',
    description: `E-Library is a web-based digital library platform I built using HTML, CSS, Bootstrap, and native PHP. It connects to the Google Books API to fetch book data and allows users to search, view, and bookmark their favorite titles. I created this project as a volunteer for my former high school, SMK Harapan Bersama, where I studied Computer Engineering. While the site isn't fully responsive yet, it served as a great learning experience in working with APIs, building dynamic features, and giving back to my school community through code.`,
    stacks: [stacksMap.html, stacksMap.css, stacksMap.bootstrap, stacksMap.php],
    imageUrls: [
      `${imageUrlPrefix}/e-library/e-library.jpg`,
      `${imageUrlPrefix}/e-library/home.png`,
      `${imageUrlPrefix}/e-library/bookmark.png`,
      `${imageUrlPrefix}/e-library/category.png`,
    ],
    urls: [
      'https://github.com/arfanxn/E-Library_PHP',
      'https://docs.google.com/document/d/1y2cQFH1wWeiy2LgMaCrtRMgqvs8W8vMzRUUBDSpuE3c/edit?usp=sharing',
    ],
    startedAt: new Date('2022-03-18'),
    completedAt: new Date('2022-04-23'),
  },
  {
    title: 'Tealy Portfolio',
    description: `Tealy Portfolio is the very first personal portfolio website I ever created—built completely from scratch. I was inspired by another developer's design and recreated it with my own touch. Just like my Tealy Calculator, this project uses a teal color scheme because teal used to be my favorite color (now I'm more into monochrome!). This project helped me learn how to structure a full website, organize personal branding, and build contact and project showcase sections. It marked the beginning of my journey into web development and design.`,
    stacks: [stacksMap.html, stacksMap.css, stacksMap.bootstrap, stacksMap.javascript],
    imageUrls: [
      `${imageUrlPrefix}/tealy-portfolio/tealy-portfolio.jpg`,
      `${imageUrlPrefix}/tealy-portfolio/hero.png`,
      `${imageUrlPrefix}/tealy-portfolio/about-me.png`,
      `${imageUrlPrefix}/tealy-portfolio/my-work.png`,
      `${imageUrlPrefix}/tealy-portfolio/contact.png`,
    ],
    urls: [
      'https://github.com/arfanxn/TealyPortfolio_HCJ',
      'https://docs.google.com/document/d/1dX7z44zKrMNISjR7pyQWYvBBxknGw18ng3s-_rsZyig/edit?usp=sharing',
    ],
    startedAt: new Date('2021-10-31'),
    completedAt: new Date('2021-11-05'),
  },
  {
    title: 'Tealy Calculator',
    description: `Tealy Calculator represents my first programming project, designed during a time when teal was my favorite color (now replaced by monochrome black, white, and gray). This project was specifically created to enhance my logical thinking in programming by implementing mathematical operations in JavaScript. The calculator handles user interactions through HTML buttons, processing numeric inputs and arithmetic operations while maintaining a clean, teal-themed interface. The experience taught me fundamental programming concepts through practical application, challenging me to translate button clicks into mathematical functions and deliver accurate calculations while managing the logic flow behind each operation.`,
    stacks: [stacksMap.html, stacksMap.css, stacksMap.bootstrap, stacksMap.javascript],
    imageUrls: [`${imageUrlPrefix}/tealy-calculator/calculator.jpg`],
    urls: ['https://github.com/arfanxn/TealyCalculator_HCJ'],
    startedAt: new Date('2021-11-05T12:00:00'),
    completedAt: new Date('2021-11-05T17:00:00'),
  },
])
