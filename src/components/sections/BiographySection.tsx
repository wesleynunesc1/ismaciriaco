"use client";

import React from "react";
import Image from "next/image";

export const BiographySection: React.FC = () => {
  return (
    <article className="py-24 md:py-36 bg-black text-beige relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="mb-16 pb-8 border-b border-graphite">
          <span className="font-sans text-xs tracking-epic uppercase text-gold block mb-3 font-medium">
            BIOGRAFIA OFICIAL
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white tracking-wide">
            Trajetória, Identidade & Música
          </h2>
        </div>

        {/* Narrative Article Body (Comfortable reading width: ~700px) */}
        <div className="max-w-[720px] mx-auto space-y-12 font-sans text-base sm:text-lg text-beige/85 leading-[1.85] font-light">
          
          {/* Intro paragraph */}
          <p className="font-serif text-xl sm:text-2xl text-beige leading-relaxed italic border-l-2 border-gold pl-6 py-1">
            Isma Ciriaco é um contrabaixista, compositor, produtor musical e educador brasileiro, radicado em Austin, Texas, nos Estados Unidos. Com mais de 35 anos de trajetória profissional, construiu uma carreira marcada pela versatilidade, criatividade e paixão pela música, desenvolvendo uma identidade musical que conecta as raízes brasileiras à sofisticação do jazz contemporâneo.
          </p>

          <p>
            Nascido em Duque de Caxias, no Rio de Janeiro, Isma iniciou sua jornada musical no Brasil, onde desenvolveu uma forte conexão com o samba, a bossa nova, a MPB e a riqueza rítmica da música brasileira. Ao longo dos anos, ampliou seu universo musical incorporando influências do jazz, fusion, funk, soul, R&amp;B e smooth jazz.
          </p>

          <p>
            Seu estilo no contrabaixo se destaca pelo groove marcante, sensibilidade melódica, improvisação e uma abordagem musical que valoriza tanto a técnica quanto a emoção.
          </p>

          {/* Subheading 1 */}
          <div className="pt-8 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Uma Trajetória Construída com Música e Grandes Encontros
            </h3>
          </div>

          <p>
            Durante sua carreira no Brasil, Isma participou de importantes projetos musicais, gravações, apresentações e produções, incluindo trabalhos no cenário da música gospel brasileira com artistas e grupos como Carlinhos Félix, Banda e Voz, Banda Kadosh e Marina de Oliveira.
          </p>

          <p>
            Sua formação musical inclui estudos de harmonia funcional, percepção musical e improvisação no CIGAN, no Rio de Janeiro, conhecimentos que contribuíram para o desenvolvimento de sua linguagem como instrumentista, arranjador e compositor.
          </p>

          <p>
            Ao longo de sua trajetória, também desenvolveu projetos autorais e instrumentais, incluindo a criação do grupo <em>Jazz em Três</em>, explorando novas possibilidades de interação entre o contrabaixo e diferentes formações musicais.
          </p>

          {/* Editorial Portrait Break */}
          <div className="py-8">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden border border-graphite bg-surface">
              <Image
                src="/media/about/isma-editorial-bw.jpg"
                alt="Isma Ciriaco em estúdio"
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                className="object-cover object-top filter grayscale contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 text-xs font-sans tracking-widest text-beige/60 uppercase">
                Estúdio & Ensaios • Trajetória Internacional
              </div>
            </div>
          </div>

          {/* Subheading 2 */}
          <div className="pt-4 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Do Brasil para os Estados Unidos
            </h3>
          </div>

          <p>
            A mudança para os Estados Unidos representou um novo capítulo em sua carreira.
          </p>

          <p>
            Estabelecido em Austin, Texas, cidade reconhecida internacionalmente por sua intensa cena musical, Isma passou a ampliar sua atuação como contrabaixista, produtor e artista independente, conectando músicos, culturas e diferentes estilos musicais.
          </p>

          <p>
            Nesse percurso, desenvolveu trabalhos e colaborações com músicos como Rique Pantoja, Michael Malone, Brannen Temple, Gabriel Santiago, Michael Longoria, Sander Pinheiro, Jake Lampe e outros profissionais da cena musical brasileira e norte-americana.
          </p>

          <p>
            Sua experiência inclui apresentações em espaços importantes da cena musical de Austin, como Elephant Room, Parker Jazz Club, Monk’s Jazz Club, Sahara Lounge, The Continental Club, Jupiter Supper Club, SXSW Festival entre outros palcos do Texas.
          </p>

          <p>
            Além de sua carreira como instrumentista, participa de projetos como Samb’Austin Band, BR TRIO, Line 3 Jazz e Soul da Bossa, contribuindo para a divulgação da música brasileira nos Estados Unidos.
          </p>

          {/* Subheading 3 */}
          <div className="pt-4 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Identidade Musical e Projetos Autorais
            </h3>
          </div>

          <p>
            Para Isma Ciriaco, o contrabaixo vai muito além de um instrumento de acompanhamento. É uma voz musical capaz de transmitir sentimentos, criar melodias e estabelecer uma conexão direta com o público.
          </p>

          <p>
            Sua abordagem combina a força rítmica do samba e do funk brasileiro com harmonias sofisticadas, improvisações expressivas e elementos do jazz contemporâneo.
          </p>

          <p>
            Essa identidade está presente em seu projeto autoral <em>Samba for the World</em>, uma proposta instrumental que celebra a diversidade musical brasileira e sua conexão com diferentes culturas.
          </p>

          <p>
            O projeto reúne influências de samba jazz, bossa nova, smooth jazz, fusion e música contemporânea, colocando o contrabaixo como protagonista de uma experiência musical envolvente.
          </p>

          {/* Subheading 4 */}
          <div className="pt-4 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Reconhecimento e Parcerias com Marcas Internacionais
            </h3>
          </div>

          <p>
            Sua trajetória como instrumentista também abriu portas para parcerias com empresas reconhecidas no mercado internacional de equipamentos musicais.
          </p>

          <p>
            Isma Ciriaco é artista endorser das marcas <strong>DR Strings</strong> e <strong>Aguilar Amplification</strong>, empresas ligadas ao desenvolvimento de cordas e sistemas profissionais de amplificação para contrabaixo.
          </p>

          <p>
            Essas parcerias representam uma importante conexão entre sua experiência profissional, sua identidade sonora e a indústria musical internacional.
          </p>

          {/* Subheading 5 */}
          <div className="pt-4 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Educação Musical e Novos Talentos
            </h3>
          </div>

          <p>
            Além dos palcos e estúdios, Isma dedica parte de sua trajetória ao ensino da música e ao compartilhamento de conhecimento.
          </p>

          <p>
            Como educador, desenvolve conteúdos, métodos e projetos voltados à formação de contrabaixistas, abordando técnica instrumental, harmonia, percepção, improvisação, groove e desenvolvimento da musicalidade.
          </p>

          <p>
            Entre suas iniciativas está o “Baixo Brazil One”, projeto educacional criado para tornar o aprendizado do contrabaixo mais acessível, prático e musical.
          </p>

          <p>
            Sua visão também se estende a iniciativas culturais que valorizam a educação artística, a inclusão social e a transformação de vidas por meio da música.
          </p>

          {/* Subheading 6 */}
          <div className="pt-4 pb-2">
            <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wide border-b border-graphite/60 pb-3">
              Música sem Fronteiras
            </h3>
          </div>

          <p>
            Com uma carreira construída entre o Brasil e os Estados Unidos, Isma Ciriaco continua desenvolvendo novos projetos, gravações, apresentações e colaborações internacionais.
          </p>

          <p>
            Seu trabalho carrega uma missão: levar a riqueza da música brasileira a novos públicos, preservar suas raízes culturais e mostrar que o groove é uma linguagem capaz de conectar pessoas em qualquer parte do mundo.
          </p>

        </div>

        {/* Section 03 — Final Artist Statement Quotation */}
        <div className="mt-24 pt-16 border-t border-graphite text-center max-w-2xl mx-auto">
          <blockquote className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-beige leading-relaxed mb-8">
            &ldquo;Minha música nasce das minhas raízes brasileiras, mas meu desejo é que ela alcance pessoas de todas as culturas. O contrabaixo é a minha voz, e o groove é a maneira que encontrei de contar minha história.&rdquo;
          </blockquote>

          <div className="space-y-1">
            <span className="font-serif text-lg text-gold tracking-wide block">
              Isma Ciriaco
            </span>
            <span className="font-sans text-xs tracking-widest text-beige/50 uppercase block">
              Brazilian Bass Player • Austin, Texas, USA
            </span>
          </div>

          <div className="mt-10 pt-8 border-t border-graphite/50 text-xs font-sans text-beige/60 space-y-2">
            <p>
              <strong className="text-gold">Atuação profissional:</strong> Shows, festivais, gravações, produções musicais, workshops, masterclasses, colaborações artísticas e parcerias com marcas.
            </p>
            <p>
              <strong className="text-gold">Endorsements:</strong> DR Strings | Aguilar Amplification
            </p>
          </div>
        </div>

      </div>
    </article>
  );
};
