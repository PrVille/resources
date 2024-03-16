import { Resource } from "../types/global"

const resources: Resource[] = [
  {
    title: "ChatGPT",
    description:
      "An advanced AI chatbot developed by OpenAI, capable of understanding and generating human-like text based on the input provided.",
    url: "https://chat.openai.com/",
    categories: ["AI and Machine Learning"],
  },
  {
    title: "Midjourney",
    description:
      "Midjourney is a generative AI that can convert natural language prompts into images",
    url: "https://www.midjourney.com/home",
    categories: ["AI and Machine Learning"],
  },
  {
    title: "Gemini",
    description:
      "Gemini AI is Google's powerful multimodal artificial intelligence model capable of understanding text, images, videos, and audio, enabling it to complete complex tasks and generate high-quality code in multiple programming languages.",
    url: "https://gemini.google.com/app",
    categories: ["AI and Machine Learning"],
  },
  {
    title: "Microsoft Copilot",
    description:
      "Microsoft Copilot is a chatbot developed by Microsoft. Based on a large language model, it is able to cite sources, create poems, and write songs.",
    url: "https://copilot.microsoft.com/",
    categories: ["AI and Machine Learning"],
  },
  {
    title: "Perplexity AI",
    description:
      "Perplexity AI is a conversational search engine marketed as an 'answer engine' that provides answers using natural language predictive text. It was launched in 2022 and offers real-time web searches and the most current information on various subjects.",
    url: "https://www.perplexity.ai",
    categories: ["AI and Machine Learning"],
  },
  {
    title: "Animista",
    description:
      "A web-based tool that allows users to easily generate CSS animations with customizable parameters.",
    url: "https://animista.net/",
    categories: [
      "Animation",
      "Development Tools and Extensions",
      "Design and UI",
    ],
  },
  {
    title: "API Ninjas",
    description:
      "API Ninjas is a company that provides API consulting, development, and integration services to businesses and organizations. They offer over 80 APIs, including weather, geocoding, and recipe APIs, with a single API key for access. The company focuses on quality, using trusted data sources and advanced algorithms, and provides quick support for users. API Ninjas also offers training and consulting services to optimize businesses' API strategies and operations.",
    url: "https://api-ninjas.com",
    categories: ["APIs and Data"],
  },
  {
    title: "RapidAPI",
    description:
      "RapidAPI is the world's largest API Hub, offering a platform for developers to discover, connect to, and share APIs. With over 40,000 APIs available, developers can design, develop, test, monitor, and publish APIs in a fully-featured client experience. RapidAPI provides a seamless experience for consuming APIs, managing applications and subscriptions, and creating an open and secure ecosystem for sharing APIs and data.",
    url: "https://rapidapi.com",
    categories: ["APIs and Data"],
  },
  {
    title: "Zapier",
    description:
      "Zapier is an automation platform that provides integrations for web applications, allowing users to automate workflows and tasks without coding.",
    url: "https://zapier.com",
    categories: ["APIs and Data"],
  },
  {
    title: "Neon",
    description:
      "Neon is a serverless, fault-tolerant, and branchable PostgreSQL database service designed to maximize engineering velocity and minimize costs. It features autoscaling capabilities that prevent over-provisioning and reduce the need for under-utilized instances, ultimately lowering compute and storage expenses. Neon allows for seamless integration into any application and offers a partnership program for companies to collaborate and integrate Neon into their services. Some of the partners include Hasura, Replit, Cloudflare, Vercel, Koyeb, and WunderGraph.",
    url: "https://neon.tech",
    categories: ["Cloud Services and Infrastructure"],
  },
  {
    title: "PlanetScale",
    description:
      "PlanetScale is a MySQL database platform that offers security, scalability, and ease of use. It is built on Vitess, an open-source database technology, and is designed for continuous integration and deployment. PlanetScale provides SOC 2 Type II reporting, PCI DSS compliance, and Business Associate Agreements for customers on Single-tenant environments. The platform offers a load balancer and infrastructure features, ensuring high reliability and resilience with 99.95% uptime SLAs.",
    url: "https://planetscale.com",
    categories: [
      "Cloud Services and Infrastructure",
      "Development Tools and Extensions",
    ],
  },
  {
    title: "CSS Grid Cheat Sheet",
    description: "A reference for CSS Grid layout.",
    url: "https://grid.malven.co/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "CSS Flexbox Cheat Sheet",
    description: "A reference for CSS Flexbox layout.",
    url: "https://flexbox.malven.co/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "Emmet Cheat Sheet",
    description:
      "A cheat sheet for Emmet, a plugin for many popular text editors which greatly improves HTML & CSS workflow.",
    url: "https://docs.emmet.io/cheat-sheet/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "Easing Functions Cheat Sheet",
    description: "A comprehensive guide to CSS easing functions.",
    url: "https://easings.net/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "Emoji Cheat Sheet",
    description:
      "A comprehensive guide to emoji codes and shortcuts, facilitating easy integration of emojis in coding and communication platforms.",
    url: "https://www.webfx.com/tools/emoji-cheat-sheet/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "30 Seconds of Code",
    description:
      "Provides concise code snippets for a wide range of programming languages and technologies, aimed at helping developers learn and solve problems quickly.",
    url: "https://www.30secondsofcode.org/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "Code to go",
    description: "Find up to date snippets for JavaScript & React use cases",
    url: "https://codetogo.io/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "React TypeScript Cheatsheets",
    description:
      "Cheatsheets for experienced React developers getting started with TypeScript",
    url: "https://react-typescript-cheatsheet.netlify.app/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "MongoDB Cheat Sheet",
    description:
      "A cheat sheet filled with handy tips, commands, and quick references for MongoDB users to get connected and start CRUD operations quickly.",
    url: "https://www.mongodb.com/developer/products/mongodb/cheat-sheet/",
    categories: ["Code Snippets and Cheatsheets"],
  },
  {
    title: "Codewars",
    description:
      "A platform for coding challenges and exercises across a variety of programming languages.",
    url: "https://www.codewars.com/",
    categories: ["Coding Practice and Challenges"],
  },
  {
    title: "Coding Challenges",
    description:
      "A compilation of coding challenges and exercises to improve your coding skills.",
    url: "https://codingchallenges.fyi/",
    categories: ["Coding Practice and Challenges"],
  },
  {
    title: "JavaScript Katas",
    description:
      "A platform for practicing JavaScript coding skills with katas.",
    url: "https://jskatas.org/",
    categories: ["Coding Practice and Challenges"],
  },
  {
    title: "Frontend Mentor",
    description:
      "Real-world HTML, CSS, and JavaScript challenges alongside professional front-end projects.",
    url: "https://www.frontendmentor.io/",
    categories: ["Coding Practice and Challenges"],
  },
  {
    title: "CSES Problem Set",
    description:
      "The CSES Problem Set contains a collection of algorithm programming practice problems.",
    url: "https://cses.fi/problemset/",
    categories: ["Coding Practice and Challenges"],
  },
  {
    title: "engineering-blogs",
    description:
      "A curated list of engineering blogs of tech companies and startups, providing insights into engineering culture, practices, and projects.",
    url: "https://github.com/kilimchoi/engineering-blogs",
    categories: ["Community"],
  },
  {
    title: "Behance",
    description:
      "Behance is a platform where users can showcase and discover creative work across various fields like design, fashion, illustration, photography, and more. It is part of the Adobe Family and allows creatives to share their projects, get feedback, watch livestreams, and connect with other members.",
    url: "https://www.behance.net",
    categories: ["Community"],
  },
  {
    title: "Dribbble",
    description:
      "Dribbble is a leading online platform that serves as a community for creatives to share their design work, grow their skills, and find job opportunities. It is a hub for designers, illustrators, artists, and other creative professionals to showcase their portfolios and connect with like-minded individuals.",
    url: "https://dribbble.com",
    categories: ["Community"],
  },
  {
    title: "Getting Into Information Security",
    description:
      "A guide for those interested in entering the field of information security, covering fundamentals, career paths, and resources.",
    url: "https://shellsharks.com/getting-into-information-security#title",
    categories: ["Cybersecurity and Privacy"],
  },
  {
    title: "landin'page.fyi",
    description:
      "A comprehensive guide to creating effective and visually appealing landing pages, offering templates, design tips, and best practices.",
    url: "https://landingpage.fyi/",
    categories: ["Design and UI"],
  },
  {
    title: "HTMLrev",
    description:
      "An online platform providing a vast collection of HTML templates, tips, and tools to enhance web development projects.",
    url: "https://htmlrev.com/",
    categories: ["Design and UI"],
  },
  {
    title: "Cubic Bezier",
    description: "A tool for generating cubic-bezier curves.",
    url: "https://cubic-bezier.com/",
    categories: ["Design and UI"],
  },
  {
    title: "Responsively App",
    description:
      "A desktop application that aids in developing responsive web designs by allowing simultaneous viewing of multiple screen sizes.",
    url: "https://responsively.app/",
    categories: ["Design and UI"],
  },
  {
    title: "SaaS Landing Page",
    description:
      "Discover the best 780 landing page examples created by top-class SaaS companies and get ideas and inspiration for your next design project.",
    url: "https://saaslandingpage.com/",
    categories: ["Design and UI"],
  },
  {
    title: "The FWA",
    description:
      "The FWA is a website that showcases awards, news, live judging, and recently launched a new website.",
    url: "https://thefwa.com",
    categories: ["Design and UI"],
  },
  {
    title: "Awwwards",
    description:
      "Awwwards is a platform that showcases website awards, best web design trends, and features news and updates in the digital design world.",
    url: "https://www.awwwards.com",
    categories: ["Design and UI"],
  },
  {
    title: "Tailwind Awesome",
    description:
      "Tailwind Awesome is a curated list of the best Tailwind templates & UI kits on the internet. It provides resources for developers to access high-quality Tailwind CSS templates and UI kits, offering a variety of design options to enhance web projects.",
    url: "https://www.tailwindawesome.com",
    categories: ["Design and UI"],
  },
  {
    title: "Tailwind UI",
    description:
      "Tailwind UI is a collection of beautifully designed, fully responsive UI components created by the makers of Tailwind CSS. It offers over 500 professionally crafted component examples that can be easily customized and integrated into Tailwind projects, providing a solid foundation for building visually appealing and responsive web applications.",
    url: "https://tailwindui.com",
    categories: ["Design and UI"],
  },
  {
    title: "Haikei App",
    description:
      "Haikei is a web app that allows users to generate unique SVG design assets for various design needs. It offers a range of generators to create stunning visual content, including blobs, waves, grids, gradients, and more, without the need for signups or credit cards.",
    url: "https://app.haikei.app/",
    categories: ["Design and UI"],
  },
  {
    title: "Online Pixel Ruler",
    description:
      "An online tool that allows users to measure the distance on the screen in pixels. Users can capture the screen or window, paste it into the page, and click on two pixels to get the length. The tool is available on various platforms, including Windows, Mac, and Android.",
    url: "https://www.rapidtables.com/web/tools/pixel-ruler.html",
    categories: ["Design and UI"],
  },
  {
    title: "Shape Divider App",
    description:
      "Shape Divider App is a tool that allows users to generate custom shape dividers for their websites. It offers a range of shapes and options to create unique designs. However, it requires JavaScript to function properly. The app can be used with Shopify by following specific instructions, such as installing a custom CSS app and replacing class names with the shopify-section-id.",
    url: "https://www.shapedivider.app/",
    categories: ["Design and UI"],
  },
  {
    title: "Coolors.co",
    description:
      "Coolors.co is a web application that allows users to generate color palettes quickly and easily. It offers various features such as starting the generator, selecting colors from an image, and locking colors to find complementary shades. The app also provides a search feature to find color palettes based on specific keywords. To use the app, users can simply press the spacebar to generate random color palettes or upload an image to extract colors from it. Coolors.co is a useful tool for designers looking to create color schemes for their projects.",
    url: "https://coolors.co/",
    categories: ["Design and UI"],
  },
  {
    title: "vscode-styled-components",
    description:
      "Visual Studio Code extension for syntax highlighting of styled components.",
    url: "https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "VS Code Pets",
    description:
      "An enjoyable VS Code extension that adds pets in your code workspace for a fun coding environment.",
    url: "https://marketplace.visualstudio.com/items?itemName=tonybaloney.vscode-pets",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Reset CSS",
    description: "A CSS reset stylesheet to reduce browser inconsistencies.",
    url: "https://meyerweb.com/eric/tools/css/reset/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "IT-Tools",
    description:
      "A curated collection of IT and networking tools, including calculators, converters, and troubleshooting utilities for professionals.",
    url: "https://it-tools.tech/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "PX to REM converter",
    description: "This calculator converts pixels to the CSS unit REM.",
    url: "https://nekocalc.com/px-to-rem-converter",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Color Picker",
    description: "Pick your color online.",
    url: "https://imagecolorpicker.com/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Vite",
    description:
      "Vite is a next-generation frontend tooling that offers on-demand file serving over native ESM without the need for bundling. It features Hot Module Replacement (HMR), out-of-the-box support for TypeScript, JSX, CSS, and more, as well as a pre-configured Rollup build with multi-page and library mode support. Vite provides flexible programmatic APIs with full TypeScript typing.",
    url: "https://vitejs.dev",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Cloudinary",
    description:
      "Cloudinary is a SaaS technology company that provides cloud-based image and video management services. It enables users to upload, store, manage, manipulate, and deliver images and videos for websites and apps. The company offers a powerful media API for efficient asset management, transformation, optimization, and delivery through multiple CDNs.",
    url: "https://cloudinary.com",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Prisma",
    description:
      "Prisma is an open-source Node.js and TypeScript ORM that simplifies working with databases by providing an intuitive data model, automated migrations, type-safety, and auto-completion. It offers products like Prisma Accelerate for global database caching and scalable connection pooling, as well as Prisma Pulse for building real-time applications with reactive data changes. Prisma allows developers to easily model data, run schema migrations, and optimize database queries for peak performance.",
    url: "https://www.prisma.io",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Timescale",
    description:
      "TimescaleDB is an open-source time-series SQL database designed to make SQL scalable for time-series data. It is built on PostgreSQL and offers features like automatic partitioning across time and space, full SQL support, and a managed cloud offering called Timescale Cloud. TimescaleDB is known for its core technical innovations, including hypertables and compression, making it suitable for fast analytics, scalability, and automated data management.",
    url: "https://www.timescale.com",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Sequelize",
    description:
      "Sequelize is an easy-to-use and promise-based Node.js ORM tool for Postgres, MySQL, MariaDB, SQLite, DB2, Microsoft SQL Server, and Snowflake. It offers solid transaction support, relations, eager and lazy loading, read replication, and more. Sequelize simplifies working with databases by providing an intuitive data model, automated migrations, type-safety, and auto-completion. It also supports automatic database synchronization, data modeling, and associations between models. Sequelize is suitable for fast analytics, scalability, and automated data management.",
    url: "https://sequelize.org",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "MongoDB",
    description:
      "MongoDB is a source-available, cross-platform, document-oriented database program that utilizes JSON-like documents with optional schemas. It is classified as a NoSQL database product and is developed by MongoDB Inc. MongoDB offers features like high-volume data storage, ad-hoc queries, indexing, load balancing, aggregation, and server-side JavaScript execution. It supports multiple programming languages and frameworks, providing an alternative to traditional relational databases.",
    url: "https://www.mongodb.com",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Firebase",
    description:
      "Firebase is an app development platform by Google that helps in building and growing apps and games, trusted by millions of businesses worldwide.",
    url: "https://firebase.google.com/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Auth0",
    description:
      "Auth0 provides documentation for building and implementing authentication and authorization solutions, including customizing Auth0, adding multi-factor authentication, and troubleshooting challenges. The documentation covers various frameworks and languages, and includes guides for backend/API, mobile, single-page app, and regular web app development.",
    url: "https://auth0.com/docs",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Zeplo",
    description:
      "Zeplo is a message queue as a service, powered by HTTPS. It offers a simple and fast setup, taking only 5 minutes to set up compared to SQS which can take a month. Zeplo is useful for communicating with third-party APIs and provides a more user-friendly experience. It has been used for tasks such as writing screenshot services for member directories.",
    url: "https://zeplo.io/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Vercel",
    description:
      "Vercel is a platform that offers quickstart templates for deploying AI apps, optimized compute for globally performant apps, zero-config streaming for better user experiences, and more. It provides features like Git-connected deploys, collaborative pre-production, and infrastructure designed to automatically mitigate DDoS attacks and protect information.",
    url: "https://vercel.com/home",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "Faker",
    description:
      "Faker is a package that generates massive amounts of fake (but realistic) data for testing and development. It can generate prices, product names, adjectives, and descriptions. It can also create stubbed out account details, transactions, and crypto addresses. Faker can generate valid addresses, zip codes, street names, states, and countries. It allows you to pick a locale to generate realistic looking names, addresses, and phone numbers.",
    url: "https://fakerjs.dev",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "DevDocs",
    description:
      "An extensive API documentation browser with a fast, organized, and searchable interface.",
    url: "https://devdocs.io/",
    categories: ["Documentation and Reference"],
  },
  {
    title: "WCAG Compliance Checklist",
    description:
      "The A11Y Project Checklist provides specific, testable rules based on the Web Content Accessibility Guidelines (WCAG) to improve website accessibility. While it does not guarantee full accessibility, addressing the issues outlined in the checklist can enhance the user experience for all visitors.",
    url: "https://www.a11yproject.com/checklist/",
    categories: ["Documentation and Reference"],
  },
  {
    title: "@gsap/react for using GSAP in React",
    description:
      "A React wrapper for GreenSock Animation Platform (GSAP), enabling high-performance animations in React applications.",
    url: "https://github.com/greensock/react",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "styled-components",
    description: "A CSS-in-JS styling framework for React applications.",
    url: "https://styled-components.com/",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "React Hook Form",
    description:
      "Performant, flexible and extensible forms with easy-to-use validation.",
    url: "https://react-hook-form.com/",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapid UI development. It provides a set of pre-designed utility classes that enable efficient styling without writing custom CSS, promoting consistency and scalability. It is designed to streamline web development and facilitate the creation of responsive and visually appealing interfaces with minimal effort.",
    url: "https://tailwindcss.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "Headless UI",
    description:
      "Headless UI is a library that provides completely unstyled, fully accessible UI components designed to integrate seamlessly with Tailwind CSS. It offers a range of components like Menu (Dropdown), Listbox (Select), Combobox (Autocomplete), Switch (Toggle), Disclosure, Dialog (Modal), Popover, Radio Group, Tabs, and Transition. The library focuses on modularity, accessibility, and customization, making it a valuable resource for developers looking to create accessible and visually appealing user interfaces.",
    url: "https://headlessui.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "Material Tailwind",
    description:
      "Material Tailwind is an open-source library that combines the power of Tailwind CSS and React to help developers build unique web projects faster and easier. It features stunning designs inspired by Material Design and provides over 460 ready-to-use Tailwind CSS components, such as buttons, inputs, cards, tables, and more. Material Tailwind is available for React, HTML, Angular, and Vue.js, and it comes with seamless integrations for popular tools like Next.js, Create React App, Remix, Vite, and Gatsby. It also offers a premium version called Material Tailwind PRO for enhanced features and components.",
    url: "https://www.material-tailwind.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "HyperUI",
    description:
      "HyperUI is a collection of free Tailwind CSS components that can be utilized in various projects, including marketing websites, admin dashboards, eCommerce stores, and more. It offers a wide range of components like alerts, badges, breadcrumbs, buttons, checkboxes, and many others. Developers can easily integrate these components into their projects by copying the code from the HyperUI website. Some components also support dark mode and Alpine JS variants.",
    url: "https://www.hyperui.dev",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "React Hook Form",
    description:
      "React Hook Form is a library that simplifies form handling in React applications. It offers a performant, flexible, and extensible solution for building forms with React Hooks. It embraces native HTML form validation, integrates with various UI libraries, and supports popular validation libraries like Yup, Zod, AJV, Superstruct, and Joi. React Hook Form is designed with performance, UX, and DX in mind, and it minimizes the number of re-renders, validate computation, and mounting time. It provides a simple API for registering form fields, handling form submission, and managing form state. React Hook Form is the winner of the 2020 GitNation React OS Award for the category of Productivity Booster.",
    url: "https://react-hook-form.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "DND Kit",
    description:
      "DND Kit is a modern drag and drop toolkit for React, designed to be lightweight and customizable. It has no external dependencies and weighs around 10kb. The library offers performant interactions and animations, even on mobile devices, and allows for customization of every detail, including animations, transitions, behaviors, constraints, and styles. DND Kit is awaiting further improvements, such as more granular control on draggable and droppable features, and is being considered for adoption in other ecosystems like Vue.js. The library also focuses on accessibility and performance, with improvements being made to both aspects.",
    url: "https://dndkit.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "React Suite",
    description:
      "React Suite is a set of React component libraries designed for enterprise system products. It offers a well-thought-out and developer-friendly UI framework, supporting the latest, stable releases of all major browsers and platforms. It is available as an npm package and supports server-side rendering with Next.js. React Suite is designed for use on modern desktop browsers and supports TypeScript, Electron, and Reason. It is MIT licensed and has a community-driven development process.",
    url: "https://rsuitejs.com",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "Express-Validator",
    description:
      "Express-validator is a set of express.js middlewares that provide validators and sanitizers for validating and sanitizing express requests. It offers various tools to validate requests and determine their validity.",
    url: "https://express-validator.github.io/docs",
    categories: ["Frameworks and Libraries"],
  },
  {
    title: "Icons",
    description:
      "A library of free vector icons for personal and commercial use.",
    url: "https://icons8.com/icons",
    categories: ["Icons and Images"],
  },
  {
    title: "SVG Repo",
    description:
      "A vast collection of free, downloadable SVG icons and graphics, suitable for web and graphic design projects.",
    url: "https://www.svgrepo.com/",
    categories: ["Icons and Images"],
  },
  {
    title: "Placehold",
    description: "A quick and simple image placeholder service.",
    url: "https://placehold.co/",
    categories: ["Icons and Images"],
  },
  {
    title: "Iconfinder",
    description:
      "Millions of graphics for your design projects. Created by independent designers.",
    url: "https://www.iconfinder.com/",
    categories: ["Icons and Images"],
  },
  {
    title: "React Icons",
    description:
      "React Icons is a library that provides a simple way to include popular icons in React projects. It offers a variety of icon packs such as Ant Design Icons, Bootstrap Icons, BoxIcons, Circum Icons, css.gg, Devicons, Feather, Flat Color Icons, Font Awesome 5 and 6, Game Icons, Github Octicons, Grommet-Icons, Heroicons, IcoMoon Free, Icons8 Line Awesome, Ionicons 4 and 5, Lucide, Material Design icons, Phosphor Icons, Radix Icons, Remix Icon, Simple Icons, Simple Line Icons, Tabler Icons, Themify Icons, Typicons, VS Code Icons, and Weather Icons. Developers can easily import icons from these packs using ES6 imports and only include the icons their project needs.",
    url: "https://react-icons.github.io/react-icons/",
    categories: ["Icons and Images"],
  },
  {
    title: "Simple Icons",
    description:
      "Simple Icons provides over 3000 free SVG icons for popular brands, available for download and use. Users can access the icons directly from the website or through a CDN service.",
    url: "https://simpleicons.org",
    categories: ["Icons and Images"],
  },
  {
    title: "Heroicons",
    description:
      "Heroicons is a collection of free SVG icons designed for web and app development. The icons are available for download on the website and are Tailwind CSS-ready, making them easy to integrate into projects. The collection includes over 220 icons in medium and small sizes, suitable for various use cases.",
    url: "https://heroicons.com",
    categories: ["Icons and Images"],
  },
  {
    title: "HTML Arrows - Toptal Designers",
    description:
      "Toptal Designers provides a comprehensive list of HTML arrow symbols, entities, characters, and codes with ASCII, HEX, CSS, and Unicode values. The collection includes various arrow styles like right arrow, left arrow, up arrow, down arrow, and more.",
    url: "https://www.toptal.com/designers/htmlarrows/",
    categories: ["Icons and Images"],
  },
  {
    title: "30 Seconds of Interviews",
    description:
      "A collection of common interview questions and answers for front-end development.",
    url: "https://30secondsofinterviews.org/",
    categories: ["Interview and Career"],
  },
  {
    title: "Tech Interview Handbook",
    description:
      "A comprehensive guide to tech interviews, offering preparation tips, coding practice questions, and interview strategies.",
    url: "https://www.techinterviewhandbook.org/",
    categories: ["Interview and Career"],
  },
  {
    title: "Front End Interview Handbook",
    description:
      "Provides detailed questions and answers aimed at front-end developers preparing for job interviews.",
    url: "https://www.frontendinterviewhandbook.com/",
    categories: ["Interview and Career"],
  },
  {
    title: "path-to-senior-engineer-handbook",
    description:
      "An actionable guide for software engineers aiming to advance their careers to a senior level.",
    url: "https://github.com/jordan-cutler/path-to-senior-engineer-handbook",
    categories: ["Interview and Career"],
  },
  {
    title: "GreatFrontEnd",
    description:
      "The only end-to-end front end interview preparation platform. Brought to you by big tech Senior / Staff Front End Engineers.",
    url: "https://www.greatfrontend.com/",
    categories: ["Interview and Career"],
  },
  {
    title: "NeetCode",
    description: "A better way to prepare for coding interviews.",
    url: "https://neetcode.io/",
    categories: ["Interview and Career"],
  },
  {
    title: "LeetCode",
    description:
      "LeetCode is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.",
    url: "https://leetcode.com/problemset/",
    categories: ["Interview and Career"],
  },
  {
    title: "freeCodeCamp",
    description: "Offering tracks for HTML, CSS, and JavaScript online.",
    url: "https://www.freecodecamp.org",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Codecademy",
    description:
      "Offers free lessons for a variety of languages, with full courses available via pro membership.",
    url: "https://www.codecademy.com",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Flexbox Froggy",
    description: "A game that helps you learn CSS flexbox.",
    url: "https://flexboxfroggy.com/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Flexbox Defense",
    description:
      "A game focused on teaching CSS flexbox through tower defense mechanics.",
    url: "http://www.flexboxdefense.com/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Grid Garden",
    description: "A game for learning CSS grid layout.",
    url: "https://cssgridgarden.com/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Developer Roadmaps",
    description:
      "Guides and roadmaps for developers to learn different technologies.",
    url: "https://roadmap.sh/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Coding Train",
    description:
      "Tutorials on creative coding, covering topics in computer graphics, data visualization, and algorithmic art.",
    url: "https://thecodingtrain.com/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "MarkSheet",
    description: "A free tutorial to learn HTML and CSS.",
    url: "https://marksheet.io/",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "system-design-101",
    description:
      "An open-source repository on GitHub offering resources and tutorials on system design, suitable for beginners and advanced learners.",
    url: "https://github.com/ByteByteGoHq/system-design-101",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Visualgo",
    description:
      "A visualisation tool for learning computer science algorithms and data structures, featuring interactive animations to enhance understanding.",
    url: "https://visualgo.net/en",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "The Odin Project",
    description:
      "The Odin Project is an open-source online curriculum for learning web development. It offers a self-paced curriculum with the best resources for learning programming on the web, helping users acquire the skills needed to become web developers.",
    url: "https://www.theodinproject.com",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Quick Vitest Setup with ViteJS, React, & TypeScript",
    description:
      "This article provides a step-by-step guide on setting up Vitest with ViteJS, React, and TypeScript. It covers the installation of necessary dependencies, adding support for React components using @testing-library/react, and testing a React component with user event. The article also addresses an issue with type definitions not showing up for the test file and provides a solution.",
    url: "https://codingwithmanny.medium.com/quick-vitest-setup-with-vitejs-react-typescript-bea9d3a01b07",
    categories: ["Learning and Tutorials"],
  },
  {
    title: "Frontend Mentor Resources",
    description:
      "A collection of resources provided by Frontend Mentor, including tools, libraries, and guides for front-end development.",
    url: "https://www.frontendmentor.io/resources",
    categories: ["Resources"],
  },
  {
    title: "Best-websites-a-programmer-should-visit",
    description:
      "A curated list of websites and resources for programmers to learn, build, and improve their skills.",
    url: "https://github.com/sdmg15/Best-websites-a-programmer-should-visit",
    categories: ["Resources"],
  },
  {
    title: "Free for Developers",
    description:
      "An extensive list of software and services offering free tiers for developers to save costs on development tools.",
    url: "https://free-for.dev/#/",
    categories: ["Resources"],
  },
  {
    title: "Dev Resources",
    description:
      "A comprehensive directory of tools, libraries, and platforms for web development and coding.",
    url: "https://devresourc.es/",
    categories: ["Resources"],
  },
  {
    title: "LinksHub",
    description:
      "LinksHub aims to provide people access to a wide range of free resources and tools that they can use to learn and develop their tech skills.",
    url: "https://www.linkshub.dev/",
    categories: ["Resources"],
  },
  {
    title: "Sebastian Lague",
    description:
      "Hello, on this channel I explore how to create stuff out of code. I hope you find some of it interesting!",
    url: "https://www.youtube.com/@SebastianLague",
    categories: ["YouTube"],
  },
  {
    title: "So You Think You Know Git - FOSDEM 2024",
    description:
      "A comprehensive guide to mastering Git presented by Scott Chacon, co-founder of GitHub, at FOSDEM 2024.",
    url: "https://www.youtube.com/watch?v=aolI_Rz0ZqY",
    categories: ["YouTube"],
  },
  {
    title: "Fireship",
    description:
      "Fireship is a YouTube channel that provides high-intensity code tutorials and tech news to help programmers ship their applications faster. The channel releases new videos weekly covering essential topics for programmers.",
    url: "https://www.youtube.com/@Fireship",
    categories: ["YouTube"],
  },
  {
    title: "How to Build a Software Engineer Portfolio: The Ultimate Guide",
    description:
      "Learn how to create an effective software engineer portfolio to showcase your skills and projects.",
    url: "https://careerfoundry.com/en/blog/web-development/software-engineer-portfolio/",
    categories: ["Learning and Tutorials", "Interview and Career"],
  },
  {
    title: "Pygame Documentation",
    description:
      "Official documentation for Pygame, a set of Python modules designed for writing video games.",
    url: "https://www.pygame.org/docs/",
    categories: ["Documentation and Reference", "Python", "Game Development"],
  },
  {
    title: "itch.io",
    description:
      "itch.io is a platform for indie game developers to share and distribute their games for free.",
    url: "https://itch.io/",
    categories: ["Game Development", "Community"],
  },
  {
    title: "Tiled Map Editor",
    description:
      "Flexible and versatile tool for creating tile-based game levels.",
    url: "https://www.mapeditor.org/",
    categories: [
      "Development Tools and Extensions",
      "Design and UI",
      "Game Development",
    ],
  },
  {
    title: "OpenGameArt.org",
    description: "A repository of free and open-source game art assets.",
    url: "https://opengameart.org/",
    categories: [
      "Resources",
      "Icons and Images",
      "Animation",
      "Design and UI",
      "Game Development",
    ],
  },
  {
    title: "W3Schools",
    description:
      "Comprehensive website offering web development tutorials and references.",
    url: "https://www.w3schools.com/",
    categories: [
      "Learning and Tutorials",
      "Documentation and Reference",
      "Coding Practice and Challenges",
    ],
  },
  {
    title: "21 Best Developer Portfolio Examples",
    description:
      "HackerNoon article showcasing inspiring examples of web developer portfolios.",
    url: "https://hackernoon.com/21-best-developer-portfolio-examples-p61j31wi",
    categories: ["Community", "Resources", "Inspiration", "Design and UI"],
  },
  {
    title: "Clear Code",
    description:
      "YouTube channel offering game development and coding tutorials mainly in Python.",
    url: "https://www.youtube.com/@ClearCode",
    categories: [
      "YouTube",
      "Learning and Tutorials",
      "Game Development",
      "Python",
    ],
  },
  {
    title: "CodeAesthetic",
    description: "YouTube channel",
    url: "https://www.youtube.com/@CodeAesthetic",
    categories: ["YouTube"],
  },
  {
    title: "Awesome Github Profile",
    description: "A curated list of awesome Github Profile READMEs.",
    url: "https://zzetao.github.io/awesome-github-profile",
    categories: ["Community", "Design and UI", "Resources"],
  },
  {
    title: "Best-websites-a-programmer-should-visit",
    description:
      "GitHub repository with a curated list of websites valuable for programmers.",
    url: "https://github.com/sdmg15/Best-websites-a-programmer-should-visit",
    categories: ["Community", "Learning and Tutorials", "Resources"],
  },
  {
    title: "awesome-actions",
    description:
      "A curated collection of useful GitHub Actions for workflow automation.",
    url: "https://github.com/sdras/awesome-actions",
    categories: [
      "Development Tools and Extensions",
      "Resources",
      "Documentation and Reference",
    ],
  },
  {
    title: "awesome-readme",
    description:
      "A curated collection of well-crafted README files for project inspiration.",
    url: "https://github.com/matiassingers/awesome-readme",
    categories: [
      "Community",
      "Design and UI",
      "Resources",
      "Documentation and Reference",
    ],
  },
  {
    title: "repo-badges",
    description:
      "Generate badges for your README files to display project health and quality metrics.",
    url: "https://github.com/dwyl/repo-badges",
    categories: [
      "Development Tools and Extensions",
      "Design and UI",
      "Resources",
    ],
  },
  {
    title: "public-apis",
    description:
      "A comprehensive list of free APIs for use in software development projects.",
    url: "https://github.com/public-apis/public-apis",
    categories: ["APIs and Data", "Resources"],
  },
  {
    title: "The Cloud Resume Challenge",
    description:
      "A project-based learning initiative to build cloud skills and enhance your resume.",
    url: "https://cloudresumechallenge.dev/",
    categories: [
      "Learning and Tutorials",
      "Coding Practice and Challenges",
      "Interview and Career",
      "Community",
    ],
  },
  {
    title: "Udemy",
    description:
      "An online learning platform offering courses in various categories like web development, business, and more.",
    url: "https://www.udemy.com/",
    categories: ["Learning and Tutorials", "Resources"],
  },
  {
    title: "Full Stack Open",
    description:
      "A comprehensive course on modern web development covering React, Redux, Node.js, MongoDB, GraphQL, and TypeScript.",
    url: "https://fullstackopen.com/en/",
    categories: [
      "Learning and Tutorials",
      "Coding Practice and Challenges",
      "Frameworks and Libraries",
      "APIs and Data",
    ],
  },
  {
    title: "Badges4-README.md-Profile",
    description:
      "A collection of badges to enhance and customize your GitHub profile README.",
    url: "https://github.com/alexandresanlim/Badges4-README.md-Profile",
    categories: ["Design and UI", "Community", "Resources"],
  },
  {
    title: "Skill Icons",
    description:
      "A collection of SVG icons representing various skills to showcase on your GitHub profile or resume",
    url: "https://github.com/tandpfun/skill-icons",
    categories: ["Design and UI", "Resources"],
  },
  {
    title: "Visitor Badge",
    description:
      "A service to generate a visitor badge for your website or GitHub profile to showcase visitor traffic.",
    url: "https://www.visitorbadge.io/",
    categories: ["Design and UI", "Resources"],
  },
  {
    title: "GitHub Profile README Generator",
    description:
      "A web-based tool to easily create customized GitHub profile README files with stats, badges, and more.",
    url: "https://rahuldkjain.github.io/gh-profile-readme-generator/",
    categories: ["Design and UI", "Resources"],
  },
  {
    title: "github-readme-stats",
    description: "Generate dynamic stats cards for your GitHub profile README.",
    url: "https://github.com/anuraghazra/github-readme-stats",
    categories: [
      "Development Tools and Extensions",
      "Design and UI",
      "Resources",
      "APIs and Data",
    ],
  },
  {
    title: "Markdown Badges - Personal Developer Branding",
    description:
      "This is an article about badges for personal developer branding. It discusses what badges are and how to use them. The article also lists a variety of badges you can use, categorized by topic. Some of the topics include artificial intelligence, browsers, and databases. To use a badge, you copy the markdown link and paste it into your Markdown file.",
    url: "https://github.com/Ileriayo/markdown-badges",
    categories: ["Design and UI"],
  },
  {
    title: "readme.so",
    description:
      "Online tool to easily create professional READMEs for your projects.",
    url: "https://readme.so/",
    categories: [
      "Development Tools and Extensions",
      "Documentation and Reference",
      "Community",
    ],
  },
  {
    title: "Profile Readme Generator",
    description: "This webpage is a profile readme generator.",
    url: "https://profile-readme-generator.com/",
    categories: ["Development Tools and Extensions"],
  },
  {
    title: "GitHub",
    description:
      "GitHub is a platform for software development using version control. It helps developers collaborate and build software.",
    url: "https://github.com/",
    categories: [
      "Cloud Services and Infrastructure",
      "Development Tools and Extensions",
      "Community",
    ],
  },
]

export default resources
