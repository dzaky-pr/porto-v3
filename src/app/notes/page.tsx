import BlurFade from '@/components/magicui/blur-fade';
import { NotesText } from '@/components/notes-text';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { DATA } from '@/data/resume';

import Link from 'next/link';

export const metadata = {
  title: 'Blog',
  description: 'My thoughts on software development, life, and more.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function NotesPage() {
  return (
    <section id="projects">
      <div className="space-y-12 w-full py-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">Notes</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">I Like to Learn</h2>
              <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                I spend a lot of time studying, taking notes, and sharing them with my friends. Here some notes. Let&apos;s enjoy learning together, everyone.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            {DATA.notes.map((note, id) => (
              <BlurFade key={id} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
                <NotesText key={id} type={note.type} text={note.text} links={note.links} />
              </BlurFade>
            ))}
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
