import { useLikes } from '../context/LikesContext'
import Button from './ui/button'

function LikeButton() {
  const { likes, addLike } = useLikes()

  return (
    <Button
      aria-label={`Like (${likes} likes)`}
      onClick={addLike}
    >
      Like ♥ {likes}
    </Button>
  )
}

export default LikeButton