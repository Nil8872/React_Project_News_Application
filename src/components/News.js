import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spinner from './Spinner';

export class News extends Component {
  // article = [
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Angus Watson, Duarte Mendonca",
  //     "title": "Australia pulls out of Afghanistan cricket series over Taliban's restrictions on women",
  //     "description": "Australia's men's cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Taliban's restrictions on women and girls' education and employment, Cricket Australia (CA) said in a statement Thursday.",
  //     "url": "https://www.cnn.com/2023/01/12/sport/australia-afghanistan-cricket-taliban-intl-hnk-spt/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230112030420-01-australia-cricket-team-010823.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2023-01-12T08:27:59Z",
  //     "content": "Australias mens cricket team has withdrawn from a series of upcoming matches against Afghanistan in protest over the ruling Talibans restrictions on women and girls education and employment, Cricket … [+2284 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Guardian"
  //     },
  //     "author": "Shadi Khan Saif",
  //     "title": "Ditching cricket series only punishes Afghanistan even more | Shadi Khan Saif",
  //     "description": "Cricket Australia’s decision to cancel series against Afghanistan only serves to further isolate a country already abandoned by the westMy experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will…",
  //     "url": "https://www.theguardian.com/commentisfree/2023/jan/13/australia-ditching-uae-cricket-series-only-punishes-afghanistan-even-more",
  //     "urlToImage": "https://i.guim.co.uk/img/media/14836045ecf198f382c9c1e500d91e48bf9d53ea/0_250_3590_2153/master/3590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=e77bf0ec709775846a6fcd5bed7b5a44",
  //     "publishedAt": "2023-01-13T14:00:17Z",
  //     "content": "My experience playing in the Australian club cricket scene has shown that players have a resilient fighting spirit and will not surrender without a fight.\r\nBut when I heard Australia was ditching a h… [+3863 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Women's cricket awaits birth of a superpower with game set to take ... - Reuters",
  //     "description": "Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the sport.",
  //     "url": "https://www.reuters.com/lifestyle/sports/womens-cricket-awaits-birth-superpower-with-game-set-take-off-india-2023-02-02/",
  //     "urlToImage": "https://www.reuters.com/resizer/w9j1RMJ8W83YI1bniKAZBOrx7uM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HZGU7QHJDFO55DR6YZPG5ZEZSA.jpg",
  //     "publishedAt": "2023-02-02T04:22:00Z",
  //     "content": "NEW DELHI, Feb 2 (Reuters) - Women's cricket looks poised to step out of the imposing shadow of the men's game in India, and the rest of the world is bracing for the birth of a superpower in the spor… [+2981 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Australia's Khawaja flies out to India after visa approved - Reuters",
  //     "description": "Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.",
  //     "url": "https://www.reuters.com/lifestyle/sports/australias-khawaja-flies-out-india-after-visa-approved-2023-02-02/",
  //     "urlToImage": "https://www.reuters.com/resizer/8IY9xAtO7YjFeuUe4vLh9xLtS6s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3YXKPM4CMNMYXIHJK4NKGZ3IHE.jpg",
  //     "publishedAt": "2023-02-02T00:17:00Z",
  //     "content": "MELBOURNE, Feb 2 (Reuters) - Australia opener Usman Khawaja will join his test team mates in India later on Thursday following a delayed approval of his visa, Cricket Australia said.\r\nPakistan-born K… [+949 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Australia batsman Khawaja misses flight to India after visa delay - Reuters",
  //     "description": "Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.",
  //     "url": "https://www.reuters.com/lifestyle/sports/australia-batsman-khawaja-misses-flight-india-after-visa-delay-2023-02-01/",
  //     "urlToImage": "https://www.reuters.com/resizer/xwY-ID25YaA_3bwdJNMlVwj-9e8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/O7RV5GFOINJN7M36ORQ4QM4TRU.jpg",
  //     "publishedAt": "2023-02-01T04:14:00Z",
  //     "content": "MELBOURNE, Feb 1 (Reuters) - Australia opener Usman Khawaja missed the team's flight to India on Wednesday for their four-test tour due to a visa delay, Cricket Australia (CA) said.\r\nA CA spokesman s… [+911 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "South Africa name new coaches for test, limited overs teams - Reuters",
  //     "description": "South Africa have named Rob Walter as their new head coach in limited overs cricket with Shukri Conrad to take over the test team, officials confirmed on Monday.",
  //     "url": "https://www.reuters.com/lifestyle/sports/south-africa-name-new-coaches-test-limited-overs-teams-2023-01-16/",
  //     "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=126",
  //     "publishedAt": "2023-01-16T09:07:00Z",
  //     "content": "JOHANNESBURG, Jan 16 (Reuters) - South Africa have named Rob Walter as their new head coach in limited overs cricket with Shukri Conrad to take over the test team, officials confirmed on Monday.\r\nMar… [+1569 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Women's IPL franchises fetch $572 million for Indian board - Reuters",
  //     "description": "The world's most affluent cricket board, India, got further richer by $572.72 million after unveiling five franchises for an Indian Premier League-style T20 tournament for the women on Wednesday.",
  //     "url": "https://www.reuters.com/lifestyle/sports/womens-ipl-franchises-fetch-572-million-indian-board-2023-01-25/",
  //     "urlToImage": "https://www.reuters.com/resizer/LWHFB6n8KixeLssWo3PraaxrBLA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RYYA6ECBE5ICXLYYO2AXJP3XKI.jpg",
  //     "publishedAt": "2023-01-25T11:21:00Z",
  //     "content": "NEW DELHI, Jan 25 (Reuters) - The world's most affluent cricket board, India, got further richer by $572.72 million after unveiling five franchises for an Indian Premier League-style T20 tournament f… [+1673 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "reuters",
  //       "name": "Reuters"
  //     },
  //     "author": null,
  //     "title": "Viacom 18 bags women's IPL media rights for $117 mln - Reuters.com",
  //     "description": "Viacom 18 will pay 9.51 billion Indian rupees ($117 million) for the media rights of the women's Indian Premier League (IPL) for the next five years, the country's cricket board (BCCI) announced on Monday.",
  //     "url": "https://www.reuters.com/lifestyle/sports/viacom-18-bags-womens-ipl-media-rights-117-mln-2023-01-16/",
  //     "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=126",
  //     "publishedAt": "2023-01-16T08:43:00Z",
  //     "content": "Jan 16 (Reuters) - Viacom 18 will pay 9.51 billion Indian rupees ($117 million) for the media rights of the women's Indian Premier League (IPL) for the next five years, the country's cricket board (B… [+1312 chars]"
  //   }
  // ]
  article = [];

