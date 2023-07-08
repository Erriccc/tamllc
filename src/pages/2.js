import fs from 'fs';
import path from 'path';

export default function MyPage({ html }) {
  return <div class="bg-white" dangerouslySetInnerHTML={{ __html: html }} />;
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'privacy.html');
  const html = fs.readFileSync(filePath, 'utf8');
  return { props: { html } };
}
