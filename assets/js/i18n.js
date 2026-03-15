// Lightweight inline i18n utility
// Add translations to the TRANSLATIONS object and mark elements with data-i18n="key".

(function () {
    const DEFAULT_LANG = 'en';
    const STORAGE_KEY = 'abc-lang';
    const TRANSLATIONS = {
        en: {
            site_name: 'ABC Foundation',
            nav_home: 'Home',
            nav_about: 'About',
            nav_projects: 'Projects',
            nav_volunteer: 'Volunteer',
            nav_donate: 'Donate',
            nav_gallery: 'Gallery',
            nav_contact: 'Contact',
            hero_tagline: 'Protecting ecosystems together',
            hero_title: 'Restoring Nature. Empowering Communities.',
            hero_text: 'We partner with local leaders to revive water bodies, expand green cover, and inspire sustainable living.',
            cta_donate: 'Donate Now',
            cta_volunteer: 'Become a Volunteer',
            impact_heading: 'Our Impact',
            impact_lakes: 'Lakes Restored',
            impact_trees: 'Trees Planted',
            impact_volunteers: 'Volunteers',
            impact_villages: 'Villages Impacted',
            initiatives_heading: 'Core Initiatives',
            initiative_water_title: 'Water Conservation',
            initiative_water_text: 'Protecting and restoring water resources for communities.',
            initiative_tree_title: 'Tree Plantation',
            initiative_tree_text: 'Planting trees to combat climate change and improve air quality.',
            initiative_waste_title: 'Waste Management',
            initiative_waste_text: 'Promoting sustainable waste practices and recycling.',
            initiative_community_title: 'Community Awareness',
            initiative_community_text: 'Educating communities on environmental issues.',
            featured_projects_heading: 'Featured Projects',
            project_urban_title: 'Urban Greening Initiative',
            project_urban_text: 'Transforming city spaces with sustainable green solutions.',
            project_river_title: 'River Restoration Project',
            project_river_text: 'Cleaning and restoring local waterways with volunteers.',
            project_recycle_title: 'Community Recycling Program',
            project_recycle_text: 'Building lasting recycling habits in local neighborhoods.',
            learn_more: 'Learn More',
            impact_story_title: 'Impact Story: Reviving Kaveri Lake',
            impact_story_text: 'With the help of local residents and dedicated volunteers, we restored the Kaveri Lake shoreline, improved water quality, and created a safe habitat for native birds. The community now hosts monthly clean-up drives and eco-education walks.',
            impact_story_button: 'Read More',
            campaigns_heading: 'Current Campaigns',
            campaign_tree_title: 'Tree Plantation Drive',
            campaign_tree_text: 'Planting native saplings across urban corridors and schools.',
            campaign_lake_title: 'Lake Restoration',
            campaign_lake_text: 'Reviving water bodies with community cleanups and monitoring.',
            campaign_village_title: 'Village Water Program',
            campaign_village_text: 'Improving access to clean water through community filtration.',
            campaign_support: 'Support Campaign',
            map_heading: 'Impact Across Regions',
            map_text: 'Our projects span lakes, villages, and urban neighborhoods. Each marker highlights a community-led restoration initiative.',
            explore_projects: 'Explore Projects',
            partners_heading: 'Our Partners',
            parallax_heading: 'Together We Can Restore Nature',
            parallax_text: 'Every action counts. Join hands with us to revive ecosystems and empower communities.',
            parallax_button: 'Join the Movement',
            testimonials_heading: 'Voices From the Field',
            testimonial_1_quote: '“Volunteering with ABC Foundation helped me see how small actions can rebuild entire ecosystems.”',
            testimonial_1_name: 'Aisha Verma',
            testimonial_1_role: 'Volunteer Lead',
            testimonial_2_quote: '“The lake restoration program has brought back wildlife and pride to our village.”',
            testimonial_2_name: 'Ravi Kumar',
            testimonial_2_role: 'Community Partner',
            testimonial_3_quote: '“Their workshops inspired our school to start a recycling and composting drive.”',
            testimonial_3_name: 'Meera Iyer',
            testimonial_3_role: 'Teacher & Beneficiary',
            upcoming_heading: 'Upcoming Campaigns',
            upcoming_tree_title: 'Tree Plantation Drive',
            upcoming_tree_text: 'Join us to plant native saplings across urban parks.',
            upcoming_lake_title: 'Lake Cleanup Campaign',
            upcoming_lake_text: 'A community cleanup initiative to protect local water bodies.',
            upcoming_awareness_title: 'Environmental Awareness Program',
            upcoming_awareness_text: 'Interactive sessions and workshops for schools and colleges.',
            volunteer_heading: 'Volunteer Experience',
            volunteer_text: 'Grow your impact while gaining meaningful skills and connections.',
            volunteer_benefit_1_title: 'Environmental Impact',
            volunteer_benefit_1_text: 'Contribute directly to restoration and conservation efforts.',
            volunteer_benefit_2_title: 'Community Engagement',
            volunteer_benefit_2_text: 'Work alongside local leaders and inspiring volunteers.',
            volunteer_benefit_3_title: 'Skill Development',
            volunteer_benefit_3_text: 'Build leadership, coordination, and sustainability skills.',
            volunteer_cta: 'Join as Volunteer',
            donor_trust_heading: 'Donor Trust & Transparency',
            donor_card_1_title: 'Registered NGO',
            donor_card_1_text: 'Compliant with local regulations and audited annually.',
            donor_card_2_title: 'Transparent Funding',
            donor_card_2_text: 'Clear allocation of funds toward projects and community support.',
            donor_card_3_title: 'Annual Impact Reports',
            donor_card_3_text: 'Detailed updates on project milestones and outcomes.',
            volunteer_cta_heading: 'Join Our Volunteer Team',
            volunteer_cta_text: 'Make a difference in your community. Volunteer with us today!',
            donation_cta_heading: 'Your Donations Make a Difference',
            donation_cta_text: 'Every contribution helps us protect the environment and build a sustainable future.',
            latest_updates_heading: 'Latest Updates',
            update_1_title: 'New Partnership Announced',
            update_1_text: 'Collaborating with local leaders for stronger environmental initiatives.',
            update_2_title: 'Volunteer Success Story',
            update_2_text: "How one volunteer's dedication created a lasting impact.",
            update_3_title: 'Upcoming Events',
            update_3_text: 'Join us for our next community clean-up event.',
            read_more: 'Read more',
            newsletter_heading: 'Stay Connected',
            newsletter_text: 'Get monthly impact stories, campaign updates, and volunteer opportunities.',
            newsletter_button: 'Subscribe',
            footer_about_heading: 'About ABC Foundation',
            footer_about_text: 'We are a community-driven NGO restoring ecosystems, empowering local volunteers, and building resilient green spaces for future generations.',
            footer_links_heading: 'Quick Links',
            footer_contact_heading: 'Contact Info',
            footer_contact_address: '123 Green Street, Eco City',
            footer_contact_phone: 'Phone: (123) 456-7890',
            footer_contact_email: 'Email: info@abc-foundation.org',
            donate_heading: 'Support Our Cause',
            donate_impact_heading: 'How Your Donation Creates Impact',
            donate_impact_item_1: '₹500 → Plants 5 trees.',
            donate_impact_item_2: '₹1000 → Supports water restoration.',
            donate_impact_item_3: '₹5000 → Funds a plantation drive.',
            donate_amount_heading: 'Choose a Donation Amount',
            donate_custom_label: 'Custom Amount',
            gallery_filter_all: 'All',
            gallery_filter_plantation: 'Plantation',
            gallery_filter_water: 'Water Projects',
            gallery_filter_community: 'Community Work',
            contact_heading: 'Contact Us',
            contact_subheading: 'Have questions about our work or want to get involved? We would love to hear from you.',
            contact_form_heading: 'Send a Message',
            contact_label_name: 'Name',
            contact_label_email: 'Email',
            contact_label_phone: 'Phone',
            contact_label_message: 'Message',
            contact_button_send: 'Send Message',
            contact_info_heading: 'Contact Information',
            contact_info_address_label: 'Address',
            contact_info_phone_label: 'Phone',
            contact_info_email_label: 'Email',
            contact_info_location_label: 'Location',
            contact_map_placeholder: 'Map Placeholder',
            contact_map_note: 'Add an embedded map when ready.'
        },
        ta: {
            site_name: 'ABC அறக்கட்டளை',
            nav_home: 'முகப்பு',
            nav_about: 'எங்களைப் பற்றி',
            nav_projects: 'திட்டங்கள்',
            nav_volunteer: 'தன்னார்வம்',
            nav_donate: 'நன்கொடை',
            nav_gallery: 'காட்சியகம்',
            nav_contact: 'தொடர்பு',
            hero_tagline: 'சூழல் அமைப்புகளை ஒன்றாகப் பாதுகாப்போம்',
            hero_title: 'இயற்கையை மீட்டெடுக்கிறோம். சமூகங்களை வலுப்படுத்துகிறோம்.',
            hero_text: 'நீர்நிலைகளை மீட்டெடுத்து, பசுமை பரப்பை விரிவுபடுத்தி, நிலைத்த வாழ்வை ஊக்குவிக்க உள்ளூர் தலைவர்களுடன் கூட்டணி செய்கிறோம்.',
            cta_donate: 'இப்போது நன்கொடை அளிக்கவும்',
            cta_volunteer: 'தன்னார்வலராக சேருங்கள்',
            impact_heading: 'எங்கள் தாக்கம்',
            impact_lakes: 'மீட்கப்பட்ட ஏரிகள்',
            impact_trees: 'நட்ட மரங்கள்',
            impact_volunteers: 'தன்னார்வலர்கள்',
            impact_villages: 'பயன் பெற்ற கிராமங்கள்',
            initiatives_heading: 'முக்கிய முயற்சிகள்',
            initiative_water_title: 'நீர் பாதுகாப்பு',
            initiative_water_text: 'சமூகங்களுக்கு நீர்வளங்களை பாதுகாத்து மீட்டெடுத்தல்.',
            initiative_tree_title: 'மரம் நடவு',
            initiative_tree_text: 'காலநிலை மாற்றத்தை எதிர்கொண்டு காற்றுத் தரத்தை மேம்படுத்த மரங்கள் நடுதல்.',
            initiative_waste_title: 'கழிவு மேலாண்மை',
            initiative_waste_text: 'நிலைத்த கழிவு நடைமுறைகள் மற்றும் மறுசுழற்சியை ஊக்குவித்தல்.',
            initiative_community_title: 'சமூக விழிப்புணர்வு',
            initiative_community_text: 'சூழல் பிரச்சினைகள் குறித்து சமூகங்களை கல்வி அளித்தல்.',
            featured_projects_heading: 'சிறப்பு திட்டங்கள்',
            project_urban_title: 'நகர பசுமை முயற்சி',
            project_urban_text: 'நிலைத்த பசுமை தீர்வுகளுடன் நகர இடங்களை மாற்றுதல்.',
            project_river_title: 'ஆறு மீட்பு திட்டம்',
            project_river_text: 'தன்னார்வலர்களுடன் உள்ளூர் நீர்வழிகளை சுத்தப்படுத்தி மீட்டெடுத்தல்.',
            project_recycle_title: 'சமூக மறுசுழற்சி திட்டம்',
            project_recycle_text: 'உள்ளூர் பகுதிகளில் நிலையான மறுசுழற்சி பழக்கங்களை உருவாக்குதல்.',
            learn_more: 'மேலும் அறிய',
            impact_story_title: 'தாக்கக் கதை: காவேரி ஏரியின் மீட்பு',
            impact_story_text: 'உள்ளூர் குடிமக்கள் மற்றும் அர்ப்பணிக்கப்பட்ட தன்னார்வலர்களின் உதவியுடன், காவேரி ஏரியின் கரையை மீட்டெடுத்து, நீர்த் தரத்தை மேம்படுத்து, நாட்டுப் பறவைகளுக்கு பாதுகாப்பான வாழ்விடத்தை உருவாக்கினோம். சமூகமே இப்போது மாதாந்திர சுத்தப்படுத்தல் இயக்கங்களையும் சூழல் கல்வி நடைப்பயணங்களையும் நடத்துகிறது.',
            impact_story_button: 'மேலும் படிக்க',
            campaigns_heading: 'தற்போதைய இயக்கங்கள்',
            campaign_tree_title: 'மரம் நடவு இயக்கம்',
            campaign_tree_text: 'நகர நடைபாதைகள் மற்றும் பள்ளிகளில் நாட்டுச் செடிகளை நடுதல்.',
            campaign_lake_title: 'ஏரி மீட்பு',
            campaign_lake_text: 'சமூக சுத்தப்படுத்தல் மற்றும் கண்காணிப்புடன் நீர்நிலைகளை மீட்டெடுத்தல்.',
            campaign_village_title: 'கிராம நீர்த் திட்டம்',
            campaign_village_text: 'சமூக வடிகட்டி முறைகளால் தூய நீருக்கு அணுகலை மேம்படுத்துதல்.',
            campaign_support: 'இயக்கத்தை ஆதரிக்கவும்',
            map_heading: 'பிராந்தியங்களில் தாக்கம்',
            map_text: 'எங்கள் திட்டங்கள் ஏரிகள், கிராமங்கள், நகரப் பகுதிகளில் விரிகின்றன. ஒவ்வொரு குறியீடும் சமூக தலைமையிலான மீட்பு முயற்சியை காட்டுகிறது.',
            explore_projects: 'திட்டங்களை ஆராயுங்கள்',
            partners_heading: 'எங்கள் கூட்டாளிகள்',
            parallax_heading: 'ஒன்றாக இயற்கையை மீட்டெடுக்கலாம்',
            parallax_text: 'ஒவ்வொரு செயலிலும் மாற்றம் உண்டு. சூழல் அமைப்புகளை மீட்டெடுத்து சமூகங்களை வலுப்படுத்த எங்களுடன் இணைக.',
            parallax_button: 'இயக்கத்தில் சேருங்கள்',
            testimonials_heading: 'தளத்திலிருந்து குரல்கள்',
            testimonial_1_quote: '“ABC அறக்கட்டளையுடன் தன்னார்வமாக பணியாற்றியதில் சிறிய செயல்கள் கூட முழு சூழல் அமைப்புகளை மீட்டெடுக்க முடியும் என்பதை உணர்ந்தேன்.”',
            testimonial_1_name: 'ஆயிஷா வர்மா',
            testimonial_1_role: 'தன்னார்வ தலைவி',
            testimonial_2_quote: '“ஏரி மீட்பு திட்டம் எங்கள் கிராமத்திற்கு வனவிலங்குகளையும் பெருமையையும் மீட்டுத் தந்தது.”',
            testimonial_2_name: 'ரவீ குமார்',
            testimonial_2_role: 'சமூக கூட்டாளர்',
            testimonial_3_quote: '“அவர்கள் நடத்திய பணிமனைகள் எங்கள் பள்ளியை மறுசுழற்சி மற்றும் உரமிடும் இயக்கத்தை தொடங்க ஊக்குவித்தன.”',
            testimonial_3_name: 'மீரா ஐயர்',
            testimonial_3_role: 'ஆசிரியர் & பயனாளர்',
            upcoming_heading: 'வரவிருக்கும் இயக்கங்கள்',
            upcoming_tree_title: 'மரம் நடவு இயக்கம்',
            upcoming_tree_text: 'நகரப் பூங்காக்களில் நாட்டுச் செடிகளை நட எங்களுடன் சேருங்கள்.',
            upcoming_lake_title: 'ஏரி சுத்தம் இயக்கம்',
            upcoming_lake_text: 'உள்ளூர் நீர்நிலைகளை பாதுகாக்க சமூக சுத்தப்படுத்தல் முயற்சி.',
            upcoming_awareness_title: 'சூழல் விழிப்புணர்வு திட்டம்',
            upcoming_awareness_text: 'பள்ளிகள் மற்றும் கல்லூரிகளுக்கான தொடர்பாடல் அமர்வுகள் மற்றும் பணிமனைகள்.',
            volunteer_heading: 'தன்னார்வ அனுபவம்',
            volunteer_text: 'அர்த்தமுள்ள திறன்களையும் தொடர்புகளையும் பெறும் போது உங்கள் தாக்கத்தை வளர்க்குங்கள்.',
            volunteer_benefit_1_title: 'சூழல் தாக்கம்',
            volunteer_benefit_1_text: 'மீட்பு மற்றும் பாதுகாப்பு முயற்சிகளில் நேரடியாக பங்களிக்கவும்.',
            volunteer_benefit_2_title: 'சமூக ஈடுபாடு',
            volunteer_benefit_2_text: 'உள்ளூர் தலைவர்கள் மற்றும் ஊக்கமளிக்கும் தன்னார்வலர்களுடன் பணியாற்றுங்கள்.',
            volunteer_benefit_3_title: 'திறன் மேம்பாடு',
            volunteer_benefit_3_text: 'தலைமை, ஒருங்கிணைப்பு, மற்றும் நிலைத்தன்மைத் திறன்களை வளர்த்துக்கொள்ளுங்கள்.',
            volunteer_cta: 'தன்னார்வலராக சேருங்கள்',
            donor_trust_heading: 'நன்கொடை நம்பிக்கை & வெளிப்படைத்தன்மை',
            donor_card_1_title: 'பதிவு செய்யப்பட்ட NGO',
            donor_card_1_text: 'உள்ளூர் விதிமுறைகளுக்கு இணக்கமானது; ஆண்டுதோறும் தணிக்கப்படுகிறது.',
            donor_card_2_title: 'வெளிப்படையான நிதி',
            donor_card_2_text: 'திட்டங்கள் மற்றும் சமூக ஆதரவுக்கான நிதி ஒதுக்கீடு தெளிவாக உள்ளது.',
            donor_card_3_title: 'ஆண்டு தாக்க அறிக்கைகள்',
            donor_card_3_text: 'திட்ட முன்னேற்றங்கள் மற்றும் முடிவுகள் குறித்து விரிவான புதுப்பிப்புகள்.',
            volunteer_cta_heading: 'எங்கள் தன்னார்வக் குழுவில் சேருங்கள்',
            volunteer_cta_text: 'உங்கள் சமூகத்தில் மாற்றத்தை உருவாக்குங்கள். இன்று எங்களுடன் தன்னார்வலராகுங்கள்!',
            donation_cta_heading: 'உங்கள் நன்கொடைகள் மாற்றத்தை உருவாக்குகின்றன',
            donation_cta_text: 'ஒவ்வொரு பங்களிப்பும் சூழலை பாதுகாக்கவும் நிலையான எதிர்காலத்தை கட்டியெழுப்பவும் உதவுகிறது.',
            latest_updates_heading: 'சமீபத்திய புதுப்பிப்புகள்',
            update_1_title: 'புதிய கூட்டாண்மை அறிவிப்பு',
            update_1_text: 'மிகுந்த சூழல் முயற்சிகளுக்காக உள்ளூர் தலைவர்களுடன் இணைந்து செயல்படுகிறோம்.',
            update_2_title: 'தன்னார்வ வெற்றிக் கதை',
            update_2_text: 'ஒரு தன்னார்வலரின் அர்ப்பணிப்பு எவ்வாறு நிலையான தாக்கத்தை உருவாக்கியது.',
            update_3_title: 'வரவிருக்கும் நிகழ்வுகள்',
            update_3_text: 'எங்கள் அடுத்த சமூக சுத்தப்படுத்தல் நிகழ்வில் சேருங்கள்.',
            read_more: 'மேலும் படிக்க',
            newsletter_heading: 'தொடர்பு வைத்திருங்கள்',
            newsletter_text: 'மாதாந்திர தாக்கக் கதைகள், இயக்கப் புதுப்பிப்புகள், மற்றும் தன்னார்வ வாய்ப்புகளைப் பெறுங்கள்.',
            newsletter_button: 'சந்தா பெறுங்கள்',
            footer_about_heading: 'ABC அறக்கட்டளை பற்றி',
            footer_about_text: 'நாங்கள் சமூக இயக்கத்தால் வழிநடத்தப்படும் NGO; சூழல் அமைப்புகளை மீட்டெடுத்து, உள்ளூர் தன்னார்வலர்களை வலுப்படுத்தி, எதிர்கால தலைமுறைகளுக்கான பசுமை இடங்களை உருவாக்குகிறோம்.',
            footer_links_heading: 'விரைவு இணைப்புகள்',
            footer_contact_heading: 'தொடர்பு தகவல்',
            footer_contact_address: '123 கிரீன் வீதி, ஈகோ நகரம்',
            footer_contact_phone: 'தொலைபேசி: (123) 456-7890',
            footer_contact_email: 'மின்னஞ்சல்: info@abc-foundation.org',
            donate_heading: 'எங்கள் நோக்கத்தை ஆதரிக்கவும்',
            donate_impact_heading: 'உங்கள் நன்கொடை எவ்வாறு தாக்கத்தை உருவாக்குகிறது',
            donate_impact_item_1: '₹500 → 5 மரங்களை நடுகிறது.',
            donate_impact_item_2: '₹1000 → நீர் மீட்பை ஆதரிக்கிறது.',
            donate_impact_item_3: '₹5000 → ஒரு மரநடவு இயக்கத்தை நிதியளிக்கிறது.',
            donate_amount_heading: 'நன்கொடை தொகையைத் தேர்ந்தெடுக்கவும்',
            donate_custom_label: 'விருப்பத் தொகை',
            gallery_filter_all: 'அனைத்தும்',
            gallery_filter_plantation: 'மரநடவு',
            gallery_filter_water: 'நீர்த் திட்டங்கள்',
            gallery_filter_community: 'சமூகப் பணிகள்',
            contact_heading: 'எங்களை தொடர்புகொள்ளுங்கள்',
            contact_subheading: 'எங்கள் பணியைப் பற்றிய கேள்விகள் உள்ளதா அல்லது இணைவதா? உங்களிடமிருந்து கேட்க விரும்புகிறோம்.',
            contact_form_heading: 'செய்தி அனுப்புங்கள்',
            contact_label_name: 'பெயர்',
            contact_label_email: 'மின்னஞ்சல்',
            contact_label_phone: 'தொலைபேசி',
            contact_label_message: 'செய்தி',
            contact_button_send: 'செய்தி அனுப்பவும்',
            contact_info_heading: 'தொடர்பு தகவல்',
            contact_info_address_label: 'முகவரி',
            contact_info_phone_label: 'தொலைபேசி',
            contact_info_email_label: 'மின்னஞ்சல்',
            contact_info_location_label: 'இடம்',
            contact_map_placeholder: 'வரைபட இடமாற்று',
            contact_map_note: 'தயாரானபோது இடைநீக்கப்பட்ட வரைபடத்தைச் சேர்க்கவும்.'
        }
    };

    const getSavedLanguage = () => {
        try {
            return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANG;
        } catch (err) {
            return DEFAULT_LANG;
        }
    };

    const saveLanguage = (lang) => {
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch (err) {
            // Ignore storage errors (privacy mode, etc.)
        }
    };

    const loadLanguage = async (lang) => {
        const base = TRANSLATIONS[DEFAULT_LANG] || {};
        const selected = TRANSLATIONS[lang] || {};
        return { ...base, ...selected };
    };
    const applyTranslations = (translations) => {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach((element) => {
            const key = element.getAttribute('data-i18n');
            if (!element.dataset.i18nDefault) {
                element.dataset.i18nDefault = element.textContent.trim();
            }
            const value = translations[key];
            if (value) {
                element.textContent = value;
            } else {
                element.textContent = element.dataset.i18nDefault || element.textContent;
                console.warn(`i18n: Missing key "${key}"`);
            }
        });
    };

    const syncSwitchers = (lang) => {
        document.querySelectorAll('.language-switcher').forEach((select) => {
            if (select.value !== lang) {
                select.value = lang;
            }
        });
    };

    const setLanguage = async (lang) => {
        try {
            const translations = await loadLanguage(lang);
            applyTranslations(translations);
            saveLanguage(lang);
            document.documentElement.lang = lang;
            syncSwitchers(lang);
        } catch (err) {
            console.warn(err.message || err);
        }
    };

    document.addEventListener('DOMContentLoaded', () => {
        const currentLang = getSavedLanguage();
        syncSwitchers(currentLang);
        setLanguage(currentLang);

        document.querySelectorAll('.language-switcher').forEach((select) => {
            select.addEventListener('change', (event) => {
                const nextLang = event.target.value || DEFAULT_LANG;
                setLanguage(nextLang);
            });
        });
    });
})();
