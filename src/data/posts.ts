import { Post } from "../models/Entities";

const posts:Post[] =[
    {label:'Git',
        date: "1st Sep 2024",
        title:'Using Stash',
        content1:'Has it ever happened to you that you made some changes to the code in one git branch and wanted to apply them in another one? This is what happened to me not so long ago. The answer to my problem was GIT STASH. This git command helps you to temporarily save any uncommited changes (both staged and unstaged). This comes especially handy in cases like mine - when I wanted to store my changes from one branch, switch the branch, and then drop them in a new place. While using stash three commands are worth remembering: git stash (saving the changes), git stash pop (reapplying the previously stashed changes, removing them from stash), and git stash apply (if you would like to do the same, but without removing the changes from stash). I hope you find this info useful just I did!'
    },
    {label:'Frontend Development',
        date: "10th Sep 2024",
        title:"Google Icons",
        content1:'Although I normally use antd icons in my project, I must admit they are often not as visually appealing as Google icons. As I am increasingly using Google Material assets in my work, I have been looking for information on how to use Google icons in a React project, without uploading these assets (which can take some space in a project). The process is very simple. First, we import the Google fonts api in our index.html file. Second, we add the material-icons class in our index.css file of the project. To reference an icon in our code, we just need to place their name in a span with a class called material-icons.'
    },
    {label:'Frontend Development',
        date: "14th Dec 2024",
        title:"Next.js Workshop",
        content:'This week I have taken part in a Next.js workshop organized by Vercel (Next.js 15 App Router Foundations). It was delivered by Alice de Mauro, Senior Solution Architect at Vercel. Alice has a broad experience of working with Next.js and was great at explaining its core concepts.',
        heading1:'Why it is worth using Next.js in a web project?',
        content1:'Next.js has quickly become one of the most popular frameworks for building modern web applications. Its blend of server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) makes it a versatile choice for developers. Whether you’re building a personal portfolio, an e-commerce platform, or a large-scale enterprise application, Next.js has you covered. The main benefits of using Next.js are: performance optimization, SEO-friendly design, and powerful routing.',
        heading2: 'What did I learn?',
        content2:'The workshop started with a short introduction into Next.js, its core concepts and architecture. Using hands-on exercises, we have learned how to create dynamic routes, nested routing, and custom routes. We have also discovered when and how to use Server-Side Rendering (SSR) and Static Site Generation (SSG), and explored styling with layouts and templates. I am glad that I had the opportunity to take part in this event and I am looking forward to the new ones!'
    }

]

export default posts;