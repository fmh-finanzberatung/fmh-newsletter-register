<script>
  import axios from 'axios'; 
  import getScreenPosition from './get-screen-position.js'; 
  axios.defaults.headers.common['Accept'] = 'application/json';
  axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  axios.defaults.headers.common['Content-Type'] = 'application/json';
  export let title;
  export let url;
  let errorMsg = '';
  let successMsg = '';
  let infoMsg = ''; 
  let email = '';

  let screenPosition = getScreenPosition();

  function setMessage(msg, msgType, timeout = 5000) {
    if (msgType === 'error') {
      errorMsg = msg; 
    } else if (msgType === 'success') {
      successMsg = msg; 
    } else { 
      infoMsg = msg; 
    } 
    setTimeout(() => {
      errorMsg = '';
      infoMsg = '';
      successMsg = '';
    }, timeout);
  }

  function validateEmail(s) {
    if (!s) return false; 
    return s.match(/^.*?@.*?\..*?/);
  }

  function register() {
    //return setError('Look Ma, an error message ...');
    if (!validateEmail(email)) {
      return setMessage('Dies ist keine gültige E-Mail-Adresse', 'error'); 
    }
    axios.post(url, {
      'email_address': email,
      'status':'pending',
      'merge_fields': {
        'SIGNUP_POS': screenPosition, 
        'SIGNUP_URL': window.loction
      },
      'interests':{},
      'language':'de',
      'vip':false,
      'location':{'latitude':0,'longitude':0},
      'marketing_permissions':[],
      'ip_signup':'',
      'timestamp_signup':'',
      'ip_opt':'',
      'timestamp_opt':'',
      'tags':['Newsbanner']
    }).then((result) => {
      console.log('result.data', result.data); 

      if (result.data.name === 'Error') {
        const error = 'Ihre Adresse ist bereits registriert';;
        setMessage(error, 'error'); 
      } else {
        return setMessage('Bitte schauen Sie in Ihrem Postfach nach, um Ihre Registrierung zu bestätigen', 'susccess', 100000);
      } 
      console.log(result);
    }).catch((err) => {
      console.error(err);
    });    
  }
</script>

<section>
  <div class="send-off-icon"></div> 
  <h2>{title}</h2>
  <p>
    Jetzt abonnieren und Informationen zu Zinsen, Trends und Angeboten 
    erhalten! Bitte beachten Sie hierzu auch
    <a href="/datenschutz">unsere Datenschutz&shy;bestimmungen</a>.
  </p>
  <form>
    <input bind:value="{email}" type="text" 
      placeholder="E-Mail-Adresse eintragen ..."/>
    <div class="message">
      <span class="error-message">{errorMsg}</span> 
      <span class="success-message">{successMsg}</span> 
      <span class="info-message">{infoMsg}</span> 
    </div>
    {#if !successMsg }
      <button type="submit" on:click|preventDefault="{register}">
        Jetzt anmelden
      </button>
    {/if}
  </form>
</section>

<style>
  section, section * {
    background-color: #f3f3f3;
    box-sizing: border-box;
    margin: 0;
    border: 0;
  }

  section {
    padding: 20px;
  }

  
  h2, p, input, button, .error-message, .info-message, .success-message {
    font-family: roboto, arial, helvetica, sans-serif;
  }  
  h2, p, form {
    text-align: center;
  }
  a {
    color: #333;
  }
  input[type=text], button[type=submit] {
    letter-spacing: 0.05em; 
    width: 100%;
    max-width: 350px; 
    margin: 15px auto; 
    outline: none;
    display: block; 
    height: 34px;
    line-height: 28px;
    font-size: 14.5px;
    border-radius: 5px; 
  }
  input[type=text] {
    border: 0; 
    padding-left: 4px;
    border-left: 10px solid white;     
    background-color: white;
  }
  input[type=text]::placeholder {
    display: block; 
    padding-left: 10px;
    letter-spacing: 0.025em;
  }

  button[type=submit] {
    text-transform: uppercase; 
    border: 1px solid #1194db;
    color: #1194db;
  }
  button[type=submit]:hover {
    color: white;
    background-color: #1194db;

  }  
  .error-message, .error-message, .success-message {
    font-size: 14.5px; 
  }
  .error-message {
    color: #990000;
  }
  .info-message {
    color: #1194db;
  }
  .success-message {
    color: #009900;
  }
  h2 {
    letter-spacing: 0.025em;
		color: #333;
		font-size: 16px;
    font-weight: 500; 
    margin: 5px; 
  }
  p {
    letter-spacing: 0.025em;
    display: block;
    margin: 10px auto;
    max-width: 800px;
    color: #333;
    font-size: 14.5px;
    line-height: 1.4em;
  }
  form {
    text-align: center;
  }
  .send-off-icon {
    margin-right: auto;
    margin-left: auto;
    background-repeat: no-repeat;
    width: 80px;
    height: 80px;
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3Csvg viewBox='135.102 89.766 262.364 225.388' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M 135.441 89.766 L 397.466 202.409 L 135.228 315.154 L 135.102 227.114 L 313.489 202.326 L 135.357 177.516 L 135.441 89.766 Z M 160.504 155.521 L 251.137 168.144 L 160.715 130.591 L 160.504 155.521 Z M 162.11 273.868 L 252.532 236.315 L 161.899 248.938 L 162.11 273.868 Z' style='fill: %23333333;'/%3E%3C/svg%3E");}
</style>
