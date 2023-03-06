import { Feature } from './Feature';
import { Hero } from './hero';

export const Main = ({ newBlog }) => {
  return (
    <main>
      <Hero newBlog={newBlog} />
      <div className="relative bg-slate-50 px-6 lg:px-8">
        <Feature />
      </div>
    </main>
  );
};