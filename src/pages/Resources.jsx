import React, { useEffect } from "react";
import Header from "../components/header/Header";
import ScrollToTopButton from "../containers/topbutton/Top";
import Footer from "../components/footer/Footer";
import { StyleProvider } from "../contexts/StyleContext";
import { useDarkTheme } from "../hooks/useDarkTheme";
import "./Resources.scss";

// An index of AI literacy resources we recommend to teachers, gathered
// through our work with computing educators. Edit the categories and
// resources below as we find new ones.
const resourceCategories = [
  {
    title: "Classroom-ready lessons and curricula",
    resources: [
      {
        name: "Experience AI",
        url: "https://experience-ai.org/",
        description:
          "Lesson plans, activities, and training from the Raspberry Pi Foundation, with learning objectives mapped to UNESCO's AI competency framework for students."
      },
      {
        name: "TRAILS: Teaching Responsible AI Literacy in Schools",
        url: "https://trails.scot/",
        description:
          "Scottish resources for teaching responsible AI literacy, built with and for teachers."
      },
      {
        name: "Imagine AI — Center for Digital Thriving",
        url: "https://digitalthriving.gse.harvard.edu/imagine-ai-portfolio/",
        description:
          "Activities from Harvard's Center for Digital Thriving that get young people reflecting on how AI shapes their lives."
      },
      {
        name: "DAILy Curriculum — Everyday AI",
        url: "https://everyday-ai.org/resources/curriculum/daily-curriculum-v20",
        description:
          "A middle-school AI literacy curriculum from MIT covering how AI works, its ethical implications, and careers."
      },
      {
        name: "AI Literacy Lessons for Grades 6–12",
        url: "https://www.commonsense.org/education/collections/ai-literacy-lessons-for-grades-6-12",
        description:
          "Ready-to-teach lessons from Common Sense Education on AI's benefits, risks, and responsible use."
      },
      {
        name: "Our Futures and AI: A Youth Work Toolkit",
        url: "https://www.youthlink.scot/wp-content/uploads/AI-Toolkit-Digital-Youth-Work.pdf",
        description:
          "Activities and guidance for exploring AI with young people, co-created with them and published by YouthLink Scotland."
      }
    ]
  },
  {
    title: "Hands-on tools and activities",
    resources: [
      {
        name: "Teachable Machine",
        url: "https://teachablemachine.withgoogle.com/",
        description:
          "Train simple machine learning models in the browser — a quick way to show how classifiers work, including how confidently they can be wrong."
      },
      {
        name: "Machine Learning for Kids",
        url: "https://machinelearningforkids.co.uk/",
        description:
          "Build machine learning models and use them in Scratch and Python projects — a classroom staple for hands-on AI."
      },
      {
        name: "Prompt a large language model",
        url: "https://projects.raspberrypi.org/en/projects/prompt-a-large-language-model",
        description:
          "A hands-on coding project where young people build and refine their own prompts."
      },
      {
        name: "Somekone",
        url: "https://somekone.gen-ai.fi/library",
        description:
          "A social-media emulator from Finland's Generation AI programme that lets pupils see recommender systems and profiling at work."
      }
    ]
  },
  {
    title: "Teacher training and further learning",
    resources: [
      {
        name: "National Centre for Computing Education CPD",
        url: "https://teachcomputing.org/courses",
        description:
          "Free professional development for teachers in England, including on-demand courses about teaching generative AI."
      },
      {
        name: "Generative AI for Educators",
        url: "https://skillshop.exceedlms.com/student/path/1176018",
        description:
          "Google's free course for teachers on using generative AI, developed in collaboration with MIT."
      },
      {
        name: "Microsoft AI for Education",
        url: "https://learn.microsoft.com/en-us/training/educator-center/topics/ai-for-education",
        description:
          "Training paths and classroom toolkits for educators, including guidance on using generative AI safely and responsibly."
      },
      {
        name: "Code.org AI 101 for Teachers",
        url: "https://code.org/ai/pl/101",
        description:
          "A free foundational course on AI for any teacher, in short videos."
      },
      {
        name: "Elements of AI",
        url: "https://course.elementsofai.com/",
        description:
          "A free online course from the University of Helsinki introducing AI without requiring maths or programming."
      },
      {
        name: "Hello World magazine",
        url: "https://helloworld.cc/",
        description:
          "A free magazine for computing educators, regularly covering AI and how to teach it."
      }
    ]
  },
  {
    title: "Frameworks, pedagogy, and research",
    resources: [
      {
        name: "UNESCO AI competency frameworks",
        url: "https://www.unesco.org/en/digital-education/ai-future-learning/competency-frameworks",
        description:
          "International frameworks describing the AI competencies students and teachers need."
      },
      {
        name: "AI4K12",
        url: "https://ai4k12.org/activities/",
        description:
          "Activities and the 'Five Big Ideas in AI' framework for teaching AI across school years."
      },
      {
        name: "TeachAI Toolkit",
        url: "https://www.teachai.org/toolkit",
        description:
          "Guidance for schools and education authorities developing their own policies on AI in teaching and learning."
      },
      {
        name: "PRIMM",
        url: "https://primmportal.com/",
        description:
          "A structured approach to teaching programming (Predict, Run, Investigate, Modify, Make) that adapts well to working with AI tools."
      },
      {
        name: "Teacher Inquiry in Computing Education (TICE)",
        url: "https://computingeducationresearch.org/projects/tice-2024-25/",
        description:
          "Reports from computing teachers carrying out their own classroom research, supported by the University of Cambridge and the Raspberry Pi Foundation."
      }
    ]
  }
];

export default function Resources() {
  const [isDark, toggleTheme] = useDarkTheme();

  useEffect(() => {
    document.title = "AI literacy resources | CHAILD";
  }, []);

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: toggleTheme }}>
        <Header />
        <main id="main-content" className="resources-container fade-in-up">
          <h1 className="resources-title">
            AI literacy resources for teachers
          </h1>
          <p
            className="subTitle resources-intro"
          >
            Useful resources we have come across through our work with
            computing educators — for bringing AI into the classroom in a way
            that supports children's agency. However, please note that listing here does not indicate an endorsement from CHAILD.
          </p>

          {resourceCategories.map((category) => (
            <section
              key={category.title}
              className="resources-category"
              aria-label={category.title}
            >
              <h2 className="resources-category-title">{category.title}</h2>
              <ul className="resources-list">
                {category.resources.map((resource) => (
                  <li
                    key={resource.name}
                    className="resource-item"
                  >
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noreferrer"
                      className="resource-name"
                    >
                      {resource.name}
                    </a>
                    <p className="resource-description">
                      {resource.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          <p className="resources-outro">
            Know a resource that belongs here? We'd love to hear about it —
            find us via the links in the footer.
          </p>
        </main>
        <Footer />
        <ScrollToTopButton />
      </StyleProvider>
    </div>
  );
}
