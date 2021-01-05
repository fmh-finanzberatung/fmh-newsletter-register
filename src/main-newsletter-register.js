import App from './AppNewsletterRegister.svelte';

setTimeout(() => {

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
