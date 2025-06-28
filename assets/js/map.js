document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('#load-iframe-map').innerHTML = `<iframe
                            class="contact__iframe"
                            frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12153.269789909427!2d-3.700129276645398!3d40.40181781901065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2zTWFkcmlkLCBFc3Bhw7Fh!5e0!3m2!1ses-419!2smx!4v1751073983449!5m2!1ses-419!2smx"></iframe>`
    }, 500);
   
    
})

