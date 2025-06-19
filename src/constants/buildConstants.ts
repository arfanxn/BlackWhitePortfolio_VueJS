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

export const builds: readonly Build[] = Object.freeze([
  {
    title: `Arfanxn's Portfolio`,
    description: `<p>Arfanxn's Portfolio is a sleek, minimalistic website built with HTML, CSS, Tailwind, and Vue. It includes an About section, showcasing Arfan's short and full bio, profile image, education, experience, and skills (represented by icons like Golang, Solidity, and more). The Builds section displays projects like "Cashierfan" with its tech stack(s) represented by icon(s) as shown in the image. Certs highlights Arfan's certifications. The site features a clean, monochrome design and a functional 404 page. It’s responsive and highlights Arfan's skills.</p>`,
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
    description: `<p>Fortified Wallet is a secure Ethereum wallet that uses multi-signature authentication for transactions. Signers are set during wallet creation and cannot be changed. For example, if 7 signers are provided with 5 approvals required, these settings are fixed and cannot be altered unless a new wallet is created. Users can lock funds in a specified USD amount, which applies to all Ethereum-based tokens.</p>

    <p>To unlock the locked funds, users must provide the password and salt set during wallet creation. These details cannot be changed after setup, and if they are exposed, it is recommended to create a new wallet for security. While users can lock funds without providing a password or salt, both are required to unlock them.</p>

    <p>The wallet also allows users to deposit ETH or tokens, transfer funds, approve, revoke, or cancel transactions, and view transaction history. Users can add tokens not automatically detected by the wallet, and it will show their balance or zero if no assets are present.</p>

    <p>With its intuitive interface and robust security features, Fortified Wallet provides a reliable solution for managing and securing digital assets.</p>`,
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
    title: 'Notefan',
    description: `<p>Notefan is a Notion clone application with a backend developed in Golang and using MySQL as its database. The name, Notefan, is a portmanteau of Notion and the creator's name, Arfan, adding a personal signature to the project. It provides a RESTful API for features like user authentication, management of spaces and pages, and media handling. The backend is built with a layered architecture consisting of controllers, services, and repositories, and includes database migration files to assist with setup.</p>`,
    stacks: [stacksMap.go, stacksMap.mysql],
    imageUrls: [
      `${imageUrlPrefix}/notefan/notefan.jpg`,
      `${imageUrlPrefix}/notefan/code.png`,
      `${imageUrlPrefix}/notefan/postman.png`,
    ],
    urls: ['https://github.com/arfanxn/Notefan_Golang'],
    startedAt: new Date('2023-02-10'),
    completedAt: new Date('2023-03-18'),
  },
  {
    title: 'Spotifan',
    description: `<p>Spotifan is a non-functional Spotify clone created solely to enhance my UI slicing skills using Swift and SwiftUI. The app replicates Spotify's design with dummy data, focusing on the user interface without any actual backend functionality like music playback or search. The name, Spotifan, is a combination of Spotify and my name, which is Arfan, similar to "PayFan." It includes elements such as the Home, Search, and Your Library sections, all designed with a dark theme for a modern, immersive experience.</p>`,
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
    description: `<p>Arfinance is a cryptocurrency portfolio tracker built with Swift and SwiftUI, featuring a sleek dark theme for an enhanced user experience. It allows users to monitor live prices of various cryptocurrencies, manage their portfolio by adding or removing coins from a watchlist, and view detailed market information for each asset. The app focuses on tracking holdings, offering real-time updates on price fluctuations, market cap, and more, making it a valuable tool for crypto enthusiasts managing their investments.</p>`,
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
    description: `<p>Cashierfan is a POS (Point of Sale) application designed to streamline sales transactions, inventory management, and customer interactions. Developed using HTML, CSS, Tailwind, JavaScript, Vue, Inertia, and Laravel, this application allows cashiers to efficiently process sales, apply discounts, manage stock levels, and generate invoices. With real-time stock updates and detailed transaction records, Cashierfan offers a seamless, user-friendly experience for businesses looking to optimize their point of sale operations.</p>`,
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
    description: `<p>PayFan is a PayPal clone built to provide users with a seamless online payment experience. Designed using HTML, CSS, Bootstrap, JavaScript, Vue, and Laravel, PayFan allows users to send and request payments, manage their accounts, and track activities. The name "PayFan" combines "Pay" (from PayPal) and "Fan" (from my name, Arfan). This project showcases my skills in web development and the creation of financial service applications.</p>`,
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
    description: `<p>A simple yet powerful web application built to manage personal finances. The Fund Manager allows users to track income and expenses, add notes for each transaction, and maintain an organized record. Designed using HTML, CSS, Bootstrap, JavaScript, and Vue, this app provides a clean interface and real-time balance updates. It’s a practical solution for anyone looking to keep track of their finances with ease.</p>`,
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
    description: `<p>A volunteer project where I developed an e-library website for my high school, SMK Harapan Bersama, leveraging the Google Books API to provide a vast collection of e-books. Built with HTML, CSS, Bootstrap, and PHP, the site enables students to easily browse, search, and bookmark their favorite books. As a Computer Engineering student, this project allowed me to contribute to my school's educational resources while enhancing my web development skills.</p>`,
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
    description: `<p>My first portfolio website, designed and built entirely from scratch to showcase my web development skills. Inspired by another designer's portfolio, this project allowed me to apply my knowledge in frontend development. The website includes a clean, modern design, highlighting my skills and it reflects my growth in coding and creative problem-solving. The Tealy theme represents my favorite color during that time.</p>`,
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
    description: `<p>A simple yet effective project created in my early days of programming, designed to enhance logical thinking by implementing basic mathematical operations. Built using HTML, CSS, and JavaScript, this calculator features a clean teal theme—a nod to my favorite color at the time. As one of my first projects, it was a key step in developing my problem-solving skills with interactive UI components like number and operation buttons.</p>`,
    stacks: [stacksMap.html, stacksMap.css, stacksMap.bootstrap, stacksMap.javascript],
    imageUrls: [`${imageUrlPrefix}/tealy-calculator/calculator.jpg`],
    urls: ['https://github.com/arfanxn/TealyCalculator_HCJ'],
    startedAt: new Date('2021-11-05T12:00:00'),
    completedAt: new Date('2021-11-05T17:00:00'),
  },
])
