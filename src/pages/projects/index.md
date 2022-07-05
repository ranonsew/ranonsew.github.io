---
title: My Projects
display: My Projects
subtitle: A list of projects I have done or am in the process of doing
description: Projects that I have done or am in the process of doing
projects:
  School Projects:
    - name: "Personalify"
      link: "https://github.com/is216-supreme/is216-project-group15"
      desc: "First web dev project using any framework. A personality test based on a user's music preferences on spotify."
      icon: "i-carbon-music"
    - name: "Microservice SMS"
      link: "https://github.com/ranonsew/is213-microservice-sms"
      desc: "A portion of a group project. This part was to figure out how to use docker-compose and connect the main application (done by others) to an SMS api through AMQP. Done in Python and TypeScript."
      long_desc: ""
      icon: "i-carbon-api"
  Personal Projects:
    - name: "placeholder name"
      link: "https://www.google.com/"
      desc: "placeholder description"
      icon: "i-carbon-campsite"
    - name: "placeholder name"
      link: "https://www.yahoo.com/"
      desc: "placeholder description"
      icon: "i-carbon-campsite"
---

<ProjectList :projects="frontmatter.projects" />
