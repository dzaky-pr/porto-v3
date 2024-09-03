import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: "Dzaky Purnomo Rifa'i",
  initials: 'DPR',
  url: 'https://dzakyrifai.vercel.app/',
  location: 'Surabaya, ID',
  locationLink: 'https://www.google.com/maps/place/surabaya',
  description: 'Frontend Developer aspiring to become a Techpreneur. A lifelong learner committed to making a positive impact on many people.',
  summary:
    "I'm an Information Systems student from Institut Teknologi Sepuluh Nopember with over 2 years of experience in Frontend Web Development and UI/UX Design. I am committed to being a lifelong learner, continuously staying curious and adapting to advancements in technology and business. In addition to web development, I have a strong interest in IT Infrastructure, R&D, and Business Technology. My goal is to leverage this knowledge to create innovative solutions that positively impact people's lives and contribute to the wider community.",
  avatarUrl: '/me.png',
  roles: ['Project Manager', 'Frontend Developer', 'SCRUM Master', 'UI/UX Designer'],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/notes', icon: NotebookIcon, label: 'My Notes' },
  ],
  contact: {
    email: 'dzakyrifai06@gmail.com',
    tel: '+6285780710368',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://dub.sh/github-dzaky',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/linkedin-dzaky',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/x-dzaky',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Youtube',
        url: 'https://dub.sh/youtube-dzaky',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: 'mailto:dzakyrifai06@gmail.com',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'BETA U',
      href: 'https://beta-u.notion.site/Beta-U-Profile-378ed5b4678440b184509cea8eb66140?pvs=74',
      badges: [],
      location: 'Hybrid',
      title: 'Fronted Developer',
      logoUrl: '/betau.png',
      start: 'Jan 2024',
      end: 'Present',
      description:
        'BETA U is a dynamic Software House specializing in transforming ideas into Minimum Viable Products (MVPs) swiftly and creatively. With a keen understanding of project intricacies, BETA U collaborates closely with clients to bring their visions to life. I contributed to projects like EMABROR and JadiAktuaris, working alongside teams comprising frontend, backend, SCRUM master, and UI/UX specialists. Leveraging React framework Nextjs and Tailwind CSS, I ensured seamless integration using react hook form and @tanstack/react-query for efficient project execution and delivery.',
    },
    {
      company: 'Raih Asa',
      href: 'https://raihasa.id/',
      badges: [],
      location: 'Hybrid',
      title: 'Lead Fronted Developer',
      logoUrl: '/raihasa.png',
      start: 'Nov 2023',
      end: 'Apr 2024',
      description:
        'Lead front-end developer at Raih Asa, responsible for verifying the deployability of sliced web designs from Figma across all key pages, including landing, mentor, scholarship, login, registration, programs (with sub-pages), checkout, and payment pages. Integrating user and admin dashboards, scholarship information, and checkout/payment pages using @tanstack/react-query, Zustand for state management, and Zod for TypeScript schema validation. Refactored authentication logic using a high-order component to reduce API calls, alongside optimizing the Navbar component for improved performance.',
    },
  ],
  education: [
    {
      school: 'Sepuluh Nopember Institute of Technology',
      href: 'https://www.its.ac.id/',
      degree: "Bachelor's Degree of Information System (S. Kom.)",
      logoUrl: '/its.png',
      start: '2022',
      end: '2026',
    },
    {
      school: 'SMAN 68 Jakarta',
      href: 'https://sman68-jkt.sch.id/',
      degree: 'High School',
      logoUrl: '/sman68jkt.png',
      start: '2019',
      end: '2022',
    },
  ],
  projects: [
    {
      title: 'ISE (Information System Expo)',
      href: 'https://www.ise-its.com/',
      dates: 'May 2024 - Present',
      active: true,
      description:
        "Responsible for providing technical leadership by guiding the development team's decisions, designing scalable architecture, overseeing code quality through reviews, budgeting and maintenance for website development, fostering collaboration across teams, staying updated with industry trends, and troubleshooting technical issues.",
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Next UI', 'Sentry', 'Google Analytics', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://www.ise-its.com/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Learning Management System',
          href: 'https://moodle.org/',
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: '/ise-banner.png',
      video: '',
    },
    {
      title: 'JadiAktuaris',
      href: 'https://jadiaktuaris.com/',
      dates: 'Jun 2024 - Aug 2024',
      active: true,
      description:
        'My team and I developed JadiAktuaris, a one-stop solution platform for aspiring actuaries aiming to succeed in the PAI exams and earn certifications. The platform includes features such as tryouts and a user dashboard where users can register for webinars or tryouts, with the help of [Moodle](https://moodle.org/) to facilitate these objectives',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Moodle', 'Google OAuth', 'Vercel'],
      links: [
        {
          type: 'Progressive Web App',
          href: 'https://jadiaktuaris.com/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Learning Management System',
          href: 'https://moodle.org/',
          icon: <NotebookIcon className="size-3" />,
        },
      ],
      image: '/jadiaktuaris-banner.png',
      video: '',
    },

    {
      title: 'FUTUREST (Future Energy Summit)',
      href: 'https://frontend-futurest2024.vercel.app/',
      dates: 'Mar 2024 - Jun 2024',
      active: true,
      description:
        "The Biggest National Renewable Energy Events and Competitions by the Society of Renewable Energy ITS. Stands as Indonesia's grand stage for renewable energy, orchestrated by SRE ITS, igniting students passion across the nation to pioneer energy transformation through innovative exploration and strategic implementation.",
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Moodle', 'Google OAuth', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://frontend-futurest2024.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/futurest-banner.png',
      video: '',
    },
    {
      title: 'PETROLIDA (Petroleum Integrated Days)',
      href: 'https://www.petrolida.com/',
      dates: 'Aug 2023 - May 2024',
      active: true,
      description:
        "Responsible for providing technical leadership by guiding the development team's decisions, designing scalable architecture, overseeing code quality through reviews, budgeting and maintenance for website development, fostering collaboration across teams, staying updated with industry trends, and troubleshooting technical issues.",
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI', 'Moodle', 'Google OAuth', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://www.petrolida.com/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/petrolida-banner.png',
      video: '',
    },
    {
      title: 'Raih Asa',
      href: 'https://raihasa.id/',
      dates: 'Nov 2023 - Apr 2024',
      active: true,
      description:
        'As the lead front-end developer at Raih Asa, I oversee front-end operations, ensuring seamless deployment of web designs from Figma to various pages. I integrate user and admin dashboards, and scholarship info using tanstack react-query and Zustand for state management in React, while optimizing authentication logic and Navbar flow for improved website performance.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Headless UI', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://raihasa.id/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/raihasa-banner.png',
      video: '',
    },

    {
      title: 'Ini Lho ITS',
      href: 'https://inilho.its.ac.id/',
      dates: 'Oct 2023 - Feb 2024',
      active: true,
      description:
        'I supported the front-end team by slicing key pages from Figma, integrating registration and forgot-password pages using @tanstack/react-query and react-hook-form, and collaborating on the my-events page. I also refactored authentication and form components to improve performance.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Headless UI', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://inilho.its.ac.id/',
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: '/inilhoits-banner.png',
      video: '',
    },
  ],
  notes: [
    {
      type: 'header',
      text: 'Sepuluh Nopember Institute of Technology',
      links: [
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/Euj8yNKEd4JFmt-ktrrKMm0BIggxPAXz7IK9YOvv8w_sAw?e=hE8vDS', text: 'ES234418 - Desain Pengalaman Pengguna' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/EmJBjlycX49Nq6im0oq32fYBmqZ3xTwH1QAJw_V6OSl3sQ?e=ecXZTs', text: 'ES234419 - Data Lakehouse' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/EnM_M3JtMo9JrGxPzDYbVjAB5_lbo7ZvapG_2OH6qM60tw?e=FgadVZ', text: 'ES234421 - Etika TI' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/Et8KtiQO27JIlH6peCs35AoBjnqqVkOjT82JNsBn_3Sv6w?e=KeAdV5', text: 'ES234423 - Manajemen Risiko TI' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/Em7Nc9rWpzdBrJdoJTnmokEBu9AESoUSfWEMXJ_EZBTEKQ?e=GbO4JK', text: 'ES234527 - Teknologi Berkembang' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/EuJnUDNtDdZIny8cIkgNRUgBvFBPSCYVQ-G3hCSynq6z5A?e=XXz9Om', text: 'ES234528 - Manajemen Layanan TI' },
        { href: 'https://itsacid-my.sharepoint.com/:f:/g/personal/5026221085_student_its_ac_id/EgBFb3jXe_RFtOroahzILvQBnhToNPImAKzaHKe1taxwUw?e=FgFPUp', text: 'ES234529 - Perencanaan Strategis SI/TI' },
      ],
    },
    // {
    //   type: 'header',
    //   text: 'SMAN 68 Jakarta',
    //   links: [
    //     { href: 'www.google.com', text: 'CS - 2024 KOKOKO' },
    //     { href: 'www.google.com', text: 'CS - 2024 KOKOKO' },
    //     { href: 'www.google.com', text: 'CS - 2024 KOKOKO' },
    //     { href: 'www.google.com', text: 'CS - 2024 KOKOKO' },
    //   ],
    // },
  ],
  // hackathons: [
  //   {
  //     title: 'Hack Western 5',
  //     dates: 'November 23rd - 25th, 2018',
  //     location: 'London, Ontario',
  //     description: 'Developed a mobile application which delivered bedtime stories to children using augmented reality.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 14th - 16th, 2018',
  //     location: 'Waterloo, Ontario',
  //     description: 'Developed a mobile application which delivers university campus wide events in real time to all students.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg',
  //     links: [],
  //   },
  //   {
  //     title: 'FirstNet Public Safety Hackathon',
  //     dates: 'March 23rd - 24th, 2018',
  //     location: 'San Francisco, California',
  //     description: 'Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.',
  //     icon: 'public',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png',
  //     links: [],
  //   },
  //   {
  //     title: 'DeveloperWeek Hackathon',
  //     dates: 'February 3rd - 4th, 2018',
  //     location: 'San Francisco, California',
  //     description: 'Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg',
  //     links: [
  //       {
  //         title: 'Github',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/cryptotrends/cryptotrends',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'HackDavis',
  //     dates: 'January 20th - 21st, 2018',
  //     location: 'Davis, California',
  //     description: 'Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png',
  //     win: 'Best Data Hack',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/my6footprint',
  //       },
  //       {
  //         title: 'ML',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/my6footprint-machine-learning',
  //       },
  //       {
  //         title: 'iOS',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/CarbonWallet',
  //       },
  //       {
  //         title: 'Server',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/Wallet6/wallet6-server',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'ETH Waterloo',
  //     dates: 'October 13th - 15th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description: 'Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png',
  //     links: [
  //       {
  //         title: 'Organization',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/ethdocnet',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Hack The North',
  //     dates: 'September 15th - 17th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description: 'Developed a virtual reality application allowing users to see themselves in third person.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Streamer Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/justinmichaud/htn2017',
  //       },
  //       {
  //         title: 'Client Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/RTSPClient',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Hack The 6ix',
  //     dates: 'August 26th - 27th, 2017',
  //     location: 'Toronto, Ontario',
  //     description: 'Developed an open platform for people shipping items to same place to combine shipping costs and save money.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/ShareShip/ShareShip',
  //       },
  //       {
  //         title: 'Site',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://share-ship.herokuapp.com/',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Stupid Hack Toronto',
  //     dates: 'July 23rd, 2017',
  //     location: 'Toronto, Ontario',
  //     description: 'Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/nsagirlfriend/nsagirlfriend',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Global AI Hackathon - Toronto',
  //     dates: 'June 23rd - 25th, 2017',
  //     location: 'Toronto, Ontario',
  //     description:
  //       'Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Article',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/TinySamosas/',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'McGill AI for Social Innovation Hackathon',
  //     dates: 'June 17th - 18th, 2017',
  //     location: 'Montreal, Quebec',
  //     description: 'Developed realtime facial microexpression analyzer using AI',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg',
  //     links: [],
  //   },
  //   {
  //     title: 'Open Source Circular Economy Days Hackathon',
  //     dates: 'June 10th, 2017',
  //     location: 'Toronto, Ontario',
  //     description: "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg',
  //     win: '1st Place Winner',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/genecis',
  //       },
  //     ],
  //   },
  //   {
  //     title: "Make School's Student App Competition 2017",
  //     dates: 'May 19th - 21st, 2017',
  //     location: 'International',
  //     description: 'Improved PocketDoc and submitted to online competition',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
  //     win: 'Top 10 Finalist | Honourable Mention',
  //     links: [
  //       {
  //         title: 'Medium Article',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
  //       },
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native',
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'HackMining',
  //     dates: 'May 12th - 14th, 2017',
  //     location: 'Toronto, Ontario',
  //     description: 'Developed neural network to optimize a mining process',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png',
  //     links: [],
  //   },
  //   {
  //     title: 'Waterloo Equithon',
  //     dates: 'May 5th - 7th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description: 'Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png',
  //     links: [
  //       {
  //         title: 'Devpost',
  //         icon: <Icons.globe className="h-4 w-4" />,
  //         href: 'https://devpost.com/software/pocketdoc-react-native',
  //       },
  //       {
  //         title: 'YouTube',
  //         icon: <Icons.youtube className="h-4 w-4" />,
  //         href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
  //       },
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/pocketdoc-react-native',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'SpaceApps Waterloo',
  //     dates: 'April 28th - 30th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/earthwatch',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'MHacks 9',
  //     dates: 'March 24th - 26th, 2017',
  //     location: 'Ann Arbor, Michigan',
  //     description: 'Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/threejs-planes',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'StartHacks I',
  //     dates: 'March 4th - 5th, 2017',
  //     location: 'Waterloo, Ontario',
  //     description:
  //       'Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png',
  //     win: '1st Place Winner',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/recipic-ionic',
  //       },
  //       {
  //         title: 'Source (Server)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/recipic-rails',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'QHacks II',
  //     dates: 'February 3rd - 5th, 2017',
  //     location: 'Kingston, Ontario',
  //     description: 'Developed a mobile game which enables city-wide manhunt with random lobbies',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png',
  //     mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
  //     links: [
  //       {
  //         title: 'Source (Mobile)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/dillionverma/human-huntr-react-native',
  //       },
  //       {
  //         title: 'Source (API)',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/mattBlackDesign/human-huntr-rails',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Terrible Hacks V',
  //     dates: 'November 26th, 2016',
  //     location: 'Waterloo, Ontario',
  //     description: 'Developed a mock of Windows 11 with interesting notifications and functionality',
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/justinmichaud/TerribleHacks2016-Windows11',
  //       },
  //     ],
  //   },
  //   {
  //     title: 'Portal Hackathon',
  //     dates: 'October 29, 2016',
  //     location: 'Kingston, Ontario',
  //     description: "Developed an internal widget for uploading assignments using Waterloo's portal app",
  //     image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png',
  //     links: [
  //       {
  //         title: 'Source',
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: 'https://github.com/UWPortalSDK/crowmark',
  //       },
  //     ],
  //   },
  // ],
} as const;
