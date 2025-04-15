import Card from "./Card/Card"

const cards=[ 
    {
        title:"Card 1",
        text:"This is the first card",
    },
    {
        title:"Card 2",
        text:"This is the second card",
    },
    {
        title:"Card 3",
        text:"This is the third card",
    },
    {
        title:"Card 4",
        text:"This is the fourth card",
    },
    {
        title:"Card 5",
        text:"This is the fifth card",
    }
]

function CardRenderer(){
    const cardArray = cards.map((card,index)=>{
        return <Card key={index} title={card.title} text={card.text}/>
    })
    
    return (
        <div className="card-container">
            {cardArray.length>0?cardArray:null}
        </div>
    )    
}

export default CardRenderer