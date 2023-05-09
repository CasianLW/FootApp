<template>
  <menu-component />

  <h2 class="title">Equipes - {{ id }}</h2>
  <div class="grid">
    <router-link
      :to="{ name: 'equipe', params: { id: team.idTeam } }"
      v-for="team in list"
      :key="team.strTeam"
    >
      <ion-card class="custom-card">
        <ion-card-content>
          <ion-label style="margin-bottom: 20px; display: block"
            >{{ team.strTeam }}
          </ion-label>
          <img
            :alt="team.strTeam"
            :src="team.strTeamLogo"
            style="width: 100px"
          />
          <div
            class="country"
            style="
              width: 100%;
              text-decoration: none;
              border: transparent;
              border-bottom: 0;
              text-align: end;
            "
          >
            {{ team.strCountry }}
          </div>
        </ion-card-content>
      </ion-card>
    </router-link>
  </div>
</template>

<script lang="ts">
import MenuComponent from "@/components/MenuComponent.vue";

import {
  IonCard,
  IonPage,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/vue";
import { defineComponent } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";

export default defineComponent({
  data() {
    return {
      id: "",
      list: [] as any[],
    };
  },
  components: {
    IonCard,
    IonPage,
    MenuComponent,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  },
  methods: {
    getEquipes(): void {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=${this.id}`
      )
        .then((response) => response.json())
        .then((json) => {
          console.log(json);

          this.list = json.teams;
        });
    },
  },
  mounted() {
    this.id = (this.$route as RouteLocationNormalizedLoaded).params.id;
    console.log(this.id);

    this.getEquipes();
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}

.grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}
.custom-card {
  --background: rgb(197, 197, 197);
  color: rgb(31, 26, 26);
  margin-bottom: 16px;
  border-radius: 0;
}
.ion-label {
  color: rgb(31, 26, 26);
}
.country {
  margin-top: 8px;
}
.country::before {
  content: "🏳️";
}
</style>
