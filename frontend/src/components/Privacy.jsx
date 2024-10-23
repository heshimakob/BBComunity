import React, { useEffect } from 'react';
import NavBar from './NavBar';
import Details from './Details';
import Footer from './Footer';

const Privacy = ({setProgress}) => {
  useEffect(()=>{
    setProgress(40);
    setTimeout(()=>{
        setProgress(100)
    },2000)
},[]);
  return (
<>
<NavBar/>
<div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Politique de confidentialité</h1>
      <p className="mb-4">
        À Black Born Community (bbcommunity.academy), accessible depuis https://bbcommunity.academy/, l'une de nos priorités principales est la confidentialité de nos visiteurs. Ce document de Politique de confidentialité contient les types d'informations qui sont collectées et enregistrées par Black Born Community et comment nous les utilisons.
      </p>
      <p className="mb-4">
        Si vous avez des questions supplémentaires ou si vous souhaitez plus d'informations sur notre Politique de confidentialité, n'hésitez pas à nous contacter.
      </p>

      <h2 className="text-xl font-semibold mb-2">Règlement Général sur la Protection des Données (RGPD)</h2>
      <p className="mb-4">
        Nous sommes un Responsable de traitement de vos informations.
      </p>
      <p className="mb-4">
        La base légale de Black Born Community pour collecter et utiliser les informations personnelles décrites dans cette Politique de confidentialité dépend des Informations Personnelles que nous collectons et du contexte spécifique dans lequel nous les collectons :
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Black Born Community doit exécuter un contrat avec vous.</li>
        <li>Vous avez donné à Black Born Community la permission de le faire.</li>
        <li>Le traitement de vos informations personnelles est dans les intérêts légitimes de Black Born Community.</li>
        <li>Black Born Community doit se conformer à la loi.</li>
      </ul>
      <p className="mb-4">
        Black Born Community ne conservera vos informations personnelles que tant que nécessaire aux fins énoncées dans cette Politique de confidentialité. Nous conserverons et utiliserons vos informations dans la mesure nécessaire pour nous conformer à nos obligations légales, résoudre des litiges et faire respecter nos politiques.
      </p>
      <p className="mb-4">
        Si vous êtes un résident de l'Espace économique européen (EEE), vous disposez de certains droits en matière de protection des données. Si vous souhaitez être informé des Informations Personnelles que nous détenons à votre sujet et si vous souhaitez qu'elles soient supprimées de nos systèmes, veuillez nous contacter.
      </p>
      <p className="mb-4">
        Dans certaines circonstances, vous disposez des droits suivants en matière de protection des données :
      </p>
      <ul className="list-disc pl-8 mb-4">
        <li>Le droit d'accéder, de mettre à jour ou de supprimer les informations que nous avons sur vous.</li>
        <li>Le droit de rectification.</li>
        <li>Le droit d'opposition.</li>
        <li>Le droit de restriction.</li>
        <li>Le droit à la portabilité des données.</li>
        <li>Le droit de retirer son consentement.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Fichiers journaux</h2>
      <p className="mb-4">
        Black Born Community suit une procédure standard d'utilisation des fichiers journaux. Ces fichiers enregistrent les visiteurs lorsqu'ils visitent des sites web. Toutes les entreprises d'hébergement font cela et cela fait partie des analyses des services d'hébergement. Les informations collectées par les fichiers journaux incluent les adresses de protocole Internet (IP), le type de navigateur, le fournisseur d'accès Internet (FAI), la date et l'heure, les pages de référence/sortie et éventuellement le nombre de clics. Celles-ci ne sont pas liées à des informations personnellement identifiables. L'objectif des informations est d'analyser les tendances, d'administrer le site, de suivre les mouvements des utilisateurs sur le site et de rassembler des informations démographiques.
      </p>

      <h2 className="text-xl font-semibold mb-2">Cookies et balises Web</h2>
      <p className="mb-4">
        Comme tout autre site web, Black Born Community utilise des "cookies". Ces cookies sont utilisés pour stocker des informations, y compris les préférences des visiteurs et les pages du site que le visiteur a consultées ou visitées. Les informations sont utilisées pour optimiser l'expérience des utilisateurs en personnalisant le contenu de notre page web en fonction du type de navigateur des visiteurs et/ou d'autres informations.
      </p>

      <h2 className="text-xl font-semibold mb-2">Politiques de confidentialité</h2>
      <p className="mb-4">
        Vous pouvez consulter cette liste pour trouver la Politique de confidentialité de chacun des partenaires publicitaires de Black Born Community.
      </p>
      <p className="mb-4">
        Les tiers, tels que ceux fournissant des serveurs publicitaires ou des réseaux publicitaires, ou d'autres services/technologies, peuvent utiliser des technologies comme des cookies, JavaScript ou des balises Web qui sont utilisées dans leurs publicités/services respectifs et les liens qui apparaissent sur Black Born Community, qui sont envoyés directement au navigateur des utilisateurs. Ils reçoivent automatiquement votre adresse IP lorsque cela se produit. Ces technologies sont utilisées pour mesurer l'efficacité de leurs campagnes publicitaires/services et/ou pour personnaliser le contenu publicitaire/service que vous voyez sur les sites web que vous visitez.
      </p>
      <p className="mb-4">
        Notez que Black Born Community n'a aucun accès ni contrôle sur ces cookies utilisés par des annonceurs tiers.
      </p>

      <h2 className="text-xl font-semibold mb-2">Politiques de confidentialité des tiers</h2>
      <p className="mb-4">
        La Politique de confidentialité de Black Born Community ne s'applique pas à d'autres annonceurs ou sites web. Nous vous conseillons donc de consulter les Politique de confidentialité respectives de ces serveurs publicitaires tiers pour obtenir des informations plus détaillées. Cela peut inclure leurs pratiques et des instructions sur la façon de se désinscrire de certaines options.
      </p>
      <p className="mb-4">
        Vous pouvez choisir de désactiver les cookies via les options de votre navigateur individuel. Pour connaître des informations plus détaillées sur la gestion des cookies avec des navigateurs web spécifiques, cela peut être trouvé sur les sites web respectifs des navigateurs.
      </p>

      <h2 className="text-xl font-semibold mb-2">Informations sur les enfants</h2>
      <p className="mb-4">
        Une autre partie de notre priorité est d'ajouter une protection pour les enfants lors de l'utilisation d'Internet. Nous encourageons les parents et les tuteurs à observer, participer et/ou surveiller et guider leur activité en ligne.
      </p>
      <p className="mb-4">
        Black Born Community ne collecte pas sciemment d'informations personnellement identifiables auprès d'enfants de moins de 13 ans. Si vous pensez que votre enfant a fourni ce type d'informations sur notre site web, nous vous encourageons fortement à nous contacter immédiatement et nous ferons de notre mieux pour supprimer rapidement ces informations de nos dossiers.
      </p>

      <h2 className="text-xl font-semibold mb-2">Politique de confidentialité en ligne uniquement</h2>
      <p className="mb-4">
        Notre Politique de confidentialité s'applique uniquement à nos activités en ligne et est valide pour les visiteurs de notre site web concernant les informations qu'ils ont partagées et/ou collectées sur Black Born Community. Cette politique ne s'applique pas aux informations collectées hors ligne ou par des canaux autres que ce site web.
      </p>

      <h2 className="text-xl font-semibold mb-2">Consentement</h2>
      <p className="mb-4">
        En utilisant notre site web, vous consentez par la présente à notre Politique de confidentialité et acceptez ses termes.
      </p>
    </div>
    <Details/>
    <Footer/>
</>
  );
};

export default Privacy;
