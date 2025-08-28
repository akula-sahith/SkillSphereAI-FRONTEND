import Card from '../components/Card'
import { students } from '../data/dummy'
import { useNavigate } from 'react-router-dom'

export default function StudentsPage() {
  const navigate = useNavigate()
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-6">Students</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {students.map((s) => (
          <Card
            key={s.id}
            title={s.name}
            subtitle={s.branch}
            description={s.bio}
            avatarUrl={s.avatar}
            onChat={() => navigate('/chat')}
            onCall={() => navigate('/call')}
            to={`/profile/${s.id}`}
          />
        ))}
      </div>
    </section>
  )
}

