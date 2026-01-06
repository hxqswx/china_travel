import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, Ticket, Timer, MapPin, Share2, Heart, Grid, PlayCircle, Calendar, ArrowRight } from 'lucide-react';
import { Review } from '../types';

const REVIEWS: Review[] = [
  {
    id: '1',
    user: 'Sarah Jenkins',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5gu6f0I3nDBB6pqmrFN7_JrgZkkPXzmZM6MQezbtThvSrRpxNYl4WGpBoXBUxnlUJXxZFXHOocYHHNSyVZvqESuX3W2ee7pH-ow9Os8BouYVUhQvldEhs2pw73QqJWFymnL-ygaux4cBczeKhSZ2aBicyvTiySP5qp1l4wuCysMhy3wXOutMB2tMpyjYa672UR-s7HoPd21e4Ix1VVhGSsN1gPqYiPXoi2ILPooA1mSOo_nb0JbdBa7_zylVdZQracD9cuggegvC8',
    rating: 5,
    date: '2 days ago',
    content: 'Absolutely breathtaking. We went early in the morning to avoid the crowds and it was magical. The slide down is a must-do!'
  },
  {
    id: '2',
    user: 'David Chen',
    avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiLoEj_vg0LbDbFTafaSFg0h14Dk04kPh4Ed3WWuLoQUuyRm-pojaYMNRVat6fDpyduc0zodZMLo4HYHa3qYdQJ91nVCeVfba4KLo-YE24M_TrtKgqpd3g8gz-NHS_4IdrLMIySe8_urrxgkHtYaJfNO4VWwOmkXf-7Pd-pXA4XVLAIr17LLFjIKrF1TlAz-IC2B0uazQyiRhBvOw1xg4pIC5QsnSAtBdQ2gxrO-LyLaT0PQgLr2Gh0HBymucKSIYm568cQfrCoXVi',
    rating: 4,
    date: '1 week ago',
    content: 'The Mutianyu section is definitely the best maintained. Great for hiking but bring comfortable shoes.'
  }
];

