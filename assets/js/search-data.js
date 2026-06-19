// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/YizhuoCV.pdf";
          },
        },{id: "nav-cv-中",
          title: "CV(中)",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/YizhuoCV_CN.pdf";
          },
        },{id: "news-i-create-my-personal-website",
          title: 'I create my personal website. 🎉',
          description: "",
          section: "News",},{id: "news-i-pass-my-oral-qualifying-exam-and-become-a-ph-d-candidate",
          title: 'I pass my oral qualifying exam and become a Ph.D. candidate.',
          description: "",
          section: "News",},{id: "news-our-paper-viper-on-visibility-based-pursuit-evasion-leveraging-a-graph-attention-network-for-multi-agent-coordination-via-reinforcement-learning-has-been-accepted-to-the-conference-on-robot-learning-corl-see-you-in-munich-germany",
          title: 'Our paper ViPER, on visibility-based pursuit-evasion leveraging a graph attention network for multi-agent...',
          description: "",
          section: "News",},{id: "news-my-co-authored-paper-on-multi-agent-exploration-under-directional-field-of-view-has-been-accepted-to-icra-2025",
          title: 'My co-authored paper on multi-agent exploration under directional field of view has been...',
          description: "",
          section: "News",},{id: "news-our-paper-cogniplan-which-relies-on-conditional-generative-inpainting-model-to-predict-plausible-layouts-for-uncertainty-aware-planning-has-been-accepted-to-corl-2025-see-you-in-seoul-korea-check-out-the-project-page-of-cogniplan",
          title: 'Our paper CogniPlan, which relies on conditional generative inpainting model to predict plausible...',
          description: "",
          section: "News",},{id: "news-my-co-authored-paper-on-multi-agent-multi-target-monitoring-has-been-accepted-to-mrs-2025-in-singapore-another-co-authored-work-on-expert-guided-large-scale-exploration-is-accepted-to-the-active-perception-workshop-at-iros-2025-in-hangzhou-china-excited-to-meet-many-friends-at-both-events",
          title: 'My co-authored paper on multi-agent, multi-target monitoring has been accepted to MRS 2025...',
          description: "",
          section: "News",},{id: "news-i-m-thrilled-to-share-updates-on-the-two-papers-from-my-last-post-our-iros-2025-workshop-paper-won-the-best-paper-award-our-ieee-mrs-2025-paper-was-selected-as-a-best-paper-award-finalist-where-we-introduced-compass-a-multi-agent-extension-of-stamp",
          title: 'I’m thrilled to share updates on the two papers from my last post:...',
          description: "",
          section: "News",},{id: "news-i-successfully-defended-my-ph-d",
          title: 'I successfully defended my Ph.D.! 🎓',
          description: "",
          section: "News",},{id: "news-my-co-authored-paper-on-multi-agent-cooperative-navigation-using-option-critic-learning-has-been-accepted-to-ra-l",
          title: 'My co-authored paper on multi-agent cooperative navigation using option-critic learning has been accepted...',
          description: "",
          section: "News",},{id: "news-my-co-authored-paper-imaginav-on-scalable-embodied-navigation-using-video-world-model-has-been-accepted-to-iros-2026",
          title: 'My co-authored paper ImagiNav on scalable embodied navigation using video world model has...',
          description: "",
          section: "News",},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/wyzh98", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/yizhuowang98", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=7IDVzzUAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
