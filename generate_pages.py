import os

pages_dir = "src/pages/services"
os.makedirs(pages_dir, exist_ok=True)

pages = [
    {
        "filename": "WebsiteDevelopment.jsx",
        "url": "/website-development",
        "title": "Website Development Services",
        "description": "Professional website development services for businesses. We build fast, mobile-responsive, and custom websites tailored to your business needs.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Website Design & Development</h2>
            <p className="mb-4 text-gray-600">
              A professionally developed website is the foundation of your online presence. At Parvi Digital, we build fast, secure, and mobile-friendly websites that help you present your services and receive inquiries effectively.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Offer</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Responsive website development for all devices.</li>
              <li>Custom business websites tailored to your requirements.</li>
              <li>Performance optimization for fast loading speeds.</li>
              <li>Mobile usability and seamless user experience.</li>
              <li>Website redesign for outdated sites.</li>
              <li>Ongoing website maintenance and support.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Development Process</h3>
            <p className="mb-4 text-gray-600">
              We start by understanding your business goals, target audience, and functional requirements. Then, our team designs a customized layout before proceeding with full-stack development, rigorous testing, and launch.
            </p>
        """
    },
    {
        "filename": "BusinessWebsiteDevelopment.jsx",
        "url": "/business-website-development",
        "title": "Business Website Development",
        "description": "Professional website development for small and medium-sized businesses. Get a mobile-friendly, search-optimized business website today.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Websites for Small and Medium-Sized Businesses</h2>
            <p className="mb-4 text-gray-600">
              A business website is often the first point of contact for potential clients. We build clean, professional, and informative websites that establish trust and credibility for your brand.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Key Features of Our Business Websites</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Clear business information and service pages.</li>
              <li>Mobile-friendly design for browsing on the go.</li>
              <li>Integrated contact forms and easy navigation.</li>
              <li>WhatsApp and call-to-action buttons.</li>
              <li>Search engine optimization foundations.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Pricing and Launch</h3>
            <p className="mb-4 text-gray-600">
              Pricing depends on the number of pages, custom features, and integration requirements. Contact us for a precise quote. We also provide ongoing website maintenance to ensure your business remains online without interruptions.
            </p>
        """
    },
    {
        "filename": "EcommerceWebsiteDevelopment.jsx",
        "url": "/ecommerce-website-development",
        "title": "E-commerce Website Development",
        "description": "Secure and scalable online store development. We build functional e-commerce websites with shopping carts and payment gateways.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Start Selling Online with a Robust E-commerce Store</h2>
            <p className="mb-4 text-gray-600">
              Transform your retail business with a custom e-commerce website. We develop secure, high-performing online stores that provide a seamless shopping experience for your customers.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">E-commerce Features</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive product catalogues and categorization.</li>
              <li>Secure shopping cart and checkout processes.</li>
              <li>Payment gateway integration for seamless transactions.</li>
              <li>Order management and tracking capabilities.</li>
              <li>Mobile-optimized shopping experience.</li>
              <li>SEO for product pages to improve visibility.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Performance and Security</h3>
            <p className="mb-4 text-gray-600">
              We prioritize the security of customer data and the performance of your store, ensuring fast load times and reliable uptime during peak traffic periods.
            </p>
        """
    },
    {
        "filename": "WebsiteRedesign.jsx",
        "url": "/website-redesign",
        "title": "Website Redesign Services",
        "description": "Modernize your outdated website with our redesign services. Improve user experience, mobile responsiveness, and overall performance.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Breathe New Life into Your Outdated Website</h2>
            <p className="mb-4 text-gray-600">
              An outdated website can cost you clients. We specialize in modernizing existing websites, improving their visual appeal, functionality, and search engine performance.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Why Redesign Your Website?</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Improve mobile responsiveness for modern devices.</li>
              <li>Enhance user experience and simplify navigation.</li>
              <li>Optimize performance and page load speeds.</li>
              <li>Implement conversion-focused layouts to generate more leads.</li>
              <li>Careful SEO migration to preserve your existing search rankings.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Redesign Approach</h3>
            <p className="mb-4 text-gray-600">
              We analyze your current website's weaknesses and retain what works. We ensure that existing URLs are preserved where possible and implement proper redirects to avoid losing traffic.
            </p>
        """
    },
    {
        "filename": "WebApplicationDevelopment.jsx",
        "url": "/web-application-development",
        "title": "Web Application Development",
        "description": "Custom web application development services. We build scalable business dashboards, workflow apps, and database-driven solutions.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Custom Web Applications Tailored to Your Business</h2>
            <p className="mb-4 text-gray-600">
              When a standard website isn't enough, we build custom web applications to streamline your business operations, manage data, and improve efficiency.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Web App Solutions</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Custom business dashboards and portals.</li>
              <li>Workflow and process management applications.</li>
              <li>Secure, database-driven applications.</li>
              <li>Third-party API integrations.</li>
              <li>Robust user authentication and role-based access control.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Development and Maintenance</h3>
            <p className="mb-4 text-gray-600">
              We follow a rigorous development and testing process to ensure your application is bug-free and secure. Post-launch, we offer ongoing maintenance to keep your software running smoothly.
            </p>
        """
    },
    {
        "filename": "MobileAppDevelopment.jsx",
        "url": "/mobile-app-development",
        "title": "Mobile App Development",
        "description": "Professional mobile application development services. We design and build intuitive apps for your business needs.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Engage Your Audience on the Go</h2>
            <p className="mb-4 text-gray-600">
              Bring your business directly to your customers' smartphones with our mobile app development services. We create functional, user-friendly applications that drive engagement.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our App Development Process</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive mobile application planning based on your business use cases.</li>
              <li>Intuitive user interface (UI) and user experience (UX) design.</li>
              <li>Robust backend and API integration for seamless data flow.</li>
              <li>Thorough testing across multiple devices.</li>
              <li>Deployment to app stores and ongoing maintenance.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Let's Discuss Your App Idea</h3>
            <p className="mb-4 text-gray-600">
              Whether you need an internal business tool or a customer-facing app, our development team has the expertise to bring your vision to life.
            </p>
        """
    },
    {
        "filename": "DigitalMarketing.jsx",
        "url": "/digital-marketing",
        "title": "Digital Marketing Services",
        "description": "Comprehensive digital marketing strategies to grow your business online. We offer Google Ads, Meta Ads, SEO, and social media marketing.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Data-Driven Digital Marketing Strategies</h2>
            <p className="mb-4 text-gray-600">
              A beautiful website needs traffic to generate leads. Our digital marketing services are designed to increase your online visibility, attract relevant visitors, and convert them into customers.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Marketing Channels</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li><strong>Google Ads:</strong> Reach people actively searching for your services.</li>
              <li><strong>Meta Ads:</strong> Targeted advertising on Facebook and Instagram.</li>
              <li><strong>Search Engine Optimization (SEO):</strong> Improve your organic search rankings.</li>
              <li><strong>Social Media Marketing:</strong> Build brand awareness and engage your audience.</li>
              <li><strong>Lead Generation:</strong> Focused campaigns to capture high-quality inquiries.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Choosing the Right Strategy</h3>
            <p className="mb-4 text-gray-600">
              The appropriate marketing strategy depends heavily on your specific business, target audience, budget, and overall objectives. We work with you to measure performance and optimize campaigns continuously.
            </p>
        """
    },
    {
        "filename": "GoogleAdsManagement.jsx",
        "url": "/google-ads-management",
        "title": "Google Ads Management Services",
        "description": "Professional Google Ads management to reach customers searching for your business. Maximize your budget and generate qualified leads.",
        "content": """
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Expert Google Ads Management</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Google Ads can help your business reach people exactly when they are searching for relevant products and services. We manage your campaigns to ensure your advertising budget is spent efficiently.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What Our Management Includes</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Google Search Ads campaign creation and management.</li>
              <li>In-depth keyword research and targeting.</li>
              <li>Compelling ad copy and asset creation.</li>
              <li>Precise location and audience targeting.</li>
              <li>Campaign structure and budget planning.</li>
              <li>Accurate conversion tracking setup.</li>
              <li>Continuous performance monitoring, reporting, and optimization.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Process</h3>
            <p className="mb-4 text-gray-600">
              We start by understanding your ideal customer and business goals. We then structure campaigns that target high-intent keywords, track every conversion, and continuously optimize to improve your cost-per-lead. Note that while we strive for the best results, we do not guarantee specific lead volumes or click costs, as these depend on market competition.
            </p>
        """
    },
    {
        "filename": "MetaAdsManagement.jsx",
        "url": "/meta-ads-management",
        "title": "Meta Ads Management (Facebook & Instagram)",
        "description": "Targeted Meta Ads management for Facebook and Instagram. Build brand awareness and generate leads with precise audience targeting.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Engage Your Audience on Facebook and Instagram</h2>
            <p className="mb-4 text-gray-600">
              Meta Ads offer unparalleled audience targeting based on demographics, interests, and behaviors. We manage your Facebook and Instagram campaigns to build brand awareness and drive conversions.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Meta Ads Services</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive audience targeting strategies.</li>
              <li>Campaign planning tailored to your specific objectives.</li>
              <li>Lead generation campaigns to capture inquiries directly on the platform.</li>
              <li>Creative guidance and ad copy development.</li>
              <li>Conversion tracking and pixel implementation.</li>
              <li>Ongoing budget management and campaign monitoring.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Why Meta Ads?</h3>
            <p className="mb-4 text-gray-600">
              Unlike search ads, social media advertising allows you to generate demand by putting your brand in front of users before they even start searching.
            </p>
        """
    },
    {
        "filename": "SocialMediaMarketing.jsx",
        "url": "/social-media-marketing",
        "title": "Social Media Marketing Services",
        "description": "Professional social media marketing to build your brand online. We handle content planning, posting, and audience engagement.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Build Brand Awareness and Engage Your Audience</h2>
            <p className="mb-4 text-gray-600">
              A strong social media presence helps you connect with your customers and build trust. We provide comprehensive social media marketing services to keep your audience engaged.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Do</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Develop a tailored social media strategy for your brand.</li>
              <li>Content planning and creative development.</li>
              <li>Consistent social media page management.</li>
              <li>Audience engagement and community building.</li>
              <li>Performance monitoring to measure brand growth.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Connecting with Your Market</h3>
            <p className="mb-4 text-gray-600">
              Whether you are B2B or B2C, we help identify which platforms are right for your business and create content that resonates with your target demographic.
            </p>
        """
    },
    {
        "filename": "LeadGeneration.jsx",
        "url": "/lead-generation",
        "title": "Lead Generation Services",
        "description": "Effective lead generation strategies using targeted advertising, optimized landing pages, and conversion tracking.",
        "content": """
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Drive High-Quality Inquiries to Your Business</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Our lead generation services focus on attracting relevant prospects and converting them into actionable inquiries through optimized marketing channels.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Lead Generation Strategy</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Multi-channel approach using Google Ads and Meta Ads.</li>
              <li>Development of high-converting landing pages.</li>
              <li>Implementation of website enquiry forms and lead capture methods.</li>
              <li>Rigorous conversion tracking to measure success.</li>
              <li>Continuous campaign optimization to improve lead quality and volume.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Understanding Lead Quality</h3>
            <p className="mb-4 text-gray-600">
              Lead volume and quality depend on multiple factors, including targeting precision, your budget, the strength of your offer, and how quickly your team follows up. We focus on delivering the right prospects to your inbox.
            </p>
        """
    },
    {
        "filename": "SeoServices.jsx",
        "url": "/seo-services",
        "title": "Search Engine Optimization (SEO) Services",
        "description": "Comprehensive SEO services to improve your organic search visibility. We offer technical SEO, on-page optimization, and content strategy.",
        "content": """
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Improve Your Organic Search Visibility</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Unlike paid advertising, organic search visibility (SEO) provides long-term traffic and credibility. We implement proven SEO strategies to help your website rank better over time.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Comprehensive SEO Approach</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>In-depth keyword research and competitor analysis.</li>
              <li>Technical SEO to ensure your site is easily crawled and indexed.</li>
              <li>On-page SEO, including title tags, meta descriptions, and heading hierarchy.</li>
              <li>Content optimization tailored to user search intent.</li>
              <li>Strategic internal linking to distribute page authority.</li>
              <li>Website performance optimization and Search Console monitoring.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Setting Expectations</h3>
            <p className="mb-4 text-gray-600">
              SEO is a long-term investment. While we apply best practices to improve your visibility, search engines use complex algorithms. Therefore, we never guarantee first-page rankings or a specific ranking position, but we focus on measurable growth in organic traffic.
            </p>
        """
    },
    {
        "filename": "LocalSeo.jsx",
        "url": "/local-seo",
        "title": "Local SEO Services",
        "description": "Improve your visibility in local search results. We optimize your local listings, Google Business Profile, and location-specific pages.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Dominate Local Search Results</h2>
            <p className="mb-4 text-gray-600">
              If your business serves specific geographic areas, local SEO is essential. We help you increase your visibility for customers searching for services near them.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Local SEO Strategies</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Targeted local keyword research.</li>
              <li>Creation of location-specific landing pages.</li>
              <li>Ensuring business information consistency (NAP) across the web.</li>
              <li>Google Business Profile optimization.</li>
              <li>Local business citations and directory listings where appropriate.</li>
              <li>Guidance on review generation and reputation management.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Track Your Local Growth</h3>
            <p className="mb-4 text-gray-600">
              We monitor your local search performance closely to ensure you are capturing local demand effectively.
            </p>
        """
    },
    {
        "filename": "TechnicalSeo.jsx",
        "url": "/technical-seo",
        "title": "Technical SEO Services",
        "description": "Technical SEO audits and optimization to ensure search engines can properly crawl and index your website.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Build a Strong Foundation for Search Engines</h2>
            <p className="mb-4 text-gray-600">
              Great content won't rank if search engines can't access it. Our technical SEO services ensure your website's architecture is fully optimized for crawlability and indexability.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Technical SEO Components</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive technical SEO audits.</li>
              <li>Optimization of XML sitemaps and robots.txt files.</li>
              <li>Implementation of canonical tags to prevent duplicate content.</li>
              <li>Management of proper URL redirects.</li>
              <li>Page speed and Core Web Vitals optimization.</li>
              <li>Mobile usability enhancements.</li>
              <li>Implementation of appropriate structured data (schema markup).</li>
            </ul>
        """
    },
    {
        "filename": "OnPageSeo.jsx",
        "url": "/on-page-seo",
        "title": "On-Page SEO Services",
        "description": "Optimize your website content, meta tags, and structure with our on-page SEO services for better search relevance.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Optimize Your Content for Search Relevance</h2>
            <p className="mb-4 text-gray-600">
              On-page SEO ensures that search engines understand exactly what your pages are about. We optimize individual web pages to rank higher and earn more relevant traffic.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">On-Page Optimization Includes</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Crafting compelling title tags and meta descriptions.</li>
              <li>Establishing a logical heading hierarchy (H1, H2, H3).</li>
              <li>Keyword mapping and natural content optimization.</li>
              <li>Adding descriptive image alt text.</li>
              <li>Improving internal link structure.</li>
              <li>Creating clean, readable URL structures.</li>
              <li>Aligning content quality with user search intent.</li>
            </ul>
        """
    },
    {
        "filename": "GoogleBusinessProfileOptimization.jsx",
        "url": "/google-business-profile-optimization",
        "title": "Google Business Profile Optimization",
        "description": "Optimize your Google Business Profile to improve local search visibility and attract more customers from Google Maps.",
        "content": """
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Stand Out on Google Maps and Local Search</h2>
            <p className="mb-4 text-gray-600 text-lg">
              Your Google Business Profile (formerly Google My Business) is a critical asset for local visibility. We optimize your profile to ensure you attract local customers actively looking for your services.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Optimization Process</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Comprehensive business profile audit.</li>
              <li>Accurate business category selection guidance.</li>
              <li>Creation of a keyword-optimized business description.</li>
              <li>Configuration of relevant services and products.</li>
              <li>Ensuring complete business information accuracy.</li>
              <li>Recommendations for high-quality photos and engaging posts.</li>
              <li>Guidance on effective review management.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Realistic Expectations</h3>
            <p className="mb-4 text-gray-600">
              While a well-optimized profile significantly improves your chances of appearing in the "Local Pack", we do not promise guaranteed Google Maps rankings, as results depend on location proximity, relevance, and local competition.
            </p>
        """
    },
    {
        "filename": "GoogleMapsRanking.jsx",
        "url": "/google-maps-ranking",
        "title": "Google Maps Ranking Services",
        "description": "Strategies to improve your visibility on Google Maps through profile optimization, local SEO, and reputation management.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Enhance Your Visibility on Google Maps</h2>
            <p className="mb-4 text-gray-600">
              Ranking well on Google Maps drives foot traffic and local inquiries. We implement strategies that signal relevance and prominence to Google's local algorithm.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Factors Influencing Maps Ranking</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Overall Google Business Profile completeness.</li>
              <li>Accurate and highly relevant business category selection.</li>
              <li>Quantity, quality, and recency of customer reviews.</li>
              <li>Consistent business information across the internet.</li>
              <li>Your website's localized SEO strength.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Important Note</h3>
            <p className="mb-4 text-gray-600">
              Google Maps rankings depend heavily on the searcher's physical location (proximity) and cannot be artificially guaranteed. Our service focuses on maximizing the factors within your control.
            </p>
        """
    },
    {
        "filename": "GoogleBusinessProfileManagement.jsx",
        "url": "/google-business-profile-management",
        "title": "Google Business Profile Management",
        "description": "Ongoing management of your Google Business Profile. We handle updates, posts, and monitor performance insights.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Ongoing Profile Maintenance for Local Success</h2>
            <p className="mb-4 text-gray-600">
              A Google Business Profile requires ongoing attention to remain competitive. Our management services ensure your profile stays active, accurate, and engaging.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Our Management Services Include</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Regular business information updates (hours, holidays, etc.).</li>
              <li>Keeping services and product categories up to date.</li>
              <li>Uploading new, relevant photos.</li>
              <li>Publishing regular business updates and promotional posts.</li>
              <li>Support and guidance for responding to customer reviews.</li>
              <li>Analyzing performance insights and local SEO metrics.</li>
            </ul>
        """
    },
    {
        "filename": "AiAutomation.jsx",
        "url": "/ai-automation",
        "title": "AI Automation Services",
        "description": "Streamline your business operations with practical AI automation. Reduce repetitive tasks and improve efficiency.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Streamline Operations with Practical AI Workflows</h2>
            <p className="mb-4 text-gray-600">
              Artificial Intelligence isn't just a buzzword; it's a tool for practical business efficiency. We implement AI automation solutions that reduce manual effort and accelerate your workflows.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Practical Business Applications</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Automation of repetitive administrative tasks.</li>
              <li>AI-assisted customer enquiry handling and sorting.</li>
              <li>Efficient lead management workflows.</li>
              <li>Seamless API integrations between your existing business software.</li>
              <li>Comprehensive business process analysis to identify automation opportunities.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Implementation</h3>
            <p className="mb-4 text-gray-600">
              We focus on building reliable, maintainable automations that solve real problems, rather than making vague AI claims.
            </p>
        """
    },
    {
        "filename": "AiChatbotDevelopment.jsx",
        "url": "/ai-chatbot-development",
        "title": "AI Chatbot Development",
        "description": "Custom AI chatbot development for websites. Automate customer support, capture leads, and answer FAQs 24/7.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Intelligent Website Chatbots for 24/7 Engagement</h2>
            <p className="mb-4 text-gray-600">
              Improve your website's customer experience and capture leads around the clock with custom AI chatbot solutions.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Chatbot Capabilities</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Automated customer enquiry handling.</li>
              <li>Instant answers to frequently asked questions (FAQs).</li>
              <li>Seamless lead capture and data collection.</li>
              <li>Training chatbots on your specific business knowledge sources.</li>
              <li>Smooth human handoff when complex support is required.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Reliable Integration</h3>
            <p className="mb-4 text-gray-600">
              We implement rigorously tested chatbots that integrate cleanly with your website and supported CRM systems.
            </p>
        """
    },
    {
        "filename": "BusinessProcessAutomation.jsx",
        "url": "/business-process-automation",
        "title": "Business Process Automation",
        "description": "Automate your business processes to save time and reduce errors. We connect your tools and build efficient workflows.",
        "content": """
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Save Time by Automating Repetitive Tasks</h2>
            <p className="mb-4 text-gray-600">
              Manual data entry and disjointed systems slow your business down. We analyze your workflows and build automations that connect your tools and process data seamlessly.
            </p>
            <h3 className="text-xl font-bold mb-3 text-gray-800">What We Automate</h3>
            <ul className="list-disc pl-5 mb-6 text-gray-600 space-y-2">
              <li>Identifying and mapping repetitive manual tasks.</li>
              <li>Automated form and data processing.</li>
              <li>Internal notification systems (e.g., Slack, Email alerts).</li>
              <li>CRM and business tool integrations.</li>
              <li>AI-assisted data sorting and tagging.</li>
            </ul>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Custom Solutions</h3>
            <p className="mb-4 text-gray-600">
              The exact automation solution depends heavily on your unique business processes and the systems you currently use. We provide robust testing and error handling to ensure reliability.
            </p>
        """
    }
]

template = '''import React from 'react';
import ServiceLayout from '../../components/ServiceLayout';

const {component_name} = () => {
  return (
    <ServiceLayout 
      title="{title}" 
      description="{description}"
      url="{url}"
      defaultService="{title}"
    >
      {content}
    </ServiceLayout>
  );
};

export default {component_name};
'''

for page in pages:
    component_name = page["filename"].split(".")[0]
    file_content = template.replace("{component_name}", component_name)
    file_content = file_content.replace("{title}", page["title"])
    file_content = file_content.replace("{description}", page["description"])
    file_content = file_content.replace("{url}", page["url"])
    file_content = file_content.replace("{content}", page["content"])
    
    with open(f"{pages_dir}/{page['filename']}", "w", encoding="utf-8") as f:
        f.write(file_content)

print(f"Generated {len(pages)} service pages.")
