import Card from '../components/Card'
import { mentors } from '../data/dummy'
import { useNavigate } from 'react-router-dom'

export default function MentorsPage() {
  const navigate = useNavigate()
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Mentors</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {mentors.map((m) => (
          <Card
            key={m.id}
            title={m.name}
            subtitle={m.branch}
            description={m.bio}
            avatarUrl={m.avatar}
            onChat={() => navigate('/chat')}
            onCall={() => navigate('/call')}
            to={`/profile/${m.id}`}
          />
        ))}
      </div>
    </section>
  )
}

