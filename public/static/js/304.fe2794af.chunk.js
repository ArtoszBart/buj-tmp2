"use strict";(self.webpackChunkbujnicka_dent=self.webpackChunkbujnicka_dent||[]).push([[304],{3932:function(e,n,i){var o=i(8683),a=i(8152),c=i(2791),s=i(184);n.Z=function(e){var n=(0,c.useState)(!1),i=(0,a.Z)(n,2),r=i[0],d=i[1];return(0,c.useEffect)((function(){var n=!0;d(!1);var i=new Image;return i.src=e.src,i.onload=function(){n&&d(!0)},function(){return n=!1}}),[e.src]),(0,s.jsx)(s.Fragment,{children:r?(0,s.jsx)("img",(0,o.Z)((0,o.Z)({},e),{},{alt:e.alt||""})):(0,s.jsxs)("div",{className:"loading",children:[(0,s.jsx)("i",{className:"fa fa-spinner fa-spin"}),(0,s.jsx)("span",{children:"\u0141adowanie zdj\u0119cia"})]})})}},1431:function(e,n,i){i(2791);var o=i(184);n.Z=function(e){return(0,o.jsx)("div",{className:"modal".concat(e.hook.isMounted?" opened":" closing"),id:e.hook.modalClosingId,onAnimationEnd:e.hook.onAnimationEnd,onClick:e.hook.closeModal,children:(0,o.jsxs)("div",{className:"modal-body",children:[(0,o.jsx)("h3",{children:e.title}),(0,o.jsx)("div",{className:"modal-body-content",children:e.children}),(0,o.jsx)("div",{className:"modal-body-close",id:e.hook.modalClosingId,onClick:e.hook.closeModal,children:(0,o.jsx)("i",{className:"fas fa-times",id:e.hook.modalClosingId,onClick:e.hook.closeModal})})]})})}},8570:function(e,n,i){var o=i(8152),a=i(2791),c=i(184);n.Z=function(e){var n=(0,a.useState)(0),i=(0,o.Z)(n,2),s=i[0],r=i[1],d=function(){return r(window.pageYOffset)};return(0,a.useEffect)((function(){return window.addEventListener("scroll",d),function(){return window.removeEventListener("scroll",d)}}),[]),(0,c.jsxs)("div",{className:"banner",id:e.id,style:{transform:"translateY(-".concat(.5*s,"px)")},children:[(0,c.jsx)("div",{className:"banner-title",children:(0,c.jsxs)("h1",{children:[(0,c.jsx)("i",{children:e.text}),e.text2]})}),e.children]})}},4341:function(e,n,i){var o=i(8152),a=i(2791);n.Z=function(){var e="modal-closing",n=(0,a.useState)(!1),i=(0,o.Z)(n,2),c=i[0],s=i[1],r=(0,a.useState)(null),d=(0,o.Z)(r,2),l=d[0],t=d[1];return{openedModal:l,isMounted:c,openModal:function(e){t(e),s(!0)},closeModal:function(n){n.target.id===e&&s(!1)},modalClosingId:e,onAnimationEnd:function(){c||t(null)}}}},2109:function(e,n,i){i(2791);var o=i(1431),a=i(184);n.Z=function(e){return(0,a.jsx)(a.Fragment,{children:"Z\u0105b filarowy"===e.hook.openedModal&&(0,a.jsxs)(o.Z,{title:"Z\u0105b filarowy",hook:e.hook,children:[(0,a.jsxs)("p",{children:["Do stworzenia mostu potrzebne s\u0105 ",(0,a.jsx)("b",{children:"2 miejsca podparcia"})," wi\u0119c z\u0119by s\u0105siaduj\u0105ce z luk\u0105 staj\u0105 si\u0119"," ",(0,a.jsx)("b",{children:"filarami mostu - z\u0119bami filarowymi"}),"."]}),(0,a.jsxs)("p",{children:["Most jest uzupe\u0142nieniem protetycznym wykonywanym w przypadku tzw. braku mi\u0119dzyz\u0119bowego, czyli gdy luka po obu stronach s\u0105siaduje z innymi z\u0119bami. S\u0105 one kluczowe w wykonaniu mostu, staj\u0105c si\u0119 miejscem jego podparcia, b\u0119d\u0105c tzw."," ",(0,a.jsx)("b",{children:"z\u0119bami filarowymi"}),"."]})]})})}},7836:function(e,n,i){i(2791);var o=i(184);n.Z=function(e){var n=e.children;return(0,o.jsxs)("div",{className:"important-info",children:[(0,o.jsxs)("div",{className:"important-info-title",children:[(0,o.jsx)("i",{className:"fas fa-info-circle"}),(0,o.jsx)("h5",{children:"Wa\u017cne"})]}),(0,o.jsx)("p",{children:n})]})}},5088:function(e,n,i){i.r(n),i.d(n,{default:function(){return t}});var o=i(7836),a={Endometer:i.p+"static/media/endometer.a57e2266d9b73d32059f.jpeg"},c=i(8570),s=i(2109),r=i(4341),d=i(3932),l=i(184);var t=function(){var e=(0,r.Z)();return(0,l.jsxs)("main",{className:"page-wrapper",role:"main",children:[(0,l.jsx)(c.Z,{id:"endodontics",text:"Endodoncja"}),(0,l.jsxs)("article",{className:"page-content",children:[(0,l.jsxs)("section",{"aria-labelledby":"what-is-endodontics",children:[(0,l.jsx)("h2",{id:"what-is-endodontics",children:"Czym zajmuje si\u0119 Endodoncja?"}),(0,l.jsxs)("p",{children:[(0,l.jsx)("dfn",{children:"Endodoncja"})," - potocznie nazywana ",(0,l.jsx)("b",{children:"leczeniem kana\u0142owym"})," - jest dziedzin\u0105 stomatologii zachowawczej zajmuj\u0105c\u0105 si\u0119 leczeniem kana\u0142\xf3w z\u0119bowych. W zale\u017cno\u015bci od rodzaju z\u0119ba, ",(0,l.jsx)("b",{children:"kana\u0142\xf3w w z\u0119bie mo\u017ce by\u0107 od 1 do 5"})," i wi\u0119cej (np. g\xf3rne z\u0119by sz\xf3ste maj\u0105 najcz\u0119\u015bciej 5 kana\u0142\xf3w, a k\u0142y - jeden)."]}),(0,l.jsxs)("p",{children:["Nieleczone ubytki pr\xf3chnicze przekszta\u0142caj\u0105 si\u0119 w ",(0,l.jsx)("b",{children:"powa\u017cne ubytki"})," obejmuj\u0105ce kolejne tkanki z\u0119ba, z czasem docieraj\u0105ce do jego centrum - ",(0,l.jsx)("dfn",{children:"miazgi"}),". Tutaj znajduj\u0105ce si\u0119 w pr\xf3chnicy bakterie szybko namna\u017caj\u0105 si\u0119 i powoduj\u0105 ",(0,l.jsx)("b",{children:"zapalenie miazgi"}),", daj\u0105ce silne objawy b\xf3lowe i ",(0,l.jsx)("b",{children:"konieczno\u015b\u0107"})," przeprowadzenia"," ",(0,l.jsx)("b",{children:"natychmiastowego leczenia kana\u0142owego"}),"."]}),(0,l.jsxs)("p",{children:["Czasami rozwijaj\u0105ca si\u0119 pr\xf3chnica doprowadza do bezobjawowej martwicy miazgi."," ",(0,l.jsx)("b",{children:"Chora miazga powinna zosta\u0107 jak najszybciej usuni\u0119ta"}),", poniewa\u017c bakterie mog\u0105 rozprzestrzenia\u0107 si\u0119 poza kana\u0142 z\u0119ba do ko\u015bci i spowodowa\u0107 ",(0,l.jsx)("b",{children:"zapalenie ko\u015bci"})," w okolicy wierzcho\u0142ka korzenia z\u0119ba."]}),(0,l.jsx)("h3",{children:"Wskazania do leczenia endodontycznego:"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:"Zapalenie miazgi"})}),(0,l.jsx)("li",{children:(0,l.jsx)("b",{children:"Martwica miazgi"})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Zapalenie ko\u015bci"})," okolicy przywierzcho\u0142kowej z\u0119ba, tzw. zmiany zapalne oko\u0142owierzcho\u0142kowe"]}),(0,l.jsxs)("li",{children:["Procesy chorobowe w obr\u0119bie wn\u0119trza z\u0119ba jako ",(0,l.jsx)("b",{children:"powik\u0142ania chor\xf3b przyz\u0119bia"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Ods\u0142oni\u0119ta miazga"})," z powodu urazu mechanicznego"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"Wskazania protetyczne"}),", gdy rozleg\u0142e zniszczenie cz\u0119\u015bci koronowej z\u0119ba uniemo\u017cliwia stworzenie retencji pod odbudow\u0119 protetyczn\u0105"]})]})]}),(0,l.jsxs)("section",{"aria-labelledby":"endodontics-process",children:[(0,l.jsx)("h2",{id:"endodontics-process",children:"Przebieg leczenia endodontycznego:"}),(0,l.jsx)("h3",{children:"Leczenie endodontyczne polega na:"}),(0,l.jsxs)("ol",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:(0,l.jsx)("b",{children:"Usuni\u0119ciu chorej miazgi"})})}),(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:["Mechanicznym ",(0,l.jsx)("b",{children:"poszerzeniu kana\u0142\xf3w"})," narz\u0119dziami r\u0119cznymi i maszynowymi"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Dezynfekcji"})," specjalnym zestawem \u015brodk\xf3w odka\u017caj\u0105cych"]})}),(0,l.jsx)("li",{children:(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Wype\u0142nieniu kana\u0142\xf3w"})," gutaperk\u0105 i materia\u0142em uszczelniaj\u0105cym. Nowoczesne preparaty do wype\u0142niania kana\u0142\xf3w tworz\u0105 z z\u0119bem szczelny konglomerat, kt\xf3ry zapobiega kontaktowi wn\u0119trza z\u0119ba z reszt\u0105 organizmu"]})})]}),(0,l.jsxs)(o.Z,{children:["Zabieg wykonuje si\u0119 w ",(0,l.jsx)("b",{children:"znieczuleniu miejscowym"})," i z udzia\u0142em ",(0,l.jsx)("b",{children:"diagnostyki rentgenowskiej"}),", zar\xf3wno przed, w trakcie jak i po leczeniu. Procedura post\u0119powania jest czasoch\u0142onna, wymagaj\u0105ca kosztownego instrumentarium i du\u017cych umiej\u0119tno\u015bci lekarza."]}),(0,l.jsxs)("div",{className:"text-img normal",children:[(0,l.jsx)("div",{className:"photos",children:(0,l.jsxs)("div",{className:"page-photo",children:[(0,l.jsx)(d.Z,{src:a.Endometer,alt:""}),(0,l.jsx)("span",{children:"Endometr"})]})}),(0,l.jsxs)("div",{children:[(0,l.jsxs)("p",{children:["Nowoczesna endodoncja wykorzystuje ",(0,l.jsx)("b",{children:"szereg zaawansowanych technologicznie urz\u0105dze\u0144"}),", np.:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:[(0,l.jsx)("dfn",{children:"Endometr"})," - s\u0142u\u017cy do pomiaru d\u0142ugo\u015bci kana\u0142\xf3w korzeniowych"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("dfn",{children:"Tomografi\u0119 komputerow\u0105"})," - umo\u017cliwia ocen\u0119 anatomii z\u0119ba w wymiarach 3D"]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("dfn",{children:"Mikroskop"})," - pozwalaja na prac\u0119 wewn\u0105trz kana\u0142\xf3w pod kontrol\u0105 wzroku lekarza"]})]}),(0,l.jsxs)("p",{children:["W sytuacji, kiedy leczenie endodontyczne ",(0,l.jsx)("b",{children:"nie przynios\u0142o oczekiwanych rezultat\xf3w"}),", np:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsxs)("li",{children:["ponownie wyst\u0105pi\u0142y ",(0,l.jsx)("b",{children:"objawy b\xf3lowe"})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("b",{children:"kana\u0142y zosta\u0142y reinfekowane"})," z powodu braku prawid\u0142owego zabezpieczenia z\u0119ba po leczeniu lub zaniechania post\u0119powania leczniczego przez pacjenta"]}),(0,l.jsxs)("li",{children:["kana\u0142y ",(0,l.jsx)("b",{children:"nie zosta\u0142y prawid\u0142owo wype\u0142nione"})]}),(0,l.jsxs)("li",{children:["rozwin\u0119\u0142y si\u0119 ",(0,l.jsx)("b",{children:"zmiany zapalne w ko\u015bci"})]})]})]})]}),(0,l.jsx)("p",{children:"wykonuje si\u0119 powt\xf3rne leczenie endodontyczne, tzw. REENDO. Jest ono bardziej skomplikowane, a co za tym idzie bardziej czasoch\u0142onne i kosztowne ni\u017c leczenie pierwotne. Warto jest wi\u0119c zainwestowa\u0107 w nowoczesne procedury lecznicze i doprowadzi\u0107 leczenie do ko\u0144ca."})]}),(0,l.jsxs)("section",{"aria-labelledby":"why-endodontics",children:[(0,l.jsx)("h2",{id:"why-endodontics",children:"Dlaczego warto podj\u0105\u0107 leczenie kana\u0142owe?"}),(0,l.jsxs)("p",{children:["Pacjenci cz\u0119sto nie podejmuj\u0105 leczenia kana\u0142owego ze wzgl\u0119du na koszty finansowe tego zabiegu. Doprowadza to do"," ",(0,l.jsx)("b",{children:"ca\u0142kowitego zniszczenia z\u0119ba"})," i konieczno\u015bci ",(0,l.jsx)("b",{children:"usuni\u0119cia go"}),". Uzupe\u0142nienie brakuj\u0105cego z\u0119ba metodami protetycznymi - mostem lub implantem, jest zdecydowanie ",(0,l.jsx)("b",{children:"bardziej inwazyjne"})," ze wzgl\u0119du na konieczno\u015b\u0107 szlifowania"," ",(0,l.jsx)("span",{className:"text-link",onClick:function(){return e.openModal("Z\u0105b filarowy")},children:"z\u0119b\xf3w filarowych"})," ","w przypadku mostu lub wykonania inwazyjnego zabiegu chirurgicznego w przypadku implant\xf3w."]}),(0,l.jsxs)("p",{children:["\u017badne uzupe\u0142nienie protetyczne ",(0,l.jsx)("b",{children:"nie jest w stanie zast\u0105pi\u0107 naturalnego z\u0119ba"}),". Leczenie kana\u0142owe jest zabiegiem kosztownym, jednak w por\xf3wnaniu do zabieg\xf3w protetycznych jest ",(0,l.jsx)("b",{children:"zdecydowanie ta\u0144szym rozwi\u0105zaniem"}),"."]}),(0,l.jsxs)("p",{children:["Ponadto ",(0,l.jsx)("b",{children:"trudno jest oszacowa\u0107 koszt takiego leczenia"})," przed jego rozpocz\u0119ciem, poniewa\u017c:"]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"nigdy nie ma do ko\u0144ca pewno\u015bci, \u017ce dany z\u0105b b\u0119dzie posiada\u0142 przewidywan\u0105 ilo\u015b\u0107 kana\u0142\xf3w"}),(0,l.jsx)("li",{children:"zmiany zapalne w ko\u015bci mog\u0105 spowodowa\u0107 konieczno\u015b\u0107 wi\u0119kszej ilo\u015bci wizyt"})]}),(0,l.jsxs)(o.Z,{children:["Warto jest zadba\u0107 o to, aby zachowa\u0107 ",(0,l.jsx)("b",{children:"jak najwi\u0119ksz\u0105 ilo\u015b\u0107 swoich w\u0142asnych z\u0119b\xf3w"}),"."]})]}),(0,l.jsx)(s.Z,{hook:e})]})]})}},8683:function(e,n,i){function o(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function c(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){o(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}i.d(n,{Z:function(){return c}})}}]);
//# sourceMappingURL=304.fe2794af.chunk.js.map