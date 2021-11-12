(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9305],{27587:function(e,r,t){"use strict";var n=t(50802),i=t(75800),o=t(45528),a=t(98859),s=["onClick","providerKey","children"];function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}r.Z=function(e){var r=e.onClick,t=e.providerKey,n=e.children,c=(0,i.Z)(e,s),u=(0,o.F)().onClickProviderButton;return(0,a.jsx)("button",l(l({},c),{},{"data-providerkey":t,onClick:function(e){r&&r(e),u(t)},children:n}))}},45528:function(e,r,t){"use strict";t.d(r,{F:function(){return a}});var n=t(38423),i=t(98859),o=(0,n.createContext)(void 0),a=function(){var e=(0,n.useContext)(o);if(!e)throw new Error("You are trying to call useAuthProviderContext outside of the AuthProviderContextProvider. Make sure your component is rendered within an AuthProviderContextProvider.");return e};r.Z=function(e){var r=e.children,t={onClickProviderButton:e.onClickProviderButton};return(0,i.jsx)(o.Provider,{value:t,children:r})}},65043:function(e,r,t){"use strict";var n=t(38423),i=t(16454),o=t(45528),a=t(98859);r.Z=function(e){var r=e.authType,t=e.next,s=e.children,c=(0,n.useState)(void 0),l=c[0],u=c[1],d=(0,n.useRef)();(0,n.useEffect)((function(){var e=d.current;l&&e.submit()}),[l]);var p="sign-up"===r,g="".concat(i.J_,"/oauth/").concat(p?"signup":"signin");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("form",{method:"post",action:g,ref:d,children:[(0,a.jsx)("input",{type:"hidden",name:"next",value:t}),(0,a.jsx)("input",{type:"hidden",name:"provider",value:l})]}),(0,a.jsx)(o.Z,{onClickProviderButton:u,children:s})]})}},39305:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return N}});var n=t(50802),i=t(38423),o=t(50984),a=t(15262),s=t.n(a),c=t(5592),l=t.n(c),u=t(84583),d=t(16454),p=t(45405),g=t(23548),h=t(98859),_=function(e){var r=e.onSuccess,t=e.next,n=(0,g.Xj)({onSuccess:r,onAccountExists:function(){return'This email is already registered. <a href="'.concat(d.qW,"/sign-in?next=").concat(t,'">Sign in</a>.')}}),i=(0,o.Z)(n,2),a=i[0],c=a.validateForm,_=a.formState,m=a.signup,f=a.emailError,v=a.consentError,x=a.otherError,y=a.showConsentCheckbox,j=i[1];return(0,h.jsxs)("form",{className:s().form,onSubmit:function(e){e.preventDefault(),"ok"===c().status&&((0,p.Wn)({eventName:"Sign Up Clicked",eventCategory:"For Individuals Page",eventType:"click",eventLabel:"get_started",eventAction:"get_started_for_free_button_clicked"},{email:_.email}),m({trackLead:function(e){return(0,p.uW)("For Individuals Page",{email:e})}}))},children:[(0,h.jsxs)("label",{htmlFor:"email-input-sign-up",children:[(0,h.jsx)("span",{className:"sr-only",children:"Email Address"}),(0,h.jsxs)("div",{className:s().inputContainer,children:[(0,h.jsx)("input",{"data-error":!!f,value:_.email,onChange:function(e){return j({type:"SET_EMAIL",email:e.target.value})},placeholder:"Email Address",required:!0,id:"email-input-sign-up",type:"email",onInvalid:function(e){e.preventDefault(),j({type:"INVALID_EMAIL"})}}),f&&(0,h.jsx)("p",{onClick:function(e){e.stopPropagation(),j({type:"CLEAR_EMAIL_ERROR"})},children:f.message})]})]}),y&&(0,h.jsxs)("label",{className:s().legalText,children:[(0,h.jsxs)("div",{style:{marginBottom:16},children:[(0,h.jsx)("input",{onInvalid:function(e){e.preventDefault(),j({type:"NOT_CONSENTED"})},checked:_.hasConsented,onChange:function(e){return j({type:"SET_CONSENT",hasConsented:e.target.checked})},required:!0,type:"checkbox"}),(0,h.jsxs)("span",{children:["I agree to Udacity's"," ",(0,h.jsx)("a",{href:"/legal/en-us/terms-of-use",target:"_blank",children:"Terms of Use"}),","," ",(0,h.jsx)("a",{href:"/legal/en-us/privacy",target:"_blank",children:"Privacy Policy"}),", and to receive promotional material from Udacity."]})]}),v&&(0,h.jsx)("p",{className:s().error,children:v.message})]}),(0,h.jsx)("button",{disabled:"loading"===_.status,className:l()("btn button button--primary",s().continueButton),type:"submit",children:"Get Started For Free"}),x&&(0,h.jsx)("p",{style:{marginTop:16},className:s().error,dangerouslySetInnerHTML:{__html:x.message}}),_.requiresRecaptcha&&(0,h.jsx)("div",{className:s().recaptchaWrapper,children:(0,h.jsx)(u.Z,{size:"normal",sitekey:d.iq,onChange:function(e){return j({type:"SET_RECAPTCHA_VALUE",value:e})}})}),!y&&(0,h.jsx)("div",{className:l()(s().legalText,s().legalTextSimple),children:(0,h.jsxs)("span",{className:"text-center block",children:['By clicking "Get started for free", you agree to our'," ",(0,h.jsx)("a",{href:"/legal/en-us/terms-of-use",target:"_blank",children:"Terms of Use"})," ","and"," ",(0,h.jsx)("a",{href:"/legal/en-us/privacy",target:"_blank",children:"Privacy Policy"}),"."]})})]})},m=t(12298),f=t.n(m),v=t(55714),x=t(25852),y=t(40061),j=t.n(y),b=t(65043),k=t(27587),w={file:{url:"https://www.udacity.com/www-proxy/contentful/assets/2y9b3o528xhq/20fWcdnTibJAQmYgLGXdqs/218c99bc6b543541ec57a6d405bde469/LoggedInImage.png"},description:"A person working at a computer."},C={eventCategory:"For Individuals Page",eventName:"for_individuals_page_cta_clicked",eventType:"click",eventLabel:"Explore Programs",eventAction:"forindividualspage_exploreprograms_clicked"},P={entryId:"3Xq0VrYigJcXwC7wgsDTli"},N=function(){var e=(0,g.k2)(),r=(0,i.useState)(!0),t=r[0],o=r[1],a=encodeURI(window.location.href),s=function(e){return function(){(0,p.Wn)({eventAction:"sign_up_with_".concat(e,"_button_clicked"),eventCategory:"For Individuals Page",eventLabel:"sign_up_with_".concat(e),eventType:"click",eventName:"Sign Up Clicked"})}},c=(0,h.jsx)("article",{className:l()(f().card,f().cardGradientRight,(0,n.Z)({},f().authSuccess,!t)),children:t?(0,h.jsxs)("div",{className:f().signUpWrapper,children:[(0,h.jsx)("h2",{className:l()("h4 text-center",f().cardTitle),children:"Start learning for free today."}),(0,h.jsxs)("div",{children:[(0,h.jsx)(b.Z,{authType:"sign-up",next:a,children:(0,h.jsxs)("div",{className:f().authProvidersContainer,children:[(0,h.jsx)(k.Z,{onClick:s("google"),className:l()(j().providerButton,j().google),providerKey:"google",children:"Sign up with Google"}),(0,h.jsx)(k.Z,{onClick:s("facebook"),className:l()(j().providerButton,j().facebook),providerKey:"facebook",children:"Sign up with Facebook"})]})}),(0,h.jsx)("p",{className:f().or,children:"or"}),(0,h.jsx)(_,{next:a,onSuccess:function(){return o(!1)}})]})]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:l()("h4 text-center",f().cardTitle),children:"Thanks for joining Udacity!"}),(0,h.jsx)("p",{children:"Now find the right Nanodegree program that fits your goals."}),(0,h.jsx)(x.j6,{className:f().exploreProgramsButton,buttonText:"Explore Programs",scrollToTarget:P,analyticsEvent:C})]})}),u=!!e;return(0,h.jsx)("div",{className:f().gradientContainer,children:(0,h.jsx)("div",{className:l()(f().container,f().gradient,(0,n.Z)({},f().withJwt,u)),children:(0,h.jsx)("div",{className:f().wrapper,children:(0,h.jsxs)("div",{className:f().layout,children:[(0,h.jsxs)("div",{className:f().textContentContainer,children:[(0,h.jsxs)("h1",{className:f().title,children:["Get the skills you need",(0,h.jsx)("br",{})," for a $100k+ tech career",(0,h.jsx)("br",{})," in just 3 months."]}),(0,h.jsx)("p",{children:"Enroll in Udacity today and, for as few as 10 hours a week, you can get the in-demand skills you need to help land a high-paying tech job. Learn at your own pace, when and where it\u2019s convenient for you."})]}),u?(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("div",{className:l()(f().rhombusImgContainer,f().imageGradientRight),children:(0,h.jsx)(v.y,{className:f().img,image:w,fallback:"png",quality:100,loading:"eager"})})}):c]})})})})}},55714:function(e,r,t){"use strict";t.d(r,{y:function(){return u}});var n=t(50802),i=t(75800),o=t(21140),a=t(98859),s=["image","alt","loading","fallback","quality","dimensions"];function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){(0,n.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=function(e){var r,t,n=e.image,c=e.alt,u=e.loading,d=void 0===u?"lazy":u,p=e.fallback,g=void 0===p?"jpg":p,h=e.quality,_=void 0===h?100:h,m=e.dimensions,f=void 0===m?{}:m,v=(0,i.Z)(e,s),x=null===n||void 0===n||null===(r=n.file)||void 0===r?void 0:r.url,y=f.width,j=f.height,b=(0,o.stringify)({fm:"webp",q:_,w:y,h:j});return(0,a.jsxs)("picture",l(l({},v),{},{children:[(0,a.jsx)("source",{srcSet:"".concat(x,"?").concat(b),type:"image/webp"}),(0,a.jsx)("img",{src:"".concat(x,"?fm=").concat(g),alt:null!==(t=null!==c&&void 0!==c?c:null===n||void 0===n?void 0:n.description)&&void 0!==t?t:"",loading:d})]}))}},40061:function(e){e.exports={providerButton:"_provider-button_providerButton__352wv",facebook:"_provider-button_facebook__2Hk7t",google:"_provider-button_google__1a9K6"}},15262:function(e){e.exports={form:"_sign-up-form_form__KpwmN",legalText:"_sign-up-form_legalText__S1VQZ",legalTextSimple:"_sign-up-form_legalTextSimple__3tDRQ",continueButton:"_sign-up-form_continueButton__cbAmy",recaptchaWrapper:"_sign-up-form_recaptchaWrapper__2lQOj",inputContainer:"_sign-up-form_inputContainer__3kP9H",error:"_sign-up-form_error__1YVtw"}},12298:function(e){e.exports={gradientContainer:"sign-up-hero_gradientContainer__2N1kK",container:"sign-up-hero_container__1Yscc",layout:"sign-up-hero_layout__lVpRS",wrapper:"sign-up-hero_wrapper__33iNf",textContentContainer:"sign-up-hero_textContentContainer__PYsVd",title:"sign-up-hero_title__3mA3d",card:"sign-up-hero_card__TIzu0",cardTitle:"sign-up-hero_cardTitle__1EFno",or:"sign-up-hero_or__yoh-v",authSuccess:"sign-up-hero_authSuccess__3PLBb",exploreProgramsButton:"sign-up-hero_exploreProgramsButton__11LXd",rhombusImgContainer:"sign-up-hero_rhombusImgContainer__qLrQL",img:"sign-up-hero_img__115X3",cardGradientRight:"sign-up-hero_cardGradientRight__Z4FeS",imageGradientRight:"sign-up-hero_imageGradientRight__2ptcT",gradient:"sign-up-hero_gradient__3_VNh",withJwt:"sign-up-hero_withJwt__3ofXm",authProvidersContainer:"sign-up-hero_authProvidersContainer__37Kr9",signUpWrapper:"sign-up-hero_signUpWrapper__2HDh1"}}}]);