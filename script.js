/**
 * Ismail Mahmoud Mohamed - Portfolio Interactive Engine
 * Handles: Bilingual toggling (EN/AR), Typing effect, Project filtering,
 * Image lightboxes, Gallery modal, Counter animations, and Smooth interactions.
 */

// --- TRANSLATION DICTIONARY (EN / AR) ---
const translations = {
  en: {
    nav_about: "About",
    nav_experience: "Experience",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_skills: "Skills",
    nav_contact: "Contact",
    btn_resume: "CV",
    btn_lets_talk: "Let's Talk",

    hero_status: "Open to Data Science & Analytics Opportunities",
    hero_greeting: "Hello, I'm",
    hero_i_am: "I am a",
    hero_bio: "Data Science & Analytics specialist skilled in transforming complex, real-world datasets into strategic business intelligence. Experienced in end-to-end pipelines: EDA, data cleaning, statistical modeling, machine learning, and interactive Power BI dashboards.",
    hero_btn_projects: "Explore Projects",
    hero_btn_cv: "Download CV",
    hero_connect: "Connect with me:",

    metric_records: "Records Processed & Cleaned",
    metric_records_sub: "99.2% Data Cleanliness Rate",
    metric_encounters: "Patient Encounters Modeled",
    metric_encounters_sub: "Across 5,855+ Providers",
    metric_car_sales: "Car Sales Records Analyzed",
    metric_car_sales_sub: "Pricing & Regional Trends",
    metric_icpc: "Algorithmic Problems Solved",
    metric_icpc_sub: "Codeforces & ICPC Contests",

    tag_about: "DISCOVER MY STORY",
    about_title_1: "About",
    about_title_2: "Me",
    about_subtitle: "Academic foundation combined with intensive practical training and real-world analytical modeling.",
    edu_title: "Education & Academic Excellence",
    edu_degree: "Bachelor of Science in Computer Science",
    edu_faculty: "Faculty of Computers and Information — Assiut University",
    edu_gpa: "GPA: 3.71 / 4.0",
    edu_grade: "(Excellent with Honors)",
    about_p1: "I am a passionate Data Science and Data Analytics specialist located in Cairo, Egypt. My focus is on turning raw, unstructured data into clear, actionable stories that empower stakeholders to optimize performance and reduce operational costs.",
    about_p2: "With a solid Computer Science background, I combine rigorous algorithmic problem-solving skills with practical expertise in exploratory data analysis (EDA), statistical modeling, machine learning algorithms, and interactive business intelligence dashboards.",
    fact_location: "Cairo, Egypt",
    fact_languages: "Arabic (Native) | English (Proficient)",
    fact_status: "Available for Full-time & Remote",

    pillar_1_title: "Data Cleaning & Wrangling",
    pillar_1_desc: "Handling missing values, outlier treatment, feature scaling, and preprocessing large datasets in Python (Pandas, NumPy) and SQL Server.",
    pillar_2_title: "Business Intelligence & DAX",
    pillar_2_desc: "Crafting relational data models (Star Schema), calculated measures using DAX, and executive Power BI / Tableau dashboards with rich KPIs.",
    pillar_3_title: "Machine Learning & Modeling",
    pillar_3_desc: "Supervised and unsupervised models, feature importance extraction, regression, classification, neural networks, and statistical inference.",
    pillar_4_title: "Competitive Problem Solving",
    pillar_4_desc: "Over 500 algorithmic challenges solved on Codeforces, top 30% ranking in national ICPC qualification contests, ensuring optimal code performance.",

    tag_experience: "CAREER TRAJECTORY",
    exp_title_1: "Professional",
    exp_title_2: "Experience",
    exp_subtitle: "Internships, specialized governmental initiatives, and competitive training.",
    exp1_role: "Data Science Trainee",
    exp1_company: "Digital Egypt Pioneers Initiative (DEPI)",
    exp1_b1: "Cleaned and analyzed complex datasets across 2 major projects using Python (Pandas, NumPy, Matplotlib).",
    exp1_b2: "Analyzed 23K+ automotive sales records to uncover pricing dynamics, manufacturer trends, and regional purchasing behaviors.",
    exp1_b3: "Analyzed 3.5K+ coffee transactions to identify peak rush hours, sales velocity, and payment method patterns.",
    exp1_b4: "Expanding capabilities in advanced SQL, Machine Learning pipelines, and predictive modeling.",

    exp2_role: "Data Entry & Administrative Specialist",
    exp2_company: "RAAKAA LTD — Oman",
    exp2_b1: "Managed, validated, and maintained commercial catalog data utilizing Zid platform, Airtable, and Microsoft Excel.",
    exp2_b2: "Entered, organized, updated, and audited high-volume product listings, inventory quantities, and financial sales records.",
    exp2_b3: "Streamlined operational reporting workflows, ensuring 100% data fidelity across e-commerce channels.",

    exp3_role: "AI & Machine Learning Trainee",
    exp3_company: "Information Technology Institute (ITI)",
    exp3_b1: "Developed an end-to-end Food Delivery analytics and machine learning solution using Python, applying data preprocessing, EDA, and predictive modeling.",
    exp3_b2: "Mastered Machine Learning algorithms, Deep Learning concepts, Neural Networks, Linear Algebra, and Statistical Inference.",
    exp3_b3: "Graduated successfully with 120 hours of hands-on project-based engineering.",

    exp4_role: "Data Analyst Trainee",
    exp4_company: "National Telecommunication Institute (NTI)",
    exp4_b1: "Engineered a multi-page interactive Healthcare Analytics Dashboard in Power BI analyzing provider operations, patient encounters, clinical conditions, and financial metrics.",
    exp4_b2: "Applied SQL Server, Power Query, and Power BI for data extraction, transformation, data modeling (Star Schema), and DAX measures.",
    exp4_b3: "Completed 120 intensive hours and received top certificate with a perfect 100% score.",

    exp5_role: "Competitive Programmer",
    exp5_company: "International Collegiate Programming Contest (ICPC)",
    exp5_b1: "Solved over 500 algorithmic and mathematical problems on Codeforces, sharpening analytical thinking and algorithm efficiency.",
    exp5_b2: "Ranked among the top 30% in the national ICPC ACPC qualification contest, receiving Honorable Mention.",

    tag_projects: "HANDS-ON PORTFOLIO",
    proj_title_1: "Featured",
    proj_title_2: "Projects",
    proj_subtitle: "Real-world business analytics, machine learning pipelines, and executive dashboards with verified metrics.",
    filter_all: "All Projects",
    filter_bi: "Power BI & Dashboards",
    filter_ml: "Machine Learning & EDA",
    filter_scraping: "Web Scraping & ETL",

    badge_star_project: "★ Featured Capstone",
    btn_view_gallery: "View Full Gallery (9 Images)",
    btn_deep_dive: "Case Study & Gallery",
    btn_zoom: "View Image",
    btn_preview: "Preview Dashboard",

    p1_title: "Healthcare Operational & Clinical Analytics Dashboard",
    p1_desc: "Comprehensive healthcare intelligence system modeling operational, demographic, and financial data covering 5,855+ medical providers and 53,000+ patient encounters.",
    p1_h1: "Built 12 dynamic KPI metrics in Power BI using advanced DAX.",
    p1_h2: "Identified potential 8% cost reduction across $895M+ in patient expenses.",
    p1_h3: "Constructed a robust Star Schema relational model with 11 interlinked tables.",
    p1_h4: "Integrated Python ML feature importance models for patient risk prediction.",

    p2_title: "Food Delivery Delay Optimization & Predictive Analytics",
    p2_desc: "Full-cycle data science solution analyzing 45,593 records across 20 attributes to predict delivery delays, optimize fleet dispatch, and evaluate order clustering during peak periods.",
    p2_h1: "Achieved 99.2% data cleanliness by systematically resolving anomalies.",
    p2_h2: "Engineered preparation time & spatial distance features, reducing delay metrics by 15%.",
    p2_h3: "Executed correlation matrices & regression models to balance peak order loads.",

    p3_title: "Automotive Sales & Pricing Dynamics Intelligence",
    p3_desc: "In-depth market intelligence project processing 23,000+ car sales records to map price depreciation trends across vehicle age and brand market dominance.",
    p3_h1: "Extracted price elasticity and resale depreciation curves across leading brands.",
    p3_h2: "Identified key regional sales drivers and high-demand automobile segments.",

    p4_title: "Retail POS & Consumer Behavior Analytics",
    p4_desc: "Exploratory data study on 3,500+ commercial coffee shop transactions, modeling customer ordering velocity, peak staffing hours, and cashless payment adoptions.",
    p4_h1: "Determined hourly rush velocity to optimize barista scheduling and inventory readiness.",
    p4_h2: "Analyzed revenue correlation between product categories and payment types.",

    p5_title: "Automated Web Scraping & Data Pipeline",
    p5_desc: "Custom Python web scraper that systematically extracts, normalizes, and stores catalog datasets across 50 dynamic web pages, delivering production-grade clean CSV outputs.",
    p5_h1: "Extracted 1,000+ structured book entries with automated pagination handling.",
    p5_h2: "Delivered 100% complete CSV datasets with zero missing values or data corruption.",

    tag_certificates: "OFFICIAL ACCREDITATIONS",
    cert_title_1: "Licenses &",
    cert_title_2: "Certificates",
    cert_subtitle: "Verified certificates from leading Egyptian institutes and international contests.",
    cert_ribbon_top: "100% Top Score",
    btn_view_cert: "Enlarge Certificate",
    btn_view: "View",
    btn_pdf: "Download PDF",

    cert1_name: "Advanced Data Analytics — Summer Training",
    cert1_desc: "Awarded by the National Telecommunication Institute (NTI) and ITIDA. Successfully completed 120 hours of hands-on data cleaning, SQL transformation, Power BI, and DAX dashboard development with a perfect 100% score (Student ID: 231567).",

    cert2_name: "ICPC ACPC Kickoff Contest — Honorable Mention",
    cert2_desc: "Awarded to Ismail Abo Zaid by the ICPC Executive Director William B. Poucher (Assiut University) for distinguished algorithmic problem solving and placement in the top 30% nationally.",

    cert3_name: "ITIDA Gigs Freelance Training Graduate",
    cert3_desc: "Graduated from the intensive 3-month ITIDA Gigs freelance training program, certifying professional skills in client communication, remote contract delivery, and technical project execution.",

    tag_skills: "TECHNICAL TOOLKIT",
    skills_title_1: "Skills &",
    skills_title_2: "Competencies",
    skills_subtitle: "Comprehensive breakdown of programming languages, analytics libraries, and BI tools.",
    cat_prog: "Programming & Querying",
    cat_analysis: "Data Analysis & Modeling",
    cat_bi: "Business Intelligence & Viz",
    cat_ml: "Machine Learning & AI",
    cat_tools: "Scraping, Tools & Platforms",
    cat_soft: "Professional Soft Skills",

    soft1: "Problem Solving & Critical Thinking",
    soft2: "Leadership & Team Coordination",
    soft3: "Communication & Presentation",
    soft4: "Adaptability & Fast Learning",
    soft5: "Time Management Under Pressure",

    tag_contact: "START A CONVERSATION",
    contact_title_1: "Let's Connect &",
    contact_title_2: "Collaborate",
    contact_subtitle: "Available for full-time positions, internships, and freelance data analytics projects.",
    contact_direct_title: "Direct Contact Information",
    contact_direct_desc: "Feel free to reach out directly via phone, WhatsApp, email, or LinkedIn. I typically respond within a few hours.",
    contact_email_lbl: "Email Address",
    contact_phone_lbl: "Phone & WhatsApp",
    contact_location_lbl: "Location",
    contact_location_val: "Cairo, Egypt (Open to Remote Globally)",
    contact_cv_prompt: "Need my complete resume?",
    contact_cv_sub: "Download the official PDF format.",
    btn_download_cv: "Download CV",

    form_title: "Send Me a Message",
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject / Project Type",
    form_message: "Message",
    form_send_btn: "Send Message",

    footer_tagline: "Ismail Mahmoud Mohamed — Transforming data into strategic intelligence."
  },

  ar: {
    nav_about: "عنّي",
    nav_experience: "الخبرات",
    nav_projects: "المشاريع",
    nav_certificates: "الشهادات",
    nav_skills: "المهارات",
    nav_contact: "تواصل معي",
    btn_resume: "السيرة الذاتية",
    btn_lets_talk: "تواصل الآن",

    hero_status: "متاح لفرص العمل في علم وتحليل البيانات",
    hero_greeting: "أهلاً بك، أنا",
    hero_i_am: "أنا",
    hero_bio: "متخصص في علم البيانات وتحليل البيانات، ماهر في تحويل مجموعات البيانات المعقدة والواقعية إلى قرارات استراتيجية ورؤى تنفيذية. أمتلك خبرة شاملة في معالجة وتنظيف البيانات، الاستكشاف الإحصائي (EDA)، النمذجة التنبؤية، وبناء لوحات التحكم التفاعلية في Power BI.",
    hero_btn_projects: "استكشف المشاريع",
    hero_btn_cv: "تحميل السيرة الذاتية",
    hero_connect: "تواصل معي عبر:",

    metric_records: "سجل بيانات تم تنظيفه وتحليله",
    metric_records_sub: "نسبة نظافة بيانات 99.2%",
    metric_encounters: "زيارة طبية تمت نمذجتها",
    metric_encounters_sub: "تغطي 5,855+ مقدم رعاية صحية",
    metric_car_sales: "سجل مبيعات سيارات تم تحليله",
    metric_car_sales_sub: "دراسة الأسعار والاتجاهات الإقليمية",
    metric_icpc: "مسألة برمجية تم حلها بنجاح",
    metric_icpc_sub: "مسابقات Codeforces و ICPC",

    tag_about: "نبذة عن مسيرتي",
    about_title_1: "من",
    about_title_2: "أنا",
    about_subtitle: "أساس أكاديمي راسخ في علوم الحاسب مدعوم بتدريب عملي ومشاريع تحليلية تطبيقية.",
    edu_title: "التعليم والتميز الأكاديمي",
    edu_degree: "بكالوريوس علوم الحاسب والمعلومات",
    edu_faculty: "كلية الحاسبات والمعلومات — جامعة أسيوط",
    edu_gpa: "المعدل التراكمي: 3.71 / 4.0",
    edu_grade: "(ممتاز مع مرتبة الشرف)",
    about_p1: "أنا إسماعيل محمود محمد، متخصص في علم البيانات وتحليل الأعمال ومقيم في القاهرة، مصر. شغفي يكمن في تحويل البيانات الخام المبعثرة إلى قصص ورؤى دقيقة تساعد صناع القرار على تقليل النفقات التشغيلية ومضاعفة الأرباح.",
    about_p2: "من خلال خلفيتي في علوم الحاسب وخبرتي في البرمجة التنافسية، أجمع بين التفكير الخوارزمي المنطقي القوي والمهارات التطبيقية في تحليل واستكشاف البيانات (EDA)، بناء نماذج الذكاء الاصطناعي، وتطوير لوحات Power BI التفاعلية.",
    fact_location: "القاهرة، مصر",
    fact_languages: "العربية (اللغة الأم) | الإنجليزية (إتقان مهني)",
    fact_status: "متاح للعمل بدوام كامل أو عن بُعد",

    pillar_1_title: "تنظيف وهندسة البيانات (Data Wrangling)",
    pillar_1_desc: "معالجة القيم المفقودة، التخلص من القيم الشاذة، وهندسة الخصائص باستخدام بايثون (Pandas, NumPy) وقواعد بيانات SQL Server.",
    pillar_2_title: "ذكاء الأعمال ولوحات Power BI & DAX",
    pillar_2_desc: "بناء النماذج العلائقية (Star Schema)، كتابة معادلات DAX المتقدمة، وتصميم لوحات تحكم تنفيذية تركز على مؤشرات الأداء الرئيسية.",
    pillar_3_title: "تعلم الآلة والنماذج التنبؤية (Machine Learning)",
    pillar_3_desc: "تدريب نماذج التصنيف والانحدار، استخراج الخصائص المؤثرة، والشبكات العصبية باستخدام خوارزميات الذكاء الاصطناعي.",
    pillar_4_title: "حل المشكلات والبرمجة التنافسية (ICPC)",
    pillar_4_desc: "حل أكثر من 500 مسألة خوارزمية على منصة Codeforces، وتصنيف ضمن أفضل 30% على مستوى الجمهورية في تصفيات ICPC.",

    tag_experience: "المسار المهني والتدريبي",
    exp_title_1: "الخبرات",
    exp_title_2: "المهنية",
    exp_subtitle: "تدريبات ومبادرات حكومية متقدمة ومسابقات تنافسية.",
    exp1_role: "متدرب علم بيانات (Data Science Trainee)",
    exp1_company: "مبادرة رواد مصر الرقمية (DEPI)",
    exp1_b1: "تنظيف وتحليل مجموعات بيانات ضخمة عبر مشروعين باستخدام بايثون (Pandas, NumPy, Matplotlib).",
    exp1_b2: "تحليل أكثر من 23 ألف سجل لمبيعات السيارات وتحديد اتجاهات الأسعار، والماركات، والمناطق الجغرافية.",
    exp1_b3: "تحليل 3,500+ معاملة بيع لمقهى لتحديد ساعات الذروة، ونمو الإيرادات، وأنماط الدفع المفضلة.",
    exp1_b4: "تطوير مهارات متقدمة في استعلامات SQL، وهندسة نماذج تعلم الآلة التنبؤية.",

    exp2_role: "أخصائي إدخال بيانات وعمليات إدارية",
    exp2_company: "شركة راكاء (RAAKAA LTD) — سلطنة عمان",
    exp2_b1: "إدارة وتدقيق بيانات المنتجات والمبيعات بالاعتماد على منصة زد (Zid) و Airtable و Microsoft Excel.",
    exp2_b2: "إدخال وتنظيم وتحديث قوائم المنتجات وجداول المخزون والسجلات التجارية بدقة عالية.",
    exp2_b3: "دعم العمليات الإدارية وسرعة تدفق بيانات التجارة الإلكترونية بنسبة دقة 100%.",

    exp3_role: "متدرب ذكاء اصطناعي وتعلم آلة",
    exp3_company: "معهد تكنولوجيا المعلومات (ITI)",
    exp3_b1: "تطوير مشروع متكامل لتحليل بيانات توصيل الطعام (Food Delivery) وبناء نماذج تنبؤية باستخدام لغة بايثون.",
    exp3_b2: "تطبيق تقنيات تعلم الآلة والتعلم العميق، والشبكات العصبية، ومفاهيم الجبر الخطي في حل المشكلات الواقعية.",
    exp3_b3: "إتمام 120 ساعة تدريبية مكثفة بنجاح في مجالات الذكاء الاصطناعي.",

    exp4_role: "متدرب تحليل بيانات (بدرجة امتياز 100%)",
    exp4_company: "المعهد القومي للاتصالات (NTI)",
    exp4_b1: "تطوير لوحة تحكم تفاعلية متقدمة لتحليل بيانات الرعاية الصحية في Power BI لتحليل العمليات وبيانات المرضى والتكاليف.",
    exp4_b2: "استخدام SQL Server و Power Query و Power BI لتنظيف البيانات، وبناء النموذج العلائقي، وصياغة معادلات DAX.",
    exp4_b3: "إتمام 120 ساعة تدريبية بنجاح والحصول على شهادة رسمية بنسبة تقييم 100% كاملة.",

    exp5_role: "مبرمج تنافسي (Competitive Programmer)",
    exp5_company: "مسابقة البرمجة الجامعية الدولية (ICPC)",
    exp5_b1: "حل أكثر من 500 مسألة خوارزمية على منصة Codeforces، وتطوير أسلوب تفكير تحليلي دقيق وسريع.",
    exp5_b2: "الحصول على الترتيب ضمن أفضل 30% على مستوى مصر في تصفيات مسابقة ICPC ACPC الفردية مع تكريم شرفي.",

    tag_projects: "معرض الأعمال والمشاريع",
    proj_title_1: "أبرز",
    proj_title_2: "المشاريع",
    proj_subtitle: "مشاريع عملية في تحليل الأعمال، لوحات التحكم، ونماذج تعلم الآلة التنبؤية بأرقام ونتائج مثبتة.",
    filter_all: "جميع المشاريع",
    filter_bi: "لوحات Power BI",
    filter_ml: "تعلم الآلة وبايثون",
    filter_scraping: "جمع وهندسة البيانات (ETL)",

    badge_star_project: "★ المشروع الرئيسي المميز",
    btn_view_gallery: "عرض المعرض الكامل (9 صور)",
    btn_deep_dive: "دراسة الحالة والمعرض",
    btn_zoom: "تكبير الصورة",
    btn_preview: "معاينة اللوحة",

    p1_title: "لوحة التحكم الذكية لبيانات الرعاية الصحية والعمليات السريرية",
    p1_desc: "منظومة تحليلية شاملة للرعاية الصحية نمذجت بيانات 5,855+ مقدم خدمة صحية وأكثر من 53,000 زيارة مريض ومصروفات تفوق 895 مليون دولار.",
    p1_h1: "بناء 12 مقياس KPI ديناميكي في Power BI باستخدام صيغ DAX متقدمة.",
    p1_h2: "تحديد فرص لتقليص النفقات بنسبة 8% من إجمالي مصروفات علاجية بقيمة $895M+.",
    p1_h3: "تصميم نموذج بيانات علائقي متكامل (Star Schema) يربط 11 جدول حقائق وأبعاد.",
    p1_h4: "دمج نماذج بايثون لتحديد أهم العوامل المؤثرة على المخاطر الصحية للمرضى.",

    p2_title: "تحسين مواعيد توصيل الطلبات والنمذجة التنبؤية (Food Delivery)",
    p2_desc: "مشروع متكامل في علم البيانات يحلل 45,593 سجلاً عبر 20 متغيراً للتنبؤ بتأخيرات التوصيل وتوزيع السائقين خلال ساعات الذروة.",
    p2_h1: "تحقيق نسبة نظافة بيانات 99.2% عبر إزالة القيم الشاذة والمفقودة بأساليب إحصائية.",
    p2_h2: "هندسة خصائص زمن التحضير والمسافة الجغرافية مما قلص مؤشرات التأخير بنسبة 15%.",
    p2_h3: "بناء مصفوفات الارتباط ونماذج الانحدار لتحسين كفاءة توزيع الطلبات في أوقات الضغط.",

    p3_title: "تحليل ديناميكيات أسعار وسوق مبيعات السيارات",
    p3_desc: "دراسة استقصائية معمقة لأكثر من 23 ألف سجل مبيعات سيارات لرسم منحنيات انخفاض القيمة السعرية وحصص العلامات التجارية بالسوق.",
    p3_h1: "استخراج مرونة الأسعار ومعدل الإهلاك حسب عمر السيارة لكل علامة تجارية.",
    p3_h2: "تحديد الأسواق الإقليمية الأكثر طلباً والأنماط المفضلة لدى المشترين.",

    p4_title: "تحليل سلوك المستهلك ومعاملات نقاط البيع (POS)",
    p4_desc: "تحليل استكشافي لأكثر من 3,500 معاملة بيع لمقهى تجاري، لتحديد ساعات الذروة، سرعة تدفق المبيعات، وتفضيلات طرق الدفع.",
    p4_h1: "تحديد فترات الضغط بدقة لتنظيم جداول عمل الموظفين والجاهزية التشغيلية للمخزون.",
    p4_h2: "تحليل العلاقة بين قيمة الفاتورة وأنواع المنتجات وطرق الدفع غير النقدي.",

    p5_title: "منظومة سحب وهيكلة بيانات الكتب التلقائية (Web Scraping & ETL)",
    p5_desc: "أداة سحب ومعالجة بيانات آلية بلغة بايثون تستخلص وتبوّب بيانات 1,000+ كتاب عبر 50 صفحة ويب وتصدر ملفات بيانات نقية وخالية من الأخطاء.",
    p5_h1: "استخلاص تلقائي لبيانات الكتب مع دعم الانتقال التلقائي بين الصفحات المتعددة.",
    p5_h2: "تسليم ملف CSV متكامل بنسبة 100% دون أي قيم مفقودة أو بيانات تالفة.",

    tag_certificates: "الاعتمادات والتكريمات",
    cert_title_1: "الشهادات",
    cert_title_2: "والاعتمادات الرسمية",
    cert_subtitle: "شهادات معتمدة وموثقة من كبرى المعاهد التكنولوجية المصرية والمسابقات الدولية.",
    cert_ribbon_top: "الدرجة النهائية 100%",
    btn_view_cert: "تكبير الشهادة",
    btn_view: "عرض",
    btn_pdf: "تحميل PDF",

    cert1_name: "شهادة تحليل البيانات المتقدم (Advanced Data Analytics)",
    cert1_desc: "ممنوحة من المعهد القومي للاتصالات (NTI) وهيئة تنمية صناعة تكنولوجيا المعلومات (ITIDA). إتمام 120 ساعة تدريبية بنسبة نجاح تامة 100% (رقم الطالب: 231567).",

    cert2_name: "تكريم مسابقة البرمجة الجامعية ICPC — مرتبة الشرف",
    cert2_desc: "ممنوحة للمبرمج إسماعيل محمود من المدير التنفيذي لمؤسسة ICPC د. ويليام باوتشر ممثلاً لجامعة أسيوط لتحقيقه ترتيباً ضمن أفضل 30% على مستوى الجمهورية.",

    cert3_name: "شهادة تخرج برنامج التدريب على العمل الحر (ITIDA Gigs)",
    cert3_desc: "تخرج رسمي من برنامج ITIDA Gigs التابع لوزارة الاتصالات و eyouth لتأهيل المستقلين واحتراف تنفيذ وإدارة مشاريع البيانات والتقنية.",

    tag_skills: "الأدوات والمهارات التقنية",
    skills_title_1: "المهارات",
    skills_title_2: "والقدرات",
    skills_subtitle: "مخطط تفصيلي للغات البرمجة، حزم تحليل البيانات، وأدوات ذكاء الأعمال المتقنة.",
    cat_prog: "لغات البرمجة والاستعلام",
    cat_analysis: "تحليل ونمذجة البيانات",
    cat_bi: "ذكاء الأعمال ولوحات التحكم",
    cat_ml: "تعلم الآلة والذكاء الاصطناعي",
    cat_tools: "سحب البيانات والمنصات",
    cat_soft: "المهارات الشخصية والقيادية",

    soft1: "حل المشكلات والتفكير النقدي التحليلي",
    soft2: "القيادة والتنسيق الفعال ضمن فرق العمل",
    soft3: "مهارات التواصل وعرض الأفكار والنتائج",
    soft4: "سرعة التكيف وسرعة تعلم التقنيات الحديثة",
    soft5: "إدارة الوقت والعمل بكفاءة تحت الضغط",

    tag_contact: "تواصل معي",
    contact_title_1: "دعنا نبدأ",
    contact_title_2: "التعاون معاً",
    contact_subtitle: "متاح لعروض العمل بدوام كامل، فترات التدريب، ومشاريع تحليل البيانات التعاقدية.",
    contact_direct_title: "بيانات التواصل المباشر",
    contact_direct_desc: "يمكنك التواصل معي مباشرة عبر الهاتف، الواتساب، البريد الإلكتروني، أو لينكد إن. أرد عادةً خلال ساعات قليلة.",
    contact_email_lbl: "البريد الإلكتروني",
    contact_phone_lbl: "الهاتف والواتساب",
    contact_location_lbl: "الموقع الجغرافي",
    contact_location_val: "القاهرة، مصر (متاح للعمل عن بُعد دولياً)",
    contact_cv_prompt: "هل تحتاج إلى سيرتي الذاتية كاملة؟",
    contact_cv_sub: "حمّل النسخة الرسمية بصيغة PDF الآن.",
    btn_download_cv: "تحميل السيرة الذاتية",

    form_title: "أرسل لي رسالة مباشرة",
    form_name: "الاسم الكريم",
    form_email: "البريد الإلكتروني",
    form_subject: "الموضوع / نوع المشروع",
    form_message: "نص الرسالة",
    form_send_btn: "إرسال الرسالة",

    footer_tagline: "إسماعيل محمود محمد — نحول البيانات الصامتة إلى قرارات ذكية واستراتيجية."
  }
};

