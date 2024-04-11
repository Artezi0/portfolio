function App() {
  document.title = "Ezi - " + new Date().getFullYear() + " Porfotlio"

  return (
    <body>
      <main>
        <section className="intro">
          <h1 className="intro_heading">Hi! Im Ezi</h1>
          <p className="intro_subheading">I'm a <b>senior high school student,</b>  dreaming up ideas and making them come true is where my passion lies.
          <br />
          You can find me on :
          </p>
          <ul className="intro_socials">
            <li className="intro_socials-links btn"><a href="https://www.instagram.com/artezio_/" target="_blank">Instagram</a></li>
            <li className="intro_socials-links btn"><a href="https://dribbble.com/Artezio" target="_blank">Dribbble</a></li>
            <li className="intro_socials-links btn"><a href="https://github.com/Artezi0" target="_blank">Github</a></li>
            <li className="intro_socials-links btn"><a href="https://www.codewars.com/users/Artezi0" target="_blank">Codewars</a></li>
            <li className="intro_socials-links btn"><a href="mailto:rayyansuwarna@gmail.com">Email</a></li>
          </ul>
          <p className="intro_desc">
            I create website and also do other programming stuff. I'm interested on <b>generative-art, interactivity experiments, and Artificial Intelegence.</b>   
          </p>
          <p className="intro_desc">
            I have master &nbsp;
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/html5" alt="html" />
              HTML
            </span>,
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/sass" alt="scss" />
              SCSS
            </span>,
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/javascript" alt="javascript" />
              Javascript
            </span>,
            
            and quite a lot experience in &nbsp;
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/python" alt="python" />
              Python
            </span>,
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/c++" alt="c++" />
              C++
            </span>,
            <span className="btn">
              <img className="btn_img" height={13} src="https://cdn.simpleicons.org/postgresql" alt="postgress" />
              PostGress SQL
            </span>
          </p>
          <p className="intro_desc">Beside of that, I enjoy a lot doing photography and graphic design. Here are my project in the past.</p>
        </section>
        <section></section>
        <footer>
          <small className="footer">CC BY-NC-SA 4.0 2021-PRESENT ©   Ezi
          </small>
        </footer>
      </main>
    </body>
  )
}

export default App
