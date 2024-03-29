export const SKILLS_LOGOS = [
  {
    id: 1,
    src: '/assets/skills-logos/html5.png',
    alt: 'HTML5 logo',
    text: 'HTML5'
  },
  { id: 2, src: '/assets/skills-logos/css3.png', alt: 'CSS3 logo', text: 'CSS3' },
  { id: 3, src: '/assets/skills-logos/javascript.png', alt: 'JavaScript logo', text: 'JavaScript' },
  { id: 5, src: '/assets/skills-logos/react.png', alt: 'React logo', text: 'React' },
  { id: 6, src: '/assets/skills-logos/vue.png', alt: 'Vue.js logo', text: 'Vue.js' },
  { id: 9, src: '/assets/skills-logos/bootstrap.png', alt: 'Bootstrap logo', text: 'Bootstrap' },
  { id: 10, src: '/assets/skills-logos/tailwind.png', alt: 'Tailwind logo', text: 'Tailwind' }
]

export const TOOLS_LOGOS = [
  { id: 11, src: '/assets/skills-logos/git.png', alt: 'Git logo', text: 'Git' },
  { id: 12, src: '/assets/skills-logos/github.png', alt: 'GitHub logo', text: 'GitHub' },
  { id: 4, src: '/assets/skills-logos/nodejs.png', alt: 'Node.js logo', text: 'Node.js' },
  { id: 13, src: '/assets/skills-logos/vscode.png', alt: 'VS Code logo', text: 'VS Code' },
  { id: 14, src: '/assets/skills-logos/jira.png', alt: 'Jira logo', text: 'Jira' },
  { id: 7, src: '/assets/skills-logos/firebase.png', alt: 'Firebase logo', text: 'Firebase' },
  { id: 8, src: '/assets/skills-logos/supabase.png', alt: 'Supabase logo', text: 'Supabase' },
  { id: 15, src: '/assets/skills-logos/photoshop.png', alt: 'Photoshop logo', text: 'Photoshop' }
]

export const PROJECTS = [
  {
    id: 1,
    img: '/assets/projects/projects-my-lists.jpg',
    alt: 'Logo of My Lists App',
    title: 'My Lists App',
    stack: ['Vue.js,', 'Vue Router,', 'Pinia,', 'Supabase,', 'CSS3.'],
    repository: 'https://github.com/melisandoval/vue-supabase-my-lists-app',
    live: 'https://my-lists-melisandoval.netlify.app/',
    description: [
      'This is a responsive web app that allows logged users to create, edit and delete several lists. In each list, users can create new items, delete them and organize them by done, not-done and favorites. Also, the users can filter the items by the same categories.'
    ],
    imgScreenshot: '/assets/projects/projects-my-lists-screenshot.jpg'
  },
  {
    id: 2,
    img: '/assets/projects/projects-circle.jpg',
    alt: 'Logo of Circle Agency Website',
    title: 'Circle Agency Website',
    stack: ['HTML5,', 'CSS3,', 'JavaScript,', 'Firebase.'],
    repository: 'https://github.com/melisandoval/circle-agency-clone',
    live: 'https://circle-website-clone-msandoval.netlify.app/',
    description: [
      'This was an academic project in which the requirement was to build a responsive website with three landing pages (Homepage, Product page and Contact page), all based on a provided Figma Design, using vanilla JavaScript and an API to read and post data (I chose Firebase).'
    ],
    imgScreenshot: '/assets/projects/projects-circle-screenshot.jpg'
  },
  {
    id: 3,
    img: '/assets/projects/projects-simpsons-memory-game.jpg',
    alt: 'Image from The Simpsons Memory Game',
    title: 'The Simpsons Memory Game',
    stack: ['React,', 'CSS3.'],
    repository: 'https://github.com/melisandoval/react-memory-game-simpsons',
    live: 'https://memory-game-simpsons.vercel.app/',
    description: [
      'This is an online web game where any user can choose to play with 12, 18 or 24 cards. The Simpsons characters change in every game! When the game end, the player is informed about how many moves did and what was the time spent to complete it.'
    ],
    imgScreenshot: '/assets/projects/projects-simpsons-memory-screenshot.jpg'
  },
  {
    id: 4,
    img: '/assets/projects/projects-first-portfolio.jpg',
    alt: 'Image from First Portfolio Website',
    title: 'First Portfolio Website',
    stack: ['HTML5,', 'CSS3,', 'JavaScript.'],
    repository: 'https://github.com/melisandoval/personal-portfolio',
    live: 'https://melisandoval.github.io/personal-portfolio/',
    description: [
      'This was my first portfolio website that I created in 2022. I designed it myself and built with plain HTML5, CSS3 and a little bit of JavaScript. One year later, I wanted to design a new one with a JavaScript framework (Vue.js) and a different style (is this portfolio you are seeing right now!😄). Even though now I like more the new one, I think that this one was pretty good.'
    ],
    imgScreenshot: '/assets/projects/projects-first-portfolio.jpg'
  },
  {
    id: 5,
    img: '/assets/projects/projects-cool-dogs.jpg',
    alt: 'Image of Cool Dogs Product Page',
    title: 'Cool Dogs Product Page',
    stack: ['HTML5,', 'CSS3,', 'JavaScript.'],
    repository: 'https://github.com/melisandoval/fcc-cool-dogs-product-landing-page',
    live: 'https://melisandoval.github.io/fcc-cool-dogs-product-landing-page/product.html',
    description: [
      'An ecommerce responsive product page of a made up company that sells clothes for dogs. It has a carousel with product images and a video.'
    ],
    imgScreenshot: '/assets/projects/projects-cool-dogs-screenshot.jpg'
  },
  {
    id: 6,
    img: '/assets/projects/projects-janis.jpg',
    alt: 'Screenshot of Janis Joplin Tribute Website',
    title: 'Janis Joplin Tribute Website',
    stack: ['HTML5,', 'CSS3.'],
    repository: 'https://github.com/melisandoval/fcc-project-tribute-page',
    live: 'https://melisandoval.github.io/fcc-project-tribute-page/',
    description: [
      'The famous tribute page project from freeCodeCamp. This was the first website I developed and has a special place in my heart. On top of the requirements, I added a parallax scrolling, a timeline section and a discography section with flipping albums.'
    ],
    imgScreenshot: '/assets/projects/projects-janis.jpg'
  }
]
