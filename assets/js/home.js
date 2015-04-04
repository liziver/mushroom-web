$(document).ready(function () {


/*==================================
	Parallax Effect for Home page
	====================================*/


    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {} else {



        // Tiny jQuery Plugin
        // by Chris Goodchild
        $.fn.exists = function (callback) {
            var args = [].slice.call(arguments, 1);

            if (this.length) {
                callback.call(this, args);
            }

            return this;
        };

        // Usage Parallax 
        $('.parallax-image-1').exists(function () {

            //alert('1 here');
            var offsetParallax1 = $(".parallax-image-1").offset().top;
            $('.parallax-image-1').parallax("50%", offsetParallax1, 0.1, true);

        });

        $('.parallax-image-2').exists(function () {

            //alert('2 here');
            var offsetParallax2 = $(".parallax-image-2").offset().top;
            $('.parallax-image-2').parallax("50%", offsetParallax2, 0.1, true);

        });


    } // mobile userAgent end 


/*==================================
	Home Page Slider  || jQuery Cycle
	====================================*/



    $('.slider-v1').cycle({
        //Specify options
        fx: 'scrollHorz',
        //Name of transition effect 
        slides: '.slider-item',
        timeout: 5000,
        // set time for nex slide 
        speed: 1200,
        easeIn: 'easeInOutExpo',
        // easing 
        easeOut: 'easeInOutExpo',
        pager: '#pager2',
        //Selector for element to use as pager container 
    });


    $('.slider-v2').cycle({
        //Specify options
        fx: 'scrollHorz',
        //Name of transition effect 
        slides: '.slider-item',
        timeout: 5000,
        // set time for nex slide 
        speed: 1200,
        easeIn: 'easeInOutExpo',
        // easing 
        easeOut: 'easeInOutExpo',
        pager: '#pager',
        //Selector for element to use as pager container 
    });


    // show loading image
    $('#loader_img').show();

    // main image loaded 
    $('.sliderImg').load(function () {
        // hide/remove the loading image
        $('#loader_img').hide();
    });




/*----------------------------
  Sign Up 
  ----------------------------*/ 
  
		$("#signUpButton").click(function(){
			var userid = $("#signup-userid").val();
			var userEmail = $("#signup-user-email").val();
			var password = $("#signup-password").val();
			var passwordCheck = $("#sign-up-password-check").val();
				if(passwordCheck = password) {
		   			$.post('./API/register.php',{'user_accountname': userid,'user_password':password,'user_emailaddress':userEmail},function(data){alert(data)});
		   		}
		   		else{ 	
		   		 	alert("Password can not match.");
		   	  }
		});




/*----------------------------
  Login 
----------------------------*/

		$("#logInButton").click(function(){
			var userid = $("#login-user").val();
			var password = $("#login-password").val();
			if($.trim(userid) !="" && $.trim(password) != ""){
			  $.post('./API/login.php',{'user_accountname':userid,'user_password':password,},function(data){alert(data)});
	        }else{
	        	alert("");
	        }
		});


/*----------------------------
  Homepage Tracking 
----------------------------*/

	  $("#track").click(function(){
	    var trackingNumber =$("div#tracking>input").val();
	      if($.trim(trackingNumber) != ""){
	      		$.post('./API/index.php',{"trakingnumber":trakingNumber},function(data){alert(data)});
	      	}else{alert("");}
	        });




/*----------------------------
  Star Products 
----------------------------*/

/*		function showHotItem(){


			var xmlhttp;
			xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function(){
				if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
						var response = xmlhttp.responseText;
						document.getElementById("#test").innerHTML=xmlhttp.responseText;
				};
			};
			xmlhttp.open("GET","./API/star_merchandise.php?",true);
			xmlhttp.send();
	
		};	*/
		
//	})





			$.post("./API/star_merchandise.php", function(data){
//			 	  alert("Data Loaded: " + data);
				  var t=data;  
				  var jsonobj=eval('('+t+')');  
		 			var starcp = eval(jsonobj.data); 
		 			 			
					 
					/*  Star Product1  */
					document.getElementById("starcp1_img").src=starcp[0].cp_image;
					document.getElementById("starcp1_discnt").innerHTML=starcp[0].cp_discount;
					document.getElementById("starcp1_cpname").innerHTML=starcp[0].cp_name;
					document.getElementById("starcp1_descrip").innerHTML=starcp[0].cp_detail;
					document.getElementById("starcp1_price").innerHTML=starcp[0].cp_price*starcp[0].cp_discount;
					document.getElementById("starcp1_oldprice").innerHTML=starcp[0].cp_price;

					/*  Star Product2  */
					document.getElementById("starcp2_img").src=starcp[1].cp_image;
					document.getElementById("starcp2_discnt").innerHTML=starcp[1].cp_discount;
					document.getElementById("starcp2_cpname").innerHTML=starcp[1].cp_name;
					document.getElementById("starcp2_descrip").innerHTML=starcp[1].cp_detail;
					document.getElementById("starcp2_price").innerHTML=starcp[1].cp_price*starcp[1].cp_discount;
					document.getElementById("starcp2_oldprice").innerHTML=starcp[1].cp_price;					

					/*  Star Product3  */
					document.getElementById("starcp3_img").src=starcp[2].cp_image;
					document.getElementById("starcp3_discnt").innerHTML=starcp[2].cp_discount;
					document.getElementById("starcp3_cpname").innerHTML=starcp[2].cp_name;
					document.getElementById("starcp3_descrip").innerHTML=starcp[2].cp_detail;
					document.getElementById("starcp3_price").innerHTML=starcp[2].cp_price*starcp[2].cp_discount;
					document.getElementById("starcp3_oldprice").innerHTML=starcp[2].cp_price;		
					
					/*  Star Product4  */
					document.getElementById("starcp4_img").src=starcp[3].cp_image;
					document.getElementById("starcp4_discnt").innerHTML=starcp[3].cp_discount;
					document.getElementById("starcp4_cpname").innerHTML=starcp[3].cp_name;
					document.getElementById("starcp4_descrip").innerHTML=starcp[3].cp_detail;
					document.getElementById("starcp4_price").innerHTML=starcp[3].cp_price*starcp[3].cp_discount;
					document.getElementById("starcp4_oldprice").innerHTML=starcp[3].cp_price;		
					
					/*  Star Product5  */
					document.getElementById("starcp5_img").src=starcp[4].cp_image;
					document.getElementById("starcp5_discnt").innerHTML=starcp[4].cp_discount;
					document.getElementById("starcp5_cpname").innerHTML=starcp[4].cp_name;
					document.getElementById("starcp5_descrip").innerHTML=starcp[4].cp_detail;
					document.getElementById("starcp5_price").innerHTML=starcp[4].cp_price*starcp[4].cp_discount;
					document.getElementById("starcp5_oldprice").innerHTML=starcp[4].cp_price;		
					
					/*  Star Product6  */
					document.getElementById("starcp6_img").src=starcp[5].cp_image;
					document.getElementById("starcp6_discnt").innerHTML=starcp[5].cp_discount;
					document.getElementById("starcp6_cpname").innerHTML=starcp[5].cp_name;
					document.getElementById("starcp6_descrip").innerHTML=starcp[5].cp_detail;
					document.getElementById("starcp6_price").innerHTML=starcp[5].cp_price*starcp[5].cp_discount;
					document.getElementById("starcp6_oldprice").innerHTML=starcp[5].cp_price;		
	
					/*  Star Product7  */
					document.getElementById("starcp7_img").src=starcp[6].cp_image;
					document.getElementById("starcp7_discnt").innerHTML=starcp[6].cp_discount;
					document.getElementById("starcp7_cpname").innerHTML=starcp[6].cp_name;
					document.getElementById("starcp7_descrip").innerHTML=starcp[6].cp_detail;
					document.getElementById("starcp7_price").innerHTML=starcp[6].cp_price*starcp[6].cp_discount;
					document.getElementById("starcp7_oldprice").innerHTML=starcp[6].cp_price;		
									
					/*  Star Product8  */
					document.getElementById("starcp8_img").src=starcp[7].cp_image;
					document.getElementById("starcp8_discnt").innerHTML=starcp[7].cp_discount;
					document.getElementById("starcp8_cpname").innerHTML=starcp[7].cp_name;
					document.getElementById("starcp8_descrip").innerHTML=starcp[7].cp_detail;
					document.getElementById("starcp8_price").innerHTML=starcp[7].cp_price*starcp[7].cp_discount;
					document.getElementById("starcp8_oldprice").innerHTML=starcp[7].cp_price;							 
					 
					   
		  });







			
			












}); // end Ready

