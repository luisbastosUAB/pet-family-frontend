<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Sponsor" />

      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="update">
            <div class="form-group" style="text-align:center">
							 
							 <img src="../../assets/default_logo.png" alt="Stack Overflow logo and icons and such" style="max-width:200px; display: block;margin-left: auto;margin-right: auto;width: 50%;">
							
							 <button type="" class="btn btn-outline-success btn-lg mr-2"><i class="fas fa-upload" style=" "></i>
								UPLOAD LOGO
							</button>
						</div>

						<div class=" form-group container-fluid" style="padding-top: 25px">

							<div class="col-md-12">
								<div class="form-group">
                  <input 
                    v-model="sponsor.name"
                    type="text" 
                    id="txtName" 
                    placeholder="Nome" 
                    required="required" 
                    class="form-control form-control-lg"
                    />
                </div>
							</div>
							
							<div class="container">
							  <div class="row">
								<div class="col-md-6">
								  <input 
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtTelefone" 
                  placeholder="Telefone"
                  />
								</div>
								<div class="col-md-6">
								  <input 
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtNIF" 
                  placeholder="NIF"
                  />
								</div>
							  </div>
							</div>
						</div>
						
						<div class="container" style="padding-top: 35px" >
							<div class="col-md-12">
								<div class="form-group">
                  <input 
                  type="text" 
                  id="txtMorada" 
                  placeholder="Morada" 
                  required="required"
                  class="form-control form-control-lg"
                  />
                </div>
							</div>
							
							<div class="container">
							  <div class="row">
								<div class="col-md-6">
								  <input type="text" 
                  class="form-control form-control-lg" 
                  id="txtcodPostal" 
                  placeholder="Código Postal"
                  />
								</div>
								<div class="col-md-6">
								  <input type="text" 
                  class="form-control 
                  form-control-lg" 
                  id="txtCidade" 
                  placeholder="Cidade"
                  />
								</div>
							  </div>
							</div>
							
						</div>
						
						<div class="container" style="padding-top:35px;text-align:center" >
							<div class="col-md-12">
								<div class="form-group">
                  <input
                  v-model="sponsor.valor"
                  type="number"
                  id="txtValor" 
                  placeholder="Fundos(€)" 
                  required="required" 
                  class="form-control form-control-lg">
                </div>
							</div>
							<div class="col-md-12">
								<div class="form-group">
									<select 
                    v-model="sponsor.animal"
                    id="sltAnimal" 
                    class="form-control form-control-lg"
                    required
                  >
										<option value="0">SELECIONAR ANIMAL</option>
										<option value="Borboleta">Borboleta</option>
										<option value="Canário">Canário</option>
										<option value="Esquilo">Esquilo</option>
										<option value="Faisão">Faisão</option>
										<option value="Cão">Cão</option>
										<option value="Gato">Gato</option>
										<option value="Lagartixa">Lagartixa</option>
										<option value="Macaco">Macaco</option>
										<option value="Orangotango">Orangotango</option>
										<option value="Papagaio">Papagaio</option>
										<option value="Vaca">Vaca</option>
										
									</select>
								</div>
							</div>
						</div>
						<div style="text-align:center" >
				
						<button type="submit" class="btn btn-outline-success btn-lg mr-2"><i class="fas fa-plus-square"></i>
              ATUALIZAR</button>
								  <router-link
              :to="{ name: 'sponsors' }"
              tag="button"
              class="btn btn-outline-danger"
              ><i class="fas fa-window-close"></i> CANCELAR</router-link
            >				
						
						</div>
          </form>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
import { EDIT_SPONSOR } from "@/store/sponsors/sponsor.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditSponsor",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      sponsor: {}
    };
  },
  computed: {
    ...mapGetters("sponsor", ["getSponsorById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`sponsor/${EDIT_SPONSOR}`, this.$data.sponsor).then(
        () => {
          this.$alert(this.getMessage, "Sponsor atualizado!", "success");
          router.push({ name: "sponsors" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.sponsor = this.getSponsorById(this.$route.params.sponsorId);
  }
};
</script>
