

      
  $(function(){
    
    $('.client_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:1000,
        dots:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
    });

   /* ========Shoes Brand Area ======= */


    $('.brand_wrapper').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows:false,
      autoplay:true,
      autoplaySpeed:1000,
      dots:false,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots:false,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots:false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots:false,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  
  
})
/* ======== From Validation Area ======= */
  

  let name_input = document.querySelector(".name_input");
  let email_input = document.querySelector(".email_input");
  let phone_input = document.querySelector(".phone_input");
  let sub_input = document.querySelector(".sub_input");
  let msg_input = document.querySelector(".msg_input");

  let name_err = document.querySelector(".name_err");
  let email_err = document.querySelector(".email_err");
  let phn_err = document.querySelector(".phn_err");
  let sub_err = document.querySelector(".sub_err");
  let msg_err = document.querySelector(".msg_err");
  

$(document).ready(function() {
  $('.info_submit_btn').click(function() {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(name_input.value == ""){
        name_err.innerHTML = "Please fill out this field.";
      }
      else if(email_input.value == ""){
        name_err.innerHTML = "";
        email_err.innerHTML = "Please fill out this field.";
      }
      else if(!email_input.value.match(regex)){
        name_err.innerHTML = "";
        email_err.innerHTML = "Please include an '@' in the email address. 'hgh' is missing an '@'.";
      }
      else if(phone_input.value == ""){
        email_err.innerHTML = "";
        phn_err.innerHTML ="Please fill out this field.";
      }
      else if(sub_input.value == ""){
        phn_err.innerHTML = "";
        sub_err.innerHTML ="Please fill out this field.";
      }
      else if(msg_input.value == ""){
        sub_err.innerHTML = "";
        msg_err.innerHTML ="Please fill out this field.";
      }
      else{
        console.log("Done")
        msg_err.innerHTML ="";
      }
  });
});