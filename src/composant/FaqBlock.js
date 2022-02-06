import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
;

function Faq() {
    return <section class="o-section--feature o-section--faq v--borderless page-enterprise--section-faq">
        <div class="o-wrap-medium c-accordion ">
            <h2 class="c-accordion__headline">Foire aux questions</h2>
            <div class="c-accordion__items">
                <div class="c-accordion__row">
                    <button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Slack est-il sécurisé&nbsp;?</button>
                    <div class="c-accordion__row__answer"><p>
                        Oui, vous pouvez discuter d’informations confidentielles dans Slack, en toute sécurité. Slack dispose de nombreuses fonctionnalités qui garantissent la sécurité de vos informations, conversations et fichiers. Slack offre un niveau de sécurité professionnel pour tous les secteurs de votre entreprise, en adhérant à plusieurs certifications de conformité, notamment SOC 2, SOC 3, ISO/IEC 27001 et plus encore. Slack est conforme au RGPD et peut être configuré pour l’être également à la HIPAA et à la FINRA. Slack bénéficie de l’autorisation FedRAMP Moderate.</p>
                        <p>Slack propose également des fonctionnalités de sécurité, comme la gestion des clés de chiffrement Slack Enterprise (Slack EKM), qui permettent aux administrateurs d’avoir le contrôle intégral du chiffrement des données. Vous pouvez également intégrer vos propres outils de sécurité à Slack pour être notifié instantanément de toute menace. Découvrez-en plus sur le programme de sécurité détaillé de Slack <a href="security">ici</a>.</p>
                    </div>
                </div>
                <div class="c-accordion__row">
                    <button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Qu’est-ce qu’Enterprise Grid&nbsp;?</button>
                    <div class="c-accordion__row__answer"><p>Slack a conçu Entreprise Grid pour répondre aux besoins des grands groupes. C’est la solution qui vous permet de travailler avec la même agilité qu’une petite entreprise, tout en tirant parti de vos ressources et connaissances partagées.</p>
                        <p>
                            Enterprise&nbsp;Grid comprend toutes les fonctionnalités de sécurité et de gestion que l’on peut attendre d’une solution d’entreprise, tout en offrant une expérience conviviale et intuitive qui favorise l’adoption. De grandes entreprises du monde entier, comme IBM, Condé&nbsp;Nast, Oracle et E-Trade, utilisent déjà Enterprise&nbsp;Grid. Il s’agit du seul produit de collaboration capable de prendre en charge jusqu’à 500&nbsp;000&nbsp;personnes.</p><p>Enterprise Grid est un forfait payant. Comparez les fonctionnalités et tarifs de nos forfais <a href="pricing">ici</a>.</p>
                    </div>
                </div>
                <div class="c-accordion__row">
                    <button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Slack est-il plus sécurisé que les e-mails&nbsp;?</button>
                    <div class="c-accordion__row__answer"><p>Tout à fait&nbsp;! Contrairement aux e-mails, Slack évite le spam ou le phishing, responsables de 90&nbsp;% des failles de sécurité. Votre identifiant Slack ne peut ni être vendu à des annonceurs, ni inscrit sur une liste de diffusion. Vous ne recevrez des messages que de la part des personnes de votre entreprise, ou de vos partenaires de confiance qui utilisent <a href="https://www.youtube.com/watch?v=9cxGhcpGpfE">Slack Connect</a>. Vous pourrez également recevoir des notifications d’applis intégrées à votre espace de travail comme Asana, Google Docs ou Jira.</p>
                        <p>Slack garantit une protection et une confidentialité de vos données adaptées aux entreprises. Le contrôle granulaire permet aux administrateurs de paramétrer les niveaux de sécurité pour chaque utilisateur, afin que chacun ait accès aux données lui étant réservées. Découvrez pourquoi Slack est <a href="why/slack-vs-email">la solution de sécurité permettant de remplacer les e-mails</a> au sein de votre compagnie.</p>
                    </div>
                </div>
                <div class="c-accordion__row">
                    <button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">
                        Qu’est-ce qu’un canal Slack&nbsp;?</button>
                    <div class="c-accordion__row__answer">
                        <p>Dans Slack, les canaux sont au cœur du travail. Un canal permet à une équipe de centraliser et de partager des messages, des outils et des fichiers. Les personnes créent généralement des canaux pour les annonces propres à l’entreprise, pour la gestion de l’assistance clientèle, pour communiquer avec les ressources humaines ou les services informatiques et pour partager leurs centres d’intérêt.</p>
                        <p>Les canaux peuvent être publics (ouverts à tous les salariés de l’entreprise) ou privés (sur invitation uniquement). De plus, les entreprises ayant souscrit à un forfait payant Slack peuvent partager un canal avec des partenaires externes comme des agences, des clients et des fournisseurs grâce à Slack Connect. Découvrez comment les canaux peuvent augmenter votre productivité <a href="features/channels">ici</a>.</p>
                    </div>
                </div>
                <div class="c-accordion__row"><button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Comment les entreprises utilisent-elles Slack&nbsp;?</button>
                    <div class="c-accordion__row__answer"><p>Slack aide les entreprises à rassembler leurs salariés et leurs outils en un seul et même endroit, afin qu’ils restent productifs et en harmonie, où qu’ils soient. Plus de 750&nbsp;000 entreprises utilisent Slack au quotidien pour communiquer, partager des fichiers et passer des appels audio et vidéo. Vous pouvez y intégrer des milliers d’outils, comme Google Drive, Zoom ou Salesforce, ou concevoir des bots ou des applis spécialement pour votre entreprise. En savoir plus sur le fonctionnement de Slack <a href="features">ici</a>.</p>
                    </div>
                </div>
                <div class="c-accordion__row">
                    <button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Qu’est-ce que Slack Connect&nbsp;?</button>
                    <div class="c-accordion__row__answer"><p>Slack Connect est un moyen sécurisé et efficace pour les entreprises de communiquer entre elles. En l’utilisant, vous pouvez déplacer toutes les conversations avec vos partenaires, clients et fournisseurs externes dans Slack, remplaçant ainsi les e-mails et favorisant la collaboration. Les fonctionnalités de sécurité et les standards de conformité de niveau professionnel de Slack, comme la gestion des clés de chiffrement Slack Enterprise (Slack EKM), s’étendent à Slack Connect. Découvrez plus d’informations sur Slack Connect <a href="https://slack.com/connect">ici</a>.</p>
                    </div>
                </div>
                <div class="c-accordion__row"><button class="c-accordion__row__question" aria-expanded="false" data-no-clog="">Quelle sont les différences entre Slack Connect et Enterprise Grid&nbsp;?</button><div class="c-accordion__row__answer"><p>Slack Connect est une fonctionnalité de Slack qui permet aux salariés de plusieurs entreprises (jusqu'à 20 structures différentes) de collaborer dans un environnement de travail unique, sans quitter leur propre espace de travail Slack. D’autre part, Enterprise Grid est un forfait Slack qui vous permet de connecter plusieurs espaces de travail au sein de votre entreprise.</p><p>Slack Connect est compris dans la plupart des forfaits payants. Si votre entreprise a souscrit à Enterprise Grid, vous pourrez également utiliser Slack Connect. Comparer les différents forfaits et fonctionnalités <a href="pricing">ici</a>.</p>
                </div>
                </div>
            </div>
        </div>
    </section>;
}


export default Faq;
