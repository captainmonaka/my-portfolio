import React, { useState } from 'react';
import { Menu, X, ArrowRight, Layers, Box, Monitor, Users, ChevronRight, ArrowUpRight, Code, Cpu, Globe, PlayCircle, ExternalLink, Award, Briefcase, Building2, Calendar } from 'lucide-react';

// --- Data Definition ---

// Work History (個人の実績として紹介)
const projects = [
  {
    id: 1,
    title: "ホーム上係員向けVR訓練シミュレータ",
    description: "東海道新幹線の安全確保のため、さらなる対応力向上を目的に、没入感のある仮想空間で異常事態を再現し、取扱いを繰り返し訓練できるVR訓練シミュレータを開発しました。各駅への配備により、自駅での訓練頻度向上も期待されています。",
    role: "プロジェクトマネージャー / 開発は主にアイトラッキングなどのリードが必要な機能を担う。",
    roleDetails: [
      "入線から出発まで、業務知識と臨場感の再現",
      "LOD設計による広域マップの描画パフォーマンス最適化",
      "体験シナリオ分岐を管理するステートマシン設計と実装",
      "アイトラッキングデータの取得・可視化ロジックの構築"
    ],
    videoUrl: "https://www.youtube.com/shorts/tOUeK14S30w", 
    images: [
      "/my-portfolio/images/jr-central-img01.jpg",
      "/my-portfolio/images/jr-central-img05.jpg",
      "/my-portfolio/images/jr-central-img06.jpg"
    ],
    color: "from-blue-600 to-cyan-400"
  },
  {
    id: 2,
    title: "グランドハンドリング部門向け VR訓練シミュレータ",
    description: "空港グランドハンドリング業務向けの本格的なVR訓練システム開発。車両特性の理解促進や不安全な状況の模擬体験など、スタッフの習熟度を高め、対応能力、危険予知能力のさらなる向上に寄与するコンテンツを制作しました。",
    role: "プロジェクトマネージャー / 開発は主にプロトタイプや車輛制御などのリードが必要な機能を担当。",
    roleDetails: [
      "特殊車両の物理挙動シミュレーション実装",
      "専用ハードウェアデバイスとの通信・連携処理",
      "複数種類の車輛と専門業務の再現",
      "天候変化や時間帯変更システムの構築"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Clae2WmXaCk",
    images: [
      "/my-portfolio/images/ana-img01.jpg",
      "/my-portfolio/images/ana-img03.jpg",
      "/my-portfolio/images/ana-img00.png"
    ],
    color: "from-sky-600 to-blue-800"
  },
  {
    id: 3,
    title: "建設現場体感VR / メタバース検査",
    description: "建設業界のDXを推進する遠隔検査システムの研究開発。BIMデータと点群データを連携したデジタルツイン環境の構築と、多人数接続システムの開発。また現地のARや映像も活用するマルチプラットフォームの構築。",
    role: "プロジェクトリーダー / 主にプロジェクトの推進と、新デバイスやAR技術等の研究調査を担当。",
    roleDetails: [
      "BIMおよび大規模点群データ（数億点規模）の他システム連携・ストリーミング検証",
      "Photon Fusionを用いた低遅延マルチプレイヤー同期システムの実装",
      "WebRTCを活用した遠隔地間ボイスチャットおよび映像共有機能",
      "MetaQuest / iPad / PC / WEBブラウザ間のクロスプラットフォーム設計"
    ],
    videoUrl: "https://www.youtube.com/watch?v=-QLWBBquItU",
    images: [
      "/my-portfolio/images/shimizu-vr-img04.jpg",
      "/my-portfolio/images/shimizu-vr-img01.png",
      "/my-portfolio/images/shimizu-vr-img02.jpg"
    ],
    color: "from-orange-500 to-amber-600"
  },
  {
    id: 4,
    title: "足場組立・解体 マルチプレイMRトレーニング",
    description: "建設現場へ安全かつ効率的な足場組立・解体研修サービスを提供することを目的とし開発。物理的な足場組立の手順をVR空間内で忠実に再現し、チーム連携が可能なインタラクションシステムを構築。",
    role: "プロジェクトリーダー / 要件定義から、開発、保守までを担当。",
    roleDetails: [
      "組立から解体までの長大な手順、多くの具材の再現",
      "Meta QuestパススルーAPIを用いたMR（複合現実）表示の実装",
      "マルチユーザー環境下での物理演算同期（Network Rigidbody）の最適化",
      "ユーザー行動の３Dログ収集および再生、スコアリング機能"
    ],
    videoUrl: "https://www.youtube.com/watch?v=6oTMEkMnbQA", 
    images: [
      "/my-portfolio/images/ashiba1.png",
      "/my-portfolio/images/ashiba2.png",
      "/my-portfolio/images/ashiba3.png"
    ],
    color: "from-emerald-500 to-teal-600"
  }
];

// Skills & Activities (個人のスキルセット・活動)
const otherWorks = [
  {
    id: 101,
    title: "VisionPro Dev",
    description: "Apple Vision Proの実機を用いた技術検証。LiDARや画像解析を用いた空間コンピューティングアプリの企画提案。",
    imageUrl: "/my-portfolio/images/visionPro.png"
  },
  {
    id: 102,
    title: "カメラ映像配信",
    description: "HLSまたはWebRTCを用いた低遅延ストリーミングシステムの構築。バーチャルカメラ・360度カメラをUnity/Webクライアントへリアルタイム配信の研究開発。",
    imageUrl: "/my-portfolio/images/camera.png"
  },
  {
    id: 103,
    title: "AI Integration",
    description: "CopilotやClaude Code等の開発導入、NotionAIによるRAG実現、アセット系生成AI技術の検証。OpenAI APIを活用した評価アプリ開発など。",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 104,
    title: "Full Stack",
    description: "フルスタックエンジニアとしてアプリ開発に加え、サーバー・ネットワーク構築、外部連携などを一貫して実装可能。保守運用まで含めたフルスタックな対応力。",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 105,
    title: "Hiring / EM",
    description: "エンジニア16名体制のEMとして、採用・評価・スキルマップ策定・技術戦略による組織力強化を推進。採用活動ではカルチャーマッチを見極め、組織全体の底上げを図る。",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 106,
    title: "Project Management",
    description: "大手インフラ企業（航空・鉄道・建設）のDX案件における要件定義、顧客折衝、品質管理および営業支援。PMとして進捗・品質管理、企画見積を遂行。",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 107,
    title: "VR Lecturer",
    description: "VRプロフェッショナルアカデミーや企業向けレクチャーにて講師を担当。社内教育や勉強会主催を通じて、技術の普及とエンジニア育成に貢献。",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 108,
    title: "Personal Dev",
    description: "カメラによるトラッキングアプリなど公開。チームでのVRChatのワールド制作活動も行っていた。現在は、AI開発の勉強も兼ねてインディゲーム開発中。",
    imageUrl: "/my-portfolio/images/down4.png"
  }
];

// Career History (追加データ)
const careerHistory = [
  {
    company: "株式会社積木製作",
    period: "2020.03 - Present",
    desc: "開発部門の責任者として、16名規模のエンジニア組織のマネジメント及びプロジェクト統括を担当。採用計画の策定・実行、評価・育成、1on1等の組織マネジメントに加え、開発環境のモダン化やAIツール導入等の技術戦略を推進。また、Unityを用いた産業用VR/メタバースシステムの開発リードや営業支援（技術提案、見積作成）も実施。"
  },
  {
    company: "株式会社ドワンゴ",
    period: "2016.06 - 2020.02",
    desc: "社内およびグループ会社向けにシステム導入および開発部門に所属。主にRPAや管理部門向けシステムの開発・コンサル・保守運用を担当。"
  },
  {
    company: "株式会社神奈中情報システム",
    period: "2010.04 - 2016.05",
    desc: "自社パッケージ製品の営業から開発、運用までを一貫して担当。プログラミング、ネットワーク構築、障害対応に加え、社内SEとしてグループ会社のシステム改善や運用保守も実施。"
  }
];

// --- Components ---

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-white font-bold text-xl tracking-tighter">
              XR DEV <span className="text-cyan-400">PORTFOLIO</span>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Home</a>
              <a href="#profile" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Profile</a>
              <a href="#projects" className="text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-md text-sm font-medium transition-colors">Projects</a>
              <a href="#activities" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors">Activities</a>
              {/* Contact Me Removed */}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#profile" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Profile</a>
            <a href="#projects" className="text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">Projects</a>
            <a href="#activities" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Activities</a>
            {/* Contact Me Removed */}
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-950 print:h-auto print:py-12 print:bg-white">
    {/* Abstract Background (Print: Hidden) */}
    <div className="absolute inset-0 w-full h-full print:hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 mb-6 tracking-tight print:text-black print:text-4xl">
        Engineering the Future<br />of XR Experience.
      </h1>
      <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-400 mb-10 print:text-gray-600 print:text-lg">
        XR Engineer / Engineering Manager<br className="hidden md:block" />
        「xR技術で社会を便利に」「ユーザーに感動を」
      </p>
      {/* Hide buttons on print */}
      <div className="flex justify-center gap-4 print:hidden">
        <a href="#projects" className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-slate-900 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-lg shadow-cyan-500/20">
          View My Work <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </div>
  </section>
);

