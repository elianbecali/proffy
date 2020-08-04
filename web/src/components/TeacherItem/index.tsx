import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/54561377?s=460&u=43e4954a86f8666ca7e21b7547312c92b0c3b2e0&v=4" alt="Elian Becali" />
                <div>
                    <strong>Elian Becali</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratório e mudar de vida.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 450,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;