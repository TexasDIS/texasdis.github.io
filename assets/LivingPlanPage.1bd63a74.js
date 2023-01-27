import{Q as n}from"./QPage.7df53f42.js";import{_ as e,A as r,N as t,O as s,R as c,S as l,a0 as d,U as i}from"./index.076a837d.js";var m=`# Living Plan\r
\r
placeholder for the Living plan documentation from Hack MD (as .md file).\r
\r
TO DO: pull the files into the markdownd folder and replace as livingplan.md`;const p=r({name:"LivingPlanPage",data(){return{markdown:m}},methods:{onToc(a){this.toc=this.$refs.markdown.makeTree(a),console.log(this.toc)}}}),f={class:"q-ma-xl"};function _(a,h,k,g,v,u){const o=t("q-markdown");return s(),c(n,{class:"row"},{default:l(()=>[d("div",f,[i(o,{src:a.markdown,toc:"","toc-start":2,"toc-end":3,onData:a.onToc,ref:"markdown",class:"q-pa-md"},null,8,["src","onData"])])]),_:1})}var $=e(p,[["render",_]]);export{$ as default};
