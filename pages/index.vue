<template>
  <main>
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input
              size="sm"
              class="mr-sm-2"
              placeholder="Search"
            ></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit"
              >Search</b-button
            >
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>


    <div class="container">
      <h1 class="mb-5 mt-5">ngabubur</h1>
      <div class="row mt-5 mb-5">
        <div class="col-md-4" v-for="item in items" :key="item.id">
          <div class="card mb-4">
            <div class="card-body">
              <img :src="item.foto" width="100%" height="400px" alt="" srcset="" />
            </div>
            <div class="card-header">
              <strong>{{ item.nama_produk }}</strong>
              <h5>Rp{{ item.harga_produk }}</h5>
            </div>
            <div class="card-footer">
              <NuxtLink :to="item.link_eksternal" class="btn btn-dark"> beli </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      items: [],
    };
  },

  mounted() {
    this.getProducts()
  },

  methods: {
    async getProducts() {
      let { data, error } = await this.$supabase
        .from("Produk")
        .select("*");

      if (data) {
        this.items = data
        console.log(data)
      }
      if (error) pass;
    },
  },
};
</script>
