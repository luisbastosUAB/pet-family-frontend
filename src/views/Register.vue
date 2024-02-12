<template>
  <b-container fluid>
    <section class="page-section">
      <HeaderPage title="Registo" />

      <!--FORM--><b-row>
        <b-col cols="4"></b-col>
        <b-col class="text-center" cols="4">
          <form @submit.prevent="register">
            <div class="form-group">
              <input
                v-model="name"
                type="text"
                value="ricardo queiros"
                class="form-control form-control-lg"
                id="txtName"
                placeholder="Nome"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="birth_date"
                type="text"
                value="2019-11-11"
                onmouseenter="(this.type='date')"
                onmouseleave="(this.type='text')"
                class="form-control form-control-lg"
                id="txtBirthDate"
                placeholder="Data de nascimento"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="location.city"
                type="text"
                class="form-control form-control-lg"
                id="txtCity"
                placeholder="Cidade"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="auth.username"
                type="text"
                value="ricardo.queiros@gmail.com"
                class="form-control form-control-lg"
                id="txtEmail"
                placeholder="Utilizador"
                required
              />
            </div>
            <div class="form-group">
              <input
                v-model="auth.password"
                type="password"
                class="form-control form-control-lg"
                id="txtPassword"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                id="txtConfirmPassword"
                placeholder="Confirmar password"
              />
            </div>
            <button type="submit" class="btn btn-success mr-2">
              <i class="fas fa-file-signature"></i> REGISTAR
            </button>
            <router-link
              :to="{ name: 'login' }"
              tag="button"
              class="btn btn-danger"
            >
              <i class="fas fa-window-close"></i> CANCELAR</router-link
            >
          </form>
        </b-col>
        <b-col cols="4"></b-col>
      </b-row>
    </section>

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
import { AUTH_REGISTER } from "@/store/auth/auth.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "../router";
import { mapGetters } from "vuex";

export default {
  name: "Register",
  components: {
    HeaderPage
  },
  data: function() {
    return {
      location: { city: "", district: "", country: "" },
      auth: { username: "", password: "" },
      gamification: { points: 0, quiz: 0 },
      active: true,
      name: "",
      type: "user",
      birth_date: "",
      description: ""
    };
  },
  computed: {
    ...mapGetters("auth", ["getMessage"])
  },
  methods: {
    register() {
      if (
        document.querySelector("#txtPassword").value !==
        document.querySelector("#txtConfirmPassword").value
      ) {
        this.$alert(
          "Campos password não coincidem",
          "Erro de validação do formulário",
          "error"
        );
      } else {
        this.$store
          .dispatch(`auth/${AUTH_REGISTER}`, this.$data)
          .then(() => {
            this.$alert(this.getMessage, "Registo", "success");
            router.push({ name: "home" });
          })
          .catch(err => {
            this.$alert(err.message, "Erro", "error");
          });
      }
    }
  }
};
</script>
