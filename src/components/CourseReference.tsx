import type { CourseRef } from '../data/types';

interface Props {
  courses: CourseRef[];
}

export function CourseReference({ courses }: Props) {
  return (
    <section className="course-ref">
      <h2 className="course-ref-title">Course Reference</h2>
      <div className="course-table">
        {courses.map(c => (
          <a
            key={c.number}
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            className="course-row"
          >
            <span className="course-num">#{c.number}</span>
            <span className="course-name">{c.name}</span>
            <span className="course-hours">{c.hours}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
