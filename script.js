//Typewriter
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};


//Email JS
(function() {
    // https://dashboard.emailjs.com/admin/integration
    emailjs.init("user_mXdQV47fKgmgDzcJm0fT0");
})();

// Pastikan form direset setiap kali halaman dimuat ulang
window.onload = function() {
    document.getElementById('contact-form').reset();  
}

// Event listener untuk menangani pengiriman form
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah reload halaman

    // Ambil nilai dari form
    var name = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Tampilkan konfirmasi menggunakan SweetAlert
    Swal.fire({
        title: 'Pesan Anda telah dikirim!',
        text: 'Apakah Anda ingin melanjutkan ke WhatsApp untuk percakapan lebih lanjut?',
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result) => {
        // Kosongkan form setelah memilih "Ya" atau "Tidak"
        document.getElementById('contact-form').reset();

        if (result.isConfirmed) {
            // Jika memilih 'Ya', arahkan ke WhatsApp
            var whatsappMessage = `Halo, saya ${name}. Saya ingin menghubungi Anda.\n\nPesan: ${message}`;
            var whatsappURL = `https://api.whatsapp.com/send?phone=6285721696635&text=${encodeURIComponent(whatsappMessage)}`;
            window.location.href = whatsappURL;
        } else {
            // Jika memilih 'Tidak', tampilkan pesan "Terima Kasih"
            document.getElementById('thank-you-message').style.display = 'block';
        }
    });
});

//Toggle button 
$(function() {
    $('#toggle-icon').click(function() {
        if($("#menu").is(":visible"))
        {
            $('#menu').hide();

            $('.profession-id').show();
            $('#about').show();
            $('#skills').show();
            $('#education').show();
            $('#projects').show();
            $('#achivements').show();
            $('#contact').show();
            $('#intro').show();
            $('#footer').show();
            
        }
        else
        {
            $('#menu').show();
            
            $('.profession-id').hide();
            $('#about').hide();
            $('#skills').hide();
            $('#education').hide();
            $('#projects').hide();
            $('#achivements').hide();
            $('#contact').hide();
            $('#intro').hide();
            $('#footer').hide();
        }
        
        return false;
    });        
});


function myFunction() {
    $('#menu').hide();
    $('.profession-id').show();
    $('#about').show();
    $('#skills').show();
    $('#education').show();
    $('#projects').show();
    $('#achivements').show();
    $('#contact').show();
    $('#intro').show();
    $('#footer').show();
  }