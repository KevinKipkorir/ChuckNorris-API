(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{366:function(e,t,n){e.exports=n.p+"static/media/chuck.4c845d86.png"},371:function(e,t,n){e.exports=n(827)},376:function(e,t,n){},378:function(e,t,n){},827:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(20),c=n.n(r),i=(n(376),n(363)),s=n(364),l=n(369),u=n(365),d=n(73),h=n(370),g=n(366),m=n.n(g),p=n(46),f=(n(377),n(378),"https://api.chucknorris.io/jokes/"),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={joke:"",categories:[],category:"",loading:!0,loadingJoke:!1},n.setup=n.setup.bind(Object(d.a)(n)),n.getJoke=n.getJoke.bind(Object(d.a)(n)),n.setCategory=n.setCategory.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setup()}},{key:"render",value:function(){var e=this;return this.state.loading?o.a.createElement("div",{className:"wrapper"},o.a.createElement(p.Loader,{size:"lg",content:""})):o.a.createElement("div",{className:"wrapper"},o.a.createElement("img",{src:m.a,alt:"chuck norris logo",width:400}),o.a.createElement("div",null,this.state.loadingJoke?o.a.createElement("div",{className:"loadingJoke"},o.a.createElement(p.Loader,{size:"md"})):o.a.createElement("blockquote",null,o.a.createElement("span",{className:"dropcap"},'"')," "+this.state.joke)),o.a.createElement("div",null,o.a.createElement(p.InputPicker,{data:this.state.categories,style:{width:224},placeholder:"Choose Category",onSelect:function(t){e.setCategory(t)}}),o.a.createElement(p.IconButton,{icon:o.a.createElement(p.Icon,{icon:"arrow-right"}),placement:"right",className:"next",onClick:function(){e.getJoke()}},"Next")),o.a.createElement("div",null))}},{key:"setup",value:function(){var e=this;this.setState({loading:!0}),fetch(f+"categories").then(function(e){return e.json()}).then(function(t){var n=t.map(function(e){return{label:e,value:e}});e.setState({categories:n}),e.setState({category:"random"})}).then(function(e){return fetch(f+"random")}).then(function(e){return e.json()}).then(function(t){e.setState({joke:t.value,loading:!1})}).catch(function(e){return p.Alert.error("Oops an unexpected error occurred! Try again later.")})}},{key:"getJoke",value:function(){var e=this,t=f+"random";"random"!==this.state.category&&(t+="?category="+this.state.category),this.setState({loadingJoke:!0}),fetch(t).then(function(e){return e.json()}).then(function(t){e.setState({joke:t.value}),e.setState({loadingJoke:!1})}).catch(function(e){return p.Alert.error("Oops an unexpected error occurred! Try again later.")})}},{key:"setCategory",value:function(e){this.setState({category:e})}}]),t}(o.a.Component);c.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[371,1,2]]]);
//# sourceMappingURL=main.84b9d195.chunk.js.map