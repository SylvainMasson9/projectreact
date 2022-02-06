import React from 'react';
import { useState } from "react";
import ReactDOM from 'react-dom';


function FormBlock() {
    const [Fname,  setFname] = useState("");
    const [name,  setName] = useState("");
    const [email,  setEmail] = useState("");
    const [entreprise,  setEtp] = useState("");
    const [tel,  setTel] = useState("");
    const [question,  setQuestion] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        alert( `Données du folmulaire : Prenom : ${Fname} nom : ${name} email : ${email}  entreprise : ${entreprise} Telephone :  ${tel} Question : ${question}`
        
                ); 
    }
    return <div class="section-contact-sales-form__form u-overflow--visible o-overflow-container">


        <div class="c-form__wrap--inline u-padding--flush u-margin--centered">
            <div class="c-shadowbox">
                <form class="c-form v--vertical--spaced" name="contact_sales_form" id="contact_sales_form" action="/intl/fr-fr/contact-sales?geocode=fr-fr" method="post" novalidate="" onSubmit={handleSubmit}>
                    <div class="o-two-columns v--even">
                        <fieldset class="u-margin-top--flush" id="">
                            <label class="c-form__label" for="first_name">Prénom<span class="is-error"> *</span>
                            </label>
                            <input autocomplete="given-name" class="c-form__input" data-value-missing="Veuillez indiquer votre prénom." id="first_name" maxlength="80" name="first_name" placeholder="Votre prénom" required="" type="text" value={Fname}
                                onChange={(e) => setFname(e.target.value)}></input>
                            <div class="c-form__inline-error u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                        <fieldset class="u-margin-top--flush" id="">
                            <label class="c-form__label" for="last_name">Nom de famille<span class="is-error"> *</span>
                            </label>
                            <input autocomplete="family-name" class="c-form__input" data-value-missing="Veuillez indiquer votre nom de famille." id="last_name" maxlength="80" name="last_name" placeholder="Votre nom de famille" required="" type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
                            <div class="c-form__inline-error u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                    </div>
                    <fieldset class="u-margin-top--flush">
                        <label class="c-form__label" for="email">Adresse e-mail professionnelle<span class="is-error"> *</span>
                        </label>
                        <input autocomplete="email" class="c-form__input" data-value-invalid="Oups&nbsp;! Il semble que cette adresse e-mail ne soit pas valide." data-value-missing="Veuillez fournir une adresse e-mail." id="email" name="email" pattern="^([\w.-]+)@(\[(\d{1,3}\.){3}|(([a-zA-Z\d-]+\.)+))([a-zA-Z]{2,15}|\d{1,3})(\]?)$" placeholder="exemple@abc.com" required="" type="email"  value={email} onChange={(e) => setEmail(e.target.value)}></input>
                        <div class="c-form__inline-error u-margin-bottom--small hide" aria-live="polite">
                        </div>
                    </fieldset>
                    <fieldset class="u-margin-top--flush " id="">
                        <label class="c-form__label" for="country_option">Pays<span class="is-error"> *</span>
                        </label>
                        <select class="c-form__select" required="" id="country_option" name="country_option" data-value-missing="Veuillez sélectionner un pays." >
                            <option selected="" data-country-code="FR" value="France">France</option>
                            <option data-country-code="AF" value="Afghanistan">Afghanistan</option>
                            <option data-country-code="ZA" value="South Africa">Afrique du Sud</option>
                            <option data-country-code="AL" value="Albania">Albanie</option>
                            <option data-country-code="DZ" value="Algeria">Algérie</option>
                        </select>
                    </fieldset>
                    <div class="o-two-columns v--even">
                        <fieldset class="u-margin-top--flush">
                            <label class="c-form__label" for="company">Entreprise<span class="is-error"> *</span>
                            </label>
                            <input autocomplete="family-name" class="c-form__input" data-value-missing="Veuillez indiquer votre nom de famille." id="last_name" maxlength="80" name="last_name" placeholder="Fiction S.A." required="" type="text" value={entreprise} onChange={(e) => setEtp(e.target.value)}></input>

                            <div class="c-form__inline-error u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                        <fieldset class="u-margin-top--flush">
                            <label class="c-form__label" for="company_size_option">Taille de l’entreprise<span class="is-error"> *</span>
                            </label>
                            <select class="c-form__select" data-value-missing="Veuillez sélectionner la taille de l’entreprise." id="company_size_option" name="company_size_option" required="">
                                <option disabled="" selected="" value="">Veuillez sélectionner une option</option>
                                <option value="1-100">1-100</option>
                                <option value="101-200">101-200</option>
                                <option value="201-400">201-400</option>
                                <option value="401-1,500">401-1&nbsp;500</option>
                                <option value="1,501-10,000">1&nbsp;501-10&nbsp;000</option>
                                <option value="10,001+">+ de 10&nbsp;001</option>
                            </select>
                            <div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                    </div>
                    <div class="o-two-columns v--even">
                        <fieldset class="u-margin-top--flush">
                            <label class="c-form__label" for="department_option">Service<span class="is-error"> *</span>
                            </label>
                            <select class="c-form__select" data-value-missing="Veuillez sélectionner une option pour le service." id="department_option" name="department_option" required="">
                                <option disabled="" selected="" value="">Veuillez sélectionner une option</option>
                                <option value="Engineering">Développement/ingénierie</option>
                                <option value="IT">Informatique</option>
                                <option value="Sales">Ventes</option><option value="Customer Service">Assistance et succès</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Finance">Finance/juridique/opérations</option>
                                <option value="Human Resources">RH/personnes</option>
                                <option value="Operations">Stratégie/développement de l’entreprise</option>
                            </select>
                            <div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                        <fieldset class="u-margin-top--flush">
                            <label class="c-form__label" for="role_option">Rôle<span class="is-error"> *</span>
                            </label>
                            <select class="c-form__select" data-value-missing="Veuillez sélectionner une option pour le rôle." id="role_option" name="role_option" required="">
                                <option disabled="" selected="" value="">Veuillez sélectionner une option</option>
                                <option value="CXO">Cadre dirigeant</option><option value="VP">Vice-président</option>
                                <option value="Director">Directeur</option><option value="Manager">Responsable</option>
                                <option value="Contributor">Contributeur</option>
                            </select>
                            <div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                    </div>
                    <div class="o-two-columns v--even">
                        <fieldset class="u-margin-top--flush">
                            <label class="c-form__label" for="phone">Numéro de téléphone<span class="is-error"> *</span>
                            </label>
                            <input autocomplete="tel" class="c-form__input" data-value-invalid="Veuillez inclure un numéro de téléphone valide." data-value-missing="Veuillez inclure un numéro de téléphone." id="phone" name="phone" pattern="(?=.*[0-9])[- +()\.0-9]{4,}$" placeholder="55-55-55-55-55" required="" type="tel" value={tel} onChange={(e) => setTel(e.target.value)}></input>
                            <div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite"></div></fieldset><fieldset class="u-margin-top--flush"><label class="c-form__label" for="sales_team_help_option">Comment notre équipe de vente peut-elle vous aider&nbsp;?<span class="is-error"> *</span>
                            </label>
                            <select class="c-form__select" data-value-missing="Veuillez sélectionner une option d’aide pour l’équipe commerciale." id="sales_team_help_option" name="sales_team_help_option" required="">
                                <option disabled="" selected="" value="">Veuillez sélectionner une option</option>
                                <option value="I want to evaluate Slack for my organization">Je souhaite déterminer si Slack est la bonne solution pour mon organisation</option>
                                <option value="I want to understand which Slack plan is right for me">Je souhaite déterminer quel forfait Slack me convient le mieux</option>
                                <option value="I want to buy licenses or upgrade">Je souhaite acheter des licences ou passer à un forfait supérieur</option>
                                <option value="I have a product question">J’ai une question concernant le produit</option>
                                <option value="I need a compliance plan">J’ai besoin d’un plan de conformité</option></select><div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </fieldset>
                    </div>
                    <fieldset class="u-margin-top--flush">
                        <label class="c-form__label" for="comments">Des questions&nbsp;?<span class="u-weight-normal"> (facultatif)</span>
                            <span class="counter" id="comments_counter">
                                <span class="count_remaining"></span>
                            </span>
                        </label>
                        <textarea autocomplete="🙅🏽" class="c-form__input" id="comments" maxlength="500" name="comments" placeholder="Avez-vous des besoins particuliers concernant Slack&nbsp;?" value={question} onChange={(e) => setQuestion(e.target.value)}>

                        </textarea>
                    </fieldset>
                    <div class="c-form__consent-fields__group-B active">
                        <div class="c-form__container c-form__consent__privacy-notice-language">
                            <label class="c-form__label u-weight-normal u-text--muted">En cliquant sur «&nbsp;Envoyer&nbsp;», je confirme avoir lu la <a data-clog-click="" data-clog-element="link_privacy_policy" href="https://slack.com/intl/fr-fr/privacy-policy" rel="noopener">Règles de confidentialité</a> de Slack.</label>
                        </div>
                        <div class="c-form__container u-margin-top--small u-margin-bottom--small c-form__checkbox__check c-form__consent__marketing-notice-language">
                            <input class="c-form__checkbox c-form__consent__marketing-notice-checkbox" name="marketing_notice_checkbox_inputgroup_b" id="marketing_notice_checkbox_inputgroup_b" type="checkbox" value="unchecked"></input>
                            <label class="c-form__label u-weight-normal u-text--muted" for="marketing_notice_checkbox_inputgroup_b">Oui, j’accepte de recevoir des communications marketing à propos de Slack. Si je change d’avis, je peux me désinscrire à tout moment.
                            </label>
                            <div class="c-form__inline-error u-margin-top--small u-margin-bottom--small hide" aria-live="polite">
                            </div>
                        </div>
                    </div>
                    <div class="c-form__container">
                        <label class="c-form__label u-weight-normal is-error">Les champs marqués d’un astérisque (*) sont obligatoires.</label>
                    </div>


                    <div class="c-form__container">
                        <button class="c-button c-form__action v--primary u-margin-top--medium u-margin-bottom--flush" data-clog-click="" data-clog-params="click_target=contact_sales_form_submit" data-clog-ui-element="form_submit" id="contact_sales_form_submit" type="submit">Envoyer</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

        ;




}

export default FormBlock;
