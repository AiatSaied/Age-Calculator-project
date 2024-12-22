
function calculateAge() {
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value);
    const year = parseInt(document.getElementById("year").value);

    if (!day || !month || !year) {
        document.getElementById("result").innerText = "Please enter a valid date!";
        return;
    }

    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

    if (birthDate > today) {
        document.getElementById("result").innerText = "Birthdate cannot be in the future!";
        return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        ageDays += new Date(year, month, 0).getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    document.getElementById("result").innerText = 
        `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old`;
}