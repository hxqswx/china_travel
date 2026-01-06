import React from 'react';
import { Search, MapPin, ArrowRight, Compass, Mountain, Utensils, Landmark, ShoppingBag, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { City, Post } from '../types';

const CITIES: City[] = [
  { id: '1', name: 'Chengdu', cnName: '成都', description: 'Home of Pandas & Spicy Hotpot. A relaxing city life.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi8-Of-nlqaX3o71RW7mxg-21hUqo4TYwDQjqAjp6slXUEl-Uep8Ct6pYFsDOQnkbAM6UgEwbw0jGwT2131sKk5wgJJtjSTX769qofuDQF4A5EtUkzDCDOhfU47wbs7IEyZRtDkT02ysDfMW2mnlgoGvAc13Mjo-a26uCtz3qHNmREHi6oVJvr2CW2WjgKw--f6Np_ItyRj9EbcO1VH0t5Eb0bXCyDu6ZlocF4Zrwbs84K7QF_zrq0bATNcyXbWaLeAB4lwwE7qm7-' },
  { id: '2', name: 'Shanghai', cnName: '上海', description: 'Where modern skyscrapers meet historic colonial architecture.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMHRLLdeLRnZPIgNFmma_ibU3Bk1m2ex21WaBTgA3sdbW7HQE-aHzX8nMyFvXYt69zCXIGTRDNe-5Zi0RxgjyXQV6VsRaOywjDLUTde0BCgy7SBWwlPQdoTR_ySUnogwmWSkzCll_Fig5-RGIrNrAmEC3w4pcLMbqPuL21qokNGZNcEsrsEj2fSTesKXNkWYAMIm6E05taWmMfRI5zsGnB5dG5uztIItrk1Y4nzKTUpdg8s2dZu2O4YhwJPY52csg8Det7LaSyN1ab' },
  { id: '3', name: "Xi'an", cnName: '西安', description: 'The eternal city, marking the start of the Silk Road.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATiyp0wd6It4G2nOHOnD3B2T54CSj-HkwjEMeJLK9y25vjidtl37iOo70FshSYi44vmH48u0McnyDhYByqWyYHPfNRtyb3eBhw44J-A7BX7RVPAIYbYJ9cx5D-Tj-HcReqz2R3g396OzYP0lMyf2mvSpLx6MHpAMS7GefNpugeYNJpZ9pqkuM9oiQCkmgDfcvp9iv8KydhWf4wohzGymOg9njxJ0lGWaLm7R8Jxou4MP6jIud0uN_t5L3yTilJELtz8r0PJtdTNlv1' },
  { id: '4', name: 'Guilin', cnName: '桂林', description: '"East or West, Guilin landscape is best."', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCr7KupoGgYJjVATOEAdrnTCBivCWYcZte6tOdw1cND10dAvp8p40UKDTdj55XUVrrJNGy2X-A1jStYv6brPA755dcuzYuSBp3lXcD8dqAHHZn32Ls6CETf_r9PJY81UqKo3a7U33gc3zDCR8w6GDIEBrC8ZcrGT-O_fiQjoTbj2jz8qbHFcpDt0iMeErdbLpgIAQRtZiYXs4eJbbYDQswC3ESagZkId4VwwP2MfpdMw4fViC0LIPcobyRUWBhLy3rLS4dFP2muvLri' },
  { id: '5', name: 'Hong Kong', cnName: '香港', description: 'A vibrant fusion of East and West, dim sum and skylines.', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkHggD-9y6aSd6ghFVS72NytYySk2jv7_oUNHDgLlOKJ8icrXul4HuYIJLqWIg-JuOmhnMhOWizBs6UOoknAbUZcc6vaWK-C4aHOF7uD2f1YRFWx3oo8pTZOG8i-Qv7QAkPmmyrfFh8YHd36TodJMb-ZMCp0AsM0X6agJFG95FV7YMbq5SLcgeU6fC0j0FcGO8wkZfMK5-2nzJx9WNUYjowBzb0ooJ4EY5cRnQw9YwYmMW1SgA-_N5Eg_3mZWQF4c9sGjLymL30vkj' },
];

const POSTS: Post[] = [
  { id: '1', title: 'A Night in Chongqing: The Real Cyberpunk City 🌃', subtitle: '重庆夜景，赛博朋克现实版', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtjqxa-xXACaoqDw59856MSbcypu2B_xsjflivpSAepDfBOOsL3wC2orwj9ZKruaHB7E3adTItdmHxmDfX3NFc3ExsvHgMgGx_wbJHlFoaJN4dR1Cnk-llr_Auvt-vBGD3_4eAXjM4g2BIcI7rlyBRu2HcpNK6d2BpzRBqNtdfo77vgNUZj-OWOkKBl4mp-ON_7Zv6g29UVeMROIo1hwqe0og4GuP5RCg3iqSGEtvH0yuGQ3B2TznP6xDhjoWDmgFlhK3y_OXA8j_E', user: { name: 'TravelWithMike', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABWu8FyGIpJ8GqpAGJuxU62iMqITwJ-az8czV2Ll2gy4bk57Ttmx80auecP_OFwHl3whyUKVrtPhiPNG5EbUt3veloSpAq22U7aX3La_5gMbJ2P-_DA_jBb105BAzo1wIiuSPrX1CJ0s31yZTRaoJQpmxhfFsCvgn2N-BV99oAfL5bVDetqvhCnGG_FUNgrrUno3dZeGxHYmFdRwupuWKGSRBeEkUJRvaGbNGHM8ELCJLUe2N8qJEfIaO3QIllTKVaOiYDkipjluuw' }, likes: 1200, isVideo: true },
  { id: '2', title: 'Best Dim Sum Guide in Guangzhou 🥟', subtitle: '广州早茶必吃攻略', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuArvKVwuuxj-mByt5r9mUuOlgsJLUcyq9Z5iR8K6f16vVDSPnrvcmrVhQzCj23nuCcnOkqeO7wC6cIzfYqjbkKpTe1GBR_pKd_0rt3cQrY_CzPxSkVM-BgTahtlm49P51Km2oqmvHV1nAGAI-PSlY3yNvgbK3Nwne4qOlVY5IA0wEpPFNK8brk33dCeWYzPcUeVonEnJUwTZwqphe91axbA-C5mBPaCvCxzl-YWmQs7iLpwnfx7G0srROOjSNItYOVMgrxQcGGvrpH2', user: { name: 'FoodieSarah', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCpIYbc39XmPE3U_Wde-VpO8D2tey6Kw258zKEo2l670q1Q4H_EeXqe7Mpjgbwo9IlvHhIV3fnqa1MOGIanebaDSM6L2mAP_HepSyO-fs-bEPTO891gm9By5oKpFggcrN4mR6NrUkK-N0G4U6ruu4AWs8B4LwlhIJ5qDhqTnFahdJNNWg05CkLzG51devwP2wl7AZDsszVbEG-WGasmtbcdI3vPL-PQfeStDUTyQp2HehDVe4CdP0hEK_QePMNo4Vep1VIMuUMLJpY2' }, likes: 856 },
  { id: '3', title: 'Avatar Mountains: Zhangjiajie National Park ⛰️', subtitle: '张家界国家森林公园', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDl2IOBBRwd_WZdJtB04Yuz3x11DQdrtQc9QK2l3lZ5qIfB1ceoPX-N8RtA9SPKCUFr53jCoO3IppS307eAJS4W8CaTVyZrY8LDZc7SxWJckeqCiTK1Nay_P8CyGZwYyFWtkypRLFcWY41WrICYg_WyLF-mAZPR3tQ_pY7TavD3hpbcSR1feY5EZ9QePdvxOUmmNP_aKu2BrLe0mpwmy3qWtQG0FJDKcG_WqvGB_1D4uz3Wcoh26-6elPM08qLTB_XC35hFTxV7pf9L', user: { name: 'NatureLover', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASYh3sCO2NvE1ql9bt3HLhDEZMvwJhL9Du1ra33g-c3_CqsQjBWHROYISg3tRCtDIxLSiYPWCkks17zHNHNmxhDp67pZkhSkFT2DAvo4EoHGYUaHdHOmM1kmXyNI9fBgPaPjGcwVLnuGP5gEUsV-0xkMmajPACQ-V5Nr7mKHipDag20zM_vZSllCxYsPKnSWV167Ij8_EFBK9ulpcPDMQV-TEY9xqas1XQCleaQzAkW6bXigvBFkM8x5t-GlPkfp7A5jGVm2XfK3Hj' }, likes: 3400 },
  { id: '4', title: 'Journey to Lhasa: The Roof of the World 🏔️', subtitle: '拉萨：世界屋脊之旅', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGoC_k2G0jn9teAi9t2Lmo7gZfTbpZmzUHyR4ZvbJGLzznmx0tzltcn49SDUVYMf3WI1VQKyx1FXKekvwzAXmbqNlHibfFpW34X-DMy4G_nUbKj8n91_rIcG5s-_zVqt_4Hn-ShyT0JRgDcEg0osE0y7BFiE4QjHVxGIkQEYzBgG73g5T_nWlmEKlu-wuJwPd9lcGkUPG81kGNUPeXVIu4nyg4pb3ylY7dkUP2A4UsPYBTFgbV7Ov14vpzXBkpn9FwsdMMeDduKY-W', user: { name: 'TibetExplorer', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO0d3Yd82EVLK8VxyGrWykazKGwRD34XBO-P_SjYkrAXSqmFjGFDJncrtqHHc6cdKxzQ0fLplDwnloalmNc1Bi5uRmjCQ1jY-OFC9CeGOmBxHN3gNSCr0p3uMvch4T9jeEiAE0FT5nM57iWecCvy8Fr3YGxDJ15C54cB3TS_GMUHUa4JbyUVSBfRSmIquDuVmM4Ztjqa-E5jYH4sPKisG3gHzd58cy273eFyYHXUrE_JabHPJ0QoRLKiZMtG8SeXjDOLgk2D8-41n6' }, likes: 2100 },
  { id: '5', title: 'Understanding Chinese Tea Culture 🍵', subtitle: '中国茶文化入门', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-RHaIiHTZOgMp_dPq1XyV830zDYAVdn_bEIV03nG9QQOengQvyxUCBLzeGxmnmxm9gBJI_7a9LOR2KAiAW0NlgKim_syXUubnHUwKZJMBUK-JcYuFKyNY_dAzQa6tTQnc6FrSbrbj-6rl2eHBFJu9OWxvmGlun4sn5ALh9-DLblQLJqq8HVnDijdWuX7VVXP6milk7_yDgSXJvN1GCDDNv_JSfPGUwLrOgzkwnFL8ktB2W7rfIyVO76qRV7FB-pEMivu120U6MxHB', user: { name: 'ZenMaster', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQy-nqT8qORk27YyFMECRoW__EBZbEPkpJ0L5nTEgUF23cDCV1dJoJnd3vpHIS4dNaAODjb0rlIAAfy7ByprTk8Lz4hSqbP_uxTLNpFq_iYUWr_RBqKtPYNF3focTup5fmzu6sWHt9Ineu4B2-rqiCLXXYT29oyrg1HMP9IIbJyMmGrXOl5OnI-6B44X0Xxv3DY-dTuH_cktxBmQhYcZK2l1ZnV4qVCYR0s2ITFaBV06EAK1LgVc1rYROCGuVdulSqp-dLt8GRWoab' }, likes: 920 },
  { id: '6', title: 'Modern Architecture of the Greater Bay Area 🏙️', subtitle: '大湾区现代建筑赏析', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBX2PStQFkkZsApXpCWPx0w-sjaG-PwOLHq-p4-oI_U2PpVoHpwbMNBx1Fdw7mmNMjSwP7JMIXBTHb8lKsixNYjT153RT3CKpurpGf081QgjqmLHaEhYIlN1MKQm4UfwpxO2ijHTLfjv6J1w_36RijzJShwl9sYMnHpHltyKG_emJYFNxZt8FZ_bgRWzncrRtSW1OBV41v9lPo7KdyPGtlPUcDfVAr-Tl1TfnxV4E4qapzBLFT39clMzdsAhwdHMOq-MDHaVibivd4f', user: { name: 'ArchiFan', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbKZfCy9_Z8IMf1Z8aniOIdJIu1T-e2SynCihJqKpP2ZwTrNkRVBFra1Ff7cDZGYxv9q71v3hRaSOC0RpVrUDA_Uvc1CX-WlFzKjW_rSepnkowsRUTYhCVBGxBJDOgbRyGYU_9TQrxuOV04b8ofPHdjpyy1oVnILyNnCbXv3VPL4Wej-eSjbt0xqTxuEdDLX_4B6JJohBjEJrWjSIo6KDkL8mXJSDGBC32akhSElHwyNxjppbg1eVnS_CT4ov64hVgDDfh5ohoJJx1' }, likes: 543 },
];

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 py-8 md:py-12">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Hero Text & Search */}
          <div className="flex-1 w-full flex flex-col gap-6 lg:pr-8">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Explore the <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#0aa396]">Unseen China</span>
                <br />
                <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-text-secondary">探索未见的中国</span>
              </h2>
              <p className="text-text-secondary text-lg max-w-xl mx-auto lg:mx-0">
                Discover ancient wonders, modern metropolises, and hidden gems. From the Great Wall to the Cyberpunk streets of Chongqing.
              </p>
            </div>

            {/* Search Box */}
            <div className="w-full max-w-xl mx-auto lg:mx-0 shadow-xl shadow-primary/5 rounded-2xl bg-white p-2 border border-[#e7f3f2]">
              <div className="flex items-center w-full h-12 md:h-14">
                <div className="flex items-center justify-center pl-4 pr-2 text-text-secondary">
                  <Search className="w-6 h-6" />
                </div>
                <input 
                  className="w-full h-full bg-transparent border-none focus:ring-0 text-text-main placeholder:text-text-secondary/60 text-base outline-none"
                  placeholder="Where do you want to go? / 你想去哪里？"
                />
                <button className="hidden sm:flex h-10 md:h-12 px-6 items-center justify-center bg-primary hover:bg-primary-dark text-text-main font-bold rounded-xl transition-all">
                  Search
                </button>
              </div>
            </div>

            {/* Filter Chips */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e7f3f2] hover:border-primary/50 transition-colors group">
                <Mountain className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Scenery / 风景</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e7f3f2] hover:border-primary/50 transition-colors group">
                <Utensils className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Food / 美食</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e7f3f2] hover:border-primary/50 transition-colors group">
                <Landmark className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Culture / 文化</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#e7f3f2] hover:border-primary/50 transition-colors group">
                <ShoppingBag className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Shopping / 购物</span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full relative group perspective-1000" onClick={() => navigate('/details')}>
            <div className="relative w-full aspect-[4/3] lg:aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 transform transition-transform hover:scale-[1.01] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10"></div>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtU_dpOst_Oi2SVg9d4KPlgqncNjMbatCRpIq1A-nvS7E2Iok1KPZVyy8KXp9MlpJOKaO5nKhcFo_xc8sRppATCZ5VuRdK88HSehC96EgjuioZV22fKtazSyFkCmHlIhCXHtbvsSM8_dYwm2ohCnMo2C8Osoo1qTc5LhjkvO90QgeJTrDFimP_38nkJIyHo_H6NXTtS9zaZ1-jgIEX27ZkRl08uLlmb8KwYq33FgVUQxziLC_0Bq_X3qndAY6YiPdxin5NCMMrjgyu"
                alt="The Great Wall"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 z-20 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="text-primary w-5 h-5" />
                  <span className="text-sm font-bold bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded text-white">Beijing</span>
                </div>
                <h3 className="text-2xl font-bold">The Great Wall / 长城</h3>
              </div>
            </div>
             {/* Dots Pattern Decoration */}
             <div className="absolute -top-4 -right-4 size-24 opacity-20 z-0 bg-[radial-gradient(#13ecda_2px,transparent_2px)] [background-size:16px_16px]"></div>
          </div>
        </div>
      </section>

      {/* Trending Cities Carousel */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-6 bg-primary rounded-full block"></span>
            Trending Cities / 热门城市
          </h2>
          <a href="#" className="text-sm font-medium text-text-secondary hover:text-primary transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="flex overflow-x-auto gap-4 pb-4 no-scrollbar snap-x snap-mandatory -mx-4 px-4 md:mx-0 md:px-0">
          {CITIES.map((city) => (
            <div key={city.id} className="snap-center shrink-0 w-[280px] h-[360px] relative rounded-xl overflow-hidden group cursor-pointer" onClick={() => navigate('/details')}>
              <img src={city.image} alt={city.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-5 w-full text-white">
                <h3 className="text-xl font-bold mb-1">{city.name} / {city.cnName}</h3>
                <p className="text-sm text-gray-300 line-clamp-2">{city.description}</p>
                <div className="mt-3 flex items-center gap-2 text-xs font-medium text-primary">
                  <span>Explore Guide</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Discovery Grid */}
      <section className="w-full max-w-[1440px] px-4 md:px-10 py-10 bg-white rounded-t-[40px] mt-4 shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.05)] border-t border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Compass className="text-primary w-6 h-6" />
            Discover / 发现
          </h2>
          <div className="flex gap-2">
            <button className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">Recommended</button>
            <button className="bg-transparent text-text-secondary px-3 py-1 rounded-full text-sm hover:bg-gray-100">Latest</button>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {POSTS.map((post) => (
            <article key={post.id} className="break-inside-avoid bg-background-light rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 cursor-pointer">
              <div className="relative w-full overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" />
                {post.isVideo && (
                   <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm">
                      Video
                   </div>
                )}
              </div>
              <div className="p-3">
                <h3 className="font-bold text-text-main text-sm md:text-base leading-tight mb-2 line-clamp-2">
                  {post.title}
                  <span className="block text-xs font-normal text-text-secondary mt-0.5">{post.subtitle}</span>
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-2">
                    <img src={post.user.avatar} alt={post.user.name} className="size-5 rounded-full object-cover" />
                    <span className="text-xs text-text-secondary truncate max-w-[80px]">{post.user.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-secondary">
                    <Heart className="w-4 h-4 group-hover:text-red-500 transition-colors" />
                    <span className="text-xs">{post.likes >= 1000 ? (post.likes / 1000).toFixed(1) + 'k' : post.likes}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="px-6 py-2 border border-gray-200 rounded-full text-sm font-medium text-text-secondary hover:bg-white transition-colors">
            Load More / 加载更多
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;