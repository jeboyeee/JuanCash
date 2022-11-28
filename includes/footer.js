document.write(`

 <!-- Messenger Chat Plugin Code -->
 <div id="fb-root"></div>

 <!-------------------------- Your Chat Plugin code  ------------------>
 <div id="fb-customer-chat" class="fb-customerchat">
 </div>

 <script>
   var chatbox = document.getElementById('fb-customer-chat');
   chatbox.setAttribute("page_id", "291014361465243");
   chatbox.setAttribute("attribution", "biz_inbox");

   window.fbAsyncInit = function() {
     FB.init({
       xfbml            : true,
       version          : 'v11.0'
     });
   };

   (function(d, s, id) {
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) return;
     js = d.createElement(s); js.id = id;
     js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
 </script>

 <!----------------------------- Closing Messenger Chat Plugin Code ------------>


<footer class="mainfooter pt-4 pb-2">
      <div class="container">
        <div class="row">
         <div class="col-md-3 col-sm-6 pt-3 pb-3">
               <!-- <img src="img/logofooterwhite.svg" alt=""> -->
               <h5>About</h5>
               <p class="pt-3 pb-3">JuanCash is an E-money app powered by Zybi Tech Inc. We offer features such as mobile prepaid loading, fund transfer, bills payment, remittance and more. It comes with a 'Scan-To-Pay' system where a QR code can be utilized by the end-users for sending and receiving money.</p>
               <hr>
               <div class="pt-3 pb-5">
                <a href="http://www.zybitech.com/"><img src="../img/zybilogofooter2.svg" alt="" class="zybilogo"></a>
               </div>


               <!-- <div class="pt-1">
                <h5>Notice</h5>
                <p>Notice is hereby given to the public that Zybi Tech Inc. Doing business under the name and style of JuanCash ("JuanCash") is not affiliated, assosiated , connected, and/or related with JuanHand, an online lending company operated by Wefund Lending Corp. Doing Business Under the Names and Styles of Junahand, Juanhand, Cashmore, Wefund and Kidlat Peso (Formerly: Wefund Lending Corp.)</p>

              </div> -->
              
          </div>
    
           <div class="col-md-3 col-sm-6 pt-3 pb-3">
               <h5>Quick Navigation</h5>
              
              <a href="../index.html"><p class="pt-3">Home</p></a>
              <a href="../services/services.html"><p>All Services</p></a>
              <a href="../services/cashin.html"><p>Cash In</p></a>
              <a href="../services/cashout.html"><p>Cash Out</p></a>
              <a href="../services/billers.html"><p>Fee Schedule</p></a>
              <a href="../services/load.html"><p>Buy Load</p></a>
              <a href="../services/remittance.html"><p>Remittance</p></a>
              <a href="../services/transfer.html"><p>Fund Transfer</p></a>
              <a href="../services/card.html"><p>JuanCash Card</p></a>
              <a href="../promo.html"><p>Promos</p></a>
              <a href="../business.html"><p>Business</p></a>
              <a href="../upgrade.html"><p>Upgrade Account</p></a>
  
           </div>
    
           <div class="col-md-3 col-sm-6 pt-3 pb-3">

            <h5>Help Center</h5>
            <a href="../faq.html"><p class="pt-3">FAQ</p></a>
            <a href="../howto.html"><p>Tutorial Videos</p></a>
            <a href="../advisory.html"><p>Advisory</p></a>
            <a href="../contact.html"><p>Contact Us</p></a>

            <div class="pt-4 pb-3">
              <h5>Legal</h5>
  
            <!--type="button"-->
            <div class="dropdown pt-3">
              <p class="dropdown-toggle terms" type="" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                JuanCash Terms and Conditions
              </p>
              <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                <a href="../legal/conditions.html"><button class="dropdown-item" type="button">English Version</button></a>
                <a href="../legal/conditionsfil.html"><button class="dropdown-item" type="button">Filipino Version</button></a>
              </ul>
            </div>
           
           <a href="../legal/privacy.html"><p>Data Privacy Statement</p></a>
           <a href="../legal/juanexchangeterms.html"><p>JuanExchange Terms of Use</p></a>
           <a href="../legal/jccterms.html"><p>JuanCash Prepaid Card Terms and Conditions</p></a>
           <a href="../legal/outward.html"><p>Outward Cross-Border Remittance</p></a>

            </div>
      
            
           
     
    
        
    
          </div>
    
           <div class="col-md-3 col-sm-6 pt-3 pb-3">
               <h5>Contact Us</h5>
               <p class="contact pt-2" style = "overflow-wrap: break-word;"><i class="fas fa-phone-alt"></i>&nbsp;&nbsp;(02) 8891 8080  </p>
               <p> <a href="tel:+639771025099"><i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;Globe: 09771025099 </p></a> 
               <p><a href="tel:+639087088359"><i class="fas fa-mobile-alt"></i>&nbsp;&nbsp;Smart: 09087088359 </p></a> 
               <p style = "overflow-wrap: break-word;"><i class="far fa-envelope"></i>&nbsp;&nbsp;juancash_support@zybitech.com  </p>
               <p style = "overflow-wrap: break-word;"><i class="far fa-envelope"></i>&nbsp;&nbsp;juanexchange_support@zybitech.com  </p>
               
               <div class="pt-1">
                <hr>
    
                <p><i class="fas fa-map-marker-alt pt-3"></i>&nbsp;&nbsp;Unit 259, 2nd floor, Cluster G, Bluebay Walk, Metro Park, Pres. Diosdado Macapagal Blvd. corner EDSA Ext., Pasay City, Philippines</p>
               </div>
             
          </div>


    
        </div>


    
        <div class="row pt-5">
          <div class="col-12 m-auto text-center">
            <span style="font-size: 2em">
              <a href="https://www.facebook.com/JuanCashOfficial/" class="p-4"><i class="fab fa-facebook-f"></i></a>
            </span>
    
            <span style="font-size: 2em">
              <a href="https://twitter.com/JuanCashPH" class="p-4"><i class="fab fa-twitter"></i></a>
            </span>
    
            <span style="font-size: 2em">
              <a href="https://www.instagram.com/juancashofficial/" class="p-4"><i class="fab fa-instagram"></i></a>
            </span>
    
            <span style="font-size: 2em">
              <a href="https://www.youtube.com/channel/UCMVdGECFIYeB7XO-cXm3hdQ" class="p-4"><i class="fab fa-youtube"></i></a>
            </span>
    
            <span style="font-size: 2em">
              <a href="https://www.linkedin.com/company/juancash/" class="p-4"><i class="fab fa-linkedin-in"></i></a>
            </span>

            <span style="font-size: 2em">
              <a href="https://invite.viber.com/?g2=AQAPsqdJUx39vU3PWwFLHZOsAn4PCCqOGfI330lcORoySWCBnpkg500kO53wPHGm&lang=en" class="p-4"><i class="fab fa-viber"></i></a>
            </span>
            
              
               
           <p class="pt-3">Regulated by the BangkoSentral ng Pilipinas <br>(02) 8811-1277 | consumeraffairs@bsp.gov.ph</p>
              
          </div>
    
        </div>



      </div>
    </footer>

     <footer class="footerlast"> 
      
     <div class="container">
      <div class="row">
      <div class="text-center p-3">
        <span>&#169; 2020 JuanCash &trade; All right reserved.</span>
      </div>
  
  </div>
     </div>
         

      

     </footer>






    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script> -->

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    
    <script src="../js/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
   
    <script src="../js/bootstrap.js"></script>


    <!-- <script src="js/slick.min.js"></script> -->
    <!-- <script type="text/javascript">
     
     $('.slick').slick({
      dots: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3

    });
    </script> Ready na for slick carousel!!-->
  
    <script src="../js/main.js"></script>
  
    <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.min.js" integrity="sha384-Atwg2Pkwv9vp0ygtn1JAojH0nYbwNJLPhwyoVbhoPwBhjQPR5VtM2+xf0Uwh9KtT" crossorigin="anonymous"></script> -->
    

`);