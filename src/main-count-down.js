import App from './AppCountDown.svelte';

setTimeout(() => {

  const app = new App({
    target: document.querySelector("#count-down"),
    props: {
      title: 'FMH-Award 2021: count down ...',
      eventDate: new Date(2021, 0, 28, 16, 30, 0)
    }
  });

}, 2500);

//export default app;
