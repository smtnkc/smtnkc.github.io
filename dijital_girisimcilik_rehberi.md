---
layout: guide
title: Dijital Girişimcilik Rehberi
seo_title: Dijital Girişimcilik Rehberi | Samet Tenekeci
description: Büyüme, ürün analitiği, SaaS metrikleri, gelir modelleri, marketplace ve mobil uygulama geliştirme için kısa bir rehber.
lang: tr
permalink: /dijital-girisimcilik-rehberi/
canonical_url: https://smtnkc.github.io/dijital-girisimcilik-rehberi/
og_locale: tr_TR
home_label: smtnkc.github.io ana sayfasına dön
language_label: Dil
toc_label: Bu sayfada
skip_label: Rehbere geç
footer_label: smtnkc.github.io ana sayfasına dön
---

# Dijital Girişimcilik Rehberi

Dijital ürün, mobil uygulama, SaaS ve marketplace geliştirirken sık karşılaşılan temel kavramları ve gerçekten işe yarayan az sayıdaki aracı bir araya getiren kısa rehber.

## 1. Growth ve Kullanıcı Kazanımı

### User Acquisition (UA)
Yeni kullanıcı kazanma sürecidir. Reklam, influencer, SEO, referral, sosyal medya ve benzeri kanalları kapsar.

### Organic Acquisition
Para ödemeden gelen kullanıcı kazanımıdır. Google araması, App Store araması, sosyal medya paylaşımı veya ağızdan ağıza yayılma buna örnektir.

### Paid Acquisition
Reklam bütçesi kullanılarak kullanıcı kazanılmasıdır.

### Influencer Marketing
Influencer'ların bir ürünü veya uygulamayı tanıtması yoluyla kullanıcı kazanma yöntemidir.

### Performance Marketing
Reklam harcamasının install, kayıt, satın alma veya gelir gibi ölçülebilir sonuçlarla takip edildiği pazarlama yaklaşımıdır.

### CPI — Cost Per Install
Bir uygulama yüklemesinin ortalama maliyetidir.

Örnek:

- Reklam harcaması: 10.000 TL
- Install: 2.000
- CPI: 5 TL

### CPC — Cost Per Click
Bir reklam tıklamasının ortalama maliyetidir.

### CPM — Cost Per Mille
Reklamın 1.000 kez gösterilmesinin maliyetidir.

### CTR — Click Through Rate
Reklamı gören kullanıcıların ne kadarının reklama tıkladığını gösterir.

### CAC — Customer Acquisition Cost
Bir müşteri kazanmanın maliyetidir. CPI'dan farklıdır çünkü uygulamayı yükleyen herkes müşteriye dönüşmez.

### Conversion Rate
Bir aşamadan sonraki aşamaya geçen kullanıcı oranıdır.

Örnek:

1.000 ziyaretçi → 100 kayıt = %10 conversion rate

### ROAS — Return on Ad Spend
Reklama harcanan para karşılığında ne kadar gelir elde edildiğini gösterir.

### Attribution
Bir kullanıcının hangi reklam, kampanya veya kanaldan geldiğinin belirlenmesidir.

### Referral
Mevcut kullanıcıların yeni kullanıcı getirmesidir.

### Virality
Kullanıcıların ürünü doğal biçimde başkalarına yaymasıdır.

### K-factor
Bir kullanıcının ortalama olarak kaç yeni kullanıcı getirdiğini ölçmeye çalışan viral büyüme metriğidir.

### Tool: AppsFlyer
Mobil attribution aracıdır.

Temel sorusu:

> Bu kullanıcı nereden geldi?

Meta Ads, Google Ads, TikTok, influencer kampanyası veya başka bir acquisition kanalından gelen kullanıcıları ve kampanya performansını takip etmek için kullanılır.


## 2. Funnel, Onboarding ve Kullanıcı Davranışı

### Funnel
Kullanıcının ürün içindeki aşamalarını gösteren akıştır.

Örnek:

Reklam → App Store → Install → Kayıt → Ürün görüntüleme → Satın alma

### Onboarding
Yeni kullanıcının ürünü anlamasını ve ilk değerli işlemi yapmasını kolaylaştıran başlangıç sürecidir.

### Activation
Kullanıcının ürünün temel değerini gerçekten deneyimlediği ilk önemli aksiyondur.

### Activation Rate
Kayıt olan kullanıcıların ne kadarının activation noktasına ulaştığını gösterir.

