/* ============================================================
   CAMP MARGARITAVILLE — DASHBOARD CONTENT  (edit this file)
   Everything the dashboard shows lives here. Edit from the GitHub
   mobile app, tap "Commit changes", and the site redeploys itself.

   QUICK GUIDE
   • A task is:        ["Task name", 0]      (0 = open, 1 = done)
   • Add an AGENT:     copy a {id:"..."} block in DIV below, give it a
                       unique id + name + color + sow + summary + tasks.
                       Then add the SAME id in PLANS, EMP and LASTACT.
   • Add a TEAM member under an agent id in EMP:
                       ["Name","Role", openTasks, "on"]   ("on"/"off" = notifications)
   • Add a PLAN step:  add a "sentence" to that id's list in PLANS.
   • Add an EVENT:     add a row to the right month in CALENDAR:
                       ["Jul 4","Headliner Name","Concert", 268]
                       types: Concert | Festival | Private | Holiday ; last number = $K revenue
   • Add a PROBLEM to the daily brief:  ["Short description","#FF6F61"]
   Colors are hex like "#19C4B0". Keep the commas and brackets intact.
   ============================================================ */

const DIV=[
 {id:"cfo",name:"CFO / Finance",lead:"Patricia Vance (COO) · Finance",color:"#19C4B0",
  sow:"Own the financial model, capital plan and investor-grade reporting. Build a multi-year model charting the path to a profitable <b>$10M+/year</b> operation incorporating expansion projects and the concert series.",
  summary:"Built a 3-year model: revenue scales <b>$9.24M → $18.89M</b> (~27% CAGR, crossing $10M in Year 1), EBITDA <b>$3.4M → $7.3M</b>, pre-tax net <b>$1.6M → $3.7M</b>. Sized a <b>$9.94M</b> capex plan (24 bungalows, +50 RV sites, event center) and produced the investor Brag Book.",
  tasks:[["3-year revenue model",1],["P&L / EBITDA bridge",1],["Capital plan & funding mix",1],["Integrate concert series economics",1],["Investor Brag Book deck",1],["Monthly actuals-vs-model tracker",0],["After-tax net income & DSCR",0]]},
 {id:"hr",name:"HR & Payroll",lead:"Carla Menard · People Ops",color:"#3FE0C4",
  sow:"Analyze payroll for overtime creep, labor-to-revenue ratios and turnover; recommend retention and scheduling fixes. <b>Extended scope:</b> screen resumes for high-turnover roles with fair-screening guardrails.",
  summary:"Flagged <b>$19K</b> overtime (5.5% of payroll) concentrated in Maintenance ($8K) and the swim-up bar ($6.5K, concert weekends); housekeeping turnover at <b>12%/month</b>. Screened a 13-resume pool and returned a shortlist of <b>6</b>.",
  tasks:[["Analyze June payroll & overtime",1],["Labor-to-revenue ratios",1],["Turnover analysis",1],["Extend agent scope to screening",1],["Screen 13-resume pool & rank",1],["Issue offers to shortlist",0],["Concert-weekend staffing templates",0],["September retention-bonus program",0]]},
 {id:"mktg",name:"Marketing & Promotions",lead:"Jennifer Pham · Marketing",color:"#F4A92F",
  sow:"Maximize occupancy for RV sites, cabins and vacation rentals; drive Paradise Park concert traffic; lift off-peak day-pass and VIP cabana revenue. Evaluate spend, promo ROI and conversion.",
  summary:"Conversion slipped <b>4.1% → 3.2%</b> while Meta absorbed 57% of the $35K spend. Three highest-ROI moves: reallocate spend to high-intent Google Search, pivot Fuel Relief into a weekday locals' cabana/day-pass offer, and bundle scarce golf carts into premium packages.",
  tasks:[["Spend vs conversion analysis",1],["Promo ROI evaluation",1],["Three ROI maneuvers proposed",1],["Reallocate $7–8K Meta → Google Search",0],["Launch 'Locals' Weekday Escape' offer",0],["Fix booking checkout funnel",0]]},
 {id:"fnb",name:"F&B Operations",lead:"Roberto Salazar · F&B",color:"#F2685E",
  sow:"Manage COGS and pour costs for Fins Bar & Grill and the License to Chill swim-up bar; menu-engineer high-margin items; control waste and inventory variance.",
  summary:"Food COGS at <b>32%</b> (2–4 pts high on protein inflation); beverage healthy at <b>24.9%</b> — the bar is the profit engine. Guests reported <b>45-minute</b> Saturday waits at Fins. Plan: pour controls, menu engineering, weekly liquor variance, throughput fixes.",
  tasks:[["COGS / pour-cost analysis",1],["Menu-engineering plan",1],["Pour-control & inventory plan",1],["Re-price Fins burgers + portion spec",0],["Add expo station for throughput",0],["Weekly liquor variance reconciliation",0],["Renegotiate top-5 protein vendors",0]]},
 {id:"vendor",name:"Vendor & Expense Audit",lead:"Gregory Slate · Operations",color:"#7BFBE6",
  sow:"Scrutinize operating expenses across the 150-acre property; identify utility spikes and vendor anomalies; recommend consolidation and renegotiation.",
  summary:"Identified <b>~$11.5K–$13.5K/month</b> (~$140K/yr) recoverable: utilities submetering & pass-through billing on RV hookups, re-bidding POS/reservation ($12K) and WiFi ($8.5K) contracts, and fixing the under-serviced waste route.",
  tasks:[["Operating-expense audit",1],["Top-3 expense leaks identified",1],["Utilities submetering feasibility study",0],["Re-bid POS / reservation contract",0],["Re-bid WiFi / ISP contract",0],["Fix & consolidate waste + landscaping",0]]},
 {id:"guest",name:"Guest Experience",lead:"Crystal Landry · Guest Services",color:"#FFD36E",
  sow:"Analyze review sentiment (cleanliness, staff, amenity access); track concert noise vs quiet hours; evaluate golf cart and Bark-aritaville dog-park feedback.",
  summary:"<b>4.3/5</b> overall, <b>82% positive</b>. No noise complaints. Three concert-amplified pinch points: golf carts sold out by Friday, 45-min Fins waits, and Sunday trash overflow near the dog park. Two immediate fixes proposed.",
  tasks:[["Sentiment analysis (150 reviews)",1],["Two operational fixes identified",1],["Sunday-morning dawn trash sweep",0],["Golf-cart fleet expansion & surge pricing",0]]},
 {id:"rev",name:"Revenue & Opportunity",lead:"Gregory Slate · Commercial",color:"#FF9A8B",
  sow:"Synthesize cross-department findings into unexploited revenue; find cross-sell opportunities; design dynamic pricing for day passes and cabanas.",
  summary:"~<b>$55K–$75K/month</b> low-capex upside: lease more golf carts (sold out every Friday), dynamic cabana & day-pass pricing on concert weekends, concert-package cross-sell on RV/cabin bookings, and F&B delivery to the 204 RV sites.",
  tasks:[["Cross-department opportunity scan",1],["Dynamic-pricing model design",1],["Golf-cart lease ROI case",1],["Launch dynamic cabana pricing",0],["F&B delivery to RV sites pilot",0]]},
 {id:"event",name:"Event & Talent Specialist",lead:"Events · Paradise Park",color:"#E0B85C",
  sow:"Source on-brand concert talent under a <b>$75K</b> booking fee that can sell <b>~4,000 tickets</b>; build per-show economics; recommend an annual series and feed it to the CFO model.",
  summary:"Delivered a 10-act shortlist (Bellamy Brothers, Wade Bowen, Casey Donahew, Pat Green, Yacht Rock Revue, Buffett tribute…), per-show contribution of <b>~$134K–$178K</b>, and a series scaling <b>8 → 16 shows</b> (~$5.6M three-year contribution). Fees flagged as estimates pending agency quotes.",
  tasks:[["Talent research & shortlist",1],["Per-show economics model",1],["Annual series plan (8→16 shows)",1],["Secure 2027 concert dates",0],["Confirm agency booking quotes",0],["Rain / hurricane cancellation insurance",0]]},
 {id:"resv",name:"Reservations & Yield",lead:"Amir Khan · Revenue Systems",color:"#5BD0E6",
  sow:"Dynamically price RV sites, cabins and cabanas by demand, weather and the Paradise Park concert calendar; manage availability and yield.",
  summary:"Demand-indexed pricing rules built; modeling <b>concert-weekend cabana surge</b> (48% → 70% target) and midweek RV fills to lift RevPAR.",
  tasks:[["Connect PMS / reservation feed",1],["Build demand & weather pricing rules",1],["Concert-weekend cabana surge model",1],["Go live with dynamic midweek RV rates",0],["Automate daily yield/pickup report",0]]},
 {id:"reviews",name:"Reputation & Reviews",lead:"Sofia Cruz · Guest Marketing",color:"#FFB86B",
  sow:"Monitor Google & TripAdvisor sentiment daily, draft on-brand review responses, and trend issues by amenity.",
  summary:"Daily sentiment tracking live at <b>4.3/5 (82% positive)</b>; auto-drafting responses; flagged Fins waits and dog-park sanitation trends.",
  tasks:[["Connect Google & TripAdvisor feeds",1],["Daily sentiment trend report",1],["Auto-draft response templates",1],["Enable 24-hour response SLA",0],["Amenity-level issue alerts",0]]},
 {id:"procure",name:"Procurement & Inventory",lead:"Lena Ortiz · Procurement",color:"#B79CFF",
  sow:"Auto-reorder F&B and supplies at par levels, flag vendor price creep, and consolidate vendors for volume discounts.",
  summary:"Par-level reorder rules drafted; flagged <b>protein inflation</b> and the pool-chemical spike; targeting ~$140K/yr recovery with the Vendor agent.",
  tasks:[["Set par levels for F&B & supplies",1],["Vendor price-creep monitor",1],["Award beef/chicken bid + blended patty",0],["Consolidate waste + landscaping",0],["Automate weekly reorder report",0]]},
];

