import moment from 'moment'
import React from 'react'

const VideoLength = ({ time }) => {
    const videoLengthInSecs = moment().startOf("day").seconds(time).format("H:mm:ss");
    return (
        <div className='absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded-md'>{videoLengthInSecs}</div>
    )
}

export default VideoLength
