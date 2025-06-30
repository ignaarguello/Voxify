import React from 'react'

//ReactPlayer
import ReactPlayer from 'react-player'

export default function VideoPlayer() {
    const UrlVideo = 'https://videos.pond5.com/young-hispanic-man-singing-song-footage-173778394_main_xxl.mp4'

    return (

            <ReactPlayer
                src={UrlVideo}
                playing={true}
                muted={true}
                loop={true}
                width={'50rem'}
                height={'auto'}
                style={{borderRadius: '30px', margin:'1.5rem'}}
            />
    )
}
