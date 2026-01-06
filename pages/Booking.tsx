import React, { useState } from 'react';
import { TicketType } from '../types';
import { Minus, Plus, Calendar, Star, CheckCircle, Headphones, MapPin, ChevronLeft, ChevronRight, ArrowRight, Ticket } from 'lucide-react';

const Booking: React.FC = () => {
  const [tickets, setTickets] = useState<TicketType[]>([
    { id: '1', name: 'Adult Standard', desc: '成人标准票 (Age 18-59)', price: 120, tag: 'HOT', count: 2 },
    { id: '2', name: 'Student / Senior', desc: '学生/老人优惠票 (Valid ID Required)', price: 60, count: 0 },
    { id: '3', name: 'Child (Under 1.2m)', desc: '儿童免费票 (Free Entry)', price: 0, count: 0 },
  ]);

  const updateCount = (id: string, delta: number) => {
    setTickets(tickets.map(t => 
      t.id === id ? { ...t, count: Math.max(0, t.count + delta) } : t
    ));
  };

  const totalAmount = tickets.reduce((sum, t) => sum + (t.price * t.count), 0);

  return (
    <div className="layout-container flex flex-col w-full min-h-screen max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10 py-8">
      {/* Breadcrumbs / Stepper */}
      <nav className="mb-10 w-full">
        <div className="flex items-center justify-between md:justify-start gap-2 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center justify-center size-8 rounded-full bg-primary text-text-main text-sm font-bold shadow-lg shadow-primary/20">1</span>
            <span className="text-text-main text-sm font-bold whitespace-nowrap">Selection <span className="text-xs font-normal opacity-70 ml-1">选票</span></span>
          </div>
          <div className="w-8 h-[1px] bg-slate-200 shrink-0"></div>
          <div className="flex items-center gap-2 shrink-0 opacity-50">
            <span className="flex items-center justify-center size-8 rounded-full border border-slate-300 text-slate-500 text-sm font-bold">2</span>
            <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Travelers <span className="text-xs font-normal opacity-70 ml-1">信息</span></span>
          </div>
          <div className="w-8 h-[1px] bg-slate-200 shrink-0"></div>
          <div className="flex items-center gap-2 shrink-0 opacity-50">
            <span className="flex items-center justify-center size-8 rounded-full border border-slate-300 text-slate-500 text-sm font-bold">3</span>
            <span className="text-slate-500 text-sm font-medium whitespace-nowrap">Payment <span className="text-xs font-normal opacity-70 ml-1">支付</span></span>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
        {/* Left Column: Selection Flow */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider">
              <Ticket className="w-5 h-5" />
              <span>Ticket Booking</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-text-main leading-tight tracking-tight">
              Mutianyu Great Wall Tickets <br/>
              <span className="text-2xl opacity-60 font-normal">慕田峪长城门票</span>
            </h1>
            <p className="text-slate-500 mt-2 flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              Mutianyu Rd, Huairou District, Beijing, China
            </p>
          </div>

          {/* Step 1: Ticket Selection */}
          <section className="bg-surface-light rounded-2xl p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-bold text-text-main mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Select Tickets (选择票种)
            </h3>
            <div className="flex flex-col gap-4">
              {tickets.map(ticket => (
                <div key={ticket.id} className={`group relative flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer ${ticket.count > 0 ? 'border-2 border-primary bg-primary/5' : 'border-slate-200 hover:border-primary/50 bg-white'}`}>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-text-main font-bold text-lg">{ticket.name}</span>
                      {ticket.tag && <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-text-main">{ticket.tag}</span>}
                    </div>
                    <span className="text-slate-500 text-sm">{ticket.desc}</span>
                    <span className={`font-bold mt-1 ${ticket.price === 0 ? 'text-green-500' : 'text-primary'}`}>{ticket.price === 0 ? 'Free' : `¥${ticket.price}`}</span>
                  </div>
                  <div className="flex items-center gap-3 bg-white rounded-lg p-1 shadow-sm border border-slate-200">
                    <button 
                      onClick={() => updateCount(ticket.id, -1)}
                      className={`size-8 flex items-center justify-center rounded-md hover:bg-slate-100 transition-colors ${ticket.count === 0 ? 'text-slate-300' : 'text-slate-500'}`}
                      disabled={ticket.count === 0}
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-4 text-center font-bold text-text-main">{ticket.count}</span>
                    <button 
                      onClick={() => updateCount(ticket.id, 1)}
                      className="size-8 flex items-center justify-center rounded-md bg-primary text-text-main hover:bg-primary/80 transition-colors shadow-sm"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Step 2: Date Selection */}
          <section className="bg-surface-light rounded-2xl p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-bold text-text-main mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Select Date (选择日期)
            </h3>
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-4 px-2">
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-500">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-lg font-bold text-text-main">October 2023</span>
                <button className="p-2 hover:bg-slate-100 rounded-full transition-colors text-text-main">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="grid grid-cols-7 mb-2 text-center">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => (
                    <span key={day} className={`text-xs font-semibold uppercase ${i >= 5 ? 'text-primary' : 'text-slate-400'}`}>{day}</span>
                ))}
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                 {[25, 26, 27, 28, 29].map(d => (
                     <div key={d} className="aspect-square flex flex-col items-center justify-center rounded-lg text-slate-300">{d}</div>
                 ))}
                 {[1, 2].map(d => (
                    <button key={d} className="aspect-square flex flex-col items-center justify-center rounded-lg border border-slate-200 hover:border-primary text-text-main transition-all bg-white">
                        <span className="text-sm font-bold">{d}</span>
                        <span className="text-[10px] text-slate-500">¥120</span>
                    </button>
                 ))}
                 <button className="aspect-square flex flex-col items-center justify-center rounded-lg border border-transparent bg-slate-100 text-slate-400 cursor-not-allowed opacity-60">
                    <span className="text-sm font-bold">3</span>
                    <span className="text-[10px]">Sold Out</span>
                 </button>
                 <button className="aspect-square flex flex-col items-center justify-center rounded-lg bg-primary text-text-main shadow-lg shadow-primary/20 transform scale-105 ring-2 ring-primary ring-offset-2">
                    <span className="text-sm font-bold">4</span>
                    <span className="text-[10px] font-medium">¥120</span>
                 </button>
                 {[5, 6, 7].map(d => (
                    <button key={d} className="aspect-square flex flex-col items-center justify-center rounded-lg border border-slate-200 hover:border-primary text-text-main transition-all bg-white">
                        <span className="text-sm font-bold">{d}</span>
                        <span className="text-[10px] text-slate-500">¥120</span>
                    </button>
                 ))}
              </div>
              <div className="flex gap-4 mt-4 justify-end text-xs text-slate-500">
                <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-white border border-slate-300"></span> Available</div>
                <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-primary"></span> Selected</div>
                <div className="flex items-center gap-1"><span className="size-2 rounded-full bg-slate-200"></span> Sold Out</div>
              </div>
            </div>
          </section>

          {/* Step 3: Traveler Info */}
          <section className="bg-surface-light rounded-2xl p-6 shadow-soft border border-slate-100">
            <h3 className="text-lg font-bold text-text-main mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-primary rounded-full"></span>
              Traveler Info (游客信息)
            </h3>
            <div className="flex flex-col gap-6">
              <div className="p-4 rounded-xl bg-background-light border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-text-main">Traveler 1 (Adult)</h4>
                  <span className="text-xs text-primary font-medium cursor-pointer hover:underline">Clear</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase">First Name (名)</label>
                      <input className="w-full rounded-lg border-slate-200 bg-white text-text-main focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="e.g. John" type="text" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Last Name (姓)</label>
                      <input className="w-full rounded-lg border-slate-200 bg-white text-text-main focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="e.g. Doe" type="text" />
                   </div>
                   <div className="md:col-span-2 flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Passport / ID Number (证件号)</label>
                      <input className="w-full rounded-lg border-slate-200 bg-white text-text-main focus:border-primary focus:ring-primary/20 placeholder:text-slate-400" placeholder="Enter passport number" type="text" />
                   </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-background-light border border-slate-200 opacity-60 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-text-main">Traveler 2 (Adult)</h4>
                  <span className="text-xs text-slate-400 font-medium">Auto-fill from profile</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase">First Name</label>
                      <input className="w-full rounded-lg border-slate-200 bg-slate-50 cursor-not-allowed" disabled type="text" />
                   </div>
                   <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-slate-500 uppercase">Last Name</label>
                      <input className="w-full rounded-lg border-slate-200 bg-slate-50 cursor-not-allowed" disabled type="text" />
                   </div>
                </div>
              </div>
            </div>
          </section>
          <div className="h-10"></div>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4 relative">
          <div className="sticky top-24 flex flex-col gap-6">
            <div className="bg-surface-light rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
               {/* Image */}
               <div className="relative h-48 w-full bg-slate-200 overflow-hidden group">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAe9t3lCPlDD-DwJ6mdw2cIRrVhv7wk2wvydQ9tBvhYlZCsJpaLUBwBn3lY0J4lN5139vGyOEbqCyX2mkuOsLqUgEU7vyN4BfnMdjCUSEJ0MqhYd9W3JVFdNFbIXsgYJdAgWa9mBCb_gNdVUkK6OCg-I9cH6wMqMGtGxGH2n1Z4G8PHAwlFYO-HSn-IvaMDhDBNJMck1G2s90EpOIdSN1nGyTVYRaxDKLZXi1_EfKVt1Umh8mJ2qBsRBAYKreOxOx1hcJwN_f1pvfsN" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Summary Wall" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                     <div className="flex items-center gap-1 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded mb-1 w-fit">
                        <Star className="w-3 h-3 fill-current text-primary" /> 4.9 (2.1k)
                     </div>
                     <h3 className="font-bold text-lg leading-tight">Mutianyu Great Wall</h3>
                  </div>
               </div>
               
               {/* Summary Content */}
               <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-col gap-1 pb-4 border-b border-slate-100">
                     <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Date & Time</span>
                     <div className="flex items-center gap-2 text-text-main font-medium">
                        <Calendar className="w-4 h-4 text-primary" />
                        Oct 04, 2023
                     </div>
                  </div>
                  <div className="flex flex-col gap-3 pb-4 border-b border-slate-100">
                     <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide">Order Details</span>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">Adult Standard x 2</span>
                        <span className="text-text-main font-medium">¥240</span>
                     </div>
                     <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-600">Service Fee</span>
                        <span className="text-text-main font-medium">¥0</span>
                     </div>
                     <div className="flex justify-between items-center text-sm text-green-500">
                        <span>Discount</span>
                        <span className="font-medium">-¥0</span>
                     </div>
                  </div>
                  <div className="flex justify-between items-end pt-2">
                     <div className="flex flex-col">
                        <span className="text-xs text-slate-500">Total Amount</span>
                        <div className="flex items-baseline gap-1">
                           <span className="text-sm font-bold text-text-main">¥</span>
                           <span className="text-3xl font-black text-text-main tracking-tight">{totalAmount}</span>
                        </div>
                     </div>
                     <span className="text-xs text-slate-400 mb-1">Tax included</span>
                  </div>
                  <button className="w-full mt-2 py-4 rounded-xl bg-primary text-text-main text-base font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group">
                      Confirm & Pay
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <p className="text-center text-xs text-slate-400 mt-2">By clicking confirm, you agree to our <a href="#" className="underline hover:text-primary">Terms</a>.</p>
               </div>
            </div>
            
            <div className="flex items-center justify-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
                <div className="flex items-center gap-1.5">
                   <CheckCircle className="w-4 h-4 text-slate-500" />
                   <span className="text-xs font-medium text-slate-500">Secure Payment</span>
                </div>
                <div className="flex items-center gap-1.5">
                   <Headphones className="w-4 h-4 text-slate-500" />
                   <span className="text-xs font-medium text-slate-500">24/7 Support</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;