const PLANS={
 cfo:["Finalize the actuals-vs-model tracker and circulate variance flags to department heads.","Model after-tax net income and DSCR to confirm debt headroom before financing talks.","Lock the $9.94M capex phasing and refresh the investor deck quarterly."],
 hr:["Extend offers to the 6-person shortlist this week, prioritizing housekeeping.","Stand up concert-weekend staffing templates and a float pool to cap overtime.","Launch the September retention bonus before mid-summer churn."],
 mktg:["Shift $7-8K from Meta to high-intent Google Search and fix the checkout funnel.","Launch the weekday Locals' Escape cabana/day-pass offer to Houston & Galveston.","Bundle scarce golf carts into premium cabana packages to lift average order value."],
 fnb:["Re-price burgers and adopt the blended-patty spec to pull food cost to ~29%.","Add an expo station at Fins and a limited concert-weekend menu to cut 45-minute waits.","Start weekly liquor variance counts and renegotiate the top-5 protein vendors."],
 vendor:["Commission the utilities submetering study (largest, most durable recovery).","Re-bid the POS/reservation and WiFi contracts at renewal.","Consolidate waste + landscaping under one vendor and add a Sunday peak pull."],
 guest:["Add a Sunday dawn trash sweep near Bark-aritaville after concert weekends.","Expand and surge-price the golf-cart fleet to end Friday sell-outs.","Stand up a daily review-response routine to protect the 4.3 score."],
 rev:["Launch dynamic cabana & day-pass pricing on concert weekends.","Pilot F&B delivery to the 204 RV sites via the existing app.","Lease 15-20 golf carts and bundle them with cabanas and concerts."],
 event:["Confirm 2027 dates and agency quotes for the 8-show series.","Bind rain/hurricane cancellation insurance for June-November dates.","Pre-sell concert-weekend VIP cabana packages to capture ancillary spend."],
 resv:["Go live with dynamic midweek RV rates and concert-weekend cabana surge.","Wire weather-triggered day-pass pricing.","Automate the daily yield/pickup report to the dashboard."],
 reviews:["Turn on a 24-hour response SLA with auto-drafted replies.","Set amenity-level alerts for Fins waits and dog-park sanitation.","Feed recurring themes to Guest Experience and F&B weekly."],
 procure:["Award the beef/chicken bid and lock the blended-patty spec.","Consolidate waste + landscaping under one vendor.","Automate weekly par-level reorders and price-creep flags."]
};
const EMP={
 cfo:[["Patricia Vance","COO / Finance",2,"on"],["Marcus Reed","Controller",1,"on"]],
 hr:[["Carla Menard","HR Lead",3,"on"],["Devin Park","Recruiter",2,"off"]],
 mktg:[["Jennifer Pham","Marketing Manager",3,"on"],["Sofia Cruz","Social & Content",1,"on"]],
 fnb:[["Roberto Salazar","F&B Director",4,"on"],["Dustin Fontenot","Bar Lead",2,"on"]],
 vendor:[["Gregory Slate","Operations",3,"on"],["Lena Ortiz","Procurement",2,"off"]],
 guest:[["Crystal Landry","Guest Services",2,"on"],["Travis Boone","Grounds",1,"off"]],
 rev:[["Gregory Slate","Commercial",2,"on"],["Amir Khan","Revenue Analyst",1,"on"]],
 event:[["Maya Brooks","Events Manager",3,"on"],["Cole Rivera","Production",2,"on"]],
 resv:[["Amir Khan","Revenue Systems",2,"on"],["Priya Nair","Reservations",1,"on"]],
 reviews:[["Sofia Cruz","Guest Marketing",2,"on"],["Jordan Lee","Brand",1,"off"]],
 procure:[["Lena Ortiz","Procurement",3,"on"],["Marcus Reed","Finance",1,"on"]]
};

