// Verbatim job opportunities migrated from ITS Cooling (https://www.itscooling.com/pages/careers)

export interface JobSectionItem {
  type: 'p' | 'ul';
  text?: string;
  items?: string[];
}

export interface JobSection {
  title: string;
  content: JobSectionItem[];
}

export interface JobOpportunity {
  id: string;
  title: string;
  companyLocation: string;
  employmentType: string;
  workArrangement: string;
  reportingTo?: string;
  sections: JobSection[];
}

export const CAREERS_INTRO = {
  "badge": "CAREERS AT ITS COOLING",
  "heading": "Join Our Team",
  "subheading": "Build the next generation of advanced thermal management solutions.",
  "descriptionParagraphs": [
    "Innovative Thermal Solutions (ITS) designs and manufactures custom, high-performance thermal management solutions in North America, specializing in Friction Stir Welding (FSW) and advanced cooling technologies. Our solutions include air-cooled heat sinks, liquid-cooled cold plates, heat pipe assemblies, custom copper and aluminum bus bars, and complete air and liquid cooling systems engineered for demanding applications.",
    "From concept to production, we are your single-source thermal management partner. Our experienced engineering team combines advanced thermal analysis, simulation, design optimization, prototyping, and manufacturing to develop solutions tailored to each customer's performance, reliability, and application requirements.",
    "We serve a broad range of industries, including Power Electronics, Battery and Energy Storage, Aerospace and Defence, RF and Microwave, Satellite Communications, Laser and Photonics, Medical, and Data Centres.",
    "Headquartered in Guelph, Ontario, Canada, ITS brings engineering and manufacturing together under one roof. Our in-house capabilities, including Friction Stir Welding, precision CNC machining, brazing, assembly, and thermal testing, provide greater control over product quality, performance, and production.",
    "As an ISO 9001:2015 QMS certified company, we are committed to delivering reliable, high-quality thermal solutions while helping our customers simplify their supply chains, reduce development risks, and accelerate time to market.",
    "From thermal design to North American manufacturing, ITS delivers integrated cooling solutions built around your application. If you have any inquiries about ITS' capabilities or about how ITS can help you in your thermal solution needs, please contact us at: engineering@itscooling.com"
  ],
  "facilityStats": [
    {
      "label": "Headquarters",
      "value": "Guelph, Ontario, Canada"
    },
    {
      "label": "Quality Certification",
      "value": "ISO 9001:2015 QMS"
    },
    {
      "label": "Manufacturing",
      "value": "100% In-House North American"
    },
    {
      "label": "Core Specialization",
      "value": "FSW & Liquid Cold Plates"
    }
  ]
};