### Aha Moment
Kullanıcının ürünün kendisi için gerçekten faydalı olduğunu fark ettiği andır.

### Drop-off
Kullanıcıların funnel'ın belirli bir aşamasında süreci bırakmasıdır.

### Friction
Kullanıcının işlem yapmasını zorlaştıran gereksiz engellerdir.

Örnekler:

- Uzun kayıt formu
- Gereksiz izin ekranları
- Karmaşık ödeme akışı
- Çok fazla adım

### Engagement
Kullanıcının ürünle ne kadar etkileşim kurduğunu ifade eder.

### Session
Kullanıcının uygulamayı açıp kullandığı bir oturumdur.

### DAU — Daily Active Users
Günlük aktif kullanıcı sayısıdır.

### WAU — Weekly Active Users
Haftalık aktif kullanıcı sayısıdır.

### MAU — Monthly Active Users
Aylık aktif kullanıcı sayısıdır.

### Stickiness
Kullanıcıların ürüne ne kadar sık döndüğünü gösterir.

Sık kullanılan basit oran:

DAU / MAU

### Cohort
Benzer zamanda veya benzer kaynaktan gelen kullanıcı grubudur.

Örnek:

> Ağustos'un ilk haftasında kayıt olan kullanıcılar

### Cohort Analysis
Farklı kullanıcı gruplarının zaman içindeki davranışlarını karşılaştırmaktır.

### Tool: Mixpanel / PostHog
Product analytics araçlarıdır.

Temel soruları:

> Kullanıcı uygulamada ne yapıyor?

Örnek event akışı:

`app_open → search → product_view → checkout → purchase`

Bunlarla:

- Funnel
- Conversion
- Retention
- Cohort
- Event analizi

yapılabilir.

**Mixpanel:** product analytics tarafında daha odaklıdır.

**PostHog:** analytics yanında session replay, feature flags ve deney araçları da sunar.

Başlangıçta ikisinden biri yeterlidir.


## 3. Retention ve Churn

### Retention
Kullanıcıların ürünü kullanmaya devam etme oranıdır.

### D1 Retention
Kullanıcının ilk kullanımından bir gün sonra geri dönme oranıdır.

### D7 Retention
Kullanıcının 7. gün geri dönme oranıdır.

### D30 Retention
Kullanıcının 30. gün geri dönme oranıdır.

Örnek:

1.000 yeni kullanıcıdan 7 gün sonra 150'si tekrar kullanıyorsa:

D7 retention = %15

### Retention Curve
Kullanıcıların zaman içinde ne kadarının aktif kaldığını gösteren grafiktir.

### Churn
Kullanıcının veya müşterinin ürünü bırakmasıdır.

### Churn Rate
Belirli bir dönemde kaybedilen kullanıcı veya müşteri oranıdır.

### Reactivation
Bir süredir aktif olmayan kullanıcının tekrar ürüne dönmesidir.

### Tool: OneSignal
Push notification ve kullanıcı geri kazanımı için kullanılan araçtır.

Temel sorusu:

> Kullanıcıyı nasıl geri getiririm?

Örnekler:

- 7 gündür gelmeyen kullanıcıya push
- Fiyat düşüşü bildirimi
- Yeni mesaj bildirimi
- Son dakika fırsatı
- Rezervasyon hatırlatması


## 4. Gelir ve SaaS Metrikleri

### MRR — Monthly Recurring Revenue
Her ay tekrar eden düzenli abonelik geliridir.

### ARR — Annual Recurring Revenue
Yıllık tekrar eden abonelik geliridir.

Basit durumda:

ARR ≈ MRR × 12

### ARPU — Average Revenue Per User
Kullanıcı başına ortalama gelirdir.

### ARPPU
Ödeme yapan kullanıcı başına ortalama gelirdir.

### LTV / CLV — Lifetime Value
Bir müşterinin ürünle kaldığı süre boyunca oluşturması beklenen toplam ekonomik değerdir.

### LTV:CAC
Bir müşteriden elde edilen değer ile o müşteriyi kazanmanın maliyetini karşılaştırır.

### Expansion Revenue
Mevcut müşterilerin daha pahalı plana geçmesi veya ek özellik satın almasıyla oluşan ek gelirdir.

### Upsell
Müşteriyi daha pahalı ürün veya plana geçirmektir.

### Cross-sell
Mevcut müşteriye başka bir ürün veya hizmet satmaktır.

### Burn Rate
Şirketin bir ayda ne kadar nakit tükettiğini gösterir.

