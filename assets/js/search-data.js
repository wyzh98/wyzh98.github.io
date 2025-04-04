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
        },{id: "news-i-create-my-personal-website",
          title: 'I create my personal website.🎉',
          description: "",
          section: "News",},{id: "news-i-pass-my-oral-qualifying-exam-and-become-a-ph-d-candidate",
          title: 'I pass my oral qualifying exam and become a Ph.D. candidate.',
          description: "",
          section: "News",},{id: "news-our-paper-viper-on-visibility-based-pursuit-evasion-leveraging-a-graph-attention-network-for-multi-agent-coordination-via-reinforcement-learning-has-been-accepted-at-conference-on-robot-learning-see-you-in-munich-germany",
          title: 'Our paper ViPER, on visibility-based pursuit-evasion leveraging a graph attention network for multi-agent...',
          description: "",
          section: "News",},{id: "news-my-co-authored-paper-on-multi-agent-exploration-under-directional-field-of-view-has-been-accepted-for-icra-25",
          title: 'My co-authored paper on multi-agent exploration under directional field of view has been...',
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
