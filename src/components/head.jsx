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
        }
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
