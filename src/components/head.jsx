import React from "react"
import { Helmet } from "react-helmet"

export function Head({ data }) {
  return (
    <Helmet
      title="Matilda's Cupcake Emporium"
      meta={[
        {
          name: "description",
          content: "Landing page for cupcake store",
        },
        {
          name: "keywords",
          content: "gatsby, bootstrap, template, starter, react",
        },
      ]}
      link={[
        {
          // Bootstrap
          rel: "stylesheet",
          href:
            "https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css",
          integrity:
            "sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh",
          crossorigin: "anonymous",
        },
        {
          // Bootstrap Font Awesome 
          rel: "stylesheet",
          href:
            "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css",
          integrity:
            "sha384-wESLQ85D6gbsF459vf1CiZ2+rr+CsxRY0RpiF1tLlQpDnAgg6rwdsUF1+Ics2bni",
          crossorigin: "anonymous",
        },
        {
          // Lato Font
          rel: "preconnect",
          href:
          "https://fonts.gstatic.com",
          
        },
        {
          // Lato Font
          rel: "stylesheet",
          href:
          "https://fonts.googleapis.com/css2?family=Lato:ital,wght@1,300&display=swap",
          
        },
        {
          // Yellowtail Font
          rel: "preconnect",
          href:
          "https://fonts.gstatic.com",
          
        },
        {
          // Yellowtail Font
          rel: "stylesheet",
          href:
          "https://fonts.googleapis.com/css2?family=Yellowtail&display=swap",
          
        },
      ]}
      
    >
      <html lang="en-US" amp />

      <script
        src="https://kit.fontawesome.com/d58dae4cfc.js"
        crossorigin="anonymous"
      ></script>
    </Helmet>
  )
}

