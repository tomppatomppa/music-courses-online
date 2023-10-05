// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { APP_ID } from '@/config'
import Embed from 'flat-embed'
import { useEffect, useRef } from 'react'

const Player = () => {
  const embedContainerRef = useRef(null)

  useEffect(() => {
    if (embedContainerRef.current) {
      const embed = new Embed(embedContainerRef.current, {
        score: '56ae21579a127715a02901a6',

        embedParams: {
          appId: APP_ID,
          layout: 'track',
          videoPosition: 'top',
        },
      })
      embed.setTrack({
        id: 'yt-cucaracha',
        type: 'youtube',
        title: 'LA CUCARACHA',
        mediaId: 'jp9vFhyhNd8',
        synchronizationPoints: [
          { type: 'measure', time: 0, location: { measureIdx: 0 } },
          { type: 'end', time: 12 },
        ],
      })
      embed.useTrack({ id: 'yt-cucaracha' })
    }
  }, [])

  return (
    <div className="h-full max-w-6xl mx-auto" ref={embedContainerRef}></div>
  )
}

export default Player
