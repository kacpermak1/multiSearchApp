(this["webpackJsonpsearch-app"]=this["webpackJsonpsearch-app"]||[]).push([[0],{152:function(e,t,a){e.exports=a(305)},304:function(e,t,a){},305:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),o=a.n(c),i=a(32),l=a(3),s=a(332),u=a(342),m=a(344),h=a(341),p=a(71),g=a(343),d=a(14),f=a(46),v=a(22),b=a(47),E=a(48),y=a(49),w=a(57),j=a.n(w),x=a(135),O=a.n(x),k=a(50),S=a.n(k),T=a(95),C=a(65),L=a.n(C),_=a(136),I=a.n(_),U=a(137),A=a.n(U),N=a(138),W=a.n(N),q=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1,currentImg:""},a.handleOpen=function(e){a.setState({open:!0,currentImg:e})},a.handleClose=function(){a.setState({open:!1})},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props.images;e=a?r.a.createElement(T.GridList,{cellHeight:220,cols:3},a.map((function(e){return r.a.createElement(T.GridTile,{title:e.tags,key:e.id,subtitle:r.a.createElement("span",null,"by ",r.a.createElement("strong",null,e.user)),actionIcon:r.a.createElement(L.a,{onClick:function(){return t.handleOpen(e.largeImageURL)}},r.a.createElement(I.a,{color:"white"}))},r.a.createElement("img",{src:e.largeImageURL,alt:e.tags}))}))):null;var n=[r.a.createElement(W.a,{label:"close",primary:!0,onClick:this.handleClose})];return r.a.createElement("div",null,e,r.a.createElement(A.a,{actions:n,modal:!1,open:this.state.open,onRequestCLose:this.state.close},r.a.createElement("img",{src:this.state.currentImg,alt:"",style:{width:"100%"}})))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={searchText:"",amount:15,apiUrl:"https://pixabay.com/api",apiKey:"15164621-e9e63a50c846d79421bd72c77",images:[],error:!1,isLoading:!0},a.onTextChange=function(e){var t=e.target.value;a.setState(Object(d.a)({},e.target.name,t),(function(){""===t?a.setState({images:[]}):fetch("".concat(a.state.apiUrl,"/?key=").concat(a.state.apiKey,"&q=").concat(a.state.searchText,"&image_type=photo&per_page=").concat(a.state.amount,"&safesearch=true")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(e){return a.setState({images:e.hits,isLoading:!1})})).catch((function(e){return a.setState({error:!0,isLoading:!1})}))}))},a.onAmountChange=function(e,t,n){a.setState({amount:n},(function(){a.state.searchText&&fetch("".concat(a.state.apiUrl,"/?key=").concat(a.state.apiKey,"&q=").concat(a.state.searchText,"&image_type=photo&per_page=").concat(a.state.amount,"&safesearch=true")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(e){return a.setState({images:e.hits,isLoading:!1})})).catch((function(e){return a.setState({error:!0,isLoading:!1})}))}))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=a(264);fetch("".concat(this.state.apiUrl,"/?key=").concat(this.state.apiKey,"&q=").concat(t(1)[0],"&image_type=photo&per_page=").concat(this.state.amount,"&safesearch=true")).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(t){return e.setState({images:t.hits,isLoading:!1})})).catch((function(t){return e.setState({error:!0,isLoading:!1})}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{name:"searchText",value:this.state.searchText,onChange:this.onTextChange,floatingLabelText:"search for images",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(O.a,{name:"amount",floatingLabelText:"Amount",value:this.state.amount,onChange:this.onAmountChange},r.a.createElement(S.a,{value:5,primaryText:"5"}),r.a.createElement(S.a,{value:10,primaryText:"10"}),r.a.createElement(S.a,{value:15,primaryText:"15"}),r.a.createElement(S.a,{value:20,primaryText:"20"}),r.a.createElement(S.a,{value:25,primaryText:"25"})),r.a.createElement("br",null),this.state.images.length>0?r.a.createElement(q,{images:this.state.images}):null)}}]),t}(n.Component),K=a(96),G=a.n(K),M=a(139),B=a(4),D=a(334),J=a(335),P=a(337),H=a(338),$=a(339),z=a(345),F=a(336),Q=a(70),V=a(141),X=a.n(V),Y=a(142),Z=a.n(Y),ee=a(140),te=a.n(ee),ae=Object(s.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:Q.a[500]}}}));var ne=function(e){var t=ae(),a=r.a.useState(!1),c=Object(i.a)(a,2),o=c[0],l=c[1],s=r.a.useState([]),u=Object(i.a)(s,2),m=u[0],h=u[1];Object(n.useEffect)((function(){function t(){return(t=Object(M.a)(G.a.mark((function t(){return G.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=h,t.next=3,fetch("https://api.themoviedb.org/3/movie/".concat(e.id,"/reviews?api_key=fdfd76b83d61c6a42b476b1cf05cc0d8&language=en-US&page=1")).then((function(e){return e.json()})).then((function(e){return e.results})).catch((function(e){return console.log(e,"something went wrong")}));case 3:t.t1=t.sent,(0,t.t0)(t.t1);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]);var g=r.a.useState(!1),f=Object(i.a)(g,2),v=f[0],b=f[1];return r.a.createElement(D.a,{className:t.root},r.a.createElement(J.a,{action:r.a.createElement(F.a,{"aria-label":"settings"},r.a.createElement(te.a,null)),title:e.title,subheader:e.date}),r.a.createElement(P.a,{className:t.media,image:e.image,title:"Paella dish"}),r.a.createElement(H.a,null,r.a.createElement(p.a,{variant:"body2",color:"textSecondary",component:"p"},e.overview)),r.a.createElement($.a,{disableSpacing:!0},r.a.createElement(F.a,{"aria-label":"add to favorites"},r.a.createElement(X.a,{onClick:function(){return b(!v)},style:v?{color:"rgb(255, 64, 128)"}:null})),r.a.createElement("span",{style:{color:"rgba(0, 0, 0, 0.54)"}},e.vote),r.a.createElement(F.a,{className:Object(B.a)(t.expand,Object(d.a)({},t.expandOpen,o)),onClick:function(){l(!o)},"aria-expanded":o,"aria-label":"show more"},r.a.createElement(Z.a,null))),r.a.createElement(z.a,{in:o,timeout:"auto",unmountOnExit:!0},r.a.createElement(H.a,null,r.a.createElement(p.a,{paragraph:!0},"Reviews:"),m.map((function(e){return r.a.createElement(p.a,{paragraph:!0,key:e.id},e.author)})))))},re=a(340),ce=function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={searchTitle:"",movies:[],error:!1,isLoading:!0},a.onTitleChange=function(e){var t=e.target.value;a.setState(Object(d.a)({},e.target.name,t),(function(){""===t?a.setState({movies:[]}):fetch("https://api.themoviedb.org/3/search/movie?api_key=fdfd76b83d61c6a42b476b1cf05cc0d8&query=".concat(a.state.searchTitle)).then((function(e){if(e.ok)return e.json();throw new Error("Something went wrong ...")})).then((function(e){return a.setState({movies:e.results,isLoading:!1})})).catch((function(e){return a.setState({error:!0,isLoading:!1})}))}))},a}return Object(y.a)(t,e),Object(v.a)(t,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"container"},r.a.createElement(j.a,{name:"searchTitle",value:this.state.searchTitle,onChange:this.onTitleChange,floatingLabelText:"search for movies",fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(re.a,{container:!0,spacing:10,style:{padding:"20px"}},this.state.movies.length>0?e.map((function(e){return r.a.createElement(re.a,{key:e.id,item:!0,xs:12,sm:6,md:4,lg:4,xl:3},r.a.createElement(ne,{title:e.title,vote:e.vote_average,overview:e.overview,date:"Released "+e.release_date,id:e.id,image:"https://image.tmdb.org/t/p/w500"+e.poster_path}))})):null))}}]),t}(n.Component);function oe(e){var t=e.children,a=e.value,n=e.index,c=Object(l.a)(e,["children","value","index"]);return r.a.createElement(p.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"nav-tabpanel-".concat(n),"aria-labelledby":"nav-tab-".concat(n)},c),a===n&&r.a.createElement(g.a,{p:3},t))}function ie(e){return{id:"nav-tab-".concat(e),"aria-controls":"nav-tabpanel-".concat(e)}}function le(e){return r.a.createElement(h.a,Object.assign({component:"a",onClick:function(e){e.preventDefault()}},e))}var se=Object(s.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}}));var ue=function(){var e=se(),t=r.a.useState(0),a=Object(i.a)(t,2),n=a[0],c=a[1];return r.a.createElement("div",{className:e.root},r.a.createElement(u.a,{position:"static"},r.a.createElement(m.a,{variant:"fullWidth",value:n,onChange:function(e,t){c(t)},"aria-label":"nav tabs example"},r.a.createElement(le,Object.assign({label:"Pictures",href:"/"},ie(0))),r.a.createElement(le,Object.assign({label:"Movies",href:"/movies"},ie(1))),r.a.createElement(le,Object.assign({label:"Music",href:"/music"},ie(2))))),r.a.createElement(oe,{value:n,index:0},r.a.createElement(R,null)),r.a.createElement(oe,{value:n,index:1},r.a.createElement(ce,null)),r.a.createElement(oe,{value:n,index:2}))},me=function(){return r.a.createElement(ue,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var he=a(143),pe=a.n(he);a(304);o.a.render(r.a.createElement(pe.a,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[152,1,2]]]);
//# sourceMappingURL=main.a1ed7c9b.chunk.js.map