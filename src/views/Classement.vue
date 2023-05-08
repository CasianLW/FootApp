<template>
  <menu-component></menu-component>

  <h2 class="title" v-bind="$attrs">Classement</h2>
  <router-link
    :to="'/equipes/' + team.idTeam"
    v-for="team in list"
    :key="team.intRank"
    style="border-bottom: 1px solid grey"
  >
    <ion-card class="custom-card">
      <ion-card-content>
        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-label style="margin-bottom: 20px; display: block"
                >{{ team.intRank }} - {{ team.strTeam }}</ion-label
              >
              <img :alt="team.strTeam" :src="team.strTeamBadge" />
            </ion-col>
            <ion-col>
              <p>
                Points :
                <span style="font-weight: 600">{{ team.intPoints }}</span>
              </p>
              <p>Matchs : {{ team.intPlayed }}</p>
              <p>
                G :
                <span style="color: green">{{ team.intWin }}</span> | N:
                {{ team.intDraw }} | P :
                <span style="color: red">{{ team.intLoss }}</span>
              </p>
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-card-content>
    </ion-card>
  </router-link>
</template>

<script lang="ts">
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonGrid,
  IonLabel,
  IonRow,
} from "@ionic/vue";
import { defineComponent, ref } from "vue";
import { RouteLocationNormalizedLoaded } from "vue-router";
import MenuComponent from "@/components/MenuComponent.vue";

export default defineComponent({
  inheritAttrs: false,
  data() {
    return {
      id: "",
      list: [] as any[],
    };
  },
  components: {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCol,
    IonGrid,
    IonLabel,
    IonRow,
    MenuComponent,
  },
  methods: {
    getClassement(): void {
      fetch(
        `https://www.thesportsdb.com/api/v1/json/3/lookuptable.php?l=${this.id}&s=2022-2023`
      )
        .then((response) => response.json())
        .then((json) => {
          // console.log(json);

          this.list = json.table;
        });
    },
  },
  mounted() {
    this.id = (this.$route as RouteLocationNormalizedLoaded).params.id;
    // console.log(this.id);

    this.getClassement();
  },
});
</script>

<style scoped>
ion-item {
  --padding-start: 0;
}
ion-card,
ion-label {
  color: rgb(31, 26, 26);
  text-decoration: none;
}
.custom-card {
  --background: #ffffff;
  color: rgb(31, 26, 26);
  margin-bottom: 16px;
  border-radius: 0;
}
.title {
  width: auto;
  text-align: center;
}
</style>
