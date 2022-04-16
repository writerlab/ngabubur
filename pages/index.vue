<template>
  <main>
    <Navbar />

    <div class="container">
      <h1 class="mb-5 mt-5">ngabubur</h1>
      <div class="row mt-5 mb-5">
        <div class="col-md-4" v-for="item in items" :key="item.id">
          <div class="card mb-4">
            <div class="card-header p-0">
              <img :src="item.foto" width="100%" height="400px" alt="" srcset="" />
            </div>
            <div class="card-body">
              <div class="badge badge-danger">{{ item.kategori.kategori_produk }}</div>
              <div class="heading-5">{{ item.nama_produk }}</div>
              <h5>Rp{{ item.harga_produk }}</h5>
            </div>
            <div class="card-footer">
              <NuxtLink :to="item.link_eksternal" class="btn btn-danger btn-block"> beli </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Navbar from '../components/Navbar.vue'
export default {
  name: "IndexPage",
  components: {
    Navbar,
  },
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
        .select(`
          id, nama_produk, harga_produk, foto,
          link_eksternal, kategori(kategori_produk)
        `)

      if (data) {
        this.items = data
      }
      if (error) pass;
    },
  },
};
</script>
