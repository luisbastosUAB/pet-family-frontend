<template>

  <b-container fluid>

        <!-- breadcrumb-area -->
        <section class="breadcrumb-area breadcrumb-bg" :style="{'background-image': `url(${require('@/assets/img/bg/breadcrumb_bg.jpg')})`}">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="breadcrumb-content">
                                <h2 class="title">Contacto-nos</h2>
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><router-link to="/">Home</router-link></li>
                                        <li class="breadcrumb-item active" aria-current="page">Contactos</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- breadcrumb-area-end -->

               <!-- contact-area -->
            <section class="contact-area pt-110 pb-110">
                <div class="container">
                    <div class="container-inner-wrap">
                        <div class="row justify-content-center justify-content-lg-between">
                            <div class="col-lg-6 col-md-8 order-2 order-lg-0">
                                <div class="contact-title mb-20">
                                    <h5 class="sub-title">Contacta-nos</h5>
                                    <h2 class="title">Como podemos ajudar?<span>.</span></h2>
                                </div>
                                <div class="contact-wrap-content">
                                    <p>Adoptar um cão é um compromisso para muitos anos. Antes de tomar essa decisão, aconselhamos a leitura do nosso Guia de Adopção de Cães</p>
                                    <form action="#" class="contact-form">
                                        <div class="form-grp">
                                            <label for="name">Nome <span>*</span></label>
                                            <input type="text" id="name" placeholder="Nome">
                                        </div>
                                        <div class="form-grp">
                                            <label for="email">Email <span>*</span></label>
                                            <input type="text" id="email" placeholder="">
                                        </div>
                                        <div class="form-grp">
                                            <label for="message">Mensagem <span>*</span></label>
                                            <textarea name="message" id="message" placeholder="Mensagem..."></textarea>
                                        </div>
                                        <div class="form-grp checkbox-grp">
                                            <input type="checkbox" id="checkbox">
                                            <label for="checkbox">Não mostrar o endereço de email</label>
                                        </div>
                                        <button type="button" class="btn rounded-btn">Enviar</button>
                                    </form>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-8">
                                <div class="contact-info-wrap">
                                    <div class="contact-img">
                                        <img src="../assets/img/images/contact_img.png" alt="">
                                    </div>
                                    <div class="contact-info-list">
                                        <ul>
                                            <li>
                                                <div class="icon"><i class="fas fa-map-marker-alt"></i></div>
                                                <div class="content">
                                                    <p>W84 New Park Lan, New York, NY 4586 United States</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon"><i class="fas fa-phone-alt"></i></div>
                                                <div class="content">
                                                    <p>+9 (256) 254 9568</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div class="icon"><i class="fas fa-envelope-open"></i></div>
                                                <div class="content">
                                                    <p>Contact@ info.com</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="contact-social">
                                        <ul>
                                            <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                            <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- contact-area-end -->

            <footer>
            <div class="footer-top-area footer-bg">
                <div class="container">
                    <div class="row justify-content-between">
                        <div class="col-3">
                            <div class="footer-widget">
                                <div class="f-logo">
                                    <a href="index.html"><img src="../assets/../assets/img/logo/logo.png" alt=""></a>
                                </div>
                                <div class="footer-text">
                                    <p>O nosso canil é uma instituição sem fins lucrativos. Vivemos da ajuda de todos!Faça parte desta familia!</p>
                                </div>
                                <div class="footer-contact">
                                    <div class="icon"><i class="fas fa-headphones"></i></div>
                                    <div class="content">
                                        <h4 class="title"><a href="tel:0987654321">000-000-0000</a></h4>
                                        <span>Telefonar agora</span>
                                    </div>
                                </div>
                                <div class="footer-social">
                                    <ul>
                                        <li><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i class="fab fa-youtube"></i></a></li>
                                        <li><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="footer-widget">
                                <h4 class="fw-title">Our Policies</h4>
                                <div class="fw-link">
                                    <ul>
                                        <li><a href="contact.html">Privacy Policy</a></li>
                                        <li><a href="contact.html">Terms and Conditions</a></li>
                                        <li><a href="contact.html">Editorial Policy</a></li>
                                        <li><a href="contact.html">Return Policy</a></li>
                                        <li><a href="contact.html">IP Policy</a></li>
                                        <li><a href="contact.html">Grievance Redressal Policy</a></li>
                                        <li><a href="contact.html">Terms and Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-2">
                            <div class="footer-widget">
                                <h4 class="fw-title">Nosso serviços</h4>
                                <div class="fw-link">
                                    <ul>
                                        <li><a href="breeder.html">Our Breeder</a></li>
                                        <li><a href="adoption.html">Our Adoption</a></li>
                                        <li><a href="contact.html">Editorial Policy</a></li>
                                        <li><a href="contact.html">Return Policy</a></li>
                                        <li><a href="contact.html">Grievance Policy</a></li>
                                        <li><a href="contact.html">Redressal Policy</a></li>
                                        <li><a href="contact.html">Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="footer-widget">
                                <h4 class="fw-title">Instagram</h4>
                                <div class="fw-insta">
                                    <ul>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img01.png" alt=""></a></li>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img02.png" alt=""></a></li>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img03.png" alt=""></a></li>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img04.png" alt=""></a></li>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img05.png" alt=""></a></li>
                                        <li><a href="#"><img src="../assets/../assets/img/images/insta_img06.png" alt=""></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shape"><img src="../assets/../assets/img/images/footer_shape01.png" alt=""></div>
                <div class="footer-shape shape-two"><img src="../assets/../assets/img/images/footer_shape02.png" alt=""></div>
            </div>
        </footer>

    <!-- Copyright Section -->
    <section class="copyright py-4 text-center text-white">
      <div class="container">
        <small>Copyright &copy;Programação Web Avançada 2024</small>
      </div>
    </section>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes) -->
    <div class="scroll-to-top d-lg-none position-fixed">
      <a
        class="js-scroll-trigger d-block text-center text-white rounded"
        href="#page-top"
      >
        <i class="fa fa-chevron-up"></i>
      </a>
    </div>
  </b-container>
</template>

<script>
/*import { FETCH_ANIMALS } from "@/store/animals/animal.constants";
import { FETCH_USERS } from "@/store/users/user.constants";
import { SEND_EMAIL } from "@/store/constants";
import router from "@/router";
import { mapGetters } from "vuex";
*/
export default {
  name: "Home",
 /* data: function() {
    return {
      name: "Luis",
      email: "ricardo.queiros@gmail.com",
      subject: "teste",
      message: "isto é um teste!"
    };
  },
  computed: {
    ...mapGetters(["getMessage", "auth/isUserLoggedIn"])
  },
  methods: {
    showRanking() {
      router.push({ name: "ranking" });
    },
    send() {
      this.$store
        .dispatch(`${SEND_EMAIL}`, this.$data)
        .then(
          () => this.$alert(this.getMessage, "E-mail enviado!", "success"),
          err => this.$alert(`${err.message}`, "Erro", "error")
        );
    }
  },
  created() {
    if (this.isUserLoggedIn) {
      //this.$store.dispatch(`animal/${FETCH_ANIMALS}`);
      this.$store.dispatch(`user/${FETCH_USERS}`);
    }
  }*/
};
</script>
