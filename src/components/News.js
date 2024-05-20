import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles=[
        {
          "source": {
            "id": "bild",
            "name": "Bild"
          },
          "author": "BILD",
          "title": "Weil Köche und Kellner fehlen: Tiefkühlkost für Heide-Touristen | Regional",
          "description": "Die Gastro-Krise hat die Lüneburger Heide erreicht. Zu wenig Köche und Kellner. Jetzt sollen Feriengäste Edel-Fastfood selbst kochen.",
          "url": "https://www.bild.de/regional/niedersachsen/weil-koeche-und-kellner-fehlen-tiefkuehlkost-fuer-heide-touristen-664994168033c112862436ea",
          "urlToImage": "https://images.bild.de/664994168033c112862436ea/7bcbc8236b4c649cd607b431763b3f52,14701272?w=1280",
          "publishedAt": "2024-05-19T08:01:28Z",
          "content": "Amelinghausen (Niedersachsen) Die Gastro-Krise hat auch die Lüneburger Heide erreicht. Dienstags und mittwochs haben viele Restaurants in der beliebten Urlaubsregion (rund 2 Mio. Gäste pro Jahr, ca. … [+1578 chars]"
        },
        {
          "source": {
            "id": "gruenderszene",
            "name": "Gruenderszene"
          },
          "author": null,
          "title": "Klima, Health, Food und Consumer-Themen: Das sind die Investmentkriterien von Vorwerk Venture",
          "description": "Investorin Katharina Neuhaus verrät, welche Gründer-Eigenschaften sie für unentbehrlich hält - und wann sie Gespräche auch mal abbricht.",
          "url": "https://www.businessinsider.de/gruenderszene/business/herz-fuer-consumer-themen-das-sind-die-investmentkriterien-von-vorwerk-venture/",
          "urlToImage": "https://cdn.businessinsider.de/wp-content/uploads/2024/05/202405_GS_Artikel_VC06_1800x1200.jpg?ver=1715868665",
          "publishedAt": "2024-05-17T04:00:00+00:00",
          "content": "Mehr als 40 Firmen gehören mittlerweile zum Portfolio des Berliner VCs Vorwerk Ventures. Insgesamt hat der Fonds 400 Millionen Euro under management, der aktuelle Fonds ist 150 Millionen Euro schwer.… [+1821 chars]"
        },
        {
          "source": {
            "id": "the-next-web",
            "name": "The Next Web"
          },
          "author": "Siôn Geschwindt",
          "title": "Mobility giant Bolt adopts self-driving Starship robots for food delivery",
          "description": "Bolt plans to roll out thousands of the robots across multiple countries, starting in its home city of Tallinn later this year.",
          "url": "http://thenextweb.com/news/mobility-giant-bolt-adopts-self-driving-starship-robots-for-food-delivery",
          "urlToImage": "https://img-cdn.tnwcdn.com/image/tnw-blurple?filter_last=1&fit=1280%2C640&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2023%2F06%2Fbolt-starship-robot-delivery.jpg&signature=c902ce701ce95e20f6fd703a50ad52ca",
          "publishedAt": "2023-06-22T09:17:15Z",
          "content": "European ride-hailing firm Bolt will start using self-driving robots to deliver customers food as part of a new partnership with fellow Estonian company Starship Technologies, announced yesterday.  \r… [+2447 chars]"
        },
        {
          "source": {
            "id": "the-times-of-india",
            "name": "The Times of India"
          },
          "author": "Dipak K Dash",
          "title": "Government to provide 5 kg free food grains to poor for May & June",
          "description": "India News: The government on Friday announced to provide 5 kg free food grains to the poor for May and June 2021. This will cover nearly 80 crore beneficiaries u",
          "url": "http://timesofindia.indiatimes.com/india/government-to-provide-5-kg-free-food-grains-to-poor-for-may-june/articleshow/82213582.cms",
          "urlToImage": "https://static.toiimg.com/thumb/msid-82213583,width-1070,height-580,imgsize-1921513,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          "publishedAt": "2021-04-23T04:23:00Z",
          "content": null
        }
      ]
        

    constructor(){
        super();
        this.state={
            articles: this.articles,
            loading: false
        }
          
    
    }
  render() {
    return (
      <div className="container my-2"> 
        <h1>Top Headlines - NewsAdda</h1>
        <div className='row' >
          {this.state.articles.map((elements)=>{
           return  <div className='col-md-3'key={elements.url}>
            <NewsItem  title={elements.title.slice(0,30)} description={elements.description.slice(0,88)} imageUrl={elements.urlToImage} newsUrl={elements.url}/>
            </div>
          })}  
        
           
        </div>
       
      </div>
    )
  }
}

export default News
