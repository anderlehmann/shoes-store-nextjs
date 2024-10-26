import './Newsletter.css'
import Image from 'next/image';

export default function Newsletter() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section id='section-newsletter'>
      <p className='p-newsletter mobile'>NEWSLETTER</p>
      <div id='newsletter-wrapper'>
        <div id='text-newsletter'>
          <p className='p-newsletter desktop'>NEWSLETTER</p>
          <p>Receba ofertas e descontos exclusivos por e-mail!</p>
        </div>
        <form id='form-newsletter'>
          <div className='inputs-newsletter'>
            <Image
              className='icon-input-newsletter'
              src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1729893479/icon_user_808080_td70en.svg'
              alt=''
              width={23}
              height={23}
            />
            <input type="text" name='username' id='username' placeholder='Nome' autoComplete='off' />
          </div>
          <div className='inputs-newsletter'>
            <Image
              className='icon-input-newsletter'
              src='https://res.cloudinary.com/dsgkcgx1s/image/upload/v1729893851/email_zmwjqs.svg'
              alt=''
              width={21}
              height={21}
            />
            <input type="email" name='email' id='email' placeholder='E-mail' />
          </div>
          <button type="submit" onClick={(e) => handleFormSubmit(e)}>Cadastrar</button>
          <p>Ao concluir, você aceitará nossos <b>termos de uso</b> e <b>política de privacidade.</b></p>
        </form>
      </div>
    </section>
  )
};
