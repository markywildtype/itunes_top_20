import React from 'react';
import ChartItem from './ChartItem'

const ChartList = (props) => {

  const listItems = props.songInfo.map((song, index) => {
    return (
      <ChartItem
        key={index}
        songInfo={song.title}
        songPosition={song.position}
        songArtist={song.artist}
        songImage={song.image}>
      </ChartItem>
    )
  });

  return (
    <div className="chart-list">
      {listItems}
    </div>
  )
}


export default ChartList;
