<template>
  <section class="page-section">
    <b-container>
      <HeaderPage title="Registar Expert" />

      <!--FORM-->
      <b-row>
        <b-col cols="2"></b-col>
        <b-col cols="8">
          <form @submit.prevent="add">
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
                    v-model="name"
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
                  v-model="telefone"
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtTelefone" 
                  placeholder="Telefone"
                  />
								</div>
								<div class="col-md-6">
								  <input 
                  v-model="nif"
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
                  v-model="morada"
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
                  v-model="codPostal"
                  type="text" 
                  class="form-control form-control-lg" 
                  id="txtcodPostal" 
                  placeholder="Código Postal"
                  />
								</div>
								<div class="col-md-6">
								  <input 
                  v-model="cidade"
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
                  v-model="valor"
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
                    v-model="especiliazacao"
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
						      REGISTAR</button>
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
import { ADD_EXPERT } from "@/store/experts/expert.constants";
import HeaderPage from "@/components/HeaderPage.vue";
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "AddExpert",
  components: {
    HeaderPage
  },

  data: () => {
    return {
      name: "",
      telefone: "",
      apresentacao: "",
      codPostal:"",
      creation_date:"",
      morada:"",
      nif:"",
      especializacao:""
    };
  },
  computed: {
    ...mapGetters("expert", ["getMessage"])
  },
  methods: {
    add() {
   /*   if (
        document.querySelector("#txtPassword").value !==
        document.querySelector("#txtConfirmPassword").value
      ) {
        this.$alert(
          "Campos password não coincidem",
          "Erro de validação do formulário",
          "error"
        );
      } else {*/

        const today = new Date();
        const date = today.getFullYear()+'-'
        +(today.getMonth() < 10 ?  "0" + today.getMonth() : today.getMonth())+'-'
        +(today.getDate() < 10 ?  "0" + today.getDate() : today.getDate());
        const time = (today.getHours() < 10 ?  "0" + today.getHours() : today.getHours()) + ":" 
        + (today.getMinutes() < 10 ?  "0" + today.getMinutes() : today.getMinutes()) + ":" 
        + (today.getSeconds() < 10 ?  "0" + today.getSeconds() : today.getSeconds()) ;
        const dateTime = date +' '+ time;

        this.$data.creation_date = dateTime;

        this.$store.dispatch(`expert/${ADD_EXPERT}`, this.$data).then(
          () => {
            this.$alert(this.getMessage, "Expert adicionado!", "success");
            router.push({ name: "experts" });
          },
          err => {
            this.$alert(`${err.message}`, "Erro", "error");
          }
        );
     // }
    }
  }
};
</script>
