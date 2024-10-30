const data = ["itching"
    , "skin_rash"
    , "nodal_skin_eruptions"
    , "continuous_sneezing"
    , "shivering"
    , "chills"
    , "joint_pain"
    , "stomach_pain"
    , "acidity"
    , "ulcers_on_tongue"
    , "muscle_wasting"
    , "vomiting"
    , "burning_micturition"
    , "spotting_ urination"
    , "fatigue"
    , "weight_gain"
    , "anxiety"
    , "cold_hands_and_feets"
    , "mood_swings"
    , "weight_loss"
    , "restlessness"
    , "lethargy"
    , "patches_in_throat"
    , "irregular_sugar_level"
    , "cough"
    , "high_fever"
    , "sunken_eyes"
    , "breathlessness"
    , "sweating"
    , "dehydration"
    , "indigestion"
    , "headache"
    , "yellowish_skin"
    , "dark_urine"
    , "nausea"
    , "loss_of_appetite"
    , "pain_behind_the_eyes"
    , "back_pain"
    , "constipation"
    , "abdominal_pain"
    , "diarrhoea"
    , "mild_fever"
    , "yellow_urine"
    , "yellowing_of_eyes"
    , "acute_liver_failure"
    , "fluid_overload"
    , "swelling_of_stomach"
    , "swelled_lymph_nodes"
    , "malaise"
    , "blurred_and_distorted_vision"
    , "phlegm"
    , "throat_irritation"
    , "redness_of_eyes"
    , "sinus_pressure"
    , "runny_nose"
    , "congestion"
    , "chest_pain"
    , "weakness_in_limbs"
    , "fast_heart_rate"
    , "pain_during_bowel_movements"
    , "pain_in_anal_region"
    , "bloody_stool"
    , "irritation_in_anus"
    , "neck_pain"
    , "dizziness"
    , "cramps"
    , "bruising"
    , "obesity"
    , "swollen_legs"
    , "swollen_blood_vessels"
    , "puffy_face_and_eyes"
    , "enlarged_thyroid"
    , "brittle_nails"
    , "swollen_extremeties"
    , "excessive_hunger"
    , "extra_marital_contacts"
    , "drying_and_tingling_lips"
    , "slurred_speech"
    , "knee_pain"
    , "hip_joint_pain"
    , "muscle_weakness"
    , "stiff_neck"
    , "swelling_joints"
    , "movement_stiffness"
    , "spinning_movements"
    , "loss_of_balance"
    , "unsteadiness"
    , "weakness_of_one_body_side"
    , "loss_of_smell"
    , "bladder_discomfort"
    , "foul_smell_of urine"
    , "continuous_feel_of_urine"
    , "passage_of_gases"
    , "internal_itching"
    , "toxic_look_(typhos)"
    , "depression"
    , "irritability"
    , "muscle_pain"
    , "altered_sensorium"
    , "red_spots_over_body"
    , "belly_pain"
    , "abnormal_menstruation"
    , "dischromic _patches"
    , "watering_from_eyes"
    , "increased_appetite"
    , "polyuria"
    , "family_history"
    , "mucoid_sputum"
    , "rusty_sputum"
    , "lack_of_concentration"
    , "visual_disturbances"
    , "receiving_blood_transfusion"
    , "receiving_unsterile_injections"
    , "coma"
    , "stomach_bleeding"
    , "distention_of_abdomen"
    , "history_of_alcohol_consumption"
    , "fluid_overload"
    , "blood_in_sputum"
    , "prominent_veins_on_calf"
    , "palpitations"
    , "painful_walking"
    , "pus_filled_pimples"
    , "blackheads"
    , "scurring"
    , "skin_peeling"
    , "silver_like_dusting"
    , "small_dents_in_nails"
    , "inflammatory_nails"
    , "blister"
    , "red_sore_around_nose"
    , "yellow_crust_ooze"
    , "prognosis"
];
const options = document.querySelector(".options");
const inputbox = document.getElementById("inputbox");
// const tagbox = t;
const ul = document.querySelector(".ul");

inputbox.addEventListener("keyup", eventhandler);
let tags = []


function createtag() {
    ul.querySelectorAll("li").forEach(li => li.remove())
    tags.forEach(tag => {
        let litag = `<li>${tag}<i class="fa-solid fa-xmark" onclick=removeli(this,"${tag}")></i></li>`
        ul.insertAdjacentHTML("afterbegin", litag)
    })
}

function removeli(element, tag) {
    let index = tags.indexOf(tag);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    element.parentElement.remove()
    // createtag(tags)
}

let result = [];
function eventhandler(e) {
    let input = inputbox.value;
    if (e.key == "Enter") {
        let tag = e.target.value.replace(/\s+/g, " ");
        e.target.value = "";
        if (tag.length > 1 && !tags.includes(tag)) {
            if (tags.length < 5) {
                tag.split(',').forEach(element => {
                    tags.push(element)
                    // console.log(element);
                    createtag();
                });
            }
        }

    }
    if (input.length) {
        result = data.filter((val) => {
            return val.toLowerCase().includes(input.toLowerCase())
        })
    }
    // console.log(result)
    display(result)
}

function display(result) {
    // console.log(result)
    if (result.length) {
        const content = result.map((element) => { return "<li onclick=handleclick(this)>" + element + "</li>" })
        options.innerHTML = `<ul>${content.join('')}</ul>`
    } else {
        options.innerHTML = ''
    }
}

function handleclick(list) {
    let tag = list.innerHTML;

    if (tag.length > 1 && !tags.includes(tag)) {
        if (tags.length < 5) {
            tag.split(',').forEach(element => {
                tags.push(element)
                // console.log(element);
                createtag();
            });
        }
    }

    // inputbox.value = list.innerHTML;
    options.innerHTML = ''
    inputbox.value = ""
    inputbox.placeholder = "Search your symptoms here.."
}


// Function to send tags array to Django view
function sendTagsToDjango(tags) {
    // Get CSRF token from the cookie
    const csrftoken = getCookie('csrftoken');
    console.log(tags)

    // Send AJAX request with CSRF token included in the headers
    $.ajax({
        url: "/predict/",  // URL of the Django view, as it is the same URL as the current page
        type: "POST",
        headers: { "X-CSRFToken": csrftoken },  // Include CSRF token in the headers
        data: JSON.stringify({ tags: tags }), // Sending tags array as JSON data
        contentType: "application/json",
        success: function(response) {
            console.log("Tags sent successfully!");
            console.log(response.result);
            $('#result').text("You might have " + response.result);
        },
        error: function(xhr, errmsg, err) {
            console.log(xhr.status + ": " + xhr.responseText);
        }
    });
}


// Function to get CSRF token from the cookie
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


// Event listener for submit button click
document.querySelector('.submit').addEventListener('click', function() {
    // Call the function to send tags array to Django view
    sendTagsToDjango(tags);
});

