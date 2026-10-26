/**
 * Article data. UI components receive these objects through props —
 * add, remove or edit articles here without touching any component.
 *
 * Content blocks: { type: 'p'|'h2'|'h3', text } | { type: 'ul'|'ol', items } | { type: 'callout', title, text }
 * All content is general and educational; it is not personalised financial advice.
 */

const p = (text) => ({ type: 'p', text });
const h2 = (text) => ({ type: 'h2', text });
const h3 = (text) => ({ type: 'h3', text });
const ul = (...items) => ({ type: 'ul', items });
const ol = (...items) => ({ type: 'ol', items });
const callout = (title, text) => ({ type: 'callout', title, text });

const RAW_BLOGS = [
  {
    id: 1,
    slug: 'how-compound-interest-works',
    title: 'Compound Interest: The Engine Behind Long-Term Wealth',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'Compounding turns small, repeated returns into large sums — provided you give it time, reinvest everything and keep costs low.',
    isoDate: '2026-10-03',
    author: 'Markets Team',
    imageAlt: 'Coins arranged on dark stone in the shape of a rising line graph',
    content: [
      p('Compound interest is interest earned on your original money plus every interest payment already added to it. Each period the base grows, so the next return is calculated on a larger balance. Over decades this snowball can matter more than the amount you start with, the timing of markets or the size of any single contribution.'),
      h2('Simple interest versus compound interest'),
      p('Simple interest pays only on the original principal, so the balance grows in a straight line. Compound interest reinvests each payment, so growth bends upward. A deposit of 10,000 earning 8% a year shows the gap clearly:'),
      ul(
        'Simple interest: about 800 a year, or roughly 24,000 of interest after three decades.',
        'Compound interest: about 100,600 in total after three decades, of which roughly 90,600 is interest.',
      ),
      callout('Milestones at 8%', '10,000 becomes about 21,600 in 10 years, 46,600 in 20 years and 100,600 in 30 years. The final decade adds more value than the first two combined.'),
      h2('The three levers'),
      p('Every compounding result comes from three variables, and you can influence all of them:'),
      ul(
        'Time: the strongest lever. Ten extra years often beat ten extra percentage points of return.',
        'Rate of return: a two-point difference in annual return changes a 30-year outcome by more than half.',
        'Contributions: regular additions give the snowball more mass, especially in the early years when the base is small.',
      ),
      h3('Using the Rule of 72'),
      p('Divide 72 by the annual return to estimate the doubling time. At 6% money doubles in about 12 years, at 9% in about 8 years and at 12% in about 6 years. It is a shortcut for comparing scenarios, not a forecast.'),
      h2('Why the late years do the heavy lifting'),
      p('Compounding is back-loaded. An investor who stays the course for 35 years accumulates noticeably more than one who stops at 25, even accounting for the additional contributions. Extending the horizon usually adds more than increasing the monthly amount, which is why interrupting a plan is so costly.'),
      h2('Compounding frequency is a minor detail'),
      p('Monthly, quarterly and annual compounding differ by a fraction of a percent over ten years. That gap is trivial compared with starting earlier or cutting a fee. Do not spend months comparing compounding conventions while the calendar keeps running.'),
      h2('The same maths runs in reverse'),
      p('Unpaid credit card balances compound at punishing rates. At 36% a year, an untouched balance roughly doubles in about two years, and minimum payments mostly cover interest rather than principal. Clearing high-rate credit is a guaranteed return that no investment can promise.'),
      callout('Fees compound too', 'An annual fee of 1.5% versus 0.3% looks trivial, but over 30 years the expensive option can leave a portfolio roughly a fifth smaller. Costs are deducted every year, so they compound exactly like returns — in reverse.'),
      h2('Key takeaways'),
      ol(
        'Automate a fixed contribution on payday so investing does not depend on motivation.',
        'Reinvest dividends and interest instead of spending them.',
        'Leave the money invested during temporary falls; selling locks in the loss and stops the compounding.',
        'Review costs annually and switch only when the difference is material.',
        'Clear expensive debt first, because it compounds faster than a portfolio can grow.',
      ),
      p('Compound interest rewards patience far more than cleverness. The best day to start was a decade ago; the second best is the next contribution you can automate.'),
    ],
  },

  {
    id: 2,
    slug: 'beginners-guide-to-investing',
    title: 'Investing for Beginners: A First-Principles Roadmap',
    category: 'Investing',
    section: 'investing',
    excerpt:
      'Before choosing a single fund, get the order of operations right: cash buffer, expensive debt, time horizon, diversification and cost.',
    isoDate: '2026-10-06',
    author: 'Markets Team',
    imageAlt: 'A hand writing figures and notes in a dotted notebook beside a keyboard and phone',
    content: [
      p('Investing means putting money into assets — shares, bonds, funds, property — in the expectation of growth or income. Unlike a savings account, the value can fall. That trade-off is the whole point: you accept short-term uncertainty in exchange for a higher expected return over long periods.'),
      h2('First, get the order of operations right'),
      p('Most beginner mistakes are sequencing mistakes, not stock-picking mistakes. Handle these in order:'),
      ol(
        'Cover essentials with a cash emergency fund of three to six months of expenses.',
        'Clear high-interest borrowing such as revolving card balances.',
        'Capture any employer retirement match or tax-advantaged contribution available to you.',
        'Invest the surplus in a diversified, low-cost portfolio that matches your horizon.',
        'Increase contributions whenever income rises.',
      ),
      h2('The time horizon decides the vehicle'),
      ul(
        'Under two years: cash or short-term deposits. Markets are too volatile for money you will need soon.',
        'Two to seven years: a cautious mix of debt and some equity, depending on how much risk you can tolerate.',
        'Seven years and beyond: equity-heavy portfolios have historically delivered the strongest real returns, with larger interim swings.',
      ),
      p('The horizon matters because volatility only hurts when you are forced to sell during a fall.'),
      h2('Risk means two different things'),
      p('Volatility is price movement. Permanent loss is money that never comes back. Diversifying across companies, sectors and countries reduces the second without needing a forecast. A single company can be wiped out; a broad index rarely is.'),
      h2('Costs are the only guaranteed outcome'),
      p('Returns are uncertain; fees are not. A fund charging 1.5% a year against one charging 0.3% can leave a 30-year portfolio meaningfully smaller. Compare expense ratios, exit loads, brokerage and platform fees before comparing past performance.'),
      callout('A defensible starter portfolio', 'One broad domestic index fund, one international index fund and a cash buffer is a complete portfolio for most beginners. Complexity should be added only when it solves a specific problem.'),
      h2('Behaviour beats stock selection'),
      p('Fund flow data repeatedly shows investors earning less than the funds they own, because they buy after strong performance and sell after weak performance. Automating contributions and reviewing once a year removes most of that self-inflicted damage.'),
      h2('What to ignore at the start'),
      ul(
        'Tips from social media and anything described as guaranteed.',
        'Daily market commentary, which explains movement without predicting it.',
        'Leveraged and derivative products you cannot explain in one sentence.',
        'The search for a perfect entry point — time in the market beats timing it.',
      ),
      p('Investing works best as an unglamorous habit: contribute automatically, diversify broadly, keep costs low and let time do the heavy lifting.'),
    ],
  },

  {
    id: 3,
    slug: 'how-to-build-an-emergency-fund',
    title: 'Emergency Funds: The Buffer That Turns Crises Into Inconveniences',
    category: 'Saving',
    section: 'saving',
    excerpt:
      'Three to six months of essential costs, held somewhere liquid and deliberately boring, is the cheapest insurance you will ever buy.',
    isoDate: '2026-10-08',
    author: 'Finance Desk',
    featured: true,
    imageAlt: 'A hand opening a clip-top glass jar that holds a rolled-up banknote',
    content: [
      p('An emergency fund is cash set aside only for genuine shocks: a job loss, a medical bill, an urgent repair or a sudden move. It is not an investment and not a savings goal for a holiday. Its job is to stop a bad month from turning into a bad year.'),
      h2('Why it earns its place first'),
      ul(
        'You avoid borrowing at high interest exactly when your income is under stress.',
        'Long-term investments stay invested instead of being sold at a low point.',
        'You gain negotiating room: time to choose the right job, repair or decision instead of the first available one.',
      ),
      h2('How much is enough'),
      p('The common target is three to six months of essential expenses — not income. Count rent or mortgage, utilities, groceries, transport, insurance and minimum credit commitments. Choose the higher end if your income is variable, you are self-employed, you support dependants or you are the only earner in the household.'),
      callout('A concrete target', 'If essentials cost 40,000 a month, three months is 120,000 and six months is 240,000. Set a first milestone of one month so progress stays motivating.'),
      h2('Where to keep it'),
      p('Prioritise access and stability over yield. A separate savings account or a liquid deposit with same-day withdrawal is ideal. Avoid equity funds, long-term deposits with withdrawal penalties and anything that can fall in value the week you need it. Keeping the money in a different account from daily spending is the single most effective safeguard.'),
      h2('How to build it without pain'),
      ol(
        'Set the target and split it into milestones, for example one month, then three.',
        'Automate a transfer on payday, even if the amount is small.',
        'Direct windfalls — bonuses, refunds, gifts — straight into the fund.',
        'Redirect money from every subscription or bill you cancel.',
        'Review the target annually as your essential costs change.',
      ),
      h2('Rules for using it'),
      p('Decide in advance what qualifies. A genuine emergency is unexpected, necessary and urgent; a sale on a laptop is none of those. When you do draw on the fund, rebuilding it becomes the next savings priority, ahead of any discretionary goal.'),
      h2('Common mistakes'),
      ul(
        'Investing the fund for higher returns, then taking a loss when it is needed.',
        'Mixing it with the account used for daily spending.',
        'Building it before clearing card balances that cost more in interest than the fund earns.',
        'Treating it as a reason to delay long-term investing forever — once it is funded, redirect that money.',
      ),
      p('An emergency fund rarely feels exciting, and that is exactly the point. It works because nothing about it is dramatic.'),
    ],
  },

  {
    id: 4,
    slug: 'smart-ways-to-save-money',
    title: 'Saving on Autopilot: Systems That Beat Willpower',
    category: 'Saving',
    section: 'saving',
    excerpt:
      'Reliable saving comes from automation, visibility and a handful of decisions made once — not from a month of discipline.',
    isoDate: '2026-09-30',
    author: 'Finance Desk',
    imageAlt: 'A person on a sofa working figures on a phone calculator beside a notebook and chart',
    content: [
      p('Most people do not fail to save because they lack discipline. They fail because saving competes with spending in real time, at the checkout, every single day. Systems remove that competition: money moves before it can be spent, and the decisions that matter are made once a year.'),
      h2('Pay yourself first'),
      p('Treat savings as a fixed bill. Schedule a transfer on payday so the money is set aside before it reaches your spending account. The percentage matters less than the automation — a monthly transfer of 5% that never stops beats an aggressive plan abandoned in March.'),
      h2('Give every goal its own pot'),
      p('Sinking funds work for costs you know are coming: insurance premiums, festivals, school fees, vehicle servicing, travel. When these are pre-funded monthly, they stop arriving as emergencies and stop landing on a credit card.'),
      h2('Audit recurring costs once a year'),
      ul(
        'List every subscription, membership and auto-renewal; cancel anything unused in the last 60 days.',
        'Re-price insurance, mobile and internet plans annually — loyalty is rarely rewarded.',
        'Switch to annual billing only where the discount is real and the cash is already set aside.',
        'Check bank charges and card fees you stopped noticing years ago.',
      ),
      h2('Use rules instead of resolutions'),
      p('A 48-hour rule for any non-essential purchase above a set amount filters out impulse decisions without requiring willpower. Pair it with a note of what the purchase is for; most items do not survive the pause.'),
      callout('Track before you cut', 'One month of honest tracking usually reveals two or three categories that can be reduced without any lifestyle loss. Cutting the categories you enjoy rarely lasts; cutting the ones you barely notice does.'),
      h2('Save your raises'),
      p('Lifestyle inflation is the quiet leak. Commit half of every increase to savings before it reaches your spending, and you never adapt to the higher income. It is the easiest saving you will ever make, because it costs nothing you were already used to.'),
      h2('Everyday habits that add up'),
      ol(
        'Plan meals around what is already in the kitchen before shopping.',
        'Shop with a list and consolidate trips to avoid top-up purchases.',
        'Buy quality once for items you use daily; repeated replacements cost more.',
        'Use cash-back and comparison tools only for planned purchases, never as justification for new ones.',
        'Set a waiting period before any unplanned purchase above your threshold.',
      ),
      h2('Spend deliberately, not guiltily'),
      p('Saving is not the same as denying yourself. A budget that leaves nothing for enjoyment gets abandoned, and an abandoned budget saves nothing at all. Decide in advance what you will spend freely on, then protect the rest.'),
      p('The goal is a savings rate you can hold for years while it runs quietly in the background — not a heroic month followed by a rebound.'),
    ],
  },

  {
    id: 5,
    slug: 'understanding-mutual-funds',
    title: 'Mutual Funds Explained: Structure, Costs and How to Choose',
    category: 'Mutual Funds',
    section: 'investing',
    excerpt:
      'Pooled money, units, a daily NAV and an expense ratio: understand what you own before comparing last year’s returns.',
    isoDate: '2026-09-27',
    author: 'Markets Team',
    imageAlt: 'Close-up of a printed pie chart showing how a portfolio is split',
    content: [
      p('A mutual fund collects money from thousands of investors and invests it according to a stated objective. Each investor holds units, and the unit price — the net asset value, or NAV — moves with the value of the underlying portfolio. You own a share of a basket, not a promise of a return.'),
      h2('How the structure works'),
      ul(
        'The fund pools money and buys securities that fit its mandate.',
        'Units are issued at the prevailing NAV, which is calculated once a day.',
        'Income and gains are shared proportionally across unit holders.',
        'A fund manager and research team make the buying and selling decisions.',
      ),
      h2('Active versus passive'),
      p('An active fund tries to beat a benchmark through selection and timing; a passive or index fund tries to match it cheaply. Because most active funds fail to beat their benchmark after fees over long periods, cost becomes the deciding factor for many investors.'),
      h2('The main categories'),
      h3('Equity funds'),
      p('Mostly company shares. Higher growth potential and higher short-term volatility; best suited to long horizons.'),
      h3('Debt funds'),
      p('Bonds and money-market instruments. Lower volatility than equity, but still exposed to interest-rate and credit risk — the NAV can fall, so they are not a substitute for a deposit.'),
      h3('Hybrid funds'),
      p('A mix of equity and debt, usually to smooth the ride for medium-term goals.'),
      h3('Index funds and ETFs'),
      p('Track an index at low cost. ETFs trade through the day like shares; index funds are bought at the daily NAV.'),
      h2('The costs that actually matter'),
      ul(
        'Expense ratio: the annual fee deducted from the portfolio, charged whether the fund wins or loses.',
        'Exit load: a fee for withdrawing before a stated period.',
        'Transaction and impact costs inside the fund, which show up as tracking difference.',
        'Advisory or platform fees charged outside the fund.',
      ),
      callout('The NAV myth', 'A fund with a NAV of 15 is not cheaper than one with a NAV of 150. NAV is just a unit size; only future portfolio performance and the costs you pay determine your return.'),
      h2('How to shortlist a fund'),
      ol(
        'Write down the goal, the horizon and how much volatility you can tolerate.',
        'Match the category to the horizon rather than to the recent leaderboard.',
        'Compare expense ratios and exit loads across funds in the same category.',
        'Look at rolling returns across market cycles instead of the last twelve months.',
        'Read the objective and risk sections before investing, not after.',
      ),
      h2('Systematic investing'),
      p('A systematic investment plan invests a fixed amount at regular intervals, which smooths the average purchase price and removes the timing decision. It does not remove risk; it removes hesitation.'),
      p('Funds are tools, not shortcuts. The category, the cost and the horizon decide most of the outcome long before the fund manager does.'),
    ],
  },

  {
    id: 6,
    slug: 'what-is-a-credit-score',
    title: 'Credit Scores Decoded: What Lenders Actually Measure',
    category: 'Credit',
    section: 'banking',
    excerpt:
      'A score is a risk summary built from payment history, utilisation, credit age and new applications — every one of which you can influence.',
    isoDate: '2026-09-24',
    author: 'Banking Desk',
    imageAlt: 'Hands holding an open wallet fanned out with credit cards',
    content: [
      p('A credit score is a number, usually between 300 and 900, that summarises how reliably you have repaid credit. Lenders use it to price risk: a higher score typically means easier approvals and a lower interest rate, which over the life of a home mortgage can be worth a substantial amount.'),
      h2('What goes into the score'),
      ul(
        'Payment history (roughly 35%): missed or late payments damage a score faster than anything else.',
        'Credit utilisation (roughly 30%): the share of your available limit currently in use.',
        'Length of history (roughly 15%): older, well-managed accounts help.',
        'Credit mix (roughly 10%): a blend of revolving and instalment credit.',
        'New credit (roughly 10%): several applications in a short window suggest financial stress.',
      ),
      p('Exact weights differ between bureaus and countries; the ranking of factors rarely does.'),
      callout('Utilisation arithmetic', 'With a total limit of 100,000 and an outstanding balance of 60,000, utilisation is 60%. Paying the balance down to 25,000 drops it to 25% — often the fastest improvement available without waiting for time to pass.'),
      h2('Hard and soft enquiries'),
      p('Checking your own score is a soft enquiry and does not affect it. A lender assessing an application is a hard enquiry and can shave a few points, especially when several arrive close together. Space out applications rather than applying everywhere at once.'),
      h2('Read the report, not just the number'),
      p('Scores follow the report. Look for incorrect addresses, duplicate accounts, settled accounts still marked open and balances that do not match your statements. Disputing genuine errors is free and often effective.'),
      h2('Habits that raise a score'),
      ol(
        'Pay at least the minimum on every account, every month, on time.',
        'Automate payments so a busy week cannot cause a missed due date.',
        'Keep utilisation under about 30%, and under 10% if you plan to apply soon.',
        'Keep old accounts open when they carry no fee; closing them shortens history and cuts available credit.',
        'Check your report every few months and dispute errors promptly.',
      ),
      h2('How long repair takes'),
      p('A single late payment can stay on a report for years, but its weight fades. Defaults and settlements hurt more, and recent events hurt more than old ones. Consistent behaviour over six to twelve months is usually visible in the score.'),
      callout('The mortgage effect', 'On a large home mortgage, the gap between the best and worst advertised rate can add up to more than a year of household savings. The score is not a formality; it is a price tag.'),
      p('A good score is the by-product of boring habits: pay on time, keep balances low, leave old accounts alone and check the report before a lender does.'),
    ],
  },

  {
    id: 7,
    slug: 'how-to-create-a-monthly-budget',
    title: 'A Monthly Budget That Survives the Month',
    category: 'Personal Finance',
    section: 'finance',
    excerpt:
      'Budgets fail when they ignore irregular costs and real behaviour. Build one with buffers, sensible categories and a weekly review.',
    isoDate: '2026-09-21',
    author: 'Finance Desk',
    imageAlt: 'Hands writing in a planner beside banknotes and a calculator',
    content: [
      p('A budget is a spending plan written before the month starts. The version that works is not the most detailed one; it is the one that survives contact with an ordinary month — including the costs that do not arrive monthly.'),
      h2('Start from take-home pay'),
      p('Use what actually reaches your account after tax and deductions. If income varies, budget on a conservative baseline such as your lowest recent month, then allocate anything above it deliberately rather than treating it as free money.'),
      h2('Split costs into three types'),
      ul(
        'Fixed: rent or mortgage, insurance, subscriptions, minimum credit commitments.',
        'Variable essentials: groceries, utilities, transport, medication.',
        'Irregular: annual insurance, school fees, festivals, repairs, vehicle servicing.',
      ),
      p('Irregular costs are where most budgets break. Divide each annual cost by twelve and fund it monthly in a separate sinking fund.'),
      h2('Pick a method you will actually maintain'),
      h3('The 50/30/20 split'),
      p('Roughly half of take-home pay to needs, a third to wants and a fifth to savings and extra repayment. Simple to remember and easy to adjust.'),
      h3('Zero-based budgeting'),
      p('Every unit of income is assigned a job until nothing is unallocated. It gives precise control at the cost of more maintenance.'),
      h3('Category caps'),
      p('Fix a limit per category and stop when it is reached. Works well for variable spending such as dining and shopping.'),
      callout('Worked example', 'With take-home pay of 60,000 a month, 50/30/20 suggests about 30,000 for needs, 18,000 for wants and 12,000 for savings and debt repayment. If fixed costs already exceed 30,000, the honest conclusion is that housing or transport needs restructuring — not that the framework failed.'),
      h2('Build in a buffer'),
      p('Add a line for the unexpected at 3–5% of income. A budget with no slack breaks on the first surprise and is then abandoned entirely, which costs more than the buffer would have.'),
      h2('Review weekly, not monthly'),
      ol(
        'Spend ten minutes a week comparing actual spending with the plan.',
        'Move money between categories as life changes; a transfer is not a failure.',
        'At month end, adjust the two categories that were consistently unrealistic.',
        'Revisit the whole plan after any change in income, rent or household size.',
      ),
      h2('Make saving automatic'),
      p('A budget only works if the saving happens without a decision. Schedule the transfer for payday, before the categories compete for the money.'),
      p('The purpose of a budget is not restriction. It is making sure the money you earn goes where you decided it should go, rather than where it drifted.'),
    ],
  },

  {
    id: 8,
    slug: 'stock-market-basics-for-beginners',
    title: 'How the Stock Market Works: Exchanges, Indices and Risk',
    category: 'Stock Market',
    section: 'investing',
    excerpt:
      'Buying a share makes you a part-owner of a business. Prices move on earnings expectations, interest rates and sentiment — rarely on headlines alone.',
    isoDate: '2026-09-18',
    author: 'Markets Team',
    imageAlt: 'The New York Stock Exchange on Wall Street with American flags',
    content: [
      p('A share is a unit of ownership in a company. Buying one makes you a part-owner of its future profits, and its price reflects what buyers and sellers collectively expect those profits to be worth. Everything else in the market is the plumbing around that single idea.'),
      h2('Who is actually involved'),
      ul(
        'Exchanges: regulated venues where buy and sell orders meet.',
        'Brokers: intermediaries that route your order and hold your account.',
        'Market makers: firms quoting both prices to keep trading liquid.',
        'Regulators: set disclosure, listing and conduct rules.',
      ),
      h2('Why prices move'),
      p('In the short term prices respond to new information and to expectations: quarterly earnings, guidance, interest-rate decisions, inflation data, currency moves and geopolitics. Over longer periods, earnings growth and the price paid for those earnings dominate. This is why a single bad week rarely changes a decade-long outcome.'),
      h2('Indices and market capitalisation'),
      p('An index tracks a basket of shares — large companies, a sector or a whole market — and is used as a benchmark. Market capitalisation is share price multiplied by shares outstanding. In a cap-weighted index a company’s weight rises with its value, which is why a handful of very large companies can drive the index’s return.'),
      h2('Dividends and total return'),
      p('Some companies pay part of their profits to shareholders as dividends; others reinvest everything into growth. Total return combines price change and income, and it is the only fair way to compare two investments.'),
      h2('Order types worth understanding'),
      ul(
        'Market order: executes immediately at the best available price, which may differ from the last traded price.',
        'Limit order: executes only at your price or better, and may never execute.',
        'Bid-ask spread: the gap between the best buy and sell prices — a cost paid on every trade.',
      ),
      h2('Three ways to own shares'),
      h3('Individual companies'),
      p('Direct ownership and full control, but research is on you and risk is concentrated in a handful of names.'),
      h3('Index funds and ETFs'),
      p('Instant diversification across hundreds of companies at low cost — the default for most long-term investors.'),
      h3('Managed funds'),
      p('Professional selection at a higher fee, which the manager must overcome before you see any benefit.'),
      callout('The risk you cannot diversify', 'Market risk — the possibility that broad prices fall — cannot be removed by owning more shares. It is managed with time horizon and asset allocation. Diversification only removes company-specific risk.'),
      h2('Beginner mistakes'),
      ol(
        'Treating a rising price as proof of quality.',
        'Concentrating in one company or one sector.',
        'Trading often enough for costs and taxes to compound against you.',
        'Selling in a downturn and calling it risk management.',
        'Investing money you will need within a few years.',
      ),
      p('The market is a mechanism for owning businesses, not a casino with better branding. Decide what you own, why you own it and how long you can hold it before you place an order.'),
    ],
  },

  {
    id: 9,
    slug: 'how-inflation-affects-your-money',
    title: 'Inflation and Your Money: Real Returns and Purchasing Power',
    category: 'Economy',
    section: 'business',
    excerpt:
      'The number on your statement is not the number that matters. Subtract inflation and see what your savings are really earning.',
    isoDate: '2026-09-15',
    author: 'Economy Desk',
    imageAlt: 'Supermarket produce shelves lined with price tags and discount signs',
    content: [
      p('Inflation is the rate at which the general price level rises, measured by tracking a basket of everyday goods and services. When prices rise, each unit of currency buys less. Moderate inflation is normal in a growing economy, but it changes what every savings balance and every goal is actually worth.'),
      h2('What drives it'),
      ul(
        'Demand-pull: spending outpaces the supply of goods and services.',
        'Cost-push: energy, wages or import costs rise and are passed on to customers.',
        'Money and credit growth: more purchasing power chases the same quantity of goods.',
        'Expectations: when people expect higher prices, they bring purchases forward, which validates the expectation.',
      ),
      h2('Real versus nominal returns'),
      p('A nominal return is the headline figure. A real return subtracts inflation. Earning 4% while inflation runs at 5% leaves a real return of about -1%: the balance grows, but your purchasing power does not.'),
      callout('A ten-year view', 'At 6% inflation, something costing 1,000 today costs about 1,790 in ten years. Cash earning nothing would buy roughly 56% of what it buys now.'),
      h2('Who gains and who loses'),
      p('Households holding large cash balances and people living on fixed income lose purchasing power. Long-term borrowers on fixed rates benefit, because they repay with money that is worth less in real terms. That is an observation about existing agreements, not a reason to take on new borrowing.'),
      h2('Protecting purchasing power'),
      ul(
        'Hold cash for liquidity and emergencies, not for growth.',
        'Use equity exposure for long horizons; historically it has outpaced inflation, with real volatility along the way.',
        'Consider inflation-linked bonds where they are available, for certainty rather than growth.',
        'State long-term goals in tomorrow’s prices, not today’s.',
        'Negotiate your own income where you can — wages are a price too.',
      ),
      h2('The central bank connection'),
      p('Central banks raise policy rates to cool demand and lower them to support growth. Higher rates make credit more expensive, savings more attractive and long-duration assets less valuable. That chain explains why one rate decision can move mortgage offers, card rates and share prices in the same week.'),
      h2('Inflation and your plan'),
      ol(
        'Rebuild the budget from current prices rather than last year’s.',
        'Set goal amounts in future prices, not today’s.',
        'Do not keep long-term money in cash to feel safe — that safety is the risk.',
        'Judge every return net of inflation, especially on deposits.',
      ),
      p('Inflation is quiet and cumulative: unremarkable in any single month, decisive over twenty years.'),
    ],
  },

  {
    id: 10,
    slug: 'financial-planning-for-young-adults',
    title: 'Financial Planning in Your Twenties: The Decade That Compounds',
    category: 'Financial Planning',
    section: 'finance',
    excerpt:
      'Time is the asset you have most of. Get the foundations, the first investments and the habits right, and every later decade gets easier.',
    isoDate: '2026-09-12',
    author: 'Finance Desk',
    imageAlt: 'A woman working at a desk with a laptop and notebook in a bright room',
    content: [
      p('In your twenties the amounts are usually small and the horizon is unusually long, which is the best combination compounding will ever offer. The habits set now — how income is split, how credit is treated, how automatic investing is — persist long after the salary grows.'),
      h2('Why starting early beats starting big'),
      p('Consider two investors. The first contributes 5,000 a month from age 25 to 35 and then stops. The second starts at 35 and contributes 5,000 a month until 60. At a similar return, the first investor often ends up ahead despite contributing a fifth as much. Compounding, not contribution size, is doing that work.'),
      h2('The order of operations'),
      ol(
        'Track one month of spending to see where money actually goes.',
        'Build a starter emergency fund of one month, then three.',
        'Clear high-interest credit before investing beyond any employer match.',
        'Take the full retirement or tax-advantaged contribution available to you.',
        'Invest the surplus in a diversified, low-cost portfolio.',
      ),
      h2('Divide goals by horizon'),
      ul(
        'Under two years: cash, where stability matters more than return.',
        'Two to seven years: mostly debt funds with a measured equity allocation.',
        'Seven years or more: equity-heavy, accepting volatility in exchange for long-term growth.',
      ),
      p('Matching the vehicle to the horizon prevents the most expensive beginner mistake: being forced to sell at the wrong moment.'),
      h2('Lifestyle inflation is the silent leak'),
      p('Every raise arrives with a new baseline — a better flat, a newer phone, a car payment. Nothing feels extravagant, yet the savings rate never rises. Redirecting half of each increase before it reaches your spending breaks that pattern permanently.'),
      callout('A rule that pays for itself', 'Save or invest 50% of every raise before you adapt to it. After four or five increases, the automatic saving can exceed what you invest from your original salary.'),
      h2('Protect the plan'),
      p('Health cover and, where others depend on your income, term protection keep a single event from undoing years of progress. In parallel, keep credit utilisation low and never miss a due date; a clean record lowers the cost of every future home mortgage or vehicle finance agreement.'),
      h2('Keep the system simple'),
      ul(
        'One or two broad index funds are enough.',
        'Automate contributions to land on payday.',
        'Review annually rather than daily.',
        'Write down why you own each holding, so a future decision can be made calmly.',
      ),
      h2('What to review every year'),
      ol(
        'Income, spending and savings rate.',
        'Emergency fund target against current costs.',
        'Asset allocation against your horizon.',
        'Insurance cover and beneficiaries.',
        'Any tax-advantaged limits you have not used.',
      ),
      p('You will make mistakes — an expensive fund, a badly timed sale, a purchase you regret. The plan survives those. What it cannot survive is not having one.'),
    ],
  },

  {
    id: 11,
    slug: 'how-to-use-credit-cards-responsibly',
    title: 'Credit Cards Done Right: Grace Periods, Interest and Habits',
    category: 'Credit Cards',
    section: 'banking',
    excerpt:
      'A card is a payment tool with a 30–50 day interest-free window — and one of the most expensive credit lines in the market if you miss it.',
    isoDate: '2026-09-09',
    author: 'Banking Desk',
    imageAlt: 'A customer handing a bank card to a cashier at a shop counter',
    content: [
      p('A credit card is a revolving line of credit attached to a payment instrument. Used deliberately it is a short-term, interest-free convenience with consumer protection attached. Used passively it becomes the most expensive way to spend money you do not have.'),
      h2('The billing cycle in plain terms'),
      ul(
        'Statement date: the day the bank totals your spending for the cycle.',
        'Due date: typically 15–25 days after the statement date.',
        'Grace period: the interest-free window from purchase to due date, provided the previous statement was paid in full.',
        'Minimum due: a small percentage that avoids a late fee but does not avoid interest.',
      ),
      h2('What happens when you do not pay in full'),
      p('Interest is charged on the outstanding balance, often from the transaction date, at a high annual rate. Once a balance is carried, new purchases usually lose their grace period until it is cleared. Interest is then charged on interest, which is how a modest balance becomes a long commitment.'),
      callout('The minimum-due trap', 'A balance of 50,000 at 36% a year accrues roughly 1,500 of interest in a single month. Paying only the minimum can keep the balance alive for years while barely touching the principal.'),
      h2('Utilisation affects your score'),
      p('Even when you pay in full every month, a high balance on the statement date can be reported as utilisation. If you need the reported figure to stay low before an application, pay part of the balance before the statement date rather than waiting for the due date.'),
      h2('Features worth understanding first'),
      ul(
        'Annual fee: only rational when the benefits you actually use exceed it.',
        'Rewards: valuable only if you clear the balance, because interest cancels cash-back quickly.',
        'Cash advances: fees plus immediate interest, with no grace period.',
        'Foreign currency markup: a hidden cost on overseas spending.',
        'Chargeback protection: a genuine reason to pay by card for large purchases.',
      ),
      h2('Security habits'),
      ol(
        'Enable transaction alerts and two-factor authentication.',
        'Never share the card verification code or one-time passwords.',
        'Check the statement monthly for unfamiliar charges.',
        'Report a lost card immediately; liability rules favour quick reporting.',
      ),
      h2('If you already carry a balance'),
      ol(
        'Stop adding new charges to the card while you repay.',
        'List every balance with its interest rate.',
        'Attack the highest rate first while paying minimums elsewhere.',
        'Ask the issuer about a lower rate or a hardship plan before you miss a payment.',
        'Consider a balance transfer only if the fee is smaller than the interest it replaces, and only if you can clear it before the promotional period ends.',
      ),
      p('The card is not the problem. The absence of a rule about when it gets repaid is.'),
    ],
  },

  {
    id: 12,
    slug: 'understanding-borrowing-and-interest-rates',
    title: 'The True Cost of Credit: Rates, Tenure and Total Repayment',
    category: 'Credit',
    section: 'banking',
    excerpt:
      'Two offers with the same headline rate can cost very different amounts. Compare total repayment, all fees, and what happens if rates move.',
    isoDate: '2026-09-06',
    author: 'Banking Desk',
    imageAlt: 'A hand with a pen pointing at rate figures beside a calculator and laptop',
    content: [
      p('Borrowing spreads the cost of a large purchase over time in exchange for interest. Comparing offers properly means looking past the advertised rate to the total you will repay and the conditions attached to it.'),
      h2('Four numbers define any credit agreement'),
      ul(
        'Principal: the amount actually disbursed to you.',
        'Interest rate: the annual cost of the money, fixed or floating.',
        'Tenure: how long you have to repay, which sets the instalment.',
        'Fees and charges: processing, insurance, late payment and prepayment penalties.',
      ),
      h2('How an instalment is built'),
      p('In the early months most of each instalment is interest and very little is principal. That reverses towards the end of the tenure. This is why prepaying in the first years saves far more than the same amount prepaid near the end, and why a shorter tenure cuts total interest so sharply.'),
      h2('Fixed versus floating rates'),
      p('A fixed rate keeps payments predictable and is usually priced slightly higher as the cost of certainty. A floating rate follows a benchmark, so payments can fall as well as rise. If your budget has little slack, predictability is usually worth more than the chance of paying less.'),
      h2('The tenure trade-off'),
      p('A longer tenure lowers each instalment but raises the total interest. A shorter one does the opposite. Choosing between them is a trade-off between monthly breathing room and the total price of credit.'),
      callout('Same rate, very different cost', 'Borrowing 500,000 at 10% costs roughly 137,000 in interest over five years and about 293,000 over ten. The ten-year instalment is smaller — which is exactly why the total is larger.'),
      h2('Secured and unsecured credit'),
      p('Secured credit, such as a home mortgage or vehicle finance, is backed by an asset and usually priced lower. Unsecured credit — a personal line or a card balance — relies on your creditworthiness and costs more. The lower price on secured credit reflects the lender’s ability to recover the asset, which is precisely the risk you are accepting.'),
      h2('The real cost is more than the rate'),
      p('Processing fees, bundled insurance, documentation charges and prepayment penalties can add several percentage points to the effective cost. Ask for a full repayment schedule in writing and add every charge to it before comparing offers.'),
      h2('Affordability, before approval'),
      ol(
        'Keep total instalments comfortably below about a third of net monthly income.',
        'Stress-test the payment against a rate rise if the rate is floating.',
        'Make sure the new instalment does not consume your emergency fund.',
        'Check whether prepayment is allowed without penalty, in case your income rises.',
      ),
      h2('Before you sign'),
      ol(
        'Read the full agreement, including the schedule of charges.',
        'Confirm what happens if you repay early, or miss a payment.',
        'Check whether insurance is optional or already priced into the rate.',
        'Keep copies of the sanction terms, the disbursement schedule and every statement.',
      ),
      p('Credit prices time. The only question worth asking is whether the thing you are buying is worth more than the time you are paying for.'),
    ],
  },

  {
    id: 13,
    slug: 'tax-basics-everyone-should-know',
    title: 'Tax Fundamentals: Brackets, Deductions and After-Tax Returns',
    category: 'Tax & Finance Basics',
    section: 'finance',
    excerpt:
      'Marginal rates, effective rates and deductions explained — plus how tax quietly changes the value of every investment you own.',
    isoDate: '2026-09-03',
    author: 'Finance Desk',
    imageAlt: 'A laptop screen displaying a completed tax return form',
    content: [
      p('Tax rules differ by country and change often, but a handful of ideas travel almost everywhere. Understanding them makes payslips readable, keeps records clean and turns a once-a-year scramble into a routine.'),
      h2('Gross, taxable and net income'),
      ul(
        'Gross income: everything earned before any deduction.',
        'Taxable income: gross income minus eligible deductions and exemptions.',
        'Net income: what actually reaches your account after tax and contributions.',
      ),
      p('Your tax is calculated on taxable income, not on gross income. Confusing the two is the most common source of surprise at filing time.'),
      h2('How brackets actually work'),
      p('Progressive systems tax slices of income at rising rates. Moving into a higher bracket does not tax your whole income at that rate — only the slice above the threshold. A raise can never reduce your take-home pay under a progressive system.'),
      callout('Marginal versus effective rate', 'Someone with a marginal rate of 30% might pay an effective rate closer to 18%, because the lower slices were taxed at lower rates. Compare effective rates when judging a tax decision.'),
      h2('Deductions, credits and exemptions'),
      ul(
        'Deductions reduce taxable income; their value depends on your marginal rate.',
        'Credits reduce the tax itself, so each unit is usually worth more.',
        'Exemptions remove specific income from the calculation entirely.',
        'Eligibility depends on local rules — verify rather than assume.',
      ),
      h2('Withholding and filing'),
      p('Most salaried income is taxed at source. Filing reconciles what was withheld with what is actually due, which is why a refund is not a windfall — it is your own money returned without having earned anything in the meantime. Keep documents as they arrive instead of assembling them in a panic.'),
      h2('Tax and investments'),
      p('Interest, dividends and capital gains are often taxed differently, and holding periods can change the rate. That is why after-tax return, not headline return, is the number that matters.'),
      ul(
        'Short holding periods often attract the highest rates.',
        'Tax-advantaged accounts can matter more than a slightly higher-return product.',
        'Losses can sometimes offset gains, but the rules vary by jurisdiction.',
        'Tax is a reason to hold longer, not a reason to avoid investing.',
      ),
      h2('Records that save money'),
      ol(
        'Keep payslips, statements and receipts in one folder, digital or physical.',
        'Note filing deadlines and contribution cut-offs in your calendar.',
        'Review your position before the year ends, while there is still time to act.',
        'Consult a qualified professional for anything outside routine employment income.',
      ),
      p('Tax is not a puzzle to beat. It is a set of rules worth understanding well enough that they never arrive as a surprise.'),
    ],
  },

  {
    id: 14,
    slug: 'how-small-businesses-manage-cash-flow',
    title: 'Cash Flow for Small Business: Why Profit Isn’t Money',
    category: 'Business',
    section: 'business',
    excerpt:
      'Profitable on paper and broke at the bank: the gap between issuing an invoice and being paid is where small businesses fail.',
    isoDate: '2026-08-31',
    author: 'Economy Desk',
    imageAlt: 'A shop assistant working the till at a small shop counter',
    content: [
      p('Cash flow is the timing of money entering and leaving a business. Profit is an accounting measure over a period; cash is what pays salaries on Friday. A business can report a healthy profit and still miss payroll, because a large sale on 60-day terms adds to profit immediately and to the bank account two months later.'),
      h2('Profit and cash run on different clocks'),
      p('Profit recognises revenue when it is earned and expenses when they are incurred, regardless of when money moves. Cash flow records the movement itself. Both are true, but only one of them can be spent.'),
      h2('The cash conversion cycle'),
      p('The cycle measures how long money is tied up: inventory days plus receivable days, minus payable days. A shop that holds stock for 45 days, sells on 30-day terms and pays suppliers in 15 days has a 60-day cycle — it funds two months of operations from its own pocket.'),
      callout('A quick diagnostic', 'If receivables grow faster than sales, or if you pay suppliers late while customers pay you late, the cycle is lengthening. That is a cash problem long before it appears in the profit figure.'),
      h2('The three kinds of cash flow'),
      ul(
        'Operating: sales collected minus expenses paid in the ordinary course.',
        'Investing: purchase or sale of equipment, vehicles and other long-term assets.',
        'Financing: borrowing, repayments and owner capital, reported separately because it is not earned.',
      ),
      h2('Forecast instead of guessing'),
      p('A rolling 13-week forecast is the standard tool: every expected receipt and payment, week by week, updated every Monday. Thirteen weeks is long enough to see a squeeze coming and short enough to stay accurate.'),
      h2('Levers when cash is tight'),
      ol(
        'Invoice the day you deliver, and follow up on day one past due.',
        'Shorten payment terms or request a deposit on large orders.',
        'Align supplier terms with customer payment cycles instead of accepting defaults.',
        'Pause discretionary spending before it becomes a habit.',
        'Discount slow-moving inventory rather than storing it indefinitely.',
        'Use short-term credit only for a defined, repayable gap — never for routine expenses.',
      ),
      h2('Protect the buffer'),
      p('Hold a reserve equal to several weeks of fixed costs, and keep business and personal accounts completely separate. Both habits turn a difficult quarter into a manageable one instead of an emergency.'),
      h2('Warning signs worth acting on'),
      ul(
        'Using short-term credit to cover routine bills.',
        'Paying suppliers late as a normal pattern rather than an exception.',
        'Large sales that require upfront spending and slow collection.',
        'No written forecast, or one that is only updated after a crisis.',
      ),
      p('Cash flow discipline is unglamorous. It rarely features in a growth story, yet it is the reason the story gets to continue.'),
    ],
  },
];

