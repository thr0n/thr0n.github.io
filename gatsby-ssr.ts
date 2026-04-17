import React from "react"
import type { GatsbySSR } from "gatsby"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement("script", {
      key: "goatcounter",
      "data-goatcounter": "https://thr0n.goatcounter.com/count",
      async: true,
      src: "//gc.zgo.at/count.js",
    }),
  ])
}
