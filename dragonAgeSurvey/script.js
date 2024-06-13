const SUPABASE_URL = 'https://iubuaxtuncskeynipzlf.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YnVheHR1bmNza2V5bmlwemxmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyODA0MDMsImV4cCI6MjAzMzg1NjQwM30.zmvDm1mHxry4QjVf44k0J1MQtc-DbEg4so0fjddcFY0'

const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// let submit_btn = document.getElementById("submit");
const surveyForm = document.getElementById("survey-form");

function submitSurveyForm(event){
    event.preventDefault();

    let race = event.target['race'].value;
    let origin = event.target['charBackground'].value;
    let charClass = event.target['charCombat'].value;
    let loveInterest = event.target['romance'].value;

    /*
    race = String(race);
    origin = String(origin);
    charClass = String(charClass);
    loveInterest = String(loveInterest);
    */

    submitForm(race, origin, charClass, loveInterest)
}


async function submitForm(arg1, arg2, arg3, arg4){

    const { data, error } = await _supabase
    .from('originsChoices')
    .insert([
      { race: arg1 },
      { origin: arg2 },
      { class: arg3 },
      { love_interest: arg4 },
    ])
    // .select();
    
}

surveyForm.addEventListener("submit", submitSurveyForm);
