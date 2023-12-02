<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Editar Expert" />

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
                    v-model="expert.name"
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
                  v-model="expert.telefone"
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtTelefone" 
                  placeholder="Telefone"
                  />
								</div>
								<div class="col-md-6">
								  <input 
                  v-model="expert.nif"
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
                  v-model="expert.morada"
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
								  <input 
                  v-model="expert.codPostal"
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtcodPostal" 
                  placeholder="Código Postal"
                  />
								</div>
								<div class="col-md-6">
								  <input 
                  v-model="expert.cidade"
                  type="text" 
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
                  v-model="expert.valor"
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
                    v-model="expert.especiliazacao"
                    id="sltEspecializacao" 
                    class="form-control form-control-lg"
                    required
                  >
										<option value="0">SELECIONAR ESPECIALIZACAO</option>
										<option value="Mamíferos">Mamíferos</option>
										<option value="Répteis">Répteis</option>
										<option value="Aves">Aves</option>
										<option value="Peixes">Peixes</option>
										<option value="Anfíbios">Anfíbios</option>
										<option value="Insetos">Insetos</option>
										<option value="Aracnídeos">Aracnídeos</option>
									
									</select>
								</div>
							</div>
						</div>
						<div style="text-align:center" >
				
						<button type="submit" class="btn btn-outline-success btn-lg mr-2"><i class="fas fa-plus-square"></i>
						      ATUALIZAR</button>
								  <router-link
              :to="{ name: 'experts' }"
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
import { EDIT_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "EditExpert",
  components: {
    HeaderPage
  },
  data: () => {
    return {
      expert: {}
    };
  },
  computed: {
    ...mapGetters("expert", ["getExpertById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`expert/${EDIT_EXPERT}`, this.$data.expert).then(
        () => {
          this.$alert(this.getMessage, "Expert atualizado!", "success");
          router.push({ name: "experts" });
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.expert = this.getExpertById(this.$route.params.expertId);
  }
};
</script>
