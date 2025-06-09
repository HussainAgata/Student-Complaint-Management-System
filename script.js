emailjs.init("AinwyN9LzOhsYnRJ6");

//Function To Send The Email//
function sendEmail(){
    const form = document.getElementById("complaintForm");
    const formData = {
        username: form.username.value,
        matricNo: form.matricNo.value,
        faculty: form.faculty.value,
        department: form.department.value,
        nature: form.nature.value,
        complaint: form.complaint.value,
    };

    //send the email using emailJS//
    emailjs
    .send("service_e61bu5k", "ID:template_0omd5l3", formData)
    .then(() => {

        alert("complaint Submitted Successfully!");
        form.reset();
        
    }).catch((error) => {
        alert("Failed to Send Complaint. Please try again later.")
        console.error("Error details:", error);
    });
}