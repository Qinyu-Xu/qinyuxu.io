const mainLinks = [
  { name: 'Email', url: 'mailto:qinyu.xu@nyu.edu' },
  { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=tGcgxQQAAAAJ&hl=en' },
  { name: 'GitHub', url: 'https://github.com/Qinyu-Xu' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/qinyu-xu-10b324380/' },
];

const meLinks = [
  { name: 'Email', url: 'mailto:qinyuxu.me@gmail.com' },
  { name: 'Instagram', url: 'https://www.instagram.com/qinyu_xu/' },
];

export function Footer({ isMe }: { isMe: boolean }) {
  const links = isMe ? meLinks : mainLinks;

  return (
    <footer className="mt-12 text-center">
      <div className="flex justify-center space-x-4 tracking-tight">
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
    </footer>
  );
}
