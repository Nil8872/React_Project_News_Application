import React, { Component } from 'react'

export class NewsItems extends Component {
     
    render() {
        let { title, discription, imageUrl, url, publishedAt, author } = this.props;
        return (
            <>


                <div className="card">
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <div>
                    <span className="card-text badge badge-pill badge-secondary">{author}</span>

                        </div>
                        <h5 className="card-title"> {title}...</h5>
                        <p className="card-text">{discription}...</p>
                        <p className='card-text'>Release Time : {publishedAt}</p>
                        <a href={url} target='_blank' className="btn btn-dark">Read More</a>
                    </div>
                </div>


            </>
        )
    }
}

export default NewsItems
