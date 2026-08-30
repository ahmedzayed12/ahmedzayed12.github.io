
const io=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){e.target.animate([{opacity:0,transform:'translateY(18px)'},{opacity:1,transform:'none'}],{duration:560,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'});io.unobserve(e.target)}
  })
},{threshold:.08});
document.querySelectorAll('.card,.section-head,.timeline .item,.contact-panel').forEach(el=>{el.style.opacity='0';io.observe(el)});
