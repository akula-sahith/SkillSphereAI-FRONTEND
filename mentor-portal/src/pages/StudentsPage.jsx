import Card from '../components/Card'
import { students } from '../data/dummy'

export default function StudentsPage() {
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
            onChat={() => (window.location.href = `/chat`)}
            onCall={() => (window.location.href = `/call`)}
            to={`/profile/${s.id}`}
          />
        ))}
      </div>
    </section>
  )
}

