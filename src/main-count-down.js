import App from './AppCountDown.svelte';

setTimeout(() => {

  const app = new App({
    target: document.querySelector("#count-down"),
    props: {
      title: 'Title',
      eventDate: new Date(2021, 0, 28, 16, 30, 0)
    }
  });




}, 1500);

//export default app;
