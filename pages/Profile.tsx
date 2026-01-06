import React from 'react';
import { Post } from '../types';
import { Globe, User, Ticket, Heart, Wallet, History, Settings, Bell, Menu, Train, Edit, Grid, Map, Plus } from 'lucide-react';

const USER_POSTS: Post[] = [
  { id: '1', title: 'Sunset at Mutianyu', subtitle: '慕田峪长城日落', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCueeu8Gznst-Etrkj3I2XhHro4-hx_3kRbDjn271kFDkYtlncLhux3IGhlDtglYdhtGwJzyi6gqLOotYFs7RPgYK02Mf7MsSNjJipCo9wd5-oELS6wKUN1Yp2BqMfDCF9GZME-ts-wr6h-gFktnrNMUyjiY3oPboqHypCSw1V5SmbMhfvaDAJK9RgHsyu6wrJEy6Pumh5NeLmM5wljszdAktuOSL86euLtsPdygJcJaf6Luus1IRqEeBGfnpg-YcDW7pzBAMsLb_zL', user: { name: 'Alex Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSfVy1z4BXi8RAdPvBcCjg0fm3MM8BqsBnMYpf7wN0eiJxf_yA_qojHsje08jAn3sp6VEndJCbi35vucyFNs0jyjIvtZKCGvl5WaTajZ32t1JatTpg4TBlWL9AUdYbZ4owI6YkJP-neKGXcgqFwcsGQhhZj_bq6WGN3gNq0Yf4TwtKgN_Ho4ZssvyYtxsBs2OLJ9chiKb5E3IjhLgEMP8Ij0HkWInuV_OJQRyiPtQL7sUFoQGGbRKrRboRoga5W2AyzgX38ItN9VU' }, likes: 342, isVideo: false },
  { id: '2', title: 'Chengdu Panda Base', subtitle: '大熊猫繁育研究基地', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCccGYFuybctfTcnC5wVs2l0J7LU6zF3lIk5Hcha2DpO3Aktu-0EgC4n3k9TTLSyjaliugqyBv1sELhUm_kpjuA2T_pHAKzWLv0ZrTAUbPeqODjqtW0B2lDJ7lBYirs-bvdFeonFiZ8KBhhbFlILuNEAHuoxm-FGUwayn4DgkQK0Ii5RHrgA8piq1tZj_wVzZWoDM0o-Hdrk6jBn0KPi7m6u835CYkqYJ4jzotchYAjlMX6pkXF5gVjFfDYDhTouE1k-D0kuHC_23zp', user: { name: 'Alex Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSfVy1z4BXi8RAdPvBcCjg0fm3MM8BqsBnMYpf7wN0eiJxf_yA_qojHsje08jAn3sp6VEndJCbi35vucyFNs0jyjIvtZKCGvl5WaTajZ32t1JatTpg4TBlWL9AUdYbZ4owI6YkJP-neKGXcgqFwcsGQhhZj_bq6WGN3gNq0Yf4TwtKgN_Ho4ZssvyYtxsBs2OLJ9chiKb5E3IjhLgEMP8Ij0HkWInuV_OJQRyiPtQL7sUFoQGGbRKrRboRoga5W2AyzgX38ItN9VU' }, likes: 120 },
  { id: '3', title: 'Cyberpunk Shanghai', subtitle: '魔都夜景', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdpADtKvPiGx5dj0DSj6Wba1ZITzJckTrz89hEyx4jrt7d6xzi5usKVXw3x_CRWri7YxSrAy42QQTQXKyD5oa6A5l2521zHONO7SnIn-LyOwWC-60KWxUjhTCxUXSh6SXZYu6QTVpKJENBEx9L0vccnhYVwyILmB_8kb-A9dpxrOP_DPnYPXiVF-A1_dMFUUtIup5oKQEfbKC0ljLwYWvWt9mdaJPGf5oSNma5MsERHgmMdfudOUt_pleJBTEXXrOBGCJp6VhoKneu', user: { name: 'Alex Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSdJXeeX2tIx6KdwjBadCx0InGl3YiCn3htUMkTmE33ad3qvq2G0q_9NupDZALmYLEApyIXhg0ggp97a2qIVKhWw30rHer-eN54m5odcId3QWFb8C1y9mnZNwxYEiclJxK5TEFFY2yg9ZoL1oSw5ye_Z7V3gx_Ud3w03ELQyfeRsatINsTQMN5rYU6y4o_rs9oaV4tEmTZmZQD-0suLxs1ePh4ZHaQXiIuthfBszqteBUJJuWB_Sisr0zFz_qN_Ms4uDSywqWZXHYx' }, likes: 892 },
  { id: '4', title: 'Authentic Hotpot', subtitle: '重庆老火锅', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZGUkqeSHJ9SGsmdEWJCioh9tztybLFQ_MQ_L_a11ax5OETpqQYsD3683j8NttP8PTIFWTk2jmAfFsz245x_-03dMaPrY2NqXgOm0rkxiWHtTrLKVTKybT6EXEkIiMcf3gK750Sb7RmaUJXKKT78fVf49XSt9PsKWQdG6e7rP__Y-YBumvWQLVt8HkidjuOYKMj0JlJz3R4HLh0Mpc2X2GfoWHSovSgyJq0pr7wWoNWJ_-29j5Vm2htCxV8K71I5jEszBqh7j_CR89', user: { name: 'Alex Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSfVy1z4BXi8RAdPvBcCjg0fm3MM8BqsBnMYpf7wN0eiJxf_yA_qojHsje08jAn3sp6VEndJCbi35vucyFNs0jyjIvtZKCGvl5WaTajZ32t1JatTpg4TBlWL9AUdYbZ4owI6YkJP-neKGXcgqFwcsGQhhZj_bq6WGN3gNq0Yf4TwtKgN_Ho4ZssvyYtxsBs2OLJ9chiKb5E3IjhLgEMP8Ij0HkWInuV_OJQRyiPtQL7sUFoQGGbRKrRboRoga5W2AyzgX38ItN9VU' }, likes: 204 },
  { id: '5', title: 'Longjing Tea Village', subtitle: '龙井问茶', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0hY-Tn8xMQV7s0t70A7d07t9OW0CRGNkFsWoSQSCXaMoRJEoJu5gTvRyL9KGDqsrVP8NguYJbDprKEcaizgXWBdmX4LCRSR049C4OrRFeJOlFkp7UV6JCWYypdzDMl49_a2_CNK9PjHJeLY-DWsjN2cseCw9Qx6JhAQ3u1JmHGT8P62WeUFGNKX4cAYquSH3045A4n0eIvIMTZRut6QAO9Z70AiMOZed1xrnVWh1TyHu0ZXfWUi6pz7f2Z8gaJ1lPIxAl-Ue2D3Js', user: { name: 'Alex Chen', avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDquq8ehjSDCjNy4-iYhLZFVdk7CjecjGnP5HBtGD23J5NBLr8iB8exjiNFjGHAXm6iS50-M_Pw_K5odFojR4--ENB7_pUf-xiqFuW5lmzjReyOYMKN-bfEVSEXBaN3N-oMr5nzl09_k4gwp4SrXVzKUH2ARTEo9Pd2sGzNRriu-bEPH9JWzYZyOeCde_p6gmbe-syedHtAk0ndjAcl3wcinzhigo2ww2TzLQzquHbzOjZBmjYOHOdEnHZfeOZbLyyHV2_QIvFh2vnf' }, likes: 156 },
];

const Profile: React.FC = () => {
  return (
    <div className="flex h-screen w-full flex-row text-white overflow-hidden bg-background-dark">
      {/* Sidebar Navigation */}
      <aside className="hidden md:flex w-72 flex-col border-r border-[#234845] bg-[#0d1a19] h-full flex-shrink-0">
        <div className="p-6 pb-2">
          <div className="flex items-center gap-3 text-white mb-8">
            <Globe className="size-8 text-primary" />
            <h2 className="text-xl font-bold tracking-tight">TravelChina</h2>
          </div>
          <nav className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all">
              <User className="w-5 h-5 fill-current" />
              <div className="flex flex-col">
                <span className="text-sm font-bold leading-none">Profile</span>
                <span className="text-[10px] opacity-80 leading-none mt-1">个人资料</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-[#92c9c5] hover:text-white transition-all group">
              <Ticket className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-none">Bookings</span>
                <span className="text-[10px] opacity-60 leading-none mt-1">我的预订</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-[#92c9c5] hover:text-white transition-all group">
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-none">Collections</span>
                <span className="text-[10px] opacity-60 leading-none mt-1">我的收藏</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-[#92c9c5] hover:text-white transition-all group">
              <Wallet className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-none">Wallet</span>
                <span className="text-[10px] opacity-60 leading-none mt-1">钱包/卡券</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/5 text-[#92c9c5] hover:text-white transition-all group">
              <History className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-medium leading-none">History</span>
                <span className="text-[10px] opacity-60 leading-none mt-1">历史行程</span>
              </div>
            </a>
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-[#234845]">
          <a href="#" className="flex items-center gap-3 px-2 text-[#92c9c5] hover:text-white transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings / 设置</span>
          </a>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full relative overflow-hidden bg-background-dark">
        {/* Top Header */}
        <header className="h-20 border-b border-[#234845] flex items-center justify-between px-8 bg-[#112221]/80 backdrop-blur-md sticky top-0 z-20">
          <div className="flex-1 max-w-lg">
             {/* Search input placeholder */}
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-2 text-[#92c9c5] hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-[#112221]"></span>
            </button>
            <button className="flex items-center justify-center h-9 px-4 rounded-lg bg-surface-dark border border-[#234845] hover:border-primary/50 text-white text-xs font-bold tracking-wider transition-all">
              EN / 中文
            </button>
            <div className="md:hidden size-10 bg-surface-dark rounded-full flex items-center justify-center text-white">
              <Menu className="w-5 h-5" />
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto bg-background-dark p-6 md:p-10 scroll-smooth">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
              <div className="flex gap-6 items-center">
                <div className="relative group cursor-pointer">
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8W-e0fMH9xyKdKw3uLdi68RUWb5x396AXeyS8iCAqHuCR3uNi7QAfl7CuHxtvcmBXQovI0H8aJ6naSWTOpY5LlyP34oSJLPhM0l2IoL7DZaqhtk52SU3gcu1-Uu74q3U7bssqZPgIyA0T6nQ9UdEYFPTyXaKpGhNa0OOi-QNxVq68RpTUdKUkOGwlkPJaOdl-Ay9uA7xYR8c4HRdkr-8zLCPpX7NrZAIA0P54nNt5CVhUPhwpJDJ9Giv3dXwUVj8a2i5JXUrF9n0R" alt="Profile" className="size-28 md:size-32 rounded-full object-cover border-4 border-surface-dark shadow-2xl" />
                  <div className="absolute bottom-1 right-1 bg-primary text-[#112221] rounded-full p-1.5 border-4 border-[#112221]">
                    <Edit className="w-3 h-3 font-bold block" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Alex Chen</h1>
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">GOLD MEMBER</span>
                  </div>
                  <p className="text-[#92c9c5] text-base font-light">Exploring the Middle Kingdom, one city at a time.</p>
                  <p className="text-[#5e8e8a] text-sm">探索中国，一次一座城市。</p>
                  <div className="flex gap-4 mt-3">
                    <div className="flex gap-1.5 items-baseline">
                      <span className="text-white font-bold text-lg">1.2k</span>
                      <span className="text-[#5e8e8a] text-xs">Followers</span>
                    </div>
                    <div className="flex gap-1.5 items-baseline">
                      <span className="text-white font-bold text-lg">45</span>
                      <span className="text-[#5e8e8a] text-xs">Following</span>
                    </div>
                    <div className="flex gap-1.5 items-baseline">
                      <span className="text-white font-bold text-lg">12</span>
                      <span className="text-[#5e8e8a] text-xs">Cities</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto mt-2 md:mt-0">
                <button className="flex-1 md:flex-none h-10 px-6 rounded-lg bg-primary hover:bg-[#0fd6c5] text-[#112221] text-sm font-bold transition-colors shadow-[0_0_15px_rgba(19,236,218,0.3)]">
                  Edit Profile / 编辑
                </button>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="sticky top-0 z-10 pt-2 -mx-2 px-2 bg-background-dark/95 backdrop-blur-sm">
              <div className="border-b border-[#234845] flex gap-8">
                <button className="pb-3 border-b-2 border-primary text-white font-medium text-sm flex items-center gap-2">
                  <Grid className="w-5 h-5" />
                  Collections / 收藏
                </button>
                <button className="pb-3 border-b-2 border-transparent text-[#92c9c5] hover:text-white transition-colors font-medium text-sm flex items-center gap-2">
                  <Ticket className="w-5 h-5" />
                  Bookings / 订单
                </button>
                <button className="pb-3 border-b-2 border-transparent text-[#92c9c5] hover:text-white transition-colors font-medium text-sm flex items-center gap-2">
                  <Map className="w-5 h-5" />
                  Footprints / 足迹
                </button>
              </div>
            </div>

            {/* Upcoming Trip Banner */}
            <div className="w-full bg-gradient-to-r from-[#1A302E] to-[#142624] rounded-2xl p-1 border border-[#234845] overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-full bg-primary/5 -skew-x-12 translate-x-10"></div>
              <div className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary border border-primary/20 shrink-0">
                    <Train className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold bg-primary text-[#112221] px-1.5 py-0.5 rounded">UPCOMING</span>
                      <span className="text-[#92c9c5] text-xs">Tomorrow, 09:30 AM</span>
                    </div>
                    <h3 className="text-white font-bold text-lg">High-Speed Train G320: Beijing → Xi'an</h3>
                  </div>
                </div>
                <button className="px-5 py-2.5 rounded-lg bg-surface-dark hover:bg-[#234845] border border-[#234845] text-white text-sm font-medium transition-colors whitespace-nowrap">
                   View Ticket / 查看车票
                </button>
              </div>
            </div>

            {/* Masonry Grid */}
            <div className="columns-2 md:columns-3 gap-6 space-y-6">
              {USER_POSTS.map((post) => (
                <div key={post.id} className="break-inside-avoid relative group cursor-pointer">
                  <div className="rounded-xl overflow-hidden bg-surface-dark border border-[#234845] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                    <div className="relative w-full">
                       <img src={post.image} alt={post.title} className="w-full h-auto object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                       <div className="absolute bottom-3 left-3 right-3">
                          <h3 className="text-white font-bold text-lg leading-tight mb-1">{post.title}</h3>
                          <p className="text-gray-300 text-xs font-light">{post.subtitle}</p>
                       </div>
                       <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                          <Heart className="w-3 h-3 text-white fill-white" />
                          <span className="text-white text-[10px] font-bold">{post.likes}</span>
                       </div>
                    </div>
                    <div className="p-3 flex items-center justify-between">
                       <div className="flex items-center gap-2">
                          <img src={post.user.avatar} className="size-5 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all" alt="User" />
                          <span className="text-[#92c9c5] text-xs">{post.user.name}</span>
                       </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Floating Action Button */}
        <button className="absolute bottom-8 right-8 size-14 rounded-full bg-primary hover:bg-[#0fd6c5] text-[#112221] shadow-[0_0_20px_rgba(19,236,218,0.4)] flex items-center justify-center transition-all hover:scale-110 z-30">
          <Plus className="w-8 h-8" />
        </button>
      </main>
    </div>
  );
};

export default Profile;