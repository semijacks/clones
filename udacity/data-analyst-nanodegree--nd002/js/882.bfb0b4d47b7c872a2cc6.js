(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[882],{80882:function(e,r,i){"use strict";i.r(r),i.d(r,{DegreePricing:function(){return Y}});var n=i(50802),t=i(50984),a=i(38423),s=i(35845),c=i(29097),l=i(50371),o=i(14555),d=i(89794),u=i.n(d),p=i(41181),f=i(98859);function _(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function h(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?_(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):_(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var v=function(e){var r,i,n,t,d=e.installmentInfo,_=e.installmentModal,v=(0,o.Kz)().affirm,b=(0,a.useState)(!1),m=b[0],j=b[1],g=function(e,r){var i,n=null!==(i=null===e||void 0===e?void 0:e.feature1Text)&&void 0!==i?i:"";return r?n.replace("!!installmentPricePlaceholder!!","$".concat(r)):""}(d,null===v||void 0===v?void 0:v.installmentPrice);return v.eligible?(0,f.jsxs)("div",{"data-testid":"affirm-info-section",className:u().installmentInfo,children:[(0,f.jsxs)(p.W,{className:u().container,children:[(0,f.jsx)("div",{className:u().partnership,children:(0,f.jsxs)("div",{children:[(0,f.jsx)("h3",{className:"slate",children:d.partnershipHeader}),d.providerLogo&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)("span",{style:{marginRight:"8px"},className:"h3",children:"with"}),(0,f.jsx)(s.w,{alt:"Affirm",className:u().affirmLogo,src:null===d||void 0===d?void 0:d.providerLogoUrl})]}),(0,f.jsx)("p",{children:null===d||void 0===d?void 0:d.partnershipText})]})}),(0,f.jsxs)("ul",{className:u().features,children:[(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:u().icon,children:(null===d||void 0===d?void 0:d.feature1Image)&&(0,f.jsx)(s.w,{alt:"",src:null===(r=d.feature1Image)||void 0===r||null===(i=r.file)||void 0===i?void 0:i.url})}),(0,f.jsxs)("div",{className:u().featureDescription,children:[(0,f.jsx)("h4",{children:null===d||void 0===d?void 0:d.feature1Header}),g&&(0,f.jsx)("p",{children:g}),(null===d||void 0===d?void 0:d.feature1Cta)&&(0,f.jsx)("p",{children:(0,f.jsx)("a",{onClick:function(e){e.preventDefault(),e.stopPropagation(),j(!0)},children:null===d||void 0===d?void 0:d.feature1Cta})})]})]}),(0,f.jsxs)("li",{children:[(0,f.jsx)("div",{className:u().icon,children:(null===d||void 0===d?void 0:d.feature2Image)&&(0,f.jsx)(s.w,{alt:"",src:null===d||void 0===d||null===(n=d.feature2Image)||void 0===n||null===(t=n.file)||void 0===t?void 0:t.url})}),(0,f.jsxs)("div",{className:u().featureDescription,children:[(0,f.jsx)("h4",{children:null===d||void 0===d?void 0:d.feature2Header}),(0,f.jsx)("p",{children:null===d||void 0===d?void 0:d.feature2Text})]})]})]})]}),(0,f.jsx)(c.Yy,{show:m,onHide:function(){j(!1)},children:(0,f.jsx)(l.I,h({},_))})]}):null},b=i(96381),m=i.n(b),j=i(75546),g=i(5592),x=i.n(g),y=i(17300),O=i.n(y),P=i(28078),C=i.n(P),w=i(92267),N=i(45405),D=i(42877),L=i(60411),k=i.n(L),S=i(98448),I=function(e){var r,i=e.image,n=e.className,t=e.link,c=(0,S.L)(t);return(0,a.createElement)(t?"a":"div",{onClick:function(){(0,N.Wn)({eventCategory:"NDOP",eventName:"Nanodegree CTA Clicked",eventType:"click",eventLabel:"Price Card",eventAction:"discount_burst_clicked",eventValue:null===i||void 0===i?void 0:i.description})},className:x()(k().burst,n),href:c},(0,f.jsx)(s.w,{src:null===i||void 0===i||null===(r=i.file)||void 0===r?void 0:r.url,alt:null===i||void 0===i?void 0:i.description}))};function B(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function M(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?B(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):B(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var T=function(e){var r,i=e.children,t=e.title,a=e.blurb,s=e.priceTemplate,c=void 0===s?"":s,l=e.isOnlyChild,o=e.type,d=e.checkoutLinkURL,u=e.ctaText,p=void 0===u?"Enroll Now":u,_=e.ctaAnalytics,h=e.discountMessage,v=e.burst,b=!l&&"bundle"===o,m=(0,f.jsxs)("article",{"data-testid":"pricing-card--".concat(o),className:x()(C().card,(r={},(0,n.Z)(r,C().whiteBorder,!b),(0,n.Z)(r,C().onlyChild,l),r)),children:[v&&(0,f.jsx)(I,M(M({},v),{},{className:C().burst})),(0,f.jsxs)("div",{className:C().cardHeader,children:[(0,f.jsx)("h2",{children:t}),(0,f.jsx)("p",{children:a})]}),h&&(0,f.jsx)("strong",{className:C().discountMessage,children:h}),(0,f.jsx)("div",{className:C().pricingTemplate,dangerouslySetInnerHTML:{__html:c}}),(0,f.jsx)("a",{onClick:function(){return(0,N.Wn)(_)},className:x()("btn button button--primary",C().checkoutLinkButton),href:d,children:p}),i]});return b?(0,f.jsxs)("figure",{className:C().bestValueWrapper,children:[m,(0,f.jsx)("figcaption",{children:"Best Value"})]}):m},W="\n".concat('\n<p data-hidden={{"!!subscriptionOriginalPerInterval!!" !== "!!subscriptionPayablePerInterval!!"}}>\n  <ins>!!subscriptionPayablePerInterval!!</ins>\n  <br />\n  <span class="units">per !!subscriptionInterval!!</span>\n</p>\n',"\n").concat('\n<div data-hidden={{"!!subscriptionOriginalPerInterval!!" === "!!subscriptionPayablePerInterval!!"}}>\n  <p>\n    <ins>!!subscriptionPayablePerInterval!!</ins><span class="units">&#47;!!subscriptionInterval!!</span>\n  </p>\n  <p>\n    <del>!!subscriptionOriginalPerInterval!!</del><span class="units">&#47;!!subscriptionInterval!!</span>\n  </p>\n</div>\n',"\n"),H=function(e){var r,i,n,t=e.type,a=e.isOnlyChild,s=e.ctaAnalytics,c=e.expectedDuration,l=e.expectedDurationUnits,d=e.isFirstPriceCard,u=e.isLastPriceCard,p=(0,o.Kz)(),_=p.interpolateString,h=p.getCheckoutLink,v=p.getActiveCouponText,b=p.getPromoDiscountText,m=(0,D.Q_)().contentfulResponse,j=function(e){var r=e.type,i=e.placement,n=e.isFirstPriceCard,t=e.isLastPriceCard;switch(i){case D.$f.Bundle:return r===w.Q.Bundle;case D.$f.Subscription:return r===w.Q.Subscription;case D.$f.FirstCard:return n;case D.$f.BothCards:return!0;case D.$f.LastCard:return t;default:return!1}}({type:t,isFirstPriceCard:d,isLastPriceCard:u,placement:null===m||void 0===m||null===(r=m.priceCardBurst)||void 0===r?void 0:r.placement})?null===m||void 0===m?void 0:m.priceCardBurst:void 0,g=h(w.Q.Subscription),x=h(w.Q.Bundle),y=c&&l?"".concat(c," ").concat(null===l||void 0===l?void 0:l.toLowerCase()):"",O=b();switch(t){case"subscription":return(0,f.jsx)(T,{burst:j,type:w.Q.Subscription,priceTemplate:_(W),title:"Monthly Access",blurb:"Pay as you go",isOnlyChild:a,checkoutLinkURL:g,ctaAnalytics:s,discountMessage:null!==(i=v(w.Q.Subscription,(function(e){return"".concat(e," off discount applied")})))&&void 0!==i?i:O,children:(0,f.jsxs)("ul",{className:C().detailList,children:[(0,f.jsx)("li",{children:"Maximum flexibility to learn at your own pace."}),(0,f.jsx)("li",{children:"Cancel anytime."})]})});case"bundle":return(0,f.jsx)(T,{burst:j,type:w.Q.Bundle,priceTemplate:_('\n<p>\n  <ins>!!bundlePayable!! </ins>\n  <del>\n  !!bundleSubtotalAmount!!\n  </del>\n  <br />\n  <span class="units">for !!bundleIntervalCount!!-!!bundleInterval!! access</span>\n</p>\n'),title:_("!!bundleIntervalCount!!-!!bundleInterval!! access"),blurb:_(a?"Save an extra !!bundlePercentSavings!!%":"Pay upfront and save an extra !!bundlePercentSavings!!%"),isOnlyChild:a,checkoutLinkURL:x,ctaAnalytics:s,discountMessage:null!==(n=v(w.Q.Bundle,(function(e){return"".concat(e," off discount applied")})))&&void 0!==n?n:O,children:(0,f.jsxs)("ul",{className:C().detailList,children:[(0,f.jsx)("li",{children:_(a?"Save an extra !!bundlePercentSavings!!%.":"Save an extra !!bundlePercentSavings!!% vs. pay as you go.")}),y&&(0,f.jsxs)("li",{children:[y," is the average time to complete this course."]}),(0,f.jsx)("li",{children:"Switch to monthly price after if more time is needed."}),(0,f.jsx)("li",{children:"Cancel anytime."})]})});default:return null}},E=i(5127),A=i(49531),Q=i.n(A),U=function(e){var r,i=e.title,n=e.body,t=e.expectedDuration,a=e.iconImage;return(0,f.jsxs)("article",{className:Q().feature,children:[(0,f.jsxs)("div",{className:Q().titleWrapper,children:[(0,f.jsx)("img",{height:16,alt:"",src:null===a||void 0===a||null===(r=a.file)||void 0===r?void 0:r.url}),(0,f.jsx)("h2",{className:x()("h6 bold",Q().featureTitle),children:i})]}),(0,f.jsx)("div",{className:Q().featureBody,dangerouslySetInnerHTML:{__html:(0,E.J7)(null===n||void 0===n?void 0:n.replace(/!!durationPlaceholder!!/,String(t)))}})]})};function V(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function Z(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?V(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var F=function(e){var r=e.title,i=e.priceCards,t=void 0===i?[]:i,a=e.monthlyFirst,s=e.features,c=void 0===s?[]:s,l=e.expectedDuration,o=e.expectedDurationUnits,d=(0,j.Z)(t).sort((function(e){return a?"subscription"===e.type?-1/0:1/0:"bundle"===e.type?-1/0:1/0})),u=1===(null===d||void 0===d?void 0:d.length);return(0,f.jsxs)("div",{className:x()(O().container,(0,n.Z)({},O().containerSingleChild,u)),children:[(0,f.jsx)("div",{className:O().topBackground}),(0,f.jsxs)("header",{className:O().header,children:[(0,f.jsx)("h2",{className:"white mb-2",children:r}),(0,f.jsx)("h3",{className:x()("h6 white mb-half",O().headerBlurb),children:"Get Started Today"})]}),(0,f.jsx)("ul",{className:x()(O().priceCardsWrapper,(0,n.Z)({},O().priceCardsWrapperSingleChild,u)),children:d.map((function(e,r){return(0,f.jsx)("li",{children:(0,f.jsx)(H,Z({expectedDuration:l,expectedDurationUnits:o,isOnlyChild:u,isFirstPriceCard:0===r,isLastPriceCard:r===(null===d||void 0===d?void 0:d.length)-1},e))},null===e||void 0===e?void 0:e.entryId)}))}),(0,f.jsx)("ul",{className:O().featureList,children:c.map((function(e){return(0,f.jsx)("li",{children:(0,f.jsx)(U,Z(Z({},e),{},{expectedDuration:l}))},null===e||void 0===e?void 0:e.entryId)}))})]})};function R(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),i.push.apply(i,n)}return i}function z(e){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?R(Object(i),!0).forEach((function(r){(0,n.Z)(e,r,i[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):R(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}var Y=function(e){var r=e.subscriptionPriceSections,i=e.installmentInfo,n=e.installmentModal,a=e.footer,s=e.expectedDuration,c=e.expectedDurationUnits,l=r||[],o=(0,t.Z)(l,1)[0];return(0,f.jsxs)("div",{"data-testid":"degree-pricing-section",children:[(0,f.jsx)(F,z(z({},o),{},{expectedDuration:s,expectedDurationUnits:c,monthlyFirst:!0})),(0,f.jsx)(v,{installmentInfo:i,installmentModal:n}),a&&(0,f.jsx)("div",{className:m().footer,children:(0,f.jsx)("p",{children:a})})]})}},50371:function(e,r,i){"use strict";i.d(r,{I:function(){return c}});var n=i(35845),t=i(59619),a=i.n(t),s=i(98859),c=function(e){var r,i,t,c,l=e.headerLogo1,o=e.header,d=e.feature1Image,u=e.feature1Header,p=e.feature1Text,f=e.feature2Header,_=e.feature2Text,h=e.feature2Image,v=e.featureMobileImage,b=e.footerDesktop,m=e.footerMobile;return(0,s.jsx)("div",{children:(0,s.jsxs)("div",{className:a().modalContent,children:[(0,s.jsxs)("div",{className:a().logosContainer,children:[l&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{children:l&&(0,s.jsx)(n.w,{alt:l.description,src:null===(r=l.file)||void 0===r?void 0:r.url})}),(0,s.jsx)("div",{className:a().divider})]}),(0,s.jsx)(n.w,{alt:"Affirm.",className:a().affirmLogo,src:"https://cdn-assets.affirm.com/images/black_logo-white_bg.svg"})]}),(0,s.jsx)("div",{className:a().affirmHeaderContainer,children:(0,s.jsx)("h3",{className:a().header,children:o})}),(0,s.jsxs)("ul",{className:a().features,children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{className:a().icon,children:d&&(0,s.jsx)("img",{alt:d.description,src:null===(i=d.file)||void 0===i?void 0:i.url})}),(0,s.jsx)("h6",{children:u}),(0,s.jsx)("p",{children:p})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{className:a().icon,children:h&&(0,s.jsx)(n.w,{alt:h.description,src:null===(t=h.file)||void 0===t?void 0:t.url})}),(0,s.jsx)("h6",{children:f}),(0,s.jsx)("p",{children:_})]})]}),(0,s.jsxs)("div",{className:a().featuresMobile,children:[v&&(0,s.jsx)(n.w,{alt:v.description,src:null===(c=v.file)||void 0===c?void 0:c.url}),(0,s.jsxs)("div",{children:[(0,s.jsx)("h6",{children:u}),(0,s.jsx)("div",{children:(0,s.jsx)(n.w,{alt:"Add",src:"//www.udacity.com/assets/iridium/images/affirm-installment/icon-add.svg"})}),(0,s.jsx)("h6",{children:f})]})]}),(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:a().footerDesktop,children:b}),(0,s.jsx)("div",{className:a().footerMobile,children:m})]})]})})}},60411:function(e){e.exports={priceCard:"price-card_priceCard__2btpX",enrollmentButtonContainer:"price-card_enrollmentButtonContainer__1EWVu",subheading:"price-card_subheading__3X9J5",bundlePromoSubHeading:"price-card_bundlePromoSubHeading__hkx0C",blurb:"price-card_blurb__2tLjG",flag:"price-card_flag__fzY2W",burst:"price-card_burst__2ZvC2",burst__second:"price-card_burst__second__4nCyL",priceInfo:"price-card_priceInfo__2vMRP",priceTextContainer:"price-card_priceTextContainer__2wnV9",price:"price-card_price__16Elq",priceLabel:"price-card_priceLabel__1wpcR",promoPriceLabel:"price-card_promoPriceLabel__ZIcY9",pricePayable:"price-card_pricePayable__3jMzJ",priceOriginal:"price-card_priceOriginal__3d3pN",percentDiscountMessaging:"price-card_percentDiscountMessaging__1l7EE",fixedDiscountMessaging:"price-card_fixedDiscountMessaging__1weyb"}},96381:function(e){e.exports={pricingTitle:"degree-pricing_pricingTitle__3XYDH",paymentCardSection:"degree-pricing_paymentCardSection__71wQ9",containedCards:"degree-pricing_containedCards__10SwK",background:"degree-pricing_background__2q5vP",footer:"degree-pricing_footer__XTeUy"}},49531:function(e){e.exports={feature:"_feature_feature__VuViw",featureBody:"_feature_featureBody__1RqhE",featureTitle:"_feature_featureTitle__14-Cp",titleWrapper:"_feature_titleWrapper__-_Niz"}},28078:function(e){e.exports={card:"_price-card_card__2PWjW",cardHeader:"_price-card_cardHeader__20OLK",bestValueWrapper:"_price-card_bestValueWrapper__1N_2p",whiteBorder:"_price-card_whiteBorder__2wxHN",onlyChild:"_price-card_onlyChild___rV_t",pricingTemplate:"_price-card_pricingTemplate__Am1WB",checkoutLinkButton:"_price-card_checkoutLinkButton__geiQP",detailList:"_price-card_detailList__3GALp",discountMessage:"_price-card_discountMessage__34YY-",burst:"_price-card_burst__1kBh2"}},17300:function(e){e.exports={container:"side-by-side_container__1mR7B",containerSingleChild:"side-by-side_containerSingleChild__1mi6V",header:"side-by-side_header__33WGE",headerBlurb:"side-by-side_headerBlurb__FP4lz",topBackground:"side-by-side_topBackground__cxxUB",priceCardsWrapper:"side-by-side_priceCardsWrapper__22YbD",featureList:"side-by-side_featureList__3CDVY",priceCardsWrapperSingleChild:"side-by-side_priceCardsWrapperSingleChild__3zItc"}},89794:function(e){e.exports={affirmLogo:"installment-info_affirmLogo__1fHcf",container:"installment-info_container__15YLq",partnership:"installment-info_partnership__3h21Q",features:"installment-info_features__1CXaz",icon:"installment-info_icon__1cA4o","feature-description":"installment-info_feature-description__punv0",installmentInfo:"installment-info_installmentInfo__3Uyr0"}},59619:function(e){e.exports={divider:"modal_divider__3Mpdy",logosContainer:"modal_logosContainer__zEqH9",affirmLogo:"modal_affirmLogo__2m76A",affirmHeaderContainer:"modal_affirmHeaderContainer__AOSgn",header:"modal_header__GGqPf",featuresMobile:"modal_featuresMobile__23R0p",features:"modal_features__1vVZX",icon:"modal_icon__3h9hb",footerDesktop:"modal_footerDesktop__1U4QC",footerMobile:"modal_footerMobile__31X-6",modalContent:"modal_modalContent__309ye"}}}]);