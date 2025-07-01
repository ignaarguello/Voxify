import React from 'react'

//ReactPlayer
import ReactPlayer from 'react-player'

//Estilos
import './VideoPlayer.css'

export default function VideoPlayer() {
    const UrlVideo = 'https://videos.pond5.com/young-hispanic-man-singing-song-footage-173778394_main_xxl.mp4'

    return (
        <div id='ContenedorVideoPlayer'>
            <ReactPlayer
                src={UrlVideo}
                playing={true}
                muted={true}
                loop={true}
                width={'100%'}
                height={'auto'}
                style={{borderRadius: '30px'}}
            />
        </div>
    )
}
