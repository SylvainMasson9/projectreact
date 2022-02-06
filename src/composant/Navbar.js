import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';



function CustomNavbar() {
    return <header role="banner">
        
        <nav class="c-nav c-nav--primary" role="navigation" aria-label="Navigation principale">
            <div class="c-nav__row o-nav--primary o-content-container">
                <div class="c-slacklogo"><a data-clog-click="" data-clog-ui-element="link_home" data-clog-ui-component="inc_header_nav_deux" class="c-slacklogo--white" href="/entreprise" aria-label="Slack" data-qa="logo">
                    <svg height="25" width="100" class="c-slacklogo--white" viewBox="0 0 240 60" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision">
                        <title>Slack</title><g fill="none">
                            <path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z" fill="#ffffff"></path><path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#36c5f0">
                            </path>
                            <path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#2eb67d">
                            </path>
                            <path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ecb22e"></path><path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#e01e5a">
                            </path>
                        </g>
                    </svg>
                    <svg width="100" class="c-slacklogo--color" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 60" shape-rendering="geometricPrecision">
                        <title>Slack</title>
                        <path d="m75.663 47.477 2.929-6.846c3.207 2.375 7.39 3.632 11.574 3.632 3.068 0 5.02-1.187 5.02-3.003-.07-5.03-18.477-1.118-18.617-13.764-.07-6.427 5.648-11.387 13.737-11.387 4.81 0 9.622 1.188 13.038 3.913l-2.737 6.992c-3.143-2.021-7.025-3.43-10.72-3.43-2.51 0-4.184 1.187-4.184 2.725.07 4.96 18.618 2.235 18.827 14.322 0 6.567-5.579 11.178-13.528 11.178-5.856 0-11.225-1.397-15.34-4.332m116.629-9.325a8.498 8.498 0 0 1 -7.405 4.33c-4.698 0-8.506-3.816-8.506-8.523s3.808-8.523 8.506-8.523a8.498 8.498 0 0 1 7.405 4.33l8.143-4.52c-3.05-5.451-8.868-9.137-15.548-9.137-9.839 0-17.815 7.991-17.815 17.85 0 9.858 7.976 17.85 17.815 17.85 6.68 0 12.498-3.686 15.548-9.137zm-82.477 12.958h10.18v-49.86h-10.179zm95.761-49.86v49.86h10.18v-14.938l12.063 14.938h13.012l-15.34-17.746 14.224-16.559h-12.454l-11.505 13.767v-29.322zm-54.218 15.557v4.053c-1.673-2.795-5.787-4.751-10.11-4.751-8.925 0-15.967 7.895-15.967 17.815s7.042 17.885 15.967 17.885c4.323 0 8.437-1.956 10.11-4.751v4.052h10.18v-34.303zm0 21.414c-1.464 2.445-4.532 4.26-7.948 4.26-4.699 0-8.507-3.815-8.507-8.522s3.808-8.523 8.507-8.523c3.416 0 6.484 1.886 7.948 4.4z">

                        </path>
                        <path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#36C5F0">
                        </path>
                        <path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#2EB67D">
                        </path>
                        <path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ECB22E">
                        </path>
                        <g>
                            <path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#E01E5A">
                            </path>
                        </g>
                    </svg>
                </a>
                </div>
                <nav class="c-nav__list">
                    <ul class="c-nav-level--1"><li class="c-nav--primary__listitem has_secondary" tabindex="0" data-qa="nav_features_main" role="button" aria-expanded="false">

                        <span class="v--main">Produit</span>
                        <ul class="c-nav-level--2">
                            <li class="nav-item dropdown">
                                <a href="https://slack.com/intl/fr-fr/features" data-clog-click="" data-clog-ui-element="link_features" data-clog-ui-component="inc_header_nav">Fonctionnalités</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/features/channels" data-clog-click="" data-clog-ui-element="link_slack_channels" data-clog-ui-component="inc_header_nav">Canaux</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/digital-hq" data-clog-click="" data-clog-ui-element="link_digital_hq" data-clog-ui-component="inc_header_nav">QG numérique</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/integrations" data-clog-click="" data-clog-ui-element="link_integrations" data-clog-ui-component="inc_header_nav">Intégrations</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/security" data-clog-click="" data-clog-ui-element="link_security" data-clog-ui-component="inc_header_nav">Sécurité</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/connect" data-clog-click="" data-clog-ui-element="link_shared_channels" data-clog-ui-component="inc_header_nav">Slack Connect</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/solutions" data-clog-click="" data-clog-ui-element="link_solutions_main" data-clog-ui-component="inc_header_nav">Solutions</a>
                            </li>
                            <li>
                                <a href="https://slack.com/intl/fr-fr/customers" data-clog-click="" data-clog-ui-element="link_customers" data-clog-ui-component="inc_header_nav">Témoignages</a></li><li class="nav-download">
                                <a href="https://slack.com/intl/fr-fr/download" data-clog-click="" data-clog-ui-element="link_downloads" data-clog-ui-component="inc_header_nav" class="u-align--center u-flex--row u-justify--left"><svg class="nav-download__icon" width="19" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.75938 15.7354C3.07813 15.7354 2.45 15.5572 1.875 15.2009C1.3 14.8445 0.84375 14.3641 0.50625 13.7597C0.16875 13.1552 0 12.4966 0 11.784C0 11.135 0.140625 10.5273 0.421875 9.96101C0.709375 9.39471 1.1 8.93021 1.59375 8.56753C1.4875 8.19212 1.43438 7.8167 1.43438 7.44129C1.43438 6.72864 1.60313 6.07008 1.94063 5.46561C2.27813 4.86113 2.73438 4.38391 3.30938 4.03395C3.88438 3.67763 4.50938 3.49947 5.18438 3.49947C5.28438 3.49947 5.43438 3.50583 5.63438 3.51855C6.19063 2.57684 6.93125 1.83238 7.85625 1.28517C8.7875 0.737961 9.7875 0.464355 10.8563 0.464355C11.9625 0.464355 12.9875 0.75705 13.9313 1.34244C14.875 1.92146 15.6219 2.70728 16.1719 3.6999C16.7281 4.69251 17.0063 5.77421 17.0063 6.94498C17.5563 7.40948 17.9844 7.97896 18.2906 8.65343C18.5969 9.3279 18.75 10.0437 18.75 10.8009C18.75 11.6917 18.5375 12.5157 18.1125 13.2729C17.6938 14.0301 17.125 14.6282 16.4063 15.0672C15.6938 15.5126 14.9125 15.7354 14.0625 15.7354H3.75938ZM14.0625 14.3037C14.6562 14.3037 15.2031 14.1478 15.7031 13.836C16.2094 13.5179 16.6094 13.0916 16.9031 12.5571C17.1969 12.0162 17.3438 11.4308 17.3438 10.8009C17.3438 10.1646 17.1969 9.57923 16.9031 9.04475C16.6094 8.5039 16.2156 8.07758 15.7219 7.7658C15.6656 7.73399 15.625 7.69899 15.6 7.66081C15.5813 7.62263 15.5719 7.57173 15.5719 7.5081C15.5719 7.45084 15.575 7.3713 15.5813 7.26949C15.5938 7.16769 15.6 7.06588 15.6 6.96407C15.6 6.04781 15.3875 5.20155 14.9625 4.42527C14.5375 3.64899 13.9594 3.03497 13.2281 2.58321C12.5031 2.12508 11.7125 1.89601 10.8563 1.89601C10.2063 1.89601 9.59063 2.02963 9.00938 2.29688C8.42813 2.55775 7.91875 2.9268 7.48125 3.40402C7.04375 3.88124 6.70625 4.42527 6.46875 5.03611C6.43125 5.13792 6.375 5.18882 6.3 5.18882C6.25625 5.18882 6.2125 5.17609 6.16875 5.15064C5.8625 5.0043 5.53438 4.93112 5.18438 4.93112C4.75938 4.93112 4.36562 5.04247 4.00313 5.26517C3.64687 5.48788 3.3625 5.7933 3.15 6.18143C2.94375 6.56321 2.84063 6.98316 2.84063 7.44129C2.84063 7.74671 2.8875 8.03941 2.98125 8.31937C3.08125 8.59298 3.21875 8.84113 3.39375 9.06383C3.4375 9.11474 3.45938 9.16246 3.45938 9.207C3.45938 9.26427 3.40625 9.30244 3.3 9.32153C2.94375 9.39152 2.62188 9.54423 2.33438 9.77966C2.04688 10.0151 1.81875 10.3078 1.65 10.6577C1.4875 11.0077 1.40625 11.3831 1.40625 11.784C1.40625 12.2421 1.50938 12.6652 1.71563 13.0534C1.92813 13.4352 2.21563 13.7406 2.57812 13.9696C2.94062 14.1923 3.33438 14.3037 3.75938 14.3037H14.0625ZM9.60938 12.3948C9.42188 12.3948 9.25625 12.3216 9.1125 12.1753L6.3 9.32153C6.1625 9.18155 6.09375 9.01611 6.09375 8.82523C6.09375 8.62798 6.1625 8.45936 6.3 8.31937C6.44375 8.17303 6.6125 8.09985 6.80625 8.09985C6.99375 8.09985 7.15625 8.16984 7.29375 8.30983L8.90625 9.94192V5.95237C8.90625 5.74876 8.97188 5.58014 9.10313 5.44652C9.24063 5.30653 9.40938 5.23654 9.60938 5.23654C9.79063 5.23654 9.95625 5.30653 10.1063 5.44652C10.2438 5.57378 10.3125 5.74239 10.3125 5.95237V9.94192L11.9344 8.30983C12.0719 8.16984 12.2344 8.09985 12.4219 8.09985C12.5969 8.09985 12.7688 8.17939 12.9375 8.33846C13.0625 8.45936 13.125 8.61843 13.125 8.81568C13.125 9.01929 13.0563 9.18791 12.9188 9.32153L10.1063 12.1753C9.95 12.3216 9.78438 12.3948 9.60938 12.3948Z" fill="#1264A3">
                                    </path>
                                </svg>
                                    Télécharger Slack</a>
                            </li>
                        </ul>
                    </li>
                        <li class="c-nav--primary__listitem">
                            <a href="/entreprise" data-clog-click="" data-clog-ui-element="link_enterprise" data-clog-ui-component="inc_header_nav">Pour les entreprises</a></li><li class="c-nav--primary__listitem">
                            <a href="https://slack.com/intl/fr-fr/resources" data-clog-click="" data-clog-ui-element="link_resources_library" data-clog-ui-component="inc_header_nav">Ressources</a></li><li class="c-nav--primary__listitem">
                            <a href="https://slack.com/intl/fr-fr/pricing" data-clog-click="" data-clog-ui-element="link_pricing" data-clog-ui-component="inc_header_nav">Tarifs</a></li></ul><div class="c-nav--signed-out"><a class="c-nav--signed-out__link" data-clog-click="" data-clog-ui-element="link_sign_in_nav" data-clog-ui-component="inc_header_nav_deux" href="https://slack.com/signin" data-qa="link_sign_in_nav">Connexion</a><a class="c-button v--left v--secondary search-hide-element c-nav--signed-out__contact_sales v--prospect" data-clog-click="" data-clog-ui-component="inc_header_nav_deux" data-clog-ui-element="link_contact_sales" data-qa="link_contact_sales" href="/contact" data-optly-9ee94b1a-43d0-4c81-aa87-2cad28153990="">Contacter notre équipe</a><a data-clog-click="" data-clog-ui-element="link_get_started" data-clog-ui-component="inc_header_nav_deux" data-gtm-click="SignUp" href="https://slack.com/get-started" class="c-button v--left v--primary" data-qa="cta_get_started">Essai gratuit</a></div></nav><button id="nav_menu_btn" aria-label="Menu" class="nav_menu_btn c-nav__icon v--menu u-border-radius--none" data-clog-click="" data-clog-ui-element="btn_menu" data-clog-ui-component="inc_header_nav_deux"><svg width="18" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.52 2C1.22667 2 0.983333 1.90667 0.79 1.72C0.596667 1.52667 0.5 1.28667 0.5 1C0.5 0.713334 0.596667 0.476667 0.79 0.290001C0.983333 0.0966671 1.22667 0 1.52 0H16.48C16.7733 0 17.0167 0.0966671 17.21 0.290001C17.4033 0.476667 17.5 0.713334 17.5 1C17.5 1.28667 17.4033 1.52667 17.21 1.72C17.0167 1.90667 16.7733 2 16.48 2H1.52ZM1.52 7C1.22667 7 0.983333 6.90667 0.79 6.72C0.596667 6.52667 0.5 6.28667 0.5 6C0.5 5.71333 0.596667 5.47667 0.79 5.29C0.983333 5.09667 1.22667 5 1.52 5H16.48C16.7733 5 17.0167 5.09667 17.21 5.29C17.4033 5.47667 17.5 5.71333 17.5 6C17.5 6.28667 17.4033 6.52667 17.21 6.72C17.0167 6.90667 16.7733 7 16.48 7H1.52ZM1.52 12C1.22667 12 0.983333 11.9067 0.79 11.72C0.596667 11.5267 0.5 11.2867 0.5 11C0.5 10.7133 0.596667 10.4767 0.79 10.29C0.983333 10.0967 1.22667 10 1.52 10H16.48C16.7733 10 17.0167 10.0967 17.21 10.29C17.4033 10.4767 17.5 10.7133 17.5 11C17.5 11.2867 17.4033 11.5267 17.21 11.72C17.0167 11.9067 16.7733 12 16.48 12H1.52Z" fill="#1D1C1D"></path>
                            </svg>
                </button>
            </div>
        </nav>
    </header>
        ;

}

export default CustomNavbar;
