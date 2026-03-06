import Image from 'next/image';

type PageHeaderProps = {
  name: string;
  title: string;
  institution: string;
  university: string;
  email: string;
  photo: string;
  googleScholar?: string;
  github?: string;
  linkedin?: string;
  instagram?: string;
};

export function PageHeader({
  name,
  title,
  institution,
  university,
  email,
  photo,
  googleScholar,
  github,
  linkedin,
  instagram,
}: PageHeaderProps) {
  const links = [
    { name: 'Email', url: `mailto:${email}` },
    ...(googleScholar ? [{ name: 'Google Scholar', url: googleScholar }] : []),
    ...(github ? [{ name: 'GitHub', url: github }] : []),
    ...(linkedin ? [{ name: 'LinkedIn', url: linkedin }] : []),
    ...(instagram ? [{ name: 'Instagram', url: instagram }] : []),
  ];

  return (
    <div className="flex gap-8 pt-12">
      <div className="flex flex-col justify-between flex-1">
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
      <div className="flex-shrink-0 overflow-hidden rounded-sm shadow-sm">
        <Image
          src={photo}
          alt={name}
          width={160}
          height={192}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
