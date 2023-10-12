import React, { useState, useEffect } from 'react';
import '../styles/css/Popup.css';

function Popup(props) {

  const question = [
    [
      "Quelle est la définition du harcèlement sexuel au travail ?",
      "Vous participez à une discussion informelle avec des collègues lors d'une pause café au travail. Le sujet de la prévention du harcèlement sexuel est abordé, et l'un de vos collègues pose la question : 'Quelle est la définition du harcèlement sexuel au travail ?' pour clarifier ce que cela signifie dans le contexte professionnel.",
      "Le harcèlement sexuel au travail ne concerne que les avances sexuelles explicites et physiques.",
      "Le harcèlement sexuel au travail ne peut se produire que lorsque la victime est du sexe opposé à l'auteur.",
      "Pour qu'un comportement soit considéré comme du harcèlement sexuel, il doit être intentionnel, et les commentaires ou comportements maladroits ne comptent pas.",
      "Le harcèlement sexuel au travail est une forme de discrimination basée sur le sexe qui englobe divers comportements non désirés d'ordre sexuel, y compris les commentaires, les avances, les blagues, les insinuations, les demandes de faveurs sexuelles, les images ou les messages obscènes, etc. Il peut créer un environnement de travail hostile et est illégal dans de nombreuses juridictions.",
      4
    ],
    [
      "Comment les politiques et les procédures de l'entreprise peuvent-elles contribuer à prévenir le harcèlement sexuel ?",
      " Vous assistez à une réunion d'équipe où le responsable des ressources humaines explique l'importance des politiques et des procédures de l'entreprise en matière de prévention du harcèlement sexuel. L'un de vos collègues pose la question : 'Comment les politiques et les procédures de l'entreprise peuvent-elles contribuer à prévenir le harcèlement sexuel ?' pour mieux comprendre comment ces directives peuvent créer un environnement de travail respectueux et sûr.",
      "Les politiques de l'entreprise ne sont pas nécessaires pour prévenir le harcèlement sexuel, car il s'agit d'un problème personnel entre individus.",
      "La prévention du harcèlement sexuel dépend entièrement de la répression sévère des employés qui s'engagent dans de tels comportements, sans avoir besoin de politiques ou de procédures spécifiques.",
      "Les politiques et les procédures de l'entreprise peuvent en fait encourager le harcèlement sexuel en limitant la liberté d'expression des employés.",
      "Les politiques et les procédures de l'entreprise peuvent contribuer à prévenir le harcèlement sexuel en établissant des normes claires de comportement, en fournissant des canaux de signalement sûrs et confidentiels, en organisant des formations sur la sensibilisation au harcèlement sexuel, et en mettant en place des mécanismes de réponse appropriés pour enquêter sur les allégations et prendre des mesures disciplinaires lorsque cela est nécessaire.",
      4
    ],
    [
      "Comment pouvez-vous soutenir une personne qui vous confie avoir été victime de harcèlement sexuel au travail ?",
      "Vous êtes avec un groupe d'amis lors d'une discussion sur des sujets d'actualité. Le harcèlement sexuel au travail est mentionné, et l'un de vos amis pose la question : 'Comment pouvez-vous soutenir une personne qui vous confie avoir été victime de harcèlement sexuel au travail ?'' pour en savoir plus sur la manière d'apporter un soutien approprié à quelqu'un qui a vécu une telle situation.",
      "Écoutez, montrez de l'empathie, encouragez à signaler conformément aux politiques, et offrez votre soutien pour trouver des ressources appropriées.",
      "Essayez de minimiser l'expérience de la personne en la persuadant que ce n'était probablement pas si grave ou en lui disant qu'elle devrait simplement 'passer à autre chose.'",
      "blâmer la victime en lui disant qu'elle devrait se défendre seule ou qu'elle a provoqué le harcèlement.",
      "Ignorez simplement la situation et ne dites rien à la personne pour éviter d'aggraver la situation.",
      1
    ],
    [
      "Quelles sont les conséquences du harcèlement sexuel sur les victimes et sur l'environnement de travail ?",
      "Vous assistez à une conférence sur la prévention du harcèlement sexuel au travail. L'intervenant principal explique les répercussions du harcèlement sexuel sur les individus et sur l'environnement de travail. À la fin de la présentation, l'un des participants pose la question : 'Quelles sont les conséquences du harcèlement sexuel sur les victimes et sur l'environnement de travail ?' pour approfondir sa compréhension des impacts de cette problématique.",
      "Le harcèlement sexuel n'affecte que légèrement les victimes et n'a pas d'impact sur l'environnement de travail.",
      "Les victimes de harcèlement sexuel deviennent généralement plus productives au travail pour échapper à la situation.",
      "Le harcèlement sexuel peut avoir des conséquences graves sur les victimes, notamment des troubles émotionnels, des problèmes de santé",
      "Le harcèlement sexuel peut améliorer la cohésion au sein de l'équipe de travail, car il peut être considéré comme une forme de 'jeu'.",
      3
    ],
    [
      "Quels sont les rôles des témoins dans la prévention et la résolution du harcèlement sexuel au travail ?",
      "Vous assistez à un atelier de formation sur la prévention du harcèlement sexuel au travail. Le formateur explique l'importance des témoins dans la prévention et la résolution de ce problème. À la fin de la présentation, l'un des participants pose la question : 'Quels sont les rôles des témoins dans la prévention et la résolution du harcèlement sexuel au travail ?' pour mieux comprendre comment les collègues peuvent contribuer à un environnement de travail plus sûr et respectueux.",
      "Les témoins ne jouent aucun rôle dans la prévention et la résolution du harcèlement sexuel, car ce sont des affaires personnelles.",
      "Les témoins ont un rôle crucial dans la prévention et la résolution du harcèlement sexuel au travail. Ils devraient signaler tout comportement inapproprié aux responsables de l'entreprise ou aux ressources humaines, soutenir la victime en lui offrant leur soutien, et contribuer à créer un environnement de travail respectueux en ne tolérant pas de tels comportements.",
      "Les témoins sont responsables de résoudre le harcèlement sexuel par eux-mêmes en confrontant l'auteur de manière agressive.",
      "Les témoins doivent garder le silence et ne rien dire, même s'ils sont témoins de harcèlement sexuel, car c'est une affaire privée entre les parties concernées.",
      2
    ],
    [
        "Comment pouvez-vous définir cette situation ?",
        "Votre responsable vous invite a aller manger au restaurant après le travail",
        "C est de la drague",
        "C est de l'harcèlement sexuel verbale",
        "C est de l harcèlement sexuel physique",
        "Ce n est rien du tout",
        1
    ]   
  ]
  const { onClose } = props;

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains('popup-background')) {
      e.stopPropagation();
      onClose();
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onClose();
  };

  const handleRadioChange = (index) => {
    setSelectedAnswer(index);
  };

  const handleValidate = (e) => {
    if(selectedAnswer + 1 === question[props.index][6]){
      onClose("nice");
    }else{
      onClose("not nice")
    }
    e.stopPropagation();
  }

  return (
    <div className="popup-background" onClick={handleBackgroundClick}>
      <div className="popup-container">
        <div className="popup-content">
          <span className="close" onClick={handleCloseClick}>
            Fermer
          </span>
          <p>{question[props.index][0]}</p>
          <p>Contexte : {question[props.index][1]}</p>

          {question[props.index].slice(2, 6).map((answer, index) => (
            <div>
              <label key={index}>
                <input
                  type="radio"
                  checked={selectedAnswer === index}
                  onChange={() => handleRadioChange(index)}
                />
                Réponse {index + 1} : {answer}
              </label>
            </div>
          ))}
          <button onClick={handleValidate}>Valider</button>
        </div>
      </div>
    </div>
  );
}

export default Popup;