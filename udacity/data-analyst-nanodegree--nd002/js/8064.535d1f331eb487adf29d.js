(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8064,2535],{58064:function(e,r,t){"use strict";t.r(r),t.d(r,{ContentfulHero:function(){return M},ContentfulHeroBase:function(){return B}});var n=t(50802),a=t(38423),i=t(5592),o=t.n(i),l=t(9759),s=t.n(l),c=t(98859),d=function(e,r,t){return e>=0?String(Math.floor((t?e%t:e)/r)).padStart(2,"0"):""},u=864e5,h=36e5,m=function(e){var r=e.className,t=e.endTime,n=(0,a.useState)(-1),i=n[0],l=n[1];(0,a.useEffect)((function(){if(t){var e=new Date(t).getTime(),r=null;return function t(){var n=e-Date.now()-1e3;n<0||(l(n),r=setTimeout(t,1e3))}(),function(){clearTimeout(r)}}}),[t]);var m=d(i,u),p=d(i,h,u),g=d(i,6e4,h),v=d(i,1e3,6e4);return(0,c.jsx)("div",{className:o()(s().countdown,r),children:(0,c.jsxs)("ul",{children:[(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:s().timer,children:m}),(0,c.jsx)("span",{children:"DAYS"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:s().timer,children:p}),(0,c.jsx)("span",{children:"HRS"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:s().timer,children:g}),(0,c.jsx)("span",{children:"MIN"})]}),(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{className:s().timer,children:v}),(0,c.jsx)("span",{children:"SEC"})]})]})})},p=t(29097),g=function(){return(0,c.jsx)("svg",{id:"hero-bg-circle",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:(0,c.jsx)("circle",{cx:"50",cy:"50",r:"50",fill:"#FFAE0C"})})},v=t(23548),b=t(25852),f=t(65638);var j="Nanodegree overview page hero",y="Nanodegree overview page secondary video",_=t(98448),x=t(16101),w=t(92535),O=t(56371),N=t.n(O),P=t(45405);function S(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function k(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?S(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var C=function(e){var r,t=e.title,n=e.backgroundImage,a=e.summary,i=e.showCountDown,l=e.countdownDateState,s=e.playVideoButton,d=void 0===s?null:s,u=e.degreeKey,h=e.syllabusUrl,p=e.degreePricingEntryId;return(0,c.jsxs)("div",{className:N().container,children:[(0,c.jsx)("div",{className:N().overlay}),(0,c.jsx)("div",{className:N().backgroundImage,style:{backgroundImage:"url(".concat(null===n||void 0===n||null===(r=n.file)||void 0===r?void 0:r.url,")")}}),(0,c.jsxs)("div",{className:N().contentWrapper,children:[(0,c.jsxs)("div",{className:N().contentLeftWrapper,children:[(0,c.jsxs)("div",{className:N().textContentContainer,children:[(0,c.jsx)("h1",{children:t}),(0,c.jsx)("h2",{className:"h6 mb-half",children:"Nanodegree Program"}),(0,c.jsx)("p",{className:"mb-0",children:a})]}),(0,c.jsxs)("div",{className:o()("hidden-md-down",N().actionButtonsContainer),children:[(0,c.jsx)(b.j6,{className:N().pricingButton,buttonText:"View Plans and Pricing",scrollToTarget:{entryId:p}}),d]}),i&&(0,c.jsx)(m,{endTime:null===l||void 0===l?void 0:l.closesAt,className:o()("col white hidden-md-down",N().countdownContainer)})]}),(0,c.jsxs)("section",{className:N().card,children:[(0,c.jsx)("h3",{className:"sr-only",children:"Get Your Syllabus"}),(0,c.jsx)("h3",{"aria-hidden":!0,className:"hidden-md-down",children:"Get Your Syllabus"}),(0,c.jsxs)("form",{onSubmit:function(e){e.preventDefault();var r=e.target.elements,t=r.name,n=r.email,a={name:t.value,email:n.value};(0,P.Q6)("NDOP Request Syllabus",a,(function(){!function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(0,P.L9)("Nanodegree Interested",k({category:"Nanodegree Interested",label:"Nanodegree Interested - ".concat(e," - STANDARD"),interested_in:"syllabus",degree:e},r))}(u,{email:a.email,firstName:a.name})})),(0,P.uW)("NDOP Request Syllabus",a),(0,P.c5)(u),window.open(h,"_blank"),t.value="",n.value=""},children:[(0,c.jsxs)("div",{className:"hidden-md-down",children:[(0,c.jsx)("label",{className:"sr-only",htmlFor:"get-syllabus-name-input",children:"First Name"}),(0,c.jsx)("input",{name:"name",id:"get-syllabus-name-input",type:"text",placeholder:"First Name",autoComplete:"name"})]}),(0,c.jsx)("label",{className:"sr-only",htmlFor:"get-syllabus-email-input",children:"Email"}),(0,c.jsx)("input",{name:"email",id:"get-syllabus-email-input",type:"email",placeholder:"Email Address",required:!0,autoComplete:"email"}),(0,c.jsx)("button",{className:o()("btn button button--primary",N().submitButton),type:"submit",children:"Download Syllabus"}),(0,c.jsx)(b.j6,{className:o()("hidden-md-up",N().pricingButtonMobile),buttonText:"View Plans and Pricing",scrollToTarget:{entryId:p}})]}),(0,c.jsxs)("small",{className:N().legalText,children:['By clicking "Download Syllabus", you agree to our'," ",(0,c.jsx)("a",{target:"_blank",href:"/legal/en-us/terms-of-use",children:"Terms of Use"})," ","and"," ",(0,c.jsx)("a",{target:"_blank",href:"/legal/en-us/privacy",children:"Privacy Policy"}),"."]})]})]})]})},D=t(97399),E=t.n(D);function T(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function I(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?T(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var B=function(e){var r,t,i,l=e.stretchBackground,s=e.degreeKey,d=e.fullSyllabusUrl,u=e.schedule,h=e.flagText,w=e.flagBackgroundColor,O=e.flagTextColor,N=e.backgroundImage,P=e.overlayTheme,S=e.backgroundVideoMp4,k=e.backgroundVideoOgv,D=e.backgroundVideoWebm,T=e.heroLogo,B=e.header,M=e.title,z=e.subtitle,W=e.summary,Z=e.longSummary,V=e.purpose,A=e.ctaButtons,L=void 0===A?[]:A,H=e.showEnrollmentCountdown,q=e.trailerVideoUrl,R=e.showBgCircle,U=e.hideBurst,F=void 0!==U&&U,G=e.degreePricingEntryId,K=W||Z||"",X=(0,x.xz)(),Y=(0,a.useState)((function(){return"#modal-video"===window.location.hash})),Q=Y[0],J=Y[1],$=(0,v.Ze)(u),ee="";if(q){var re=q.indexOf("vimeo")>-1?"?color=02b3e4&title=0&byline=0&portrait=0&autoplay=1":"";ee=q+re}var te=s&&/^nd/.test(s)&&!F,ne=H&&"ok"===$.state,ae=ee?(0,c.jsx)("div",{children:(0,c.jsx)("button",{className:E().playVideo,onClick:function(){switch(J(!Q),V){case j:!function(e){(0,f.L9)("Trailer Video Played",{category:"ND Trailer video",label:"Nanodegree Trailer Video - ".concat(e),sku:e})}(s);break;case y:!function(e,r){var t=r||"Unknown";window.analytics.track("Nanodegree CTA Clicked","Nanodegree CTA",{cta_destination:"modal",cta_location:"NDOP",cta_message:"Play",cta_type:"button",label:"Nanodegree CTA - Video Extra Played - ".concat(e),video_title:t})}(s,M)}},children:(0,c.jsx)("img",{alt:"Play Video",src:"//www.udacity.com/assets/iridium/images/nanodegree-overview/shared/nd-hero-video/icon-video-white.svg"})})}):null,ie="variant_b"===(null===X||void 0===X?void 0:X.yak)&&te;return(0,c.jsxs)(c.Fragment,{children:[ie?(0,c.jsx)(C,{title:M,summary:K,backgroundImage:N,playVideoButton:ae,countdownDateState:$,showCountDown:ne,degreeKey:s,syllabusUrl:d,degreePricingEntryId:G}):(0,c.jsx)("div",{"data-testid":"contentful-hero",className:E().contentfulHeroSection,children:(0,c.jsxs)("div",{className:o()(E().contentfulHero,(r={},(0,n.Z)(r,E().contain,!l),(0,n.Z)(r,E().showBurst,te),r)),children:[h?(0,c.jsx)("div",{"flag-background":w,className:E().flag,children:(0,c.jsx)("h6",{className:O,children:h})}):null,te&&(0,c.jsx)(_.S,{}),(0,c.jsxs)("div",{className:E().heroBg,style:{backgroundImage:N?"url(".concat(null===N||void 0===N||null===(t=N.file)||void 0===t?void 0:t.url,")"):""},children:[function(){var e,r,t,n=null===S||void 0===S||null===(e=S.file)||void 0===e?void 0:e.url,a=null===k||void 0===k||null===(r=k.file)||void 0===r?void 0:r.url,i=null===D||void 0===D||null===(t=D.file)||void 0===t?void 0:t.url;if(n||a||i)return(0,c.jsx)("div",{className:o()(E().bgVideo,E()[P]),children:(0,c.jsxs)("video",{className:E().trailer,id:"videoBg",autoPlay:!0,loop:!0,muted:!0,children:[n&&(0,c.jsx)("source",{src:n}),a&&(0,c.jsx)("source",{src:a}),i&&(0,c.jsx)("source",{src:i})]})})}(),(0,c.jsx)("div",{className:E().overlay,children:(0,c.jsxs)("div",{className:E().content,children:[(0,c.jsxs)("div",{className:E().contentHeader,children:[T?(0,c.jsx)("img",{src:null===T||void 0===T||null===(i=T.file)||void 0===i?void 0:i.url,alt:null===T||void 0===T?void 0:T.description,className:E().logo}):null,B?(0,c.jsx)("h6",{children:B}):null,M?(0,c.jsx)("h1",{children:M}):null,z?(0,c.jsx)("h6",{className:E().big,children:z}):null,K?(0,c.jsx)("div",{dangerouslySetInnerHTML:{__html:K},className:"".concat(E().legible," center hidden-xs-down")}):null]}),(0,c.jsx)("div",{className:E().btnWrapper,children:L.map((function(e,r){return(0,c.jsx)(b.fi,I(I({},e),{},{degreeKey:s,syllabusUrl:d}),r)}))}),ne&&(0,c.jsx)(m,{endTime:null===$||void 0===$?void 0:$.closesAt,className:"col white"}),ae]})}),R?(0,c.jsx)(g,{}):null]})]})}),ee?(0,c.jsx)(p.Kd,{show:Q,src:ee,onHide:function(){J(!1)}}):null]})},M=function(e){return e.variant&&"v1"!==e.variant?(0,c.jsx)(w.default,I({},e)):(0,c.jsx)(B,I({},e))}},92535:function(e,r,t){"use strict";t.r(r),t.d(r,{Header:function(){return m}});var n=t(50802),a=(t(38423),t(5592)),i=t.n(a),o=t(56008),l=t(25852),s=t(71387),c=t.n(s),d=t(41181),u=t(98859);function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}var m=function(e){var r,t=e.header,a=e.headerIcon,s=e.title,m=e.summary,p=e.longSummary,g=e.backgroundImage,v=e.ctaButtons,b=void 0===v?[]:v,f=e.variant,j=void 0===f?"trapezoid-pattern-split":f;return(0,u.jsxs)("div",{className:i()(c().headerWrap,c()[j]),children:[(0,u.jsx)("div",{className:c().background}),(0,u.jsxs)(d.W,{as:"header",className:c().header,children:[(0,u.jsxs)("div",{className:c().headerContent,children:[(0,u.jsxs)("h6",{className:c().pageTitle,children:[a&&(0,u.jsx)("img",{src:null===a||void 0===a||null===(r=a.file)||void 0===r?void 0:r.url,alt:"",className:c().headerIcon}),t]}),(0,u.jsx)("h1",{className:c().title,children:s}),(0,u.jsxs)("p",{className:c().description,children:[m,p]}),(0,u.jsx)("div",{className:c().actions,children:b.map((function(e,r){return(0,u.jsx)(l.fi,function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e),r)}))})]}),(0,u.jsxs)("div",{className:c().headerImgWrap,children:[(0,u.jsx)("div",{className:c().background}),(0,u.jsx)(o.Z,{className:c().headerImg,shape:"left",image:g,fallback:"png"})]})]})]})};r.default=m},56008:function(e,r,t){"use strict";var n=t(50802),a=t(75800),i=(t(38423),t(5592)),o=t.n(i),l=t(95730),s=t.n(l),c=t(55714),d=t(98859),u=["shape","className","imgClassName","image"];function h(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?h(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var p={left:s().trapezoidLeft,right:s().trapezoidRight};r.Z=function(e){var r=e.shape,t=e.className,n=void 0===t?"":t,i=e.imgClassName,l=void 0===i?"":i,s=e.image,h=(0,a.Z)(e,u);return(0,d.jsx)("div",{className:o()(n,p[r]),children:(0,d.jsx)(c.y,m({image:s,className:l,quality:60},h))})}},55714:function(e,r,t){"use strict";t.d(r,{y:function(){return d}});var n=t(50802),a=t(75800),i=t(21140),o=t(98859),l=["image","alt","loading","fallback","quality","dimensions"];function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){var r,t,n=e.image,s=e.alt,d=e.loading,u=void 0===d?"lazy":d,h=e.fallback,m=void 0===h?"jpg":h,p=e.quality,g=void 0===p?100:p,v=e.dimensions,b=void 0===v?{}:v,f=(0,a.Z)(e,l),j=null===n||void 0===n||null===(r=n.file)||void 0===r?void 0:r.url,y=b.width,_=b.height,x=(0,i.stringify)({fm:"webp",q:g,w:y,h:_});return(0,o.jsxs)("picture",c(c({},f),{},{children:[(0,o.jsx)("source",{srcSet:"".concat(j,"?").concat(x),type:"image/webp"}),(0,o.jsx)("img",{src:"".concat(j,"?fm=").concat(m),alt:null!==(t=null!==s&&void 0!==s?s:null===n||void 0===n?void 0:n.description)&&void 0!==t?t:"",loading:u})]}))}},56371:function(e){e.exports={container:"_SEM-hero-v2_container__2YZB6",overlay:"_SEM-hero-v2_overlay__1buzv",backgroundImage:"_SEM-hero-v2_backgroundImage__3eQv5",contentWrapper:"_SEM-hero-v2_contentWrapper__1lAbL",contentLeftWrapper:"_SEM-hero-v2_contentLeftWrapper__2onMZ",textContentContainer:"_SEM-hero-v2_textContentContainer__2IrQ5",card:"_SEM-hero-v2_card__2c3P5",submitButton:"_SEM-hero-v2_submitButton__yM9o7",pricingButtonMobile:"_SEM-hero-v2_pricingButtonMobile__1ujpt",legalText:"_SEM-hero-v2_legalText__2tgCb",actionButtonsContainer:"_SEM-hero-v2_actionButtonsContainer__2mRzc",countdownContainer:"_SEM-hero-v2_countdownContainer__2rXDH",pricingButton:"_SEM-hero-v2_pricingButton__2XjXz"}},71387:function(e){e.exports={headerWrap:"header_headerWrap__DZFnB",headerImgWrap:"header_headerImgWrap__3wPAz",background:"header_background__26nuZ",header:"header_header__1Z5Cj",headerIcon:"header_headerIcon__grhUq",pageTitle:"header_pageTitle__1-Uhb",headerContent:"header_headerContent__3_X0f",headerImg:"header_headerImg__3GoId",actions:"header_actions__DGlf9","trapezoid-pattern-split":"header_trapezoid-pattern-split__5W0T4",title:"header_title__1brGs",description:"header_description__3mLsy","trapezoid-blue-green-gradient":"header_trapezoid-blue-green-gradient__3-TA9"}},95730:function(e){e.exports={trapezoidLeft:"trapezoid-image_trapezoidLeft__1Vu3w",trapezoidRight:"trapezoid-image_trapezoidRight__1NEvJ"}},9759:function(e){e.exports={countdown:"counter-down_countdown__3qXsc",timer:"counter-down_timer__3bRCc"}}}]);