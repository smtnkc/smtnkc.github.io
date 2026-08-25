---
layout: guide
title: Digital Entrepreneurship Guide
seo_title: Digital Entrepreneurship Guide | Samet Tenekeci
description: A concise guide to growth, product analytics, SaaS metrics, monetization, marketplaces, and mobile app development.
lang: en
permalink: /digital-entrepreneurship-guide/
canonical_url: https://smtnkc.github.io/digital-entrepreneurship-guide/
og_locale: en_US
home_label: Back to smtnkc.github.io
language_label: Language
toc_label: On this page
skip_label: Skip to guide
footer_label: Back to smtnkc.github.io
---

# Digital Entrepreneurship Guide

A concise guide to the core concepts and a small set of useful tools commonly encountered when building digital products, mobile apps, SaaS products, and marketplaces.

## 1. Growth and User Acquisition

### User Acquisition (UA)
The process of acquiring new users. It includes advertising, influencer campaigns, SEO, referrals, social media, and similar channels.

### Organic Acquisition
Users acquired without directly paying for traffic.

Examples include:

- Google search
- App Store search
- Social media sharing
- Word of mouth

### Paid Acquisition
Acquiring users through paid advertising campaigns.

### Influencer Marketing
Acquiring users by having influencers promote a product or app.

### Performance Marketing
A marketing approach where ad spend is measured against results such as installs, sign-ups, purchases, or revenue.

### CPI — Cost Per Install
The average cost of generating one app install.

Example:

- Ad spend: $10,000
- Installs: 2,000
- CPI: $5

### CPC — Cost Per Click
The average cost of one ad click.

### CPM — Cost Per Mille
The cost of 1,000 ad impressions.

### CTR — Click Through Rate
The percentage of people who click an ad after seeing it.

### CAC — Customer Acquisition Cost
The cost of acquiring one paying customer.

It is different from CPI because not everyone who installs an app becomes a customer.

### Conversion Rate
The percentage of users who move from one stage to the next.

Example:

> 1,000 visitors → 100 sign-ups = 10% conversion rate

### ROAS — Return on Ad Spend
Measures how much revenue is generated for every unit of money spent on advertising.

### Attribution
Determining which ad, campaign, or channel brought a user to the product.

### Referral
When existing users bring new users to the product.

### Virality
When users naturally spread the product to other people.

### K-factor
A metric that estimates how many new users each existing user generates.

### Tool: AppsFlyer
A mobile attribution platform.

Its main question is:

> Where did this user come from?

It is used to track users and campaign performance across channels such as Meta Ads, Google Ads, TikTok, influencer campaigns, and other acquisition sources.


## 2. User Behavior

### Funnel
The sequence of steps users move through inside a product.

Example:

> Ad → App Store → Install → Sign-up → Product View → Purchase

### Onboarding
The process that helps a new user understand the product and reach the first valuable action.

### Activation
The point where the user experiences the core value of the product for the first time.

### Activation Rate
The percentage of signed-up users who reach the activation point.

### Aha Moment
The moment when the user realizes that the product is genuinely useful to them.

### Drop-off
When users leave the funnel at a specific stage.

### Friction
Anything that unnecessarily makes it harder for users to complete an action.

Examples:

- Long registration forms
- Unnecessary permission screens
- Complicated payment flows
- Too many steps

### Engagement
How actively users interact with the product.

### Session
A period in which a user opens and uses the app.

### DAU — Daily Active Users
The number of active users per day.

### WAU — Weekly Active Users
The number of active users per week.

### MAU — Monthly Active Users
The number of active users per month.

### Stickiness
How frequently users return to the product.

A common simple ratio is:

DAU / MAU

### Cohort
A group of users who share a common starting point or characteristic.

Example:

> Users who signed up during the first week of August

### Cohort Analysis
Comparing the behavior of different user groups over time.

### Tool: Mixpanel / PostHog
Product analytics tools.

