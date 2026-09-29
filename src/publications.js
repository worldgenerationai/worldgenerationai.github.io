/*
 * CHAILD publications, talks, and reports.
 *
 * This is the single place to edit the Publications page. Each entry:
 *   type    - "paper" | "talk" | "workshop" | "policy" (controls the section).
 *             "workshop" covers sessions we ran and the reports they produced;
 *             a paper presented at someone else's workshop is a "paper".
 *   date    - "YYYY-MM", or bare "YYYY" when the month is unknown. Sections
 *             list newest first, then by title, so a new entry can go
 *             anywhere in this array. Only the year is displayed.
 *   authors - author list as it should be cited (optional)
 *   title   - work title
 *   venue   - where it appeared (optional)
 *   links   - external links as [{ label, url }, ...] (optional). Label by
 *             what the destination is: DOI, Report, Event page. Where two
 *             links are the same kind, name the source instead, since the
 *             kind no longer tells them apart.
 *   post    - slug of a related news post in /public/content/blog (optional).
 *             More than one entry may link to the same post — e.g. both
 *             MPLS talks below link to "mpls-ai-ethics-conf".
 */
export const publications = [
  // Papers and accepted work
  {
    type: "paper",
    date: "2026-06",
    authors:
      "Isobel Voysey, Vidminas Vizgirda, Sarah Turner, Leslye Denisse Dias Duran, Zaki Pauzi, Manolis Mavrikis, Carina Prunkl, and Jun Zhao",
    title:
      "Agency in Child–AI Interaction: A Review of How It Is Conceptualised, Studied, and Supported in HCI",
    venue:
      "Proceedings of the 25th Annual ACM Interaction Design and Children Conference (IDC '26), 573–587",
    links: [{ label: "DOI", url: "https://doi.org/10.1145/3773077.3806105" }],
    post: "agency-lit-review"
  },
  {
    type: "paper",
    date: "2026-04",
    authors:
      "Vidminas Vizgirda, Isobel Voysey, Zaki Pauzi, Najme Babai, Eva Durall Gazulla, Jane Waite, Ayça Atabey, Sarah Turner, Manolis Mavrikis, and Jun Zhao",
    title: "Child-Centred AI-Mediated Collaborative Agency by Design",
    venue:
      "Extended Abstracts of the 2026 CHI Conference on Human Factors in Computing Systems (CHI EA '26), Article 928, 1–5",
    links: [{ label: "DOI", url: "https://doi.org/10.1145/3772363.3778754" }],
    post: "chaild-at-chi-2026"
  },
  {
    type: "paper",
    date: "2026-06",
    authors: "Zaki Pauzi and Manolis Mavrikis",
    title:
      "Should Machines Get to Judge? Rethinking the Design of AI-Mediated Assessment in Education",
    venue:
      "Companion Publication of the 2026 ACM Designing Interactive Systems Conference (DIS '26 Companion), 171–175",
    links: [{ label: "DOI", url: "https://doi.org/10.1145/3802974.3809410" }],
    post: "dis-2026"
  },
  {
    type: "paper",
    date: "2026-06",
    authors:
      "Zaki Pauzi, Vidminas Vizgirda, Leslye Denisse Dias Duran, and Manolis Mavrikis",
    title: "Towards Evaluating Student Agency in AI-Mediated Learning",
    venue:
      "Companion Publication of the 2026 ACM Designing Interactive Systems Conference (DIS '26 Companion), 221–225",
    links: [{ label: "DOI", url: "https://doi.org/10.1145/3802974.3809419" }],
    post: "dis-2026"
  },
  {
    type: "paper",
    date: "2026-07",
    authors: "Leslye Denisse Dias Duran and Isobel Voysey",
    title: "Friction as Support for Children's Agency",
    venue:
      "Third Frictional Design in Hybrid Human-AI Systems workshop at the Fifth International Conference on Hybrid Human–Artificial Intelligence (HHAI 2026), Brussels, Belgium, 7 July 2026",
    links: [
      {
        label: "Event page",
        url: "https://sites.google.com/view/frictional-ai/home"
      }
    ]
  },
  {
    type: "paper",
    date: "2026-05",
    authors: "Jan Hauters, Manolis Mavrikis, and Kaśka Porayska-Pomsta",
    title:
      "'Agency,' Because it Sounds Ethical: Interrogating Buzz in AI Ethics Literacy Through a Delphi Study",
    venue:
      "2nd International Conference on Artificial Intelligence and Education (ICAIE 2026), Taicang, China, 13–15 May 2026"
  },
  {
    type: "paper",
    date: "2026-06",
    authors:
      "Vidminas Vizgirda, Isobel Voysey, Leslye Denisse Dias Duran, Zaki Pauzi, Sarah Turner, Carina Prunkl, Manolis Mavrikis, and Jun Zhao",
    title: "Side-by-side LLM outputs encourage choice, supporting teens' agency",
    venue:
      "Proceedings of the 2nd Workshop on C3AI: Where Do Trust, Design, and Evaluation Meet in Child–AI Interaction? (C3AI '26), co-located with the 25th ACM Interaction Design and Children Conference (IDC '26), Brighton, United Kingdom, 22–25 June 2026, 5 pages",
    links: [{ label: "Event page", url: "https://c3aiidc26.di.uniba.it/" }]
  },
  {
    type: "paper",
    date: "2026-06",
    authors:
      "Vidminas Vizgirda, Isobel Voysey, Leslye Denisse Dias Duran, Zaki Pauzi, Sarah Turner, Carina Prunkl, Manolis Mavrikis, and Jun Zhao",
    title: "Side-by-side LLM outputs support choice and teens' agency",
    venue:
      "Poster presented at the Designing ethical and rights-respecting child-centred AI for learning workshop, co-located with the 25th ACM Interaction Design and Children Conference (IDC '26), Brighton, United Kingdom, 22–25 June 2026",
    links: [
      {
        label: "Event page",
        url: "https://www.digital-futures-for-children.net/events/IDC-2026"
      }
    ]
  },
  {
    type: "paper",
    date: "2025-07",
    authors: "Zaki Pauzi, Michael Dodman, and Manolis Mavrikis",
    title: "Automating Pedagogical Evaluation of LLM-based Conversational Agents",
    venue:
      "Proceedings of the Second Workshop on Automated Evaluation of Learning and Assessment Content (EvalLAC 2025), co-located with AIED 2025, Palermo, Italy",
    links: [
      {
        label: "CEUR-WS",
        url: "https://ceur-ws.org/Vol-4006/paper3short.pdf"
      },
      {
        label: "UCL Discovery",
        url: "https://discovery.ucl.ac.uk/id/eprint/10212920/"
      }
    ]
  },
  {
    type: "paper",
    date: "2025-06",
    authors: "Isobel Voysey and Jun Zhao",
    title:
      "Defining and supporting children's agency within the context of a datafied childhood",
    venue:
      "Grasping Data workshop at the 24th Annual ACM Interaction Design and Children Conference (IDC '25), Reykjavík, Iceland"
  },
  {
    type: "paper",
    date: "2025-06",
    authors: "Isobel Voysey and Jun Zhao",
    title: "Playfulness and agency in child-AI systems",
    venue:
      "Designing Playful and Ethical Child-AI Systems workshop at the 24th Annual ACM Interaction Design and Children Conference (IDC '25), Reykjavík, Iceland"
  },

  // Presentations & talks
  {
    type: "talk",
    date: "2025-09",
    authors: "Manolis Mavrikis and Jun Zhao",
    title:
      "Children's Agency in AIED: early insights from the UKRI-funded project CHAILD",
    venue:
      "AIEOU Collaborator Conference, AI in Education at Oxford University, 16 September 2025",
    links: [
      {
        label: "Event page",
        url: "https://www.education.ox.ac.uk/news/global-experts-unite-at-ai-in-education-conference/"
      }
    ]
  },
  {
    type: "talk",
    date: "2025-11",
    authors: "Vidminas Vizgirda",
    title:
      "CHAILD — Children's Agency in the Age of AI: Leveraging Interdisciplinarity",
    venue:
      "Computer Science Education group, University of Edinburgh, 10 November 2025",
    post: "edinburgh-cs-ed-2025"
  },
  {
    type: "talk",
    date: "2026-01",
    authors: "Leslye Denisse Dias Duran",
    title: "How Can AI Support Children's Agency?",
    venue: "MPLS Researcher Conference: AI & Ethics, University of Oxford",
    post: "mpls-ai-ethics-conf"
  },
  {
    type: "talk",
    date: "2026-01",
    authors: "Isobel Voysey",
    title: "Young voices in AI research: Piloting an MPLS-wide youth advisory group",
    venue: "MPLS Researcher Conference: AI & Ethics, University of Oxford",
    post: "mpls-ai-ethics-conf"
  },
  {
    type: "talk",
    date: "2026-04",
    authors: "Vidminas Vizgirda",
    title: "Child-Centred AI-Mediated Collaborative Agency by Design",
    venue: "SICSA Pre-CHI Day 2026, University of Stirling, 1 April 2026",
    links: [
      {
        label: "Event page",
        url: "https://sicsa.ac.uk/events/pre-chi-day-2026/"
      }
    ],
    post: "sicsa-pre-chi-2026"
  },
  {
    type: "talk",
    date: "2026-05",
    authors: "Vidminas Vizgirda, Isobel Voysey, Jun Zhao",
    title:
      "Computer Science & Philosophy: be in Control when Using AI applications",
    venue:
      "Beyond the Classroom, Trinity College, University of Oxford, 5 May 2026",
    post: "beyond-the-classroom-2026"
  },
  {
    type: "talk",
    date: "2026-05",
    authors: "Vidminas Vizgirda",
    title:
      "Vaikų ir paauglių agentiškumas sąveikaujant su generatyviniu DI (Children's and teenagers' agency when interacting with generative AI)",
    venue:
      "Institute of Applied Mathematics seminar series on AI in the study process, Vilnius University, 22 May 2026",
    links: [
      {
        label: "Event page",
        url: "https://mif.vu.lt/lt3/kas-vyksta-fakultete/naujienos/renginiai/5429-tmi-seminaras-%E2%80%9Edirbtinio-intelekto-naudojimas-studij%C5%B3-procese-i%C5%A1%C5%A1%C5%ABkiai-ir-sprendimo-b%C5%ABdai%E2%80%9C-2"
      }
    ],
    post: "vilnius-seminar-2026"
  },
  {
    type: "talk",
    date: "2026-06",
    authors: "Leslye Denisse Dias Duran",
    title: "Children's Agency and AI",
    venue:
      "UKRI AI Centre for Doctoral Training in Safe Artificial Intelligence Systems (SAINTS), University of York, held in Scarborough, 30 June – 1 July 2026"
  },
  {
    type: "talk",
    date: "2026-07",
    authors: "Vidminas Vizgirda",
    title: "AI and agency: helping young people think for themselves",
    venue: "Computing at School AI community event, online, 15 July 2026",
    links: [
      {
        label: "Event page",
        url: "https://www.computingatschool.org.uk/forum-news-blogs/2026/july/ai-and-agency-helping-young-people-think-for-themselves-cas-ai-event/"
      }
    ],
    post: "cas-ai-webinar-2026"
  },

  // Workshops we ran, and the reports that came out of them
  {
    type: "workshop",
    date: "2026-04",
    authors:
      "Vidminas Vizgirda, Hawra Rabaan, Jianing Wang, Khadija El Aadmi Laamech, and Christina Detsika",
    title: "Final report from the CAMCAD workshop at CHI 2026",
    venue: "CAMCAD Workshop at CHI 2026, Barcelona, Spain, 16 April 2026",
    links: [
      {
        label: "Report",
        url: "https://oxfordhcc.github.io/CAMCAD/report/"
      }
    ],
    post: "chaild-at-chi-2026"
  },
  {
    type: "workshop",
    date: "2026-05",
    authors:
      "Pattie Maes, Pat Pataranutaporn, Valdemar Danry, Auren Liu, and colleagues (incl. Vidminas Vizgirda and Isobel Voysey)",
    title:
      "Towards Open Benchmarks for Human Flourishing with AI: Report of the October '25 Workshop and Next Steps",
    venue: "MIT Media Lab",
    links: [
      {
        label: "Report",
        url: "https://www.media.mit.edu/projects/report-benchmarks-for-human-flourishing-with-ai/overview/"
      }
    ],
    post: "aha-benchmarks-report"
  },
  {
    type: "workshop",
    date: "2025-10",
    authors: "Manolis Mavrikis and Eirini Geraniou",
    title:
      "Crafting AI-supported Exploratory Learning Activities for the Mathematics Classroom",
    venue:
      "17th International Conference on Technology in Mathematics Teaching (ICTMT 17), London, 21–23 October 2025",
    links: [
      {
        label: "Programme",
        url: "https://ictmt17.org.uk/workshop-program/"
      }
    ],
    post: "ictmt17-workshop-2025"
  },

  // Policy reports
  {
    type: "policy",
    date: "2026-01",
    title:
      "A Rapid Review of AI Literacy Frameworks, with Policy Recommendations",
    authors: "Veli Hillman, Wayne Holmes, and Tania Duarte",
    venue: "Prepared for the Royal Society, London",
    links: [
      {
        label: "Report",
        url: "https://royalsociety.org/-/media/policy/projects/ai-in-education/hillman-et-al-a-rapid-review-of-ai-literacy-frameworks.pdf"
      }
    ],
    post: "royal-society-2026"
  },
  {
    type: "policy",
    date: "2026-02",
    title: "International AI Safety Report 2026",
    venue:
      "Chaired by Yoshua Bengio and written by over 100 independent experts, overseen by an Expert Advisory Panel nominated by more than 30 countries and intergovernmental organisations. Carina Prunkl is one of its two lead writers.",
    links: [{ label: "Report", url: "https://internationalaisafetyreport.org" }]
  },
  {
    type: "policy",
    date: "2026",
    title:
      "Joint letter to the UK Prime Minister on the UK social media policy for under-16s"
  },
  {
    type: "policy",
    date: "2025-11",
    title: "Joint Statement on Artificial Intelligence and the Rights of the Child",
    venue:
      "Led by the International Telecommunication Union with UNICEF, UNESCO, the ILO and the UN Committee on the Rights of the Child, and co-signed by over 50 organisations. Contributed to by the Oxford Child-Centred AI group.",
    links: [
      {
        label: "Statement",
        url: "https://www.itu.int/hub/publication/d-str-cyb_joint-2025/"
      }
    ]
  },
  {
    type: "policy",
    date: "2025-05",
    title:
      "Human Development Report 2025 — A matter of choice: People and possibilities in the age of AI",
    venue:
      "United Nations Development Programme. Carina Prunkl informed the report's discussion of autonomy and agency, and contributed a spotlight article on workers' agency.",
    links: [
      {
        label: "Report",
        url: "https://hdr.undp.org/content/human-development-report-2025"
      }
    ]
  },
  {
    type: "policy",
    date: "2025-07",
    title:
      "Me, Myself and AI: Understanding and safeguarding children's use of AI chatbots",
    venue:
      "Internet Matters. Jun Zhao was one of four experts who shaped the report's recommendations.",
    links: [
      {
        label: "Report",
        url: "https://www.internetmatters.org/hub/research/me-myself-and-ai-chatbot-research/"
      }
    ],
    post: "internet-matters-2025"
  }
];

// Section order and headings on the Publications page.
export const publicationSections = [
  { type: "paper", title: "Papers and accepted work" },
  { type: "talk", title: "Presentations & talks" },
  { type: "workshop", title: "Workshops" },
  { type: "policy", title: "Policy reports" }
];
