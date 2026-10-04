import { Link } from 'react-router'

function NotFoundPage() {
  return (
    <main>
      <h1>404 - Page Not Found</h1>
      <Link to="/">Back to Home</Link>
    </main>
  )
}

export default NotFoundPage
