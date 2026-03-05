import { ComponentPropsWithoutRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { highlight } from 'sugar-high';

type HeadingProps = ComponentPropsWithoutRef<'h1'>;
type ParagraphProps = ComponentPropsWithoutRef<'p'>;
type ListProps = ComponentPropsWithoutRef<'ul'>;
type ListItemProps = ComponentPropsWithoutRef<'li'>;
type AnchorProps = ComponentPropsWithoutRef<'a'>;
type BlockquoteProps = ComponentPropsWithoutRef<'blockquote'>;

const components = {
  h1: (props: HeadingProps) => (
    <h1 className="text-4xl font-medium pt-12 mb-2" {...props} />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-[11px] uppercase tracking-[0.14em] font-medium text-gray-400 dark:text-zinc-500 border-b border-gray-200 dark:border-zinc-700 pb-1.5 mt-10 mb-4"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-800 dark:text-zinc-200 font-medium mt-6 mb-2"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => <h4 className="font-medium" {...props} />,
  p: (props: ParagraphProps) => (
    <p className="text-gray-800 dark:text-zinc-300 leading-snug" {...props} />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-1"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1" {...props} />,
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      'text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-800';
    if (href?.startsWith('/')) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith('#')) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
    const codeHTML = highlight(children as string);
    return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
  },
  Table: ({ data }: { data: { headers: string[]; rows: string[][] } }) => (
    <table>
      <thead>
        <tr>
          {data.headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  ),
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
  PageHeader: ({
    name,
    title,
    institution,
    university,
    email,
    photo,
    googleScholar,
    github,
    linkedin,
  }: {
    name: string;
    title: string;
    institution: string;
    university: string;
    email: string;
    photo: string;
    googleScholar?: string;
    github?: string;
    linkedin?: string;
  }) => {
    const links = [
      { name: 'email', url: `mailto:${email}` },
      ...(googleScholar ? [{ name: 'google scholar', url: googleScholar }] : []),
      ...(github ? [{ name: 'github', url: github }] : []),
      ...(linkedin ? [{ name: 'linkedin', url: linkedin }] : []),
    ];
    return (
      <div className="flex justify-between gap-8 pt-12">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-medium mb-3">{name}</h1>
            <p className="text-gray-700 dark:text-zinc-300 leading-relaxed">
              {title}
              <br />
              {institution}
              <br />
              {university}
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.url.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="text-gray-400 dark:text-gray-500 hover:text-blue-500 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <div className="relative flex-shrink-0 w-40 overflow-hidden rounded-sm shadow-sm">
          <Image
            src={photo}
            alt={name}
            fill
            className="object-cover"
            sizes="160px"
            priority
          />
        </div>
      </div>
    );
  },
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
