(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAHhJREFUOE9jvP9G4z8DBYAJSmMFiiI3wBgfwGsAMQCnAcg243MFbVyAzUZcrqC+C2A2/f//HwWDADZX4HUBIyMjHOMCKAbgC20YQFeD1wXoXsAG4AZgsx2XF5DV4nUBMQBsAC6/4/MCTA9OFyA7H90LyIDC7MzAAAC8JzK5mfk20AAAAABJRU5ErkJggg=="},function(e,a,t){e.exports=t.p+"static/media/company.b660fcf1.jpg"},function(e,a,t){e.exports=t.p+"static/media/services.47805012.jpg"},function(e,a,t){e.exports=t.p+"static/media/customers.949273b1.jpg"},function(e,a,t){e.exports=t.p+"static/media/album1.3ec5cc76.jpg"},function(e,a,t){e.exports=t.p+"static/media/album2.fd9d6533.jpg"},function(e,a,t){e.exports=t.p+"static/media/album3.30859492.jpg"},function(e,a,t){e.exports=t.p+"static/media/album4.cb77c610.jpg"},function(e,a,t){e.exports=t.p+"static/media/album5.8cb5702a.jpg"},function(e,a,t){e.exports=t.p+"static/media/album6.8de78a78.jpg"},function(e,a,t){e.exports=t.p+"static/media/whatsapp.33ee2d8d.png"},function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAIAAAD91JpzAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAPSURBVBhXYzgMBmDq8GEAQAoJJbQ7/xkAAAAASUVORK5CYII="},,function(e,a,t){e.exports=t(49)},,,,,,,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(1),l=t(2),r=t(4),c=t(3),i=t(5),s=t(0),o=t.n(s),m=t(9),u=t.n(m),p=(t(28),t(10)),d=t.n(p),E=t(11),A=t.n(E),b=t(12),g=t.n(b),h=t(13),v=t.n(h),f=t(14),N=t.n(f),j=t(15),O=t.n(j),C=t(16),y=t.n(C),w=t(17),x=t.n(w),M=t(18),S=t.n(M),k=t(19),B=t.n(k),D=t(20),z=t.n(D),F=t(22),T=(t(31),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=[];return Object.entries(this.props.items).forEach(function(a){var t=Object(F.a)(a,2),n=t[0],l=t[1];e.push(o.a.createElement("li",{key:n,className:"nav-item"},o.a.createElement("a",{className:"nav-link",href:"#sec-".concat(n)},l)))}),o.a.createElement("header",null,o.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},o.a.createElement("a",{className:"navbar-brand d-flex align-items-center",href:"#"},o.a.createElement("div",{className:"logo-container"},o.a.createElement("img",{className:"logo",alt:this.props.brand,src:this.props.logo})),o.a.createElement("span",null,this.props.brand)),o.a.createElement("button",{className:"navbar-custom-toggler btn",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{className:"navbar-toggler-icon"})),o.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},o.a.createElement("ul",{className:"navbar-nav mr-auto"},e))))}}]),a}(s.Component)),I=(t(34),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"d-flex align-items-end overflow-hidden header p-4 text-white"},o.a.createElement("div",{className:"col-12"},o.a.createElement("div",{className:"row p-3"},o.a.createElement("div",{className:"col-sm-12 col-md-8"},o.a.createElement("p",{className:"lead font-weight-normal header-description"},this.props.description)),o.a.createElement("div",{className:"col-sm-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end"},o.a.createElement("a",{className:"btn btn-secondary",href:"#sec-".concat(this.props.callToActionDestination)},this.props.callToAction)))))}}]),a}(s.Component)),R=(t(37),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e="order-lg-1",a="order-lg-0";"left"!==this.props.orientation&&(e="order-lg-0",a="order-lg-1");var t=o.a.createElement("div",{className:"col-12 col-lg-".concat(this.props.descriptionSize," ").concat(a)},o.a.createElement("h2",{className:"section-heading mb-4"},this.props.title),this.props.description),n=o.a.createElement("div",{className:"col-12 col-lg-".concat(this.props.illustrationSize," ").concat(e)},this.props.illustration),l="left"===this.props.orientation?"section-left":"section-right";return o.a.createElement("div",{id:"sec-".concat(this.props.id),className:"row ".concat(l," section d-flex mt-4 mb-4 py-4")},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},t,n)))}}]),a}(s.Component));R.defaultProps={descriptionSize:7,illustrationSize:5};var U=t(6),q=t(21),J=t.n(q),Q=new(function(){function e(){Object(n.a)(this,e),this.observed={},window.IntersectionObserver?this.observer=new IntersectionObserver(function(e,a){e.forEach(function(e){e.isIntersecting&&("function"===typeof e.target.callback&&e.target.callback(),a.unobserve(e.target))})}):this.observer=null}return Object(l.a)(e,[{key:"register",value:function(e,a){this.observer?(this.observer.observe(e),e.callback=a):a()}}]),e}()),G=(t(40),function(e){function a(e){var t;return Object(n.a)(this,a),(t=Object(r.a)(this,Object(c.a)(a).call(this,e))).state={image:J.a},t.element=o.a.createRef(),t.onDisplay=t.onDisplay.bind(Object(U.a)(Object(U.a)(t))),t}return Object(i.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){Q.register(this.element.current,this.onDisplay)}},{key:"onDisplay",value:function(){this.setState({image:this.props.image})}},{key:"render",value:function(){return o.a.createElement("img",{ref:this.element,src:this.state.image,className:"photo",alt:this.props.alt||""})}}]),a}(s.Component)),P=(t(43),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=[],a=0;return this.props.children.forEach(function(t){var n=t.props.active?"active":"";e.push(o.a.createElement("li",{key:a,"data-target":"#myCarousel","data-slide-to":a,className:n})),a+=1}),o.a.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},o.a.createElement("ol",{className:"carousel-indicators"},e),o.a.createElement("div",{className:"carousel-inner"},this.props.children),o.a.createElement("a",{className:"carousel-control-prev",href:"#myCarousel",role:"button","data-slide":"prev"},o.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},"Previous")),o.a.createElement("a",{className:"carousel-control-next",href:"#myCarousel",role:"button","data-slide":"next"},o.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),o.a.createElement("span",{className:"sr-only"},"Next")))}}]),a}(s.Component)),V=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){var e=this.props.active?"active":"";return o.a.createElement("div",{className:"carousel-item ".concat(e)},o.a.createElement(G,{image:this.props.image,alt:this.props.alt}))}}]),a}(s.Component),H=function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",{className:"container"},o.a.createElement("p",{className:"float-right"},o.a.createElement("a",{href:"#"},"Voltar ao topo")),o.a.createElement("p",null,"\xa9 ",this.props.year," ",this.props.author))}}]),a}(s.Component),X=(t(46),function(e){function a(){return Object(n.a)(this,a),Object(r.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(i.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(T,{logo:d.a,brand:"Terraplenagem EMA",items:{company:"A empresa",services:"Servi\xe7os",album:"Fotos",customers:"Clientes",contact:"Contato"}}),o.a.createElement(I,{title:"Terraplenagem EMA",description:"Servi\xe7os de terraplenagem e loca\xe7\xe3o de equipamentos em Monte Mor e regi\xe3o",callToAction:"Solicite um or\xe7amento gr\xe1tis!",callToActionDestination:"contact"}),o.a.createElement("div",{className:"container-fluid mt-4"},o.a.createElement(R,{id:"company",title:"A empresa",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"lead"},"A EMA realiza servi\xe7os de terraplenagem com qualidade e efici\xeancia h\xe1 mais de 30 anos."),o.a.createElement("p",null,"Atuamos em Monte Mor e regi\xe3o. Nossa qualidade \xe9 comprovada atrav\xe9s dos diversos tipos de servi\xe7os realizados para nossos clientes.")),illustration:o.a.createElement(G,{image:A.a}),orientation:"left"}),o.a.createElement(R,{id:"services",title:"Servi\xe7os",description:o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("p",{className:"lead"},"Terraplenagem"),o.a.createElement("ul",null,o.a.createElement("li",null,"Cortes e aterros"),o.a.createElement("li",null,"Compensa\xe7\xe3o de \xe1reas para obten\xe7\xe3o de plat\xf4s"),o.a.createElement("li",null,"Transporte de materiais escavados"),o.a.createElement("li",null,"Escava\xe7\xe3o em locais diversos")),o.a.createElement("p",{className:"lead"},"Venda e transporte"),o.a.createElement("ul",null,o.a.createElement("li",null,"Areia"),o.a.createElement("li",null,"Pedra"),o.a.createElement("li",null,"Terra"),o.a.createElement("li",null,"\xc1gua"))),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("p",{className:"lead"},"Loca\xe7\xe3o"),o.a.createElement("ul",null,o.a.createElement("li",null,"Escavadeiras hidr\xe1ulicas"),o.a.createElement("li",null,"Motoniveladora"),o.a.createElement("li",null,"Retroescavadeiras"),o.a.createElement("li",null,"Rolos compactadores"),o.a.createElement("li",null,"Tratores agr\xedcolas"),o.a.createElement("li",null,"Caminh\xf5es pipa"),o.a.createElement("li",null,"Carretas prancha"),o.a.createElement("li",null,"Caminh\xf5es basculantes"),o.a.createElement("li",null,"Mini escavadeira"),o.a.createElement("li",null,"Mini carregadeira")))),illustration:o.a.createElement(G,{image:g.a}),orientation:"right"}),o.a.createElement(R,{id:"album",title:"Fotos",description:o.a.createElement("p",{className:"lead"},"Na EMA nos orgulhamos de nossos servi\xe7os e equipamentos. Veja ao lado alguns de nossos equipamento e as obras que realizamos."),orientation:"left",descriptionSize:4,illustrationSize:8,illustration:o.a.createElement(P,null,o.a.createElement(V,{image:N.a,active:!0}),o.a.createElement(V,{image:O.a}),o.a.createElement(V,{image:y.a}),o.a.createElement(V,{image:x.a}),o.a.createElement(V,{image:S.a}),o.a.createElement(V,{image:B.a}))}),o.a.createElement(R,{id:"customers",title:"Clientes",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"lead"},"Conhe\xe7a alguns de nossos clientes:"),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("ul",null,o.a.createElement("li",null,"Alesco"),o.a.createElement("li",null,"SAAE indaiatuba"),o.a.createElement("li",null,"Corpus Indaiatuba"),o.a.createElement("li",null,"Asvotec Termoindustrial"),o.a.createElement("li",null,"NHL Requalificadora"),o.a.createElement("li",null,"Grupo CBP"),o.a.createElement("li",null,"Posto BR de Monte Mor"))),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("ul",null,o.a.createElement("li",null,"Haras Larissa "),o.a.createElement("li",null,"Pez\xe3o Bar"),o.a.createElement("li",null,"Solueng Engenharia"),o.a.createElement("li",null,"ECB "),o.a.createElement("li",null,"VCV Engenharia"),o.a.createElement("li",null,"John Deere"))))),illustration:o.a.createElement(G,{image:v.a}),orientation:"right"}),o.a.createElement(R,{id:"contact",title:"Contato",description:o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"text-center mb-4"},o.a.createElement("a",{className:"btn btn-secondary d-flex align-items-center justify-content-center",href:"https://wa.me/5519996056605"},o.a.createElement("img",{className:"btn-icon",src:z.a,alt:""}),"Clique aqui e pe\xe7a seu or\xe7amento gratuito via WhatsApp!")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("address",null,"Rua Siqueira Campos, 1276 ",o.a.createElement("br",null),"Centro, Monte Mor, SP ",o.a.createElement("br",null),"CEP: 13190-000 ",o.a.createElement("br",null),"Fone: ",o.a.createElement("a",{href:"tel:01938791730"},"(19) 3879-1730")),"Contatos diretos:",o.a.createElement("ul",null,o.a.createElement("li",null,"Edison: ",o.a.createElement("a",{href:"tel:019996056605"},"(19) 99605-6605")),o.a.createElement("li",null,"Edevaldo: ",o.a.createElement("a",{href:"tel:019996056602"},"(19) 99605-6602")),o.a.createElement("li",null,"Esmeraldo: ",o.a.createElement("a",{href:"tel:019996056603"},"(19) 99605-6603")))),o.a.createElement("div",{className:"col-lg-6"},o.a.createElement("p",null,"Atendemos as seguintes cidades:"),o.a.createElement("ul",null,o.a.createElement("li",null,"Monte Mor"),o.a.createElement("li",null,"Campinas"),o.a.createElement("li",null,"Indaiatuba"),o.a.createElement("li",null,"Sumar\xe9"),o.a.createElement("li",null,"Americana"),o.a.createElement("li",null,"Capivari"),o.a.createElement("li",null,"Elias Fausto"),o.a.createElement("li",null,"Itu")),o.a.createElement("p",{className:"small"},"Se sua cidade \xe9 pr\xf3xima de uma das cidades acima, provavelmente tamb\xe9m conseguimos lhe atender!")))),orientation:"left",illustration:o.a.createElement("iframe",{title:"map",className:"map",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14695.150382377993!2d-47.32549905716361!3d-22.958048343450827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8a56c6063192f%3A0xd8b0b92924107623!2sTerraplenagem+Ema!5e0!3m2!1spt-BR!2sbr!4v1547944574077",frameBorder:"0",allowFullScreen:!0})}),o.a.createElement(H,{year:2019,author:"Terraplenagem EMA"})))}}]),a}(s.Component));a.default=X;u.a.render(o.a.createElement(X,null),document.getElementById("root"))}],[[23,2,1]]]);
//# sourceMappingURL=main.21f04e6a.chunk.js.map