Their main question is:

> What are users doing inside the product?

Example event flow:

`app_open → search → product_view → checkout → purchase`

They can be used for:

- Funnel analysis
- Conversion analysis
- Retention analysis
- Cohort analysis
- Event analysis

**Mixpanel:** More focused on product analytics.

**PostHog:** Combines analytics with session replay, feature flags, and experimentation tools.

For an early-stage product, using one of them is usually enough.


## 3. Retention and Churn

### Retention
The percentage of users who continue using the product over time.

### D1 Retention
The percentage of users who return one day after their first use.

### D7 Retention
The percentage of users who return on day 7.

### D30 Retention
The percentage of users who return on day 30.

Example:

> If 150 out of 1,000 new users return after 7 days → D7 retention = 15%

### Retention Curve
A chart showing how many users remain active over time.

### Churn
When a user or customer stops using the product.

### Churn Rate
The percentage of users or customers lost during a specific period.

### Reactivation
When an inactive user becomes active again.

### Tool: OneSignal
A push notification and user re-engagement platform.

Its main question is:

> How do I bring users back?

Examples:

- Send a push notification to users who have been inactive for 7 days
- Notify users about a price drop
- Send a new-message notification
- Send a last-minute offer
- Send a booking reminder


## 4. Revenue and SaaS Metrics

### MRR — Monthly Recurring Revenue
Recurring subscription revenue generated each month.

### ARR — Annual Recurring Revenue
Recurring subscription revenue generated annually.

In a simple case:

ARR ≈ MRR × 12

### ARPU — Average Revenue Per User
The average revenue generated per user.

### ARPPU — Average Revenue Per Paying User
The average revenue generated per paying user.

### LTV — Lifetime Value
The total economic value a customer is expected to generate during their relationship with the product. Also known as CLV (Customer Lifetime Value).

### LTV:CAC — Lifetime Value to Customer Acquisition Cost Ratio
Compares the lifetime value generated by a customer with the customer acquisition cost required to acquire them.

### Expansion Revenue
Additional revenue generated when existing customers upgrade to more expensive plans or buy extra features.

### Upsell
Moving a customer to a more expensive plan or product.

### Cross-sell
Selling an additional product or service to an existing customer.

### Burn Rate
The amount of cash a company spends each month.

### Runway
The approximate number of months a company can continue operating with its current cash balance.

Example:

- Cash: $1,200,000
- Monthly burn: $100,000
- Runway: about 12 months

### Break-even
The point where revenue becomes sufficient to cover expenses.

### Unit Economics
Analyzing whether one customer or one transaction makes economic sense.

### Tool: RevenueCat
Used to manage subscriptions and in-app purchases in mobile apps.

Its main questions are:

> Who paid?  
> Is the subscription still active?  
> When does the trial end?  
> Was the subscription renewed or canceled?

It simplifies subscription management across iOS and Android.

### Tool: Stripe
A payment and subscription platform mainly used for web-based payments.

Common use cases:

- Card payments
- SaaS subscriptions
- Checkout
- Invoices
- Payment links
- Web-based paid plans

A useful mental model is:

**RevenueCat:** mobile App Store subscriptions

**Stripe:** web payments and SaaS billing


## 5. Marketplace

### Marketplace
A business model that brings two or more user groups together on the same platform.

Examples:

- Airbnb: hosts + guests
- Uber: drivers + riders
- Food delivery platform: restaurants + customers

### Supply
The supply side of the marketplace.

### Demand
The demand side of the marketplace.

### Liquidity
The likelihood that users on the demand side can find suitable supply when they need it.

It is one of the central marketplace metrics.

### GMV — Gross Merchandise Value
The total transaction volume processed through the platform.

### Take Rate
The percentage of GMV captured by the platform as revenue.

Example:

- GMV: $1,000,000
- Platform revenue: $100,000
- Take rate: 10%

