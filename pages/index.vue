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
    <div class="container mb-5">
      <h1 class="mb-5 mt-5">ngabubur</h1>
      <div class="row">
        <div class="col-md-4 mt-5">
          <div class="card">
            <div class="card-body">
              <img src="" width="100%" height="400px" alt="" srcset="" />
            </div>
            <div class="card-header">
              <h1>judul</h1>
            </div>
            <div class="card-footer">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit asperiores at a aliquid nulla corrupti amet perferendis tempore ut aspernatur ratione, voluptate dolores eligendi sunt qui, sed ipsa! Veniam recusandae ex doloremque inventore, ea dolorum maxime nobis amet eos quidem.
              </p>
              <nuxtlink class="btn btn-dark">
                beli
              </nuxtlink>
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
};
</script>
