import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import Fire from '../assets/Group 124.png';
import '../components/Contactus.css';

const ContactUs = () => {
  const [shaklMalumot, setShaklMalumot] = useState({
    ism: '',
    email: '',
    mavzu: '',
    xabar: ''
  });

  const ozgarishniBoshqarish = (e) => {
    setShaklMalumot({ ...shaklMalumot, [e.target.name]: e.target.value });
  };

  const shaklniYuborish = async (e) => {
    e.preventDefault();
    
    const botToken = '7853198708:AAGYTT7w8Xt1LhRaXNDS4wV9zbblroZHYfQ';
    const chatId = '7270212196';

    const xabar = `
      Yangi xabar:
      Ism: ${shaklMalumot.ism}
      Email: ${shaklMalumot.email}
      Mavzu: ${shaklMalumot.mavzu}
      Xabar: ${shaklMalumot.xabar}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: xabar,
        }),
      });

      if (response.ok) {
        toast.success('Xabar muvaffaqiyatli yuborildi!');
        setShaklMalumot({ ism: '', email: '', mavzu: '', xabar: '' });
      } else {
        toast.error('Xabar yuborishda xatolik yuz berdi.');
      }
    } catch (error) {
      console.error('Xato:', error);
      toast.error('Xabar yuborishda xatolik yuz berdi.');
    }
  };

  return (
    <div className="aloqa-sahifa">
      <Toaster position="top-right" />
      <div className="aloqa-konteyner">
        <div className="aloqa-chap">
          <div className="malumot-bolim">
            <h2 className="bolim-sarlavha">Information About us</h2>
            <p className="bolim-matn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, 
              malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis.
            </p>
            <div className="ijtimoiy-tarmoqlar">
              <div className="belgi-doira pushti"></div>
              <div className="belgi-doira kok"></div>
              <div className="belgi-doira moviy"></div>
            </div>
          </div>
          
          <div className="aloqa-yol">
            <h2 className="bolim-sarlavha">Contact Way</h2>
            <div className="aloqa-setka">
              <div className="aloqa-element">
                <div className="belgi-quti binafsha"></div>
                <div className="aloqa-malumot">
                  <p>Tel: 877-67-88-99</p>
                  <p>E-Mail: shop@store.com</p>
                </div>
              </div>
              <div className="aloqa-element">
                <div className="belgi-quti pushti"></div>
                <div className="aloqa-malumot">
                  <p>Support Forum</p>
                  <p>For over 24hr</p>
                </div>
              </div>
              <div className="aloqa-element">
                <div className="belgi-quti toq-sariq"></div>
                <div className="aloqa-malumot">
                  <p>20 Margaret st, London</p>
                  <p>Great britain, 3NM98-LK</p>
                </div>
              </div>
              <div className="aloqa-element">
                <div className="belgi-quti yashil"></div>
                <div className="aloqa-malumot">
                  <p>Free standard shipping</p>
                  <p>on all orders.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="aloqa-ong">
          <div className="shakl-bolim">
            <h2 className="bolim-sarlavha">Get In Touch</h2>
            <p className="bolim-matn">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices 
              tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
            </p>
            <form className="aloqa-shakl" onSubmit={shaklniYuborish}>
              <div className="shakl-qator">
                <input
                  type="text"
                  name="ism"
                  className="shakl-kiritish"
                  placeholder="Ismingiz*"
                  value={shaklMalumot.ism}
                  onChange={ozgarishniBoshqarish}
                  required
                />
                <input
                  type="email"
                  name="email"
                  className="shakl-kiritish"
                  placeholder="Elektron pochtangiz"
                  value={shaklMalumot.email}
                  onChange={ozgarishniBoshqarish}
                  required
                />
              </div>
              <input
                type="text"
                name="mavzu"
                className="shakl-kiritish"
                placeholder="Mavzu*"
                value={shaklMalumot.mavzu}
                onChange={ozgarishniBoshqarish}
                required
              />
              <textarea
                name="xabar"
                className="shakl-matn"
                placeholder="Xabaringizni kiriting*"
                value={shaklMalumot.xabar}
                onChange={ozgarishniBoshqarish}
                required
              ></textarea>
              <button type="submit" className="yuborish-tugma">
                Xabar Yuborish
              </button>
            </form>
          </div>
          <div className="rasm-qism">
            <img 
              src={Fire}
              alt="Aloqa rasmi" 
              className="aloqa-rasm"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

