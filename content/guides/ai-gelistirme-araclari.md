---
title: AI Geliştirme Araçları
seo_title: AI Geliştirme Araçları | Samet Tenekeci
description: AI skill, plugin, MCP ve destekleyici geliştirme araçlarını bir araya getiren pratik katalog.
lang: tr
permalink: /ai-gelistirme-araclari/
canonical_url: https://smtnkc.github.io/ai-gelistirme-araclari/
alternate_en: /ai-development-tools/
alternate_tr: /ai-gelistirme-araclari/
og_locale: tr_TR
og_image: /ai-development-tools-og.png
blog_featured: true
blog_order: 30
table_mode: catalog
updatedAt: "2026-09-02"
---

# AI Geliştirme Araçları

AI skill, plugin, MCP sunucusu ve destekleyici geliştirme araçlarını bir araya getiren pratik katalog. Her kayıt aracın ne yaptığını ve genel olarak ne zaman yararlı olduğunu özetler.

| Alan | Araç | Rol | Ne zaman |
| --- | --- | --- | --- |
| Runtime raporlama | [@sentry/react-native](https://docs.sentry.io/platforms/react-native/) | React Native crash ve çalışma zamanı hatalarını Sentry’ye gönderir. | Bir mobil uygulamada production hata raporlama gerektiğinde |
| UI üretimi | [21st MCP](https://21st.dev/mcp) | Coding agent’lara UI bileşenleri ve arayüz üretim iş akışları sağlar. | Web arayüzlerini hızla oluştururken veya alternatifleri araştırırken |
| Web araştırması | [Agent Reach](https://github.com/Panniantong/Agent-Reach) | Agent’lara web siteleri ve çevrimiçi platformlar için birleşik erişim sağlar. | Araştırma birden fazla web kaynağına veya servise yayıldığında |
| UI/UX rehberliği | [anti-ui-slop](https://github.com/uizze/uizze/tree/main/skills/anti-ui-slop) | Jenerik AI arayüz kalıplarını tespit eder ve önler. | AI tarafından üretilen arayüzleri incelerken veya iyileştirirken |
| Kimlik doğrulama | [Clerk](https://clerk.com/) | Yönetilen authentication ve kullanıcı yönetimi sağlar. | Bir uygulamada ayrı bir kimlik platformu gerektiğinde |
| Güvenlik inceleme | [claude-code-security-review](https://github.com/anthropics/claude-code-security-review) | Pull request değişiklikleri üzerinde AI destekli güvenlik incelemesi çalıştırır. | Güvenlik açısından hassas değişikliklerde ve sürüm öncesi incelemelerde |
| Agent kurulumu | [claude-code-setup](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/claude-code-setup) | Kod tabanını inceleyip Claude Code otomasyonları ve yapılandırmaları önerir. | İlk agent kurulumunda veya araç seti denetiminde |
| Kalıcı hafıza | [claude-mem](https://github.com/thedotmack/claude-mem) | Coding oturumları arasında sıkıştırılmış bağlamı kaydeder ve geri çağırır. | Çalışmanın çok sayıda oturum boyunca devam etmesi gerektiğinde |
| Kod inceleme | [code-review plugin](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/code-review) | Tekrarlanabilir doğruluk, mimari, eşzamanlılık ve edge-case inceleme ölçütleri uygular. | Pull request veya branch incelemelerinde |
| Kod tabanı bağlamı | [codebase-memory-mcp](https://github.com/DeusData/codebase-memory-mcp) | Agent sorguları için kod ilişkilerinin kalıcı yapısal bilgisini oluşturur. | Büyüyen bir kod tabanında gezinirken veya değişiklik yaparken |
| Otomatik inceleme | [CodeRabbit](https://docs.coderabbit.ai/) | Bağlama duyarlı otomatik pull request incelemeleri ve öneriler ekler. | Ekipler sürekli inceleme geri bildirimi istediğinde |
| Güncel dokümantasyon | [Context7 MCP](https://github.com/upstash/context7) | Coding agent’lara güncel kütüphane ve API dokümantasyonu sağlar. | Uygulama değişen framework API’lerine bağlı olduğunda |
| Agent framework’ü | [Everything Claude Code (ECC)](https://github.com/affaan-m/everything-claude-code) | Geniş bir agent, skill, hook, kural ve iş akışı framework’ü sunar. | Kapsamlı bir agent çalışma sistemi kurarken |
| UI/UX rehberliği | [Emil Kowalski Skills](https://github.com/emilkowalski/skills) | Design engineering, etkileşim ve animasyon işçiliği rehberliği sağlar. | Etkileşim ayrıntılarını ve motion tasarımını iyileştirirken |
| Mobil rehberlik | [Expo Agent Skills](https://docs.expo.dev/skills/) | Expo Router, native UI, EAS, upgrade, debugging ve deployment prosedürleri sağlar. | Expo ve React Native geliştirirken |
| Mobil erişim | [Expo MCP](https://docs.expo.dev/mcp/) | Agent’lara güncel Expo dokümantasyonu, EAS verileri, loglar ve simülatör araçları sağlar. | Expo ve EAS işlemlerinde |
| Mobil paket | [Expo Plugin](https://docs.expo.dev/agents/) | Expo’ya özel agent rehberliğini ve araçlarını tek pakette birleştirir. | AI destekli Expo iş akışı kurarken |
| Design-to-code | [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) | Agent’lara yapılandırılmış tasarım bağlamı ve Figma canvas iş akışları sağlar. | Uygulama Figma tasarımlarından ilerlediğinde |
| Skill keşfi | [Find Skills](https://github.com/vercel-labs/skills/tree/main/skills/find-skills) | Açık agent-skill ekosisteminde arama yapar ve uygun skill’lerin kurulmasına yardım eder. | Yeniden kullanılabilir agent yetenekleri ararken |
| Web tasarımı | [Frontend Design](https://github.com/anthropics/skills/tree/main/skills/frontend-design) | Ayırt edici, production-ready web arayüzlerinin oluşturulmasına rehberlik eder. | Web sayfası ve bileşeni oluştururken veya yeniden tasarlarken |
| Repository iş akışı | [GitHub MCP](https://github.com/github/github-mcp-server) | Agent’ların repository, issue, pull request, review ve GitHub API işlemleri yapmasını sağlar. | GitHub işlemleri çalışma akışının parçası olduğunda |
| Kod grafiği | [Graphify](https://graphify.com/) | Kod bilgi grafiği oluşturur ve agent’ların kullanımına açar. | Yapısal kod sorguları graph bağlamına ihtiyaç duyduğunda |
| Geliştirici ergonomisi | [Headroom](https://github.com/patwalls/headroom) | Claude Code kota ve context headroom bilgisini görünür kılar. | Kullanım ve context görünürlüğü günlük çalışmayı kolaylaştırdığında |
| Kodla video üretimi | [HyperFrames](https://github.com/heygen-com/hyperframes) | Agent’ların ve geliştiricilerin HTML, CSS ve JavaScript ile deterministik MP4 video ve hareketli grafik üretmesini sağlar. | Programatik video, dinamik motion grafik veya AI agent destekli video iş akışları oluştururken |
| UI/UX kalitesi | [Impeccable](https://github.com/pbakaus/impeccable) | Tasarım rehberliği ve anti-pattern kontrolleriyle arayüz kalitesini denetler ve iyileştirir. | Arayüz eleştirisi ve polish aşamasında |
| Çok modelli karar | [LLM Council](https://github.com/karpathy/llm-council) | Birden çok modelin görüşünü toplar ve ortak bir karara dönüştürür. | Bağımsız bakış açılarından yararlanacak belirsiz kararlarda |
| Mobil uçtan uca test | [Maestro](https://maestro.mobile.dev/) | Repository’de tutulan test tanımlarından native mobil UI akışları çalıştırır. | Tamamlanan mobil kullanıcı akışlarını doğrularken |
| Doküman alımı | [MarkItDown MCP](https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp) | Desteklenen dosya ve URL’leri MCP aracı üzerinden Markdown’a dönüştürür. | Agent’ın ofis dosyaları, PDF’ler veya web kaynakları alması gerektiğinde |
| Kod inceleme | [Matt Pocock code-review](https://github.com/mattpocock/skills/tree/main/skills/engineering/code-review) | Değişiklikleri repository standartlarına ve kaynak spesifikasyona göre inceler. | Spesifikasyon odaklı kod incelemelerinde |
| Mühendislik skill’leri | [mattpocock-skills](https://github.com/mattpocock/skills) | Spesifikasyon, uygulama, test, debugging ve inceleme için iş akışları sunar. | Daha geniş bir AI destekli mühendislik playbook’u gerektiğinde |
| Mobil stillendirme | [NativeWind](https://www.nativewind.dev/) | React Native için utility class tabanlı stillendirme sunar. | Mobil uygulamada utility-first yaklaşım kullanırken |
| Yazı kalitesi | [no-ai-slop](https://github.com/petergyang/no-ai-slop) | AI metnindeki yaygın üslup izlerini temizler ve açıklığı artırır. | AI destekli metni son hâline getirirken |
| Kişisel bilgi yönetimi | [Obsidian Second Brain](https://github.com/D0miH/obsidian-second-brain-research-skills) | Obsidian tabanlı bilgi kasası için agent iş akışları ekler. | Agent araştırma notlarını veya kişisel bilgi tabanını yönetirken |
| Web uçtan uca test | [Playwright MCP](https://github.com/microsoft/playwright-mcp) | Agent’ların gerçek tarayıcı akışlarını MCP üzerinden çalıştırıp doğrulamasını sağlar. | Web yolculuklarını test ederken veya otomatikleştirirken |
| Workspace yönetimi | [pnpm workspaces](https://pnpm.io/workspaces) | Bir repository içindeki birden fazla paketi yönetir. | Projede ilişkili uygulamalar veya paketler bulunduğunda |
| Kod disiplini | [Ponytail](https://github.com/DietrichGebert/ponytail) | Agent tarafından yazılan kodu bilinçli biçimde küçük tutar ve erken soyutlamayı sınırlar. | Sadelik ve minimal uygulama öncelikli olduğunda |
| Ürün analitiği | [PostHog](https://posthog.com/docs/product-analytics) | Ürün event’lerini toplar; funnel, cohort, replay, flag ve deney özellikleri sunar. | Ürün davranışını ölçerken veya deney çalıştırırken |
| Mobil bileşenler | [React Native Reusables](https://reactnativereusables.com/) | Yeniden kullanılabilir React Native arayüz bileşenleri sağlar. | Tutarlı bir mobil bileşen sistemi kurarken |
| Hata inceleme | [Sentry MCP](https://github.com/getsentry/sentry-mcp) | Agent’ların Sentry issue ve event’lerini sorgulayıp incelemesini sağlar. | Production debugging ve incident araştırmalarında |
| UI bileşen erişimi | [shadcn/ui MCP](https://ui.shadcn.com/docs/registry/mcp) | Agent’ların shadcn registry bileşenlerini, bloklarını ve şablonlarını doğrudan arayıp projeye eklemesini sağlar. | AI destekli geliştirme sırasında shadcn bileşenlerini ve bloklarını projeye doğrudan kurarken |
| Web UI rehberliği | [shadcn/ui Skills](https://ui.shadcn.com/docs/skills) | Coding agent’lara shadcn/ui bileşenleri, CLI komutları, proje konfigürasyonu ve tasarım kalıpları rehberliği sağlar. | shadcn/ui ile React arayüzleri oluştururken, CLI komutları çalıştırırken veya bileşen mimarisi kurarken |
| Skill yazımı | [skill-creator](https://github.com/anthropics/skills/tree/main/skills/skill-creator) | Yeniden kullanılabilir agent skill’leri oluşturur, günceller ve değerlendirir. | Tekrarlanan bir iş akışını skill’e dönüştürürken |
| Design-to-code | [Stitch MCP](https://github.com/google-labs-code/stitch-sdk) | Agent’ları Google Stitch tasarımlarına, üretilen ekranlara ve koda bağlar. | Stitch üzerinden arayüz prototiplerken veya uygularken |
| Güvenlik testi | [Strix](https://www.strix.ai/open-source-pentesting) | Uygulama ve repository’lere karşı AI destekli penetration test çalıştırır. | Yetkili güvenlik değerlendirmelerinde |
| Backend rehberliği | [Supabase Agent Skills](https://supabase.com/docs/guides/ai-tools/ai-skills) | Auth, RLS, Postgres, Storage, Realtime ve Edge Function kalıplarını sağlar. | Supabase backend geliştirirken |
| Kimlik doğrulama | [Supabase Auth](https://supabase.com/docs/guides/auth) | Supabase üzerinde authentication ve yetkilendirme sağlar. | Supabase uygulamasında kullanıcı kimliği ve erişim kontrolü gerektiğinde |
| Backend erişimi | [Supabase MCP](https://supabase.com/docs/guides/ai-tools/mcp) | Agent’ları Supabase projelerine, veritabanına, loglara, migration’lara ve Edge Function’lara bağlar. | Gözetimli Supabase geliştirme ve operasyonlarında |
| Backend paketi | [Supabase Plugin](https://supabase.com/docs/guides/ai-tools/plugins) | Supabase MCP sunucusunu ve agent skill’lerini tek pakette birleştirir. | AI destekli Supabase iş akışı kurarken |
| Geliştirme metodolojisi | [Superpowers](https://github.com/obra/superpowers) | Skill tabanlı bir yazılım geliştirme metodolojisi ekler. | Yapılandırılmış uçtan uca agent iş akışı istendiğinde |
| Agent orkestrasyonu | [Task Observer](https://github.com/rebelytics/one-skill-to-rule-them-all) | Çalışma oturumlarını gözlemler ve tekrarlanan kalıpları skill iyileştirmelerine dönüştürür. | Büyüyen bir agent skill kütüphanesini yönetirken |
| UI/UX rehberliği | [taste-skill](https://github.com/leonxlnx/taste-skill) | AI tarafından üretilen arayüzleri daha bilinçli görsel tasarıma yönlendirir. | İyi işlenmiş arayüzler üretirken veya yeniden tasarlarken |
| Monorepo build sistemi | [Turborepo](https://turborepo.com/docs) | Monorepo genelinde görev orkestrasyonu ve build cache’i ekler. | Çok paketli build ve CI süreçleri koordinasyon veya cache gerektirdiğinde |
| UI/UX rehberliği | [ui-ux-pro-max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Coding agent’lara geniş kapsamlı UI/UX tasarım zekâsı ekler. | Tasarım sistemi veya çok platformlu arayüz üretirken |
| App Store optimizasyonu | [vibe-aso](https://github.com/Kronop/vibe-aso) | App Store anahtar kelime, metadata, lokalizasyon, screenshot ve fiyatlandırma çalışmalarına yardım eder. | App Store listelemesi hazırlarken veya iyileştirirken |
