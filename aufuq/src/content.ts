export type Language = "en" | "ar";

export interface ServiceContent {
  title: string;
  text: string;
  tags: [string, string, string];
}

export interface PageContent {
  nav: { about: string; services: string; approach: string; contact: string };
  language: string;
  skip: string;
  eyebrow: string;
  heroLine1: string;
  heroLine2: string;
  heroText: string;
  explore: string;
  start: string;
  orbitTop: string;
  orbitBottom: string;
  bottomNote: string;
  principles: [string, string, string];
  aboutLabel: string;
  aboutTitle: string;
  aboutText: string;
  aboutAside: string;
  servicesLabel: string;
  servicesTitle: string;
  servicesIntro: string;
  services: [ServiceContent, ServiceContent, ServiceContent];
  approachLabel: string;
  approachTitle: string;
  approachText: string;
  steps: [
    { title: string; text: string },
    { title: string; text: string },
    { title: string; text: string },
  ];
  contactLabel: string;
  contactTitle: string;
  contactText: string;
  form: {
    name: string;
    namePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    service: string;
    servicePlaceholder: string;
    idea: string;
    ideaPlaceholder: string;
    submit: string;
    hint: string;
    required: string;
    emailInvalid: string;
  };
  footerLine: string;
  backTop: string;
  dialog: {
    eyebrow: string;
    title: string;
    description: string;
    copy: string;
    download: string;
    close: string;
    copied: string;
    copyFailed: string;
  };
  brief: {
    heading: string;
    name: string;
    email: string;
    service: string;
    idea: string;
  };
}

