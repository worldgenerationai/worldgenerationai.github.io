---
title: "Agency takeaways from the CAS computing teachers' conference at KCL"
description: "AI-human dances, autopilot analogies, and why everyone struggles at programming"
tags: ["networking"]
date: "2025-07-06"
---

On Saturday, Vid attended a [Computing at School](https://www.computingatschool.org.uk/) conference for computing teachers at King's College London. Hot on the heels of [the Festival of Computing](/blog/festival-of-computing/) earlier in the week, it offered another window into how AI is landing in England's classrooms. Some select takeaways related to agency:

## Working with AI without handing it the wheel

- Using copilot-style tools for development is an "AI-human dance": one makes a move, then the other. In current GenAI systems, the human always takes the first and last step. However, with agentic systems that changes. Is this a good thing?
- Natural language cannot replace code. Even if developers eventually stop writing code by hand — code remains the record of unambiguous instructions that a program executes. This will always have use cases for auditing and verification.
- AI tools are like powerful magic wands: they work brilliantly for some things and blow up in your face for others. Users need to learn when and how to use them.
- [aispec](https://github.com/cbora/aispec) proposes shifting AI-first development from implementation to *intent*, on the idea that capability grows with the clarity of your constraints.
- The aeroplane analogy stuck with us: pilots must know how to fly despite autopilot, and most airlines require manual landings — so skills don't fade and pilots can take over in an emergency.

## Agency in the classroom

- To build agency, encourage persistence and resilience: let pupils make errors, and show that trial and error is normal. The "best kept secret in programming" is that *everyone* struggles, writes, deletes, and re-writes. Share relatable stories of success that involve overcoming struggle.
- Structured process supports agency like training wheels — you throw them away once confident.
- Misconceptions about AI ("AI knows everything", "AI is a robot") come from games, social media, and films, and they impede agency — though defining what counts as a "misconception" is ethically tricky.
- Threshold (or "penny-drop") moments make great teaching material: a Teachable Machine classifier model trained on apples and bananas will work well with surprisingly little training data. But it will also make a confident guess about a photo of a bus. Seeing this helps pupils understand that the system is not so smart after all.
- One teacher, in a class on creating animations, allowed pupils to use AI tools and observed. Those who created AI-generated animations at first raced ahead of everyone else, but then plateaued, unable to progress far beyond the initial outputs, while the others made steady progress.
- Cautionary tales from schools: a headteacher who made an AI chatbot the default new-tab page on school computers, unaware of its minimum age requirement of 13; in another school, a teacher responsible for monitoring all pupils' recorded generative AI interactions had to manually investigate every "risky" keyword alert — which turned out to be overwhelmingly things like "how to kill an Enderman in Minecraft".

## Our reflections

What if pupils couldn't copy-paste AI output, and had to retype it instead? Retyping rather than copying is already a known strategy for learning programming — it forces slower, more deliberate thinking. Structured approaches like [PRIMM](https://primmportal.com/) could be extended to AI tools, building on work like [Real Chat AI](https://www.realchatai.org/). 

Also, the vocabulary we use to talk about AI matters more than we usually admit: "chain of thought", "reasoning", and "intelligence" all anthropomorphise LLM outputs — which, as we heard at both events this week, chips away at user agency.

## Tools worth knowing

The sessions surfaced a wealth of teaching tools: [Strype](https://strype.org/) (frame-based coding bridging blocks and text), [Greenfoot](https://www.greenfoot.org/) and [BlueJ](https://www.bluej.org/) (beginner-friendly environments for learning object-oriented programming), [Processing](https://processing.org/) (a flexible sketchbook for learning to code visually), and the [Wolfram Language](https://www.wolfram.com/language/) (with real-world datasets built in, great for quick visualisations). Also worth a read: the reports from the [Teacher Inquiry in Computing Education (TICE) project](https://computingeducationresearch.org/projects/tice-2024-25/), where computing teachers carried out their own classroom research with support from the University of Cambridge and the Raspberry Pi Foundation.
