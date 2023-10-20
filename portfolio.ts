import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Bongani Tshela',
  title: "Hi all, I'm Bongani",
  description:
    "I'm flexible, passionate Full Stack developer having an experience of web applications with Java, .Net, React.js, Angular, Next.js and ERP systems developer",
  resumeLink:
    'https://drive.google.com/file/d/1_we720udHUFZcjlxnmaao91BJUT3SZgt/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'BonganiTshela',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
 // url: 'https://1hanzla100.github.io/',
  linkedin: 'https://www.linkedin.com/in/bongani-tshela-a7bb5111a/',
  github: 'https://github.com/BonganiTshela',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs with the spring framework and .Net Core'),
        emoji('⚡ Building Custom Softwarfe to your specifications (Streamline business processes)'),
      ],
      softwareSkills: [
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Spring Framework',
          iconifyTag: 'logos:spring',
        },
        {
          skillName: 'C-Sharp',
          iconifyTag: 'vscode-icons:file-type-csharp2',
        },
        {
          skillName: 'Cucumber',
          iconifyTag: 'vscode-icons:file-type-cucumber',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          iconifyTag: 'vscode-icons:file-type-light-next',
        },       
        {
          skillName: 'Redux',
          iconifyTag: 'logos:redux',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          iconifyTag: 'logos:aws',
        },
        {
          skillName: 'Azure',
          iconifyTag: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          iconifyTag: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          iconifyTag: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          iconifyTag: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          iconifyTag: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          iconifyTag: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          iconifyTag: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          iconifyTag: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          iconifyTag: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'ERP Systems',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
        ),
        emoji(
          '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
        ),
        emoji(
          '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
        ),
        emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Acumatica',
          iconifyTag: 'logos:acumatica',
        }
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '50', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '60',
  },
  {
    Stack: 'Programming',
    progressPercentage: '60',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'University of Pretoria',
    subHeader: 'Barchelor of Science in Computer Science',
    duration: '2015 - 2018',
    desc: 'With Focus on Full Scack Development',
    grade: 'BSC Computer Science',
    descBullets: [
      
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Full Stack Developer',
    company: 'SSquared',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'July 2019 – March 2021',
    desc: 'I worked as Full Stack Engineer on a Portflio Managment App. ',
    descBullets: [
    	"Collaborated with other developers on designing, developing, testing and implementing new features on a client’s project.",
    	"Worked on a Spring boot based Maven project based on the Netflix microservices architecture (Eureka, Zuul, Spring Admin, Config Sever).",
      "Developed AngularJS code to enhance and add new features on the interface that talks to the microservices using REST API calls.",
      "Wrote MSSQL queries to add new tables, update and resolve the client’s queries on the database.",
      "Using Docker to dockerise the database, using RABBIT MQ, Elasticsearch, Eureka and Config Sever docker images.",
      "Using Hibernate as an Entity Manager.",
      "Using Cucumber for end to end testing and J-Unit for unit testing to test new and existing features and configuring git to run these tests on pull requests and merges.",
      "Rabbit MQ and JMS queue Configuration, implementation and integration.",
      "Designing and implementing SSRS reports that communicate with the MSSQL database.",
      "Design ETL processes to move data from one data source to another.",
      "Using Git for for version control and automated testing, Jenkins for deployments and Jira for Agile scrum methodology."
    ],
  },
  {
    role: 'API Engineer',
    company: 'Brilliant Link | Clound',
    companyLogo: '/img/icons/common/dusecaSoftware.jpg',
    date: 'Nov 2021 – Present',
    desc: 'I worked as API Engineer on a Kale App. Kale is a community platform for the creation of social reviews based on verified transactions. I built Fully Optimized and High Performance RESTful APIs using Django, DjangoRESTFramework, PostgresSQL, JWT Authentication, AWS, Integrated Plaid APIs for Fetching Bank Transactions, Integrated Sentry for monitoring Django Server and deployed the API on Heroku Server.',
    descBullets: [
      "Designing and implementing SSRS reports that communicate with the MSSQL database.",
      "Design ETL processes to move data from one data source to another.",
      "Using Git for for version control and automated testing, Jenkins for deployments and Jira for Agile scrum methodology."
    ],
  }
];

export const projects: ProjectType[] = [
  {
    name: 'developer-portfolio',
    desc: 'Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.',
    github: 'https://github.com/1hanzla100/developer-portfolio',
    link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'AtlasMart',
    desc: 'With Atlas Mart, it’s easy to find the products with the best price and ship them straight to your door.',
    github: 'https://github.com/1hanzla100/Django-React-Marketplace',
  },
  {
    name: 'Technota (Forum)',
    desc: 'Get hands-on experience in technical skills with Technota',
    github: 'https://github.com/1hanzla100/django-react-forum',
  },
  {
    name: 'Shopaza (Ecommerce)',
    desc: 'Now your reach to all your favorite entertainment and luxury items is just one touch apart',
    github: 'https://github.com/1hanzla100/Django-ecommerce',
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
  {
    name: 'John Smith',
    feedback:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = true;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Bongani Tshela',
  description:
    'A passionate Full Stack Web Developer',
  author: 'Bongani Tshela',
  image: 'https://avatars3.githubusercontent.com/u/59178380?v=4',
  url: 'https://developer-portfolio-1hanzla100.vercel.app',
  keywords: [
    'Bongani Tshela',
    'Portfolio',
    'Bongani Tshela ',
    'Bongani Tshela Portfolio',
  ],
};