export const content: Record<Language, PageContent> = {
  en: {
    nav: {
      about: "About",
      services: "What we do",
      approach: "Our approach",
      contact: "Your next idea",
    },
    language: "العربية",
    skip: "Skip to content",
    eyebrow: "AUFUQ — A NEW PERSPECTIVE",
    heroLine1: "See further.",
    heroLine2: "Build what’s next.",
    heroText:
      "A wider perspective. A clearer direction. We bring strategy, identity, and digital experiences together to give your next idea room to grow.",
    explore: "Explore the possibilities",
    start: "Start with an idea",
    orbitTop: "A WIDER PERSPECTIVE",
    orbitBottom: "A CLEARER DIRECTION",
    bottomNote: "There’s always more on the horizon.",
    principles: ["Think clearly.", "Make it meaningful.", "Move with purpose."],
    aboutLabel: "THE VIEW FROM HERE",
    aboutTitle: "Every new horizon starts with a different way of seeing.",
    aboutText:
      "Aufuq means horizon. It’s the possibility just ahead, and the perspective that helps you reach it. We connect thoughtful strategy with considered design to turn a promising idea into a clear, distinctive presence.",
    aboutAside: "Good ideas deserve a wider view.",
    servicesLabel: "WHAT WE DO",
    servicesTitle: "From the first thought to the next chapter.",
    servicesIntro:
      "Three connected disciplines. One clear direction. Find the right starting point for your idea.",
    services: [
      {
        title: "Strategy & direction",
        text: "Find the heart of your idea. Define what matters, who it’s for, and the direction that brings it all together.",
        tags: ["Positioning", "Purpose", "Creative direction"],
      },
      {
        title: "Brand & identity",
        text: "Give your vision a distinctive voice and a visual world that feels considered, consistent, and unmistakably yours.",
        tags: ["Visual identity", "Brand voice", "Design systems"],
      },
      {
        title: "Digital experiences",
        text: "Bring your story to life through intuitive websites and digital experiences, designed around the people who use them.",
        tags: ["Web design", "User experience", "Development"],
      },
    ],
    approachLabel: "HOW WE THINK",
    approachTitle: "Curiosity first. Clarity throughout.",
    approachText:
      "Great work begins with the right questions. Our approach makes space to explore, then brings the focus to move forward.",
    steps: [
      {
        title: "Discover",
        text: "Listen closely. Ask good questions. Understand the ambition, the audience, and the opportunity ahead.",
      },
      {
        title: "Shape",
        text: "Connect the insights. Explore possibilities. Build a clear direction with a strong idea at its centre.",
      },
      {
        title: "Create",
        text: "Turn direction into something tangible. Design with care, refine the details, and bring the idea to life.",
      },
    ],
    contactLabel: "YOUR NEXT CHAPTER",
    contactTitle: "What’s on your horizon?",
    contactText:
      "A fresh idea, a new direction, or a question worth exploring. Put your thoughts together in a project brief, ready to share.",
    form: {
      name: "Your name",
      namePlaceholder: "How should we address you?",
      email: "Email address",
      emailPlaceholder: "you@example.com",
      service: "What do you have in mind?",
      servicePlaceholder: "Choose a starting point",
      idea: "Tell us about your idea",
      ideaPlaceholder:
        "What would you like to build? Share your goals, questions, or the possibility you’re exploring.",
      submit: "Create my project brief",
      hint: "Create a brief to copy or download, ready to share. No message is sent.",
      required: "Please complete this field.",
      emailInvalid: "Please enter a valid email address.",
    },
    footerLine: "A fresh perspective. A clear direction.",
    backTop: "Back to the horizon",
    dialog: {
      eyebrow: "YOUR NEXT STEP",
      title: "Your idea, ready to share.",
      description:
        "Review your project brief below, then copy or download it to share with your team. No message has been sent.",
      copy: "Copy brief",
      download: "Download brief",
      close: "Close brief",
      copied: "Brief copied to your clipboard.",
      copyFailed:
        "Your browser couldn’t copy the brief. You can download it instead.",
    },
    brief: {
      heading: "AUFUQ — Project brief",
      name: "Name",
      email: "Email",
      service: "Area of interest",
      idea: "The idea",
    },
  },
  ar: {
    nav: {
      about: "عن أفق",
      services: "ماذا نقدّم",
      approach: "منهجنا",
      contact: "فكرتك القادمة",
    },
    language: "English",
    skip: "انتقل إلى المحتوى",
    eyebrow: "أفق — رؤية جديدة",
    heroLine1: "وسّع آفاقك.",
    heroLine2: "واصنع القادم.",
    heroText:
      "رؤية أوسع. واتجاه أوضح. نجمع بين الاستراتيجية والهوية والتجارب الرقمية، لنمنح فكرتك القادمة مساحة تنمو فيها.",
    explore: "اكتشف الإمكانات",
    start: "لنبدأ بفكرة",
    orbitTop: "رؤية أوسع",
    orbitBottom: "اتجاه أوضح",
    bottomNote: "دائمًا ما يحمل الأفق مزيدًا من الإمكانات.",
    principles: ["فكّر بوضوح.", "اصنع ما له معنى.", "تقدّم نحو هدفك."],
    aboutLabel: "من هنا نرى",
    aboutTitle: "كل أفق جديد يبدأ بنظرة مختلفة.",
    aboutText:
      "الأفق هو ما نتطلّع إليه؛ مساحة للإمكانات، ورؤية تساعدنا على الوصول. في أفق، نصل بين استراتيجية مدروسة وتصميم متقن، لنحوّل الفكرة الواعدة إلى حضور واضح ومميّز.",
    aboutAside: "الأفكار الجيدة تستحق رؤية أوسع.",
    servicesLabel: "ماذا نقدّم",
    servicesTitle: "من أول فكرة إلى فصل جديد.",
    servicesIntro:
      "ثلاثة مجالات مترابطة، يجمعها اتجاه واضح. اكتشف نقطة البداية المناسبة لفكرتك.",
    services: [
      {
        title: "الاستراتيجية والتوجّه",
        text: "نصل إلى جوهر فكرتك، ونحدّد ما يهمّ، ولمن نقدّمه، والاتجاه الذي يجمع هذه العناصر في رؤية واحدة.",
        tags: ["التموضع", "الغاية", "التوجّه الإبداعي"],
      },
      {
        title: "العلامة والهوية",
        text: "نمنح رؤيتك صوتًا مميّزًا وعالمًا بصريًا متناسقًا، يعبّر عنك بوضوح ويترك انطباعًا يدوم.",
        tags: ["الهوية البصرية", "صوت العلامة", "أنظمة التصميم"],
      },
      {
        title: "التجارب الرقمية",
        text: "نمنح قصتك حضورًا حيًا عبر مواقع وتجارب رقمية سهلة الاستخدام، نضع احتياجات الناس في صميم تصميمها.",
        tags: ["تصميم المواقع", "تجربة المستخدم", "التطوير"],
      },
    ],
    approachLabel: "كيف نفكّر",
    approachTitle: "فضول يقودنا. ووضوح يرافقنا.",
    approachText:
      "يبدأ العمل الجيد بالأسئلة المناسبة. نمنح الاستكشاف مساحته، ثم نرسم اتجاهًا واضحًا يساعدنا على التقدّم.",
    steps: [
      {
        title: "نكتشف",
        text: "نستمع باهتمام، ونطرح الأسئلة المناسبة، لنفهم الطموح والجمهور والفرصة التي أمامنا.",
      },
      {
        title: "نبلور",
        text: "نربط ما تعلّمناه، ونستكشف الاحتمالات، لنصوغ اتجاهًا واضحًا تتمحور حوله فكرة قوية.",
      },
      {
        title: "نبدع",
        text: "نحوّل الرؤية إلى واقع ملموس، ونصمّم بعناية، ونصقل التفاصيل حتى تنبض الفكرة بالحياة.",
      },
    ],
    contactLabel: "فصلك القادم",
    contactTitle: "ماذا ترى في أفقك؟",
    contactText:
      "فكرة جديدة، أو اتجاه مختلف، أو سؤال يستحق الاستكشاف. اجمع أفكارك في موجز مشروع جاهز للمشاركة.",
    form: {
      name: "اسمك",
      namePlaceholder: "بماذا نناديك؟",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@example.com",
      service: "ما الذي تفكّر فيه؟",
      servicePlaceholder: "اختر نقطة البداية",
      idea: "أخبرنا عن فكرتك",
      ideaPlaceholder:
        "ما الذي ترغب في بنائه؟ شارك أهدافك أو أسئلتك أو الفرصة التي تستكشفها.",
      submit: "أنشئ موجز مشروعي",
      hint: "أنشئ موجزًا يمكنك نسخه أو تنزيله ومشاركته. لن تُرسل أي رسالة.",
      required: "يرجى إكمال هذا الحقل.",
      emailInvalid: "يرجى إدخال عنوان بريد إلكتروني صحيح.",
    },
    footerLine: "رؤية جديدة. واتجاه واضح.",
    backTop: "العودة إلى البداية",
    dialog: {
      eyebrow: "خطوتك القادمة",
      title: "فكرتك جاهزة للمشاركة.",
      description:
        "راجع موجز مشروعك أدناه، ثم انسخه أو نزّله لمشاركته مع فريقك. لم تُرسل أي رسالة.",
      copy: "نسخ الموجز",
      download: "تنزيل الموجز",
      close: "إغلاق الموجز",
      copied: "تم نسخ الموجز إلى الحافظة.",
      copyFailed: "تعذّر على المتصفح نسخ الموجز. يمكنك تنزيله بدلًا من ذلك.",
    },
    brief: {
      heading: "أفق — موجز المشروع",
      name: "الاسم",
      email: "البريد الإلكتروني",
      service: "مجال الاهتمام",
      idea: "الفكرة",
    },
  },
};
