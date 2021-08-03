'use strict'

$(document).ready(onInit);

$('.contact-me-submit-btn').click(onContactMeSubmit);


function onInit() {
    createProjs();
    renderProjs();
    renderModals();
}

function renderProjs() {
    var projs = getProjs();

    var strHTML = projs.map(function (proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="../img/portfolio/` + `${proj.id}` + `.PNG" alt="">
          </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.title}</p>
            </div>
        </div>`
    });

    $('.portfolio-container').html(strHTML);

}

function renderModals() {
    var projs = getProjs();
    var strHTML = projs.map(function (proj) {
        return `
    < !--Modal ${proj.id} -- >
        <div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="close-modal" data-dismiss="modal">
                        <div class="lr">
                            <div class="rl"></div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-8 mx-auto">
                                <div class="modal-body">
                                    <!-- Project Details Go Here -->
                                    <h2>${proj.name}</h2>
                                    <p class="item-intro text-muted">${proj.title}</p>
                                    <img class="img-fluid d-block mx-auto" src="../img/portfolio/` + `${proj.id}` + `.PNG" alt="">
                                        <p>${proj.desc}</p>
                                        <ul class="list-inline">
                                            <li>Date: ${proj.publishedAt}</li>
                                            <li>Client: Coding Academy</li>
                                            <li>Category: ${proj.labels}</li>
                                            <li><a href="${proj.url}" target="_label">Open project</a></li>
                                        </ul>
                                        <button class="btn btn-primary" data-dismiss="modal" type="button">
                                            <i class="fa fa-times"></i>
                                            Close Project</button>
              </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`

    });

    $('.modals-container').html(strHTML);
}

function onContactMeSubmit() {
    var userEmail = $('#email').val();
    var formSubject = $('#subject').val();
    var formMessage = $('#Message').val();

    var contactWindow = `https://mail.google.com/mail/u/0/?fs=1&to=mayalmog@gmail.com&su=${formSubject}&body=${formMessage}&bcc=${userEmail}&tf=cm`;

    window.open(
        contactWindow, "_blank");

}

