const FlowerCard = ({section, link,}) => {

    return (
    <div className="flowerCard" >
        <h3 className="sectionName">{section}</h3>
        <h1 className="sectionLink">{link}</h1>
    </div>
    );
}

export default FlowerCard;