// Titles for Typing Animation
const titles = {
  en: [
    "Data Scientist",
    "Data Analyst",
    "Power BI Specialist",
    "Machine Learning Trainee",
    "Competitive Problem Solver (ICPC)"
  ],
  ar: [
    "أخصائي علم بيانات",
    "محلل بيانات معتمد",
    "مطور لوحات تحكم Power BI",
    "باحث في تعلم الآلة والذكاء الاصطناعي",
    "مبرمج خوارزميات ICPC"
  ]
};

// Current State
let currentLang = "en";
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingTimeout = null;

// ==================== DOM READY INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Setup Event Listeners
  initNavbarScroll();
  initMobileMenu();
  initTypingEffect();
  initLanguageToggle();
  initProjectFilters();
  initModals();
  initMetricCounters();
  initBackToTop();
  initSmoothScroll();
});

// ==================== LANGUAGE SWITCHER ====================
function initLanguageToggle() {
  const toggleBtn = document.getElementById("langToggle");
  const langLabel = document.getElementById("langLabel");

  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ar" : "en";
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const html = document.documentElement;
  const langLabel = document.getElementById("langLabel");

  if (lang === "ar") {
    html.setAttribute("lang", "ar");
    html.setAttribute("dir", "rtl");
    if (langLabel) langLabel.textContent = "English";
  } else {
    html.setAttribute("lang", "en");
    html.setAttribute("dir", "ltr");
    if (langLabel) langLabel.textContent = "عربي";
  }

  // Update text elements with data-i18n
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      // Preserve child icons if present
      const icon = el.querySelector("i, svg");
      if (icon) {
        const textSpan = el.querySelector("span") || el;
        textSpan.textContent = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Reset and restart typing animation in the new language
  if (typingTimeout) clearTimeout(typingTimeout);
  charIndex = 0;
  isDeleting = false;
  typingIndex = 0;
  type();

  // Re-run Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// ==================== TYPING EFFECT ====================
function initTypingEffect() {
  type();
}

function type() {
  const typingElement = document.getElementById("typingText");
  if (!typingElement) return;

  const currentList = titles[currentLang];
  const fullText = currentList[typingIndex % currentList.length];

  if (isDeleting) {
    charIndex--;
    typingElement.textContent = fullText.substring(0, charIndex);
  } else {
    charIndex++;
    typingElement.textContent = fullText.substring(0, charIndex);
  }

  let delay = isDeleting ? 45 : 95;

  if (!isDeleting && charIndex === fullText.length) {
    delay = 2000; // pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    typingIndex++;
    delay = 450; // pause before next word
  }

  typingTimeout = setTimeout(type, delay);
}

// ==================== NAVBAR & SCROLL ====================
function initNavbarScroll() {
  const header = document.getElementById("header");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section[id]");

  window.addEventListener("scroll", () => {
    // Add blurred solid background on scroll
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    // Active link highlighting
    let currentId = "";
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        currentId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("mobileToggle");
  const menu = document.getElementById("navMenu");
  const links = document.querySelectorAll(".nav-link");

  if (!toggle || !menu) return;

  toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  });
}

// ==================== PROJECT FILTERING ====================
function initProjectFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".projects-grid .project-card");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const categories = card.getAttribute("data-category") || "";
        if (filter === "all" || categories.includes(filter)) {
          card.style.display = "flex";
          setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
          }, 20);
        } else {
          card.style.opacity = "0";
          card.style.transform = "translateY(15px)";
          setTimeout(() => {
            card.style.display = "none";
          }, 250);
        }
      });
    });
  });
}

