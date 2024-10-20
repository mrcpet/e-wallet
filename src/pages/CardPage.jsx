import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CardPageContainer from "../features/cards/CardPageContainer/CardPageContainer";

function CardPage() {
  const cards = useSelector((store) => store.cards.cards);
  const params = useParams();
  let currentCard = cards.filter((card) => card.id === params.id);
  return (
    <div className="page">
      <h2>Card details</h2>
      <CardPageContainer card={currentCard[0]} />
    </div>
  );
}

export default CardPage;
