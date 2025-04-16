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
      // TODO: add more images
    ],
    urls: [
      'https://github.com/arfanxn/FortifiedWallet_VueJS',
      'https://github.com/arfanxn/FortifiedWallet_FoundrySolidity',
      // TODO: add google docs documentation url
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
    description: description,
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
    description: description,
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
    description: description,
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
    title: 'E - Library',
    description: description,
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
    description: description,
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
    description: description,
    stacks: [stacksMap.html, stacksMap.css, stacksMap.bootstrap, stacksMap.javascript],
    imageUrls: [`${imageUrlPrefix}/tealy-calculator/calculator.jpg`],
    urls: ['https://github.com/arfanxn/TealyCalculator_HCJ'],
    startedAt: new Date('2021-11-05T12:00:00'),
    completedAt: new Date('2021-11-05T17:00:00'),
  },
])
