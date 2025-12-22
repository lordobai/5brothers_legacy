// Translation keys and types
export type Language = 'en' | 'es' | 'fr' | 'pt' | 'ar' | 'zh';

export const SUPPORTED_LANGUAGES: { code: Language; name: string; nativeName: string }[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'zh', name: 'Chinese (Simplified)', nativeName: '简体中文' },
];

export const DEFAULT_LANGUAGE: Language = 'en';

// Translation structure
export interface Translations {
  // Common
  common: {
    loading: string;
    error: string;
    success: string;
    info: string;
    cancel: string;
    submit: string;
    search: string;
    filter: string;
    clear: string;
    close: string;
    back: string;
    next: string;
    previous: string;
    viewMore: string;
    learnMore: string;
    readMore: string;
  };

  // Navigation
  nav: {
    home: string;
    whoWeAre: string;
    ourTeam: string;
    initiatives: string;
    getInvolved: string;
    help: string;
    donate: string;
    contact: string;
  };

  // Homepage
  home: {
    hero: {
      title: string;
      subtitle: string;
      ctaDonate: string;
      ctaGetInvolved: string;
    };
    about: {
      title: string;
      description: string;
      mission: string;
      vision: string;
      impact: string;
    };
    metrics: {
      title: string;
      subtitle: string;
      peopleImpacted: string;
      communitiesServed: string;
      volunteersEngaged: string;
      programAreas: string;
    };
    initiatives: {
      title: string;
      subtitle: string;
      educationTitle: string;
      educationDescription: string;
      healthTitle: string;
      healthDescription: string;
      washTitle: string;
      washDescription: string;
      viewAll: string;
    };
    updates: {
      title: string;
      subtitle: string;
      readMore: string;
      viewAll: string;
      newSchoolTitle: string;
      newSchoolExcerpt: string;
      healthClinicTitle: string;
      healthClinicExcerpt: string;
      cleanWaterTitle: string;
      cleanWaterExcerpt: string;
      categoryEducation: string;
      categoryHealth: string;
      categoryWash: string;
    };
    getInvolved: {
      title: string;
      subtitle: string;
      donateTitle: string;
      donateDescription: string;
      volunteerTitle: string;
      volunteerDescription: string;
      partnerTitle: string;
      partnerDescription: string;
      getStarted: string;
    };
    partners: {
      title: string;
      subtitle: string;
    };
  };

  // Help Page
  help: {
    title: string;
    subtitle: string;
    disclaimer: string;
    searchPlaceholder: string;
    resourceType: string;
    serviceArea: string;
    sortBy: string;
    sortRelevance: string;
    sortAZ: string;
    sortNewest: string;
    noResults: string;
    noResultsDescription: string;
    clearFilters: string;
    submitResource: string;
    resourcesCount: string;
    visitWebsite: string;
    call: string;
    email: string;
    serviceAreaLabel: string;
    eligibilityLabel: string;
    form: {
      title: string;
      description: string;
      orgName: string;
      orgNameRequired: string;
      resourceType: string;
      resourceTypeRequired: string;
      descriptionLabel: string;
      descriptionRequired: string;
      descriptionMax: string;
      linkUrl: string;
      linkUrlRequired: string;
      linkUrlInvalid: string;
      phone: string;
      email: string;
      address: string;
      serviceArea: string;
      eligibility: string;
      languages: string;
      submit: string;
      submitting: string;
      success: string;
      successMessage: string;
    };
    resourceTypes: {
      foodAssistance: string;
      housing: string;
      healthcare: string;
      mentalHealth: string;
      employment: string;
      education: string;
      legalAid: string;
      transportation: string;
      financialAssistance: string;
      domesticViolence: string;
      disabilityServices: string;
      immigrationSupport: string;
      other: string;
    };
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    getInvolved: string;
    contact: string;
    followUs: string;
    newsletter: string;
    newsletterPlaceholder: string;
    subscribe: string;
    copyright: string;
    volunteer: string;
    partner: string;
    advocate: string;
    waysToSupport: string;
    makeAGift: string;
    ourPartners: string;
    ourReports: string;
    updatesEvents: string;
    privacyPolicy: string;
    termsOfService: string;
  };

  // Who We Are Page
  whoWeAre: {
    title: string;
    subtitle: string;
    ourStory: string;
    storyText1: string;
    storyText2: string;
    storyText3: string;
    missionVisionGoals: string;
    mission: string;
    missionText: string;
    vision: string;
    visionText: string;
    goals: string;
    coreValues: string;
    coreValuesSubtitle: string;
    joinUs: string;
    joinUsSubtitle: string;
    getInvolved: string;
    makeDonation: string;
    values: {
      empowerment: { title: string; description: string };
      equality: { title: string; description: string };
      transparency: { title: string; description: string };
      innovation: { title: string; description: string };
      collaboration: { title: string; description: string };
      impact: { title: string; description: string };
    };
    goalsList: {
      education: { title: string; description: string };
      healthcare: { title: string; description: string };
      cleanWater: { title: string; description: string };
      youthEmpowerment: { title: string; description: string };
    };
  };

  // Contact Us Page
  contact: {
    title: string;
    subtitle: string;
    getInTouch: string;
    sendMessage: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    successMessage: string;
    officeHours: string;
    mondayFriday: string;
    saturday: string;
    address: string;
  };

  // Common Page Elements
  pages: {
    initiatives: {
      title: string;
      subtitle: string;
      supportInitiatives: string;
      supportSubtitle: string;
    };
    team: {
      title: string;
      subtitle: string;
    };
    partners: {
      title: string;
      subtitle: string;
    };
  };

