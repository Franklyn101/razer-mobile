<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>
<template>
  <body class="bg-black w-full">
  <div class="bg-black
  -800 h-14 flex  justify-between border-b-2
   border-green-600 items-center sm:fixed z-10 w-full ">
   <span id="hamburger-menu" class="sm: hiiden text-[#8d8585] relative inline-block">
    <img src="https://www.razer.com/assets/images/mobile-menu.svg" alt="" class="h-[49px] w-[49px] relative inline-block  sm:hidden">
    <ul id="menu-items" class="sm: hidden none absolute  pl-[30px] pr-[30px] bg-black  h-[100vh] w-[100vw] z-10 decoration-0 pt-[30px]">
      <input class="w-[330px] pl-[10px] mr-[20px] pt-[5px] pb-[5px] rounded-[8px] bg-[#5e5959] border-0" type="text" placeholder="Search razer.com">
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Store</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">PC</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Console</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Mobile</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Lifestyle</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Services</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Community</li>
      <li class="border-b-2 border-gray-500 pt-[30px] pl-[0px] pb-[15px]  font-semibold">Support</li>


    </ul>

</span>
  <img src="	https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg" alt="" class="w-[25px] mr-[10px]">
  <nav class="sm:flex sticky z-10 hidden  justify-center items-center gap-[90px] text-[gray]"> 
    <a class="hover:text-white" href="">Store</a>
    <a class="hover:text-white" href="">PC</a>
    <a class="hover:text-white" href="">Console</a>
    <a class="hover:text-white" href="">Mobile</a>
    <a class="hover:text-white" href="">Lifestyle</a>
    <a class="hover:text-white" href="">Services</a>
    <a class="hover:text-white" href="">Community</a>
    <a class="hover:text-white" href="">support</a>
    

  </nav>

 
  <img src="https://www.razer.com/assets/images/icons/cart_icon.svg" alt="" class="w-[25px] h-[20px] mt-[8px] mr-[10px]">
  
  </div>
   <!-- image1 -->

  <div class=" bg-[gray] sm: flex flex-col justify-center text-center h-[60px] items-center w-full sm:">
    <p class="text-[white] font-normal  text-[14px] w-full">Unleash a new age of technology with an arsenal of cutting-edge
       innovations that will keep you ahead of the game. Shop Now ></p>
  </div>
  <div>
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[140px]">
    <h1 class="text-[31px] font-sans font-semibold">NEW RAZER BLADE 16</h1>
    <H2 class="text-[22px] font-thin">BIGGER. BETTER. STILL THE BEST</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/2d7c19fedce91a875fc6a861e251ad30/razer-blade-16-homepage-mobile2x.jpg" alt="">

  </div>


  <!-- image2 -->

  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[140px]">
    <h1 class="text-[31px] font-semibold">NEW RAZER BLADE 18</h1>
    <H2 class="text-[22px] font-thin">THE ULTIMATE DESKTOP REPLACEMENT</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex items-center justify-center" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex items-center justify-center" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/2d7c19fedce91a875fc6a861e251ad30/razer-blade-18-homepage-mobile2x.jpg" alt="">

  </div>

<!-- image3 -->
<div class="">
  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center  gap-[14px] mt-[120px]">
    <h1 class="text-[31px] text-center font-sans font-semibold">UNLEASH A NEW AGE OF TECHNOLOGY</h1>
    <H2 class="text-[22px] font-thin">EXPERIENCE THE REVOLUTION</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex items-center justify-center" href="#">Shop Now <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      
    </span>
  </span>
    <img class="h-fit w-full  object-cover" src="https://assets2.razerzone.com/images/pnx.assets/4ef59df8938b4c9a37a3ca3aa577b1e9/new-age-tech-homepage-mobile2x.jpg" alt="">

  </div>


  <!-- image4 -->


  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[30px]">
      <button class="bg-yellow-600 w-[85px] leading-4 h-[37px] border-none text-[black]  text-[14px]">RAZER.COM EXCLUSIVE</button>
      
    <h1 class="text-[31px]">RAZER ENKI PRO</h1>
    <H2 class="text-[22px] font-thin font-sans">AUTOMOBILTY LAMBORGHINI EDITION</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex items- justify-center" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class=" flex items- justify-center" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/84d0946021d11b959bda0545c4d4c234/enkipro-lamborghini-b-950x580-desktop.jpg" alt="">

  </div>
</div>



<!-- image5 -->


