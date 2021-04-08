import App from './AppNewsletterRegister.svelte';

setTimeout(() => {

  if(typeof Promise === "undefined" || Promise.toString().indexOf("[native code]") === -1){
    var nlRegTarget = document.querySelector("#newsletter-register");
    if (nlRegTarget) {
      nlRegTarget.innerHTML = '<div style="color: orange;font-family: arial, sans-serif;font-size: 13.5px;">Wenn Sie diese Mitteilung sehen, dann verwenden Sie einen veralteten Browser. Um alle Angebote der FMH-Finanzberatung in Anspruch nehmen zu können, verwenden Sie bitte einen modernen Browser.</div>'; 
    } 
    return false;
  }
  
  const app = new App({
    target: document.querySelector("#newsletter-register"),
    props: {
      title: 'Mit dem FMH Newsletter bestens informiert',
      //url: 'https://devel.fmh.de:3000/3.0/lists/f439abe9c8/members',
      url: 'https://relay-proxy.fmh.de/3.0/lists/f439abe9c8/members',
    }
  });
}, 1500);

//export default app;
