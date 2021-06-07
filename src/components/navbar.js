import * as React from 'react'
import Cookies from 'js-cookie'
import { Link } from 'gatsby'
import styled from 'styled-components'
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { 
    nav,
    navItems,
    logoDiv,
    logo,
    menu,
    navIcon2,
    language
} from '../styles/navbar.module.scss'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'pl'],
    fallbackLng: 'en',
    detection: {
        order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
        caches: ['cookie'],
    },
    backend: {
        loadPath: '/static/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false },
  });

const MenuDiv = styled.div`
    opacity: ${({ showNav }) => showNav ? 1 : 0 };
    display: ${({ dispNav }) => dispNav ? 'block' : 'none' };
`;

const Navbar = () => {
    const { t } = useTranslation();
    const[show, showMenu] = React.useState(false);
    const[disp, dispMenu] = React.useState(false);

    function toggleMenu()
    {
        if(show !== true)
        {
            dispMenu(!disp);
            setTimeout(function() {
                showMenu(!show);
            }, 1);
        }
        else
        {
            showMenu(!show);
            setTimeout(function() {
                dispMenu(!disp);
            }, 500);
        }
    }

    function changeLang(e)
    {
        i18n.changeLanguage(e.target.value);
    }

    return (
        <nav className={ nav }>
            <section className={ navItems }>
                <Link to="/#hero" className={ logoDiv }>
                    <svg className={ logo } width="150" height="43" version="1.1" viewBox="-593 391.1 150 43" xmlns="http://www.w3.org/2000/svg"><g transform="matrix(1.6292 0 0 1.6433 373.7 -250.03)"><g aria-label="Baron"><path d="m-527.73 390.61c-2.1823 0-3.7387 0.32015-4.6758 1.1641-0.86569 0.76262-1.3184 1.8153-1.3184 3.0254v8.0625c0 1.2101 0.44996 2.2704 1.3125 3.0508a0.50005 0.50005 0 0 0 6e-3 4e-3c0.93801 0.82634 2.491 1.1367 4.6758 1.1367 2.1848 0 3.7458-0.31246 4.6992-1.1328a0.50005 0.50005 0 0 0 6e-3 -4e-3c0.88151-0.77902 1.3438-1.8418 1.3438-3.0547v-8.0625c0-1.2129-0.46501-2.2681-1.3496-3.0293-0.95254-0.83802-2.5169-1.1602-4.6992-1.1602zm15.197 0.30078c-0.19801 0-0.38254 0.0789-0.51953 0.18164-0.20102 0.15078-0.30859 0.42593-0.30859 0.64648v14.459a0.50005 0.50005 0 0 0 0.5 0.5h0.27344a0.50005 0.50005 0 0 0 0.5-0.5v-13.309l9.5234 10.684v2.625a0.50005 0.50005 0 0 0 0.5 0.5h0.27344a0.50005 0.50005 0 0 0 0.5-0.5v-14.76a0.50005 0.50005 0 0 0-0.5-0.5h-0.27344a0.50005 0.50005 0 0 0-0.5 0.5v10.219l-9.1855-10.332a0.50005 0.50005 0 0 0-0.0195-0.0215c-0.10287-0.10284-0.1869-0.18187-0.29493-0.25391-0.1402-0.0935-0.31254-0.13867-0.46875-0.13867zm-80.25 0.0273a0.50005 0.50005 0 0 0-0.5 0.5v14.76a0.50005 0.50005 0 0 0 0.5 0.5h7.3516c0.79314 0 1.4511-0.0638 1.9902-0.20899a0.50005 0.50005 0 0 0 0.0156-4e-3c0.52105-0.16032 0.94762-0.37984 1.2656-0.69531 0.31329-0.29375 0.54224-0.65989 0.65625-1.0703a0.50005 0.50005 0 0 0 2e-3 -8e-3c0.10321-0.3922 0.15235-0.80923 0.15235-1.248v-1.748c0-0.48268-0.0496-0.93391-0.14844-1.3555-0.0889-0.46248-0.29664-0.8835-0.61133-1.2227-0.32665-0.37013-0.77666-0.62988-1.3086-0.79492-0.13601-0.0467-0.34256-0.0324-0.49219-0.0664 0.15198-0.15589 0.33146-0.29317 0.41406-0.49609 0.22783-0.52069 0.3418-1.0903 0.3418-1.6953v-1.75c0-0.43882-0.0491-0.85585-0.15234-1.248-0.11192-0.42529-0.3357-0.80813-0.64649-1.1211-0.32863-0.34944-0.77146-0.59298-1.2969-0.75586-0.5486-0.18847-1.2045-0.27149-1.9844-0.27149zm23.479 0c-0.7128 0-1.3449 0.22064-1.7148 0.72266-0.28783 0.39061-0.53161 0.85548-0.74414 1.3965a0.50005 0.50005 0 0 0 0 2e-3l-1.75 4.4824a0.50005 0.50005 0 0 0-6e-3 0.0117c-0.15432 0.42436-0.27925 0.86656-0.375 1.3262a0.50005 0.50005 0 0 0-2e-3 0.0156c-0.0788 0.45291-0.11718 0.94642-0.11718 1.4805v5.8223a0.50005 0.50005 0 0 0 0.5 0.5h0.27343a0.50005 0.50005 0 0 0 0.5-0.5v-4.2012h9.6602v4.2012a0.50005 0.50005 0 0 0 0.5 0.5h0.27344a0.50005 0.50005 0 0 0 0.5-0.5v-5.8223c0-0.53932-0.0487-1.0382-0.14844-1.498-0.0777-0.45823-0.19161-0.90046-0.3457-1.3242a0.50005 0.50005 0 0 0-0.01-0.0254l-1.8848-4.4512-2e-3 -2e-3c-0.22843-0.55158-0.4804-1.0181-0.76367-1.4043-0.34825-0.50483-0.96879-0.73243-1.6641-0.73243zm16.209 0a0.50005 0.50005 0 0 0-0.5 0.5v14.76a0.50005 0.50005 0 0 0 0.5 0.5h0.27344a0.50005 0.50005 0 0 0 0.5-0.5v-5.8418h7.2344c0.96547 0 1.5939 0.21453 1.957 0.55078a0.50005 0.50005 0 0 0 8e-3 6e-3c0.36612 0.32544 0.57031 0.82015 0.57031 1.6211v3.6641a0.50005 0.50005 0 0 0 0.5 0.5h0.27344a0.50005 0.50005 0 0 0 0.5-0.5v-3.6641c0-1.0428-0.32082-1.9289-0.98437-2.5274-0.4468-0.4149-1.066-0.6269-1.7539-0.7539 0.14743-0.17283 0.31584-0.33116 0.4043-0.54493a0.50005 0.50005 0 0 0 2e-3 -6e-3c0.25127-0.62819 0.36328-1.38 0.36328-2.2617v-1.8867c0-0.98564-0.29431-1.8614-0.88477-2.5391-0.62048-0.73126-1.5793-1.0762-2.7305-1.0762zm25.365 0.94532c1.9704 0 3.2527 0.34304 3.8301 0.83593a0.50005 0.50005 0 0 0 6e-3 4e-3c0.64315 0.53336 0.93945 1.1779 0.93945 2.0762v8.0625c0 0.89723-0.2981 1.5537-0.94336 2.1055-0.5778 0.47705-1.8633 0.8125-3.832 0.8125-1.9687 0-3.2424-0.33781-3.7988-0.80859-0.62778-0.55026-0.92188-1.2092-0.92187-2.1094v-8.0625c-1e-5 -0.90127 0.2924-1.5484 0.91796-2.0801a0.50005 0.50005 0 0 0 6e-3 -4e-3c0.55615-0.48663 1.8265-0.83203 3.7969-0.83203zm-64.279 0.32812h4.7754c1.3048 0 2.0412 0.27596 2.291 0.58008 0.34489 0.41987 0.51562 0.91002 0.51562 1.543v1.75c0 0.29092-0.0318 0.57036-0.0957 0.84179a0.50005 0.50005 0 0 0-6e-3 0.0234c-0.035 0.18656-0.11996 0.35042-0.29883 0.5293-0.13824 0.13824-0.39768 0.29098-0.7793 0.41992-0.36421 0.10532-0.91173 0.17188-1.627 0.17188h-4.7754zm22.705 0h2.6797c0.40295 0 0.55603 0.0899 0.67578 0.26953a0.50005 0.50005 0 0 0 8e-3 0.0117c0.19145 0.27122 0.38611 0.63085 0.57617 1.0801l1.877 4.4297c0.11698 0.33498 0.21091 0.6986 0.27929 1.0918a0.50005 0.50005 0 0 0 4e-3 0.0195c0.0825 0.37937 0.125 0.80062 0.125 1.2617v0.34766h-9.6602v-0.34766c0-0.46445 0.0351-0.88877 0.10157-1.2734 0.0865-0.39564 0.19004-0.76264 0.30859-1.1016 1.9e-4 -5.5e-4 -2e-4 -1e-3 0-2e-3l1.7402-4.4629 2e-3 -4e-3c0.17039-0.42513 0.35333-0.77041 0.54296-1.0391a0.50005 0.50005 0 0 0 8e-3 -0.0117c0.11188-0.16781 0.28586-0.26953 0.73242-0.26953zm16.982 0h5.459c0.87514 0 1.4106 0.22118 1.752 0.61719a0.50005 0.50005 0 0 0 6e-3 8e-3c0.38596 0.43049 0.58398 0.97289 0.58398 1.7168v1.9141c0 0.93851-0.1838 1.6058-0.48437 2.0352-0.2504 0.35771-0.80839 0.60742-1.8574 0.60742h-5.459zm-39.688 7.1328h6.6055c1.2999 0 2.0095 0.28732 2.25 0.61524a0.50005 0.50005 0 0 0 6e-3 0.01c0.34558 0.45075 0.52539 1.0114 0.52539 1.7461v1.748c0 0.64912-0.16773 1.1048-0.49023 1.459-2.5e-4 2.6e-4 -2e-3 -2.6e-4 -2e-3 0-0.23196 0.24087-1.0046 0.50195-2.3164 0.50195h-6.5781z"/></g></g><g transform="matrix(1.3819 0 0 1.2879 240.13 -105.23)"><g aria-label="Developer"><path d="m-540.34 409.82c-0.98651 0-1.7306 0.12444-2.2383 0.58007-7e-4 6.2e-4 -1e-3 1e-3 -2e-3 2e-3 -0.43532 0.38461-0.67188 0.94146-0.67188 1.5371v3.5391c0 0.5966 0.23416 1.1563 0.66797 1.5488a0.50005 0.50005 0 0 0 6e-3 4e-3c0.50914 0.44853 1.2498 0.56836 2.2383 0.56836s1.7319-0.12201 2.2461-0.56445a0.50005 0.50005 0 0 0 6e-3 -4e-3c0.44268-0.39121 0.68359-0.95354 0.68359-1.5527v-3.5391c0-0.59824-0.24339-1.1578-0.6875-1.541-0.51288-0.45103-1.2603-0.57812-2.248-0.57812zm-44.018 0.14257a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h2.9043c0.43998 0 0.81534-0.0397 1.1445-0.14258a0.50005 0.50005 0 0 0 0.0137-4e-3c0.31137-0.10703 0.58182-0.25908 0.78907-0.47852 0.1975-0.20912 0.3314-0.4756 0.38867-0.75781 0.0558-0.23801 0.084-0.4886 0.084-0.75v-3.1797c0-0.26551-0.0283-0.52038-0.0859-0.76172-0.065-0.28149-0.20045-0.54266-0.39649-0.75195-0.20706-0.22868-0.47976-0.38551-0.78906-0.49219-0.32791-0.11576-0.7053-0.16211-1.1484-0.16211zm8.9531 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h4.043a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-3.4238v-2.1094h2.4531a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-2.4531v-2.0117h3.4238a0.50005 0.50005 0 0 0 0.5-0.5v-0.1211a0.50005 0.50005 0 0 0-0.5-0.5zm7.7148 0a0.50005 0.50005 0 0 0-0.5 0.5v2.5918c0 0.24351 0.0143 0.47342 0.041 0.6875a0.50005 0.50005 0 0 0 4e-3 0.0234c0.0384 0.22057 0.10064 0.43504 0.18554 0.64258a0.50005 0.50005 0 0 0 0 2e-3l0.79102 1.9199c0.10946 0.26455 0.23812 0.4972 0.39453 0.69531 0.22408 0.28383 0.59448 0.41797 0.94531 0.41797h1.0547c0.35083 0 0.72123-0.13414 0.94531-0.41797 0.15641-0.19811 0.28507-0.43076 0.39453-0.69531l0.79102-1.9199a0.50005 0.50005 0 0 0 0-2e-3c0.0867-0.21196 0.14776-0.43302 0.17773-0.66016 0.0356-0.21822 0.0527-0.44915 0.0527-0.69336v-2.5918a0.50005 0.50005 0 0 0-0.5-0.5h-0.1211a0.50005 0.50005 0 0 0-0.5 0.5v2.5918c0 0.18417-0.0142 0.35873-0.041 0.51953-0.0261 0.14835-0.0639 0.28405-0.11328 0.40821l-0.79102 1.918a0.50005 0.50005 0 0 0-4e-3 0.0117c-0.067 0.17425-0.14245 0.31113-0.21679 0.41406a0.50005 0.50005 0 0 0-2e-3 4e-3c9e-3 -0.0133 0.0489-6e-3 -0.0723-6e-3h-1.0547c-0.11386 0-0.0927-9e-3 -0.0898-0.01-0.0659-0.10285-0.13381-0.23229-0.19922-0.40235a0.50005 0.50005 0 0 0-4e-3 -0.0117l-0.79101-1.9141-2e-3 -4e-3v-2e-3c-0.049-0.12369-0.0873-0.25855-0.11328-0.40625-0.0268-0.1608-0.041-0.33536-0.041-0.51953v-2.5918a0.50005 0.50005 0 0 0-0.5-0.5zm8.8926 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h4.0449a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-3.4238v-2.1094h2.4512a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-2.4512v-2.0117h3.4238a0.50005 0.50005 0 0 0 0.5-0.5v-0.1211a0.50005 0.50005 0 0 0-0.5-0.5zm7.8477 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h4.416a0.50005 0.50005 0 0 0 0.5-0.5v-2.4844a0.50005 0.50005 0 0 0-0.5-0.5h-0.11914a0.50005 0.50005 0 0 0-0.5 0.5v1.8652h-3.1758v-5.8613a0.50005 0.50005 0 0 0-0.5-0.5zm17.221 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h0.11914a0.50005 0.50005 0 0 0 0.5-0.5v-1.8633h1.9727c0.41242 0 0.7648-0.0417 1.0742-0.14844 0.29352-0.0984 0.55307-0.24169 0.7539-0.45507a0.50005 0.50005 0 0 0 0.01-0.01c0.1809-0.20352 0.30889-0.45041 0.375-0.71484a0.50005 0.50005 0 0 0 2e-3 -4e-3c0.0582-0.24241 0.0859-0.49875 0.0859-0.76562v-0.88672c0-0.26687-0.0278-0.52322-0.0859-0.76563-0.0651-0.27122-0.19321-0.52375-0.37695-0.73047-0.19869-0.22353-0.46268-0.37271-0.75781-0.47265-0.31279-0.11703-0.6681-0.16407-1.0801-0.16407zm8.1484 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h4.043a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-3.4238v-2.1094h2.4531a0.50005 0.50005 0 0 0 0.5-0.5v-0.11914a0.50005 0.50005 0 0 0-0.5-0.5h-2.4531v-2.0117h3.4238a0.50005 0.50005 0 0 0 0.5-0.5v-0.1211a0.50005 0.50005 0 0 0-0.5-0.5zm7.8359 0a0.50005 0.50005 0 0 0-0.5 0.5v6.4805a0.50005 0.50005 0 0 0 0.5 0.5h0.11914a0.50005 0.50005 0 0 0 0.5-0.5v-2.2832h2.8965c0.38376 0 0.58128 0.0858 0.66797 0.16601a0.50005 0.50005 0 0 0 8e-3 6e-3c0.0892 0.0793 0.15625 0.20393 0.15625 0.50391v1.6074a0.50005 0.50005 0 0 0 0.5 0.5h0.11914a0.50005 0.50005 0 0 0 0.5-0.5v-1.6074c0-0.51067-0.1652-0.99467-0.52344-1.3184-0.1459-0.13488-0.32788-0.21766-0.51367-0.29101 0.1206-0.31451 0.17383-0.66623 0.17383-1.0664v-0.82813c0-0.48471-0.15062-0.946-0.45508-1.2969-0.33363-0.39321-0.85293-0.57227-1.4121-0.57227zm-22.596 0.97657c0.83548 0 1.3416 0.16555 1.5 0.30078a0.50005 0.50005 0 0 0 6e-3 4e-3c0.22346 0.18531 0.3086 0.36803 0.3086 0.69532v3.5391c0 0.32545-0.0889 0.5168-0.3125 0.70898-0.15782 0.12957-0.66645 0.29102-1.502 0.29102-0.83548 0-1.3378-0.16388-1.4844-0.28711-0.21728-0.19143-0.3086-0.38612-0.3086-0.71289v-3.5391c0-0.32861 0.0878-0.51483 0.30469-0.69922a0.50005 0.50005 0 0 0 6e-3 -4e-3c0.14728-0.12887 0.64695-0.29687 1.4824-0.29687zm-43.396 0.14453h2.2832c0.3413 0 0.59779 0.0393 0.75 0.0918a0.50005 0.50005 0 0 0 4e-3 2e-3c0.18469 0.0616 0.29348 0.13384 0.34765 0.1914 0.0685 0.0727 0.11306 0.1534 0.14258 0.27149 0.0375 0.14988 0.0566 0.31167 0.0566 0.49023v3.1797c0 0.17856-0.0194 0.34308-0.0566 0.49219a0.50005 0.50005 0 0 0-4e-3 0.0156c-0.0211 0.0972-0.0596 0.16472-0.12305 0.23438-0.053 0.0518-0.16332 0.12299-0.34961 0.18554-1e-3 4.2e-4 -7e-4 2e-3 -2e-3 2e-3 -0.15983 0.0485-0.41854 0.084-0.76563 0.084h-2.2832zm50.627 0h1.9727c0.31493 0 0.54557 0.0389 0.67773 0.0879a0.50005 0.50005 0 0 0 0.0215 8e-3c0.16065 0.0516 0.24535 0.11206 0.29297 0.16602 0.0641 0.0726 0.10361 0.14852 0.12695 0.25586a0.50005 0.50005 0 0 0 4e-3 0.0215c0.0361 0.13837 0.0566 0.29411 0.0566 0.47266v0.88672c0 0.17853-0.0208 0.33707-0.0566 0.4746a0.50005 0.50005 0 0 0-4e-3 0.0156c-0.0212 0.0932-0.0593 0.16378-0.12305 0.23828-0.0476 0.0496-0.13437 0.11183-0.29687 0.16406a0.50005 0.50005 0 0 0-6e-3 2e-3c-0.13813 0.046-0.3749 0.082-0.69336 0.082h-1.9727zm15.984 0h2.1172c0.33308 0 0.47066 0.0741 0.55664 0.17383a0.50005 0.50005 0 0 0 6e-3 8e-3c0.12037 0.13425 0.18555 0.29306 0.18555 0.5664v0.83985c0 0.3764-0.0763 0.60981-0.16211 0.73242-0.0351 0.0502-0.17016 0.14648-0.58594 0.14648h-2.1172z"/></g></g></svg>
                </Link>

                <section id="language" className={ language }>
                    <select onChange={ changeLang } defaultValue={ Cookies.get('i18next') }>
                        <option value="en">EN</option>
                        <option value="pl">PL</option>
                    </select>
                </section>

                <button id={ navIcon2 } onClick={ () => toggleMenu() }>
                    <div > <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> </div>
                </button>
                
                <MenuDiv className={ menu } showNav={ show } dispNav={ disp }>
                    <Link to="/#home">
                        <h3>{t('home')}</h3>
                    </Link>
                    
                    <Link to="/#what">
                        <h3>{t('what')}</h3>
                    </Link>

                    <Link to="/#about">
                        <h3>{t('about')}</h3>
                    </Link>

                    <Link to="/#contact">
                        <h3>{t('contact')}</h3> 
                    </Link>
                </MenuDiv>
            </section>
        </nav>
    )
}

export default Navbar