  // Our Team Page
  ourTeam: {
    hero: {
      title: string;
      subtitle: string;
    };
    leadership: {
      title: string;
      subtitle: string;
    };
    roles: {
      executiveDirector: string;
      programDirector: string;
      financeDirector: string;
      educationCoordinator: string;
      educationProgramLead: string;
      healthProgramsManager: string;
      communityOutreachCoordinator: string;
    };
    bios: {
      john: string;
      sarah: string;
      michael: string;
      amina: string;
      scott: string;
      david: string;
      grace: string;
    };
    contact: string;
    joinTeam: {
      title: string;
      subtitle: string;
      viewPositions: string;
    };
  };

  // Our Initiatives Page
  ourInitiatives: {
    hero: {
      title: string;
      subtitle: string;
    };
    impact: string;
    viewPrograms: string;
    hidePrograms: string;
    programs: string;
    initiatives: {
      education: {
        title: string;
        description: string;
        impact: string;
        programs: {
          scholarship: string;
          infrastructure: string;
          teacherTraining: string;
          digitalLearning: string;
          vocational: string;
        };
      };
      health: {
        title: string;
        description: string;
        impact: string;
        programs: {
          clinics: string;
          nutrition: string;
          maternalChild: string;
          education: string;
        };
      };
      wash: {
        title: string;
        description: string;
        impact: string;
        programs: {
          wells: string;
          sanitation: string;
          hygiene: string;
          monitoring: string;
        };
      };
      disaster: {
        title: string;
        description: string;
        impact: string;
        programs: {
          relief: string;
          shelter: string;
          food: string;
          recovery: string;
        };
      };
      youth: {
        title: string;
        description: string;
        impact: string;
        programs: {
          leadership: string;
          entrepreneurship: string;
          mentorship: string;
          career: string;
        };
      };
      advocacy: {
        title: string;
        description: string;
        impact: string;
        programs: {
          research: string;
          mobilization: string;
          engagement: string;
          campaigns: string;
          legal: string;
          rights: string;
        };
      };
    };
    cta: {
      title: string;
      subtitle: string;
      donate: string;
      getInvolved: string;
    };
  };

  // Get Involved Page
  getInvolved: {
    hero: {
      title: string;
      subtitle: string;
    };
    types: {
      volunteer: {
        title: string;
        subtitle: string;
        description: string;
      };
      partner: {
        title: string;
        subtitle: string;
        description: string;
      };
      advocate: {
        title: string;
        subtitle: string;
        description: string;
      };
    };
    form: {
      name: string;
      email: string;
      phone: string;
      availability: string;
      availabilityPlaceholder: string;
      skillsInterests: string;
      skillsPlaceholder: string;
      organization: string;
      partnershipType: string;
      partnershipOptions: {
        financial: string;
        collaboration: string;
        resources: string;
        other: string;
      };
      platform: string;
      platformPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      success: string;
      successMessage: string;
    };
  };

  // Updates & Events Page
  updatesEvents: {
    hero: {
      title: string;
      subtitle: string;
    };
    events: {
      title: string;
      subtitle: string;
      timeFilter: string;
      typeFilter: string;
      upcoming: string;
      past: string;
      all: string;
      internal: string;
      external: string;
      inPerson: string;
      virtual: string;
      hybrid: string;
      hostedBy: string;
      viewEvent: string;
      externalDisclaimer: string;
      emptyState: {
        title: string;
        message: string;
      };
      table: {
        eventName: string;
        date: string;
        type: string;
        location: string;
        link: string;
      };
    };
  };

  // Our Partners Page
  ourPartners: {
    hero: {
      title: string;
      subtitle: string;
    };
    trustedPartnerships: {
      title: string;
      subtitle: string;
    };
    becomePartner: {
      title: string;
      subtitle: string;
      button: string;
    };
  };

  // Our Reports Page
  ourReports: {
    hero: {
      title: string;
      subtitle: string;
    };
    transparency: {
      title: string;
      description: string;
    };
    categories: {
      all: string;
      annual: string;
      financial: string;
      audit: string;
    };
    downloadPdf: string;
  };

  // Make a Gift Page
  makeAGift: {
    hero: {
      title: string;
      subtitle: string;
    };
    yourGift: {
      title: string;
    };
    impact: {
      schoolSupplies: string;
      cleanWater: string;
      healthcare: string;
    };
    form: {
      donationDetails: string;
      donationType: string;
      oneTime: string;
      monthly: string;
      currency: string;
      amount: string;
      customAmount: string;
      name: string;
      email: string;
      phone: string;
      proceedToPayment: string;
    };
    whyDonate: {
      title: string;
      directToPrograms: string;
      transparentReporting: string;
      taxDeductible: string;
      securePayment: string;
    };
    privacy: {
      title: string;
      description: string;
    };
  };

  // Ways to Support Page
  waysToSupport: {
    hero: {
      title: string;
      subtitle: string;
    };
    methods: {
      fund: {
        title: string;
        description: string;
        action: string;
      };
      voice: {
        title: string;
        description: string;
        action: string;
      };
      project: {
        title: string;
        description: string;
        action: string;
      };
      collaborate: {
        title: string;
        description: string;
        action: string;
      };
      products: {
        title: string;
        description: string;
        action: string;
      };
    };
    impactStories: {
      title: string;
      subtitle: string;
    };
    stories: {
      story1: {
        quote: string;
        author: string;
      };
      story2: {
        quote: string;
        author: string;
      };
      story3: {
        quote: string;
        author: string;
      };
    };
  };
}