// Switch main featured project image when clicking thumbnail
function switchMainImage(targetId, newSrc, thumbElement) {
  const mainImg = document.getElementById(targetId);
  if (mainImg) {
    mainImg.src = newSrc;
  }
  // Toggle active class on thumbnails
  const strip = thumbElement.parentElement;
  if (strip) {
    strip.querySelectorAll(".thumb-item").forEach((item) => item.classList.remove("active"));
    thumbElement.classList.add("active");
  }
}

// ==================== MODALS & LIGHTBOX ====================
function initModals() {
  // Generic Single Image Lightbox triggers
  document.querySelectorAll(".open-modal-img").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const imgSrc = btn.getAttribute("data-img");
      const caption = btn.getAttribute("data-caption") || "";
      openImageModal(imgSrc, caption);
    });
  });

  // Healthcare Full Project Gallery triggers
  document.querySelectorAll(".open-gallery-btn, .open-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      openGalleryModal();
    });
  });

  // ESC key to close any active modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeImageModal();
      closeGalleryModal();
    }
  });
}

function openImageModal(src, caption) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");
  const cap = document.getElementById("modalCaption");

  if (!modal || !img) return;

  img.src = src;
  if (cap) cap.textContent = caption;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeImageModal() {
  const modal = document.getElementById("imageModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function openGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeGalleryModal() {
  const modal = document.getElementById("galleryModal");
  if (!modal) return;
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// Gallery Slide Switcher inside Healthcare Modal
function setGallerySlide(index, imgSrc, title, description) {
  const mainImg = document.getElementById("galleryActiveImg");
  const captionBar = document.getElementById("galleryCaption");
  const thumbs = document.querySelectorAll(".g-thumb");

  if (mainImg) {
    mainImg.src = imgSrc;
  }

  if (captionBar) {
    captionBar.innerHTML = `<strong>Screen ${index + 1} / 9 — ${title}:</strong> ${description}`;
  }

  thumbs.forEach((t, i) => {
    if (i === index) {
      t.classList.add("active");
    } else {
      t.classList.remove("active");
    }
  });
}

// ==================== IMPACT COUNTERS ANIMATION ====================
function initMetricCounters() {
  const counterElements = document.querySelectorAll(".metric-number");
  let animated = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          counterElements.forEach((el) => {
            const target = parseInt(el.getAttribute("data-target"), 10);
            animateCount(el, target);
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  const section = document.querySelector(".metrics-section");
  if (section) observer.observe(section);
}

function animateCount(element, target) {
  let start = 0;
  const duration = 1800;
  const stepTime = 25;
  const steps = duration / stepTime;
  const increment = target / steps;

  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      clearInterval(timer);
      element.textContent = target.toLocaleString() + "+";
    } else {
      element.textContent = Math.floor(start).toLocaleString() + "+";
    }
  }, stepTime);
}

// ==================== BACK TO TOP ====================
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("visible");
    } else {
      btn.classList.remove("visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// ==================== SMOOTH SCROLL ====================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}

// ==================== CONTACT FORM HANDLER ====================
function handleFormSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim() || "Data Analytics Inquiry";
  const message = document.getElementById("message").value.trim();
  const feedback = document.getElementById("formFeedback");
  const submitBtn = document.getElementById("submitBtn");

  // Construct mailto link
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
  const mailtoUrl = `mailto:ismaeilabozaid7497@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

  // Provide immediate visual feedback
  if (feedback) {
    feedback.className = "form-feedback success";
    if (currentLang === "ar") {
      feedback.textContent = `شكراً لك يا ${name}! جاري فتح تطبيق البريد الخاص بك لإرسال الرسالة إلى إسماعيل...`;
    } else {
      feedback.textContent = `Thank you ${name}! Opening your email client to send your message directly to Ismail...`;
    }
    feedback.classList.remove("hidden");
  }

  // Trigger mailto after brief delay
  setTimeout(() => {
    window.location.href = mailtoUrl;
  }, 700);
}
