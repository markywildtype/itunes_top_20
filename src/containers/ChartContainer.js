import React, { Component } from 'react'
import ChartList from '../components/ChartList'

class ChartContainer extends Component{

  constructor(props){
    super(props);
    this.state = {
      allSongs: []
    }
  }

  componentDidMount(){
    const request = new XMLHttpRequest();
    request.open('GET', "https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
    request.addEventListener('load', () => {
      if(request.status === 200){
        const jsonString = request.responseText;
        const topSongs = JSON.parse(jsonString);
        this.setState({allSongs: topSongs.feed.entry})
      }
    })
    request.send()
  }

  render(){
    const songInfo = this.state.allSongs.map((song, index) => {
        return {
          key: index,
          artist: song["im:artist"].label,
          title: song["im:name"].label,
          position: index + 1,
          image: song["im:image"][0].label
        }

    });
    return (
      <div className="chart-container">
        <h1>It's only yer actual iTunes Top 20 chart!</h1>
        <ChartList songInfo={songInfo}/>
      </div>
    )
  }



}

export default ChartContainer;
