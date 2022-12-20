import '../styles/components/Contact.sass'

const Contact = () => {
  return (
    <>
    <div className="form">
    <h1>Entre em Contato</h1>
    <form action="">
      <input type="text" name="name" id="" placeholder='Digite seu Nome' />
      <input type="text" name="email" id="" placeholder='Digite seu Email' />
      <textarea name="message" id="" cols="30" rows="10" placeholder='Digite uma mensagem'></textarea>
      <a href="" className='btn'>Enviar</a>
    </form>
    </div>
    </>

  )
}

export default Contact