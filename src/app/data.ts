import { PostType } from '../types';

const data: PostType[] = [
  {
    img: 'https://miro.medium.com/v2/resize:fit:720/0*1yo17Ov28sa7p33N',
    date: 'Sep 7',
    title: 'New free, interactive Angular course for beginners on Sololearn',
    content: [
      {
        type: 'paragraph',
        text: 'We are delighted to announce that we’ve collaborated with the online interactive code learning platform Sololearn to develop an introductory course to Angular. The course is available for free on Sololearn’s platform to anyone who wants to learn Angular.',
      },
      {
        type: 'paragraph',
        text: 'With hands-on coding exercises and projects, learners get practical experience working with real examples of Angular code. They’ll learn the fundamentals of Angular, such as components, routing, and more.',
      },
      {
        type: 'image',
        img: 'https://miro.medium.com/v2/resize:fit:720/0*uh85lJ2zUMrrspU0'
      },
      {
        type: 'paragraph',
        text: 'Example of how you can use Sololearn’s interactive platform to learn Angular',
        format: 'italic',
      },
      {
        type: 'paragraph',
        text: 'The course is designed to be accessible to new developers, while also being helpful for intermediate developers new to Angular who want to learn more Angular concepts and skills. Sololearn is offering both the Angular course for beginners, as well as a full Angular learning path for those completely new to coding, which brings them up to speed in HTML, CSS, and JavaScript too.',
      },
      {
        type: 'heading',
        text: 'Meet Sololearn',
      },
      {
        type: 'paragraph',
        text: 'Sololearn is an innovative and interactive edtech platform that has helped over 30 million people in every country around the world learn to code. It offers bite-sized lessons that accommodate different learner schedules and courses on a variety of programming languages, including Python, Java, JavaScript, and C++. The courses are designed for beginners and experienced developers alike while covering topics from the basics of programming to more advanced concepts. Sololearn offers a variety of tools and resources to help learners practice their coding skills — including AI tools, a code editor, debugger, and the support of a community forum of over 30 million learners.',
      },
      {
        type: 'heading',
        text: 'Building Great Apps',
      },
      {
        type: 'paragraph',
        text: 'We continue to enable developers to learn Angular and build scalable web applications with confidence. This collaboration with Sololearn allows you to learn new Angular concepts at your own pace, from your phone, wherever you are.',
      },
      {
        type: 'paragraph',
        text: 'The free Angular course on Sololearn is a great resource for training new Angular developers.',
      },
      {
        type: 'paragraph',
        text: 'Let us know what you think of it.',
      },
    ],
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*CNy2EclZxC1hmi_govb_7w.png',
    date: 'May 3',
    title: 'Angular v16 is here!',
    color: '#399AE9',
    content: [
      {
        type: 'paragraph',
        text: 'Six months ago, we reached a significant milestone in Angular’s simplicity and developer experience by graduating the standalone APIs from developer preview. Today, we’re thrilled to share that we’re continuing the Angular Momentum with the biggest release since the initial rollout of Angular; making large leaps in reactivity, server-side rendering, and tooling. All this comes with dozens of quality-of-life improvements across feature requests, with over 2,500 combined thumbs up on GitHub!'
      },
      {
        type: 'heading',
        text: 'Rethinking Reactivity'
      },
      {
        type: 'paragraph',
        text: 'As part of the v16 release we’re excited to share a developer preview of a brand new reactivity model for Angular which brings significant improvements to performance and developer experience.'
      },
      {
        type: 'paragraph',
        text: 'It’s entirely backward compatible and interoperable with the current system, and enables:'
      },
      {
        type: 'paragraph',
        text: '- Better run time performance by reducing the number of computations during change detection. Once Angular Signals rollout completely, we’re expecting significant improvements of the INP Core Web Vital metric for apps built with signals'
      },
      {
        type: 'paragraph',
        text: '- Brings a simpler mental model for reactivity, making it clear what are the dependencies of the view and what’s the flow of data through the app'
      },
      {
        type: 'paragraph',
        text: '- Enables fine-grained reactivity, which in future releases will allow us to check for changes only in affected components'
      },
      {
        type: 'paragraph',
        text: '- Makes Zone.js optional in future releases by using signals to notify the framework when the model has changed'
      },
      {
        type: 'paragraph',
        text: '- Delivers computed properties without the penalty of recomputation in each change detection cycle'
      },
      {
        type: 'paragraph',
        text: '- Enables better interoperability with RxJS by outlining a plan to introduce reactive inputs'
      },
      {
        type: 'paragraph',
        text: 'The initial GitHub discussion hit 682 comments and since then we shared a series of RFCs which received over 1,000 more!'
      },
      {
        type: 'paragraph',
        text: 'In v16 you can find a new signals library that’s part of @angular/core and an RxJS interop package — @angular/core/rxjs-interop, the full signal integration in the framework is coming later this year.'
      },
      {
        type: 'heading',
        text: 'Let’s keep the momentum going together!'
      },
      {
        type: 'paragraph',
        text: 'Version 16 is the stepping stone for the future improvements coming to Angular’s reactivity and server-side rendering over the next year. We’ll be moving the Web forward by innovating in developer experience, performance, while enabling you to build for everyone!'
      },
      {
        type: 'paragraph',
        text: 'You can be part of the Angular Momentum and help us shape the future of the framework by sharing your thoughts in the upcoming RFCs, surveys, or social media.'
      },
      {
        type: 'paragraph',
        text: 'Thank you for being part of the Angular community. We can’t wait for you to try these features! ❤️'
      }
    ],
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:720/format:webp/1*BMDyhp4RU0SQuG5FSCG4MA.png',
    date: 'Apr 17',
    title: 'What’s next for Server Side Rendering in Angular',
    color: '#FF2A4C',
    content: [
      {
        type: 'paragraph',
        text: 'In May of 2022, we shared Angular’s vision for the future, where we committed to investing in server side rendering and hydration. Angular has had support for server side rendering through Angular Universal, which originally came into being thanks to third-party contributors. Eventually, Angular Universal became the official SSR library for Angular.',
      },
      {
        type: 'paragraph',
        text: 'Fast forward to 2023, and SSR is now an essential part of modern web applications and has been for a few years. We’ve conducted surveys, and the community has let us know that server side rendering is the top area Angular users want improvements. As a result of your feedback and the changed landscape around SSR, we have made server side rendering a top priority in 2023.',
      },
      {
        type: 'heading',
        text: 'Full Application Hydration Support',
      },
      {
        type: 'paragraph',
        text: 'Multiple issues have been opened on the Angular GitHub repository related to hydration (e.g. #13446 & #23427) since 2016. One of the most prominent issues is the flicker that occurs between the time the page is rendered and when the page is ready for interaction by users. That flicker is due to Angular having destroyed and repainted the DOM structures after re-bootstrapping on the client. There have been different approaches used to reduce the flicker so it’s less noticeable. However, it is still visible in tooling like Lighthouse and WebPageTest and can also affect statistics like cumulative layout shift (CLS).',
      },
      {
        type: 'paragraph',
        text: 'To address these issues, we’ve been focused on implementing a better hydration solution for Angular. We are pleased to announce that with the upcoming v16 release Angular will offer full application non-destructive hydration. Angular can reuse existing DOM structures on the client that were rendered by the server without having to destroy and re-render all of them. We’ve also made some updates to HttpClient. It will now cache requests made on the server to avoid re-fetching that same data again on the client.',
      },
      {
        type: 'paragraph',
        text: 'These exciting updates are only the beginning of where things are headed with hydration and with server side rendering. If you’re interested in a deep dive into how hydration works, stay tuned for a future blog post where we’ll go into more details. In the meantime, this new non-destructive hydration solution is available in the current Angular v16 release candidate as developer preview. Please try it out and let us know what you think.',
      },
      {
        type: 'heading',
        text: 'What’s to come',
      },
      {
        type: 'paragraph',
        text: 'All this work has been a part of our roadmap and there’s much more to come. Server side rendering will soon be a native part of the Angular CLI. We plan to move all of Angular Universal’s packages into the Framework and tooling to ensure the best and smoothest experience getting started with SSR and Angular. We plan to continue our partnership with the Aurora team to improve the overall experience of server side rendering. We’re actively working on or exploring a number of features such as a native option to lazily hydrate components that were deferred loaded. We’re also exploring how we can leverage Angular’s signals to provide finer-grained hydration.',
      },
      {
        type: 'paragraph',
        text: 'We’re very partial to all of these changes and we certainly plan to resume this direction of where Angular is going with server side rendering, and there’s a lot more ahead with v17 and beyond. Stay tuned.',
      },
    ],
  },
  {
    img: 'https://miro.medium.com/v2/resize:fit:720/0*ULvs_4zdRf8Fi8_4',
    date: 'Apr 29, 2022',
    title: 'Angular at I/O 2022',
    color: '#FBBC03',
    content: [
      {
        type: 'paragraph',
        text: 'At I/O 2021 we had a blast announcing Angular DevTools and letting you use it in the Adventure world! We talked to hundreds of developers and shared insights about our partnership with TensorFlow.js.'
      },
      {
        type: 'paragraph',
        text: 'Hard to believe it’s already time for I/O 2022. This year you’ll find even more Angular content and get the opportunity to learn about the latest advancements coming to the framework!'
      },
      {
        type: 'heading',
        text: 'State of Angular',
      },
      {
        type: 'paragraph',
        text: 'Emma and Mark will share more about the state of Angular. In this talk, you’ll learn about the impact Ivy has over the ecosystem and the features it enables. You’ll also learn more about the latest features coming to v14.'
      },
      {
        type: 'paragraph',
        text: 'We’ll also share what are some of the long-term projects you should be looking forward to. The Angular team at Google is thrilled to share our product vision and our expanded focus on developer experience and productivity (faster to learn and easier use), and partnership with Chrome Aurora, Google Cloud, and Firebase teams to make it easier to build high-performance web applications. We’d strongly recommend you watch this talk; it’s going to be great.'
      },
      {
        type: 'paragraph',
        text: 'State of Angular, I/O 2022',
        format: 'italic',
      },
    ],
  },
];

export default data;
