export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[800px] px-[var(--spacing-lg)] pt-[120px] max-md:pt-[100px] pb-[var(--spacing-xxl)] leading-relaxed">
      <header className="mb-[var(--spacing-xl)] border-b-2 border-[#8B311E]/10 pb-[var(--spacing-lg)]">
        <h1 className="mb-[var(--spacing-xs)] text-[2.5rem] max-md:text-[2rem] font-bold tracking-[-0.02em] text-[var(--color-text)]">Privacy Policy</h1>
        <p className="text-[0.95rem] font-medium text-[var(--color-text-secondary)]">Last updated at: January 24, 2026</p>
      </header>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]">
        <div className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">
          <p>This Privacy Notice for Rolling Trunk LLC ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ("process") your personal information when you use our services ("Services"), including when you:</p>
          <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
            <li className="mb-[var(--spacing-sm)]">Download and use our mobile application (Hest), or any other application of ours that links to this Privacy Notice</li>
            <li className="mb-[var(--spacing-sm)]">Use Hest. A productivity platform to help households manage tasks, schedules, meal planning, and record tracking</li>
            <li className="mb-[var(--spacing-sm)]">Engage with us in other related ways, including any marketing or events</li>
          </ul>
          <p>
            <strong>Questions or concerns?</strong> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>.
          </p>
        </div>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">SUMMARY OF KEY POINTS</h2>
        <div className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">
          <p>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our table of contents below to find the section you are looking for.</p>
          
          <p><strong>What personal information do we process?</strong> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a href="#personal-information-you-disclose-to-us" className="text-[var(--color-primary)] no-underline hover:underline">personal information you disclose to us</a>.</p>
          
          <p><strong>Do we process any sensitive personal information?</strong> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We may process sensitive personal information when necessary with your consent or as otherwise permitted by applicable law. Learn more about <a href="#sensitive-information" className="text-[var(--color-primary)] no-underline hover:underline">sensitive information we process</a>.</p>
          
          <p><strong>Do we collect any information from third parties?</strong> We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about <a href="#information-collected-from-other-sources" className="text-[var(--color-primary)] no-underline hover:underline">information collected from other sources</a>.</p>
          
          <p><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with us, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a href="#how-do-we-process-your-information" className="text-[var(--color-primary)] no-underline hover:underline">how we process your information</a>.</p>
          
          <p><strong>In what situations and with which parties do we share personal information?</strong> We may share information in specific situations and with specific third parties. Learn more about <a href="#when-and-with-whom-do-we-share-your-personal-information" className="text-[var(--color-primary)] no-underline hover:underline">when and with whom we share your personal information</a>.</p>
          
          <p><strong>How do we keep your information safe?</strong> We have adequate organizational and technical processes and procedures in place to protect your personal information. However, no electronic transmission over the internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Learn more about <a href="#how-do-we-keep-your-information-safe" className="text-[var(--color-primary)] no-underline hover:underline">how we keep your information safe</a>.</p>
          
          <p><strong>What are your rights?</strong> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a href="#what-are-your-privacy-rights" className="text-[var(--color-primary)] no-underline hover:underline">your privacy rights</a>.</p>
          
          <p><strong>How do you exercise your rights?</strong> The easiest way to exercise your rights is by visiting <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.</p>
          
          <p>Want to learn more about what we do with any information we collect? <a href="#table-of-contents" className="text-[var(--color-primary)] no-underline hover:underline">Review the Privacy Notice in full</a>.</p>
        </div>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="table-of-contents">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">TABLE OF CONTENTS</h2>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]"><a href="#what-information-do-we-collect" className="text-[var(--color-primary)] no-underline hover:underline">1. WHAT INFORMATION DO WE COLLECT?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-do-we-process-your-information" className="text-[var(--color-primary)] no-underline hover:underline">2. HOW DO WE PROCESS YOUR INFORMATION?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#what-legal-bases-do-we-rely-on-to-process-your-personal-information" className="text-[var(--color-primary)] no-underline hover:underline">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#when-and-with-whom-do-we-share-your-personal-information" className="text-[var(--color-primary)] no-underline hover:underline">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#do-we-offer-artificial-intelligence-based-products" className="text-[var(--color-primary)] no-underline hover:underline">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-do-we-handle-your-social-logins" className="text-[var(--color-primary)] no-underline hover:underline">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-long-do-we-keep-your-information" className="text-[var(--color-primary)] no-underline hover:underline">7. HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-do-we-keep-your-information-safe" className="text-[var(--color-primary)] no-underline hover:underline">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#what-are-your-privacy-rights" className="text-[var(--color-primary)] no-underline hover:underline">9. WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#controls-for-do-not-track-features" className="text-[var(--color-primary)] no-underline hover:underline">10. CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#do-united-states-residents-have-specific-privacy-rights" className="text-[var(--color-primary)] no-underline hover:underline">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#do-we-make-updates-to-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">12. DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-can-you-contact-us-about-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
          <li className="mb-[var(--spacing-sm)]"><a href="#how-can-you-review-update-or-delete-the-data-we-collect-from-you" className="text-[var(--color-primary)] no-underline hover:underline">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
        </ul>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="what-information-do-we-collect">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">1. WHAT INFORMATION DO WE COLLECT?</h2>
        
        <div id="personal-information-you-disclose-to-us" className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Personal information you disclose to us</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We value your privacy and will only collect personal information that you provide to us.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>Personal Information Provided by You.</strong> The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
            <li className="mb-[var(--spacing-sm)]">names</li>
            <li className="mb-[var(--spacing-sm)]">email addresses</li>
            <li className="mb-[var(--spacing-sm)]">contact preferences</li>
            <li className="mb-[var(--spacing-sm)]">contact or authentication data</li>
            <li className="mb-[var(--spacing-sm)]">debit/credit card numbers</li>
            <li className="mb-[var(--spacing-sm)]">billing addresses</li>
            <li className="mb-[var(--spacing-sm)]">passwords</li>
            <li className="mb-[var(--spacing-sm)]">phone numbers</li>
          </ul>
        </div>

        <div id="sensitive-information" className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Sensitive Information</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">When necessary, with your consent or as otherwise permitted by applicable law, we process the following categories of sensitive information:</p>
          <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
            <li className="mb-[var(--spacing-sm)]">Household records</li>
          </ul>
        </div>
        
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>Social Media Login Data.</strong> We may provide you with the option to register with us using your existing social media account details, like your Facebook, X, or other social media account. If you choose to register in this way, we will collect certain profile information about you from the social media provider, as described in the section called <a href="#how-do-we-handle-your-social-logins" className="text-[var(--color-primary)] no-underline hover:underline">"HOW DO WE HANDLE YOUR SOCIAL LOGINS?"</a> below.</p>

        <div className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Application Data</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you use our application(s), we also may collect the following information if you choose to provide us with access or permission:</p>
          <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
            <li className="mb-[var(--spacing-sm)]"><em>Mobile Device Access.</em> We may request access or permission to certain features from your mobile device, including your mobile device's reminders, storage, microphone, calendar, and other features. If you wish to change our access or permissions, you may do so in your device's settings.</li>
            <li className="mb-[var(--spacing-sm)]"><em>Mobile Device Data.</em> We automatically collect device information (such as your mobile device ID, model, and manufacturer), operating system, version information and system configuration information, device and application identification numbers, browser type and version, hardware model Internet service provider and/or mobile carrier, and Internet Protocol (IP) address (or proxy server). If you are using our application(s), we may also collect information about the phone network associated with your mobile device, your mobile device’s operating system or platform, the type of mobile device you use, your mobile device’s unique device ID, and information about the features of our application(s) you accessed.</li>
            <li className="mb-[var(--spacing-sm)]"><em>Push Notifications.</em> We may request to send you push notifications regarding your account or certain features of the application(s). If you wish to opt out from receiving these types of communications, you may turn them off in your device's settings.</li>
          </ul>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">This information is primarily needed to maintain the security and operation of our application(s), for troubleshooting, and for our internal analytics and reporting purposes.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
        </div>

        <div className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Information automatically collected</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">The information we collect includes:</p>
          <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
            <li className="mb-[var(--spacing-sm)]"><em>Log and Usage Data.</em> Log and usage data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our Services and which we record in log files. Depending on how you interact with us, this log data may include your IP address, device information, browser type, and settings and information about your activity in the Services (such as the date/time stamps associated with your usage, pages and files viewed, searches, and other actions you take such as which features you use), device event information (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
            <li className="mb-[var(--spacing-sm)]"><em>Device Data.</em> We collect device data such as information about your computer, phone, tablet, or other device you use to access the Services. Depending on the device used, this device data may include information such as your IP address (or proxy server), device and application identification numbers, location, browser type, hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration information.</li>
          </ul>
        </div>

        <div className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Google API</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Our use of information received from Google APIs will adhere to <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] no-underline hover:underline">Google API Services User Data Policy</a>, including the <a href="https://developers.google.com/terms/api-services-user-data-policy#limited-use" target="_blank" rel="noopener noreferrer" className="text-[var(--color-primary)] no-underline hover:underline">Limited Use requirements</a>.</p>
        </div>

        <div id="information-collected-from-other-sources" className="mb-[var(--spacing-lg)]">
          <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Information collected from other sources</h3>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We may collect limited data from public databases, marketing partners, social media platforms, and other outside sources.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">In order to enhance our ability to provide relevant marketing, offers, and services to you and update our records, we may obtain information about you from other sources, such as public databases, joint marketing partners, affiliate programs, data providers, social media platforms, and from other third parties. This information includes mailing addresses, job titles, email addresses, phone numbers, intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles, social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you interact with us on a social media platform using your social media account (e.g., Facebook or X), we receive personal information about you from such platforms such as your name, email address, and gender. You may have the right to withdraw your consent to processing your personal information. Learn more about <a href="#withdrawing-your-consent" className="text-[var(--color-primary)] no-underline hover:underline">withdrawing your consent</a>. Any personal information that we collect from your social media account depends on your social media account's privacy settings. Please note that their own use of your information is not governed by this Privacy Notice.</p>
        </div>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-do-we-process-your-information">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We process the personal information for the following purposes listed below. We may also process your information for other purposes only with your prior explicit consent.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We process your personal information for a variety of reasons, depending on how you interact with our Services, including:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]"><strong>To facilitate account creation and authentication and otherwise manage user accounts.</strong> We may process your information so you can create and log in to your account, as well as keep your account in working order.</li>
          <li className="mb-[var(--spacing-sm)]"><strong>To deliver and facilitate delivery of services to the user.</strong> We may process your information to provide you with the requested service.</li>
          <li className="mb-[var(--spacing-sm)]"><strong>To send administrative information to you.</strong> We may process your information to send you details about our products and services, changes to our terms and policies, and other similar information.</li>
          <li className="mb-[var(--spacing-sm)]"><strong>To send you marketing and promotional communications.</strong> We may process the personal information you send to us for our marketing purposes, if this is in accordance with your marketing preferences. You can opt out of our marketing emails at any time. For more information, see <a href="#what-are-your-privacy-rights" className="text-[var(--color-primary)] no-underline hover:underline">"WHAT ARE YOUR PRIVACY RIGHTS?"</a> below.</li>
        </ul>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="what-legal-bases-do-we-rely-on-to-process-your-personal-information">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We only process your personal information when we believe it is necessary and we have a valid legal reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to fulfill our legitimate business interests.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>If you are located in Canada, this section applies to you.</strong></p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may process your information if you have given us specific permission (i.e., express consent) to use your personal information for a specific purpose, or in situations where your permission can be inferred (i.e., implied consent). You can <a href="#withdrawing-your-consent" className="text-[var(--color-primary)] no-underline hover:underline">withdraw your consent</a> at any time.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">In some exceptional cases, we may be legally permitted under applicable law to process your information without your consent, including, for example:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way</li>
          <li className="mb-[var(--spacing-sm)]">For investigations and fraud detection and prevention</li>
          <li className="mb-[var(--spacing-sm)]">For business transactions provided certain conditions are met</li>
          <li className="mb-[var(--spacing-sm)]">If it is contained in a witness statement and the collection is necessary to assess, process, or settle an insurance claim</li>
          <li className="mb-[var(--spacing-sm)]">For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li className="mb-[var(--spacing-sm)]">If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse</li>
          <li className="mb-[var(--spacing-sm)]">If it is reasonable to expect collection and use with consent would compromise the availability or the accuracy of the information and the collection is reasonable for purposes related to investigating a breach of an agreement or a contravention of the laws of Canada or a province</li>
          <li className="mb-[var(--spacing-sm)]">If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to the production of records</li>
          <li className="mb-[var(--spacing-sm)]">If it was produced by an individual in the course of their employment, business, or profession and the collection is consistent with the purposes for which the information was produced</li>
          <li className="mb-[var(--spacing-sm)]">If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li className="mb-[var(--spacing-sm)]">If the information is publicly available and is specified by the regulations</li>
          <li className="mb-[var(--spacing-sm)]">We may disclose de-identified information for approved research or statistics projects, subject to ethics oversight and confidentiality commitments</li>
        </ul>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="when-and-with-whom-do-we-share-your-personal-information">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We may share information in specific situations described in this section and/or with the following third parties.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may need to share your personal information in the following situations:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]"><strong>Business Transfers.</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Offer Wall.</strong> Our application(s) may display a third-party hosted "offer wall." Such an offer wall allows third-party advertisers to offer virtual currency, gifts, or other items to users in return for the acceptance and completion of an advertisement offer. Such an offer wall may appear in our application(s) and be displayed to you based on certain data, such as your geographic area or demographic information. When you click on an offer wall, you will be brought to an external website belonging to other persons and will leave our application(s). A unique identifier, such as your user ID, will be shared with the offer wall provider in order to prevent fraud and properly credit your account with the relevant reward.</li>
        </ul>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="do-we-offer-artificial-intelligence-based-products">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">5. DO WE OFFER ARTIFICIAL INTELLIGENCE-BASED PRODUCTS?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">As part of our Services, we offer products, features, or tools powered by artificial intelligence, machine learning, or similar technologies (collectively, "AI Products"). These tools are designed to enhance your experience and provide you with innovative solutions. The terms in this Privacy Notice govern your use of the AI Products within our Services.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Use of AI Technologies</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We provide the AI Products through third-party service providers ("AI Service Providers"), including Google Cloud AI. As outlined in this Privacy Notice, your input, output, and personal information will be shared with and processed by these AI Service Providers to enable your use of our AI Products for purposes outlined in <a href="#when-and-with-whom-do-we-share-your-personal-information" className="text-[var(--color-primary)] no-underline hover:underline">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a> You must not use the AI Products in any way that violates the terms or policies of any AI Service Provider.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Our AI Products</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Our AI Products are designed for the following functions:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">Natural language processing</li>
          <li className="mb-[var(--spacing-sm)]">AI insights</li>
        </ul>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">How We Process Your Data Using AI</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">All personal information processed using our AI Products is handled in line with our Privacy Notice and our agreement with third parties. This ensures high security and safeguards your personal information throughout the process, giving you peace of mind about your data's safety.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">How to Opt Out</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We believe in giving you the power to decide how your data is used. To opt out, you can:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">Log in to your account settings and update your user account</li>
        </ul>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-do-we-handle-your-social-logins">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-long-do-we-keep-your-information">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements). No purpose in this notice will require us keeping your personal information for longer than the period of time in which users have an account with us.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-do-we-keep-your-information-safe">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> We aim to protect your personal information through a system of organizational and technical security measures.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We have implemented appropriate and reasonable technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="what-are-your-privacy-rights">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">9. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> Depending on your state of residence in the US or in some regions, such as Canada, you have rights that allow you greater access to and control over your personal information. You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">In some regions (like Canada), you have certain rights under applicable data protection laws. These may include the right (i) to request access and obtain a copy of your personal information, (ii) to request rectification or erasure; (iii) to restrict the processing of your personal information; (iv) if applicable, to data portability; and (v) not to be subject to automated decision-making. If a decision that produces legal or similarly significant effects is made solely by automated means, we will inform you, explain the main factors, and offer a simple way to request human review. In certain circumstances, you may also have the right to object to the processing of your personal information. You can make such a request by contacting us by using the contact details provided in the section <a href="#how-can-you-contact-us-about-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We will consider and act upon any request in accordance with applicable data protection laws.</p>
        
        <div id="withdrawing-your-consent">
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>Withdrawing your consent:</strong> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section <a href="#how-can-you-contact-us-about-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below.</p>
          <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>
        </div>

        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>Opting out of marketing and promotional communications:</strong> You can unsubscribe from our marketing and promotional communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us using the details provided in the section <a href="#how-can-you-contact-us-about-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a> below. You will then be removed from the marketing lists. However, we may still communicate with you — for example, to send you service-related messages that are necessary for the administration and use of your account, to respond to service requests, or for other non-marketing purposes.</p>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Account Information</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you would at any time like to review or change the information in your account or terminate your account, you can:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">Log in to your account settings and update your user account.</li>
        </ul>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you have questions or comments about your privacy rights, you may email us at <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="controls-for-do-not-track-features">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">10. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">California law requires us to let you know how we respond to web browser DNT signals. Because there currently is not an industry or legal standard for recognizing or honoring DNT signals, we do not respond to them at this time.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="do-united-states-residents-have-specific-privacy-rights">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">11. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> If you are a resident of California, Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Texas, Utah, or Virginia, you may have the right to request access to and receive details about the personal information we maintain about you and how we have processed it, correct inaccuracies, get a copy of, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. More information is provided below.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Categories of Personal Information We Collect</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">The table below shows the categories of personal information we have collected in the past twelve (12) months.</p>

        <div className="mb-[var(--spacing-lg)] overflow-x-auto rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] font-semibold text-[var(--color-text)]">Category</th>
                <th className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] font-semibold text-[var(--color-text)]">Examples</th>
                <th className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] font-semibold text-[var(--color-text)]">Collected</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">A. Identifiers</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal identifier, online identifier, Internet Protocol address, email address, and account name</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">B. Personal information as defined in the California Customer Records statute</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Name, contact information, education, employment, employment history, and financial information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">C. Protected classification characteristics under state or federal law</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Gender, age, date of birth, race and ethnicity, national origin, marital status, and other demographic data</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">D. Commercial information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Transaction information, purchase history, financial details, and payment information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">E. Biometric information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Fingerprints and voiceprints</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">F. Internet or other similar network activity</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Browsing history, search history, online behavior, interest data, and interactions with our and other websites, applications, systems, and advertisements</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">G. Geolocation data</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Device location</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">H. Audio, electronic, sensory, or similar information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Images and audio, video or call recordings created in connection with our business activities</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">I. Professional or employment-related information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Business contact details in order to provide you our Services at a business level or job title, work history, and professional qualifications if you apply for a job with us</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">J. Education Information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Student records and directory information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">K. Inferences drawn from collected personal information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">Inferences drawn from any of the collected personal information listed above to create a profile or summary about, for example, an individual’s preferences and characteristics</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
              <tr>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">L. Sensitive personal Information</td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]"></td>
                <td className="border-b border-[var(--color-border)] px-[var(--spacing-md)] py-[var(--spacing-sm)] text-left align-top text-[0.95rem] text-[var(--color-text-secondary)]">NO</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may also collect other personal information outside of these categories through instances where you interact with us in person, online, or by phone or mail in the context of:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">Receiving help through our customer support channels;</li>
          <li className="mb-[var(--spacing-sm)]">Participation in customer surveys or contests; and</li>
          <li className="mb-[var(--spacing-sm)]">Facilitation in the delivery of our Services and to respond to your inquiries.</li>
        </ul>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Sources of Personal Information</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Learn more about the sources of personal information we collect in <a href="#what-information-do-we-collect" className="text-[var(--color-primary)] no-underline hover:underline">"WHAT INFORMATION DO WE COLLECT?"</a></p>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">How We Use and Share Personal Information</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Learn more about how we use your personal information in the section, <a href="#how-do-we-process-your-information" className="text-[var(--color-primary)] no-underline hover:underline">"HOW DO WE PROCESS YOUR INFORMATION?"</a></p>
        
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>Will your information be shared with anyone else?</strong></p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may disclose your personal information with our service providers pursuant to a written contract between us and each service provider. Learn more about how we disclose personal information to in the section, <a href="#when-and-with-whom-do-we-share-your-personal-information" className="text-[var(--color-primary)] no-underline hover:underline">"WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?"</a></p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may use your personal information for our own business purposes, such as for undertaking internal research for technological development and demonstration. This is not considered to be "selling" of your personal information.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We have not disclosed, sold, or shared any personal information to third parties for a business or commercial purpose in the preceding twelve (12) months. We will not sell or share personal information in the future belonging to website visitors, users, and other consumers.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Your Rights</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">You have rights under certain US state data protection laws. However, these rights are not absolute, and in certain cases, we may decline your request as permitted by law. These rights include:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]"><strong>Right to know</strong> whether or not we are processing your personal data</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to access</strong> your personal data</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to correct</strong> inaccuracies in your personal data</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to request</strong> the deletion of your personal data</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to obtain a copy</strong> of the personal data you previously shared with us</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to non-discrimination</strong> for exercising your rights</li>
          <li className="mb-[var(--spacing-sm)]"><strong>Right to opt out</strong> of the processing of your personal data if it is used for targeted advertising (or sharing as defined under California’s privacy law), the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects ("profiling")</li>
        </ul>

        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Depending upon the state where you live, you may also have the following rights:</p>
        <ul className="mb-[var(--spacing-md)] list-disc pl-[var(--spacing-lg)] text-[var(--color-text-secondary)]">
          <li className="mb-[var(--spacing-sm)]">Right to access the categories of personal data being processed (as permitted by applicable law, including the privacy law in Minnesota)</li>
          <li className="mb-[var(--spacing-sm)]">Right to obtain a list of the categories of third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in California, Delaware, and Maryland)</li>
          <li className="mb-[var(--spacing-sm)]">Right to obtain a list of specific third parties to which we have disclosed personal data (as permitted by applicable law, including the privacy law in Minnesota and Oregon)</li>
          <li className="mb-[var(--spacing-sm)]">Right to obtain a list of third parties to which we have sold personal data (as permitted by applicable law, including the privacy law in Connecticut)</li>
          <li className="mb-[var(--spacing-sm)]">Right to review, understand, question, and depending on where you live, correct how personal data has been profiled (as permitted by applicable law, including the privacy law in Connecticut and Minnesota)</li>
          <li className="mb-[var(--spacing-sm)]">Right to limit use and disclosure of sensitive personal data (as permitted by applicable law, including the privacy law in California)</li>
          <li className="mb-[var(--spacing-sm)]">Right to opt out of the collection of sensitive data and personal data collected through the operation of a voice or facial recognition feature (as permitted by applicable law, including the privacy law in Florida)</li>
        </ul>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">How to Exercise Your Rights</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">To exercise these rights, you can contact us by visiting <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>, by emailing us at <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>, or by referring to the contact details at the bottom of this document.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Under certain US state data protection laws, you can designate an authorized agent to make a request on your behalf. We may deny a request from an authorized agent that does not submit proof that they have been validly authorized to act on your behalf in accordance with applicable laws.</p>
        
        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Request Verification</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Upon receiving your request, we will need to verify your identity to determine you are the same person about whom we have the information in our system. We will only use personal information provided in your request to verify your identity or authority to make the request. However, if we cannot verify your identity from the information already maintained by us, we may request that you provide additional information for the purposes of verifying your identity and for security or fraud-prevention purposes.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you submit the request through an authorized agent, we may need to collect additional information to verify your identity before processing your request and the agent will need to provide a written and signed permission from you to submit such request on your behalf.</p>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">Appeals</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Under certain US state data protection laws, if we decline to take action regarding your request, you may appeal our decision by emailing us at <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>. We will inform you in writing of any action taken or not taken in response to the appeal, including a written explanation of the reasons for the decisions. If your appeal is denied, you may submit a complaint to your state attorney general.</p>

        <h3 className="mt-[var(--spacing-lg)] mb-[var(--spacing-sm)] text-[1.2rem] font-semibold text-[var(--color-text)]">California "Shine The Light" Law</h3>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about categories of personal information (if any) we disclosed to third parties for direct marketing purposes and the names and addresses of all third parties with which we shared personal information in the immediately preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to us by using the contact details provided in the section <a href="#how-can-you-contact-us-about-this-notice" className="text-[var(--color-primary)] no-underline hover:underline">"HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"</a></p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="do-we-make-updates-to-this-notice">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">12. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]"><strong>In Short:</strong> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-can-you-contact-us-about-this-notice">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">13. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">If you have questions or comments about this notice, you may email us at <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a> or contact us by post at:</p>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">
          <strong>Rolling Trunk LLC</strong><br />
          2800 E. Enterprise Ave<br />
          Appleton, WI 54913<br />
          United States
        </p>
      </section>

      <section className="mb-[var(--spacing-xl)] scroll-mt-[120px]" id="how-can-you-review-update-or-delete-the-data-we-collect-from-you">
        <h2 className="mt-[var(--spacing-xl)] mb-[var(--spacing-md)] text-[1.5rem] max-md:text-[1.25rem] font-semibold text-[var(--color-text)]">14. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
        <p className="mb-[var(--spacing-md)] text-[1.05rem] text-[var(--color-text-secondary)]">Based on the applicable laws of your country or state of residence in the US, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please visit: <a href="mailto:legal@rollingtrunk.com" className="text-[var(--color-primary)] no-underline hover:underline">legal@rollingtrunk.com</a>.</p>
      </section>
    </main>
  );
}