  constructor() {
    super();
    this.state = {
       article : this.article,
      loading: false,
      page : 1,
      totalResults: 0,
    }
  }

  update = async()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=8501cbcc4c2441d8afd83f191966b402&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    this.setState({...this.state, loading: true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({ article: parsedData.articles, 
      totalResults : parsedData.totalResults,
    loading: false })
  }

  async componentDidMount(){
    this.update();
}


handlePrevious = async()=>{
console.log("previous")

this.setState({...this.state, page : this.state.page--,loading: true});
this.update(); 
}
  handleNext = async()=>{
    if(this.state.page < (Math.ceil(this.state.totalResults/10))){
      this.setState({...this.state, page : this.state.page++, loading:true});
      this.update();
    }
    else{
      
     console.log("Bus kar")

    }
}
render() {
    console.log(this.state)
     return (
      <>
        <div className="container"  >
          <h2 className='text-center'>NewsMonkey - Some populer News</h2>
          {this.state.loading && <Spinner/>}
          <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} className="btn btn-dark ">&larr; Previous </button>
        <button type="button" disabled={this.state.page >= (Math.ceil(this.state.totalResults/10))} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
        </div>
          <div className="row my-3">
            
            {this.state.article.map((element) => {
              return (<div className="col-md-4 my-3" key={element.url}>
                <NewsItems title={element.title ?element.title:""} discription={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url} publishedAt={element.publishedAt} author ={element.author}
/>
              </div>)

            })}


          </div>

        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.handlePrevious} className="btn btn-dark ">&larr; Previous </button>
        <button type="button" disabled={this.state.page >= (Math.ceil(this.state.totalResults/10))} onClick={this.handleNext} className="btn btn-dark">Next &rarr;</button>
        </div>

      </>
    )
  }
}

export default News
