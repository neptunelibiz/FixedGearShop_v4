<template>
  <footer class="l-footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2>
            <img class="l-footer__logo"
            :src="require('@/assets/images/WheelTalk_Logo.png')" alt="">
          </h2>
          <p>資料、圖片來源皆來自網路，僅用來做為學習用途。</p>
        </div>
        <div class="col-md-6 l-footer__menu">
          <h5 class="text-right">友站連結</h5>
          <ul class="nav justify-content-end">
            <li>
              <a href="https://www.facebook.com/WheelTalkFixed/" class="h2 mr-3"
              target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/Slumworm/" class="h2 mr-3"
              target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Slumworm" class="h2 mr-3"
              target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="https://github.com/Albertnotes" class="h2"
              target="_blank">
                <i class="fab fa-github"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
