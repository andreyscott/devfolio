import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer
      id="contact"
      className={`py-8 md:pb-4 text-center mt-auto`}
    >
      <div className="flex justify-center space-x-12 mb-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.link}
            title={social.title}
            className="transform hover:-mt-3 text-fun-pink hover:text-pink-600 scale-150 md:scale-125 link-outline"
          >
            {social.icon} 
          </a>
        ))}
      </div>
      <div className="flex items-center justify-center">
        Made with
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 mx-1 inline-block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>



        by Andrew
      </div>
    </footer>
  );
};

const socialLinks = [
  {
    id: 1,
    title: "Github",
    link: "https://github.com/andreyscott",
   icon: <FaGithub className='icon text-2xl' />
  },
  {
    id: 2,
    title: "LinkedIn",
    link: "",
   icon: <FaLinkedin className='icon text-2xl' />
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.facebook.com/andrew-irorere",
    icon: <FaInstagram className='icon text-2xl' />
  },
  {
    id: 4,
    title: "Twitter",
    link: "https://instagram.com/itsandrey.dev",
    icon: <FaTwitter className='icon text-2xl' />
  },
];

export default Footer;
