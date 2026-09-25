const candidates = [{
cin: "AB123456",
lastName: "Boushaba",
firstName: "Soufiane",
politicalParty: "Independent",
age: 40,
voters: []
]
},


let candidates = [];

function addSeveralCandidates() {

    let number = Number(prompt("How many candidates?"));

    for (let i = 0; i < number; i++) {

        let cin = prompt("Enter CIN:");
        let lastName = prompt("Enter last name:");
        let firstName = prompt("Enter first name:");
        let politicalParty = prompt("Enter political party:");
        let age = Number(prompt("Enter age:"));

        let candidate = {
            cin: cin,
            lastName: lastName,
            firstName: firstName,
            politicalParty: politicalParty,
            age: age,
            voters: []
        };

        candidates.push(candidate);
    }
}
      addSeveralCandidates();