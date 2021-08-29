module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://sadiqsada.netlify.app/`,
    // Your Name
    name: 'Sadiq Sada',
    // Main Site Title
    title: `Sadiq Sada | Full-Stack Developer`,
    // Description that goes under your name in main bio
    description: `SDE Intern @ Amazon | CS + Applied Math at Stony Brook University`,
    // Optional: Twitter account handle
    // author: `@rfitzio`,
    // Optional: Github account URL
    github: `https://github.com/sadiqsada`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/md-sadiq-sada-49845a177/`,
    // Content of the About Me section
    about: `Hello! I'm Sadiq, a computer science and applied math double major at Stony Brook University. 
    I recently completed my Software Development internship at Amazon, where I worked on a project about network connectivity. 
    I implemented features to ensure a flawless experience for the customers by gracefully 
    handling poor internet scenarios. Apart from sharpening my computer science skills, I like to play sports and 
    read books during my free time. I'm currently looking for a full-time opportunity starting in June 2022.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'PokeUnbox',
        description:
          'A fun pokemon card simulator + inventory - built with ReactJS and Ant Design',
        link: 'https://github.com/sadiqsada/PokeUnbox',
      },
      {
        name: 'Workout Planner',
        description:
          'An easy way to save, edit, and manage workout sessions - built with Android Studio (Java)',
        link: 'https://github.com/sadiqsada/Workout-Planner',
      }
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon',
        description: 'Software Development Engineer Intern, June 2021 - August 2021',
        link: ''
      },
      {
        name: 'Stony Brook University',
        description: 'Undergraduate Teaching Assistant (CSE 101: Computer Science Principles), August 2021 - Present',
        link: ''
      },
      {
        name: 'Mathnasium',
        description: 'Instructor, March 2019 - August 2019',
        link: ''
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages & Frameworks',
        description:
          'JavaScript (ES6+), TypeScript, Node.js, Express.js, React, Vue, Vuex',
      },
      {
        name: 'Databases',
        description: 'MongoDB, PostreSQL, Firebase',
      },
      {
        name: 'Other',
        description:
          'Java, C, Python, Android Studio, XCode, Amazon Web Services (AWS), Agile / Scrum, Git',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