### Runway
Mevcut nakitle şirketin yaklaşık kaç ay daha çalışabileceğini gösterir.

Örnek:

- Nakit: 1.200.000 TL
- Aylık burn: 100.000 TL
- Runway: yaklaşık 12 ay

### Break-even
Gelirlerin giderleri karşılamaya başladığı noktadır.

### Unit Economics
Tek bir müşterinin veya işlemin ekonomik olarak mantıklı olup olmadığını inceler.

### Tool: RevenueCat
Mobil uygulamalardaki subscription ve in-app purchase yönetimi için kullanılır.

Temel soruları:

> Kim ödeme yaptı?  
> Aboneliği hâlâ aktif mi?  
> Trial ne zaman bitiyor?  
> Yenileme veya iptal oldu mu?

Özellikle iOS ve Android aboneliklerini tek sistem üzerinden yönetmeyi kolaylaştırır.

### Tool: Stripe
Web tabanlı ödeme ve subscription altyapısıdır.

Temel kullanım alanları:

- Kartla ödeme
- SaaS subscription
- Checkout
- Invoice
- Payment link
- Web tabanlı ücretli planlar

Mobil App Store aboneliği için RevenueCat, web ödeme altyapısı için Stripe şeklinde düşünmek faydalıdır.


## 5. Marketplace

### Marketplace
İki veya daha fazla kullanıcı grubunu aynı platformda buluşturan iş modelidir.

Örnek:

- Airbnb: ev sahibi + misafir
- Uber: sürücü + yolcu
- Yemek platformu: restoran + müşteri

### Supply
Platformdaki arz tarafıdır.

### Demand
Platformdaki talep tarafıdır.

### Liquidity
Talep tarafındaki kullanıcının istediği anda uygun arz bulabilme ihtimalidir.

Marketplace başarısında en önemli göstergelerden biridir.

### GMV — Gross Merchandise Value
Platform üzerinden gerçekleşen toplam işlem hacmidir.

### Take Rate
Platformun işlem hacminden aldığı paydır.

Örnek:

- GMV: 1.000.000 TL
- Platform geliri: 100.000 TL
- Take rate: %10

### Commission
Platformun işlem başına aldığı ücret veya yüzdedir.

### Network Effect
Platform büyüdükçe ürünün diğer kullanıcılar için daha değerli hale gelmesidir.

### Chicken-and-Egg Problem
Marketplace'in başlangıç problemidir.

Talep yoksa supply gelmez.  
Supply yoksa demand gelmez.


## 6. Monetization ve Pricing

### Monetization
Ürünün nasıl gelir üreteceğini ifade eder.

### Business Model
Şirketin nasıl değer ürettiğini ve bu değerden nasıl para kazandığını açıklar.

### Freemium
Temel özelliklerin ücretsiz, gelişmiş özelliklerin ücretli olduğu modeldir.

### Subscription
Kullanıcının aylık veya yıllık ücret ödediği modeldir.

### Paywall
Kullanıcının belirli bir içerik veya özelliğe erişebilmek için ödeme yapması gereken noktadır.

### Hard Paywall
Ödeme yapmadan ürüne devam edilemez.

### Soft Paywall
Ürünün bir bölümü ücretsizdir, belirli özellikler ücretlidir.

### Free Trial
Ürünün belirli bir süre ücretsiz denenebilmesidir.

### Trial-to-Paid Conversion
Trial kullananların ne kadarının ücretli müşteriye dönüştüğünü gösterir.

### IAP — In-App Purchase
Mobil uygulama içinden yapılan satın almadır.

### Dynamic Pricing
Fiyatın talep, zaman, kapasite veya başka koşullara göre değişmesidir.

### Tool: Superwall
Mobil paywall oluşturma ve optimize etme aracıdır.

Temel sorusu:

> Hangi kullanıcıya, ne zaman, hangi paywall'ı göstermeliyim?

Kullanım alanları:

- Paywall tasarımı
- Farklı paywall varyasyonları
- A/B test
- Segment bazlı paywall
- Offer testleri

RevenueCat ile birlikte sık kullanılır.

Basit ayrım:

**RevenueCat:** ödeme ve subscription durumu

**Superwall:** paywall deneyimi ve dönüşüm optimizasyonu


## 7. Startup ve Ürün Geliştirme

### MVP — Minimum Viable Product
Fikri gerçek kullanıcılarla test etmek için gereken en küçük çalışan ürün sürümüdür.

