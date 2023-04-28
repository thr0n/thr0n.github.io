"use strict";(self.webpackChunkthr0n_github_io=self.webpackChunkthr0n_github_io||[]).push([[603],{4765:function(e,t,n){n.d(t,{F:function(){return p},Z:function(){return h}});var a=n(7294),o=n(8733),r=n(795),i=n(6920),l=n(6799),s=n(8871);var c=e=>{let{post:t}=e;return null};const A=["16px","8px","4px"].map((e=>"rgba(0, 0, 0, 0.1) 0px "+e+" "+e+" 0px"));var m=e=>{let{data:{post:t},children:n}=e;return(0,o.tZ)(i.Z,null,(0,o.tZ)(r.X6,{as:"h1",variant:"styles.h1"},t.title),(0,o.tZ)("p",{sx:{color:"secondary",mt:3,a:{color:"secondary"},fontSize:[1,1,2]}},(0,o.tZ)("time",null,t.date),t.tags&&(0,o.tZ)(a.Fragment,null," — ",(0,o.tZ)(l.Z,{tags:t.tags})),t.timeToRead&&" — ",t.timeToRead&&(0,o.tZ)("span",null,t.timeToRead," min read")),(0,o.tZ)("section",{sx:{my:5,".gatsby-resp-image-wrapper":{my:[4,4,5],borderRadius:"4px",boxShadow:A.join(", "),".gatsby-resp-image-image":{borderRadius:"4px"}},variant:"layout.content"}},n),(0,o.tZ)(c,{post:t}))};const p=e=>{var t,n,a;let{data:{post:r}}=e;return(0,o.tZ)(s.Z,{title:r.title,description:r.description?r.description:r.excerpt,image:r.banner?null===(t=r.banner)||void 0===t||null===(n=t.childImageSharp)||void 0===n||null===(a=n.resize)||void 0===a?void 0:a.src:void 0,pathname:r.slug,canonicalUrl:r.canonicalUrl})};function h(e){let{...t}=e;return a.createElement(m,t)}},6799:function(e,t,n){var a=n(8733),o=n(7294),r=n(1883),i=n(3494),l=n(9706);t.Z=e=>{let{tags:t}=e;const{tagsPath:n,basePath:s}=(0,i.Z)();return(0,a.tZ)(o.Fragment,null,t.map(((e,t)=>(0,a.tZ)(o.Fragment,{key:e.slug},!!t&&", ",(0,a.tZ)(r.Link,{sx:e=>{var t;return{...null===(t=e.styles)||void 0===t?void 0:t.a}},to:(0,l.Z)("/"+s+"/"+n+"/"+e.slug)},e.name)))))}},8871:function(e,t,n){var a=n(7294),o=n(1883),r=n(4232);t.Z=e=>{let{title:t="",description:n="",pathname:i="",image:l="",children:s=null,canonicalUrl:c=""}=e;const A=(0,r.Z)(),{siteTitle:m,siteTitleAlt:p,siteUrl:h,siteDescription:d,siteImage:u,author:g,siteLanguage:b}=A,f={title:t?t+" | "+m:p,description:n||d,url:""+h+(i||""),image:""+h+(l||u)};return a.createElement(a.Fragment,null,a.createElement("html",{lang:b}),a.createElement("title",null,f.title),a.createElement("meta",{name:"description",content:f.description}),a.createElement("meta",{name:"image",content:f.image}),a.createElement("meta",{property:"og:title",content:f.title}),a.createElement("meta",{property:"og:url",content:f.url}),a.createElement("meta",{property:"og:description",content:f.description}),a.createElement("meta",{property:"og:image",content:f.image}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{property:"og:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:title",content:f.title}),a.createElement("meta",{name:"twitter:url",content:f.url}),a.createElement("meta",{name:"twitter:description",content:f.description}),a.createElement("meta",{name:"twitter:image",content:f.image}),a.createElement("meta",{name:"twitter:image:alt",content:f.description}),a.createElement("meta",{name:"twitter:creator",content:g}),a.createElement("meta",{name:"gatsby-theme",content:"@lekoarts/gatsby-theme-minimal-blog"}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:(0,o.withPrefix)("/favicon-32x32.png")}),a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:(0,o.withPrefix)("/favicon-16x16.png")}),a.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:(0,o.withPrefix)("/apple-touch-icon.png")}),c?a.createElement("link",{rel:"canonical",href:c}):null,s)}},7434:function(e,t,n){n.r(t),n.d(t,{Head:function(){return l.F},default:function(){return s}});var a=n(7294),o=n(1151);function r(e){const t=Object.assign({p:"p",h3:"h3",em:"em",span:"span",a:"a",code:"code",pre:"pre",img:"img"},(0,o.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.p,null,"A few days ago, my neighbours discovered that someone had broken into their cellar. That was unpleasant news, both for them and for me. There are no treasures stored in my cellar, but the situation led me to the following question: What can I do if someone invades my home while I am away?"),"\n",a.createElement(t.p,null,"From the perspective of a software developer, the answer is of course obvious. I just need a surveillance camera pointed at the front door that takes several photos when someone opens it. Of course, this does not prevent someone from coming in, but at least the person is photographed in the process 📸 And I know from German television that these can be quite helpful in tracking down the culprits 😉"),"\n",a.createElement(t.h3,null,"Hardware"),"\n",a.createElement(t.p,null,"In fact, you don't need much at all for a simple implementation of this idea. I use my old ",a.createElement(t.em,null,"Raspberry Pi Model B+")," as a basis, which still contains an old ",a.createElement(t.em,null,"SD card")," for the operating system. I also got the Pi ",a.createElement(t.em,null,"camera module")," as a Christmas present years ago. Unfortunately, I seem to have lost my USB ",a.createElement(t.em,null,"Wifi adapter"),". So I bought a new one, along with a simple ",a.createElement(t.em,null,"motion detector"),"."),"\n",a.createElement(t.p,null,"So with this hardware I can now take photos when a movement is detected in the flat. But what if the SD card runs out of space or a possible burglar takes it?"),"\n",a.createElement(t.span,{dangerouslySetInnerHTML:{__html:'<span\n      class="gatsby-resp-image-wrapper"\n      style="position: relative; display: block; margin-left: auto; margin-right: auto; max-width: 960px; "\n    >\n      <span\n    class="gatsby-resp-image-background-image"\n    style="padding-bottom: 133.33333333333331%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAbABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAQAC/9oADAMBAAIQAxAAAAHSUYzcuocQVknKjYkr/8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAxEEEBL/2gAIAQEAAQUCZiqrydbYTFpUvDZgrJRvRmAzOv/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/ASH/xAAWEQEBAQAAAAAAAAAAAAAAAAAAERD/2gAIAQIBAT8Byq//xAAcEAABBAMBAAAAAAAAAAAAAAABEBESIQAgMVL/2gAIAQEABj8CJwSp1LvXFl61/8QAHBAAAwEBAAMBAAAAAAAAAAAAAAERITFBYXGB/9oACAEBAAE/Icm4uQUhCLV6HoovotZdJfBzLRlpiPzwxvY0I1RIRH//2gAMAwEAAgADAAAAEFAGgf/EABcRAQADAAAAAAAAAAAAAAAAAAEAEBH/2gAIAQMBAT8QbYT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQAf/aAAgBAgEBPxAgf//EAB4QAQADAAEFAQAAAAAAAAAAAAEAESFBMWGBkbGh/9oACAEBAAE/EHK9do/Nj3avc8ubbl9rggjZ+iMQDoFFrR20lpEqFW9WMUQV18wI9wLbV6Pv7LxZ6ikQcR5gayDcE//Z\'); background-size: cover; display: block;"\n  ></span>\n  <img\n        class="gatsby-resp-image-image"\n        alt="The cam"\n        title=""\n        src="/static/59bd8b9e9bc6b36d66464bfe118a31b4/18e3b/the_cam.jpg"\n        srcset="/static/59bd8b9e9bc6b36d66464bfe118a31b4/46946/the_cam.jpg 240w,\n/static/59bd8b9e9bc6b36d66464bfe118a31b4/55489/the_cam.jpg 480w,\n/static/59bd8b9e9bc6b36d66464bfe118a31b4/18e3b/the_cam.jpg 960w,\n/static/59bd8b9e9bc6b36d66464bfe118a31b4/60e21/the_cam.jpg 1440w,\n/static/59bd8b9e9bc6b36d66464bfe118a31b4/69b48/the_cam.jpg 1920w,\n/static/59bd8b9e9bc6b36d66464bfe118a31b4/03643/the_cam.jpg 3024w"\n        sizes="(max-width: 960px) 100vw, 960px"\n        style="width:100%;height:100%;margin:0;vertical-align:middle;position:absolute;top:0;left:0;"\n        loading="lazy"\n        decoding="async"\n      />\n    </span>'}}),"\n",a.createElement(t.h3,null,"Cloud storage"),"\n",a.createElement(t.p,null,"This problem can be solved using a cloud storage. It's enough to just store the images on the Pi temporarily and then upload them to the cloud. This also has the advantage that I can check from anywhere and at any time whether anything has happened in the flat. Since I have had a Dropbox account for years, I use it for backing up the photos. With this account, it is very easy to create an app on the ",a.createElement(t.a,{href:"https://www.dropbox.com/developers"},"developer page"),". What you need at the end is an access token with which the app can access Dropbox."),"\n",a.createElement(t.h3,null,"Software"),"\n",a.createElement(t.p,null,"To my surprise, I only needed a some libraries and a few lines of Python code for a simple camera functionality."),"\n",a.createElement(t.p,null,"Most of the work is done in the ",a.createElement(t.code,null,"pressed()")," method. First, five photos are created and saved under a temporary name on the SD card. The Dropbox app is then accessed using the access token. The photos can then be uploaded with the db object. The rest of the code is initialisation and deleting temporary files that are still in the directory after a possible crash. The number of photos to be taken or the waiting time after the sensor has triggered can of course be individually adjusted."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-python"},"#!/usr/bin/python3\nfrom dotenv import dotenv_values\nfrom gpiozero import Button, LED\nfrom time import sleep\nimport datetime, dropbox, picamera, os\n\nconfig = dotenv_values(\".env\")\ndb_ac = config[\"DB_ACCESS_TOKEN\"]\nnum_pics = 5\nbutton = Button(7, pull_up=False)\n\ndef pressed():\n    camera = picamera.PiCamera()\n    camera.vflip = True\n    camera.hflip = True\n    camera.resolution=(2592, 1944)\n    for x in range(num_pics):\n        localname = 'tmp' + str(x) + '.jpg'\n        camera.capture(localname)\n    camera.close()\n\n    db = dropbox.Dropbox(db_ac)\n    for x in range(num_pics):\n        localname = 'tmp' + str(x) + '.jpg'\n        f = open(localname, 'rb')\n        timestamp = datetime.datetime.now().isoformat()\n        upname = '/rapi-' + timestamp + '.jpg'\n        db.files_upload(f.read(), upname)\n        f.close()\n        db.close()\n        os.remove(localname)\n\nfor x in range(num_pics):\n    if os.path.exists(\"tmp\" + str(x) + \".jpg\"):\n        os.remove(\"tmp\" + str(x) + \".jpg\")\n\nwhile True:\n    button.wait_for_press()\n    pressed()\n    sleep(5)\n")),"\n",a.createElement(t.h3,null,"Conclusion"),"\n",a.createElement(t.p,null,"In the end, I could not find any intruders in the pictures. The only thing that stood out was my cat Frieda, who was obviously trying to catch a fly. What luck! I very much hope that it stays that way."),"\n",a.createElement(t.img,{src:"https://i.makeagif.com/media/8-20-2021/OU5KfW.gif",alt:"frieda-hunting-a-fly"}))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,o.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},l=n(4765);function s(e){return a.createElement(l.Z,e,a.createElement(i,e))}l.Z}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-post-query-tsx-content-file-path-content-posts-raspbery-pi-security-cam-index-mdx-9054785a818634ed7bed.js.map