
const btn=document.querySelector('.menu-toggle');const nav=document.querySelector('.mobile-nav');if(btn&&nav){btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o?'true':'false')})}
// Preselect product passed by URL on contact page.
const params=new URLSearchParams(location.search);const prod=params.get('produkt');if(prod){const sel=document.querySelector('select[name="topic"]');const msg=document.querySelector('textarea[name="message"]');if(sel)sel.value='Kassensystem kaufen';if(msg&&!msg.value)msg.value='Anfrage zum NORIS '+prod+' Kassensystem.'}
