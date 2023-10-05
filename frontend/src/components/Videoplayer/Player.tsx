import Plyr, { APITypes } from 'plyr-react'
import 'plyr-react/plyr.css'

import { useRef } from 'react'

const provider = 'html5'
const videoOptions = undefined

interface VideoPlayerWrapperInterface {
  videoUrl: string
}
const VideoPlayerWrapper = ({ videoUrl }: VideoPlayerWrapperInterface) => {
  const ref = useRef<APITypes>(null)

  const enterVideo = () => {
    ref.current?.plyr?.fullscreen.enter()
  }

  const make2x = () => {
    const plyrInstance = ref.current?.plyr as Plyr
    if (plyrInstance) plyrInstance.speed = 2
  }

  const plyrVideo = videoUrl ? (
    <Plyr
      onAbort={() => console.log('abort')}
      onPlay={() => console.log('playing')}
      onClick={() => {
        console.log('clicking')
      }}
      onEnded={() => console.log('ended')}
      ref={ref}
      source={{
        type: 'video',
        sources: [
          {
            src: videoUrl,
            provider: provider,
          },
        ],
      }}
      options={videoOptions}
    />
  ) : null

  return (
    <div>
      {plyrVideo}
      <button onClick={enterVideo}>fullscreen</button>
      <button onClick={make2x}>2x</button>
    </div>
  )
}

export default VideoPlayerWrapper
