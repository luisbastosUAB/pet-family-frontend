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
        <h1>Cães</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Editar Cão</li>
          </ol>
        </nav>
      </div><!-- End Page Title -->

      <section class="section dashboard">
        <div class="card">
            <div class="card-body pt-3">

              <div class="tab-pane fade profile-edit pt-3 active show" id="profile-edit" role="tabpanel">

<!-- Profile Edit Form -->
<form @submit.prevent="update">
  <div class="row mb-3">
    <label for="profileImage" class="col-md-4 col-lg-3 col-form-label">Imagem de perfil</label>
    <div class="col-md-8 col-lg-9">
      <img src="../../assets/avatars/sapo.png" style="max-width: 10%;" alt="Profile">
      <!--<div class="pt-2">
        <a href="#" class="btn btn-primary btn-sm" title="Upload new profile image"><i class="bi bi-upload"></i></a>
        <a href="#" class="btn btn-danger btn-sm" title="Remove my profile image"><i class="bi bi-trash"></i></a>
      </div>-->
    </div>
  </div>

  <div class="row mb-3">
    <label for="name" class="col-md-4 col-lg-3 col-form-label">Nome</label>
    <div class="col-md-8 col-lg-9 form-group">
      <input name="name" v-model="dog.name" type="text" class="form-control" id="name" value="Kevin Anderson">
    </div>
  </div>
<!--
  <div class="row mb-3">
    <label for="description" class="col-md-4 col-lg-3 col-form-label">Descrição</label>
    <div class="col-md-8 col-lg-9 form-group">
      <textarea name="description" v-model="dog.description" class="form-control" id="description" style="height: 100px"></textarea>
    </div>
  </div>


  <div class="row mb-3">
    <label for="usertype" class="col-md-4 col-lg-3 col-form-label">Tipo utilizador</label>
    <div class="col-md-8 col-lg-9 form-group">
      <select id="usertype" class="form-control form-control-lg" v-model="user.type">
                <option value>-- Seleccionar tipo utilizador --</option>
                <option value="user">Utilizador</option>
                <option value="admin">Administrador</option>
      </select>
    </div>
  </div>
-->
  <div class="row mb-3">
    <label for="active" class="col-md-4 col-lg-3 col-form-label">Ativo</label>
    <div class="col-md-8 col-lg-9 form-group">
      <select id="active" class="form-control form-control-lg" v-model="dog.active">
                <option value>-- Utilizador ativo --</option>
                <option value="true">SIM</option>
                <option value="false">NÃO</option>
      </select>
    </div>
  </div>
<!--
  <div class="row mb-3">
    <label for="Country" class="col-md-4 col-lg-3 col-form-label">Cidade</label>
    <div class="col-md-8 col-lg-9">
      <input name="country" type="text" class="form-control" id="Country" v-model="user.location.city">
    </div>
  </div>
-->
  <div class="text-center">
    <button type="submit" class="btn btn-primary">Guardar</button>
  </div>
</form><!-- End Profile Edit Form -->

</div>
            </div>
          </div>
      </section>

  </main><!-- End #main -->

</b-container></template>

<script>
import { EDIT_DOG } from "@/store/dogs/dog.constants";
//import HeaderPage from "@/components/HeaderPage.vue"
import router from "@/router";
import { mapGetters } from "vuex";

export default {
  name: "caoeditar",
  components: {
    //HeaderPage
  },
  data: () => {
    return {
      dog: {}
    };
  },
  computed: {
    ...mapGetters("dog", ["getDogsById", "getMessage"])
  },
  methods: {
    update() {
      this.$store.dispatch(`dog/${EDIT_DOG}`, this.$data.dog).then(
        () => {
          this.$alert(
            this.getMessage,
            "Cão atualizado!",
            "success"
          );
          router.push({name: 'registocaes'});
        },
        err => {
          this.$alert(`${err.message}`, "Erro", "error");
        }
      );
    }
  },
  created() {
    this.dog = this.getDogsById(this.$route.params.dogId);
  }
};
</script>
