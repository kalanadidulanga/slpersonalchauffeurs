import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=' flex justify-center items-center pb-5 bg-footer bg-bottom overflow-hidden bg-cover'>
      <div className=' padding-container max-container flex w-full flex-col gap-3'>
        <div className=' flex flex-col items-center justify-center gap-[10%] md:flex-row pt-20 pb-10'>
          <a href={"/"} className='mb-10'>
            <img
              src={`/logos/logo2.svg`}
              alt='logo'
              width={150}
            // height={29}
            />
          </a>

          <div className=' flex flex-wrap gap-10 sm:justify-between md:flex-1 w-full'>
            <div className=' w-full sm:w-auto items-center flex flex-col'>
              {FOOTER_LINKS.map((columns, index) => (
                <FooterColumn title={columns.title} key={index}>
                  <ul className=' regular-14 flex flex-col gap-2 text-gray-30 text-center'>
                    {columns.links.map((link) => (
                      <Link to={link.href} key={link.key} className=' hover:text-color4 focus:text-color1 duration-300'>
                        {link.label}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}
            </div>

            <div className=' flex flex-col gap-5 w-full sm:w-auto'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    // to={``}
                    key={link.value1}
                    className=' flex gap-4 items-center md:flex-col lg:flex-row'
                  >
                    <p className='regular-14 whitespace-nowrap'>
                      {link.value1}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className=' flex flex-col gap-5 w-full sm:w-auto'>
              <FooterColumn title={SOCIALS.title}>
                <ul className=' regular-14 flex gap-4 text-gray-30'>
                  {SOCIALS.links.map((link) => (
                    <a href={link.href} key={link.src} className=" hover:scale-125 duration-300">
                      <img src={link.src} alt='logo' width={24} height={24} />
                    </a>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className=' border bg-gray-20 mb-2' />
        <p className=' regular-14 w-full text-center text-gray-30'>© Copyright 2024 Developed By <span className=' font-bold'>Kalana Didulanga</span> | All Right Reserved.</p>
      </div>
    </footer>
  )
}

const FooterColumn = ({ title, children }) => {
  return (
    <div className=' flex flex-col gap-5 items-center'>
      <h4 className=' bold-18 whitespace-nowrap text-center'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer