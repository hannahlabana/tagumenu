import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="bg-tagu-yellow w-auto h-screen flex flex-col justify-center items-center">
        <div className="font-kare text-9xl text-tagu-white leading-6 mb-6">TAGU</div>
        <div className="font-balgin text-2xl text-tagu-black text-center tracking-widest">CAFE</div>
      </section>
      <section>
        <div className="flex flex-row h-screen bg-tagu-white">
          <div className="font-kare text-7xl text-tagu-red">Signature</div>
          <div className="font-glacial text-xl text-tagu-black">BY TAGU</div>
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
