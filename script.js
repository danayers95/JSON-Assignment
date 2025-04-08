document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("personForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent form from refreshing the page


    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const course = document.getElementById("course").value;
    const section = document.getElementById("section").value;
    const role = document.getElementById("role").value;
    const person = {
      firstName: firstName,
      lastName: lastName,
      course: course,
      section: section,
      role: role
    };

    console.log("Person object:");
    console.log(person);

    console.log("JSON format:");
    console.log(JSON.stringify(person, null, 2));
  });
});
