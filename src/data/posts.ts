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
    },
     {label:'AWS',
        date: "11th Jan 2025",
        title:"Cache in CloudFront",
        content:'If after uploading a new build of your app into the Amazon S3 bucket your browser still loads the old version of your site, this might be caused by cached files in CloudFront.',
        heading1:'How cache is used in CloudFront?',
        content1:'CloudFront speeds up distribution of static and dynamic web content by using a network of data centers (edge locations). These data centers can store copies of our files (cached files) and provide them to the users depending on their request and location. When a user requests content, the request is rooted to the location that has the lowest latency (time delay). This reduces the number of requests that the origin server must respond to directly and improves the load time. When we upload a newer version of our app to S3, we need to make sure that the cached files in all locations are cleared.',
        heading2: 'How to remove cached files?',
        content2:'In the distribution lists in the Amazon CloudFront console, select the distribution responsible for your site. In the distribution settings, select the Invalidations tab, and then click Create invalidation. In the object paths field, add the paths to the files you would like to invalidate. If you would like to invalidate all the cached files, type the wildcard character(/*) as your path. After clicking Create invalidation it takes about 1 minute to refresh the cache. Once it is done, your website should display correctly.',
        heading3: 'How to clear cache with CLI?',
        content3:'To invalidate CloudFront cache for specific files, use the following AWS CLI command: aws cloudfront create-invalidation --distribution-id <DISTRIBUTION_ID> --paths "/*".Remember to replace the distribution id and modify the paths as needed.'
    },
    {label:'Git',
        date: "16th Jan 2025",
        title:"GitHub Actions",
        content:'If you are looking for a tool for automating the build and deployment of your project, GitHub Actions can be the answer to your needs.',
        heading1:'What is GitHub Actions?',
        content1:'GitHub Actions is a Continuous Integration and Continuous Deployment (CI/CD) tool that allows you to automate workflows directly within your GitHub repositories. With GitHub Actions you can trigger tasks based on specific events in your repository, such as a code push, pull request, or release. These tasks, defined in YAML configuration files, can be used for running tests or deploying your project to production.',
        heading2: 'Why Use GitHub Actions?',
        content2:'Perhaps the most important reason for using GitHub Actions is its seamless integration with GitHub. It is incredibly easy to set up and manage workflows without leaving the repository. But there are many more reasons for using it: it saves time and reduces errors by automating repetitive tasks, offers the user flexibility to fit their unique needs, and comes with thousands of prebuilt actions to streamline the workflows.',
        heading3: 'Popular Use Cases',
        content3:'GitHub Actions can be used for Continuous Integration (e.g., to automatically run tests and build your application on every push or pull request), Continuous Deployment (e.g., to deploy your application to platforms like AWS, Azure, or Firebase), Static Code Analysis (e.g., to integrate tools like ESLint or Prettier to enforce code quality standards), or for Versioning and Releases (e.g., to automate the creation of new releases, including changelogs and version tagging). Whether you are working on a small website or managing a complex project, GitHub Actions can simplify and enhance your workflow. Ready to speed up your development process? Dive into GitHub Actions documentation to learn about this powerful tool!'
    },
    {label:'Javascript',
        date: "1st Mar 2025",
        title:"Variable Type",
        content:'If you find it hard to work out what type of variable you are dealing with in your code, you might want to try typeof.',
        heading1:'What is typeof?',
        content1:'Typeof is an operator that returns the type of variable in Javascript. Because it is just an operator (and not a method), you can use in without brackets in your code. However, sometimes it can be followed by brackets, to make your code easier to read. Have a look at these two examples:',
        code1:'variableType = typeof someVariable;',
        code2: 'variableType = typeof (someVariable);',
        heading2: 'Typeof with the null type',
        content2:'While for most primitive types typeof outputs the correct type, it is not the case for the null type. Because of an old Javascript bug (that cannot be removed due to backward compatibility problems), typeof null returns an object (although it is a primitive type). So, bear that in mind when writing your code!',
        
    },

]

export default posts;