### Commission
The fee or percentage charged by the platform per transaction.

### Network Effect
When the product becomes more valuable as more users join.

### Chicken-and-Egg Problem
The classic early-stage marketplace problem.

Without demand, supply does not join.  
Without supply, demand does not join.


## 6. Monetization and Pricing

### Monetization
How the product generates revenue.

### Business Model
How the company creates value and captures revenue from that value.

### Freemium
A model where basic features are free and advanced features are paid.

### Subscription
A model where users pay monthly or annually.

### Paywall
A point where users must pay to access certain content or features.

### Hard Paywall
Users cannot continue without paying.

### Soft Paywall
Part of the product is free, while certain features are paid.

### Free Trial
A limited period during which the product can be used for free.

### Trial-to-Paid Conversion
The percentage of trial users who become paying customers.

### IAP — In-App Purchase
A purchase made inside a mobile app.

### Dynamic Pricing
Pricing that changes based on demand, time, capacity, or other conditions.

### Tool: Superwall
A mobile paywall creation and optimization platform.

Its main question is:

> Which paywall should I show to which user, and when?

Common use cases:

- Paywall design
- Paywall variants
- A/B testing
- Segment-based paywalls
- Offer testing

It is often used together with RevenueCat.

A simple distinction:

**RevenueCat:** payment and subscription status

**Superwall:** paywall experience and conversion optimization


## 7. Startup and Product Development

### PoC — Proof of Concept
A small, focused test used to determine whether an idea, technology, or critical technical assumption is feasible.

### MVP — Minimum Viable Product
The smallest working version of a product that is sufficient to test the idea with real users. A PoC tests technical feasibility, while an MVP tests market value.

### PMF — Product-Market Fit
The point where the product solves a real problem and users keep using it.

### Product Discovery
Research used to understand which user problem should be solved.

### Product Validation
Testing whether there is real demand for a product idea.

### Iteration
Improving the product through repeated small changes.

### Pivot
A major change in product direction, target market, or business model.

### Feature
A specific function inside the product.

### Feature Creep
Adding too many features until the product becomes unnecessarily complicated.

### Roadmap
A plan showing which areas and features the product will focus on over time.

### Backlog
A list of tasks and features that may be built.

### User Story
A product requirement expressed from the user's point of view.

Example:

> As a user, I want to cancel my booking.

### Pain Point
A real problem or frustration experienced by users.

### Value Proposition
The core value the product provides to users.

### USP — Unique Selling Proposition
The main reason the product is meaningfully different from alternatives.

### Tool: Supabase
A backend platform often used for fast product development.

It can provide:

- PostgreSQL database
- Authentication
- Storage
- Realtime features
- Server functions

It is useful for MVPs and small teams because it reduces the need to manage many separate backend services.

### Tool: Expo
A platform and toolset for building React Native apps for iOS and Android.

Common use cases:

- One codebase for iOS and Android
- Development builds
- OTA updates
- App builds
- App Store and Google Play deployment workflows

It is commonly used for fast mobile product development.


## 8. Company Growth

### GTM — Go-to-Market
The plan for launching a product and acquiring the first customers.

### ICP — Ideal Customer Profile
The type of customer that is the best fit for the product.

### Persona
A representative profile of a specific user type.

### B2C — Business to Consumer
A business model where a company sells directly to individual consumers.

### B2B — Business to Business
A business model where a company sells to other companies.

### B2B2C — Business to Business to Consumer
A model where a company reaches end users through another business.

### PLG — Product-Led Growth
A growth model where the product itself drives acquisition, activation, and expansion.

Examples:

- Easy sign-up
- Free usage
- Viral sharing
- Self-service onboarding

### Sales-Led Growth
A model where a sales team plays the primary role in acquiring customers.

### Lead
A potential customer.

### Qualified Lead
A potential customer who is considered more likely to buy.

### Lead Generation
The process of finding potential customers.

