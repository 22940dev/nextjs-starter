import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactForm from '../components/Contact/ContactForm'

export default function Contact() {
  return (
    <div className="mainDiv">
      <div>
        <Header />
        <h1>Welcome to the contact page</h1>
        <style jsx>{`
          h1 {
            text-align: center;
            font-size: 3em;
          }
          .mainDiv {
            text-align: center;
          }
        `}</style>
      </div>
      <ContactForm />
      <Footer />
    </div>
  )
}
