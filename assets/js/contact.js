/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')
      
const sendEmail = (e) => {
    e.preventDefault()
    
    // serviceID - templateID - #form - publicKey
    // emailjs.sendform('service_8ii265v','template_85g6frk','#contact-form','VQaq6RG_bXgUd7BNm')
    //     .then(() => {
    //        // Show sent message
    //        contactMessage.textContent = ' Message sent successfully ✅'

    //         // Remove message after five seconds
    //         setTimeout(() => {
    //             contactMessage.textContent = ''
    //         }, 5000)
    //     })

    contactMessage.textContent = ' Message sent successfully ✅'

            // Remove message after five seconds
            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
}

contactForm.addEventListener('submit', sendEmail)