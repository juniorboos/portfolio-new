import{S as d}from"./section-title.b9f52c0d.js";import{s as o,j as i,a as e,T as r}from"./index.be86051b.js";const l=o("section",{display:"flex",flexDirection:"column",justifyContent:"center",gap:"$8"}),p=o("div",{display:"flex",justifyContent:"center",gap:"$8",flexWrap:"wrap",marginBottom:"$8","@bp2":{flexWrap:"nowrap"}}),m=o("div",{display:"flex",flexDirection:"column",wordWrap:"break-word",backgroundColor:"$backgroundAccent",borderRadius:"$1",overflow:"hidden",boxShadow:"2px 5px 5px rgba(0, 0, 0, 0.5)","& img":{width:"100%"},"@bp2":{maxWidth:360}}),h=o("div",{display:"flex",flexDirection:"column",padding:"$5",gap:"$2","& a":{width:"fit-content","&:hover":{textDecoration:"underline"}}}),u=o("div",{display:"flex",justifyContent:"space-between",maxWidth:250,"& a":{color:"$textSecondary"}});var x={title:"My articles",articles:[{imgUrl:"https://miro.medium.com/max/720/1*kej2WmeUuzxtY37oqQc_5Q.webp",title:"The Ultimate Guide to Setting Up Your React Component Library",postedBy:"xgeeks",description:"Have you ever had that components folder that kept getting copied from one project to another just to reuse good custom components? ...",url:"https://medium.com/xgeeks/the-ultimate-guide-to-setting-up-your-react-component-library-549c43c1adc9"}]};const y=n=>{const{title:c,articles:a}=x;return i(l,{...n,children:[e(d,{name:c}),e(p,{children:a.map((t,s)=>i(m,{children:[e("img",{src:t.imgUrl}),i(h,{children:[e(r,{weight:"bold",children:t.title}),e(u,{children:i(r,{size:"s",color:"secondary",children:["Posted by: ",t.postedBy]})}),e(r,{children:t.description}),e(r,{as:"a",color:"accent",href:t.url,children:"Read More..."})]})]},`${t.title}-${s}`))})]})};export{y as default};
