import Link from 'next/link';

export default function StudentInfo() {
  return (
    <div>
      <h2>Your Name: Harsimran Singh</h2>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/04harsimran20/cprg306-assignments">
          Visit GitHub
        </Link>
      </p>
    </div>
  );
}
