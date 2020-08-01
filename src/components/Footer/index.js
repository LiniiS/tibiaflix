import React from 'react';
import { FooterBase } from './styles';


function Footer() {
  return (
    <FooterBase>
      <a href="/">
      <img src="https://fontmeme.com/permalink/200801/0af94e1b9d1ddd17a0bfd110e85116b6.png" alt="TibiaFlix logo" />
      </a>
      <p>
        AutoMagicamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
