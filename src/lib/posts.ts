export type Post = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  readTime: string;
  excerpt: string;
  content: string;
  cover: string;
  highlight: string;
  ctaTitle: string;
  ctaDesc: string;
};

export const posts: Post[] = [
  {
    slug: "growth-is-quiet",
    title: "Growth Is Quiet",
    date: "March 5, 2026",
    tag: "Reflection",
    readTime: "5 min read",
    excerpt: "Real growth rarely announces itself. It builds in silence.",
    cover: "/images/blog_cover_1.jpg",
    content: `
Growth is rarely dramatic.

Most of the time, it feels ordinary.

You wake up.
You try again.
You fail at something small.
You fix it.
You repeat.

There are no applause.
No announcement.
No visible milestone.

And that’s where most people quit.

Because progress does not always feel like progress.
It feels like routine.

But growth is not built in highlights.
It is built in habits.

The extra hour you study.
The decision to continue when you’re tired.
The choice to improve 1% instead of staying comfortable.

The world celebrates visible success.
But invisible consistency is what creates it.

If your progress feels slow,
that does not mean you are stuck.

It may mean you are building something stable.
`,
    highlight: "Invisible consistency creates visible results.",
    ctaTitle: "Stay consistent.",
    ctaDesc: "What feels small today compounds tomorrow.",
  },
  {
    slug: "discipline-over-motivation",
    title: "Discipline Over Motivation",
    date: "February 22, 2026",
    tag: "Mindset",
    readTime: "6 min read",
    excerpt: "Motivation fades. Discipline stays.",
    cover: "/images/blog_cover_2.webp",
    content: `
Motivation is emotional.

It comes and goes.
It feels powerful when it arrives.
It disappears when things get hard.

Discipline is different.

It does not depend on mood.
It does not wait for inspiration.
It shows up on normal days.

The days you feel tired.
The days you feel doubtful.
The days you question yourself.

Motivation starts things.
Discipline finishes them.

People often wait to “feel ready.”
But readiness is often a result of action, not a requirement for it.

If you only move when inspired,
you will stop often.

If you move because you decided to,
you will move regardless of how you feel.

And that difference compounds.
`,
    highlight: "Discipline protects your progress when motivation disappears.",
    ctaTitle: "Do it anyway.",
    ctaDesc: "Action creates momentum. Not the other way around.",
  },
  {
    slug: "you-dont-need-to-prove-yourself",
    title: "You Don’t Need to Prove Yourself",
    date: "February 20, 2026",
    tag: "Perspective",
    readTime: "5 min read",
    excerpt: "Not everything needs validation to have value.",
    cover: "/images/blog_cover_3.webp",
    content: `
There is a silent pressure to constantly prove yourself.

To show that you are improving.
To show that you are productive.
To show that you are ahead.

But not all progress needs to be public.

Some growth is meant to be personal.
Some effort is meant to shape you, not impress others.

When everything becomes performance,
you lose depth.

The need for validation can quietly redirect your focus.
Instead of building something meaningful,
you build something visible.

Visibility is tempting.
Substance is slower.

But substance lasts longer.

You don’t need to convince everyone.
You only need to become better than yesterday.
`,
    highlight: "Substance outlasts visibility.",
    ctaTitle: "Focus on depth.",
    ctaDesc: "Build what lasts, not what trends.",
  },

  {
    slug: "starting-without-certainty",
    title: "Starting Without Certainty",
    date: "February 15, 2026",
    tag: "Journey",
    readTime: "6 min read",
    excerpt: "You don’t need certainty to begin. You need courage to continue.",
    cover: "/images/blog_cover_4.webp",
    content: `
Most people think confidence comes before action.

But often, confidence comes after it.

When you start something new,
you rarely feel fully ready.

You doubt your skills.
You question your direction.
You worry about outcomes.

Certainty is comfortable.
But growth rarely starts from comfort.

It starts from movement.

You decide to begin.
Even without clarity.
Even without guarantees.

And clarity slowly appears while you move.

You don’t need the full plan.
You need the willingness to take the next step.

Courage is not the absence of doubt.
It is the decision to continue despite it.
`,
    highlight: "Clarity often follows movement.",
    ctaTitle: "Start anyway.",
    ctaDesc: "Confidence grows after you move.",
  },
  {
    slug: "building-your-own-pace",
    title: "Build at Your Own Pace",
    date: "February 10, 2026",
    tag: "Life",
    readTime: "4 min read",
    excerpt: "Comparison is loud. Progress is personal.",
    cover: "/images/blog_cover_5.webp",
    content: `
It’s easy to feel behind.

You see other people moving fast.
Achieving milestones.
Announcing progress.

Comparison is loud.
It makes your progress feel small.

But growth is not a race.
It is alignment.

Moving fast without direction creates instability.
Moving steadily with intention creates depth.

Your pace may look slower.
But it may also be more sustainable.

Speed impresses.
Consistency transforms.

You are not late.
You are building in your own rhythm.

And rhythm matters more than rush.
`,
    highlight: "Sustainable progress beats rushed success.",
    ctaTitle: "Move at your rhythm.",
    ctaDesc: "Steady growth is stronger than fast validation.",
  },
];
