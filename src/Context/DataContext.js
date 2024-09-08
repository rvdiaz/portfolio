import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
  const [data, setData] = useState({
    loading: false,
    error: "",
    menus: [
      {
        iconUrl: "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_biography_189ba21e0b.png",
        label: "Biography",
        alt: "Robe Valdes biography",
      },
      {
        iconUrl: "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_services_645af13e98.png",
        label: "Services",
        alt: "Robe Valdes biography",
      },
      {
        iconUrl: "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_works_1f286f4a52.png",
        label: "Works",
        alt: "Robe Valdes biography",
      },
      {
        iconUrl: "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_contact_882eef555d.png",
        label: "Contact",
        alt: "Robe Valdes biography",
      },
    ],
    theme: {
      perfilPicture:
        "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_logo_8b59d153ad.png",
      backgroundPage:
        "https://rvdiaz-images.s3.amazonaws.com/roberto_valdes_portfolio_9b343a9741.jpg",
      info: {
        primaryColor: "#a770439e",
        copyright: "© 2023 Roberto Valdes Diaz. All Rights Reserved.",
      },
    },
    dataPages: {
      name: "Roberto Valdes",
      profession: "Software Developer",
      personalQuote: {
        value: "Nothing in this world can take the place of persistence",
        author: "Calvin Collidge",
      },
      birthday: "July 5th, 1994",
      email: "valdesdiazroberto@gmail.com",
      website: "www.robevaldes.com",
      pdfResumeLink:
        "https://rvdiaz-images.s3.amazonaws.com/Perfil_personal_9dbbd9e300.pdf",
      profilePicture:
        "https://rvdiaz-images.s3.amazonaws.com/robevaldes_1_0_71e7076a71.webp",
      experience: [
        {
          title: "Education",
          experienceItems: [
            {
              year: 2012,
              place: "Federico Engels School",
              description:
                "Graduated 7th in school ranking and achived excellent academics results.",
            },
            {
              year: 2018,
              place: "Hermanos Saiz Montes de Oca University",
              description:
                "Obtained computer engineering degree with honors resulting in the University asking me to teach.",
            },
          ],
        },
        {
          title: "Labor",
          experienceItems: [
            {
              year: 2018,
              place: "Freelance",
              description:
                "While lecturing on subjects like AI, web programming and Android Programming, I embarked on a software developer path.",
            },
            {
              year: 2020,
              place: "Wordpress",
              description:
                "During the three years of working with Wordpress, I developed numerous wordpress themes from scratch and woocomerce stores.",
            },
            {
              year: 2021,
              place: "React",
              description:
                "I worked for Front10, an USA company, that hired me as a React Frontend Developer.",
            },
            {
              year: 2022,
              place: "Social Media and Marketing",
              description:
                "Assisted and advised organizations utilizing social media, custom relationship management(CRM), digital marketing, email programs, chat bots, integration and web development using react, wordpress and Node JS.",
            },
            {
              year: 2022,
              place: "Shopify Developer",
              description:
                "I worked for Luca Danni(E-commerce store on shopify) developing custom themes, integrations with third parties and developing extra features to the store.",
            },
            {
              year: 2023,
              place: "Mobile Developer",
              description:
                "My current role is Backend and Mobile Developer at Dealer Automation Technologies, providing solutions for the #1 Chevrolet dealer in the world, Bomnin Chevrolet. Using Flutter and Node JS respectively in my roles, using LAMBDAS functions and Graphql as part of a microservice arquitecture on AWS for the backend and riverpod, go-router, syncfusion and graphql_flutter for the mobile application. The mobile application is Real Time Commission, already available for our clients at Bomnin Chevrolet in App and Play Store.",
            },
          ],
        },
      ],
      services: [
        {
          title: "Mobile Development",
          description:
            "As part of my service to #1 Chevrolet dealer in the world, Bomnin Chevrolet. I developed with Flutter the mobile application Real Time Commission, already delivered in App and Play Store.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/mobile_development_5273e2fa8e.png",
        },
        {
          title: "Front-End",
          description:
            "I have been working for 7 years as a frontend developer, providing solutions with React, WordPress and Shopify. Recently I have been part of projects with Shopify and React Native. This has enabled me to effectively work in a variety of environments, my strong skills with HTML, CSS and JS have been instrumental on achieving this projects.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/frontend_service_ff13d956f9.png",
        },
        {
          title: "Back-End",
          description:
            "Backend development with Node.js using Lambdas functions on AWS and MongoDB, with GraphQL.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/backend_service_9d0d237c68.png",
        },
        {
          title: "Business Tools",
          description:
            "I possess comprehensive knowledge of Zoho CRM and its associated solutions. I have successfully managed customer data, integrated solutions with Zapier, Typeform, and ManyChat.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/backend_service_9d0d237c68.png",
        },
        {
          title: "Cloud Services",
          description:
            "I partner with GitHub to create and deploy applications across a variety of platforms like Vercel, Heroku, and AWS. I have experience with a range of AWS features and services, including EC2, ECR, S3, AWS Amplify, IAM, RDS, and Route 53.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/cloud_services_140d9e3984.png",
        },
        {
          title: "DevOps",
          description:
            "I have a medium level knowledge on Docker Compose, volumes and image deployment in ECR. I also have basic knowledge of working with Lerna and Monorepo.",
          iconLink:
            "https://rvdiaz-images.s3.amazonaws.com/icons8_devops_60_09d7d38789.png",
        },
      ],
      works: [
        {
          title: "Flutter",
          workItems: [
            {
              title: "Real Time Commissions",
              link: "https://apps.apple.com/us/app/real-time-commissions-rtc/id6474559281",
              type: "externalLink",
            },
            {
              title: "Places",
              link: "https://rvdiaz-images.s3.amazonaws.com/places_de12e7c988.gif",
              type: "view",
            },
            {
              title: "Meals",
              link: "https://rvdiaz-images.s3.amazonaws.com/ezgif_com_video_to_gif_1_9a5e5b82f6.gif",
              type: "view",
            },
            {
              title: "Expenses",
              link: "https://rvdiaz-images.s3.amazonaws.com/expenses_c954d8cabb.gif",
              type: "view",
            },
            {
              title: "Lists",
              link: "https://rvdiaz-images.s3.amazonaws.com/Lists_d833c91991.gif",
              type: "view",
            },
          ],
        },
        {
          title: "React",
          workItems: [
            {
              title: "React Reusable Components",
              link: "https://psy-prod.airtrfx.com/vacations/en/",
              type: "externalLink",
            },
            {
              title: "The movie DB",
              link: "https://rvdiaz.github.io/web-tmd-movie/",
              type: "externalLink",
            },
            {
              title: "Snapshot",
              link: "https://rvdiaz.github.io/web-snapshot/",
              type: "externalLink",
            },
            {
              title: "Todo App",
              link: "https://rvdiaz.github.io/web-todo-app/",
              type: "externalLink",
            },
            {
              title: "Calculator App",
              link: "https://rvdiaz.github.io/web-calculator-app/",
              type: "externalLink",
            },
            {
              title: "Trello Board",
              link: "https://rvdiaz.github.io/web-trello-board/",
              type: "externalLink",
            },
          ],
        },
        {
          title: "Shopify",
          workItems: [
            {
              title: "Luca + Danni",
              link: "https://lucadanni.com/",
              type: "externalLink",
            },
          ],
        },
        {
          title: "Wordpress",
          workItems: [
            {
              title: "Sporcks Store",
              link: "https://sporcks.com/es-am",
              type: "externalLink",
            },
            {
              title: "Willier CR",
              link: "https://www.wiliercr.com/",
              type: "externalLink",
            },
            {
              title: "Quorania",
              link: "https://jardinsdecanmatas.quorania.com/ubicacion-y-entorno/",
              type: "externalLink",
            },
            {
              title: "River Spencer",
              link: "https://www.riversspencer.com/",
              type: "externalLink",
            },
            {
              title: "Coches Store",
              link: "https://www.m-ocasion.com/",
              type: "externalLink",
            },
          ],
        },
      ],
      contact: [],
    },
  });

  useEffect(() => {
    //fetch to backend here
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};
