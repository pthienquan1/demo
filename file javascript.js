// ****************    button back to top    ******************

jQuery(document).ready(function($){ 	
	if($(".btn-top").length > 0) {
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 350) {
				$(".btn-top").show()
			} else {
				$(".btn-top").hide()
			}
		});
		$(".btn-top").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}		
});

// **********************    Gallery    ************************

const product = [
    { id: 1, image:"Images/vinegarfood/gallery/ANHHAN.jpg", title:"Hình 1" },
    { id: 2, image:"Images/vinegarfood/gallery/Beef1.jpg", title:"Hình 2" },
    { id: 3, image:"Images/vinegarfood/gallery/BO.jpg", title:"Hình 3" },
    { id: 4, image:"Images/vinegarfood/gallery/CA.jpg", title: "Hình 4" },
    { id: 5, image:"Images/vinegarfood/gallery/Ca1.jpg", title: "Hình 5" },
    { id: 6, image:"Images/vinegarfood/gallery/Chicken1.jpg", title: "Hình 6" },
    { id: 7, image:"Images/vinegarfood/gallery/GA.jpg", title: "Hình 7" },
    { id: 8, image:"Images/vinegarfood/gallery/HEO.jpg", title: "Hình 8" },
    { id: 9, image:"Images/vinegarfood/gallery/heo1.jpg", title: "Hình 9" },
    { id: 10, image:"Images/vinegarfood/gallery/thitCUU.jpg", title: "Hình 10" },
    { id: 11, image:"Images/vinegarfood/gallery/thitCUU.jpg", title: "Hình 11" },
    { id: 12, image:"Images/vinegarfood/gallery/heo1.jpg", title: "Hình 12" },
    { id: 13, image:"Images/vinegarfood/gallery/HEO.jpg", title: "Hình 13" },
    { id: 14, image:"Images/vinegarfood/gallery/GA.jpg", title: "Hình 14" },
    { id: 15, image:"Images/vinegarfood/gallery/Chicken1.jpg", title: "Hình 15" },
    { id: 16, image:"Images/vinegarfood/gallery/Ca1.jpg", title: "Hình 16" },
    { id: 17, image:"Images/vinegarfood/gallery/CA.jpg", title: "Hình 17" },
    { id: 18, image:"Images/vinegarfood/gallery/BO.jpg", title: "Hình 18" },
    { id: 19, image:"Images/vinegarfood/gallery/Beef1.jpg", title: "Hình 19" },
    { id: 20, image:"Images/vinegarfood/gallery/ANHHAN.jpg", title: "Hình 20" },

];

let perPage = 10;
let currentPage = 1;
let start = 0;
let end = perPage;

const btnNext = document.querySelector('.btn-Next');
const totalPages = Math.ceil(product.length / perPage);
const btnPrev = document.querySelector('.btn-Prev');

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

renderProduct();
renderListPage();


function renderProduct() {
    html = '';
    const content = product.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div id="boxes" class="p-2 m-2">';
            html += '<img src= "' + item.image + '">';
            html += '<h3>' + item.title + '</h3>';
            html += '</div>';
            return html;
        }
    });
    document.getElementById('product').innerHTML = html;
}


function renderListPage() {
    let html = '';
    html += `<button class="btn-success"><a>${1}</a></button>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<button><a>${i}</a></button>`;
    }
    document.getElementById('number-page').innerHTML = html;
}

function changePage() {
    const currentPages = document.querySelectorAll('.number-page button');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            const value = i + 1;
            currentPage = value;
            $('.number-page button').removeClass('btn-success');
            currentPages[i].classList.add('btn-success');
            getCurrentPage(currentPage);
            renderProduct();
        })
    }
}
changePage();

btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = 1;
    }
    $('.number-page button').removeClass('btn-success');
    $(`.number-page button:eq(${currentPage-1})`).addClass('btn-success');
    getCurrentPage(currentPage);
    renderProduct();
});

btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage < 1) {
        currentPage = totalPages;
    }
    $('.number-page button').removeClass('btn-success');
    $(`.number-page button:eq(${currentPage-1})`).addClass('btn-success');
    getCurrentPage(currentPage);
    renderProduct();
})

//****************   WoW js   ********************
new WOW().init();

// Check email and display success pop up 
function successFeedback() {
    var inputemail = document.getElementById('email-feedback').value;
    var inputfeedback = document.getElementById('text-feedback').value;
    var patternemail = /[a-z0-9_\.]{3,}@[a-z0-9]{2,}/ 
    var check_email = patternemail.exec(inputemail);
    if(check_email == null || inputfeedback == '' ) {
        swal("Cancelled", "Your input is wrong.", "error");}
    else {
        swal("Good job!", "Your feedback is sent!", "success");
    }
}

// Catering
function sweetAlert(imgUrl) {
    swal({
        html:
        `<div id="carouselView1" class="carousel slide" data-ride="carousel">
                <ul class="carousel-indicators">
                    <li data-target="#carouselView1" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselView1" data-slide-to="1"></li>
                    <li data-target="#carouselView1" data-slide-to="2"></li>
                    <li data-target="#carouselView1" data-slide-to="3"></li>
                </ul>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="`+ imgUrl[0] +`" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src="` + imgUrl[1] + `" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src=" ` + imgUrl[2] + `" alt="image error">
                    </div>
                    <div class="carousel-item">
                        <img src="` + imgUrl[3] + `" alt="image error">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselView1" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a  class="carousel-control-next" href="#carouselView1" role="button" data-slide="next">
                    <span class="carousel-control-next-icon " aria-hidden="true"></span>
                    <span class="sr-only" >Next</span>
                </a>
            </div>`
            ,
            width:900,
            padding: '3em',
            background: 'linear-gradient(to top, #dcf390, #4a4b49, #242422, #111110, #111110, #4a4b49, #d3f564)',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Booking',
            cancelButtonText: 'Close',
           
        }).then((result) => {
              if (result.value) {
                swal({
                    title: 'Booking',
                    input: 'Multiple input',
                    html:
                        '<input id="swal-input1" class="swal2-input" placeholder="Enter your name">' +
                        '<input id="swal-input2" class="swal2-input" placeholder="Enter your phone">',
                    focusConfirm: false,
                    showCancelButton: true,
                    confirmButtonText: 'Confirm',
                    cancelButtonColor: '#d33',
                    preConfirm: () => {
                        return [
                            document.getElementById('swal-input1').value,
                            document.getElementById('swal-input2').value
                        ]
                    },
                    inputValidator: () => {
                        var  value = false;
                        if(document.getElementById('swal-input1').value == ''){
                            return !value && 'You need to enter your name!';
                        } else if(document.getElementById('swal-input2').value == ''){
                            return !value && 'You need to enter your phone!';
                        }
                        if(document.getElementById('swal-input1').value.length < 2){
                            return !value && 'The name must be 2 or more characters!';
                        } else if(document.getElementById('swal-input2').value.length < 10){
                            return !value && 'Phone number must be 10 digits!';
                        }
                    }
                }).then((result) => {
                    if(result){
                        swal({
                            type: 'success',
                            title: 'Successful',
                            html:`
                                <h4>Hi ` + result.value[0] + `</h4>
                                <h4>Your phone is: ` + result.value[1] + `</h4>
                                <h4 class="text-success">We will contact you as soon as possible</h4>
                            `,
                            confirmButtonText: 'Done!'
                        })
                    }
                })
              }
        })
        }