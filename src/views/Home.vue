<template>
  <b-container fluid>
    <!-- slider-area -->
    <section class="slider-area slider-style-two">
      <div class="slider-active">
        <div
          class="single-slider slider-bg d-flex align-items-center"
          :style="{
            'background-image': `url(${require('@/assets/img/slider/s_slider_bg01.jpg')})`
          }"
        >
          <div class="container custom-container">
            <div class="row">
              <div class="col-xl-5 col-lg-7 col-md-10">
                <div class="slider-content">
                  <div class="slider-title">
                    <h2
                      class="title"
                      data-animation="fadeInUpBig"
                      data-delay=".2s"
                      data-duration="1.2s"
                    >
                      O melhor amigo <span>com</span> brincadeiras felizes
                    </h2>
                  </div>
                  <div class="slider-desc">
                    <p
                      class="desc"
                      data-animation="fadeInUpBig"
                      data-delay=".4s"
                      data-duration="1.2s"
                    >
                      Se você está a procura um animal para adoção responsável,
                      existem várias opções disponíveis.
                    </p>
                  </div>
                  <a
                    href="dog-list.html"
                    class="btn"
                    data-animation="fadeInUpBig"
                    data-delay=".6s"
                    data-duration="1.2s"
                    >Ver mais
                    <img src="../assets/img/icon/w_pawprint.png" alt=""
                  /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- slider-area-end -->
    <!-- find-area -->

    <div class="find-area">
      <div class="container custom-container">
        <div class="row">
          <div class="col-12">
            <form action="#">
              <div class="find-wrap">
                <div class="location">
                  <i class="flaticon-location"></i>
                  <input type="text" value="Pet-family" />
                </div>
                <div class="find-category">
                  <ul>
                    <li>
                      <a href="shop.html"
                        ><i class="flaticon-dog"></i> Adopte um cão</a
                      >
                    </li>
                    <li>
                      <a href="shop.html"
                        ><i class="flaticon-happy"></i> um amigo</a
                      >
                    </li>
                    <li>
                      <a href="shop.html"
                        ><i class="flaticon-dove"></i> vários amigos</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="other-find">
                  <div class="dropdown">
                    <button
                      class="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      uma familia
                    </button>
                    <!--<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a class="dropdown-item" href="shop.html">Find Your Dog</a>
                                                <a class="dropdown-item" href="shop.html">Find Your Cat</a>
                                                <a class="dropdown-item" href="shop.html">Find Your Birds</a>
                                            </div>-->
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- find-area-end -->

    <!-- breeder-area -->
    <section class="breeder-area breeder-bg">
      <div class="container">
        <div class="row align-items-center justify-content-center">
          <div class="col-xl-4 col-lg-8">
            <div class="adoption-content">
              <h2 class="title">
                Trabalhar para <br />
                os nossos <span>cães</span> é uma satisfação!
              </h2>
              <p>
                O nosso canil é uma instituição sem fins lucrativos. Vivemos da
                ajuda de todos!Faça parte desta familia!
              </p>
              <a href="breeder.html" class="btn"
                >Quero ajudar!
                <img src="../assets/img/icon/w_pawprint.png" alt=""
              /></a>
            </div>
          </div>
          <div class="col-xl-8 col-lg-9 col-md-12 col-sm-9">
            <div class="breeder-info-wrap">
              <div class="row no-gutters justify-content-center">
                <div class="col-md-6">
                  <div
                    class="breed-services-info"
                    :style="{
                      'background-image': `url(${require('@/assets/img/images/breeder_img01.jpg')})`
                    }"
                  >
                    <div class="breeder-item">
                      <!--<a href="breeder-details.html">
                                                    <img src="../assets/img/images/breeder_img01.jpg" alt="">
                                                </a>-->
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div
                    class="breed-services-info"
                    :style="{
                      'background-image': `url(${require('@/assets/img/bg/breed_services_bg.jpg')})`
                    }"
                  >
                    <h5 class="sub-title">A procura de uma familia</h5>
                    <h3 class="title">Prontos para brincar?</h3>
                    <p>
                      Brincar é muito importante para os cães, pois ajuda a
                      gastar energia, evita a ansiedade e o tédio, além de
                      manter o cérebro do animal sempre ativo.
                    </p>
                    <a href="dog-list.html" class="btn"
                      >Mais cães
                      <img src="../assets/img/icon/w_pawprint.png" alt=""
                    /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="counter-area mt-70">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-item">
                <h2 class="count">
                  <span class="odometer" data-count="73"></span>80%
                </h2>
                <p>Cães adoptados</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-item">
                <h2 class="count">
                  <span class="odometer" data-count="259"></span>+320
                </h2>
                <p>Cães adoptados</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-item">
                <h2 class="count">
                  <span class="odometer" data-count="39"></span>10
                </h2>
                <p>Pessoas na equipa</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6">
              <div class="counter-item">
                <h2 class="count">
                  <span class="odometer" data-count="45"></span>4+
                </h2>
                <p>Anos a ajudar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- breeder-area-end -->
    <!-- adoption-area -->
    <section class="adoption-area-two pt-110 pb-110">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-65">
              <div class="section-icon">
                <img src="../assets/img/icon/pawprint.png" alt="" />
              </div>
              <h5 class="sub-title">Procurar cães</h5>
              <h2 class="title">Cachoros a espera de serem adoptados</h2>
              <p>
                Adoptar um cão é um compromisso para muitos anos. Antes de tomar
                essa decisão, aconselhamos a leitura do nosso Guia de Adopção de
                Cães
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container custom-container">
        <div class="row adopt-active">
          <div class="col-xl-3">
            <div class="adoption-item">
              <div class="adopt-thumb">
                <a href="breeder-details.html"
                  ><img src="../assets/img/images/adop_img01.png" alt=""
                /></a>
                <span class="status">Grátis</span>
              </div>
              <div class="adopt-content">
                <div class="adopt-date">
                  <i class="far fa-calendar-alt"></i> Nascimento : 2021
                </div>
                <h3 class="title">
                  <a href="breeder-details.html">Golden Retriever</a>
                </h3>
                <p>
                  O Golden Retriever é um cão de armas de médio e grande porte
                  que foi criado.
                </p>
                <a href="breeder-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="adoption-item">
              <div class="adopt-thumb">
                <a href="breeder-details.html"
                  ><img src="../assets/img/images/adop_img02.png" alt=""
                /></a>
                <span class="status">Grátis</span>
              </div>
              <div class="adopt-content">
                <div class="adopt-date">
                  <i class="far fa-calendar-alt"></i> Nascimento : 2021
                </div>
                <h3 class="title">
                  <a href="breeder-details.html">German Sharped</a>
                </h3>
                <p>O Pastor Alemão é uma raça de médio a grande porte.</p>
                <a href="breeder-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="adoption-item">
              <div class="adopt-thumb">
                <a href="breeder-details.html"
                  ><img src="../assets/img/images/adop_img03.png" alt=""
                /></a>
                <span class="status">Grátis</span>
              </div>
              <div class="adopt-content">
                <div class="adopt-date">
                  <i class="far fa-calendar-alt"></i> Nascimento : 2021
                </div>
                <h3 class="title">
                  <a href="breeder-details.html">Siberian Husky</a>
                </h3>
                <p>
                  O Husky Siberiano é uma raça de cães de trenó de trabalho de
                  tamanho médio.
                </p>
                <a href="breeder-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-xl-3">
            <div class="adoption-item">
              <div class="adopt-thumb">
                <a href="breeder-details.html"
                  ><img src="../assets/img/images/adop_img04.png" alt=""
                /></a>
                <span class="status">Grátis</span>
              </div>
              <div class="adopt-content">
                <div class="adopt-date">
                  <i class="far fa-calendar-alt"></i> Nascimento : 2021
                </div>
                <h3 class="title">
                  <a href="breeder-details.html">French Bulldog</a>
                </h3>
                <p>
                  O Bulldog francês é uma raça de cão doméstico, criado para ser
                  companheiro..
                </p>
                <a href="breeder-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <!--<div class="col-xl-3">
                            <div class="adoption-item">
                                <div class="adopt-thumb">
                                    <a href="breeder-details.html"><img src="../assets/img/images/adop_img05.png" alt=""></a>
                                    <span class="status">Free</span>
                                </div>
                                <div class="adopt-content">
                                    <div class="adopt-date"><i class="far fa-calendar-alt"></i> Nascimento : 2021</div>
                                    <h3 class="title"><a href="breeder-details.html">Siberian Husky</a></h3>
                                    <p>French Bulldog is a breed of domestic dog, bred to be companion.</p>
                                    <a href="breeder-details.html" class="read-more">Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""></a>
                                </div>
                            </div>
                        </div>-->
        </div>
      </div>
    </section>
    <!-- adoption-area-end -->

    <!-- blog-area -->
    <section class="blog-area pb-60">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-9">
            <div class="section-title text-center mb-65">
              <div class="section-icon">
                <img src="../assets/img/icon/pawprint.png" alt="" />
              </div>
              <h5 class="sub-title">O nosso canil</h5>
              <h2 class="title">As últimas noticias</h2>
              <p>
                É mportante lembrar que a adoção de um animal deve ser um ato
                responsável. É novo dever cuidar dele, dar amor.
              </p>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-lg-4 col-md-6">
            <div class="blog-post-item mb-50">
              <div class="blog-post-thumb">
                <a href="blog-details.html"
                  ><img src="../assets/img/blog/blog_post_thumb01.jpg" alt=""
                /></a>
                <div class="blog-post-tag">
                  <a href="#"><i class="flaticon-bookmark-1"></i>Ajuda</a>
                </div>
              </div>
              <div class="blog-post-content">
                <div class="blog-post-meta">
                  <ul>
                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                    <li><i class="far fa-bell"></i> Mar 10, 2021</li>
                  </ul>
                </div>
                <h3 class="title">
                  <a href="blog-details.html">Trabalhar com a adoção de cães</a>
                </h3>
                <p>
                  É mportante lembrar que a adoção de um animal deve ser um ato
                  responsável.
                </p>
                <a href="blog-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="blog-post-item mb-50">
              <div class="blog-post-thumb">
                <a href="blog-details.html"
                  ><img src="../assets/img/blog/blog_post_thumb02.jpg" alt=""
                /></a>
                <div class="blog-post-tag">
                  <a href="#"
                    ><i class="flaticon-bookmark-1"></i>Conhecimento</a
                  >
                </div>
              </div>
              <div class="blog-post-content">
                <div class="blog-post-meta">
                  <ul>
                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                    <li><i class="far fa-bell"></i> Mar 12, 2021</li>
                  </ul>
                </div>
                <h3 class="title">
                  <a href="blog-details.html"
                    >Dez raças de cães desconhecidas</a
                  >
                </h3>
                <p>Uma das raças de cachorros pouco conhecidas é o Puli...</p>
                <a href="blog-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="blog-post-item mb-50">
              <div class="blog-post-thumb">
                <a href="blog-details.html"
                  ><img src="../assets/img/blog/blog_post_thumb03.jpg" alt=""
                /></a>
                <div class="blog-post-tag">
                  <a href="#"><i class="flaticon-bookmark-1"></i>Sentimos</a>
                </div>
              </div>
              <div class="blog-post-content">
                <div class="blog-post-meta">
                  <ul>
                    <li><i class="far fa-user"></i><a href="#">Admin</a></li>
                    <li><i class="far fa-bell"></i> Mar 12, 2021</li>
                  </ul>
                </div>
                <h3 class="title">
                  <a href="blog-details.html">Tristeza nos cães</a>
                </h3>
                <p>
                  Apesar dos cães apresentarem sinais de tristeza semelhantes
                  aos dos seres humanos...
                </p>
                <a href="blog-details.html" class="read-more"
                  >Ler Mais <img src="../assets/img/icon/pawprint.png" alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- blog-area-end -->

    <!-- newsletter-area -->
    <div class="newsletter-area pb-110">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="newsletter-wrap">
              <div class="newsletter-content">
                <h2 class="title">Newsletter</h2>
                <p><span>Para receber as últimas novidades</span></p>
              </div>
              <div class="newsletter-form">
                <form action="#">
                  <input type="email" placeholder="Inserir o email..." />
                  <button type="submit" class="btn">Subscrever</button>
                </form>
              </div>
              <div class="newsletter-shape">
                <img src="../assets/img/images/newsletter_shape01.png" alt="" />
              </div>
              <div class="newsletter-shape shape-two">
                <img src="../assets/img/images/newsletter_shape02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- newsletter-area-end -->

    <footer>
      <div class="footer-top-area footer-bg">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-3">
              <div class="footer-widget">
                <div class="f-logo">
                  <a href="index.html"
                    ><img src="../assets/img/logo/logo.png" alt=""
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
                        ><img src="../assets/img/images/insta_img01.png" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="../assets/img/images/insta_img02.png" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="../assets/img/images/insta_img03.png" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="../assets/img/images/insta_img04.png" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="../assets/img/images/insta_img05.png" alt=""
                      /></a>
                    </li>
                    <li>
                      <a href="#"
                        ><img src="../assets/img/images/insta_img06.png" alt=""
                      /></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-shape">
          <img src="../assets/img/images/footer_shape01.png" alt="" />
        </div>
        <div class="footer-shape shape-two">
          <img src="../assets/img/images/footer_shape02.png" alt="" />
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
/*import { FETCH_ANIMALS } from "@/store/animals/animal.constants";
import { FETCH_USERS } from "@/store/users/user.constants";
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
