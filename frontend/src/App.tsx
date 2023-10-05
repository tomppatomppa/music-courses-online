import { useQuery } from 'react-query'
import { pingBackend } from './api/test'

import VideoPlayerWrapper from './components/Videoplayer/Player'
import { getCloudfrontUrl } from './api/VideoApi'

function App() {
  const { data } = useQuery('ping', () => pingBackend())
  const { data: videoUrl } = useQuery(['video_url'], () => getCloudfrontUrl())

  return (
    <main className="h-screen ">
      {`Server response: from /api ${data}`}
      <div className="h-full w-full ">
        <div className="max-w-4xl mx-auto">
          <VideoPlayerWrapper videoUrl={videoUrl} />
        </div>
      </div>
    </main>
  )
}

export default App