const TYPECOL={Concert:"#F2685E",Festival:"#F4A92F",Private:"#3FE0C4",Holiday:"#FFD36E"};
const CALENDAR=[
 ["July",576,[["Jul 11-12","Wade Bowen","Concert",268],["Jul 18-19","Roger Creager","Concert",268],["Jul 26","Family Pool Fest","Festival",40]]],
 ["August",804,[["Aug 8-9","Bellamy Brothers","Concert",268],["Aug 16","Yacht Rock Revue","Concert",268],["Aug 29-30","Casey Donahew (Labor Day)","Concert",268]]],
 ["September",293,[["Sep 13","Kevin Fowler","Concert",268],["Sep 20","Event Center Wedding Expo","Private",25]]],
 ["October",383,[["Oct 4","Josh Abbott Band","Concert",268],["Oct 18","Fall Fest + Howl-o-ween","Festival",55],["Oct 25","Corporate Retreat","Private",60]]],
 ["November",388,[["Nov 8","Pat Green","Concert",268],["Nov 27-29","Thanksgiving Beach Weekend","Holiday",120]]],
 ["December",350,[["Dec 13","Buffett Tribute Holiday Show","Concert",200],["Dec 31","NYE Beach Bash","Holiday",150]]]
];
const PROBLEMS=[
 ["Housekeeping turnover 12%/mo (target ≤8%)","#FF6F61"],
 ["Marketing conversion fell 4.1% → 3.2%","#FF6F61"],
 ["VIP cabana utilization 48% vs 70% target","#FF6F61"],
 ["F&B food cost 32% (target ≤30%)","#F4B740"],
 ["Golf carts sell out by Friday — lost rentals","#F4B740"],
 ["Concert-weekend OT $19K in bar & maintenance","#F4B740"]
];

const LASTACT={cfo:"Refreshed the 3-year model; flagged a ~$100K EBITDA gap vs budget.",hr:"Screened 13 resumes, shortlisted 6, scheduled monthly evaluations.",mktg:"Recommended Meta→Google shift; flagged 4.1%→3.2% conversion drop.",fnb:"Ran item cost analysis; plan to cut food cost 32%→29%.",vendor:"Identified ~$140K/yr in utilities, SaaS and waste savings.",guest:"Analyzed 150 reviews; flagged golf-cart and dog-park trash issues.",rev:"Sized ~$55-75K/mo upside; pushing dynamic cabana pricing.",event:"Built a 10-act shortlist and 8→16 show series (~$155K/show).",resv:"Modeled concert-weekend cabana surge; midweek RV rates next.",reviews:"Daily sentiment at 4.3/5; auto-drafting review responses.",procure:"Flagged protein inflation; drafting par-level reorders."};
const ARCH_IN=["P&L / Finance","Payroll","Guest Reviews","Bookings & Occupancy","Vendor Invoices","Weather & Events"];
const ARCH_OUT=["Excel models","PPTX decks","Word memos","Live dashboard","Alerts & tasks"];