### PMF — Product-Market Fit
Ürünün gerçek bir ihtiyaca karşılık geldiği ve kullanıcıların ürünü kullanmaya devam ettiği noktadır.

### Product Discovery
Hangi problemin çözülmesi gerektiğini anlamak için yapılan kullanıcı ve pazar araştırmasıdır.

### Product Validation
Ürün fikrine gerçekten talep olup olmadığını test etmektir.

### Iteration
Ürünün küçük adımlarla sürekli geliştirilmesidir.

### Pivot
Ürünün, hedef kitlenin veya iş modelinin yönünün ciddi biçimde değiştirilmesidir.

### Feature
Üründeki belirli bir işlevdir.

### Feature Creep
Ürüne gereğinden fazla özellik eklenerek ürünün karmaşık hale gelmesidir.

### Roadmap
Ürünün önümüzdeki dönemde hangi özelliklere odaklanacağını gösteren plandır.

### Backlog
Yapılması düşünülen görev ve özelliklerin listesidir.

### User Story
Bir özelliğin kullanıcı açısından ifade edilmesidir.

Örnek:

> Kullanıcı olarak rezervasyonumu iptal edebilmek istiyorum.

### Pain Point
Kullanıcının yaşadığı gerçek problemdir.

### Value Proposition
Ürünün kullanıcıya hangi değeri sunduğunu açıklar.

### USP — Unique Selling Proposition
Ürünü alternatiflerinden ayıran temel satış argümanıdır.

### Tool: Supabase
Hızlı ürün geliştirmek için kullanılan backend platformudur.

Tek yerde şunları sağlayabilir:

- PostgreSQL database
- Authentication
- Storage
- Realtime
- Server functions

MVP ve küçük ekipler için ayrı ayrı backend servisleri kurma ihtiyacını azaltır.

### Tool: Expo
React Native tabanlı iOS ve Android uygulama geliştirmeyi kolaylaştıran platform ve araç setidir.

Temel kullanım alanları:

- Tek kod tabanından iOS + Android
- Development build
- OTA update
- App build
- App Store / Google Play deployment süreçleri

Mobil startup tarafında hızlı geliştirme için sık kullanılan seçeneklerden biridir.


## 8. Go-to-Market ve Şirket Büyütme

### GTM — Go-to-Market
Ürünün pazara nasıl çıkarılacağını ve ilk müşterilerin nasıl kazanılacağını anlatan plandır.

### ICP — Ideal Customer Profile
Ürün için en uygun müşteri tipidir.

### Persona
Belirli bir kullanıcı tipinin temsili profilidir.

### B2C
Şirketin doğrudan bireysel tüketiciye satış yaptığı modeldir.

### B2B
Şirketin başka şirketlere satış yaptığı modeldir.

### B2B2C
Bir şirket üzerinden son kullanıcıya ulaşılan modeldir.

### PLG — Product-Led Growth
Ürünün kendisinin büyümeyi desteklediği modeldir.

Örnek:

- Kolay kayıt
- Ücretsiz kullanım
- Viral paylaşım
- Self-service onboarding

### Sales-Led Growth
Satış ekibinin müşteri kazanımında ana rolü üstlendiği modeldir.

### Lead
Potansiyel müşteridir.

### Qualified Lead
Satın alma olasılığı daha yüksek olduğu belirlenen potansiyel müşteridir.

### Lead Generation
Potansiyel müşteri bulma sürecidir.

### Outbound
Şirketin potansiyel müşteriye doğrudan ulaşmasıdır.

Örnek:

- Cold email
- LinkedIn mesajı
- Telefon

### Inbound
Müşterinin içerik, Google, sosyal medya veya başka kanallar üzerinden şirkete kendisinin ulaşmasıdır.


## 9. Deney ve Product Analytics

### A/B Test
İki farklı ürün veya tasarım varyasyonunun kullanıcı gruplarında karşılaştırılmasıdır.

### Experiment
Bir değişikliğin gerçekten sonuçları iyileştirip iyileştirmediğini ölçmek için yapılan testtir.

### KPI — Key Performance Indicator
İşin başarısını takip etmek için seçilmiş önemli metriktir.

### North Star Metric
Ürünün kullanıcıya sunduğu temel değeri en iyi temsil eden ana metriktir.

Örnek:

Bir rezervasyon uygulamasında:

> Haftalık tamamlanan rezervasyon sayısı

iyi bir North Star Metric olabilir.

### Vanity Metric
Güzel görünen ancak işin gerçek sağlığını tam olarak göstermeyen metriktir.

Örnek:

