const portfolioData = [
    {
      id: 1,
      title: 'S Food Website',
      category: 'corporate',
      client: 'S Company',
      year: '2020',
      tags: ['Web Development','webGL','React', 'Gsap','Node Js','Three Js','AWS','Blender'],
      problem: 'The food website built through a collaboration with company W lacked visual impact and needed a more dynamic experience.',
      solution: ['Full UI/UX redesign', 'Built custom environments with 3D modeling', 'Applied responsive web standards','Implemented scroll-based animations'],
      result: {
        traffic: '300% increase in visitors',
        inquiry: '200% increase in inquiries',
        conversion: '150% improvement in conversion rate'
      },
      image: '/airotics_thumbnail/sprite.jpeg',
      video: '/airotics_video/sprite.mp4',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1486312338219-ce68e2c6b3d9?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop'
      },
      
    },
    {
      id: 2,
      title: 'A Apparel Brand',
      category: 'corporate',
      client: 'A Apparel Brand',
      year: '2021',
      tags: ['Web Development','webGL','React', 'Gsap','Node Js','Three Js','AWS','Blender'],
      problem: 'The apparel website did not present products with enough energy, so the client requested a more immersive and lively site.',
      solution: ['Full UI/UX redesign', 'Built custom environments with 3D modeling', 'Applied responsive web standards','Implemented scroll-based animations'],
      result: {
        traffic: '400% improvement in booking efficiency',
        inquiry: '95% customer satisfaction achieved',
        conversion: '30% reduction in operating costs'
      },
      image: '/airotics_thumbnail/addias.jpeg',
      video: '/airotics_video/addidas.mp4',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop'
      }
    },
    {
      id: 3,
      title: 'T Studio',
      category: 'corporate',
      client: 'T Studio',
      year: '2021',
      tags: ['Web Development','webGL','React', 'Gsap','Node Js','Three Js'],
      problem: 'The studio needed a portfolio website that clearly communicated what made the brand different from competitors.',
      solution: ['Full UI/UX redesign', 'Built custom environments with 3D modeling', 'Applied responsive web standards','Implemented scroll-based animations'],
      result: {
        traffic: '500% increase in investor interest',
        inquiry: 'Successful Series A milestone',
        conversion: 'Foundation set for global expansion'
      },
      image: '/airotics_thumbnail/taota.png',
      video: '/airotics_video/taota.mp4',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=300&fit=crop'
      }
    },
    {
      id: 4,
      title: 'S Designer Website',
      category: 'personal',
      client: 'S Designer',
      year: '2024',
      tags: ['Web Development','webGL','React', 'Gsap','Node Js','Three Js'],
      problem: 'The client needed a personal portfolio website that could present their creativity in a unique way.',
      solution: ['Full UI/UX redesign', 'Sprite-based visual design', 'Applied responsive web standards','Implemented scroll-based animations'],
      result: {
        traffic: '250% increase in mobile sales',
        inquiry: '40% decrease in cart abandonment',
        conversion: '180% increase in average order value'
      },
      image: '/airotics_thumbnail/star.png',
      video: '/airotics_video/star.mp4',
      beforeAfter: {
        before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
        after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
      }
    },

    {
        id: 5,
        title: 'F Marketing Agency',
        category: 'corporate',
        client: 'F Marketing Agency',
        year: '2025',
        tags: ['ASP.net','SQL','C#','React','Node Js','Windows Server'],
        problem: 'Customer and staff operations were managed in spreadsheets, creating inefficient workflows that needed to be improved through a web platform.',
        solution: ['Full UI/UX redesign', 'Excel integration', 'Applied responsive web standards','App integration','Database architecture design'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/crm.jpeg',
        video: '/airotics_video/crm.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 6,
        title: 'K Metaverse',
        category: 'corporate',
        client: 'K Metaverse',
        year: '2022',
        tags: ['Web3','Gsap','React','Node Js','Next Js','Solana'],
        problem: 'The client needed a Web3-enabled metaverse website with a game-like homepage experience.',
        solution: ['Full UI/UX redesign', 'Web3 integration', 'Applied responsive web standards','Built a metaverse-focused website'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/kpverse.png',
        video: '/airotics_video/kpverse.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 7,
        title: 'L Gaming Gear',
        category: 'corporate',
        client: 'L Gaming Gear',
        year: '2021',
        tags: ['React','Node Js','Three Js','Blender'],
        problem: 'The client needed a product website for gaming gear with accurate 3D modeling and web-based visualization.',
        solution: ['3D modeling production', 'Applied responsive web standards','Built gaming gear website','Implemented 3D models on the web'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/logitech.jpeg',
        video: '/airotics_video/logi.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 8,
        title: 'J Piano Equipment',
        category: 'corporate',
        client: 'J Piano Equipment',
        year: '2024',
        tags: ['Html','Css','JavaScript','jQuery','php'],
        problem: 'Although piano products were already being sold, the client needed a website that better communicated product differentiation and customer needs.',
        solution: ['Full UI/UX redesign', 'Applied responsive web standards','Built piano-focused website','Integrated with sales platform'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/piano.png',
        video: '/airotics_video/piano.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 9,
        title: 'L Construction',
        category: 'corporate',
        client: 'L Construction',
        year: '2022',
        tags: ['React','Node Js','Three Js','Blender','Gsap','panolens Js'],
        problem: 'The construction company needed a website that could convert blueprint-based building plans into realistic 3D web experiences.',
        solution: ['Produced 3D model showcase videos','Built 3D model web experience','Rendered still visuals from 3D assets','Implemented VR tour feature'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/lottecastle.jpeg',
        video: '/airotics_video/lotte.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 10,
        title: 'A Interior',
        category: 'corporate',
        client: 'A Interior',
        year: '2023',
        tags: ['React','Node Js','Three Js','Gsap'],
        problem: 'The interior firm needed a portfolio website that highlighted brand differentiation and project quality.',
        solution: ['Full UI/UX redesign', 'Applied responsive web standards','Built interior company website','Built dedicated portfolio homepage'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/asm.png',
        video: '/airotics_video/asm.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 11,
        title: 'S Hospital',
        category: 'corporate',
        client: 'S Hospital',
        year: '2023',
        tags: ['React','Node Js','Gsap','Next Js'],
        problem: 'The hospital needed a website to provide clear information to patients and automate database extraction and delivery.',
        solution: ['Full UI/UX redesign', 'Applied responsive web standards','Built hospital website','Automated data collection and transfer to hospital systems'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/swell.png',
        video: '/airotics_video/swell.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
      {
        id: 12,
        title: 'D Aviation',
        category: 'corporate',
        client: 'D Aviation',
        year: '2025',
        tags: ['React','Node Js','Gsap','Three Js','cesium','UTM'],
        problem: 'The client needed a blockchain website and MVP features suitable for attracting investors.',
        solution: ['Full UI/UX redesign', 'Applied responsive web standards','Built blockchain website','Implemented MVP features'],
        result: {
          traffic: '250% increase in mobile sales',
          inquiry: '40% decrease in cart abandonment',
          conversion: '180% increase in average order value'
        },
        image: '/airotics_thumbnail/dronutm.png',
        video: '/airotics_video/utm-pro.mp4',
        beforeAfter: {
          before: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop',
          after: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop'
        }
      },
     
     
    

  ];

export const quickPortfolioData = [
  { id: 101, title: 'Z agency', category: 'corporate', image: '/preview_thumbnail/1.png', projectUrl: 'https://wearezizo.com/' },
  // { id: 101, title: 'K Metaverse', category: 'corporate', image: '/preview_thumbnail/2.png', projectUrl: 'https://kprverse.com/' },
  { id: 101, title: 'W medical', category: 'corporate', image: '/preview_thumbnail/3.png', projectUrl: 'https://www.weedensenteret.no/' },
  { id: 101, title: 'S design', category: 'corporate', image: '/preview_thumbnail/4.png', projectUrl: 'https://sketch.london/' },
  { id: 101, title: 'P metaverse', category: 'corporate', image: '/preview_thumbnail/5.png', projectUrl: 'https://www.pavia.io/' },
  { id: 101, title: 'P Design', category: 'corporate', image: '/preview_thumbnail/6.png', projectUrl: 'https://pollykole.com' },
  { id: 101, title: 'R Food', category: 'corporate', image: '/preview_thumbnail/7.png', projectUrl: 'https://ringo-applepie.com/non/berry/' },
  { id: 101, title: 'L Shoping', category: 'corporate', image: '/preview_thumbnail/8.png', projectUrl: 'https://www.liberty-japan.co.jp' },
  { id: 101, title: 'S gallery', category: 'corporate', image: '/preview_thumbnail/9.png', projectUrl: 'https://sharafrashidov.life/' },
  { id: 101, title: 'C gallery', category: 'corporate', image: '/preview_thumbnail/10.png', projectUrl: 'https://closedonmondaygallery.com/' },
  { id: 101, title: 'D relastate', category: 'corporate', image: '/preview_thumbnail/11.png', projectUrl: 'https://www.deniot.com/' },
  { id: 101, title: 'M drink', category: 'corporate', image: '/preview_thumbnail/12.png', projectUrl: 'https://meadlight.com/en' },
  { id: 101, title: 'E relastate', category: 'corporate', image: '/preview_thumbnail/13.png', projectUrl: 'https://www.e5-holding.com/' },
  { id: 101, title: 'E relastate', category: 'corporate', image: '/preview_thumbnail/14.png', projectUrl: 'https://www.ekoatlantic.com/' },
  { id: 101, title: 'G shop', category: 'corporate', image: '/preview_thumbnail/15.png', projectUrl: 'https://www.grandeur-usa.com/' },
  { id: 101, title: 'A sound', category: 'corporate', image: '/preview_thumbnail/16.png', projectUrl: 'https://amaterasu.ai/' },
  { id: 101, title: 'U shoping', category: 'corporate', image: '/preview_thumbnail/17.png', projectUrl: 'https://www.uberprints.com/studio' },
  { id: 101, title: 'B sport', category: 'corporate', image: '/preview_thumbnail/18.png', projectUrl: 'https://dyo.blksport.com/#/sport/football/cut/men/color/navy/15e9a509da1' },
  { id: 101, title: 'O T shirt', category: 'corporate', image: '/preview_thumbnail/19.png', projectUrl: 'https://www.owayo.co.uk/konfigurator_html/?superid=konfigurator_html&mod_rewrite_rule=4b' },
  { id: 101, title: 'H character', category: 'corporate', image: '/preview_thumbnail/20.png', projectUrl: 'https://www.heroforge.com/' },
  { id: 101, title: 'G trip', category: 'corporate', image: '/preview_thumbnail/21.png', projectUrl: 'https://persepolis.getty.edu/' },
  { id: 101, title: 'M shop', category: 'corporate', image: '/preview_thumbnail/22.png', projectUrl: 'https://matruecannabis.com/en' },
  { id: 101, title: 'I blockchain', category: 'corporate', image: '/preview_thumbnail/23.png', projectUrl: 'https://www.igloo.inc/' },
  { id: 101, title: 'M blockchain', category: 'corporate', image: '/preview_thumbnail/24.png', projectUrl: 'https://www.metaquake.net/' },
  { id: 101, title: 'M blockchain', category: 'corporate', image: '/preview_thumbnail/25.png', projectUrl: 'https://kentatoshikura.com/' },
  { id: 101, title: 'L metaverse', category: 'corporate', image: '/preview_thumbnail/26.png', projectUrl: 'https://levora.cuberto.com/' },
  { id: 101, title: 'I app', category: 'corporate', image: '/preview_thumbnail/27.png', projectUrl: 'https://inzone.ai/' },
   {id: 101, title: 'H agency', category: 'corporate', image: '/preview_thumbnail/28.png', projectUrl: 'https://heysocial.io/' },
  
];

export default portfolioData;