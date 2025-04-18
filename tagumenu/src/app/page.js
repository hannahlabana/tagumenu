"use client";
import { useEffect } from "react";
import Image from "next/image";
import Menu from "../../public/tagu_menu.json"
import goldLeaf from "../../public/gold-leaf.png"
import goldTree from "../../public/gold-tree.png"
import eye from "../../public/tagueye.png"
import walnut from "../../public/choo-walnut.png"
import oreo from "../../public/choo-oreo.png"
import cheesecake from "../../public/choo-cheesecake.png"
import chooasset from "../../public/choo-asset-1.png"
import chooasset2 from "../../public/choo-asset-2.png"
import choologo from "../../public/choo-logo.png"
import "./globals.css";

export default function Home() {
  var Signature = [];
  var Espresso = [];
  var NonCaffeinated = [];
  var CoffeeAddOn = [];
  var Brunch = [];
  var Sides = [];
  var Main = [];
  var MainAddOn = [];
  var Alfresco = [];
  var Mixers = [];
  var Promos = [];
  var Beers = [];
  var Choos = [];

  function Categories() {
    Menu.forEach((item) => {
      switch (item.category) {
        case "Signature":
          Signature.push(item);
          break;
        case "Espresso":
          Espresso.push(item);
          break;
        case "Non Caffeinated":
          NonCaffeinated.push(item);
          break;
        case "Add On":
          CoffeeAddOn.push(item);
          break;
        case "Brunch":
          Brunch.push(item);
          break;
        case "Sides":
          Sides.push(item);
          break;
        case "Main":
          Main.push(item);
          break;
        case "Main Add On":
          MainAddOn.push(item);
          break;
        case "Alfresco":
          Alfresco.push(item);
          break;
        case "Mixers":
          Mixers.push(item);
          break;
        case "Promos":
          Promos.push(item);
          break;
        case "Beers":
          Beers.push(item);
          break;
        case "Choos":
          Choos.push(item);
          break;
      }
    });

    // console.log("Signature:", Signature);
    // console.log("Espresso:", Espresso);
    // console.log("Non-Caffeinated:", NonCaffeinated);
    // console.log("Coffee Add-On:", CoffeeAddOn);
    // console.log("Brunch:", Brunch);
    // console.log("Sides:", Sides);
    // console.log("Main:", Main);
    // console.log("Main Add-On:", MainAddOn);
    // console.log("Alfresco:", Alfresco);
    // console.log("Mixers:", Mixers);
    // console.log("Promos:", Promos);
    // console.log("Beers:", Beers);
    // console.log("Choos:", Choos);
  }

  useEffect(() => {
    function addItems() {
      var signatureList = document.getElementById('signature');
      var espressoList = document.getElementById('espresso');
      var nonCaffeinatedList = document.getElementById('nonCaffeinated');
      var addOnList = document.getElementById('addOn');
      var brunchList = document.getElementById('brunch');
      var sidesList = document.getElementById('sides');
      var MainsList = document.getElementById('mains');
      var MainsAddOnList = document.getElementById('mainaddons');
      var AlfrescoList = document.getElementById('alfresco');
      var MixersList = document.getElementById('mixers');
      var BeersList = document.getElementById('beers');
      var PromosList = document.getElementById('promos');

      Signature.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <div class="flex flex-row gap-3">
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">${item.title}</span>
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">P${item.price}</span>
          </div>
          <span class="text-xs lg:text-base text-tagu-red font-glacial italic leading-none tracking-widest">${item.description}</span>
        `;
        card.classList.add('flex', 'flex-col');
        signatureList.appendChild(card);
      });

      Espresso.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">${item.title}</span>
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">P${item.price}</span>
        `;
        card.classList.add('flex', 'flex-row', 'gap-3');
        espressoList.appendChild(card);
      });

      NonCaffeinated.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">${item.title}</span>
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">P${item.price}</span>
        `;
        card.classList.add('flex', 'flex-row', 'gap-3');
        nonCaffeinatedList.appendChild(card);
      });

      CoffeeAddOn.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">${item.title}</span>
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-black">+P${item.price}</span>
        `;
        card.classList.add('flex', 'flex-row', 'gap-3');
        addOnList.appendChild(card);
      });

      Brunch.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
          <span class="text-xs lg:text-base text-tagu-white font-glacial italic leading-none tracking-widest">${item.description}</span>
        `;
        card.classList.add('flex', 'flex-col');
        brunchList.appendChild(card);
      });

      Sides.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">P${item.price}</span>
        `;
        card.classList.add('w-full', 'flex', 'flex-row', 'justify-between');
        sidesList.appendChild(card);
      });

      Main.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <div class="flex flex-row gap-1">
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">| P${item.price}</span>
          </div>
          <span class="text-xs lg:text-base text-tagu-white font-glacial italic leading-none tracking-widest">${item.description}</span>
        `;
        card.classList.add('flex', 'flex-col', 'gap-1');
        MainsList.appendChild(card);
      });

      MainAddOn.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">+P${item.price}</span>
        `;
        card.classList.add('flex', 'flex-row', 'gap-3');
        MainsAddOnList.appendChild(card);
      });
      
      Alfresco.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
          <span class="text-xs lg:text-base text-tagu-white font-glacial italic leading-none tracking-widest">${item.description}</span>
        `;
        card.classList.add('flex', 'flex-col', 'gap-1');
        AlfrescoList.appendChild(card);
      });

      Mixers.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>`
        card.classList.add('flex', 'flex-row', 'gap-3');
        MixersList.appendChild(card);
      });

      Beers.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
          ${item.title === 'Heineken' ? `<span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">| P${item.price}</span>` : ''}
        `;
        card.classList.add('flex', 'flex-row', 'gap-1');
        BeersList.appendChild(card);
      });

      Promos.forEach((item) => {
        var card = document.createElement('div');
        card.innerHTML = `
          <div class="flex flex-row w-3/4 md:w-2/5 2xl:w-3/4 justify-between">
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">${item.title}</span>
            <span class="text-base md:text-lg lg:text-xl font-glacial text-tagu-white">P${item.price}</span>
          </div>
          <span class="text-xs lg:text-base text-tagu-white font-glacial italic leading-none tracking-widest">${item.description ? item.description : ''}</span>
        `;
        card.classList.add('flex', 'flex-col', 'w-full');
        PromosList.appendChild(card);
      }); 
    }

    addItems();
  }, []);
  
  Categories();
  
  return (
    <div className="flex flex-col overflow-x-hidden">
      {/* TITLE PAGE */}
      <div id="titlePage" className="h-screen bg-tagu-yellow flex flex-col justify-between items-center p-8">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <p className="font-kare text-8xl md:text-[10rem] text-tagu-white text-center leading-none mb-[-3vh] md:mb-[-5vh]">TA</p>
            <p className="font-kare text-8xl md:text-[10rem] text-tagu-white text-center leading-none mb-[-2.8vh] md:mb-[-5vh]">GU</p>
          </div>
          <div className="font-balgin text-xl md:text-xl text-tagu-black text-center leading-none tracking-[1.8vw] ml-4 md:ml-9">CAFE</div>
        </div>
        <a href="https://www.instagram.com/thetagucafe/" className="font-glacial text-tagu-black text-sm tracking-widest">@THETAGUCAFE</a>
      </div>
      {/* COFFEE PAGE */}
      <div id="coffeePage" className="bg-tagu-white p-12 lg:p-24 lg:items-end lg:pl-36 flex flex-col gap-8 lg:gap-12 md:h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        <p id="nav" className="font-glacial text-tagu-red text-3xl -rotate-90 right-[-10.5vw] mt-27 z-50 absolute">COFFEE</p>
        <Image src={goldLeaf} className="absolute top-[-2.5vh] right-[-8vw] md:right-[-5vw] lg:right-[-1vw] w-28 md:w-32 xl:w-52 z-0" alt="leaf decoration" />
        {/* SIGNATURES AND ESPRESSO */}
        <div className="flex flex-col gap-8 md:flex-row lg:w-3/4 justify-start items-start z-30">
          {/* SIGNATURES */}
          <div className="md:w-1/2">
            {/* SIGNATURE TITLE */}
            <div className="flex flex-col 2xl:flex-row mb-4 md:items-baseline">
              <div className="font-kare text-[3rem] xl:text-7xl leading-none text-tagu-red mb-[-1.5vh]">Signature</div>
              <div className="font-glacial text-lg xl:text-2xl leading-none text-tagu-black tracking-widest ml-1">BY TAGU</div>
            </div>
            {/* SIGNATURE ITEMS */}
            <div id="signature" className="pl-1 pr-8 flex flex-col gap-3"></div>
          </div>
          {/* ESPRESSO */}
          <div className="md:w-1/2">
            {/* ESPRESSO TITLE */}
            <div className="flex flex-col 2xl:flex-row mb-4 md:items-baseline">
              <div className="font-kare text-[3rem] xl:text-7xl leading-none text-tagu-red mb-[-1.5vh]">Espresso</div>
              <div className="font-glacial text-lg xl:text-2xl leading-none text-tagu-black tracking-widest ml-1">BASED</div>
            </div>
            {/* ESPRESSO ITEMS */}
            <div id="espresso" className="pl-1 pr-8 flex flex-col gap-1 md:gap-4"></div>
          </div>
        </div>
        {/* NON CAFFEINATED AND ADD ONS */}
        <div className="flex flex-col gap-8 md:flex-row lg:w-3/4">
          {/* NON CAFFEINATED */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="font-glacial text-3xl xl:text-4xl text-tagu-red">NON CAFFEINATED</div>
            {/* NON CAFFEINATED ITEMS */}
            <div id="nonCaffeinated" className="pl-1 pr-8 flex flex-col gap-1 md:gap-4"></div>
          </div>
          {/* ADD ON */}
          <div className="flex flex-col gap-4 md:w-1/2">
            <div className="font-glacial text-3xl xl:text-4xl text-tagu-red">ADD ON</div>
            {/* ADD ON ITEMS */}
            <div id="addOn" className="pl-1 pr-8 flex flex-col gap-1"></div>
          </div>
        </div>
      </div>
      {/* BRUNCH PAGE */}
      <div id="brunchPage" className="bg-tagu-red p-12 lg:p-24 lg:pl-[21rem] xl:pl-[27rem] 2xl:pl-[35rem] flex flex-col gap-8 lg:gap-12 xl:gap-16 lg:h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        <p id="nav" className="font-glacial text-tagu-white text-3xl -rotate-90 right-[-10.5vw] mt-2 z-50 absolute">BRUNCH</p>
        <Image src={goldTree} className="absolute w-36 right-[-16vw] md:right-26 lg:right-[-3vw] lg:w-52 md:w-42 top-44 xl:w-48 xl:right-[9vw] 2xl:right-[20vw] xl:top-[22vh] z-0" alt="tree decoration" />
        {/* MAIN BRUNCH */}
        <div className="w-10/12 xl:w-3/5 2xl:w-3/7 flex flex-row justify-between md:w-1/2 lg:w-3/4 xl:justify-start xl:gap-12 2xl:pt-4 z-30">
          {/* BRUNCH ITEMS */}
          <div id="brunch" className="pl-1 pr-8 flex flex-col gap-3 w-full"></div>
          <div className="text-base text-right md:text-lg lg:text-xl font-glacial text-tagu-white">
            <p className="text-xs lg:text-base leading-[-3vh]">all at</p>
            <p>P220</p>
          </div>
        </div>
        {/* SIDES */}
        <div className="w-10/12 md:w-1/2 lg:w-3/4 xl:w-3/5 2xl:w-3/7 flex flex-col gap-4 xl:gap-12 z-30">
          {/* SIDES TITLE */}
          <div className="font-kare text-[3rem] xl:text-7xl leading-none text-tagu-white mb-[-1.5vh] xl:mb-[-5.5vh]">SIDES</div>
          {/* SIDES ITEMS */}
          <div id="sides" className="pl-1 flex flex-col gap-1 w-full"></div>
        </div>
      </div>
      {/* MAINS PAGE */}
      <div id="MainPage" className="bg-tagu-blue p-12 lg:p-24 lg:pl-[21rem] xl:pl-[27rem] 2xl:pl-[35rem] flex flex-col gap-8 lg:gap-12 xl:gap-16 lg:h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        <p id="nav" className="font-glacial text-tagu-white text-3xl -rotate-90 right-[-7.5vw] mt-0 z-50 absolute ">MAINS</p>
        <Image src={eye} className="absolute w-36 right-0 md:right-26 lg:right-[-3vw] lg:w-52 md:w-42 top-60 rotate-145 xl:w-48 xl:right-[9vw] 2xl:right-[20vw] xl:top-[22vh] z-0" alt="tree decoration" />
        {/* MAIN BRUNCH */}
        <div className="w-10/12 xl:w-3/5 2xl:w-4/7 flex flex-row justify-between md:w-1/2 lg:w-3/4 xl:justify-start xl:gap-12 2xl:pt-4 2xl:mt-4 z-30 h-5/7 2xl:mb-[-4vh]">
          {/* BRUNCH ITEMS */}
          <div id="mains" className="pl-1 pr-8 flex flex-col flex-wrap gap-y-6 gap-x-24 w-full"></div>
          {/* <div className="text-base text-right md:text-lg lg:text-xl font-glacial text-tagu-wite"></div> */}
        </div>
        {/* MAIN ADD ON */}
        <div className="flex flex-col gap-2 md:w-1/2">
          <div className="font-glacial text-3xl xl:text-4xl text-tagu-white">ADD ON</div>
          {/* ADD ON ITEMS */}
          <div id="mainaddons" className="pl-1 pr-8 flex flex-col gap-1 h-2/5"></div>
        </div>
      </div>
      {/* ALFRESCO PAGE */}
      <div id="AlfrescoPage" className="bg-tagu-brown p-12 lg:p-24 lg:pl-[21rem] xl:pl-[27rem] 2xl:pl-[35rem] flex flex-col gap-6 lg:gap-12 xl:gap-8 lg:h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        <p id="nav" className="font-glacial text-tagu-white text-3xl -rotate-90 right-[-7.5vw] mt-0 z-50 absolute">MAINS</p>
        <div className="bg-tagu-yellow w-[20rem] h-[20rem] rounded-full absolute z-0 bottom-[-25vh] right-[-20vw]"></div>
        {/* ALFRESCO TITLE*/}
        <div className="flex flex-col md:items-baseline">
          <div className="font-glacial font-bold text-lg xl:text-xl leading-none text-[#FBEFC1] ml-1 mb-2 2xl:mb-3">still mains but only</div>
          <div className="font-kare text-[3rem] xl:text-7xl leading-none text-tagu-white mb-[-1.5vh] pb-1">Alfresco</div>
          <div className="font-glacial font-bold text-lg xl:text-xl leading-none text-[#FBEFC1] ml-1">because it sizzles!</div>
        </div>
        <div className="w-11/12 xl:w-3/5 2xl:w-3/7 flex flex-row justify-between md:w-1/2 lg:w-3/4 xl:justify-start xl:gap-12 z-30">
          {/* BRUNCH ITEMS */}
          <div id="alfresco" className="pl-1 pr-8 flex flex-col gap-4 w-full"></div>
          <div className="text-base text-right md:text-lg lg:text-xl font-glacial text-tagu-white">
          <div id="brunch" className="pl-1 pr-8 flex flex-col gap-3 w-full"></div>
          <div className="text-base text-right md:text-lg lg:text-xl font-glacial text-tagu-white">
            <p className="text-xs lg:text-base leading-[-3vh]">all served with unli rice at</p>
            <p>P150</p>
          </div>
          </div>
        </div>
      </div>
      {/* DRINKS PAGE */}
      <div id="DrinksPage" className="bg-tagu-blue p-12 pb-8 lg:p-24 lg:pl-[21rem] xl:pl-[27rem] 2xl:pl-[35rem] flex flex-col gap-6 lg:gap-12 xl:gap-8 lg:h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        <div className="bg-tagu-red w-[15rem] h-[10rem] absolute z-0 right-10 top-[-5vh]
          rounded-[40%_40%_50%_50%_/_30%_80%_50%_70%]
          transform -rotate-6">
        </div>
        <div className="bg-tagu-yellow w-[30rem] h-[10rem] absolute z-0 right-[-10vw] bottom-[-10vh]
          rounded-[40%_40%_50%_50%_/_30%_80%_50%_70%]
          transform -rotate-6">
        </div>
        {/* DRINKS TITLE */}
        <div className="flex flex-col 2xl:flex-row 2xl:items-baseline 2xl:gap-2 2xl:mb-8 z-20">
          <div className="font-kare text-[3rem] xl:text-7xl leading-none text-tagu-white mb-[-1.5vh]">alfresco</div>
          <div className="font-glacial text-lg xl:text-2xl leading-none text-tagu-white tracking-widest ml-1">DRINKS</div>
        </div>
        <div className="flex flex-col 2xl:flex-row 2xl:gap-4 2xl:w-3/4 z-20">
          <div className="flex flex-col w-full">
            {/* MIXERS */}
            <div className="flex flex-col gap-2 mb-5 2xl:mb-24">
              <div className="flex flex-row gap-1 items-baseline">
                <div className="font-kare text-4xl xl:text-5xl leading-none text-tagu-white mb-[-1.5vh] 2xl:mb-0">mixers</div>
                <div className="font-glacial text-lg xl:text-xl leading-none text-tagu-white tracking-widest ml-1">P600</div>
              </div>
              <div id="mixers" className="pr-8 flex flex-col gap-2"></div>
            </div>
            {/* BEERS */}
            <div className="flex flex-col gap-2 mb-5">
              <div className="flex flex-row gap-1 items-baseline">
                <div className="font-kare text-4xl xl:text-5xl leading-none text-tagu-white mb-[-1.5vh] 2xl:mb-0">beers</div>
                <div className="font-glacial text-lg xl:text-xl leading-none text-tagu-white tracking-widest ml-1">P120</div>
              </div>
              <div id="beers" className="pr-8 flex flex-col gap-2"></div>
            </div>
          </div>
          {/* PROMOS */}
          <div className="flex flex-col w-full">
            <div className="font-kare text-4xl xl:text-5xl leading-none text-tagu-white 2xl:mb-0">promos</div>
            <div id="promos" className="pr-8 flex flex-col gap-2 w-full"></div>
          </div>
        </div>
        {/* DISCLAIMER */}
        <p className="text-tagu-white text-sm xl:text-base italic text-right font-glacial mt-8 2xl:mt-42 z-20">all items exclusive of 10% service charge</p>
      </div>
      {/* CHOOS PAGE */}
      <div id="ChoosPage" className="bg-tagu-pink h-screen w-screen relative overflow-y-hidden overflow-x-hidden">
        {/* WALNUT */}
        <div className="relative">
          <Image 
            src={walnut} 
            alt="walnut" 
            className="absolute w-[25rem] h-auto object-cover z-0 left-[-36vw] top-[-12vh]" 
          />
          <div className="absolute z-10 text-right mt-24 ml-8">
            <p className="font-glacial font-bold text-3xl xl:text-xl leading-none mb-[-1vh] text-tagu-pink uppercase">Walnut</p>
            <p className="font-glacial text-xl xl:text-xl leading-none text-tagu-pink">choos</p>
          </div>
        </div>
        {/* OREO */}
        <div className="relative">
          <Image 
            src={oreo} 
            alt="oreo" 
            className="absolute w-96 h-auto object-cover z-0 right-[-33vw] top-[-6vh]" 
          />
          <div className="absolute z-10 text-right mt-25 mr-10 right-0">
            <p className="font-glacial font-bold text-3xl xl:text-xl leading-none mb-[-1vh] text-tagu-pink uppercase">Oreo</p>
            <p className="font-glacial text-xl xl:text-xl leading-none text-tagu-pink">choos</p>
          </div>
        </div>
        {/* CHEESEECAKE */}
        <div className="relative">
          <Image 
            src={cheesecake} 
            alt="cheesecake" 
            className="absolute w-94 h-auto object-cover z-10 mt-52 ml-8" 
          />
          <div className="absolute z-10 text-left mt-88 mr-24 right-0">
            <p className="font-glacial font-bold text-3xl xl:text-xl leading-none mb-[-1vh] text-tagu-pink uppercase">Cheesecake</p>
            <p className="font-glacial text-xl xl:text-xl leading-none text-tagu-pink">choos</p>
          </div>
        </div>
        {/* CHOO ASSET */}
        <div className="relative">
          <Image 
            src={chooasset} 
            alt="choo-asset" 
            className="absolute w-54 h-auto object-cover z-0 mt-64 ml-[-23vw]" 
          />
        </div>
        {/* CHOO ASSET 2*/}
        <div className="relative">
          <Image 
            src={chooasset2} 
            alt="choo-asset" 
            className="absolute w-54 h-auto object-cover z-0 mt-87 mr-[-36vw] right-0" 
          />
        </div>
        <div className="relative w-full bottom-[-62vh] left-10">
          <p className="font-glacial text-tagu-brown text-lg">FOR ONLY P45</p>
        </div>
        {/* CHOO LOGO */}
        <div className="relative w-full">
          <Image 
            src={choologo} 
            alt="choo-logo" 
            className="absolute w-full h-auto object-cover bottom-[-88vh] left-1/2 transform -translate-x-1/2" 
          />
        </div>
        <div className="relative w-full bottom-[-89vh] text-center">
          <a href="https://www.instagram.com/choo.ceb/" className="font-glacial text-tagu-brown text-lg">@choo.ceb</a>
        </div>
      </div>

    </div>
  );
}
