import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-tagu-yellow w-auto h-screen flex flex-col justify-center items-center">
        <div className="font-kare text-9xl text-tagu-white leading-6 mb-6">TAGU</div>
        <div className="font-balgin text-2xl text-tagu-black text-center tracking-widest">CAFE</div>
      </section>
      <section className="flex flex-col pt-24 h-screen bg-tagu-white w-auto pl-28 gap-24">
        <div className="flex flex-row w-3/4 ml-auto">
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex flex-row items-baseline">
              <div className="font-kare text-7xl leading-none text-tagu-red mr-3">Signature</div>
              <div className="font-glacial text-xl leading-none text-tagu-black tracking-widest">BY TAGU</div>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-glacial text-tagu-black leading-none">Kremado</span>
                <span className="text-tagu-red font-glacial italic leading-none tracking-wide">espresso + milk with Biscoff cream & biscuit crunch</span>
              </div>
              <p className="text-2xl font-glacial text-tagu-black">160</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-glacial text-tagu-black leading-none">Einspanner</span>
                <span className="text-tagu-red font-glacial italic leading-none tracking-wide">silky espresso, luscious cream & a hint of cinnamon</span>
              </div>
              <p className="text-2xl font-glacial text-tagu-black">170</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-glacial text-tagu-black leading-none">Gana Gana</span>
                <span className="text-tagu-red font-glacial italic leading-none tracking-wide">white chocolate, oat milk & espresso + cinnamon</span>
              </div>
              <p className="text-2xl font-glacial text-tagu-black">150</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-glacial text-tagu-black leading-none">Espresso Tropicana</span>
                <span className="text-tagu-red font-glacial italic leading-none tracking-wide">citrusy espresso buzz with local kalamansi & tonic</span>
              </div>
              <p className="text-2xl font-glacial text-tagu-black">150</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <div className="flex flex-col gap-0.5">
                <span className="text-2xl font-glacial text-tagu-black leading-none">Kalmahi!</span>
                <span className="text-tagu-red font-glacial italic leading-none tracking-wide">hot meets cold in our dreamy affogato twist</span>
              </div>
              <p className="text-2xl font-glacial text-tagu-black">135</p>
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex flex-row items-baseline">
              <div className="font-kare text-7xl leading-none mr-3 text-tagu-red">ESPRESSO</div>
              <div className="font-glacial text-xl leading-none text-tagu-black tracking-widest">BASED</div>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Espresso</span>
              <p className="text-2xl font-glacial text-tagu-black">90</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Americano</span>
              <p className="text-2xl font-glacial text-tagu-black">100</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Latte</span>
              <p className="text-2xl font-glacial text-tagu-black">125</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Spanish Latte</span>
              <p className="text-2xl font-glacial text-tagu-black">135</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Vanilla Latte</span>
              <p className="text-2xl font-glacial text-tagu-black">135</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Mocha</span>
              <p className="text-2xl font-glacial text-tagu-black">140</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-3/4 ml-auto">
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex flex-col items-baseline">
              <div className="font-glacial text-3xl leading-none mr-3 text-tagu-red">NON CAFFEINATED</div>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Tonyo Kalmado</span>
              <p className="text-2xl font-glacial text-tagu-black">150</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Banana Strawbs</span>
              <p className="text-2xl font-glacial text-tagu-black">160</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Den of Tonic</span>
              <p className="text-2xl font-glacial text-tagu-black">155</p>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Hot Chocolate</span>
              <p className="text-2xl font-glacial text-tagu-black">125</p>
            </div>
          </div>
          <div className="w-3/4 flex flex-col gap-4">
            <div className="flex flex-col items-baseline">
              <div className="font-glacial text-3xl leading-none mr-3 text-tagu-red">ADD ON</div>
            </div>
            <div className="flex flex-row gap-12 items-center justify-between w-3/4">
              <span className="text-2xl font-glacial text-tagu-black leading-none">Oatmilk</span>
              <p className="text-2xl font-glacial text-tagu-black">+40</p>
            </div>
          </div>
        </div>
        
        
      </section>
      <section>
        <div className="flex flex-row h-screen bg-tagu-red">
          <div className="font-kare text-7xl text-tagu-white">Brunch</div>
        </div>
      </section>
      <section>
        <div className="flex flex-row h-screen bg-tagu-blue">
          <div className="font-kare text-7xl text-tagu-white">Main</div>
        </div>
      </section>
      <section>
        <div className="flex flex-row h-screen bg-tagu-brown">
          <div className="font-kare text-7xl text-tagu-white">Main</div>
        </div>
      </section>
      <section>
        <div className="flex flex-row h-screen bg-tagu-blue">
          <div className="font-kare text-7xl text-tagu-white">Drinks</div>
        </div>
      </section>
    </div>
  );
}