const wordCount = (blocks) =>
  blocks
    .flatMap((block) => (block.items ? block.items : [block.title, block.text]))
    .filter(Boolean)
    .join(' ')
    .split(/\s+/).length;

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

/**
 * Article covers are photographs licensed from Pexels under the Pexels Licence,
 * downloaded by scripts/fetch-article-photos.ps1 and self-hosted here, so the
 * site makes no third-party image request at runtime. Every file is 1200x675 and
 * doubles as the social preview image; sources are listed in
 * scripts/photo-credits.csv.
 *
 * imageAlt below describes what each photograph shows.
 */
const IMAGES = {
  'how-to-build-an-emergency-fund': '/images/photos/how-to-build-an-emergency-fund.jpg',
  'beginners-guide-to-investing': '/images/photos/beginners-guide-to-investing.jpg',
  'how-compound-interest-works': '/images/photos/how-compound-interest-works.jpg',
  'smart-ways-to-save-money': '/images/photos/smart-ways-to-save-money.jpg',
  'understanding-mutual-funds': '/images/photos/understanding-mutual-funds.jpg',
  'what-is-a-credit-score': '/images/photos/what-is-a-credit-score.jpg',
  'how-to-create-a-monthly-budget': '/images/photos/how-to-create-a-monthly-budget.jpg',
  'stock-market-basics-for-beginners': '/images/photos/stock-market-basics-for-beginners.jpg',
  'how-inflation-affects-your-money': '/images/photos/how-inflation-affects-your-money.jpg',
  'financial-planning-for-young-adults': '/images/photos/financial-planning-for-young-adults.jpg',
  'how-to-use-credit-cards-responsibly': '/images/photos/how-to-use-credit-cards-responsibly.jpg',
  'understanding-borrowing-and-interest-rates': '/images/photos/understanding-borrowing-and-interest-rates.jpg',
  'tax-basics-everyone-should-know': '/images/photos/tax-basics-everyone-should-know.jpg',
  'how-small-businesses-manage-cash-flow': '/images/photos/how-small-businesses-manage-cash-flow.jpg',
};

/** Final article objects: derived fields (image paths, date, read time) are computed once. */
export const BLOGS = RAW_BLOGS.map((blog) => ({
  ...blog,
  image: IMAGES[blog.slug],
  ogImage: IMAGES[blog.slug],
  date: formatDate(blog.isoDate),
  readTime: Math.max(1, Math.round(wordCount(blog.content) / 160)),
})).sort((a, b) => b.isoDate.localeCompare(a.isoDate));

export const getBlogBySlug = (slug) => BLOGS.find((blog) => blog.slug === slug);

export const getBlogsBySection = (section) => BLOGS.filter((blog) => blog.section === section);

export const getFeaturedBlog = () => BLOGS.find((blog) => blog.featured) ?? BLOGS[0];

/** Same-section articles first, then the most recent others. */
export const getRelatedBlogs = (blog, limit = 3) => {
  const others = BLOGS.filter((item) => item.id !== blog.id);
  const sameSection = others.filter((item) => item.section === blog.section);
  const rest = others.filter((item) => item.section !== blog.section);
  return [...sameSection, ...rest].slice(0, limit);
};
