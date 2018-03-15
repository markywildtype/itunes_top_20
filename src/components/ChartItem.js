import React from 'react';

const ChartItem = (props) => {
  return (
    <div className="chart-item">
      <table>
        <tr>
          <td id="position">{props.songPosition}</td><td><img src={props.songImage} alt={props.songInfo} /></td><td><span id="artist-name"> {props.songArtist}</span> - {props.songInfo}</td>
        </tr>
      </table>
    </div>
  )


}

export default ChartItem;
