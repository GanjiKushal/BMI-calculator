function calculatebmi() {

    let age = document.getElementById('age').value
    if (age >= 2 && age <= 120) {
        let weight = document.getElementById('weight').value
        let height = document.getElementById('height').value
        height = height / 100
        let BMI = (weight / (height * height))

        document.getElementById('heading').innerHTML = 'BMI is:'
        document.getElementById('bmi-output').innerHTML = BMI.toFixed(3)
        if (BMI < 16) {
            document.getElementById('message').innerHTML = "Severe Thinner"
        }
        else if (BMI >= 16 && BMI < 17) {
            document.getElementById('message').innerHTML = "Moderate Thiness"
        }
        else if (BMI >= 17 && BMI < 18.5) {
            document.getElementById('message').innerHTML = "Mild Thiness"
        }
        else if (BMI >= 18.5 && BMI < 25) {
            document.getElementById('message').innerHTML = "Normal"
        }
        else if (BMI >= 25 && BMI < 30) {
            document.getElementById('message').innerHTML = "Over Weight"
        }
        else if (BMI >= 30 && BMI < 35) {
            document.getElementById('message').innerHTML = "Obese Class-1"
        }
        else if (BMI >= 35 && BMI < 40) {
            document.getElementById('message').innerHTML = "Obese Class-2"
        }
        else if (BMI >= 40) {
            document.getElementById('message').innerHTML = "Obese Class-3"
        }
    }
    else{
        document.getElementById('err-message').innerHTML="Please provide an age between 2 to 120"
    }

}

function reload() {
    window.location.reload()
}