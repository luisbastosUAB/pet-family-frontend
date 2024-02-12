<template>
  <b-container fluid>
    <!-- breadcrumb-area -->
    <section
      class="breadcrumb-area breadcrumb-bg"
      :style="{
        'background-image': `url(${require('@/assets/img/bg/breadcrumb_bg.jpg')})`
      }"
    >
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumb-content">
              <h2 class="title">Lista de cães</h2>
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Dog List
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breadcrumb-area-end -->
    <!-- adoption-shop-area -->
    <section class="adoption-shop-area">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-65">
              <div class="section-icon">
                <img src="../assets/img/icon/pawprint.png" alt="" />
              </div>
              <h5 class="sub-title">Conhece os nossos cães</h5>
              <h2 class="title">Cães em lista para adoção</h2>
              <p>
                Adoptar um cão é um compromisso para muitos anos. Antes de tomar
                essa decisão, aconselhamos a leitura do nosso Guia de Adopção de
                Cães
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb01.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title">
                  <a href="shop-details.html">Mister Tartosh</a>
                </h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">Siberian Husky</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2021
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>Grátis</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb02.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title"><a href="shop-details.html">Charlie</a></h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">Golden Retriever</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2020
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>$30</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb03.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title">
                  <a href="shop-details.html">Alessia Max</a>
                </h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">German Sherped</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2020
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>$29</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb04.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title"><a href="shop-details.html">Canadian</a></h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">German Sherped</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2021
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>$39</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb05.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title">
                  <a href="shop-details.html">Entertainment</a>
                </h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">Siberian Husky</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2021
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>Grátis</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="adoption-shop-item">
              <div class="adoption-shop-thumb">
                <img
                  src="../assets/img/product/adoption_shop_thumb06.jpg"
                  alt=""
                />
                <a href="shop-details.html" class="btn"
                  >Adoptar <img src="../assets/img/icon/w_pawprint.png" alt=""
                /></a>
              </div>
              <div class="adoption-shop-content">
                <h4 class="title"><a href="shop-details.html">Dangerous</a></h4>
                <div class="adoption-meta">
                  <ul>
                    <li>
                      <i class="fas fa-cog"></i><a href="#">Golden Retriever</a>
                    </li>
                    <li>
                      <i class="far fa-calendar-alt"></i> Nascimento : 2021
                    </li>
                  </ul>
                </div>
                <div class="adoption-rating">
                  <ul>
                    <li class="rating">
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                    </li>
                    <li class="price">Processo : <span>Grátis</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- adoption-shop-area-end -->
    <footer>
      <div class="footer-top-area footer-bg">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-3">
              <div class="footer-widget">
                <div class="f-logo">
                  <a href="index.html"
                    ><img src="../assets/../assets/img/logo/logo.png" alt=""
                  /></a>
                </div>
                <div class="footer-text">
                  <p>
                    O nosso canil é uma instituição sem fins lucrativos. Vivemos
                    da ajuda de todos!Faça parte desta familia!
                  </p>
                </div>
                <div class="footer-contact">
                  <div class="icon"><i class="fas fa-headphones"></i></div>
                  <div class="content">
                    <h4 class="title">
                      <a href="tel:0987654321">000-000-0000</a>
                    </h4>
                    <span>Telefonar agora</span>
                  </div>
                </div>
                <div class="footer-social">
                  <ul>
                    <li>
                      <a href="#"><i class="fab fa-facebook-f"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-twitter"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-youtube"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </li>
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
                    <li>
                      <a href="contact.html">Grievance Redressal Policy</a>
                    </li>
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
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img01.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img02.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img03.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img04.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img05.png"
                          alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img
                          src="../assets/../assets/img/images/insta_img06.png"
                          alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-shape">
          <img src="../assets/../assets/img/images/footer_shape01.png" alt="" />
        </div>
        <div class="footer-shape shape-two">
          <img src="../assets/../assets/img/images/footer_shape02.png" alt="" />
        </div>
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
//import { FETCH_DOGS } from "@/store/dogs/dogs.constants";
/*import { FETCH_USERS } from "@/store/users/user.constants";
import { SEND_EMAIL } from "@/store/constants";
import router from "@/router";
import { mapGetters } from "vuex";
*/
export default {
  name: "Home"
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
