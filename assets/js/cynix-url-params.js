/**
 * Cynix Inc - Universal URL Parameter Customization Script
 * 
 * This script personalizes website templates with prospect information via URL parameters.
 * Fallback: Cynix Inc contact information
 * 
 * Usage: ?business=Joes+Pizza&owner=Joe+Smith&phone=1234567890&email=joe@example.com&location=New+York
 */

(function() {
    'use strict';

    var params = new URLSearchParams(window.location.search);
    var country = (params.get('country') || params.get('region') || '').trim();
    var defaults = getRegionalDefaults(country);

    var businessName = params.get('business') || params.get('name') || defaults.businessName;
    var ownerName = params.get('owner') || defaults.ownerName;
    var phone = params.get('phone') || defaults.phone;
    var email = params.get('email') || defaults.email;
    var address = params.get('address') || params.get('location') || defaults.address;
    var city = params.get('city') || defaults.city;
    var tagline = params.get('tagline') || '';
    var primaryCta = params.get('cta') || params.get('primaryCta') || '';
    var secondaryCta = params.get('secondaryCta') || '';
    var countryLabel = country || defaults.country;
    var businessType = detectBusinessType();

    function getRegionalDefaults(countryValue) {
        var normalized = (countryValue || '').toLowerCase();

        if (normalized.indexOf('sri') !== -1 || normalized === 'lk') {
            return {
                country: 'Sri Lanka',
                city: 'Colombo',
                address: '237, Jampettah Street, Colombo 13',
                phone: '0725582444',
                email: 'hello@cynix.inc',
                ownerName: 'Manisha Gurukanda',
                businessName: 'Cynix Inc'
            };
        }

        if (normalized.indexOf('united states') !== -1 || normalized === 'us' || normalized === 'usa' || normalized.indexOf('america') !== -1) {
            return {
                country: 'United States',
                city: 'New York',
                address: '237, Jampettah Street, New York, NY',
                phone: '(555) 072-5582',
                email: 'hello@cynix.inc',
                ownerName: 'Manisha Gurukanda',
                businessName: 'Cynix Inc'
            };
        }

        if (normalized.indexOf('canada') !== -1 || normalized === 'ca') {
            return {
                country: 'Canada',
                city: 'Toronto',
                address: '237, Jampettah Street, Toronto, ON',
                phone: '(555) 072-5582',
                email: 'hello@cynix.inc',
                ownerName: 'Manisha Gurukanda',
                businessName: 'Cynix Inc'
            };
        }

        if (normalized.indexOf('uk') !== -1 || normalized.indexOf('united kingdom') !== -1 || normalized === 'gb' || normalized === 'england') {
            return {
                country: 'United Kingdom',
                city: 'London',
                address: '237, Jampettah Street, London',
                phone: '+44 20 5558 2444',
                email: 'hello@cynix.inc',
                ownerName: 'Manisha Gurukanda',
                businessName: 'Cynix Inc'
            };
        }

        return {
            country: 'Sri Lanka',
            city: 'Colombo',
            address: '237, Jampettah Street, Colombo 13',
            phone: '0725582444',
            email: 'hello@cynix.inc',
            ownerName: 'Manisha Gurukanda',
            businessName: 'Cynix Inc'
        };
    }

    function detectBusinessType() {
        var path = window.location.pathname.toLowerCase();

        if (path.includes('architecture')) return 'Architecture Firm';
        if (path.includes('construction')) return 'Construction Company';
        if (path.includes('dental')) return 'Dental Clinic';
        if (path.includes('education') || path.includes('preschool') || path.includes('kidschool')) return 'Educational Institution';
        if (path.includes('gym') || path.includes('fitness') || path.includes('yoga')) return 'Fitness Center';
        if (path.includes('restaurant') || path.includes('food')) return 'Restaurant';
        if (path.includes('hair') || path.includes('salon') || path.includes('barber')) return 'Salon';
        if (path.includes('hotel') || path.includes('resort')) return 'Hotel & Resort';
        if (path.includes('interior')) return 'Interior Design Studio';
        if (path.includes('logistics')) return 'Logistics Company';
        if (path.includes('luxury') || path.includes('properties')) return 'Luxury Properties';
        if (path.includes('real-estate') || path.includes('realestate')) return 'Real Estate Agency';
        if (path.includes('spa') || path.includes('wellness')) return 'Spa & Wellness Center';
        if (path.includes('taxi') || path.includes('rideshare')) return 'Transportation Service';
        if (path.includes('travel') || path.includes('tourism')) return 'Travel Agency';

        return 'Professional Services';
    }

    function detectTemplateKey() {
        var path = window.location.pathname.toLowerCase();

        if (path.indexOf('restics') !== -1) return 'restics';
        if (path.indexOf('faren-architecture') !== -1) return 'faren-architecture';
        if (path.indexOf('basic-architecture') !== -1) return 'basic-architecture';
        if (path.indexOf('buildnow') !== -1) return 'buildnow';
        if (path.indexOf('dentexa') !== -1) return 'dentexa';
        if (path.indexOf('kidschool-preschool') !== -1) return 'kidschool-preschool';
        if (path.indexOf('mremot') !== -1) return 'mremot';
        if (path.indexOf('rotal') !== -1) return 'rotal';
        if (path.indexOf('faren-interior') !== -1) return 'faren-interior';
        if (path.indexOf('transhub') !== -1) return 'transhub';
        if (path.indexOf('faren-luxury') !== -1) return 'faren-luxury';
        if (path.indexOf('faren-realestate') !== -1) return 'faren-realestate';
        if (path.indexOf('makeover') !== -1) return 'makeover';
        if (path.indexOf('wellnez') !== -1) return 'wellnez';
        if (path.indexOf('conexi') !== -1) return 'conexi';
        if (path.indexOf('travelor') !== -1) return 'travelor';
        if (path.indexOf('wellfood') !== -1) return 'wellfood';

        return 'default';
    }

    function getTemplateBrandStyle() {
        var templateKey = detectTemplateKey();

        var profiles = {
            'restics': { textColor: '#111111', accentColor: '#EB0029', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '-0.02em', textTransform: 'none' },
            'faren-architecture': { textColor: '#0E0D1A', accentColor: '#F28A2E', fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.01em', textTransform: 'uppercase' },
            'basic-architecture': { textColor: '#1A1A1A', accentColor: '#FF7A00', fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.01em', textTransform: 'uppercase' },
            'buildnow': { textColor: '#111111', accentColor: '#FFB400', fontFamily: 'Rajdhani, Poppins, sans-serif', fontWeight: '700', letterSpacing: '0.02em', textTransform: 'uppercase' },
            'dentexa': { textColor: '#0A2E5C', accentColor: '#1E90FF', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'kidschool-preschool': { textColor: '#0E1B4D', accentColor: '#FF9A2E', fontFamily: 'Nunito, Poppins, sans-serif', fontWeight: '800', letterSpacing: '0', textTransform: 'none' },
            'mremot': { textColor: '#1E1E1E', accentColor: '#C98C5B', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'rotal': { textColor: '#101828', accentColor: '#CFA35C', fontFamily: 'Jost, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.01em', textTransform: 'none' },
            'faren-interior': { textColor: '#131313', accentColor: '#B67A4F', fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.01em', textTransform: 'uppercase' },
            'transhub': { textColor: '#101828', accentColor: '#FF5A1F', fontFamily: 'Inter, Poppins, sans-serif', fontWeight: '700', letterSpacing: '0.01em', textTransform: 'none' },
            'faren-luxury': { textColor: '#111111', accentColor: '#C9A36A', fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.02em', textTransform: 'uppercase' },
            'faren-realestate': { textColor: '#121212', accentColor: '#E58D2C', fontFamily: 'Outfit, Poppins, sans-serif', fontWeight: '600', letterSpacing: '0.01em', textTransform: 'uppercase' },
            'makeover': { textColor: '#2B2B2B', accentColor: '#E57373', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'wellnez': { textColor: '#213547', accentColor: '#6EA48B', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'conexi': { textColor: '#151515', accentColor: '#FFC727', fontFamily: 'Barlow, Poppins, sans-serif', fontWeight: '700', letterSpacing: '0.01em', textTransform: 'uppercase' },
            'travelor': { textColor: '#0F172A', accentColor: '#2A63D4', fontFamily: 'Plus Jakarta Sans, Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'wellfood': { textColor: '#121212', accentColor: '#FF6B35', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '0', textTransform: 'none' },
            'default': { textColor: '#111111', accentColor: '#EB0029', fontFamily: 'Poppins, sans-serif', fontWeight: '700', letterSpacing: '-0.01em', textTransform: 'none' }
        };

        return profiles[templateKey] || profiles.default;
    }

    function getBusinessInitial(name) {
        var cleanName = (name || '').trim();
        return cleanName ? cleanName.charAt(0).toUpperCase() : 'C';
    }

    function ensureHybridLogoStyles() {
        if (document.getElementById('cynix-hybrid-logo-style')) {
            return;
        }

        var brandStyle = getTemplateBrandStyle();

        var style = document.createElement('style');
        style.id = 'cynix-hybrid-logo-style';
        style.textContent = '' +
            '.cynix-hybrid-logo { display: inline-flex; align-items: center; gap: 10px; color: ' + brandStyle.textColor + '; text-decoration: none; line-height: 1.1; }' +
            '.cynix-hybrid-logo-icon { width: 1.85em; height: 1.85em; display: inline-flex; align-items: center; justify-content: center; border-radius: 0.38em; font-size: 0.72em; font-weight: 700; line-height: 1; background: ' + brandStyle.accentColor + '; color: #ffffff; box-shadow: 0 2px 8px rgba(0,0,0,0.12); }' +
            '.cynix-hybrid-logo-text { font-family: ' + brandStyle.fontFamily + '; font-weight: ' + brandStyle.fontWeight + '; font-size: clamp(16px, 1.45vw, 28px); white-space: nowrap; letter-spacing: ' + brandStyle.letterSpacing + '; text-transform: ' + brandStyle.textTransform + '; color: ' + brandStyle.textColor + '; }' +
            'a:hover .cynix-hybrid-logo-text { color: ' + brandStyle.accentColor + '; }' +
            '@media (max-width: 767px) { .cynix-hybrid-logo { gap: 6px; } .cynix-hybrid-logo-text { font-size: clamp(14px, 3.8vw, 20px); } }';

        document.head.appendChild(style);
    }

    function isBrandLogoImage(img) {
        if (!img || !img.getAttribute) {
            return false;
        }

        var src = (img.getAttribute('src') || '').toLowerCase();
        var alt = (img.getAttribute('alt') || '').toLowerCase();
        var cls = (img.className || '').toLowerCase();

        var looksLikeLogo = src.indexOf('logo') !== -1 || alt.indexOf('logo') !== -1 || cls.indexOf('logo') !== -1;
        if (!looksLikeLogo) {
            return false;
        }

        var brandContext = img.closest(
            'header, .header, .main-header, .ul-header, .navbar, .nav-header, .menu-header, .top-header, ' +
            '.logo-container, .site-logo, .navbar-brand, .mobile-menu__logo, .ul-sidebar-header-logo, .search_logo'
        );

        return !!brandContext;
    }

    function convertImageLogosToHybrid() {
        var logoImages = document.querySelectorAll('img');
        var icon = getBusinessInitial(businessName);

        logoImages.forEach(function(img) {
            if (!isBrandLogoImage(img)) {
                return;
            }

            if (!img || !img.parentNode) {
                return;
            }

            var parent = img.parentNode;

            if (parent.classList && parent.classList.contains('cynix-hybrid-logo')) {
                return;
            }

            if (parent.querySelector && parent.querySelector('.logo-text, [data-logo-text], .cynix-hybrid-logo-text')) {
                return;
            }

            var hybrid = document.createElement('span');
            hybrid.className = 'cynix-hybrid-logo';

            var iconEl = document.createElement('span');
            iconEl.className = 'cynix-hybrid-logo-icon';
            iconEl.textContent = icon;

            var textEl = document.createElement('span');
            textEl.className = 'cynix-hybrid-logo-text';
            textEl.setAttribute('data-logo-text', '');
            textEl.textContent = businessName;

            hybrid.appendChild(iconEl);
            hybrid.appendChild(textEl);

            parent.replaceChild(hybrid, img);
        });
    }

    function replaceText(selectors, newText) {
        var elements = document.querySelectorAll(selectors);
        elements.forEach(function(el) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.value = newText;
                el.placeholder = newText;
            } else {
                el.textContent = newText;
            }
        });
    }

    function updateHref(selector, value) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(el) {
            el.href = value;
        });
    }

    function normalizeText(value) {
        return (value || '').replace(/\s+/g, ' ').trim().toLowerCase();
    }

    function rewriteCommonCtas(newText, exactMatches) {
        if (!newText) {
            return;
        }

        var elements = document.querySelectorAll('a, button');
        elements.forEach(function(el) {
            var currentText = normalizeText(el.textContent);

            if (exactMatches.indexOf(currentText) !== -1) {
                el.textContent = newText;
            }
        });
    }

    replaceText(
        '.business-name, .company-name, .site-name, .brand-name, ' +
        '#business-name, #company-name, #site-name, ' +
        '[data-business-name], [data-company-name], ' +
        '.gym-name, .restaurant-name, .hotel-name, .spa-name, .clinic-name, .salon-name, .agency-name, ' +
        '.logo-text, .site-title, .cynix-hybrid-logo-text',
        businessName
    );

    replaceText(
        '.owner-name, .manager-name, .contact-person, ' +
        '#owner-name, #manager-name, ' +
        '[data-owner-name], [data-manager-name], ' +
        '.gym-owner, .restaurant-owner',
        ownerName
    );

    replaceText(
        '.phone, .phone-number, .contact-phone, .tel, ' +
        '#phone, #phone-number, ' +
        '[data-phone], [data-tel], ' +
        '.gym-phone, .restaurant-phone, .hotel-phone, .spa-phone, .clinic-phone',
        phone
    );

    updateHref('a[href^="tel:"]', 'tel:' + phone.replace(/\s/g, ''));

    replaceText(
        '.email, .contact-email, .business-email, ' +
        '#email, #contact-email, ' +
        '[data-email]',
        email
    );

    updateHref('a[href^="mailto:"]', 'mailto:' + email);

    replaceText(
        '.address, .location, .contact-address, .business-address, ' +
        '#address, #location, ' +
        '[data-address], [data-location], ' +
        '.gym-address, .restaurant-address, .hotel-address, .spa-address, .clinic-address',
        address
    );

    replaceText(
        '.city, .business-city, ' +
        '#city, ' +
        '[data-city]',
        city
    );

    replaceText(
        '.country, .business-country, ' +
        '#country, ' +
        '[data-country]',
        countryLabel
    );

    if (tagline) {
        replaceText(
            '.tagline, .slogan, .subtitle, ' +
            '#tagline, #slogan, ' +
            '[data-tagline]',
            tagline
        );
    }

    rewriteCommonCtas(primaryCta, [
        'learn more',
        'read more',
        'book now',
        'book appointment',
        'book an appointment',
        'view more',
        'view services',
        'contact us',
        'get free consultant',
        'explore projects',
        'know more us',
        'get quote',
        'request a quote',
        'make an appointment',
        'check in now',
        'browse rooms',
        'send your message',
        'view my website'
    ]);

    rewriteCommonCtas(secondaryCta, [
        'learn more',
        'read more',
        'view more',
        'explore',
        'details',
        'see more'
    ]);

    document.title = businessName + ' - ' + businessType + ' | ' + countryLabel;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
        var description = businessName + ' - Your trusted ' + businessType.toLowerCase() + ' in ' + city + ', ' + countryLabel + '. ';
        description += 'Contact us at ' + phone + ' or visit us at ' + address + '.';
        metaDesc.setAttribute('content', description);
    }

    var ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', businessName + ' - ' + businessType + ' | ' + countryLabel);
    }

    var ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
        ogDesc.setAttribute('content', businessName + ' - ' + businessType + ' in ' + city + ', ' + countryLabel);
    }

    var ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.setAttribute('content', window.location.href);
    }

    var twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.setAttribute('content', businessName + ' - ' + businessType + ' | ' + countryLabel);
    }

    var twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
        twitterDesc.setAttribute('content', businessName + ' - ' + businessType + ' in ' + city + ', ' + countryLabel);
    }

    ensureHybridLogoStyles();
    convertImageLogosToHybrid();

    // Update logo text for personalization
    function updateLogoText() {
        var logoTextElements = document.querySelectorAll('[data-logo-text], .logo-text, .brand-name-logo, .cynix-hybrid-logo-text');
        logoTextElements.forEach(function(el) {
            el.textContent = businessName;
        });

        var logoIconElements = document.querySelectorAll('.logo-icon, .cynix-hybrid-logo-icon');
        logoIconElements.forEach(function(el) {
            el.textContent = getBusinessInitial(businessName);
            el.classList.add('cynix-hybrid-logo-icon');
        });
    }

    updateLogoText();

    if (console && console.log) {
        console.log('Cynix Inc URL Customization Applied:', {
            business: businessName,
            owner: ownerName,
            phone: phone,
            email: email,
            address: address,
            city: city,
            country: countryLabel,
            type: businessType
        });
    }

})();