Toplam download sayısı yüksek olabilir ancak D30 retention çok düşük olabilir.

### Event
Analytics sisteminde kaydedilen kullanıcı hareketidir.

Örnekler:

- `signup_completed`
- `search_performed`
- `paywall_viewed`
- `subscription_started`
- `booking_completed`

### Feature Flag
Bir özelliğin belirli kullanıcı gruplarına açılıp kapatılmasını sağlayan mekanizmadır.

Örnek:

Yeni checkout ekranı önce kullanıcıların %10'una açılır.

### Analytics
Kullanıcıların üründe ne yaptığını ölçme ve analiz etme sürecidir.

### Ana Tool: Mixpanel / PostHog
Bu bölümün ana aracı yine Mixpanel veya PostHog'dur.

Özellikle:

- Funnel
- Conversion
- Retention
- Cohort
- Event
- Experiment sonuçları

takip edilir.


## 10. App Store ve Mobil Uygulama

### ASO — App Store Optimization
Uygulamanın App Store ve Google Play'de daha kolay bulunması için yapılan optimizasyondur.

### App Store Ranking
Uygulamanın kategori veya arama sonuçlarındaki sırasıdır.

### Keyword Ranking
Belirli bir arama kelimesinde uygulamanın kaçıncı sırada çıktığını gösterir.

### Install Conversion Rate
App Store sayfasını ziyaret edenlerin ne kadarının uygulamayı indirdiğini gösterir.

### Ratings & Reviews
Uygulamanın mağazadaki kullanıcı puanları ve yorumlarıdır.

Bunlar hem conversion hem de App Store görünürlüğünü etkileyebilir.

### Tool: Sensor Tower
Mobil uygulama pazar araştırma aracıdır.

Temel soruları:

> Rakipler ne kadar büyüyor?  
> Hangi uygulamalar popüler?  
> Hangi keyword'ler değerli?  
> Hangi ülkelerde talep var?

Rakip uygulamaların:

- tahmini download
- tahmini revenue
- keyword
- ranking
- advertising
- pazar performansı

gibi verilerini incelemek için kullanılır.


# Minimal Dijital Ürün Tool Stack

Erken aşamada onlarca araç kullanmak yerine aşağıdaki set çoğu mobil ürün için yeterlidir.

| İhtiyaç | Araç |
|---|---|
| Product analytics | **Mixpanel veya PostHog** |
| Mobile subscription | **RevenueCat** |
| Paywall optimization | **Superwall** |
| Acquisition attribution | **AppsFlyer** |
| Push notification | **OneSignal** |
| Backend | **Supabase** |
| Web payments | **Stripe** |
| App market / competitor research | **Sensor Tower** |
| Mobile development | **Expo** |

## Araçları Tek Cümlede Hatırlama

**Mixpanel / PostHog**  
Kullanıcı uygulamada ne yapıyor?

**AppsFlyer**  
Kullanıcı nereden geldi?

**OneSignal**  
Kullanıcıyı nasıl geri getiririm?

**RevenueCat**  
Kim ödeme yaptı ve aboneliği ne durumda?

**Superwall**  
Hangi paywall daha iyi dönüşüm sağlıyor?

**Supabase**  
Uygulamanın backend'ini nerede tutuyorum?

**Stripe**  
Web'de nasıl ödeme alıyorum?

**Sensor Tower**  
Mobil pazarda ve rakiplerde neler oluyor?

**Expo**  
iOS ve Android uygulamamı nasıl geliştirip yayınlıyorum?


# AARRR: Rehberin Ana Mental Modeli

Dijital ürün tarafındaki birçok kavram şu beş aşamada düşünülebilir:

1. **Acquisition** — Kullanıcıyı nasıl getiriyorum?
2. **Activation** — İlk değerli aksiyonu yapıyor mu?
3. **Retention** — Geri geliyor mu?
4. **Revenue** — Para kazandırıyor mu?
5. **Referral** — Başka kullanıcı getiriyor mu?

Buna **AARRR Funnel** veya **Pirate Metrics** denir.

Bu yapının üzerine şu metrikleri oturtmak yeterlidir:

`CPI / CAC → Conversion → D1 / D7 / D30 Retention → DAU / MAU → Churn → ARPU → LTV → MRR / ARR`

Bu kavramları ve minimal tool stack'i anlamak, mobil uygulama, SaaS ve marketplace tarafındaki günlük startup konuşmalarının büyük bölümünü takip etmek için yeterli bir temel sağlar.
