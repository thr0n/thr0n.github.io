"use strict";(self.webpackChunkthr0n_github_io=self.webpackChunkthr0n_github_io||[]).push([[366],{8556:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return w}});var a=n(7294),r=n(8733),l=n(1883),i=n(6920),o=n(5221),s=n(4372);var c=e=>{let{children:t}=e;return(0,r.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},m=n(3494),u=n(4232),p=n(9706),g=n(8170),h=n(8871),d=n(1151);function E(e){const t=Object.assign({h2:"h2",p:"p"},(0,d.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"Hi."),"\n",a.createElement(t.p,null,"I'm Hendrik, Hamburg based software engineer passionate about full stack development, software architecture,\ndistributed systems, and web technologies."))}var f=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?a.createElement(t,e,a.createElement(E,e)):E(e)};function Z(e){const t=Object.assign({h4:"h4",hr:"hr",p:"p",a:"a"},(0,d.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h4,null,"Projects"),"\n",a.createElement(t.hr),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://vgnmap.netlify.app/"},"vgnmap (vegan restaurant finder)")),"\n",a.createElement(t.p,null,a.createElement(t.a,{href:"https://dev.to/thr0n/how-to-solve-an-everyday-problem-with-node-js-gatsby-and-netlify-11fm"},"random episode")))}var v=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,d.ah)(),e.components);return t?a.createElement(t,e,a.createElement(Z,e)):Z(e)};var b=e=>{let{posts:t}=e;const{basePath:n,blogPath:a}=(0,m.Z)(),{siteTitle:h}=(0,u.Z)();return(0,r.tZ)(i.Z,null,(0,r.tZ)("h1",{sx:g.j},h),(0,r.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,r.tZ)(f,null)),(0,r.tZ)(o.Z,{text:"Latest Posts"},(0,r.tZ)(l.Link,{to:(0,p.Z)("/"+n+"/"+a)},"Read all posts")),(0,r.tZ)(s.Z,{posts:t,showTags:!1}),(0,r.tZ)(c,null,(0,r.tZ)(v,null)))};const y=()=>(0,r.tZ)(h.Z,null);var w=function(e){let{...t}=e;const{data:{allPost:n}}=t;return a.createElement(b,Object.assign({posts:n.nodes},t))}},6799:function(e,t,n){var a=n(8733),r=n(7294),l=n(1883),i=n(3494),o=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(r.Fragment,null,t.map(((e,t)=>(0,a.tZ)(r.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(l.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,o.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},4372:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(8733),r=n(7294),l=n(795),i=n(1883),o=n(6799);var s=e=>{let{post:t,showTags:n=!0}=e;return(0,a.tZ)(l.xu,{mb:4},(0,a.tZ)(i.Link,{to:t.slug,sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a,fontSize:[1,2,3],color:"text"}}},t.title),(0,a.tZ)("p",{sx:{color:"secondary",mt:1,a:{color:"secondary"},fontSize:[1,1,2]}},(0,a.tZ)("time",null,t.date),t.tags&&n&&(0,a.tZ)(r.Fragment,null," — ",(0,a.tZ)(o.Z,{tags:t.tags}))))};var c=e=>{let{posts:t,className:n="",showTags:r=!0}=e;return(0,a.tZ)("section",{sx:{mb:[5,6,7]},className:n},t.map((e=>(0,a.tZ)(s,{key:e.slug,post:e,showTags:r}))))}},8871:function(e,t,n){var a=n(7294),r=n(1883),l=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:o="",children:s=null,canonicalUrl:c=""}=e;const m=(0,l.Z)(),{siteTitle:u,siteTitleAlt:p,siteUrl:g,siteDescription:h,siteImage:d,author:E,siteLanguage:f}=m,Z={title:t?t+" | "+u:p,description:n||h,url:""+g+(i||""),image:""+g+(o||d)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:f}),a.createElement("title",null,Z.title),a.createElement("meta",{name:"description",content:Z.description}),a.createElement("meta",{name:"image",content:Z.image}),a.createElement("meta",{property:"og:title",content:Z.title}),a.createElement("meta",{property:"og:url",content:Z.url}),a.createElement("meta",{property:"og:description",content:Z.description}),a.createElement("meta",{property:"og:image",content:Z.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:Z.title}),a.createElement("meta",{name:"twitter:url",content:Z.url}),a.createElement("meta",{name:"twitter:description",content:Z.description}),a.createElement("meta",{name:"twitter:image",content:Z.image}),a.createElement("meta",{name:"twitter:image:alt",content:Z.description}),a.createElement("meta",{name:"twitter:creator",content:E}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,r.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,r.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,r.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-81283eee89eb7e4142a2.js.map