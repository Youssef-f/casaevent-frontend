import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/casaeventlogo.png";

export default function Home() {
  return (
    <main className="bg-[#F8F8F8] min-h-screen w-full">
      {/* Navigation Bar */}
      <nav className="w-full bg-white shadow flex items-center justify-between px-6 py-2 sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <Image src={logo} alt="logo" width={48} height={48} />
          <span className="font-bold text-lg text-[#FF5A1F]">Cas@Event</span>
        </div>
        <ul className="flex gap-6 font-semibold text-black">
          <li>
            <Link href="#" className="text-[#FF5A1F]">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="#">Événements</Link>
          </li>
          <li>
            <Link href="#">Activités</Link>
          </li>
          <li>
            <Link href="#">Restaurants</Link>
          </li>
          <li>
            <Link href="#">Réservations</Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button className="bg-[#FF5A1F] text-white px-4 py-2 rounded-full font-bold">
            Mon Espace
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center">
        <Image
          src="/images/casablanca-hero.jpg"
          alt="Casablanca"
          fill
          className="object-cover w-full h-full absolute top-0 left-0 z-0"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full bg-black/30">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 text-center drop-shadow">
            Découvrez Casablanca
          </h1>
          <p className="text-lg md:text-2xl text-white mb-4 text-center drop-shadow">
            <span className="text-[#FF5A1F] font-bold">Cas@Event</span> est la
            solution pour découvrir et réserver des activités locales sur{" "}
            <span className="underline">Casablanca</span>.
          </p>
          {/* Filter/Search Bar */}
          <div className="bg-white rounded-lg shadow flex flex-wrap gap-2 px-4 py-2 w-full max-w-3xl items-center justify-center">
            <input
              className="border rounded px-2 py-1 w-32"
              placeholder="Type d'activité"
            />
            <input
              className="border rounded px-2 py-1 w-32"
              placeholder="Type d'événement"
            />
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Prix"
            />
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Date"
              type="date"
            />
            <input
              className="border rounded px-2 py-1 w-24"
              placeholder="Lieu"
            />
            <button className="bg-[#FF5A1F] text-white px-4 py-1 rounded font-bold">
              Rechercher
            </button>
          </div>
        </div>
      </section>

      {/* Nouveautés & Tendances du Mois */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Nouveautés & Tendances du Mois</h2>
          <Link href="#" className="text-[#FF5A1F] font-semibold">
            Voir +
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Example cards, replace with dynamic data as needed */}
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow p-2 flex flex-col items-center"
            >
              <Image
                src="/images/sample-event.jpg"
                alt="event"
                width={160}
                height={120}
                className="rounded mb-2 object-cover w-full h-[120px]"
              />
              <div className="font-bold text-center">
                Nom de l'événement {i}
              </div>
              <div className="text-xs text-gray-500 mb-1">Catégorie</div>
              <div className="text-[#FF5A1F] font-bold">350 MAD</div>
              <button className="mt-2 bg-[#FF5A1F] text-white px-3 py-1 rounded text-xs">
                Réserver
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Événements à proximité de vous */}
      <section className="max-w-7xl mx-auto px-4 pb-8">
        <h2 className="text-2xl font-bold mb-4">
          Événements à proximité de vous
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 grid grid-cols-1 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-lg shadow p-3 flex items-center gap-4"
              >
                <Image
                  src="/images/sample-event.jpg"
                  alt="event"
                  width={80}
                  height={80}
                  className="rounded object-cover w-[80px] h-[80px]"
                />
                <div className="flex-1">
                  <div className="font-bold">
                    Concert / Nom de l'événement {i}
                  </div>
                  <div className="text-xs text-gray-500">Date & Heure</div>
                  <div className="text-[#FF5A1F] font-bold">650 MAD</div>
                </div>
                <button className="bg-[#FF5A1F] text-white px-3 py-1 rounded text-xs">
                  Réserver
                </button>
              </div>
            ))}
          </div>
          <div className="flex-1 min-h-[320px]">
            <Image
              src="/images/map-casablanca.png"
              alt="Carte Casablanca"
              width={500}
              height={320}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
