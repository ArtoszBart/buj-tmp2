"use strict";(self.webpackChunkbujnicka_dent=self.webpackChunkbujnicka_dent||[]).push([[203],{3932:function(e,a,n){var i=n(8683),r=n(8152),s=n(2791),o=n(184);a.Z=function(e){var a=(0,s.useState)(!1),n=(0,r.Z)(a,2),A=n[0],t=n[1];return(0,s.useEffect)((function(){var a=!0;t(!1);var n=new Image;return n.src=e.src,n.onload=function(){a&&t(!0)},function(){return a=!1}}),[e.src]),(0,o.jsx)(o.Fragment,{children:A?(0,o.jsx)("img",(0,i.Z)((0,i.Z)({},e),{},{alt:e.alt||""})):(0,o.jsxs)("div",{className:"loading",children:[(0,o.jsx)("i",{className:"fa fa-spinner fa-spin"}),(0,o.jsx)("span",{children:"\u0141adowanie zdj\u0119cia"})]})})}},8570:function(e,a,n){var i=n(8152),r=n(2791),s=n(184);a.Z=function(e){var a=(0,r.useState)(0),n=(0,i.Z)(a,2),o=n[0],A=n[1],t=function(){return A(window.pageYOffset)};return(0,r.useEffect)((function(){return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}}),[]),(0,s.jsxs)("div",{className:"banner",id:e.id,style:{transform:"translateY(-".concat(.5*o,"px)")},children:[(0,s.jsx)("div",{className:"banner-title",children:(0,s.jsxs)("h1",{children:[(0,s.jsx)("i",{children:e.text}),e.text2]})}),e.children]})}},5968:function(e,a,n){var i=n(8152),r=n(3932),s=n(2791),o=n(184);a.Z=function(e){var a=e.hook,n=e.multipleImages,A=(0,s.useRef)(),t=(0,s.useState)(window.innerHeight),c=(0,i.Z)(t,2),l=c[0],d=c[1],m=(0,s.useState)(!1),w=(0,i.Z)(m,2),h=w[0],u=w[1],j=(0,s.useState)(0),g=(0,i.Z)(j,2),f=g[0],E=g[1],p=(0,s.useState)(0),x=(0,i.Z)(p,2),y=x[0],k=x[1],B={width:"".concat(100*a.activeImageSet.length,"vw"),transform:"translateX(calc(-".concat(100*a.openedImg+50,"vw + ").concat(y,"px))")};(0,s.useEffect)((function(){return Q(),window.addEventListener("resize",Q),window.addEventListener("touchmove",v,{passive:!1}),document.body.style.overflow="hidden",function(){window.removeEventListener("resize",Q),window.removeEventListener("touchmove",v,{passive:!1}),document.body.style.overflow="initial"}}));var v=function(e){if(h)return e.preventDefault(),e.returnValue=!1,!1},Q=function(){d(window.innerHeight)};return(0,o.jsxs)("div",{className:"gallery-overlay".concat(a.isOpened?" opened":" closing"),style:{height:"".concat(l,"px")},onAnimationEnd:a.onAnimationEnd,id:"overlay-closing",onClick:a.closeGalleryOverlay,children:[(0,o.jsx)("div",{className:"top-pane",id:"overlay-closing",onClick:a.closeGalleryOverlay,children:(0,o.jsx)("i",{className:"fas fa-times",id:"overlay-closing"})}),n&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"left-pane",onClick:a.prevImage,children:(0,o.jsx)("i",{className:"fas fa-chevron-left"})}),(0,o.jsx)("div",{className:"right-pane",onClick:a.nextImage,children:(0,o.jsx)("i",{className:"fas fa-chevron-right"})}),(0,o.jsxs)("div",{className:"bottom-pane",children:[(0,o.jsx)("i",{className:"fas fa-caret-left",onClick:a.prevImage}),(0,o.jsxs)("p",{children:[a.openedImg+1," / ",a.activeImageSet.length]}),(0,o.jsx)("i",{className:"fas fa-caret-right",onClick:a.nextImage})]})]}),(0,o.jsx)("div",{className:"central-pane".concat(h?" user-moving":""),id:"overlay-closing",onTouchStart:function(e){u(!0),E(e.touches[0].clientX)},onTouchMove:function(e){k(e.touches[0].clientX-f)},onTouchEnd:function(){u(!1),y>50?(a.prevImage(),k(0)):y<-50?(a.nextImage(),k(0)):k(0)},style:B,ref:A,children:a.activeImageSet.map((function(e,a){return(0,o.jsx)("div",{className:"img-box",id:"overlay-closing",children:(0,o.jsx)(r.Z,{src:e,alt:"Certificate"})},a)}))})]})}},4779:function(e,a,n){var i=n(8152),r=n(2791);a.Z=function(e){var a=(0,r.useState)(!1),n=(0,i.Z)(a,2),s=n[0],o=n[1],A=(0,r.useState)(!1),t=(0,i.Z)(A,2),c=t[0],l=t[1],d=(0,r.useState)(null),m=(0,i.Z)(d,2),w=m[0],h=m[1],u=(0,r.useState)(null),j=(0,i.Z)(u,2),g=j[0],f=j[1],E=function(){var e;e=g<w.length-1?g+1:0,f(e)},p=function(){var e;e=g>0?g-1:w.length-1,f(e)},x=function(e){"ArrowRight"===e.key?E():"ArrowLeft"===e.key?p():"Escape"===e.key&&l(!1)};return(0,r.useEffect)((function(){return document.addEventListener("keydown",x),function(){document.removeEventListener("keydown",x)}})),{isMounted:c,openedImg:g,openGalleryOverlay:function(a,n){e&&(h(e[a]),f(n),l(!0),o(!0))},closeGalleryOverlay:function(e){"overlay-closing"===e.target.id&&o(!1)},nextImage:E,prevImage:p,isOpened:s,onAnimationEnd:function(){s||l(!1)},activeImageSet:w}}},8154:function(e,a,n){n.r(a),n.d(a,{default:function(){return c}});var i=n(5968),r=n(4779),s=n(8570),o={PhotoBujnicka:n.p+"static/media/Magdalena_Bujnicka.4b3acd3aa744849dd568.jpg",PhotoBohdan:"data:image/jpeg;base64,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",PhotoMaria:n.p+"static/media/Maria_Baluta.53be1a088b201b5b7a3f.jpg",TablBohdan:n.p+"static/media/Tableau_Bohdan.9442f46012273279dff3.jpg",TablMaria:n.p+"static/media/Tableau_Maria.cb9edece44571683126f.jpg"},A=n(3932),t=n(184);var c=function(){var e=(0,r.Z)([[o.TablBohdan],[o.TablMaria]]);return(0,t.jsxs)("main",{className:"page-wrapper",role:"main",children:[(0,t.jsx)(s.Z,{id:"about",text:"O nas"}),(0,t.jsxs)("article",{className:"page-content",children:[(0,t.jsxs)("section",{className:"history",children:[(0,t.jsx)("h2",{children:"Historia"}),(0,t.jsxs)("div",{className:"history-text",children:[(0,t.jsxs)("p",{children:["Historia lekarska w naszej rodzinie zacz\u0119\u0142a si\u0119 w 1953 roku. Moja mama Maria Ba\u0142uta, rozpocz\u0119\u0142a studia na Wydziale Stomatologicznym Akademii Medycznej w Gda\u0144sku. Po studiach po\u0142\u0105czy\u0142a swoj\u0105 lekarsk\u0105 pasj\u0119 z Bohdanem Bujnickim, kt\xf3ry w 1959 roku uko\u0144czy\u0142 ",(0,t.jsx)("span",{className:"nowrap",children:"Wydzia\u0142 Weterynarii w Warszawie"}),"."]}),(0,t.jsx)("p",{children:"Pierwszy gabinet powsta\u0142 w 1966 roku na Pomorzu \u015arodkowym, a ja wyrasta\u0142am w jego s\u0105siedztwie w atmosferze niesienia pomocy pacjentom. Od wczesnego dzieci\u0144stwa wiedzia\u0142am, \u017ce moim powo\u0142aniem jest... r\xf3wnie\u017c by\u0107 lekarzem!"}),(0,t.jsx)("p",{children:"Drugi gabinet powsta\u0142 w 1993 roku w Warszawie."})]}),(0,t.jsx)("div",{className:"text-img horizontal",children:(0,t.jsxs)("div",{className:"photos",children:[(0,t.jsxs)("div",{className:"page-photo",children:[(0,t.jsx)(A.Z,{src:o.PhotoMaria,className:"employee-picture",alt:"Maria Ba\u0142uta"}),(0,t.jsxs)("div",{className:"page-photo-text",children:[(0,t.jsx)("span",{children:"Maria Ba\u0142uta"}),(0,t.jsx)("span",{className:"text-link",onClick:function(){return e.openGalleryOverlay(1,0)},children:"(tablo)"})]})]}),(0,t.jsxs)("div",{className:"page-photo",children:[(0,t.jsx)(A.Z,{src:o.PhotoBohdan,className:"employee-picture",alt:"Bohdan Bujnicki"}),(0,t.jsxs)("div",{className:"page-photo-text",children:[(0,t.jsx)("span",{children:"Bohdan Bujnicki"}),(0,t.jsx)("span",{className:"text-link",onClick:function(){return e.openGalleryOverlay(0,0)},children:"(tablo)"})]})]})]})}),e.isOpened&&(0,t.jsx)(i.Z,{hook:e})]}),(0,t.jsxs)("section",{className:"employee",children:[(0,t.jsxs)("div",{className:"employee-title",children:[(0,t.jsx)("h2",{children:"Magdalena Bujnicka"}),(0,t.jsx)("p",{className:"subheadder",children:"Lekarz stomatolog"})]}),(0,t.jsx)("div",{className:"page-photo employee-photo",children:(0,t.jsx)(A.Z,{src:o.PhotoBujnicka,alt:"Magdalena Bujnicka"})}),(0,t.jsxs)("div",{className:"employee-about",children:[(0,t.jsxs)("p",{children:["Jestem absolwentk\u0105 Pomorskiej Akademii Medycznej w Szczecinie i od pierwszych lat studi\xf3w mog\u0142am liczy\u0107 na wsparcie oraz, poparte wieloletnim do\u015bwiadczeniem, cenne rady rodzic\xf3w lekarzy. Wpojono mi, \u017ce"," ",(0,t.jsx)("b",{children:"dobro pacjenta jest najwy\u017csz\u0105 warto\u015bci\u0105"}),"."]}),(0,t.jsxs)("p",{children:["Moim pacjentom zapewniam ",(0,t.jsx)("b",{children:"ca\u0142kowit\u0105 pomoc stomatologiczn\u0105"}),", pocz\u0105wszy od profilaktyki, a\u017c do uzupe\u0142nienia brak\xf3w z\u0119bowych. Zawsze projektuj\u0119 kilka rozwi\u0105za\u0144, ",(0,t.jsx)("b",{children:"dopasowanych do mo\u017cliwo\u015bci finansowych"}),", a umiej\u0119tno\u015b\u0107 s\u0142uchania pozwala mi zbli\u017cy\u0107 plan leczenia do oczekiwa\u0144 pacjenta. Cz\u0119sto te\u017c udaje mi si\u0119"," ",(0,t.jsx)("b",{children:"uratowa\u0107 z\u0119by bardzo zniszczone i przeznaczone do ekstrakcji"}),". Stosowanie zasad minimalnie interweniuj\u0105cych w tkanki z\u0119ba, umo\u017cliwia uratowanie jak najwi\u0119kszej ilo\u015bci w\u0142asnych z\u0119b\xf3w pacjenta i pozwala na zastosowanie najkorzystniejszych rozwi\u0105za\u0144 protetycznych."]}),(0,t.jsxs)("p",{children:["Dwuletni sta\u017c podyplomowy w prywatnym gabinecie w Wiedniu w Austrii, umo\u017cliwi\u0142 mi szybkie zapoznanie si\u0119 i wdro\u017cenie nowoczesnych procedur. Zgromadzone ",(0,t.jsx)("b",{children:"do\u015bwiadczenie dw\xf3ch pokole\u0144"})," w po\u0142\u0105czeniu z"," ",(0,t.jsx)("b",{children:"najnowocze\u015bniejszymi technologiami"})," i wiedz\u0105, gwarantuj\u0105 najlepszy mo\u017cliwy standard us\u0142ug stomatologicznych!"]})]})]})]})]})}},8683:function(e,a,n){function i(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){i(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}n.d(a,{Z:function(){return s}})}}]);
//# sourceMappingURL=203.682a0a3e.chunk.js.map