"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/casaeventlogo.png";

export default function EventDetail() {
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
            <Link href="/" className="text-[#FF5A1F]">
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
      <section className="relative w-full flex flex-col md:flex-row items-end bg-white shadow-md">
        <div className="relative w-full md:w-2/3 h-[260px] md:h-[340px]">
          <Image
            src="/images/artist-rema.jpg"
            alt="Rema"
            fill
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute left-8 bottom-0 z-10 hidden md:block">
          <Image
            src="/images/rema-poster.png"
            alt="Rema Poster"
            width={200}
            height={200}
            className="rounded shadow-lg -mb-8"
          />
        </div>
        <div className="flex-1 flex flex-col justify-end items-center md:items-start p-4 md:pl-0 md:pb-8">
          <h1 className="text-2xl md:text-4xl font-bold mt-4 md:mt-0">
            Rema World Tour 2025
          </h1>
        </div>
      </section>

      {/* Description & Tickets */}
      <section className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="mb-2 font-semibold">
            Événement exceptionnel à Casablanca !
          </p>
          <p className="mb-2">
            Pour la première fois au Maroc, le superstar nigérian Rema. Frissons
            et fête au Morocco Mall, profitez d'activités exclusives dans le
            cadre de son incroyable tournée mondiale !
          </p>
          <p className="mb-2">
            Rendu en 2020 avec le tube planétaire "Dumebi", Rema a conquis des
            millions de fans à travers le monde. Son style unique, mélange
            d'afrobeats, de pop et de trap, fait de chaque concert un événement
            inoubliable. Ne manquez pas cette occasion de vivre une soirée
            exceptionnelle à Casablanca !
          </p>
          <p className="mb-2">
            Rendez-vous le 13 juin 2025 au Morocco Mall. Des cadeaux pour les
            premiers inscrits, surprises et rencontres exclusives !
          </p>
          <p className="mb-2">Places limitées – Réservez vite vos billets !</p>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {/* Ticket Cards */}
          {[
            {
              title: "Standard Pass",
              price: 400,
              desc: "@ Morocco Mall",
              date: "13 juin 2025 à 21:00",
              details: "Ouverture des portes 19:00",
              img: "/images/rema-poster.png",
            },
            {
              title: "Golden Access",
              price: 800,
              desc: "@ Morocco Mall",
              date: "13 juin 2025 à 21:00",
              details: "Ouverture des portes 19:00",
              img: "/images/rema-poster.png",
            },
            {
              title: "VIP Experience",
              price: 1800,
              desc: "@ Morocco Mall",
              date: "13 juin 2025 à 21:00",
              details: "Ouverture des portes 19:00",
              img: "/images/rema-poster.png",
            },
          ].map((ticket, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow flex items-center gap-4 p-4"
            >
              <Image
                src={ticket.img}
                alt={ticket.title}
                width={80}
                height={80}
                className="rounded object-cover w-[80px] h-[80px]"
              />
              <div className="flex-1">
                <div className="font-bold">{ticket.title}</div>
                <div className="text-xs text-gray-500">{ticket.desc}</div>
                <div className="text-xs text-gray-500">{ticket.date}</div>
                <div className="text-xs text-gray-400 mb-1">
                  {ticket.details}
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[#FF5A1F] font-bold text-lg">
                    {ticket.price} MAD
                  </span>
                  <div className="flex items-center gap-1 ml-2">
                    <button className="bg-gray-200 rounded px-2">-</button>
                    <span>0</span>
                    <button className="bg-[#FF5A1F] text-white rounded px-2">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plan de la salle et Localisation */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Plan de la salle et Localisation
        </h2>
        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/venue-plan.png"
              alt="Plan de salle"
              width={350}
              height={220}
              className="rounded-lg object-contain bg-white"
            />
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/images/map-casablanca.png"
              alt="Carte Casablanca"
              width={350}
              height={220}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Votre avis ... */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">Votre avis ...</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Comments */}
          <div className="flex-1 bg-white rounded-lg shadow p-4">
            <div className="font-bold mb-2">Commentaires</div>
            <input
              className="border rounded px-2 py-1 w-full mb-2"
              placeholder="Donnez votre avis..."
            />
            <button className="bg-[#FF5A1F] text-white px-3 py-1 rounded mb-4">
              Commenter
            </button>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="font-bold">Benk Taleb</span> il y a 3 minutes
                <br />
                <span>Au top, c'était fantastique le gars !</span>
              </li>
              <li>
                <span className="font-bold">Adam Plume</span> il y a 9 min
                <br />
                <span>Vivement le Morocco Festival !</span>
              </li>
              <li>
                <span className="font-bold">Malik Enjoy</span> il y a 1 heure
                <br />
                <span>
                  Really nice vibes, loved it... on ne peut pas rater Rema (lol)
                </span>
              </li>
              <li>
                <span className="font-bold">Huda Nacer</span> il y a 2 heures
                <br />
                <span>Génial sur Latin pop...</span>
              </li>
            </ul>
          </div>
          {/* YouTube Video */}
          <div className="flex-1 bg-white rounded-lg shadow p-4 flex items-center justify-center">
            <iframe
              width="100%"
              height="220"
              src="https://www.youtube.com/embed/3K2yQKX3y2A"
              title="REMA - Calm Down"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#FF5A1F] py-8 text-white mt-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-8 justify-between">
          <div>
            <div className="font-bold text-lg mb-2">Cas@Event</div>
            <div className="mb-2">
              Découvrez et réservez les meilleurs événements et activités à
              Casablanca.
            </div>
            <div className="flex gap-2">
              <Link href="#">
                <span className="hover:underline">FB</span>
              </Link>
              <Link href="#">
                <span className="hover:underline">IN</span>
              </Link>
            </div>
          </div>
          <div>
            <div className="font-bold mb-2">Liens utiles</div>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Événements
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Activités
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Catégories</div>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="hover:underline">
                  Concerts
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Festivals
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Dîners
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Family
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="font-bold mb-2">Newsletter</div>
            <input
              className="rounded px-2 py-1 text-black w-full mb-2"
              placeholder="Votre adresse email"
            />
            <button className="bg-white text-[#FF5A1F] px-3 py-1 rounded font-bold w-full">
              S'inscrire
            </button>
          </div>
        </div>
        <div className="text-center text-xs mt-4">
          © 2025 Cas@Event. Tous droits réservés.
        </div>
      </footer>
    </main>
  );
}