<div class="mt-[9px]">
    <span class="absolute text-[white]
     leading-5 flex flex-col justify-center
     items-center w-full gap-[14px] mt-[110px]">
    <h1 class="text-[31px] w-[240px] text-right
     leading-9">
     RAZER BSILIK V3 X HYPERSPEED</h1>
    <p class="text-[19px] text-center font-semibold
      w-[300px] leading-7">
      ADVANCED CUSTOMIZABILITY. UNLEASHED</p>
    <span class="flex gap-[30px]">
      <a class="font-medium flex" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-contain" src="https://assets2.razerzone.com/images/pnx.assets/1b1e2970306c932a02bcb6d4824f0364/razer-basilisk-v3-x-hyperspeed-b-950x580-desktop.jpg" alt="">

  </div>






  <!-- image6 -->


  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[50px] leading-6">
    <h1 class="text-[31px]">NEW RAZER BLADE 15</h1>
    <H2 class="text-[22px] font-thin">PORTABLE.POWERFUL.PERFECTION.</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex justify-center items-center" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex justify-center items-center" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/3474002077a69ea3690d1a798c669b13/razer-blade-15-2023-b-950x580-desktop.jpg" alt="">

  </div>


  <!-- image7 -->


  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[40px] leading-7">
     
    <h1 class="text-[31px]">RAZER VR ACCESSORIES</h1>
    <H2 class="text-[22px] font-thin">BIGGER. BETTER. STILL THE BEST</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex items-center justify-center" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex items-center justify-center" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/1b1e2970306c932a02bcb6d4824f0364/razer-meta-quest-2-vr-b-950x580-desktop.jpg" alt="">

  </div>


  <!-- image8 -->


  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[30px] leading-7">
      <button class="bg-yellow-600 w-[85px] leading-4 h-[37px] border-none text-[black]  text-[14px]">RAZER.COM EXCLUSIVE</button>
    <h1 class="text-[31px] font-semibold">NEW RAZER EDGE</h1>
    <H2 class="text-[20px] font-semibold text-center" >THE ULTIMATE ANDROID GAMING HANDHELD</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex justify-center items-center" href="#">Learn more <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      <a class="font-medium flex justify-center items-center" href="#">Buy <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/dec1968e4414aa9dd00718ae5c3f531b/razer-edge-b-950x580-desktop.jpg" alt="">

  </div>



  <!-- image9 -->


  <div class="mt-[9px]">
    <span class="absolute text-[white] flex flex-col justify-center items-center w-full gap-[14px] mt-[30px] leading-7">
    <h1 class="text-[31px] font-semibold">RAZERSTORE REWARDS</h1>
    <H2 class="text-[20px] font-thin w-[360px] text-center">SIGN UP TO UNLOCK MEMBER PERKS AND PRIVILEDGES</H2>
    <span class="flex gap-[30px]">
      <a class="font-medium flex items-center justify-center" href="#">Join Now <img src="https://www.razer.com/assets/images/icons/icon-arrow-right.svg" alt="" class="w-[40px] h-[15px] mt-[6px] mr-[7px] font-[20px]"></a>
      
    </span>
  </span>
    <img class="h-[550px] w-full object-cover" src="https://assets2.razerzone.com/images/pnx.assets/1b1e2970306c932a02bcb6d4824f0364/razerstore-rewards-join-now-b-950x580-desktop.jpg" alt="">

  </div>


  <!-- footer -->
  <footer class="bg-[black] mt-[9px]">
    <div>
      
    
    <span class="text-white gap-[280px] text-[14px] flex justify-center items-center pt-[10px] pb-[10px]">
      <h3>Shop</h3>
      <span class="material-symbols-outlined text-[gray]">
add
</span>

    </span>
    <hr class="text-[#5e5d5d] w-[330px] ml-[20px]">

    <span  class="text-white  gap-[250px] text-[14px] flex justify-center items-center pt-[10px] pb-[10px]">
    <h3>Explore</h3>
    <span class="material-symbols-outlined text-[gray] ml-[12px]">
add
</span>

    </span>
    <hr class="text-[gray] w-[330px] ml-[20px]">

    <span  class="text-white  gap-[250px] text-[14px] flex justify-center items-center  pt-[10px] pb-[10px]">
      <h3>Support</h3>
      <span class="material-symbols-outlined text-[gray] ml-[12px]">
add
</span>


    </span>
    <hr class="text-[gray] w-[330px] ml-[20px]">

    <span  class="text-white  gap-[250px] text-[14px] flex justify-center items-center pt-[10px] pb-[10px]">
      <h3>company</h3>
      <span class="material-symbols-outlined text-[gray] ml-[12px]">
add
</span>


    </span>
    <hr  class="text-[gray] w-[330px] ml-[20px]">

  </div>
  <div  class="text-white text-[12px] pt-[24px] mt-[20px] flex justify-center items-center flex-col">
    <p>Copyright © 2023 Razer Inc. All rights reserved.</p>
  </div>
    <span class=" text-[gray] text-[14px] pb-[40px] flex  justify-center gap-2 pt-[5px] items-center">
    <a href="" class="">Site Map |</a> <a href="">Legal Terms |</a> <a href="">Privacy Policy |</a> <a href="">Cookie Settings |</a>
    </span>
    <hr class="text-[gray] w-[330px] ml-[20px]">
 

  <div class="text-white flex justify-center gap-[10px] pt-[20px]">
    <h4 class="text-[14px]">United States |</h4>
    <a href="" class="text-[gray] text-[14px] ">Change Location ></a>
  </div>
    <span class="flex justify-center items-center pb-[70px] pt-[17px] gap-3">
    <h5 class="text-green-600">FOR GAMERS. BY GAMERS.&trade;</h5>
    <img src="https://assets2.razerzone.com/images/phoenix/SM0001-facebook.svg" alt="">
    <img src="https://assets2.razerzone.com/images/phoenix/SM0003-instagram.svg" alt="">
    <img src="https://assets2.razerzone.com/images/phoenix/SM0005-twitter.svg" alt="">
  </span>
 


  </footer>




</body>
</template>