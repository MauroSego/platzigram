var yo = require('yo-yo');

module.export = yo`<div class="container">
      <div class="row">
        <div class="col s10 push-s1">
          <div class="row">
            <div class="col m5 hide-on-small-only">
              <img class="iphone" src="iphone.png" alt="">
            </div>
            <div class="col s12 m7">
              <div class="row">
                <div class="sign-up">
                  <h1 class="platzigram">Photogram</h1>
                  <form class="signup-form">
                    <h2>Regístrate para ver fotos de tus amigos</h2>
                    <div class="section">
                      <a href="" class="btn btn-fb hide-on-small-only">Iniciar sesión con Facebook</a>
                      <a href="" class="btn btn-fb hide-on-med-and-up">Iniciar sesión</a>
                    </div>
                    <div class="divider"></div>
                    <div class="section">
                      <input type="email" name="email" placeholder="Correo electrónico">
                      <input type="text" name="name" placeholder="Nombre completo">
                      <input type="text" name="username" placeholder="Nombre de usuario">
                      <input type="password" name="password" placeholder="Contraseña">
                      <button class="btn btn-signup waves-effect waves-light" type="submit">Registrate</button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="row">
                <div class="login-box">
                  ¿Ya tenes cuenta? <a href="/signin">Entrar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`