### Outbound
When the company directly reaches out to potential customers.

Examples:

- Cold email
- LinkedIn messages
- Phone calls

### Inbound
When customers discover and contact the company through content, Google, social media, or other channels.


## 9. Product Analytics

### A/B Test
Comparing two product or design variants across different user groups.

### Experiment
A test used to measure whether a change actually improves results.

### KPI — Key Performance Indicator
A metric selected to track business or product performance.

### North Star Metric
The main metric that best represents the value the product delivers to users.

Example:

For a booking app:

> Weekly completed bookings

could be a useful North Star Metric.

### Vanity Metric
A metric that looks impressive but may not reflect the true health of the business.

Example:

> A product may have a high total download count but very low D30 retention.

### Event
A user action recorded by an analytics system.

Examples:

- `signup_completed`
- `search_performed`
- `paywall_viewed`
- `subscription_started`
- `booking_completed`

### Feature Flag
A mechanism used to enable or disable a feature for specific user groups.

Example:

> A new checkout screen is first shown to 10% of users.

### Analytics
The process of measuring and analyzing what users do inside the product.

### Main Tool: Mixpanel / PostHog
The main analytics tool for this section is again Mixpanel or PostHog.

Typical use cases include:

- Funnels
- Conversion
- Retention
- Cohorts
- Events
- Experiment results


## 10. App Store and Mobile Apps

### ASO — App Store Optimization
Optimizing an app so it is easier to discover in the App Store and Google Play.

### App Store Ranking
The app's position in category or search rankings.

### Keyword Ranking
The app's position for a specific search keyword.

### Install Conversion Rate
The percentage of App Store visitors who install the app.

### Ratings & Reviews
User ratings and written reviews in the app store.

These can influence both conversion and app store visibility.

### Tool: Sensor Tower
A mobile app market intelligence platform.

Its main questions are:

> How fast are competitors growing?  
> Which apps are popular?  
> Which keywords matter?  
> Which markets show demand?

It is commonly used to analyze:

- Estimated downloads
- Estimated revenue
- Keywords
- Rankings
- Advertising activity
- Market performance


## 11. Minimal Tool Stack

Instead of using dozens of tools, the following set is enough for many early-stage mobile products.

| Need | Tool |
|---|---|
| Product analytics | **Mixpanel or PostHog** |
| Mobile subscriptions | **RevenueCat** |
| Paywall optimization | **Superwall** |
| Acquisition attribution | **AppsFlyer** |
| Push notifications | **OneSignal** |
| Backend | **Supabase** |
| Web payments | **Stripe** |
| App market research | **Sensor Tower** |
| Mobile development | **Expo** |

**Mixpanel / PostHog**  
What are users doing inside the product?

**AppsFlyer**  
Where did the user come from?

**OneSignal**  
How do I bring the user back?

**RevenueCat**  
Who paid, and what is their subscription status?

**Superwall**  
Which paywall converts better?

**Supabase**  
Where does my app's backend live?

**Stripe**  
How do I accept payments on the web?

**Sensor Tower**  
What is happening in the mobile app market and among competitors?

**Expo**  
How do I build and ship my iOS and Android app?


## 12. AARRR: The Main Mental Model

Many concepts in digital products can be organized around five stages:

1. **Acquisition** — How do I get users?
2. **Activation** — Do they reach the first valuable action?
3. **Retention** — Do they come back?
4. **Revenue** — Do they generate revenue?
5. **Referral** — Do they bring other users?

This is known as the **AARRR Funnel** or **Pirate Metrics**.

A useful metric chain to remember is:

`CPI / CAC → Conversion → D1 / D7 / D30 Retention → DAU / MAU → Churn → ARPU / ARPPU → LTV → MRR / ARR`

Understanding these concepts and the minimal tool stack is enough to follow a large portion of everyday startup, SaaS, marketplace, growth, and mobile-product discussions.
