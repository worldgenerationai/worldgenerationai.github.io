---
title: "CHAILD at the MIT Media Lab: designing benchmarks for human flourishing with AI"
description: "We joined 80 experts at the AHA workshop to design benchmarks measuring how AI affects people"
tags: ["impact", "talks"]
date: "2025-10-17"
url: "https://www.media.mit.edu/events/aha-flourishing-workshop/"
---

Most AI benchmarks measure how smart models are — but not how they affect the people using them. Do they deepen our understanding or quietly erode it? What about mental health and wellbeing? And what about human flourishing in general?

This week, Isobel and Vid joined the [Workshop for Designing Benchmarks for Human Flourishing with AI](https://www.media.mit.edu/events/aha-flourishing-workshop/), hosted by the MIT Media Lab's Advancing Humans with AI (AHA) research program in Cambridge, Massachusetts, on 14–15 October, to help address this gap.

The workshop brought together around 80 experts from over 40 organisations: universities including MIT, Harvard, Stanford, Oxford, Cambridge, and the National University of Singapore, alongside tech companies and non-profits such as OpenAI, Google DeepMind, Microsoft, Hugging Face, the Center for Humane Technology, Partnership on AI, and RAND. The meeting ran under the Chatham House Rule, so nothing here is attributed to any person or organisation. The two days were structured as working groups in three parallel tracks: **Comprehension, Reasoning & Agency** (measuring how AI systems improve human understanding while preserving autonomy and decision-making capacity), **Curiosity & Learning** (how AI supports continuous learning, intellectual growth, and curiosity-driven exploration), and **Healthy Social Lives** (how AI affects social connections, community engagement, and relationship quality).

Before the workshop even began, we kicked off with interesting conversations at the pre-workshop social: is agency about actually being in control, or about the *sense* of control? One colleague mentioned a study that found that people preferred the fine-grained control of moving a mouse cursor to select an object on a screen, even when pressing buttons to do the same is more efficient. We couldn't find this exact study, but it led us down a rabbit hole of interesting research on direct manipulation -- how low-level control aligned with high-level intent gives people a sense of agency.

## Day 1: scenarios and criteria

![The workshop opening presentation at the MIT Media Lab](/content/blog/images/aha-2025-opening.jpeg)

The first day focused on drafting user–chatbot conversation scenarios and defining criteria for what good and bad AI responses look like. Both Isobel and Vid joined the Comprehension, Reasoning & Agency track, but split into separate subgroups to cover more ground.

Vid's subgroup focused on the importance of user context: an LLM often cannot know what the appropriate response is without first eliciting the unknown context. This applies to topics like money, learning, and health. A good response starts by asking, not assuming, or at least giving the user multiple options. Isobel's subgroup looked at users retaining *epistemic agency*; when a user wants to learn and not be given answers directly or not be offered follow-ups, this clashes with what current general purpose chatbots are optimised for. The initial results from their draft benchmark suggested LLMs are very poor at sticking to such user requests.

Other ideas that stuck with us:

* How might we measure agency? Could we judge it by how quickly someone moves from being stuck to started on a task? Or how much time it takes for someone to switch from being frozen to action, especially in situations outside their comfort zone? Could there be an opportunity for people to train agency in their zone of proximal development?

* Giving users a way to see what a model "knows" or assumes about them, with an option to correct it, would help support agency; this falls inline with prior work on Open Learner Models

* Small nudges that steer away from mindless copy-pasting of AI output might help users be more deliberate and agentic too


## Day 2: running the benchmark

![The view over the Charles River and Boston skyline from the MIT Media Lab](/content/blog/images/aha-2025-boston.jpeg)

Overnight, the MIT team reorganised the scenarios and success/failure criteria from day 1 and ran benchmark tests against several LLMs. We spent day 2 digging into the results with the [benchmark tool](https://benchmark.cyborglab.org/) and discussing what's missing.

Some takeaways:

- Benchmarks can measure only a few aspects of what we care about — they need to be supplemented by guidelines and case studies.
- None of us could really say what "human flourishing" is. We agreed that doing well on the benchmark does not equate to supporting human flourishing in its entirety. Calling it a "human experience of AI" benchmark would be more honest.
- Some of the issues we targeted can be addressed at the application level with system prompts — but not all. We couldn't make LLMs hold back answers and encourage users to think for themselves, and we couldn't get them to ask about missing context instead of making assumptions, even with a variety of system prompts. This could be low-hanging fruit for future systems to improve on.
- Cognitive offloading increases short-term agency at the expense of long-term agency.

Two resources shared during the workshop that we found interesting: [Weval](https://weval.org/), an open platform for community-built AI evaluations, and the [Deliberative Reason Index](https://academic.oup.com/book/44646/chapter/378695400), a method for measuring deliberative reasoning in groups that might transfer to LLM conversations.

The organisers are compiling a workshop report — we'll share it here when it's published. Our thanks to the participants for the super interesting conversations, the AHA team for a wonderful and productive two days, and to the Omidyar Network for supporting the workshop.
