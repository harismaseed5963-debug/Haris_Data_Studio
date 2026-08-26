/**
 * HARIS DATA STUDIO - Core Data Store
 * Brand Name: Haris Data Studio
 * Tagline: "Turn Data Into Decisions."
 */

const HarisDataStore = {
  brand: {
    name: "Haris Data Studio",
    tagline: "Turn Data Into Decisions.",
    statement: "We help businesses and students understand data through Excel, SQL, Power BI, and dashboards that turn numbers into decisions.",
    positioning: "A personal data analytics brand focused on helping businesses and students understand data and turn numbers into useful decisions.",
    flow: ["RAW DATA", "ANALYSIS", "INSIGHT", "DECISION"],
    colors: {
      primary: "#03045E",
      accent: "#00B4D8",
      supporting: "#CAF0F8",
      white: "#FFFFFF"
    }
  },

  skills: [
    { name: "Excel", level: "Advanced", desc: "Advanced formulas, Pivot Tables, Power Query" },
    { name: "SQL", level: "Advanced", desc: "Data extraction, Joins, Aggregations, Window Functions" },
    { name: "Power BI", level: "Expert", desc: "DAX, Data Modeling, KPI Dashboard Design" },
    { name: "Python", level: "Intermediate", desc: "Pandas, NumPy, Matplotlib, Data Wrangling" },
    { name: "Power Query", level: "Expert", desc: "ETL Processes, Automated Transformations" },
    { name: "DAX", level: "Advanced", desc: "Time Intelligence, Complex Measures" },
    { name: "Data Visualization", level: "Expert", desc: "Executive Dashboards & Visual Storytelling" },
    { name: "Business Analytics", level: "Strategic", desc: "Translating metrics into business decisions" }
  ],

  aboutProcess: [
    {
      num: "01",
      title: "UNDERSTAND",
      summary: "Understand the business problem, objectives, and available data.",
      details: "Every analytics project begins by identifying the core question. What metric is lagging? What decision needs validation? By interviewing stakeholders and defining business KPIs, we ensure the data points directly to measurable outcomes."
    },
    {
      num: "02",
      title: "ANALYZE",
      summary: "Clean, transform, explore, and analyze the data using the appropriate tools.",
      details: "Raw data is often messy and unstructured. Using Excel, SQL, Python, and Power Query, data is cleaned, validated, transformed, and queried to discover meaningful trends and hidden correlations."
    },
    {
      num: "03",
      title: "DECIDE",
      summary: "Turn analysis into meaningful insights and practical recommendations.",
      details: "Analysis is worthless if decision-makers can't take action. We design intuitive Power BI dashboards and executive summaries that turn complex calculations into clear, high-impact business decisions."
    }
  ],

  services: [
    {
      id: "excel-analytics",
      num: "SERVICE 01",
      title: "Excel Analytics",
      shortDesc: "Transform raw spreadsheets into automated analytical models and executive reporting tools.",
      icon: "file-spreadsheet",
      features: [
        "Data cleaning & deduplication",
        "Advanced nested formulas & XLOOKUP",
        "Dynamic Pivot Tables & Slicers",
        "Power Query ETL automation",
        "Custom financial & sales reporting"
      ],
      fullDetails: "Excel remains the backbone of business decision-making. Haris Data Studio builds bulletproof, clean Excel models equipped with Power Query to streamline repetitive reporting and automate data transformation."
    },
    {
      id: "sql-analytics",
      num: "SERVICE 02",
      title: "SQL Analytics",
      shortDesc: "Extract, filter, and structure large relational datasets to uncover backend data relationships.",
      icon: "database",
      features: [
        "Complex data extraction & filtering",
        "Multi-table INNER/LEFT/OUTER joins",
        "Aggregation & GROUP BY analytics",
        "Subqueries & Common Table Expressions (CTEs)",
        "Advanced window functions & ranking"
      ],
      fullDetails: "When business data spans millions of rows across multiple databases, SQL is indispensable. We write clean, optimized queries that extract insights efficiently and prepare datasets for business intelligence tools."
    },
    {
      id: "power-bi",
      num: "SERVICE 03",
      title: "Power BI",
      shortDesc: "Build interactive, real-time enterprise dashboards with custom DAX calculations.",
      icon: "bar-chart-3",
      features: [
        "Interactive cross-filtering dashboards",
        "Relational data modeling (Star Schema)",
        "Custom DAX calculated columns & measures",
        "Scheduled refreshes & automated reporting",
        "Executive KPI tracking"
      ],
      fullDetails: "Power BI connects raw databases directly to decision-makers. Haris Data Studio designs crisp, highly responsive Power BI dashboards with robust DAX measures for real-time performance tracking."
    },
    {
      id: "dashboard-design",
      num: "SERVICE 04",
      title: "Dashboard Design",
      shortDesc: "Craft human-centered UI/UX dashboards that tell clear data stories at a glance.",
      icon: "layout-dashboard",
      features: [
        "Executive KPI scorecards",
        "Operational business dashboards",
        "Interactive slice & dice drill-downs",
        "Visual hierarchy & data storytelling"
      ],
      fullDetails: "A dashboard should answer questions, not generate them. We apply visual hierarchy, deliberate color accents (#00B4D8), and uncluttered layouts so leadership can spot bottlenecks in seconds."
    },
    {
      id: "data-cleaning",
      num: "SERVICE 05",
      title: "Data Cleaning",
      shortDesc: "Audit, repair, and standardize corrupted or messy datasets for accurate analysis.",
      icon: "sparkles",
      features: [
        "Messy dataset restructuring",
        "Missing value imputation & error removal",
        "Type validation & format standardization",
        "Data pipeline validation"
      ],
      fullDetails: "Bad data leads to costly business decisions. We scrub messy datasets using SQL and Power Query, ensuring data integrity, correct data types, and accurate baseline metrics before modeling."
    },
    {
      id: "analytics-education",
      num: "SERVICE 06",
      title: "Analytics Education",
      shortDesc: "Empower students and teams to master Excel, SQL, Power BI, and analytical thinking.",
      icon: "graduation-cap",
      features: [
        "Practical Excel hands-on workshops",
        "Real-world SQL query tutorials",
        "Power BI DAX & modeling guidance",
        "Data analytics career mentoring"
      ],
      fullDetails: "Haris Data Studio is deeply committed to educational mentorship. We break down daunting technical tools into step-by-step, actionable lessons for aspiring data analysts and business students."
    }
  ],

  projects: [
    {
      id: "student-performance",
      num: "PROJECT 01",
      title: "Student Performance Analysis",
      category: "Power BI",
      tools: ["SQL", "Excel", "Power BI"],
      shortDesc: "Analyzed student academic performance data to identify key factors influencing exam outcomes and dropout risks.",
      insight: "Discovered that attendance rate (>85%) and assignment submission timeliness were 3.2x more predictive of final exam performance than standardized test entrance scores.",
      caseStudy: {
        problem: "An educational institute struggled to understand why student pass rates varied dramatically across different semesters.",
        approach: "Cleaned demographic and performance datasets in Excel, executed SQL join queries to synthesize semester performance, and designed a Power BI dashboard.",
        metrics: [
          { label: "Students Analyzed", value: "2,450" },
          { label: "Predictive Factors", value: "8 Key Drivers" },
          { label: "Pass Rate Improvement", value: "+14.5%" }
        ],
        chartData: {
          labels: ["<60% Attendance", "60-75% Attendance", "75-85% Attendance", ">85% Attendance"],
          datasets: [
            { label: "Avg Exam Score (%)", data: [58, 67, 79, 91], color: "#00B4D8" }
          ]
        }
      }
    },
    {
      id: "sales-analytics",
      num: "PROJECT 02",
      title: "Sales Analytics Dashboard",
      category: "Excel",
      tools: ["Excel", "Power BI"],
      shortDesc: "Built an interactive executive dashboard to monitor revenue, gross margin, product categories, and regional sales.",
      insight: "Identified top 15% of product SKUs generating 68% of total gross profit, enabling the inventory team to optimize stock levels and reduce holding costs.",
      caseStudy: {
        problem: "A regional retail brand relied on static weekly email spreadsheets, delaying strategic sales decisions by up to 10 days.",
        approach: "Automated data ingestion with Excel Power Query and delivered an interactive Power BI dashboard featuring dynamic slicers and DAX time-intelligence formulas.",
        metrics: [
          { label: "Total Revenue Tracked", value: "$4.2M" },
          { label: "Reporting Time Saved", value: "12 hrs/week" },
          { label: "Margin Growth", value: "+8.4%" }
        ],
        chartData: {
          labels: ["Q1 Sales", "Q2 Sales", "Q3 Sales", "Q4 Sales"],
          datasets: [
            { label: "Revenue ($K)", data: [850, 1120, 980, 1250], color: "#03045E" },
            { label: "Gross Profit ($K)", data: [340, 480, 410, 560], color: "#00B4D8" }
          ]
        }
      }
    },
    {
      id: "customer-churn",
      num: "PROJECT 03",
      title: "Customer Churn Analysis",
      category: "Python",
      tools: ["SQL", "Python", "Power BI"],
      shortDesc: "Analyzed subscriber churn behaviors to pinpoint early warning indicators and recommend retention interventions.",
      insight: "Subscribers who logged fewer than 2 active sessions in their 3rd month were 74% more likely to churn within 90 days.",
      caseStudy: {
        problem: "A digital service saw steady customer acquisition but experienced a concerning 6.8% monthly churn rate.",
        approach: "Extracted user activity logs via SQL, performed cohort retention analysis in Python (Pandas/Seaborn), and mapped customer risk profiles in Power BI.",
        metrics: [
          { label: "User Profiles", value: "18,200" },
          { label: "Churn Reduction Target", value: "-2.5%" },
          { label: "ROI Potential", value: "$180K/yr" }
        ],
        chartData: {
          labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
          datasets: [
            { label: "Active Cohort Retention (%)", data: [100, 88, 76, 71, 68, 65], color: "#00B4D8" }
          ]
        }
      }
    }
  ],

  storylineSteps: [
    {
      id: "raw-data",
      stepNum: "01",
      title: "RAW DATA",
      subtitle: "Unstructured Data Inputs",
      desc: "Gathering messy CSVs, SQL database tables, Excel workbooks, and API exports.",
      details: "Data arrives fragmented across multiple systems. This phase focuses on gathering all relevant tables, validating source credibility, and defining data schemas."
    },
    {
      id: "clean-data",
      stepNum: "02",
      title: "CLEAN DATA",
      subtitle: "ETL & Transformation",
      desc: "Removing duplicates, standardizing data types, handling nulls with Power Query & SQL.",
      details: "Using SQL aggregations and Power Query, we eliminate errors, standardize date formats, and build consistent relationships."
    },
    {
      id: "analysis",
      stepNum: "03",
      title: "ANALYSIS",
      subtitle: "Exploratory & Analytical Querying",
      desc: "Applying statistical formulas, DAX measures, window functions, and trend lines.",
      details: "We test hypotheses, analyze distributions, compare cohorts, and calculate year-over-year growth metrics to identify anomalies."
    },
    {
      id: "visualization",
      stepNum: "04",
      title: "VISUALIZATION",
      subtitle: "Dashboard & Charting",
      desc: "Designing intuitive Power BI visual stories with deliberate visual hierarchy.",
      details: "Turning dense table calculations into crisp bar graphs, trend lines, KPI cards, and scatter plots using brand colors (#00B4D8 and #03045E)."
    },
    {
      id: "business-insight",
      stepNum: "05",
      title: "BUSINESS INSIGHT",
      subtitle: "Contextual Findings",
      desc: "Translating chart patterns into actionable commercial explanations.",
      details: "Charts show what happened; insights explain why it happened and what risk or opportunity it represents for the organization."
    },
    {
      id: "decision",
      stepNum: "06",
      title: "DECISION",
      subtitle: "Actionable Strategy",
      desc: "Empowering stakeholders to execute high-confidence, data-backed decisions.",
      details: "The ultimate goal: leadership approves budget allocations, operational changes, or student intervention strategies based on verified data."
    }
  ],

  whyUs: [
    {
      num: "01",
      title: "Business-Focused",
      desc: "Focus on solving real business problems instead of simply creating reports. Every dashboard is engineered around core revenue and operational metrics."
    },
    {
      num: "02",
      title: "Clear & Simple",
      desc: "Turn complex analysis into understandable insights. We strip away technical jargon so stakeholders can understand findings immediately."
    },
    {
      num: "03",
      title: "Data-Driven",
      desc: "Use evidence and rigorous analysis to support better decisions. We replace intuition and guesswork with empirical data models."
    },
    {
      num: "04",
      title: "Continuous Learning",
      desc: "Continuously improve analytical skills and discover better ways to work with data, ensuring you benefit from modern industry best practices."
    }
  ],

  articles: [
    {
      id: "sql-queries",
      category: "SQL Tutorials",
      title: "5 SQL Queries Every Data Analyst Should Know",
      readTime: "6 min read",
      shortDesc: "Master CTEs, ROW_NUMBER(), LAG/LEAD, conditional CASE WHEN aggregations, and multi-stage joins to solve 90% of technical interview and workplace queries.",
      content: `
        <h3>1. Common Table Expressions (CTEs)</h3>
        <p>CTEs improve query readability and allow you to break down complex queries into logical, modular steps.</p>
        <pre><code>WITH MonthlySales AS (
    SELECT 
        DATE_TRUNC('month', order_date) AS sales_month,
        SUM(amount) AS total_revenue
    FROM orders
    GROUP BY 1
)
SELECT * FROM MonthlySales WHERE total_revenue > 50000;</code></pre>

        <h3>2. Window Functions: ROW_NUMBER() and DENSE_RANK()</h3>
        <p>Essential for finding top-performing products per category or deduplicating records.</p>

        <h3>3. Time Comparisons with LAG() and LEAD()</h3>
        <p>Compare current month performance against previous month without complex self-joins.</p>
      `
    },
    {
      id: "power-bi-dashboard",
      category: "Power BI",
      title: "How to Build a Professional Power BI Dashboard",
      readTime: "8 min read",
      shortDesc: "A step-by-step guide to Star Schema data modeling, clean color palette selection, mobile layout responsiveness, and DAX time-intelligence optimization.",
      content: `
        <h3>1. Star Schema over Flat Tables</h3>
        <p>Always separate your dataset into Fact tables (transactions, orders) and Dimension tables (customers, products, calendar). This dramatically improves Power BI query speed.</p>
        
        <h3>2. Establish a Strict Color Palette</h3>
        <p>Use max 2-3 primary colors. At Haris Data Studio, we use #03045E for structural cards and headers, and #00B4D8 for data callouts and active highlights.</p>
      `
    },
    {
      id: "excel-techniques",
      category: "Excel Tips",
      title: "Excel Techniques That Save Data Analysts Hours",
      readTime: "5 min read",
      shortDesc: "Supercharge your productivity using Power Query automation, dynamic array formulas, XLOOKUP, and custom pivot table KPI calculations.",
      content: `
        <h3>Stop VLOOKUP. Embrace XLOOKUP.</h3>
        <p>XLOOKUP is faster, safer against column insertions, and defaults to exact matching without breaking your sheet syntax.</p>

        <h3>Automate CSV imports with Power Query</h3>
        <p>Never copy and paste monthly reports manually. Set up a Power Query folder connection to merge files automatically with a single click.</p>
      `
    },
    {
      id: "why-businesses-need-analysts",
      category: "Business Insights",
      title: "Why Businesses Need Data Analysts",
      readTime: "7 min read",
      shortDesc: "Discover how turning raw spreadsheet data into structured insights prevents costly mistakes, reveals hidden customer churn, and drives profitable growth.",
      content: `
        <p>Data without context is noise. Most companies sit on mountains of raw transactions but lack the tools and analytical methodology to answer critical business questions.</p>
        <p>By connecting raw data to clear executive dashboards, businesses reduce operational risk and align teams around verified goals.</p>
      `
    }
  ]
};

// Freeze data to prevent unintentional mutation
Object.freeze(HarisDataStore);
