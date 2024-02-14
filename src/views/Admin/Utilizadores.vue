<template>
  <b-container fluid>

    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">

      <div class="d-flex align-items-center justify-content-between">
        <a href="index.html" class="logo d-flex align-items-center">
          <img src="assets/img/logo.png" alt="">
          <span class="d-none d-lg-block">PetyFamily Administração</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn"></i>
      </div><!-- End Logo -->


    </header><!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <router-link class="nav-link collapsed" to="/admin"><i class="bi bi-grid"></i><span>Dashboard</span></router-link>
  </li><!-- End Dashboard Nav -->

  <li class="nav-heading">Administração</li>

  <li class="nav-item">
    <router-link class="nav-link" to="/utilizadores"><i class="bi bi-person"></i><span>Utilizadores</span></router-link>
  </li><!-- End Profile Page Nav -->

  <li class="nav-item">
    <router-link class="nav-link collapsed" to="/registocaes"><i class="bi bi-list"></i><span>Registo cães</span></router-link>
  </li><!-- End Register Page Nav -->

  <li class="nav-item">
    <router-link class="nav-link collapsed" to="/"><i class="bi bi-box-arrow-in-right"></i><span>Terminar sessão</span></router-link>
  </li>
</ul>

</aside><!-- End Sidebar-->

    <main id="main" class="main">

      <div class="pagetitle">
        <h1>Utilizadores</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">utilizadores</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->

      <section class="section dashboard">
        <div class="col-xxl-4 col-xl-12"><div class="card info-card customers-card">
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Data Nascimento</th>
              <th scope="col">Descrição</th>
              <th scope="col">Data Registo</th>
              <th scope="col">Cidade</th>
              <th scope="col">Estado</th>
              <th scope="col">Operação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user of users" :key="user._id">

              <th scope="row">{{user._id}}</th>
              <td>{{user.name}}</td>
              <td>{{user.birth_date}}</td>
              <td>{{user.description}}</td>
              <td>{{user.registration_date}}</td>
              <td>{{user.location.city}}</td>
              <td>{{user.active}}</td>
              <td>
                <button
                    @click="removeUser(user._id)"
                 
                  ><span class="badge border-danger border-1 text-danger">Apagar</span> </button>

                  <router-link
                    :to="{name:'utilizadoreseditar', params:{userId: user._id}}"
                    tag="button"
                    
                  ><span class="badge border-info border-1 text-info">Editar</span></router-link>
          
                <!--<router-link to="/utilizadoreseditar"><span class="badge border-info border-1 text-info">Editar</span></router-link>-->
              </td>

            </tr>

          </tbody>
        </table>
        <div class="row"></div>
      </div>
    </div>
      </section>

  </main><!-- End #main -->

</b-container></template>

<script>
import { FETCH_USERS,REMOVE_USER } from "@/store/users/user.constants";
//import HeaderPage from "@/components/HeaderPage.vue";
import { mapGetters } from "vuex";

export default {
  name: "Utilizadores",
  components: {
   // HeaderPage
  },
  data: function() {
    return {
      users: [],
      sortType: 1
    };
  },
  computed: {
    ...mapGetters("user", ["getUsers", "getMessage"])
  },
  methods: {
    fetchUsers() {
      this.$store.dispatch(`user/${FETCH_USERS}`).then(
        () => {
          this.users = this.getUsers;
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    },
    sort() {
      this.users.sort(this.compareNames);
      this.sortType *= -1;
    },
    compareNames(u1, u2) {
      if (u1.name > u2.name) return 1 * this.sortType;
      else if (u1.name < u2.name) return -1 * this.sortType;
      else return 0;
    },
    removeUser(id) {
      this.$confirm(
        "Se sim, clique em OK",
        "Deseja mesmo remover o utilizador?",
        "warning",
        { confirmButtonText: "OK", cancelButtonText: "Cancelar" }
      ).then(
        () => {
          this.$store.dispatch(`user/${REMOVE_USER}`, id).then(() => {
            this.$alert(this.getMessage, "Utilizador removido!", "success");
            this.fetchUsers();
          });
        },
        () => {
          this.$alert("Remoção cancelada!", "Informação", "info");
        }
      );
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>