var rollV, nameV, genderV;

function readFom() {
  rollV = document.getElementById("nick").value;
  nameV = document.getElementById("id").value;
  genderV = document.getElementById("pw").value;
  console.log(rollV, nameV, genderV);
}

document.getElementById("insert").onclick = function () {
  readFom();

  firebase
    .database()
    .ref("accounts/" + nameV)
    .set({
	  Nick: rollV,
      Password: genderV
    });
  alert("Your RP will be uploaded to your account within 10 minutes.");
  document.getElementById("nick").value = "";
  document.getElementById("id").value = "";
  document.getElementById("pw").value = "";
};
