<template>
    <div id="sticky-header" class="menu-area">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12">
                    <div class="mobile-nav-toggler"><i class="fas fa-bars"></i></div>
                    <div class="menu-wrap">
                        <nav class="menu-nav show">
                            <div class="logo"><a href="/"><img src="../assets/img/logo/logo.png" alt=""></a></div>
                            <div class="navbar-wrap main-menu d-none d-lg-flex">
                                <ul class="navigation">
                                    <li class="active"><router-link active-class="active" to="/">Home</router-link></li>
                                     <li><router-link active-class="active" to="/doglist">Lista de cães</router-link></li>
                                    <li><router-link active-class="active" to="/contactos">Contactos</router-link></li>
                                </ul>
                            </div>
                            <div class="header-action d-none d-md-block">
                                <ul>
                                    <div v-if="!isUserLoggedIn">
                                        <li class="header-btn"><a href="/login" class="btn">Entrar<img src="../assets/img/icon/w_usericon.png" alt=""></a></li>
                                    </div>
                                    <div v-else>
                                        <div v-if="getUserType === 'user'">

                                            <a href="" class="read-more">Bemvindo, {{ getProfileName }}  <img
                                                class="avatar"
                                                :src="
                                                    require(`@/assets/avatars/sapo.png`)
                                                "
                                                :title="getProfileName"
                                                /></a>

                                        </div>
                                        <div v-else>
                                            <a href="" class="read-more">Painel de administração</a>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <!-- Mobile Menu  -->
                    <div class="mobile-menu">
                        <nav class="menu-box">
                            <div class="close-btn"><i class="fas fa-times"></i></div>
                            <div class="nav-logo"><a href="/"><img src="../assets/img/logo/logo.png" alt="" title=""></a>
                            </div>
                            <div class="menu-outer">
                                <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header-->
                            </div>
                            <div class="social-links">
                                <ul class="clearfix">
                                    <li><a href="#"><span class="fab fa-twitter"></span></a></li>
                                    <li><a href="#"><span class="fab fa-facebook-square"></span></a></li>
                                    <li><a href="#"><span class="fab fa-pinterest-p"></span></a></li>
                                    <li><a href="#"><span class="fab fa-instagram"></span></a></li>
                                    <li><a href="#"><span class="fab fa-youtube"></span></a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div class="menu-backdrop"></div>
                    <!-- End Mobile Menu -->
                </div>
            </div>
        </div>
        <div class="header-shape" data-background="../assets/img/bg/header_shape.png"></div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUserLevelByPoints"]),
    ...mapGetters("auth", [
      "isUserLoggedIn",
      "getProfileName",
      "getUserType",
      "getProfile"
    ])
  }
};
</script>