export const JOB_OPENINGS: JobOpportunity[] = [
  {
    "id": "job-1",
    "title": "Manager of Finance",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring a Manager of Finance to lead the finance function at ITS Cooling. Reporting to our President & CEO and managing our Accounting Associate, you'll own month-end and year-end close, cash flow, budgeting, and financial reporting, and give leadership the insight it needs to make good decisions. As we invest in new equipment and production capacity, you'll play a key role in planning and funding that growth."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Lead month-end and year-end close, and prepare accurate monthly financial statements and management reports",
              "Manage, mentor, and develop our Accounting Associate, and oversee accounts payable, accounts receivable, and payroll",
              "Own cash flow forecasting and working capital management, including collections, payment terms, and banking relationships",
              "Build the annual budget and rolling forecasts, and report on results against plan",
              "Support financing and capital planning for equipment and facility investments, including work with lenders",
              "Analyze product and job costing, margins, and inventory valuation with sales, supply chain, and operations",
              "Manage HST and other tax filings, and coordinate with our external accountants on year-end financial statements and corporate tax",
              "Prepare and track claims for government funding and tax credit programs (e.g., SR&ED and provincial and federal grants)",
              "Manage multi-currency transactions, including U.S. dollar sales and international supplier payments",
              "Strengthen internal controls, financial policies, and processes as the company scales",
              "Improve how we use our ERP system (Odoo) for accounting and financial reporting"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "A CPA designation, or significant progress toward one",
              "5+ years of progressive accounting and finance experience, ideally in manufacturing",
              "2+ years of experience supervising or mentoring accounting staff",
              "Strong knowledge of ASPE, cost accounting, and Canadian sales and corporate tax requirements",
              "Hands-on experience with month-end close, cash flow forecasting, and budgeting",
              "Advanced Excel skills and experience with accounting or ERP software",
              "Clear communication skills and the ability to explain financial results to non-finance leaders"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "Experience at a fast-growing small or mid-sized company",
              "Experience with Odoo or a similar ERP system",
              "Experience with SR&ED and government funding claims",
              "Experience with equipment financing and capital investment planning",
              "Experience with inventory accounting and import costs (duties, freight, foreign exchange)"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Stable, full-time work with a company that's scaling quickly",
              "Real ownership of the finance function and a direct line to leadership",
              "The chance to shape financial systems and processes that support our growth",
              "A tight-knit, collaborative team where your contributions are visible and valued"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Please include your resume and a cover letter in one PDF titled FirstName_LastName_Manager of Finance."
          },
          {
            "type": "p",
            "text": "Email subject: Name – Manager of Finance"
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and help steer the financial strategy behind our growth."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Full-time, permanent",
    "workArrangement": "On-site",
    "reportingTo": "President & CEO"
  },
  {
    "id": "job-2",
    "title": "People & Culture Generalist",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring a People & Culture Generalist to run the people side of a fast-growing manufacturer – recruiting, onboarding, training, employee relations, and health and safety."
          },
          {
            "type": "p",
            "text": "Just as importantly, you'll be a trusted advocate for our people: a sounding board for employees, their voice to management, and management's voice to the team. We've had 100% employee retention last year and so far this year, and we're counting on you to help keep it that way as we grow."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "p",
            "text": "Employee Relations & Culture"
          },
          {
            "type": "ul",
            "items": [
              "Be a trusted point of contact for employees and look out for their well-being and best interests",
              "Bring employee concerns to leadership, and communicate management decisions to the team clearly and fairly",
              "Resolve employee questions and conflicts with sound judgment, discretion, and a calm approach",
              "Set a positive tone and help build a respectful, supportive, and engaged culture",
              "Plan team events and recognition programs that support retention",
              "Coordinate performance reviews and support managers with coaching and documentation"
            ]
          },
          {
            "type": "p",
            "text": "Recruitment & Onboarding"
          },
          {
            "type": "ul",
            "items": [
              "Lead full-cycle recruitment, from job descriptions and screening to interviews and offer letters",
              "Make sure postings and hiring practices meet Ontario employment requirements",
              "Run a consistent onboarding program that sets new hires up for success"
            ]
          },
          {
            "type": "p",
            "text": "Training, Health & Safety"
          },
          {
            "type": "ul",
            "items": [
              "Maintain the training matrix and records, including required WHMIS and OHSA training",
              "Support our health and safety program, including the JHSC, monthly inspections, incident investigations, and WSIB reporting"
            ]
          },
          {
            "type": "p",
            "text": "HR Operations & Policy"
          },
          {
            "type": "ul",
            "items": [
              "Maintain HR policies, SOPs, and the employee handbook",
              "Keep employee records accurate, and support payroll and benefits administration",
              "Track HR metrics such as time to hire, turnover, and training completion"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "A diploma or degree in Human Resources, Business, or a related field",
              "3+ years of HR or Personnel Management experience, ideally in the manufacturing or tech industry",
              "Working knowledge of the Ontario ESA, OHSA, WSIB, and Human Rights Code",
              "Experience with full-cycle recruitment and onboarding",
              "Excellent communication skills and comfort working with employees on the shop floor",
              "Strong organization skills and proficiency with Microsoft Office"
            ]
          }
        ]
      },
      {
        "title": "Who You Are",
        "content": [
          {
            "type": "ul",
            "items": [
              "A people person who reads people and situations well",
              "Calm under pressure – you keep a cool head when others are stressed",
              "Approachable and accommodating",
              "Fair and balanced, with credibility with both employees and management",
              "Discreet and trustworthy with confidential information"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "CHRP or CHRL designation, or progress toward one",
              "JHSC Certification (Part One and Two)",
              "Experience building HR programs at a growing company",
              "Payroll and benefits administration experience",
              "Experience with HRIS or ERP systems (e.g., Odoo)"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Stable, full-time work with a company that's scaling quickly",
              "A chance to participate in and shape the work culture at ITS, with direct leadership",
              "A tight-knit, collaborative team where your contributions are visible and valued"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and help build the team behind the next generation of thermal solutions."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Full-time, permanent",
    "workArrangement": "On-site",
    "reportingTo": "President & CEO"
  },
  {
    "id": "job-3",
    "title": "Technical Buyer – Supply Chain",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring a Technical Buyer to source the parts and materials that go into our products. This isn't a typical purchasing role – you'll read engineering drawings, understand how parts are made, and know what drives their cost. You'll build complete RFQ packages, find and qualify the right suppliers, evaluate quotes on both technical and commercial terms, and give our sales and engineering teams accurate costs for customer quotes."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Review drawings, models, and BOMs, and prepare complete RFQ packages with the right specifications, materials, tolerances, finishes, and quantities",
              "Source and qualify suppliers for machined parts, extrusions, skived heat sinks, busbars, sheet metal, raw aluminum and copper, hardware, and finishing services",
              "Evaluate supplier quotes technically and commercially, and understand the cost drivers behind them (material, machining time, setups, tooling, and finishing)",
              "Build cost breakdowns and should-cost estimates to support customer quotes with sales and engineering",
              "Negotiate pricing, lead times, MOQs, and terms with domestic and overseas suppliers",
              "Answer supplier technical questions and work with engineering on design-for-manufacturing and cost-reduction opportunities",
              "Issue purchase orders, follow up on deliveries, and keep purchasing records accurate in Odoo",
              "Work with Quality on supplier qualification, first article approvals, and supplier corrective actions",
              "Coordinate with logistics on international shipments, incoterms, and customs requirements",
              "Maintain the approved supplier list and track supplier performance on quality, cost, and delivery"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "A diploma or degree in Mechanical Engineering Technology, Engineering, or Supply Chain with a strong technical background",
              "3+ years of purchasing or sourcing experience in manufacturing, ideally buying custom machined or fabricated parts",
              "The ability to read engineering drawings and a working knowledge of GD&T",
              "A solid understanding of machining and fabrication processes and what drives part cost",
              "Strong negotiation and communication skills",
              "Advanced Excel skills for cost modelling and quote comparisons",
              "Experience with ERP or MRP systems"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "Experience sourcing from suppliers in Asia",
              "SCMP or CPSM designation",
              "Experience with Odoo",
              "Basic SOLIDWORKS skills for viewing models and drawings",
              "Knowledge of aluminum and copper materials, extrusion, skiving, and finishing processes"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Stable, full-time work with a company that's scaling quickly",
              "A role where your technical knowledge directly shapes our costs and customer quotes",
              "Room to grow into a supply chain leadership role as we expand",
              "A tight-knit, collaborative team where your contributions are visible and valued"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Please include your resume and a cover letter in one PDF titled FirstName_LastName_Technical Buyer."
          },
          {
            "type": "p",
            "text": "Email subject: Name – Technical Buyer"
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and help build the supply chain behind our growth."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Full-time, permanent",
    "workArrangement": "On-site",
    "reportingTo": "Operations Manager"
  },
  {
    "id": "job-4",
    "title": "Territory Manager, Canada",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring a Territory Manager to grow ITS Cooling's business across Canada. You'll own the Canadian territory – finding and winning new customers, building long-term relationships with engineering and purchasing teams, and working with our manufacturer's representative partners to grow the pipeline. You'll also help convert warm leads across North America and represent ITS at trade shows. It's a hunter role with a technical edge, and a chance to build a territory from the ground up with a fast-growing manufacturer."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Identify, pursue, and win new business with OEMs and manufacturers across Canada in EV, BESS, power electronics, and industrial markets",
              "Build and manage a growing Canadian sales pipeline, from first contact through quote, negotiation, and purchase order",
              "Meet with prospective and existing customers in person and virtually, and build strong relationships with their engineering and purchasing teams",
              "Follow up quickly on warm and hot leads from inbound inquiries, trade shows, and partners across North America",
              "Work with our applications and engineering teams to understand customer requirements and recommend the right thermal solution",
              "Coordinate RFQs and quotes with inside sales and engineering, and follow up to close",
              "Support our manufacturer's representative partners with presentations, product documentation, and joint customer meetings",
              "Represent ITS Cooling at trade shows and industry events, and lead pre-show planning and post-show follow-up",
              "Keep all activities, opportunities, and forecasts up to date in our CRM (Odoo)",
              "Share market and competitor insights, and help improve our sales processes as the team grows"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "3+ years of B2B sales or business development experience selling technical or engineered products to manufacturers",
              "A proven track record of finding new customers and growing accounts",
              "The ability to understand technical products and explain them clearly to engineers and buyers",
              "Strong relationship-building, negotiation, and presentation skills",
              "Self-motivation and the discipline to manage your own territory and pipeline",
              "Experience using a CRM to manage leads, opportunities, and forecasts",
              "A valid driver's licence and the ability to travel within Ontario and occasionally across Canada and the U.S."
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "A degree or diploma in engineering, engineering technology, or a related technical field",
              "Experience selling thermal management products, machined or fabricated parts, or components for power electronics",
              "Existing relationships in the Canadian EV, energy storage, power electronics, or industrial sectors",
              "Experience working with manufacturer's representatives or channel partners",
              "Familiarity with Odoo or similar CRM/ERP systems"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Real ownership of a territory with strong growth potential",
              "Technical products that solve real problems for leading EV, energy storage, and power electronics companies",
              "Room to grow with the sales team as the company scales",
              "A tight-knit, collaborative team where your contributions are visible and valued"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time; in-office in Guelph during onboarding, then hybrid with regular customer visits",
              "Travel: Regular travel within Ontario and occasional travel across Canada and the U.S."
            ]
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and help bring next-generation thermal solutions to customers across Canada."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Full-time, permanent",
    "workArrangement": "Hybrid with travel",
    "reportingTo": "Sales Manager"
  },
  {
    "id": "job-5",
    "title": "Quality Assurance Co-op",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're looking for a Quality Assurance Co-op student to join our quality team for an 8 to 12-month work term. You'll work with our QA Specialist, machinists, and engineers to inspect parts, document and solve quality issues, and strengthen our ISO 9001:2015 quality system. It's a hands-on role split between the shop floor and the office, and the longer term means you'll take on real responsibility and see your improvement projects through to the end."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Perform receiving, in-process, and final inspections on machined parts, FSW cold plates, and assemblies",
              "Measure parts using calipers, micrometers, height gauges, and other precision tools, and record results accurately",
              "Help prepare First Article Inspection (FAI) reports and customer quality documentation",
              "Document non-conforming parts and help complete NCRs, CARs, and deviation requests",
              "Support root cause analysis (5 Whys, fishbone, 8D) and follow up on corrective actions",
              "Write and update SOPs, work instructions, and inspection criteria, and help maintain document control",
              "Support internal audits and help prepare for external ISO 9001 audits",
              "Assist with leak and pressure testing and weld quality checks",
              "Help track gauge calibration and maintain quality records",
              "Analyze quality data (scrap, first-pass yield, defect trends) in Excel and present findings to the team",
              "Inspect incoming parts from suppliers and help track supplier quality",
              "Lead a continuous improvement project during your work term"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "Currently enrolled in an Engineering, Engineering Technology, Quality, or related program and eligible for an 8 to 12-month co-op work term",
              "The ability to read engineering drawings and a basic understanding of GD&T",
              "An interest in quality systems, manufacturing processes, and problem-solving",
              "Strong attention to detail and accurate record-keeping",
              "Clear written and verbal communication, and comfort working on the shop floor",
              "Proficiency with Microsoft Excel and Office"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "Hands-on experience with precision measuring tools",
              "Familiarity with ISO 9001, APQP, or PPAP",
              "Exposure to CNC machining or other manufacturing processes",
              "Experience with SOLIDWORKS or other CAD software",
              "Data analysis skills (Excel, SPC, or Python)"
            ]
          }
        ]
      },
      {
        "title": "What You'll Gain",
        "content": [
          {
            "type": "ul",
            "items": [
              "Hands-on experience running quality in an ISO 9001:2015-certified manufacturing environment",
              "Exposure to CNC machining, friction stir welding, and leak testing",
              "Mentorship from our QA Specialist and engineering team",
              "Potential for future co-op terms or full-time employment after graduation"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and build a strong foundation for a career in quality."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Co-op work term: 8 to 12 months",
    "workArrangement": "Start date: Immediate",
    "reportingTo": ""
  },
  {
    "id": "job-6",
    "title": "Mechanical Engineer Co-op - Hands On Role",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're looking for a Mechanical Engineering Co-op student to join our engineering team for an 8 to 12-month work term. You'll work on real customer projects from concept to production – designing cold plates and heat sinks, developing fixtures, supporting FSW process development, and solving problems alongside our engineers and machinists on the shop floor. It's a hands-on role with real ownership, and the longer term means you'll see your work through from first sketch to finished parts."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Create 3D models, assemblies, and 2D drawings in SOLIDWORKS for cold plates, heat sinks, busbars, and thermal assemblies, applying GD&T",
              "Design production fixtures and tooling for CNC machining, friction stir welding, and assembly",
              "Support FSW process development, including weld trials, parameter optimization, and cycle-time reduction",
              "Plan and run testing such as pressure/leak, flow, and thermal performance tests, and document results in clear reports",
              "Work with production, quality, and sales to troubleshoot issues and drive continuous improvement projects"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "Currently enrolled in a Mechanical, Mechatronics, or related Engineering degree program and eligible for an 8 to 12-month co-op work term",
              "Working knowledge of 3D CAD (SOLIDWORKS preferred) and engineering drawing practices",
              "An understanding of GD&T and manufacturing processes, especially CNC machining",
              "Strong problem-solving skills and attention to detail",
              "Clear written and verbal communication, and comfort working on the shop floor",
              "Proficiency with Microsoft Excel and Office"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "Hands-on machining or shop experience – student design teams (Formula SAE, Baja, etc.) count",
              "Coursework in heat transfer, fluid mechanics, and materials",
              "Interest in EVs, battery energy storage, or power electronics"
            ]
          }
        ]
      },
      {
        "title": "What You'll Gain",
        "content": [
          {
            "type": "ul",
            "items": [
              "Real ownership of customer-facing engineering projects",
              "Hands-on exposure to friction stir welding, multi-axis CNC machining, and thermal testing",
              "Mentorship from experienced engineers in a fast-growing company",
              "Potential for future co-op terms or full-time employment after graduation",
              "A tight-knit, collaborative team where your contributions are visible and valued."
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Please include a copy of your resume, transcript and a cover letter in one PDF titled FirstName_LastName_Mech Eng Co-op"
          },
          {
            "type": "p",
            "text": "Email subject: Name - Waterloo - Mechanical Engineer Co-op"
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and help engineer the thermal solutions behind tomorrow's EVs and energy storage systems."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Co-op work term: 8 to 12 months",
    "workArrangement": "Full-time, on-site",
    "reportingTo": ""
  },
  {
    "id": "job-7",
    "title": "CNC Operator",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring a CNC Operator to help keep our manufacturing operations moving. You'll run parts on our CNC milling machines, deburr and inspect finished components, and support the shop with material handling, and general production work. No CNC experience? No problem – we'll train the right person. It's a great entry point into precision manufacturing, with a clear path to grow into setup and machinist roles."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Load and unload parts on CNC milling machines and monitor machines during production runs",
              "Perform in-process quality checks using calipers, micrometers, and gauges, following inspection instructions",
              "Deburr, clean, and finish machined parts to specification",
              "Change tools and make basic offset adjustments under the guidance of our machinists",
              "Prepare and stage raw material and fixtures for upcoming jobs",
              "Support friction stir welding, assembly, and leak testing operations as needed",
              "Keep machines and work areas clean, safe, and organized (5S)",
              "Follow safety procedures, work instructions, and ISO 9001 quality standards"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "Reliability, attention to detail, and a willingness to learn",
              "Basic mechanical aptitude and confidence with hand tools",
              "Comfort standing for extended periods and lifting up to 50 lbs",
              "Comfort with basic measurements (training provided on precision instruments)",
              "Good communication and a team-first attitude",
              "A commitment to working safely and following procedures"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "Experience operating CNC machines or other production equipment",
              "The ability to read basic engineering drawings",
              "Experience in a manufacturing or warehouse setting",
              "Forklift certification",
              "Current or completed studies in a machining or manufacturing program"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Steady, full-time work with a company that's scaling quickly",
              "Hands-on training on modern Haas and Mazak CNC equipment",
              "A clear path to grow into CNC setup and machinist roles",
              "A close-knit team doing meaningful work at the leading edge of thermal management"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and start building a career in precision manufacturing."
          }
        ]
      }
    ],
    "companyLocation": "Full-time | On-site | Entry level – training provided",
    "employmentType": "Full-time, permanent",
    "workArrangement": "On-site",
    "reportingTo": ""
  },
  {
    "id": "job-8",
    "title": "CNC Milling Machinist",
    "sections": [
      {
        "title": "The Role",
        "content": [
          {
            "type": "p",
            "text": "We're hiring an experienced CNC Milling Machinist to set up, run, and prove jobs on our Haas and Mazak milling centres. You'll turn drawings into precision aluminum and copper parts – including the cold plates and heat sinks that go into EVs and battery storage systems – and you'll have a real say in how we tool, fixture, and run our jobs as we scale."
          }
        ]
      },
      {
        "title": "What You'll Do",
        "content": [
          {
            "type": "ul",
            "items": [
              "Set up and operate 3-, 4-, and 5-axis Haas and Mazak CNC milling machines, including work offsets, tool setting, and fixturing",
              "Read and interpret engineering drawings, including GD&T, to plan machining operations",
              "Edit and optimize G & M code at the control, and work with our programmers on Mastercam programs",
              "Prove out new programs and perform first article inspections",
              "Inspect parts using micrometers, calipers, height gauges, bore gauges, and other precision tools, and record results",
              "Machine aluminum and copper components, including FSW cold plate bases and covers, heat sinks, and busbars",
              "Select and maintain cutting tools, holders, and fixtures, and recommend improvements to reduce cycle times and scrap",
              "Troubleshoot machining issues and perform routine machine maintenance",
              "Train and support CNC operators on loading, basic offsets, and in-process inspection",
              "Follow ISO 9001 quality procedures and safety protocols, and keep a clean, organized 5S work area"
            ]
          }
        ]
      },
      {
        "title": "What You Bring",
        "content": [
          {
            "type": "ul",
            "items": [
              "3+ years of experience setting up and operating CNC milling machines in a production or job shop environment",
              "Strong blueprint reading skills with a working knowledge of GD&T",
              "The ability to read and edit G & M code",
              "Confidence with precision measuring tools and inspection techniques",
              "Experience with multi-axis setups (4th axis and/or 5-axis)",
              "Strong attention to detail, mechanical aptitude, and problem-solving skills",
              "Reliability and a team-first attitude"
            ]
          }
        ]
      },
      {
        "title": "Nice to Have",
        "content": [
          {
            "type": "ul",
            "items": [
              "General Machinist (429A) Certificate of Qualification or Red Seal",
              "Experience with Haas and/or Mazak controls",
              "Mastercam or other CAM programming experience",
              "Experience machining aluminum and copper at production volumes",
              "Exposure to lean manufacturing or ISO 9001 environments",
              "Knowledge of Friction Stir Welding (FSW)"
            ]
          }
        ]
      },
      {
        "title": "Why ITS Cooling",
        "content": [
          {
            "type": "ul",
            "items": [
              "Stable, full-time work with a company that's scaling quickly",
              "Modern Haas and Mazak equipment and advanced FSW technology",
              "Real room to grow into lead, programming, or supervisory roles as we scale",
              "A close-knit team doing meaningful work at the leading edge of thermal management"
            ]
          }
        ]
      },
      {
        "title": "Posting Details",
        "content": [
          {
            "type": "ul",
            "items": [
              "Schedule: Full-time, 40 hours/week, on-site in Guelph"
            ]
          },
          {
            "type": "p",
            "text": "Join ITS Cooling and put your skills to work on precision parts that power the energy transition."
          },
          {
            "type": "p",
            "text": "Choose the position you are applying for and upload your resume."
          }
        ]
      }
    ],
    "companyLocation": "Innovative Thermal Solutions (ITS Cooling) – Guelph, Ontario",
    "employmentType": "Full-time, permanent",
    "workArrangement": "On-site",
    "reportingTo": ""
  }
];