const Details: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 py-8 lg:flex-row lg:px-8">
      {/* Left Column: Visual Media Gallery (60%) */}
      <div className="flex-1 lg:w-[60%]">
        <div className="flex flex-col gap-4">
          {/* Hero Image */}
          <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100 md:aspect-video">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVJuy_TJuWB99arjIZxwiJMB6NnMkIFZlVkxWTinKF0SC6f2k2vtQzKVgXgGW1uL_DRmYMH3JpXFKkod_Q-P458xeqx5imOcT4jE0OCcRH8e7-lbFEdgkbHDGEDFPnGv4syoctBs4sHQbeqHobX3P9j3o27hDasKWiMSr3rC0dGEbpkMCDRbhAbZSAbzp5q79HZ-eIodriHr90G6dGQ99k9X9LtdLIxpPl0QaCJ9o_-7FSXdoKjJQOjRdS2DV2972Fk4sqOspcsx6z" 
              alt="Great Wall Hero"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-4 right-4 flex gap-2">
              <button className="flex items-center gap-2 rounded-lg bg-white/90 px-3 py-2 text-xs font-bold text-text-main backdrop-blur-sm transition hover:bg-white">
                <Grid className="w-4 h-4" />
                View All Photos
              </button>
            </div>
          </div>
          
          {/* Secondary Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNxjQmx3t0aIwWJxuPD0bPeY-ifaG6DAfdIqqWNJ6JWaSz7I8MgEQm1oMOS4vn3xchdIn5ThjdjhfV7cezPj2zkThiLPmANb4hslFQfevx7xgjnshhQe1M2K2yfeVviNVzH0kUN1lSJ7_nVcGNT7obuXAgN8PaKYtTRcjqsIZJulNtbTfCybXRYwIRaIDGEr1c_P9QzdzP9c8n-4NVue5sfWF3Dh0vIcEHi59VzGqnvLz3bxVs7SKcIIQvI_jnyPrTUOaBW9OjE0lo" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Detail 1" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAanaKYUf2e0RN69fV9vFtDcXIM3SIzKlTgLe8ZBsqqBEWwkEO_lVWbCzN-yF39MpLHaAzad3gRuqdyNFl4KUOxWK-AzEMy90u0_PuD0cuw8mWyKAEp50haXAJzKeRCJG7Bj1j43UsZA3DU1dCOUcnGnIU_2mMe9zTM-ldhuMgPVacC_lUcVRz4Q_pWl5ziVTQgN0yMZMWc3fxkY2JTdaRD9xtcSCvGOdJ113fIO3v3JAb3csbWAqXO4NivJ9qH9Zs_-WwjEJpwnFGP" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Detail 2" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhZzBzNZe9beLyWrPOrYoRGoadQZjgQ3M_9iv2ElOJGpCa3nEYzz9f8W_hKd8ATUjnKNAmR-PjXFJby56JpX7i1PH66jJ4VGY-m9Lvbdf0hfj7x5_0EttcpeTSGThhGCGy4soikFhWJ0ijf8DcI4oPXM-GEBzTvLYcdClPolDCb213D5w2y_nEMUYSGvNE8md3SzVf48TdYyLBUec75uEHKSdsnMZ9nUC8JIGsfZrk0P_JFzF47dahN25Zh6XtSlGiwVSU4uPzqc0s" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110" alt="Detail 3" />
            </div>
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-black cursor-pointer group">
               <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_hwi_DMT8DpUHLSSydXirODBTpKWj6GP9yVSz-nc7F0khxPYg2yfhzAb6D_LIYoFMHuJWtDPUGHXw6Zl9msCQkTbsTiaovizUaxTlhSv1J6L-cqtkxbQ9YcYjH5BwYl1zd3wxUHoZnNQ55xkuurGUs9i9U29YG0_nfUNfqH6ryrxmiz4Nizgu-L9kwiTewfAxKwsFsBH267Bm9LGSNpT6rZO9k9QYVVRLcIUFOAVw6TTKsx-1zaO9l1q-ZrxsGHdvuy8C9-uAPDUp" className="absolute inset-0 w-full h-full object-cover opacity-70 transition-all duration-500 group-hover:scale-110 group-hover:opacity-50" alt="Video Thumb" />
               <PlayCircle className="relative z-10 w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </div>

          {/* User Reviews */}
          <div className="mt-8 rounded-2xl border border-[#e7f3f2] bg-white p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-bold text-text-main">Visitor Reviews</h3>
              <a href="#" className="text-sm font-semibold text-primary hover:underline">View all 12.5k</a>
            </div>
            
            {REVIEWS.map((review, index) => (
               <div key={review.id} className={`flex gap-4 ${index !== REVIEWS.length - 1 ? 'border-b border-[#e7f3f2] pb-6 mb-6' : ''}`}>
                 <img src={review.avatar} alt={review.user} className="h-10 w-10 shrink-0 overflow-hidden rounded-full object-cover bg-gray-200" />
                 <div>
                   <div className="flex items-center gap-2">
                     <span className="font-bold text-text-main">{review.user}</span>
                     <div className="flex text-yellow-400">
                       {[...Array(5)].map((_, i) => (
                         <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                       ))}
                     </div>
                     <span className="text-xs text-text-secondary">{review.date}</span>
                   </div>
                   <p className="mt-2 text-sm leading-relaxed text-text-main">{review.content}</p>
                 </div>
               </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Sticky Info Panel (40%) */}
      <div className="lg:w-[40%]">
        <div className="sticky top-24 flex flex-col gap-6">
          {/* Title Header */}
          <div className="rounded-2xl bg-white p-6 shadow-soft">
            <div className="flex items-start justify-between">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-text-main lg:text-3xl">
                 The Great Wall - Mutianyu
                 <span className="block text-lg font-medium text-text-secondary mt-1">慕田峪长城</span>
              </h1>
              <div className="flex gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light hover:bg-[#d5e7e5]">
                  <Heart className="w-5 h-5 text-text-main" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-background-light hover:bg-[#d5e7e5]">
                  <Share2 className="w-5 h-5 text-text-main" />
                </button>
              </div>
            </div>

            {/* Rating & Tags */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 rounded-md bg-[#e7f3f2] px-2 py-1">
                <Star className="w-4 h-4 text-primary fill-current" />
                <span className="text-sm font-bold text-text-main">4.9</span>
                <span className="text-xs text-text-secondary">(12.5k)</span>
              </div>
              <div className="flex items-center gap-1 text-sm text-text-secondary">
                 <div className="bg-green-500 rounded-full w-2 h-2"></div>
                 <span>Official Ticket Partner</span>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {['#History', '#Hiking', '#MustSee', '#Beijing'].map(tag => (
                <span key={tag} className="cursor-pointer rounded-lg bg-[#f0f7f6] px-3 py-1 text-xs font-semibold text-text-main transition hover:bg-[#e0efed]">{tag}</span>
              ))}
            </div>

            <div className="mt-6 border-t border-[#e7f3f2] pt-4">
               <p className="text-sm leading-relaxed text-text-main line-clamp-3">
                   Experience one of the best-preserved sections of the Great Wall. Mutianyu offers breathtaking scenery and less crowding than other sections. Famous for its 23 watchtowers and the exciting toboggan ride down.
               </p>
               <button className="mt-2 text-sm font-bold text-text-secondary hover:text-primary">Read More</button>
            </div>
          </div>

          {/* Practical Info Grid */}
          <div className="grid grid-cols-3 gap-3">
             <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 text-center shadow-soft">
               <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                 <Clock className="w-5 h-5" />
               </div>
               <span className="text-xs text-text-secondary">Hours</span>
               <span className="mt-1 text-sm font-bold text-text-main">07:30 - 17:30</span>
             </div>
             <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 text-center shadow-soft">
               <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                 <Ticket className="w-5 h-5" />
               </div>
               <span className="text-xs text-text-secondary">Price</span>
               <span className="mt-1 text-sm font-bold text-text-main">From ¥40</span>
             </div>
             <div className="flex flex-col items-center justify-center rounded-xl bg-white p-4 text-center shadow-soft">
               <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                 <Timer className="w-5 h-5" />
               </div>
               <span className="text-xs text-text-secondary">Duration</span>
               <span className="mt-1 text-sm font-bold text-text-main">3-4 Hours</span>
             </div>
          </div>

          {/* Map Card */}
          <div className="group relative h-40 w-full overflow-hidden rounded-2xl bg-gray-200">
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9t3lCPlDD-DwJ6mdw2cIRrVhv7wk2wvydQ9tBvhYlZCsJpaLUBwBn3lY0J4lN5139vGyOEbqCyX2mkuOsLqUgEU7vyN4BfnMdjCUSEJ0MqhYd9W3JVFdNFbIXsgYJdAgWa9mBCb_gNdVUkK6OCg-I9cH6wMqMGtGxGH2n1Z4G8PHAwlFYO-HSn-IvaMDhDBNJMck1G2s90EpOIdSN1nGyTVYRaxDKLZXi1_EfKVt1Umh8mJ2qBsRBAYKreOxOx1hcJwN_f1pvfsN" className="absolute inset-0 w-full h-full object-cover opacity-80 transition-opacity group-hover:opacity-100" alt="Map" />
             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
             <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                <div className="flex flex-col">
                   <span className="text-xs font-medium opacity-90">Location</span>
                   <span className="text-sm font-bold">Huairou District, Beijing</span>
                </div>
                <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg hover:scale-105">
                   <MapPin className="w-4 h-4" />
                </button>
             </div>
          </div>

          {/* Booking Actions */}
          <div className="rounded-2xl bg-white p-4 shadow-soft">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm font-medium text-text-secondary">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-bold text-text-main">¥40</span>
                <span className="text-xs text-text-secondary">/ person</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => navigate('/booking')}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-bold text-text-main shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>Book Ticket</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-center rounded-xl bg-background-light px-4 py-3.5 text-text-main transition hover:bg-[#d5e7e5]">
                <Calendar className="w-5 h-5" />
              </button>
            </div>
            <div className="mt-3 text-center">
              <span className="text-xs text-text-secondary">Free cancellation up to 24 hours before visit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;