const ProjectSection = ({ project, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <div className="py-24 border-b border-slate-800 last:border-0 print:py-8 print:border-gray-200 print:break-inside-avoid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Project Info */}
          <div className={`lg:col-span-4 lg:sticky lg:top-32 order-1 print:static`}>
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4 print:text-black print:text-xl">{project.title}</h3>
                
                {/* Video Link Button (Hidden on Print) */}
                {project.videoUrl && (
                  <a 
                    href={project.videoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full transition-colors group print:hidden"
                  >
                    <PlayCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                    Watch Video
                  </a>
                )}
              </div>
              
              <p className="text-gray-300 leading-relaxed text-lg print:text-gray-700 print:text-sm">
                {project.description}
              </p>
              
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800 print:bg-white print:border-gray-300 print:p-4">
                <div className="mb-4 pb-4 border-b border-slate-800 print:border-gray-300">
                   <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-1 print:text-blue-700">My Role</h4>
                   <p className="text-white font-medium text-lg print:text-black print:text-base">{project.role}</p>
                </div>
                
                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 print:text-gray-600">Key Contributions</h4>
                <ul className="space-y-3">
                  {project.roleDetails.map((point, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300 print:text-gray-800">
                      <ChevronRight className="h-5 w-5 text-cyan-500 mr-2 flex-shrink-0 mt-0.5 print:text-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Project Images (Scrollable Column) */}
          <div className="lg:col-span-8 order-2 space-y-8 print:space-y-4">
            {project.images.map((img, imgIdx) => (
              <div key={imgIdx} className="group relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800 print:border-gray-200 print:shadow-none print:break-inside-avoid">
                <div className="aspect-w-16 aspect-h-9 w-full bg-slate-800 print:bg-gray-100">
                  <img 
                    src={img} 
                    alt={`${project.title} view ${imgIdx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 print:transform-none"
                  />
                </div>
                {/* Overlay on hover (Hidden on print) */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none print:hidden"></div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};

const Works = () => {
  return (
    <section id="projects" className="bg-slate-950 print:bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pb-12 print:py-8">
        <div className="mb-12 print:mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 print:text-black print:text-2xl print:mb-2">Work Experience</h2>
          <p className="text-gray-400 max-w-2xl text-lg print:text-gray-600 print:text-sm">
            主要な開発実績および、エンジニアとして参画したプロジェクトのハイライトです。
          </p>
        </div>
      </div>

      {/* Projects Stack */}
      <div>
        {projects.map((project, index) => (
          <ProjectSection key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const Others = () => {
  return (
    <section id="activities" className="py-24 bg-slate-900 border-t border-slate-800 print:bg-white print:py-8 print:border-gray-200 print:break-before-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 print:mb-4">
          <h2 className="text-3xl font-bold text-white mb-4 print:text-black print:text-2xl">Skills & Activities</h2>
          <p className="text-gray-400 print:text-gray-600">R&D、組織開発、その他の活動領域について</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 print:grid-cols-4 print:gap-4">
          {otherWorks.map((work) => (
            <div key={work.id} className="group bg-slate-950 rounded-xl border border-slate-800 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full print:bg-white print:border-gray-300 print:break-inside-avoid">
              <div className="h-40 relative overflow-hidden flex-shrink-0 print:h-24">
                <img 
                  src={work.imageUrl} 
                  alt={work.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 print:transform-none"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors print:hidden"></div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col print:p-3">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors print:text-black print:text-sm print:mb-1">
                  {work.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed print:text-gray-800 print:text-xs">
                  {work.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Profile = () => (
  <section id="profile" className="py-24 bg-slate-900 border-b border-slate-800 print:bg-white print:py-8 print:border-none print:break-after-page">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
        <div className="mb-10 lg:mb-0">
          <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-8 rounded-2xl border border-slate-700 h-full print:bg-white print:border-gray-300 print:p-6">
            <Code className="w-16 h-16 text-cyan-400 mb-6 print:text-blue-600 print:w-10 print:h-10" />

            {/* 名前と日付 */}
            <div className="mb-6 border-b border-slate-700/50 pb-6 print:border-gray-300">
               <h3 className="text-3xl font-bold text-white mb-2 print:text-black">篠塚 起己央</h3>
               <p className="text-cyan-400 font-medium mb-1 print:text-blue-700">Kikio Shinotsuka</p>
               <p className="text-xs text-gray-500 print:text-gray-600">2026年1月 現在</p>
            </div>

            <h4 className="text-xl font-bold text-white mb-4 print:text-black">Vision & Stance</h4>
            <p className="text-gray-300 leading-relaxed mb-6 print:text-gray-800">
              「xR技術(VR/AR/MR)をもっと活用し、社会を便利にしたい」「ユーザーに感動してほしい」<br/>
              この想いを原動力に、エンジニアとしてユーザーに「ありがとう！」と言われるサービスを作ることを目指しています。<br/><br/>
              フルスタックエンジニアとしてUnity/C#を用いた開発に加え、AWS等のインフラ構築やAI技術の導入も積極的に行い、事業成功に必要な技術は何でも取り入れるスタンスで取り組んでいます。
            </p>
            
            {/* 保有資格を控えめに表示 */}
            <div className="text-sm text-gray-400 print:text-gray-600">
              <span className="text-slate-500 mr-2 print:text-gray-800">保有資格:</span>
              応用情報技術者試験
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-6 print:text-black print:text-xl">Core Competence</h2>
          <div className="space-y-6 mb-12 print:mb-6">
            {[
              { 
                title: "Full Stack Development", 
                desc: "Unity/C#によるメタバース・シミュレーター開発から、サーバー・ネットワーク構築、AI導入までを一貫して実装。", 
                icon: <Code /> 
              },
              { 
                title: "Engineering Management", 
                desc: "16名体制のEMとして採用・評価・スキルマップ策定を遂行。技術戦略による組織力強化を推進。", 
                icon: <Users /> 
              },
              { 
                title: "Project Management", 
                desc: "大手インフラ企業（航空・鉄道・建設）のDX案件における要件定義、顧客折衝、品質管理および営業支援。", 
                icon: <Briefcase /> 
              }
            ].map((item, i) => (
              <div key={i} className="flex print:break-inside-avoid">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-slate-800 text-cyan-400 border border-slate-700 print:bg-white print:border-gray-300 print:text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-white print:text-black">{item.title}</h4>
                  <p className="mt-2 text-gray-400 print:text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Career History (Added section) */}
          <div className="pt-6 border-t border-slate-800 print:border-gray-300">
             <h4 className="text-xl font-bold text-white mb-6 flex items-center print:text-black">
               <Building2 className="w-5 h-5 mr-2 text-cyan-400 print:text-blue-600" /> Career History
             </h4>
             <div className="space-y-6">
                {careerHistory.map((career, i) => (
                  <div key={i} className="relative pl-6 border-l border-slate-800 hover:border-cyan-500/50 transition-colors print:border-gray-300 print:break-inside-avoid">
                    <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-slate-800 border border-slate-600 print:bg-white print:border-gray-400"></div>
                    <div className="mb-1 flex flex-wrap items-baseline gap-2">
                      <h5 className="text-white font-bold text-base print:text-black">{career.company}</h5>
                      <span className="text-xs text-cyan-400 font-mono flex items-center print:text-blue-700">
                         <Calendar className="w-3 h-3 mr-1" />{career.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed print:text-gray-800">
                      {career.desc}
                    </p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-950 py-12 border-t border-slate-900 print:hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <p className="text-center text-base text-gray-400">
          
        </p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-cyan-500 selection:text-white print:bg-white print:text-black">
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 15mm;
          }
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
        }
      `}</style>
      <Navigation />
      <Hero />
      <Profile />
      <Works />
      <Others />
      <Footer />
    </div>
  );
}